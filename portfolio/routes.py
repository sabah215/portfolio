from portfolio import app
from flask import render_template, url_for, redirect, request

@app.route("/")
def index():
    return render_template('index.html')