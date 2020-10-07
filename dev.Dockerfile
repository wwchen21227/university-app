# base image
FROM node:14.11.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install

RUN npm install -g json-server

EXPOSE 3000

# start app
CMD ["npm", "start"]
