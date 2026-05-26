ARG NODE_IMAGE=node:20-alpine

FROM ${NODE_IMAGE}

WORKDIR /usr/src/app

COPY package*.json .

RUN ls -la

RUN npm ci --only=production

RUN npm install -g pm2

COPY . .

CMD ["pm2-runtime", "index.js"]
