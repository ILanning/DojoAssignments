from __future__ import unicode_literals
from django.db import models
import bcrypt, re

emailRegex = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

class UserManager(models.Manager):
    def AddUser(self, postData):
        result = {
            "valid" : True,
            "messages" : []
        }
        messages = result["messages"]

        #Validations
        if len(postData["first_name"]) == 0:
            messages.append("First name not given!")
        if len(postData["last_name"]) == 0:
            messages.append("Last name not given!")

        if len(postData["email"]) == 0:
            messages.append("Email not given!")
        elif not emailRegex.match(postData["email"]):
            messages.append("Given email was not valid!")
        elif len(User.filter(email = postData["email"])) != 0:
            messages.append("An account under this address already exists!")

        if len(postData["password"]) == 0:
            messages.append("Password not given!")
        elif len(postData["password"]) < 8:
            messages.append("Password not long enough!")
        elif len(postData["passconf"]) == 0:
            messages.append("Password confirmation not given!")
        elif postData["password"] != postData["passconf"]:
            messages.append("Password confirmation does not match password!")

        if len(messages) == 0:
            user = User(first_name = postData["first_name"], last_name = postData["last_name"], email = postData["email"], password = bcrypt.hashpw(postData["password"].encode(), bcrypt.gensalt()))
            user.save()
            result["id"] = user.id
        else:
            result["valid"] = False

        return result

    def LoginUser(self, postData):
        result = {
            "valid" : True,
            "messages" : []
        }
        messages = result["messages"]

        #Validations
        if len(postData["email"]) == 0:
            messages.append("Email not given!")
        if len(postData["password"]) == 0:
            messages.append("Password not given!")
        elif len(messages) == 0:
            user = self.filter(email = postData["email"])
            if len(user) == 0:
                messages.append("That account doesn't exist!")
            else:
                user = user[0]
                if user.password == bcrypt.hashpw(postData["password"].encode(), user.password):
                    result["id"] = user.id
                else:
                    messages.append("Password incorrect!")

        if len(messages) != 0:
            result["valid"] = False
        return result

class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 60)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = UserManager()
