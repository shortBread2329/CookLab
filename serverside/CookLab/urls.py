from django.urls import path,include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('app/', app.index),    
    # path('', app.index),    
    path('api/', include('app.urls')),        
]
