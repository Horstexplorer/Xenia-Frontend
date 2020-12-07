FROM node:lts-alpine

WORKDIR /build

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build

ENTRYPOINT npm serve
