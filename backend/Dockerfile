# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install dependencies for libraries
RUN node src/scripts/install-libraries.js

# Build the TypeScript code
RUN npm run build

# Copy the config files to the dist directory
RUN mkdir -p dist/config && cp -r src/config/*.json dist/config/

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run the app
CMD ["npm", "start"]