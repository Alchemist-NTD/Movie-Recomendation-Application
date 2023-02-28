# build stage
FROM node:19.3.0-alpine3.16
# RUN mkdir /app
# COPY ./ /app
WORKDIR /app
COPY . .
# install dependencies

RUN npm install
# RUN npm run build

# This for dev purpose

EXPOSE 3000
CMD ["npm", "start"]
# CMD ["npx", "serve", "build"]

