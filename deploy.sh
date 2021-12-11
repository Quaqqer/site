#!/bin/sh

cd "$(dirname "$0")" || exit 1

./freeze.py &&
rsync -azvh --delete build/ empa@empa.xyz:~/site &&
ssh empa@empa.xyz -t "sudo sh -c 'chown -R nginx:nginx site && rm -rf /srv/www/empa.xyz && mv site /srv/www/empa.xyz'"
rm -rf build
