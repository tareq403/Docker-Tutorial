## Creating a Docker image for simple NodeJS app
In this project, we create and start a container for a simple NodeJS app,
that keeps the count of page visit. We keep track of the visit count
by storing the count in Redis server. We run the Redis server in another
Docker container. We orchestrate the workflow by Docker compose.

### Exaplaining the `Dockerfile`
We use `node:14-alpine` as the base image.

We set working directory by `WORKDIR /usr/app`.

We copy package.json file to work directory to install node dependencies
by `COPY package.json .`.

We install Node dependencies by
`RUN npm install`.

We Copy remaining project files to work directory by
`COPY . .`.

We run `npm start` as initial command to run Node server by
`CMD ["npm", "start"]`.

### Explaining the `docker-compose` file
We have two services: `redis-server` and `node-app`.

We use `redis` image for `redis-server`.

We build our project through Dockerfile for `node-app` service.

We bind port 4001 to container port 8080.

We set the service to restart if it exits through failure.

### Building and running the stack
To build and run the stack, run `docker-compose up --build` command.

If the project is already built, and you want to run the stack,
run `docker-compose up` command.

### Connecting to Node app

Now, if we visit `http://localhost:4001`, the request will 
be forwarder to the containers `8080` port, and we shall
get output: "Number of previous visits: 0". With each refresh, the visit count will increase.

### Stop the stack
Run `docker-compose down` to stop the stack.