# todos/serializers.py
from django_filters import rest_framework as filters
from rest_framework import serializers
from .models import Recipe

# DBとのシリアライズを担当
class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = (
            'id',
            'name',
            'ingredientsId',
            'stepId',
            'userId',
            'validFlag',
        )

class RecipeFilter(filters.FilterSet):
    # 部分一致（lookup_expr='contains'）
    name = filters.CharFilter(lookup_expr='contains')
    class Meta:
        model = Recipe
        fields = (
            'id',
            'name',
            # 'ingredientsId',
            # 'stepId',
            # 'userId',
            'validFlag',
        )
