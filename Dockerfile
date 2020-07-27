FROM node:12.18.2-alpine3.9
WORKDIR '/app'
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "app.js"]