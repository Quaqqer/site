FROM alpine:latest

COPY . /app
WORKDIR /app

RUN apk add --no-cache py-pip \
 && pip install -r requirements.txt \
 && pip install gunicorn

CMD ["gunicorn", "--bind=0.0.0.0:80", "website:app"]

EXPOSE 80/tcp
