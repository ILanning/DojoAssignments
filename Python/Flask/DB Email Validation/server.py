from flask import Flask, render_template, request, redirect, flash
import flask_sqlalchemy
import re

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/success")
def success():
    return render_template("email_list.html")

app.run(debug=True)
