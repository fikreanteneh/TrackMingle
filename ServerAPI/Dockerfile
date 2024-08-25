# Build stage
FROM node:20.16.0-alpine AS build

WORKDIR /usr/server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM node:20.16.0-alpine AS production

WORKDIR /usr/server

COPY package*.json ./

RUN npm ci --only=production

COPY --from=build /usr/server/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]