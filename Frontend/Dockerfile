# build stage
FROM node:14-alpine

WORKDIR /app

COPY ./movie_webapp .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
