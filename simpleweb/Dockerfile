# Use node:14-alpine as base image
FROM node:14-alpine

# Setting work directory
WORKDIR /usr/app

# Copying package.json file to work directory to install node dependencies
COPY ./package.json ./

# Install Node dependencies
RUN npm install

# Copying remaining project files to work directory
COPY ./ ./

# Run "npm start" as initial command to run Node server
CMD ["npm", "start"]
