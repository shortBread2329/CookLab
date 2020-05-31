from django.db import models

# Create your models here.
class Recipe(models.Model):
    # #レシピID
    # id = models.CharField(max_length=20)
    #レシピ名
    name = models.CharField(max_length=200)
    #材料Id
    IngredientsId = models.CharField(
        max_length=20,
        default='')
    #作り方Id
    stepId = models.CharField(
        max_length=20,
        default='')
    #作ったuserid
    userId = models.CharField(
        max_length=20,
        default='')
    status = models.CharField(default='Unstarted', max_length=100)

    def __str__(self):
        """A string representation of the model."""
        return self.name