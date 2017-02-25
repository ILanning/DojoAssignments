from django.shortcuts import render, HttpResponse
import datetime

def index(request):
    context = { "time":datetime.datetime.now().strftime("%X"),
                "date":datetime.datetime.now().strftime("%b %d, %Y") }
    return render(request, "timedisplay/index.html", context)

# Create your views here.
