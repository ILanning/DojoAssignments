from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User

def index(request):
    context = { "return_page" : "Login:Register" }
    return render(request, "login/register.html", context)

def addUser(request):
    result = User.objects.AddUser(request.POST)
    print result["messages"]
    print result
    if result["valid"]:
        request.session["user_id"] = result["id"]
        return redirect(request.POST["return_page"])
    else:
        for message in result["messages"]:
            messages.error(request, message)
        return redirect("Login:Register")

def login(request):
    result = User.objects.LoginUser(request.POST)
    if result["valid"]:
        request.session["user_id"] = result["id"]
    else:
        for message in result["messages"]:
            messages.error(request, message)
    return redirect(request.POST["return_page"])

def logout(request):
    request.session.pop("id")
    return redirect(request.POST["return_page"])
