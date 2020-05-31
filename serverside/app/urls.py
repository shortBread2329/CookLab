from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="app"),    
    path('app/', views.index, name="app"),    
]
