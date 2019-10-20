import * as hapi from '@hapi/hapi';
import * as controller from './controller';
import { tracklistQuery } from './validation';

export default [{
  method: 'GET',
  path: '/tracklist',
  handler: controller.getTracklistHandler,
  options: {
    description: 'Get tracklist',
    notes: 'Returns a tracklist for given url',
    validate: {
      query: tracklistQuery,
    },
    tags: ['api'],
  },
}, {
  method: 'GET',
  path: '/',
  handler: (request: hapi.Request, h: hapi.ResponseToolkit): string => 'hello world',
}];
