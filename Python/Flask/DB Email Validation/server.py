from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import MySQLConnector
import flask_sqlalchemy
import re

app = Flask(__name__)
emailRegex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
mysql = MySQLConnector(app, "emails")
app.secret_key="secret_key"

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/success", methods=["POST"])
def success():
    if not emailRegex.match(request.form["email"]):
        flash("Email not valid!", "invalid")
        return redirect('/')
    else:
        session["email"] = request.form["email"]
        mysql.query_db("INSERT INTO email_addresses (address, created_at, updated_at) VALUES (:email, now(), now())", {"email":session["email"]})
        emails = mysql.query_db("SELECT id, address, created_at FROM email_addresses")
        flash("Thank you for adding your email address!", "success")
        return render_template("email_list.html", emails=emails)

@app.route("/remove", methods=["POST"])
def remove():
    mysql.query_db("DELETE FROM email_addresses WHERE id=" + request.form["id"])
    flash("Email deleted!", "success")
    emails = mysql.query_db("SELECT id, address, created_at FROM email_addresses")
    return render_template("email_list.html", emails=emails)

app.run(debug=True)
