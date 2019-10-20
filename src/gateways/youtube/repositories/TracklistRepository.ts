/* eslint-disable class-methods-use-this */
import axios from 'axios';
import cheerio from 'cheerio';
import { Track } from 'domain/entities/Track';

export class TracklistRepository {
  async getTracklist(url: string): Promise<Track[]> {
    const { data } = await axios(url);
    const $ = cheerio.load(data);
    const musicData = $('#watch-description-extras ul');

    let dataIndex = 0;
    const musicList = [];

    musicData.each((index, element) => {
      const text = $(element).text();
      if (index > 1) {
        const songIndex = Math.floor(dataIndex / 4);
        // console.log(text, dataIndex);
        switch (dataIndex % 4) {
          case 0: {
            musicList.push({});
            musicList[songIndex].name = text.trim();
            break;
          }
          case 1: {
            musicList[songIndex].artist = text.trim();
            break;
          }
          case 2: {
            musicList[songIndex].album = text.trim();
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
