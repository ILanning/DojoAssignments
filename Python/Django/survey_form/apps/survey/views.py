from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render(request, "survey/index.html")

def process(request):
    request.session["name"] = request.POST["name"]
    request.session["location"] = request.POST["location"]
    request.session["language"] = request.POST["favelanguage"]
    if not "count" in request.session:
        request.session["count"] = 0
    request.session["count"] += 1
    return redirect('/result')

def result(request):
    return render(request, "survey/result.html")
