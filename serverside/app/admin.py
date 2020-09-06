
from django.contrib import admin

# from .models import Recipe,Ingredients
from . import models
admin.site.register(models.Recipe)
admin.site.register(models.Ingredients)
admin.site.register(models.Ingredient)
admin.site.register(models.Steps)
admin.site.register(models.Step)
admin.site.register(models.User)

