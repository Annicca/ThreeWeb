from django.contrib.auth.backends import ModelBackend 
from .models import Profile 

class CustomAuthBackend(ModelBackend): 
    def authenticate(self, request, username=None, password=None, **kwargs): 
        try: 
            user = Profile.objects.get(login=username) 
            if user.check_password(password): 
                return user 
        except Profile.DoesNotExist: 
            return None