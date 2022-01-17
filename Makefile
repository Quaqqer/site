VENV_PATH = .venv
PYTHON = $(VENV_PATH)/bin/python
TARGET = empa@empa.xyz:/srv/www/empa.xyz

.PHONY: debug build deploy

debug:
	FLASK_APP=website:app FLASK_ENV=development $(PYTHON) -m flask run

freeze: clean-freeze
	$(PYTHON) freeze.py

deploy: freeze
	rsync -azvh --delete build/ $(TARGET)

clean-freeze:
	rm -rf build

clean: clean-freeze
