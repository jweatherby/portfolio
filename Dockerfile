FROM mhart/alpine-node:12 AS builder
WORKDIR /app

COPY . .

RUN npm install

RUN npm run build:prod

FROM mhart/alpine-node:12

WORKDIR /app

COPY --from=builder /app/ .

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "build/server.js"]