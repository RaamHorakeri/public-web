FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy the build output from the previous stage to Nginx
COPY  /public-web/build .

# Expose port 80 for Nginx
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
