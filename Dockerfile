FROM node:14.15.1
LABEL name="vue-back"
LABEL version="1.0"
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 3000
CMD npm start
