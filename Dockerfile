# Use nginx alpine image for serving static files
FROM nginx:alpine

# Copy all project files to nginx html directory
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
