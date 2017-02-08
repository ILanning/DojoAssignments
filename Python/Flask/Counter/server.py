from flask import Flask, render_template, redirect, session
app = Flask(__name__)
app.secret_key = "Key"
@app.route('/')
def index():
    if not "counter" in session:
        session["counter"] = 0
    print "test2"
    session["counter"] += 1
    return render_template("index.html")

@app.route("/add2", methods=["POST"])
def add2():
    print "test"
    session["counter"] += 1
    return redirect('/')

@app.route("/reset", methods=["POST"])
def reset():
    session["counter"] = 0
    return redirect('/')

app.run(debug=True)
