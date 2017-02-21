from __future__ import unicode_literals
from django.db import models

class Course(models.Model):
    name = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Description(models.Model):
    text = models.TextField()
    course = models.OneToOneField(Course, models.CASCADE)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Comment(models.Model):
    text = models.TextField()
    course = models.ForeignKey(Course)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
