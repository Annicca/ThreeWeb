from rest_framework import generics, status 
from rest_framework.response import Response 
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from .models import Profile 
from django.http import HttpResponse
from .serializers import ProfileSerializer, ProfileLoginSerializer
from .decorators import role_required
from django.utils.decorators import method_decorator
import mimetypes
import uuid 
import os

class RegisterView(APIView): 
    serializer_class = ProfileSerializer 
    
    def post(self, request): 
        try:
            serializer = ProfileSerializer(data=request.data) 
            serializer.is_valid(raise_exception=True) 
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            img_url = user.img.url if user.img else None
            return Response({ 
                'token': str(refresh.access_token), 
                'user': { 
                    'id': user.id, 
                    'login': user.login,
                    'role': user.role, 
                    'img': img_url, 
                } 
            }) 
        except:
            return Response(status=401)

        
        
class LoginView(APIView): 
    serializer_class = ProfileLoginSerializer 
    def post(self, request, *args, **kwargs): 
        serializer = ProfileLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            login = serializer.validated_data.get('login') 
            password = serializer.validated_data.get('password')
            
            user = authenticate(request=request, username=login, password=password)
            
            if user is not None:
                refresh = RefreshToken.for_user(user)
                img_url = user.img.url if user.img else None
                return Response({ 
                    'token': str(refresh.access_token), 
                    'user': { 
                        'id': user.id, 
                        'login': user.login, 
                        'role': user.role, 
                        'img': img_url 
                    } 
                })
            else:
                return Response({}, status=401)
        else:
                return Response({}, status=401)

class ProfileImageView(generics.GenericAPIView): 
    serializer_class = ProfileSerializer 
    
    @method_decorator(role_required(allowed_roles=['CLIENT']))
    def patch(self, request, *args, **kwargs): 
        profile = self.get_object() 
        img = request.FILES.get('img') 

        if not img:
            return Response({'error': 'Файл пуст, пожалуйста, загрузите другой или повторите попытку'}, status=404)
        
        if img: 
            if not self.is_valid_image_format(img):
                return Response({'error': 'Неверный формат файла, загрузите другой файл'}, status=404)
            unique_filename = self.generate_unique_filename(img.name)
            profile.img.save(unique_filename, img)
        profile.save() 
        return Response({}, status=200) 

    @method_decorator(role_required(allowed_roles=['ADMIN']))   
    def get(self, request, *args, **kwargs): 
        profile = self.get_object() 
        img_path = profile.img.path 
        img_name = profile.img.name 
        
        with open(img_path, 'rb') as f: 
            file_data = f.read() 
        
        response = HttpResponse(file_data, content_type=mimetypes.guess_type(img_path)[0]) 
        response['Content-Disposition'] = f'attachment; filename="{img_name}"' 
        
        return response 
        
    def get_object(self): 
        return Profile.objects.get(id=self.kwargs['id'])

    def generate_unique_filename(instance, filename): 
        ext = filename.split('.')[-1] 
        new_filename = f"{uuid.uuid4()}.{ext}" 
        return os.path.join(new_filename)
    
    def is_valid_image_format(img): 
        try: 
            image = Image.open(img) 
            return image.format in ['JPEG', 'PNG', 'JPG', 'WEBP'] 
        except IOError: 
            return False
       

