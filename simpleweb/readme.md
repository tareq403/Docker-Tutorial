## Creating a Docker image for simple NodeJS app
In this project, we create and start a container for a simple NodeJS app.

### Exaplaining the `Dockerfile`
We use `node:14-alpine` as the base image.

We set working directory by `WORKDIR /usr/app`.

We copy package.json file to work directory to install node dependencies
by `COPY ./package.json ./`.

We install Node dependencies by
`RUN npm install`.

We Copy remaining project files to work directory by
`COPY ./ ./`.

We run `npm start` as initial command to run Node server by
`CMD ["npm", "start"]`.

### Building an image
To build image from `Dockerfile`, run `docker build .` command.

To build image with a tag, run `docker build -t <username>/simpleweb .` command.
Your output should end like: `naming to docker.io/<username>/simpleweb`.

### Running the image
To run the built image, run `docker run <username>/simpleweb` command.
Your output should end like: `Ready to accept connections`.

To `create` a container and `start` it separately, follow these steps:
* Run `docker create <username>/simpleweb` to create a container. You will get the container id as output.
* To start the container, run `docker start <container-id>`
* To stop the container, run `docker stop <container-id>`

### Connecting to Node app
Our Node app will listen to `8080` port of the container.
We can run the container by port binding, so that we can 
communicate to the containers port from our server port.

Let's run the container by: `docker run -p 4001:8080 <username>/simpleweb`

We shall get output like:
```angular2html
> @ start /usr/app
> node index.js

Listening to port 8080
```

Now, if we visit `http://localhost:4001`, the request will 
be forwarder to the containers `8080` port, and we shall
get output: "Hello world!".