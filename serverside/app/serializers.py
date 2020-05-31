# todos/serializers.py
from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'IngredientsId',
            'stepId',
            'userId',
            'status',
        )
        model = Recipe