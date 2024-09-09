# Stage 1: Clone the repository using a minimal git Alpine image
FROM alpine/git as repo
WORKDIR /app

# ARG to accept the GitHub token at build time
ARG GIT_TOKEN

# Use the token securely to clone the private repository
RUN git clone https://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@github.com/eskeon/public-web.git

# Stage 2: Build the React app using a minimal Node.js Alpine image
FROM node:20-alpine as build
WORKDIR /app
COPY --from=repo /app/public-web /app

# Install only production dependencies
RUN npm install --production

# Build the React app
RUN npm run build

# Stage 3: Serve the app using a lightweight Nginx image
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy the build output from the previous stage to Nginx
COPY --from=build /app/build .

# Expose port 80 for Nginx
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
