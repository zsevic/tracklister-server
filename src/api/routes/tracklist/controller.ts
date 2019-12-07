import * as hapi from '@hapi/hapi';
import { Track } from 'domain/entities';
import { getTracklist } from 'domain/use_cases/getTracklist';

export function getTracklistHandler(request: hapi.Request): Promise<Track[]> {
  const { url } = request.query;

  return getTracklist(url.toString());
}
