# todos/serializers.py
from django_filters import rest_framework as filters
from rest_framework.serializers import * 
from .models import *

class UnitSerializer(ModelSerializer):
    class Meta:
        model = Unit
        fields = "__all__"

class UnitFilter(filters.FilterSet):
    # 部分一致（lookup_expr='contains'）
    name = filters.CharFilter(lookup_expr='contains')
    class Meta:
        model = Unit
        fields = "__all__"

class IngredientsSerializer(ModelSerializer):
    name = SerializerMethodField()
    quantity = SerializerMethodField()
    unitId = SerializerMethodField()
    unitName = SerializerMethodField()
    class Meta:
        model = Ingredients
        fields = [
            "recipeId",
            "ingredientId",
            "ingredientGroup",
            "name",
            "quantity",
            "unitId",
            "unitName",
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
    def get_unitId(self, obj):
        try:
            contents = obj.ingredientId.name
            return contents
        except:
            contents = None
            return contents
    def get_unitName(self, obj):
        try:
            contents = obj.unit.name
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
    # ingredientName = SerializerMethodField()
    class Meta:
        model = Ingredient
        fields = [
            "id",
            "name",
            "quantity",
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
            "recipeId",
            "stepId",
            "stepNo",
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
    # StepName = SerializerMethodField()
    class Meta:
        model = Step
        fields = [
            "id",
            "text",
        ]

class StepFilter(filters.FilterSet):
    # 部分一致（lookup_expr='contains'）
    name = filters.CharFilter(lookup_expr='contains')
    class Meta:
        model = Step
        fields = "__all__"

# DBとのシリアライズを担当
class RecipeSerializer(ModelSerializer):
    ingredient = SerializerMethodField()
    step = SerializerMethodField()

    class Meta:
        model = Recipe
        # fields = "__all__"
        fields = [
            "id",
            "name",
            "usersId",
            # "ingredients_recipeId",
            "ingredient",
            "step",
            # "stepId",
        ]
        
    # def create(self, validated_date):
    #     validated_date['step'] = validated_date.get('stepId', None)
    #     if validated_date['step'] is None:
    #         raise ValidationError("step not found.") 
    #     del validated_date['stepId']
    #     return Recipe.objects.create(**validated_date)

    def get_ingredient(self, obj):
        try:
            # contents = IngredientsSerializer(Ingredients.objects.all().filter(recipeId = Ingredients.objects.get(id=obj.id)), many=True).data
            contents = IngredientsSerializer(Ingredients.objects.all()
                .filter(recipeId = Recipe.objects.get(id=obj.id).order_by('ingredientGroup')), many=True).data
            #↑ここを"Comment.objects.all().filter(target_article = Article.objects.get(id=obj.id)"
            #とだけにすると、"Item is not JSON serializable"というエラーが出ますので
            #Serializer(出力させたいもの).data　という処理が必要です。
            return contents
        except:
            contents = None
            return contents

    def get_step(self, obj):
        try:
            contents = StepsSerializer(
                Steps.objects.all().filter(recipeId = Recipe.objects.get(id=obj.id))
                .order_by('stepNo'), many=True).data
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
