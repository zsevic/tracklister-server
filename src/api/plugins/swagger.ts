import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as hapiSwagger from 'hapi-swagger';
import Pack from 'root/package.json';

const swaggerOptions = {
  info: {
    title: `${Pack.name} API Documentation`,
    version: Pack.version,
  },
  documentationPath: '/api-docs',
};

export default [{
  plugin: Inert,
}, {
  plugin: Vision,
}, {
  plugin: hapiSwagger,
  options: swaggerOptions,
}];
