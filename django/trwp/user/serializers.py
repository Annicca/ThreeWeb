from rest_framework import serializers 
from .models import Profile 
from django.contrib.auth import authenticate

class ProfileSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Profile 
        fields = ['id', 'login', 'password', 'role', 'img'] 
        extra_kwargs = { 
            'password': {'write_only': True}, 
            'role': {'default': 'CLIENT'}, 
            'img': {'required': False}, 
        } 
        
    def create(self, validated_data): 
        user = Profile.objects.create_user( 
            login=validated_data['login'],  
            password=validated_data['password'],
            role=validated_data.get('role', 'CLIENT'), 
            img=validated_data.get('img', None) 
        ) 

        return user
    
    def update(self, instance, validated_data): 
        instance.login = validated_data.get('login', instance.login) 
        instance.role = validated_data.get('role', instance.role) 
        instance.img = validated_data.get('img', instance.img) 
        password = validated_data.get('password', None) 
        
        if password: 
            instance.set_password(password) 
        instance.save() 
        return instance

class ProfileLoginSerializer(serializers.Serializer):
    login = serializers.CharField()
    password = serializers.CharField()
    class Meta:
        model = Profile
        fields = ['login', 'password']

    def validate(self, attrs):
        login = attrs.get('login')
        password = attrs.get('password')

        user = authenticate(request=self.context.get('request'), username=login, password=password)

        if not user:
            raise serializers.ValidationError({"status": "error", "message": "Login or password doesn't match. Please try again."})

        return attrs

