from flask import Flask, session, render_template, redirect, request, flash
from mysqlconnection import MySQLConnector

app = Flask(__name__)
app.secret_key = "secret_key"
mysql = MySQLConnector(app, "friendDB")

@app.route('/')
def index():
    friends = mysql.query_db("SELECT * FROM friends")
    return render_template("index.html", friends=friends)

@app.route("/friends", methods=["POST"])
def create():
    mysql.query_db("INSERT INTO friends (first_name, last_name, email, created_at, updated_at) VALUES \
        (:first, :last, :email, now(), now())", {"first":request.form["first"], "last":request.form["last"], "email":request.form["email"]})
    flash("Friends Added!")
    return redirect('/')

@app.route("/friends/<id>/edit")
def edit(id):
    friend = mysql.query_db("SELECT * FROM friends WHERE id=:id", { 'id' : id })
    print friend
    return render_template("edit.html", friendData = friend[0])

@app.route("/friends/<id>", methods=["POST"])
def update(id):
    if validate(request.form):
        mysql.query_db("UPDATE friends SET first_name=:first, last_name=:last, email=:email WHERE id=:id", \
            {"first":request.form["first"], "last":request.form["last"], "email":request.form["email"], "id":id})
        flash("Update successful!", "success")
        return redirect('/')
    else:
        redirect("/friends/" + string(id))

@app.route("/friends/<id>/delete", methods=["POST"])
def destroy(id):
    mysql.query_db("DELETE FROM friends WHERE id = " + id)
    flash("Friend Deleted!", "success")
    return redirect('/')

def validate(dict):
    valid = True

    return valid;

app.run(debug=True)
