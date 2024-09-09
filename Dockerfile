# Stage 1: Builder
FROM node:18-alpine AS builder

# Install build dependencies
RUN apk add --no-cache git

# Remove existing yarn if it exists and install the latest npm and yarn
RUN rm -f /usr/local/bin/yarn && npm install -g npm@latest yarn

# Clone the private repository (replace with your credentials)
RUN git clone https://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@github.com/eskeon/public-web.git /app

# Set working directory to the cloned repository
WORKDIR /app

# Install dependencies and build the React app
RUN yarn install
RUN yarn build

# Stage 2: Runtime
FROM nginx:alpine

# Copy the built React app from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the application port
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
