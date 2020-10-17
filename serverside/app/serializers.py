# todos/serializers.py
from django_filters import rest_framework as filters
from rest_framework.serializers import * 
from .models import *

# DBとのシリアライズを担当
class RecipeSerializer(ModelSerializer):
    ingredientId = SerializerMethodField()
    stepId = SerializerMethodField()
    class Meta:
        model = Recipe
        # fields = "__all__"
        fields = [
            "id",
            "name",
            "validFlag",
            "usersId",

            # "recipeId",
            "ingredientId",
            "stepId",
        ]

    def get_ingredientId(self, obj):
        try:
            # contents = IngredientsSerializer(Ingredients.objects.all().filter(recipeId = Ingredients.objects.get(id=obj.id)), many=True).data
            contents = IngredientsSerializer(Ingredients.objects.all().filter(recipeId = Recipe.objects.get(id=obj.id)), many=True).data
            #↑ここを"Comment.objects.all().filter(target_article = Article.objects.get(id=obj.id)"
            #とだけにすると、"Item is not JSON serializable"というエラーが出ますので
            #Serializer(出力させたいもの).data　という処理が必要です。
            return contents
        except:
            contents = None
            return contents

    def get_stepId(self, obj):
        try:
            contents = StepsSerializer(Steps.objects.all().filter(recipeId = Recipe.objects.get(id=obj.id)), many=True).data
            return contents
        except:
            contents = None
            return contents

class RecipeFilter(filters.FilterSet):
    # 部分一致（lookup_expr='contains'）
    name = filters.CharFilter(lookup_expr='contains')
    class Meta:
        model = Recipe
        fields = "__all__"

class IngredientsSerializer(ModelSerializer):
    name = SerializerMethodField()
    quantity = SerializerMethodField()
    class Meta:
        model = Ingredients
        fields = [
            "ingredientId",
            "validFlag",
            "name",
            "quantity",
        ]
    def get_name(self, obj):
        try:
            contents = obj.ingredientId.name
            return contents
        except:
            contents = None
            return contents
    def get_quantity(self, obj):
        try:
            contents = obj.ingredientId.quantity
            return contents
        except:
            contents = None
            return contents

class IngredientsFilter(filters.FilterSet):
    # 部分一致（lookup_expr='contains'）
    name = filters.CharFilter(lookup_expr='contains')
    class Meta:
        model = Ingredients
        fields = "__all__"

class IngredientSerializer(ModelSerializer):
    ingredientName = SerializerMethodField()
    class Meta:
        model = Ingredient
        fields = [
            "id",
            "name",
            "quantity",
            "validFlag",
        ]

class IngredientFilter(filters.FilterSet):
    # 部分一致（lookup_expr='contains'）
    name = filters.CharFilter(lookup_expr='contains')
    class Meta:
        model = Ingredient
        fields = "__all__"

class StepsSerializer(ModelSerializer):
    stepText = SerializerMethodField()
    class Meta:
        model = Steps
        # fields = "__all__"
        fields = [
            # "recipeId",
            "stepId",
            "validFlag",
            "stepText",
        ]
    def get_stepText(self, obj):
        try:
            contents = obj.stepId.text
            return contents
        except:
            contents = None
            return contents

class StepsFilter(filters.FilterSet):
    # 部分一致（lookup_expr='contains'）
    name = filters.CharFilter(lookup_expr='contains')
    class Meta:
        model = Steps
        fields = "__all__"

class StepSerializer(ModelSerializer):
    StepName = SerializerMethodField()
    class Meta:
        model = Step
        fields = [
            "id",
            "text",
            "validFlag",
        ]

class StepFilter(filters.FilterSet):
    # 部分一致（lookup_expr='contains'）
    name = filters.CharFilter(lookup_expr='contains')
    class Meta:
        model = Step
        fields = "__all__"

