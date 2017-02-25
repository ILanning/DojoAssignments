from django.shortcuts import render,HttpResponse, redirect
import random
import math

def index(request):
    if not "gold" in request.session:
        request.session["gold"] = 0
    if not "activities" in request.session:
        request.session["activities"] = []
    return render(request, "gold/index.html")

def process_money(request, building):
    buildings = {
        "farm" : (10, 20),
        "cave" : (5, 10),
        "house" : (2, 5),
        "casino" : (-50, 50)
    }
    print building
    if building in buildings:
        gold = random.randint(buildings[building][0], buildings[building][1])
        request.session["gold"] += gold
        cssClass = "green"
        verb = "won"
        if gold < 0:
            cssClass = "red"
            verb = "lost"
        request.session["activities"].append((cssClass, "You {} {} gold at the {}!".format(verb, int(math.fabs(gold)), building)))
        print request.session["activities"]
    return redirect('/')

def reset(request):
    del request.session["gold"]
    del request.session["activities"]
    return redirect('/')
# Create your views here.
