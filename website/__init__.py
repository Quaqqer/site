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

    def render():
        return render_template("base.html", content=md)

    render.__name__ = f"page: {md_path}"
    return render


basic_pages = {
    "/": "index.md",
    "/test": "test.md",
}

for url, md_path in basic_pages.items():
    app.add_url_rule(url, view_func=basic_md_view(md_path))
