# build stage
FROM node:19.3.0-alpine3.16

WORKDIR /app

COPY ./movie_webapp .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
