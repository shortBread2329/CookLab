from rest_framework import generics
from rest_framework import viewsets
from .models import Recipe
from .serializers import RecipeSerializer,RecipeFilter

class ListTodo(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
class DetailTodo(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
class SearchTodo(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filter_class = RecipeFilter