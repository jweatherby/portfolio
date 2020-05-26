FROM mhart/alpine-node:12 AS builder
WORKDIR /app

COPY . .

RUN npm install

ARG MIXPANEL_TOKEN
ENV RAZZLE_MIXPANEL_TOKEN=$MIXPANEL_TOKEN
RUN echo $RAZZLE_MIXPANEL_TOKEN

RUN npm run build:prod


FROM mhart/alpine-node:12

WORKDIR /app

COPY --from=builder /app/ .

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "build/server.js"]