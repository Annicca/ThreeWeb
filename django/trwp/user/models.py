from django.db import models 
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager 

class ProfileManager(BaseUserManager): 
    def create_user(self, login, password=None, **extra_fields): 
        if not login: 
            raise ValueError("The Login field must be set") 
        user = self.model(login=login, password=password, **extra_fields) 
        user.set_password(password)
        user.save(using=self._db) 
        return user 
        
    def create_superuser(self, login, password=None, **extra_fields): 
        extra_fields.setdefault('role', 'ADMIN') 
        return self.create_user(login, password, **extra_fields) 
        
class Profile(AbstractBaseUser): 
    ROLE_CHOICES = ( 
        ('ADMIN', 'Admin'), 
        ('CLIENT', 'Client'), 
    ) 
    
    login = models.CharField(max_length=200, unique=True) 
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='CLIENT') 
    img = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    
    objects = ProfileManager() 
    
    USERNAME_FIELD = 'login'
    REQUIRED_FIELDS = [] 
    
    def __str__(self): 
        return self.login