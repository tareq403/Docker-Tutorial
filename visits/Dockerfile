# We use node:14-alpine as base image
FROM node:14-alpine

# We set work directory to /usr/app
WORKDIR /usr/app

# We copy package.json file to work directory to install node dependencies
COPY package.json .

# We install Node dependencies
RUN npm install

# We copy remaining project files to work directory
COPY . .

# Run "npm start" as initial command to run Node server
CMD ["npm", "start"]
