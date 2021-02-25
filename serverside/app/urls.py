from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'search', views.SearchTodo)
router.register(r'ingredient', views.IngredientView)
router.register(r'step', views.StepView)
router.register(r'steps', views.StepsView)
# router.register(r'insert', views.LsTestView)
# router.register(r'user', views.UserView)
router.register(r'otamesi', views.TestJoin,basename='Recipe')
urlpatterns = router.urls
