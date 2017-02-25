from __future__ import unicode_literals
from django.db import models
from ..courses.models import Course
import bcrypt
import re

nameRegex = re.compile(r"^[a-zA-Z]+$")
emailRegex = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")
passRegex = re.compile(r"^")

class UserManager(models.Manager):
    def AddUser(self, postData):
        errors = []
        """
        #validate
        if len(postData["first_name"]) == 0:
            errors.append("First name must not be left blank")
        else:
            if len(postData["first_name"]) < 2:
                errors.append("First name not long enough")
            if not nameRegex.match(postData["first_name"]):
                errors.append("First name must contain only letters")

        if len(postData["last_name"]) == 0:
            errors.append("Last name must not be left blank")
        else:
            if len(postData["last_name"]) < 2:
                errors.append("Last name not long enough")
            if not nameRegex.match(postData["last_name"]):
                errors.append("Last name must contain only letters")

        if len(postData["email"]) == 0:
            errors.append("Email must not be left blank")
        elif not emailRegex.match(postData["email"]):
                errors.append("The given email address was not valid")

        if len(postData["password"]) == 0:
            errors.append("Password must not be left blank")
        elif len(postData["password"]) < 8:
            error.append("Password must be at least 8 characters long")
        if len(postData["passconf"]) == 0:
            errors.append("Password confirmation must not be left blank")
        elif postData["passconf"] != postData["password"]:
            errors.append("Password and password confirmation did not match")
        """
        if errors:
            return errors
        else:
            password = bcrypt.hashpw(postData["password"].encode(), bcrypt.gensalt())
            return self.create(first_name = postData["first_name"], last_name = postData["last_name"], email = postData["email"], password = password)

    def Login(self, postData):
        errors = []
        user = None
        #validate
        if len(postData["email"]) == 0:
            errors.append("Must include an email address")
        elif not emailRegex.match(postData["email"]):
            errors.append("Not a valid email address")
        else:
            user = self.filter(email = postData["email"])
            if not user:
                errors.append("Email address not registered")
            else:
                if bcrypt.hashpw(postData["password"].encode(), user[0].password.encode()) != user[0].password:
                    errors.append("Incorrect password")

        if errors:
            return errors
        else:
            return user

    def AddCourse(self, userID, courseID):
        self.get(id = userID).courses.add(Course.objects.get(id = courseID))

class User(models.Model):
    email = models.CharField(max_length = 255)
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    password = models.CharField(max_length = 60)
    courses = models.ManyToManyField(Course, related_name = "users_of")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = UserManager()
