FROM node:18 

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn add

COPY . . 

EXPOSE 8080

CMD ["node", "app.js"]