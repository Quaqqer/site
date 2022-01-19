VENV_PATH = .venv
PYTHON = $(VENV_PATH)/bin/python
TARGET = empa@empa.xyz:/srv/www/empa.xyz

.PHONY: debug build deploy clean clean-freeze

debug: snake
	FLASK_APP=website:app FLASK_ENV=development $(PYTHON) -m flask run

freeze: clean-freeze snake
	$(PYTHON) freeze.py

deploy: freeze
	rsync -azvh --delete build/ $(TARGET)

website/res/snake.js: website/ts/snake/*
	tsc -p website/ts/snake/tsconfig.json
	webpack ./website/ts/snake/out/snake.js --mode production
	mv dist/main.js website/res/snake.js
	rmdir dist

snake: website/res/snake.js

clean-snake:
	rm website/res/snake.js

clean-freeze:
	rm -rf build

clean: clean-freeze clean-snake
