FROM strapi/strapi:3-node12-alpine

ENV PORT 1337
ENV HOST 0.0.0.0
ENV NODE_ENV production
ENV DATABASE_CLIENT mongo
ENV DATABASE_NAME clnme
ENV DATABASE_HOST mongo
ENV DATABASE_PORT 27017
ENV DATABASE_USERNAME admin
ENV DATABASE_PASSWORD qwe333221

RUN mkdir -p /srv/app
WORKDIR /srv/app

COPY package*.json /srv/app/

RUN npm install
RUN npm run build

COPY . /srv/app

CMD [ "npm", "start" ]