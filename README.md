# My personal website

If you would like to see it in action it is deployed on
[empa.xyz](https://empa.xyz). Please note that I lack inspiration and this
website is very empty.

The style sheet for this website is based on the very beautiful [Nord color
palette](https://nordtheme.com).

The source code for this website is very simple and could be easily adapted to
fit your needs.

When deploying this I recommend using a reverse proxy, like nginx, to add
caching headers for instance. I personally add cache headers to cache the static
content in the res directory.

## Usage

To run the website I use a virtual environment. To create the virtual
environment I run the following lines in my shell.

```bash
$ python -m venv .venv
$ source .venv/bin/activate
$ pip install -r requirements.txt
$ deactivate
```

After creating the virtual environment the server can be started with the
following command.

```bash
$ .venv/bin/python app.py
```

Please note that this is not recommended for production, as stated by flask when
the server is started. For production I recommend generating static content and
serving it with a webserver such as nginx or hosting it with docker.

### Generating static content

To generate static content simply run `freeze.py` from within your python
environment. This will generate a directory called `build` that contains all
web pages and resources.

### Docker

When I use docker I most often use Docker Compose. Here is an example
configuration of how I would deploy it using Compose. A Dockerfile and a
Docker Compose configuration is provided in this repository.
