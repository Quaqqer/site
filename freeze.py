#!/usr/bin/env python
from flask_frozen import Freezer

from src.app import app

freezer = Freezer(app)

if __name__ == "__main__":
    freezer.freeze()
