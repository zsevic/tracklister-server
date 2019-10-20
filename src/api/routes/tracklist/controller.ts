import * as hapi from '@hapi/hapi';
import { Track } from 'domain/entities/Track';
import { getTracklist } from 'domain/use_cases/getTracklist';

export function getTracklistHandler(request: hapi.Request, h: hapi.ResponseToolkit):
Promise<Track[]> {
  const { url } = request.query;

  return getTracklist(url.toString());
}
