FROM node:13.6.0-alpine

RUN addgroup -S app && adduser -S app -G app

WORKDIR /var/app

RUN chown -R app:app /var/app 

USER app

COPY package.json yarn.lock ./
RUN yarn install
COPY . .

RUN yarn run fmt:fix
