from flask import Flask, render_template, redirect, session, request
import random

app = Flask(__name__)
app.secret_key = "key"

@app.route('/')
def index():
    if "number" not in session:
        session["number"] = random.randint(0, 100)
        print session
    return render_template("start.html", displayClasses = "hidden", resetClasses = "hidden")

@app.route("/reset")
def reset():
    session.pop("number")
    return redirect('/')

@app.route("/guess", methods=["POST"])
def guess():
    guessNumber = request.form["guessNumber"]
    print session["number"]
    if int(guessNumber) > session["number"]:
        return render_template("start.html", displayClasses = "red", resetClasses = "hidden", text = "Too high!")
    elif int(guessNumber) < session["number"]:
        return render_template("start.html", displayClasses = "red", resetClasses = "hidden", text = "Too low!")
    else:
        return render_template("start.html", displayClasses = "green", guessClasses = "hidden", text = "{} was the number!".format(session["number"]))

app.run(debug=True)
