import { Track } from 'domain/entities/Track';
import { getTracklist } from 'domain/use_cases/getTracklist';
import { tracklistRepository } from 'gateways';

jest.mock('gateways');
const mockGetTracklist = tracklistRepository.getTracklist as jest.Mock;

describe('Get tracklist', (): void => {
  it('should get tracklist for given url', async (): Promise<void> => {
    const tracks: Track[] = [{ name: 'track', link: '', album: 'album', artist: 'artist' }];
    mockGetTracklist.mockResolvedValue(tracks);
    const url = 'https://www.youtube.com/watch?v=fVlVZTHmkaw';

    const tracklist = await getTracklist(url);

    expect(tracklist).toEqual(tracks);
  });
});
