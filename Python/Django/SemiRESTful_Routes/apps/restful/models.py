from __future__ import unicode_literals
from django.db import models

"""
Routes:
    Product Index
    Show Product
    Edit Product Page
    Edit Product Submit
    Destroy Product Submit
    Add Product Page
    Add Product Submit


Models:

    Product:
        Name
        Description
        Price
        Created_At
        Updated_At
"""

class ProductManager(models.Manager):
    def AddProduct(self, formData):
        self.create(name = formData["name"], description = formData["description"], price = formData["price"])

    def EditProduct(self, formData, id):
        self.filter(id = id).update(name = formData["name"], description = formData["description"], price = formData["price"])

    def DeleteProduct(self, id):
        self.get(id = id).delete()

class Product(models.Model):
    name = models.CharField(max_length = 255)
    description = models.CharField(max_length = 255)
    price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = ProductManager()

# Create your models here.
