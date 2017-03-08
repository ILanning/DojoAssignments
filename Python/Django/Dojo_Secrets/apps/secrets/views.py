from django.shortcuts import render, redirect

def index(request):
    context = {
        "return_page" : "Secrets:Index"
    }
    return render(request, "secrets/index.html", context)

def popular(request):
    context = {
        "return_page" : "Secrets:Popular"
    }
    return render(request, "secrets/popular.html", context)

def recent(request):
    context = {
        "return_page" : "Secrets:Recent"
    }
    return render(request, "secrets/recent.html", context)

def submit(request):

def delete(request):

def like(request):

def unlike(request):
