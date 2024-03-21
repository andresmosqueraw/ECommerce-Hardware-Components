FROM node:21-alpine3.18 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app

RUN npm run build --prod

# Agregar este comando para listar los directorios y archivos generados
RUN ls -al /app
RUN ls -al /app/dist

#Segundo paso

FROM nginx:1.17.1-alpine

# Asegúrate de que esta ruta refleje la estructura de directorios correcta
COPY --from=build-step /app/dist/ecommerce-store /usr/share/nginx/html


