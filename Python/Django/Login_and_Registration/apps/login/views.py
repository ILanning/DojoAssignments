from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User

def index(request):
    return render(request, "login/index.html")

def login(request):
    errors = User.objects.login(request.POST)

    if isinstance(errors, list) and len(errors) == 0:
        for error in errors:
            messages.error(error)
        return redirect('/')
    else
        return redirect("/success")

def createUser(request):
    errors = User.objects.login(request.POST)

    if isinstance(errors, list) and len(errors) == 0:
        for error in errors:
            messages.error(error)
        return redirect('/')
    else
        return redirect("/success")

def success(request):
    return render(request, "login/success.html")
