from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, "ninjas/index.html")

def ninjas(request, color):
    context = {}
    print '\"' + color + '\"'
    if color == "":
        context["ninja"] = "tmnt"
        context["ninjaAlt"] = "Teenage Mutant Ninja Turtles"
    elif color == "red":
        context["ninja"] = "raphael"
        context["ninjaAlt"] = "Raphael"
    elif color == "blue":
        context["ninja"] = "leonardo"
        context["ninjaAlt"] = "Leonardo"
    elif color == "orange":
        context["ninja"] = "michelangelo"
        context["ninjaAlt"] = "Michealangelo"
    elif color == "purple":
        context["ninja"] = "donatello"
        context["ninjaAlt"] = "Donatello"
    else:
        context["ninja"] = "notapril"
        context["ninjaAlt"] = "Megan Fox"
    return render(request, "ninjas/ninjas.html", context)

# Create your views here.
