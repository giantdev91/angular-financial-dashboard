# Stage 1
FROM node:14.15.4 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/insurance-power-house /usr/share/nginx/html
COPY --from=node /app/nginx.conf /etc/nginx/conf.d/default.conf
RUN mv /usr/share/nginx/html/assets/startup.sh /
RUN chmod +x startup.sh

CMD  ["./startup.sh"]