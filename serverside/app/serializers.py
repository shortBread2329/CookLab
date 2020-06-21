# todos/serializers.py
from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'IngredientsId',
            'stepId',
            'userId',
            'status',
        )
        model = Recipe