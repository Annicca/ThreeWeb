from django.http import HttpResponseForbidden 
from rest_framework_simplejwt.tokens import AccessToken 
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError 
from rest_framework_simplejwt.authentication import JWTAuthentication

def role_required(allowed_roles=[]): 
    def decorator(view_func): 
        def _wrapped_view(request, *args, **kwargs): 
            auth_header = request.headers.get('Authorization')
            if not auth_header: 
                return HttpResponseForbidden("Unauthorized!") 
            try: 
                token_str = auth_header.split(' ')[1] 
                token = AccessToken(token_str) 
                user = JWTAuthentication().get_user(token)
                if user.role not in allowed_roles: 
                    return HttpResponseForbidden("Unauthorized!") 
                return view_func(request, *args, **kwargs) 
            except: 
                return HttpResponseForbidden("Invalid token.") 
        return _wrapped_view 
    return decorator