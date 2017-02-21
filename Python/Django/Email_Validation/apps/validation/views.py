from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Email
import re

emailRegex = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

def index(request):
    context = {
        "emails" : Email.objects.order_by("-id")
    }
    return render(request, "validation/index.html", context)

def addAddress(request):
    address = request.POST["address"]
    if(emailRegex.match(address)):
        email = Email(address = address)
        request.session["email"] = email.address
        email.save()
        return redirect('/')
    else:
        messages.add_message(request, messages.ERROR, "The email address was not valid!")
        return redirect('/')

def removeAddress(request):
    Email.objects.get( id = request.POST["id"]).delete()
    return redirect('/')
