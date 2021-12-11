import os

import markdown2
from flask import Flask, render_template

srcdir = os.path.dirname(__file__)
template_folder = os.path.join(srcdir, "templates")

app = Flask("empaxyz", template_folder=template_folder, static_folder="res")


@app.route("/")
def root():
    md = markdown2.markdown_path("page/index.md")
    return render_template("base.html", content=md)
