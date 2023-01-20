FROM node:14-alpine
WORKDIR /usr/src
COPY package*.json ./

# proxy for local server deployment
#ENV http_proxy "http://172.16.1.6:3128"
#ENV https_proxy "http://172.16.1.6:3128"
#RUN npm config set registry https://registry.npmjs.org
RUN npm config set http-proxy http://192.168.36.35:3128
RUN npm config set https-proxy http://192.168.36.35:3128
RUN npm config set proxy http://192.168.36.35:3128

RUN npm config set registry https://registry.npmjs.org/
# RUN npm config set http-proxy http://172.16.1.6:3128
# RUN npm config set https-proxy http://172.16.1.6:3128
# RUN npm config set proxy http://172.16.1.6:3128


RUN npm install
COPY . .

EXPOSE 4000

#CMD [ "npm", "start" ]

##### PM2
RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY 6e912zwmkl6ddl0
ENV PM2_SECRET_KEY ezbmgoxko50whqx

CMD ["pm2-runtime", "src/server.js"]
