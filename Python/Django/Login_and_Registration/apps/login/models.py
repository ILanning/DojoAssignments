from __future__ import unicode_literals
from django.db import models
import bcrypt

class UserManager(models.Manager):
    def AddUser(self, postData):
        errors = []

        #validate



        if errors:
            return errors
        else:
            password = bcrypt.hashpw(postData["password"], bcrypt.gensalt())
            result = User(first_name = postData["first_name"], last_name = postData["last_name"], email = postData["email"], password = password)
            result.save()
            return result

    def Login(self, postData):
        errors = []

        #validate

        if errors:
            return errors

class User(models.Model):
    email = models.CharField(max_length = 255)
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    password = models.CharField(max_length = 60)
    created_at = DateTimeField(auto_now_add = True)
    updated_at = DateTimeField(auto_now = True)
