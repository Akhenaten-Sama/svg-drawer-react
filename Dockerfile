FROM node:12.19.0

WORKDIR  /app


COPY package.json /app

COPY yarn.lock /app

COPY .  /app

RUN yarn install


ENV PATH /app/node_modules/.bin:$PATH


EXPOSE 3000

CMD ["yarn", "run", "start"]