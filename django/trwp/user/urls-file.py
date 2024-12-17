from django.urls import path 
from .views import ProfileImageView

urlpatterns = [ 
    path('<str:id>/avatar/', ProfileImageView.as_view(), name='upload'),
    path('<str:id>/avatar/download/', ProfileImageView.as_view(), name='download'),
]
    