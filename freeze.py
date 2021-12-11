#!/usr/bin/env python
from flask_frozen import Freezer

from website import app

app.config["FREEZER_IGNORE_MIMETYPE_WARNINGS"] = True

freezer = Freezer(app)

if __name__ == "__main__":
    freezer.freeze()
