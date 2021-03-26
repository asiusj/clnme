FROM node:alpine3.12

RUN mkdir -p /web
WORKDIR /web
ADD . /web

RUN npm i

ENV NODE_ENV production
ENV API_PORT 1337
ENV API_HOST bg

RUN npm run build

CMD ["npm", "run", "start"]
