from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.utils.decorators import method_decorator
from django.http import HttpResponse
from .decorators import role_required
from .models import Profile
from .services import UserService
import mimetypes

class RegisterView(APIView):
    def post(self, request):
        try:
            response_data = UserService.register_user(request.data)
            return Response(response_data)
        except Exception as e:
            return Response(status=401)

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        response_data = UserService.login_user(request.data)
        if response_data:
            return Response(response_data)
        return Response({}, status=401)

class ProfileImageView(generics.GenericAPIView):
    @method_decorator(role_required(allowed_roles=['CLIENT']))
    def patch(self, request, *args, **kwargs):
        profile = self.get_object()
        img = request.FILES.get('img')
        if not img:
            return Response('Файл пуст, пожалуйста, загрузите другой или повторите попытку', status=404)
        error = UserService.update_profile_image(profile, img)
        if error:
            return Response(error, status=404)
        return Response(status=200)

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