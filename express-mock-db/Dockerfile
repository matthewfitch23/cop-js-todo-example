FROM node:12.20.0-alpine

LABEL maintainer=matthew.fitch@bazaarvoice.com
LABEL description="COP JS Todo Example"

ARG install_args
ENV INSTALL_ARGS=${install_args:-production}
# Set up npm config
ENV NPM_CONFIG_LOGLEVEL warn

# Set up cop-js-todo-example
WORKDIR /opt/cop-js-todo-example
COPY package.json package-lock.json ./

RUN sh -c "npm ci --'$INSTALL_ARGS'"

# Copy cop-js-todo-example source files
COPY src/ src/

EXPOSE 3000

CMD npm start
