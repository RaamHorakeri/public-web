# Stage 1: Clone the repository using a minimal git Alpine image
FROM alpine/git as repo
WORKDIR /app

# Use the GitHub token securely to clone the private repository
ARG GITHUB_TOKEN
RUN git clone https://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@github.com/eskeon/public-web.git

# Stage 2: Build the React app using a minimal Node.js Alpine image
FROM node:20-alpine as build
WORKDIR /app

# Copy only package.json and package-lock.json first to install dependencies
COPY --from=repo /app/public-web/package*.json ./

# Install production dependencies (omit devDependencies)
RUN npm install --omit=dev

# Now copy the rest of the application files
COPY --from=repo /app/public-web ./

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
