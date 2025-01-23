FROM node:lts-slim

RUN apt-get update -qq && apt-get install -yq vim git curl

WORKDIR /usr/src/app

CMD ["tail", "-f", "/dev/null"]