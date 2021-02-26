from django.db import models

#　ユーザーテーブル
class User(models.Model):
    accountname = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    #有効フラグ
    validFlag = models.BooleanField(default=True)
    def __str__(self):
        """A string representation of the model."""
        return self.accountname

class Recipe(models.Model):
    #レシピ名
    name = models.CharField(max_length=100)
    #作ったuserid
    usersId = models.ForeignKey(User, to_field='id', on_delete=models.PROTECT)
    #有効フラグ
    validFlag = models.BooleanField(default=True)

    def __str__(self):
        """A string representation of the model."""
        return self.name

# 材料名テーブル
class Ingredient(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.CharField(max_length=50)
    #有効フラグ
    validFlag = models.BooleanField(default=True)
    def __str__(self):
        """A string representation of the model."""
        return self.name

# 材料テーブル
class Ingredients(models.Model):
    # id= models.IntegerField(11)
    recipeId = models.ForeignKey(Recipe, to_field='id', on_delete=models.PROTECT)
    ingredientId = models.ForeignKey(Ingredient, to_field='id', on_delete=models.PROTECT)
    #有効フラグ
    validFlag = models.BooleanField(default=True)
    def __str__(self):
        """A string representation of the model."""
        return self.recipeId

# 作り方テーブル
class Step(models.Model):
    text = models.CharField(max_length=200)
    #有効フラグ
    validFlag = models.BooleanField(default=True)
    def __str__(self):
        """A string representation of the model."""
        return self.text

# 作り方テーブル
class Steps(models.Model):
    recipeId = models.ForeignKey(Recipe, to_field='id', on_delete=models.PROTECT)
    stepId = models.ForeignKey(Step, to_field='id', on_delete=models.PROTECT)
    stepNo = models.IntegerField(default=True)
    #有効フラグ
    validFlag = models.BooleanField(default=True)
    def __str__(self):
        """A string representation of the model."""
        return self.recipeId
