FROM alpine:latest

RUN apk add --no-cache py-pip

COPY . /app
WORKDIR /app

RUN pip install -r requirements.txt
RUN pip install gunicorn

CMD ["gunicorn", "--bind=0.0.0.0:80", "website:app"]

EXPOSE 80/tcp
