FROM node:13.8.0

WORKDIR /usr/src/app

COPY package*.json ./

COPY .env ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]