from __future__ import unicode_literals
from django.db import models
from ..login.models import User

class Secret(models.Model):
    user = models.ForeignKey(User)
    text = models.CharField(max_length = 255)
    likes = models.ManyToManyField(User, through="Like", related_name="liked_by")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Like(models.Model):
    user_id = models.ForeignKey(User)
    secret_id = models.ForeignKey(Secret)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
