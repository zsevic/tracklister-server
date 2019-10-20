import { Track } from 'domain/entities/Track';
import { tracklistRepository } from 'gateways';

export async function getTracklist(url: string): Promise<Track[]> {
  const tracks = await tracklistRepository.getTracklist(url);

  return tracks;
}
