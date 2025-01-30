from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Profile
from PIL import Image
import uuid
import os
import io

class UserService:
    def register_user(data):
        from .serializers import ProfileSerializer
        serializer = ProfileSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        img_url = user.img.url if user.img else None
        return {
            'token': str(refresh.access_token),
            'user': {
                'id': user.id,
                'login': user.login,
                'role': user.role,
                'img': img_url,
            }
        }

    def login_user(data):
        from .serializers import ProfileLoginSerializer
        serializer = ProfileLoginSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        login = serializer.validated_data.get('login')
        password = serializer.validated_data.get('password')
        user = authenticate(username=login, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            img_url = user.img.url if user.img else None
            return {
                'token': str(refresh.access_token),
                'user': {
                    'id': user.id,
                    'login': user.login,
                    'role': user.role,
                    'img': img_url,
                }
            }
        return None

    def update_profile_image(profile, img):
        if not FileService.is_valid_img_format(img):
            return 'Неверный формат файла, загрузите другой файл'

        unique_filename = FileService.generate_unique_filename(img.name)
        profile.img.save(unique_filename, img)
        profile.save()
        return None

class FileService:
    def generate_unique_filename(filename):
        ext = filename.split('.')[-1]
        new_filename = f"{uuid.uuid4()}.{ext}"
        return os.path.join(new_filename)

    def is_valid_img_format(img):
        try:
            format = Image.open(io.BytesIO(img.read())).format
            if format not in ['JPEG', 'PNG', 'JPG', 'WEBP']:
                return False
            return True
        except IOError:
            return False
