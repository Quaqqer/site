from os import path

import markdown2
from flask import Flask, redirect, render_template, send_from_directory

base = path.dirname(__file__)
template_folder = path.join(base, "templates")
res_dir = path.join(base, "res")
pages_dir = path.join(base, "pages")

app = Flask("empaxyz", template_folder=template_folder, static_folder=res_dir)


def get_page(page):
    return path.join(pages_dir, page)


def basic_md_view(md_path):
    def render():
        md = markdown2.markdown_path(
            get_page(md_path),
            extras=["fenced-code-blocks", "task_list", "strike", "tables"],
        )
        return render_template("navigation.html", content=md)

    render.__name__ = f"page: {md_path}"
    return render


basic_pages = {
    "/home": "home.md",
    "/projects": "projects.md",
    "/snake": "snake.md",
    "/about": "about.md",
}

for url, md_path in basic_pages.items():
    app.add_url_rule(url, view_func=basic_md_view(md_path))


@app.route("/")
def root():
    return redirect("/home")


@app.route("/favicon.ico")
def favicon():
    return send_from_directory(
        res_dir,
        "favicon.ico",
        mimetype="image/vnd.microsoft.icon",
    )
