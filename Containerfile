FROM docker.io/arm32v7/node:20-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN ls -la

RUN npm ci --only=production

COPY . .

CMD ["node", "index.js"]
