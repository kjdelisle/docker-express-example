FROM node:8-alpine

EXPOSE 3000

WORKDIR /app

COPY ./src ./src
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

ENTRYPOINT ["node", "."]
