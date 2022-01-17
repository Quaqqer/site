VENV_PATH = .venv
PYTHON = $(VENV_PATH)/bin/python

.PHONY: debug build deploy

debug:
	FLASK_APP=website:app FLASK_ENV=development $(PYTHON) -m flask run

freeze: clean-freeze
	$(PYTHON) freeze.py

deploy: freeze
	rsync -azvh --delete build/ empa@empa.xyz:/srv/www/empa.xyz

clean-freeze:
	rm -rf build

clean: clean-freeze
