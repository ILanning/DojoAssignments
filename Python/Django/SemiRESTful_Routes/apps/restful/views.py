from django.shortcuts import render, redirect
from .models import Product

def redir(request):
    return redirect("Restful:Index")

def index(request):
    if request.method == "POST":
        create(request)
    context = {
        "products" : Product.objects.all()
    }
    return render(request, "restful/index.html", context)

def show(request, id):
    if request.method == "POST":
        update(request, id)
    context = {
        "product" : Product.objects.get( id = id )
    }
    return render(request, "restful/listing.html", context)

def new(request):
    return render(request, "restful/create.html")

def edit(request, id):
    context = {
        "product" : Product.objects.get( id = id )
    }
    return render(request, "restful/edit.html", context)

def create(request):
    Product.objects.AddProduct(request.POST)
    return redirect("Restful:Index")

def update(request, id):
    Product.objects.EditProduct(request.POST, id)
    return redirect("Restful:Show", id)

def destroy(request, id):
    if(request.method == "POST"):
        Product.objects.DeleteProduct(id)
    return redirect("Restful:Index")
