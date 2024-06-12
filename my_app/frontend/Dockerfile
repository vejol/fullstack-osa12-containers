FROM node:20 AS base
WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=http://localhost:8080/api/

RUN npm run build


FROM nginx:1.25-alpine AS prod

COPY --from=base /usr/src/app/dist /usr/share/nginx/html
