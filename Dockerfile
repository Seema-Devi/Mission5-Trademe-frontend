# Use Node.js base image
FROM node:14
# Set working directory
WORKDIR /frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy frontend source code
COPY . .

# Expose port
EXPOSE 3000

# Command to run the frontend server
CMD ["npm", "start"]

