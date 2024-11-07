# Use official Node.js image as a base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the backend port (3000)
EXPOSE 3000

# Start the backend application
CMD ["npm", "start"]
