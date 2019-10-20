import { Track } from 'domain/entities/Track';
import { tracklistRepository } from 'gateways';

export async function getTracklist(url: string): Promise<Track[]> {
  return tracklistRepository.getTracklist(url);
}
