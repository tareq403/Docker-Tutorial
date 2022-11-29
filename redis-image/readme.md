## Running a container from existing image
In this project, we create and start a container from an existing image.

### Exaplaining the `Dockerfile`
We use `alpine` as the base image.

We install `redis` as dependency in our image by `RUN apk add --update redis`.

We run `redis-server` as the start command of the image by `CMD ["redis-server"]`.

### Building an image
To build image from `Dockerfile`, run `docker build .` command.

To build image with a tag, run `docker build -t <username>/redis .` command.
Your output should end like: `naming to docker.io/<username>/redis`.

### Running the image
To run the built image, run `docker run <username>/redis` command.
Your output should end like: `Ready to accept connections`.

To `create` a container and `start` it separately, follow these steps:
* Run `docker create <username>/redis` to create a container. You will get the container id as output.
* To start the container, run `docker start <container-id>`
* To stop the container, run `docker stop <container-id>`