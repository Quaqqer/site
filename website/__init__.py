from os import path

import markdown2
from flask import Flask, render_template

base = path.dirname(__file__)
template_folder = path.join(base, "templates")
res_dir = path.join(base, "res")
pages_dir = path.join(base, "pages")

app = Flask("empaxyz", template_folder=template_folder, static_folder=res_dir)


def get_page(page):
    return path.join(pages_dir, page)


@app.route("/")
def root():
    md = markdown2.markdown_path(get_page("index.md"))
    return render_template("base.html", content=md)
