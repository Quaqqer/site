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


def basic_md_view(md_path):
    md = markdown2.markdown_path(get_page(md_path))
    return lambda: render_template("base.html", content=md)


@app.route("/")
def root():
    md = markdown2.markdown_path(get_page("index.md"))
    return render_template("base.html", content=md)


app.add_url_rule("/test", view_func=basic_md_view("test.md"))
