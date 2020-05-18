FROM mhart/alpine-node:12 AS builder
WORKDIR /app

COPY . .

RUN npm install

ARG API_ROOT_URL
ENV RAZZLE_API_ROOT=$API_ROOT_URL
RUN echo $RAZZLE_API_ROOT

RUN npm run build:prod


FROM mhart/alpine-node:12

WORKDIR /app

COPY --from=builder /app/ .

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "build/server.js"]