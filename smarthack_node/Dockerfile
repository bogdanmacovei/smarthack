FROM node:8

RUN mkdir /smarthack_node
WORKDIR /smarthack_node

COPY package.json /smarthack_node
COPY package-lock.json /smarthack_node

RUN npm install

COPY . /smarthack_node

EXPOSE 8000

CMD node app.js
