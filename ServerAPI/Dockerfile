# Build stage
FROM node:20.16.0-alpine AS build

WORKDIR /usr/server

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "dev"]