from django.db import models

#　ユーザーテーブル
class User(models.Model):
    accountname = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    #有効フラグ
    validFlag = models.BooleanField(default=False)

class Recipe(models.Model):
    # #レシピID
    # id = models.CharField(max_length=20)
    #レシピ名
    name = models.CharField(max_length=100)
    #材料Id
    # ingredientsId = models.IntegerField(11)
    # # 紐付いている情報が存在する場合には削除しない
    # ingredientsId = models.OneToOneField(Ingredients, to_field='id', on_delete=models.PROTECT)
    # #作り方Id
    # stepsId = models.OneToOneField(Steps, to_field='id', on_delete=models.PROTECT)
    #作ったuserid
    usersId = models.ForeignKey(User, to_field='id', on_delete=models.PROTECT)
    #有効フラグ
    validFlag = models.BooleanField(default=False)
    # CharField(default='Unstarted', max_length=9)

    def __str__(self):
        """A string representation of the model."""
        return self.name

# 材料名テーブル
class Ingredient(models.Model):
    # id= models.IntegerField(11)
    name = models.CharField(max_length=100)
    quantity = models.CharField(max_length=50)
    #有効フラグ
    validFlag = models.BooleanField(default=False)

# 材料テーブル
class Ingredients(models.Model):
    # id= models.IntegerField(11)
    recipeId = models.ForeignKey(Recipe, to_field='id', on_delete=models.PROTECT)
    ingredientId = models.ForeignKey(Ingredient, to_field='id', on_delete=models.PROTECT)
    #有効フラグ
    validFlag = models.BooleanField(default=False)

# 作り方テーブル
class Step(models.Model):
    text = models.CharField(max_length=200)
    #有効フラグ
    validFlag = models.BooleanField(default=False)

# 作り方テーブル
class Steps(models.Model):
    recipeId = models.ForeignKey(Recipe, to_field='id', on_delete=models.PROTECT)
    stepId = models.ForeignKey(Step, to_field='id', on_delete=models.PROTECT)
    #有効フラグ
    validFlag = models.BooleanField(default=False)

