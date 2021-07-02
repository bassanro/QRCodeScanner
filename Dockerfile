FROM node:10 AS builder

WORKDIR /iasset

COPY . .

RUN yarn build

FROM nginx:alpine 

WORKDIR /usr/share/nginx/html

COPY --from=builder /iasset/build .

CMD ["nginx", "-g", "daemon off;"]