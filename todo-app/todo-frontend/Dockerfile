FROM node:20 AS test
WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN ["npm", "test"]


FROM test AS build

ENV VITE_BACKEND_URL=http://localhost:8080/api/

RUN npm run build


FROM nginx:1.25-alpine AS prod

COPY --from=build /usr/src/app/dist /usr/share/nginx/html