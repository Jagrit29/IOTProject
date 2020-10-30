from flask import Flask
from flask import request

def login():
    if request.method=='POST':
        data = request.form['area']
        print(data)