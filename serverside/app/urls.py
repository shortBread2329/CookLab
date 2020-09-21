from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'search', views.SearchTodo)
# router.register(r'test', views.TestJoin)x
urlpatterns = router.urls
