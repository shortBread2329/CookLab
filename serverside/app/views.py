from rest_framework import generics
from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.generics import RetrieveAPIView

class SearchTodo(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filter_class = RecipeFilter

class TestJoin(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()
    # filter_class = IngredientsFilter
    # queryset = Ingredients.objects.select_related('recipeId').all()
    # queryset = Recipe.objects.all()

    # queryset = Ingredient.objects.all()
    # serializer_class = IngredientSerializer

    # queryset = Ingredients.objects.all()
    # serializer_class = IngredientsSerializer


# class ListTodo(generics.ListAPIView):
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer
# class DetailTodo(generics.ListAPIView):
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer
# class SearchTodo(viewsets.ModelViewSet):
#     # select_relatedで結合取得
#     # queryset = Recipe.objects.all()
#     queryset = Recipe.objects.all().prefetch_related().all()
#     # select_related(Ingredient).all()
#     serializer_class = RecipeSerializer
#     filter_class = RecipeFilter