FROM nginx:alpine

COPY /css/styles.css /usr/share/nginx/html/css/styles.css

COPY index.html /usr/share/nginx/html/index.html
