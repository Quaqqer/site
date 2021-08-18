#!/bin/sh

cd $(dirname $0)

rsync -azvh --delete --chown=nginx:nginx site/ empa@empa.xyz:~/site && \
ssh empa@empa.xyz -t "sudo sh -c 'chown -R nginx:nginx site && rm -rf /srv/www/empa.xyz && mv site /srv/www/empa.xyz'"
