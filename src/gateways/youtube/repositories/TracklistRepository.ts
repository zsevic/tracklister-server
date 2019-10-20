/* eslint-disable class-methods-use-this */
import axios from 'axios';
import cheerio from 'cheerio';
import { Track } from 'domain/entities/Track';

const albumTypes = ['Албум', 'Album'];

export class TracklistRepository {
  async getTracklist(url: string): Promise<Track[]> {
    const { data } = await axios(url);
    const $ = cheerio.load(data);
    const musicData = $('#watch-description-extras ul');

    let dataIndex = 0;
    const musicList = [];

    musicData.each((index, element) => {
      const text = $(element).text();
      const type = $(element).prev().text();

      if (index > 1) {
        const songIndex = Math.floor(dataIndex / 4);

        switch (dataIndex % 4) {
          case 0: {
            musicList.push({});
            const html = cheerio.load($(element).html());
            const link = html('a').attr('href');

            musicList[songIndex].name = text.trim();
            musicList[songIndex].link = link ? `https://www.youtube.com${link}` : '';

            break;
          }

          case 1: {
            musicList[songIndex].artist = text.trim();
            break;
          }

          case 2: {
            if (albumTypes.includes(type.trim())) {
              musicList[songIndex].album = text.trim();
            } else {
              musicList[songIndex].album = '';
              dataIndex += 1;
            }

            break;
          }

          default: break;
        }
        dataIndex += 1;
      }
    });

    return musicList;
  }
}
