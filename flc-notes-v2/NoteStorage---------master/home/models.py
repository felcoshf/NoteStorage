from django.db import models

# Create your models here.
class Marks(models.Model):
    mark_name = models.CharField(max_length=200, default='text')
    mark_body = models.CharField(max_length=1000, default='text')
    erased = models.BooleanField(default=False)
