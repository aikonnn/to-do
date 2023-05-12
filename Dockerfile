#dev

FROM node:latest as dev

WORKDIR /

COPY . .

RUN ping -c 1 db

RUN npm install

CMD ["npm", "run", "dev"]

#prod

FROM node:latest as prod

WORKDIR /

COPY . .


RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]