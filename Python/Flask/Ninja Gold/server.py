from flask import Flask, render_template, redirect, session, request
import random, datetime, math

app = Flask(__name__)
app.secret_key = "key"

@app.route('/')
def index():
    if "gold" not in session:
        session["gold"] = 0
    if "activities" not in session:
        session["activities"] = []
    return render_template("index.html")

@app.route("/process_money", methods = ["POST"])
def process():
    if "Farm" in request.form:
        gold = random.randint(10, 20)
        session["gold"] += gold
        session["activities"].append(("green", "Earned {} gold from the farm! ({})".format(gold, datetime.datetime.now().strftime("%c"))))
    elif "Cave" in request.form:
        gold = random.randint(5, 10)
        session["gold"] += gold
        session["activities"].append(("green", "Earned {} gold from the cave! ({})".format(gold, datetime.datetime.now().strftime("%c"))))
    elif "House" in request.form:
        gold = random.randint(2, 5)
        session["gold"] += gold
        session["activities"].append(("green", "Earned {} gold from the house! ({})".format(gold, datetime.datetime.now().strftime("%c"))))
    elif "Casino" in request.form:
        gold = random.randint(-50, 50)
        session["gold"] += gold
        if gold > 0:
            session["activities"].append(("green", "Earned {} gold from the casino! ({})".format(gold, datetime.datetime.now().strftime("%c"))))
        else:
            session["activities"].append(("red", "Lost {} gold at the casino... ({})".format(int(math.fabs(gold)), datetime.datetime.now().strftime("%c"))))
    return redirect('/')

@app.route("/reset", methods = ["POST"])
def reset():
    session.clear()
    return redirect('/')

app.run(debug=True)
