# Use official Nginx image
FROM nginx:alpine

# Remove the default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy your static website files to Nginx's web root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
