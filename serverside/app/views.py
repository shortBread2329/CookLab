from rest_framework import generics
from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.generics import RetrieveAPIView
import itertools
from rest_framework.response import Response
from rest_framework.decorators import action

class SearchTodo(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filter_class = RecipeFilter

    #post 追加処理のレスポンスを実装します。
    @action(detail=True, methods=['options'])
    def test(self, request):
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            return Response({'status': 'password set'})
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

class TestJoin(viewsets.ModelViewSet):
    def list(self, request):
        # この下の二行こぴったけどどんな動きなのか調べときましょうね
        queryset = list(itertools.chain(
            Recipe.objects.all(), 
            # User.objects.all(), 
            Ingredient.objects.all()))
        
        serializer = RecipeSerializer(queryset, many=True)
        return Response(serializer.data)

class IngredientView(viewsets.ModelViewSet):
    serializer_class = IngredientSerializer
    queryset = Ingredient.objects.all()

class StepView(viewsets.ModelViewSet):
    serializer_class = StepSerializer
    queryset = Step.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = StepSerializer
    queryset = User.objects.all()

#20210206作りました。ListSerializerというものでシリアライザーを作れば複数モデルもらくにたいおうできるんじゃないか作戦でした。
#情報が少ないですよね。海外公式サイトが見れるようになりたいですよね。
class LsTestView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = LsTestSerializer

# 20201024今日は各modelとビューを作っていこうと思いますよ

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