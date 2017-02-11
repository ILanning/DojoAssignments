from flask import Flask, render_template, request, redirect, flash
import re

app = Flask(__name__)
app.secret_key = "key"
emailRegex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
nameRegex = re.compile(r"^[a-zA-Z]")
passwordRegex = re.compile(r"(?=.*[0-9])(?=.*[A-Z])")

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/submit", methods={"POST"})
def submit():
    valid = True
    email = request.form["email"]
    if len(request.form["firstName"]) == 0:
        valid = False
        flash("Must enter a first name")
    elif not nameRegex.match(request.form["firstName"]):
        valid = False
        flash("First name must not contain numbers")
    if len(request.form["lastName"]) == 0:
        valid = False
        flash("Must enter a last name")
    elif not nameRegex.match(request.form["firstName"]):
        valid = False
        flash("Last name must not contain numbers")
    if len(request.form["email"]) == 0:
        valid = False
        flash("Must enter an email address")
    elif not emailRegex.match(request.form["email"]):
        valid = False
        flash("Not a valid email address")
    if len(request.form["password"]) == 0:
        valid = False
        flash("Must enter a password")
    elif len(request.form["password"]) < 8:
        valid = False
        flash("Password must be at least 8 characters long")
    elif not passwordRegex.match(request.form["password"]):
        valid = False
        flash("Password must contain at least one number and one upper case letter")
    elif request.form["password"] != request.form["confirmPassword"]:
        valid = False
        flash("Password and confirmation did not match")
    if valid:
        flash("Thanks for submitting your information.", "success")
    return redirect('/')

app.run(debug=True)
