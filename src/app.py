import os

import markdown2
from flask import Flask, render_template

template_folder = os.path.join(os.path.dirname(__file__), "templates")
print(template_folder)

app = Flask("empaxyz", template_folder=template_folder)


@app.route("/")
def root():
    md = markdown2.markdown_path("page/index.md")
    return render_template("template.html", content=md)
