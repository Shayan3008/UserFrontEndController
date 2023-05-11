#NODE BLOCK
FROM node:alpine AS NodeBuild


WORKDIR /app
COPY . .
RUN npm ci

RUN npm run build


#NGINX BLOCK
FROM nginx:1.23.4-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=NodeBuild /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

