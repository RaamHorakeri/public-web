FROM node:18-alpine AS builder

# Install build dependencies
RUN npm install -g yarn

# Clone the private repository (replace with your credentials)
RUN git clone https://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@github.com/your_organization/your_repo.git

# Build the React app
WORKDIR /app
RUN yarn install
RUN yarn build

# Stage 2: Runtime stage
FROM nginx:alpine

# Copy the built React app from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the application port
EXPOSE 80
