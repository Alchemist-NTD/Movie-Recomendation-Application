FROM python:3.8-slim-buster

RUN mkdir /src
WORKDIR /src


COPY requirements.txt /src/
RUN pip3 install -r requirements.txt
COPY . /src
