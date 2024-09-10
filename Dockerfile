# Stage 1: Clone the repository
FROM alpine/git as repo
WORKDIR /app
ARG GITHUB_TOKEN
RUN git clone https://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@github.com/eskeon/public-web.git .

# Stage 2: Build the React app
FROM node:20-alpine as build
WORKDIR /app
COPY --from=repo /app /app
COPY package*.json /app/
RUN ls /app
RUN npm install --production
RUN npm run build

# Stage 3: Serve the app using Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
