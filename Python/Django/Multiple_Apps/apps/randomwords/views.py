from django.shortcuts import render, redirect, HttpResponse
import random
import string

def index(request):
    if("count" not in request.session):
        request.session["count"] = 0
    return render(request, "randomwords/index.html")

def submit(request):
    randString = ""
    characters = string.letters + string.digits
    for i in xrange(0, 14):
        randString += characters[random.randint(0, len(characters)-1)]
    request.session["word"] = randString
    request.session["count"] += 1
    return redirect('RandomWords:Index')
# Create your views here.
