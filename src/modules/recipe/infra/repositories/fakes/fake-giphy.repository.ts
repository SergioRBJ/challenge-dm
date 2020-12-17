import IGiphyRepository from 'src/modules/recipe/domain/interfaces/repositories/giphy-repository.interface';
import { IGiphy } from '../../entities/Giphy';

class FakeGiphyRepository implements IGiphyRepository {
  private gifs: IGiphy[] = [{
    data: [
      {
        type: "gif",
        id: "75yk3rYrClLyM",
        url: "https://giphy.com/gifs/russell-crowe-tomatoes-75yk3rYrClLyM",
        slug: "russell-crowe-tomatoes-75yk3rYrClLyM",
        bitly_gif_url: "http://gph.is/1a91LmE",
        bitly_url: "http://gph.is/1a91LmE",
        embed_url: "https://giphy.com/embed/75yk3rYrClLyM",
        username: "",
        source: "http://tumblr.com",
        title: "Russell Crowe Tomatoes",
        rating: "g",
        content_url: "",
        source_tld: "tumblr.com",
        source_post_url: "http://tumblr.com",
        is_sticker: 0,
        import_datetime: "2014-02-01 00:51:27",
        trending_datetime: "2014-09-15 17:52:05",
        images: {
          original: {
            height: "214",
            width: "216",
            size: "226641",
            url: "https://media3.giphy.com/media/75yk3rYrClLyM/giphy.gif?cid=333f4424g87n3mkuro6mfnxnyh8kp3crp7cztwuvdt1ubbn3&rid=giphy.gif",
            mp4_size: "253971",
            mp4: "https://media3.giphy.com/media/75yk3rYrClLyM/giphy.mp4?cid=333f4424g87n3mkuro6mfnxnyh8kp3crp7cztwuvdt1ubbn3&rid=giphy.mp4",
            webp_size: "72908",
            webp: "https://media3.giphy.com/media/75yk3rYrClLyM/giphy.webp?cid=333f4424g87n3mkuro6mfnxnyh8kp3crp7cztwuvdt1ubbn3&rid=giphy.webp",
            frames: "10",
            hash: "748f6405a85a4cc0860265f5d2063ebe"
          },
        },
        analytics_response_payload: "e=Z2lmX2lkPTc1eWszcllyQ2xMeU0mZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0zMzNmNDQyNGc4N24zbWt1cm82bWZueG55aDhrcDNjcnA3Y3p0d3V2ZHQxdWJibjM",
        analytics: {
          onload: {
            url: "https://giphy-analytics.giphy.com/simple_analytics?response_id=g87n3mkuro6mfnxnyh8kp3crp7cztwuvdt1ubbn3&event_type=GIF_SEARCH&gif_id=75yk3rYrClLyM&action_type=SEEN"
          },
          onclick: {
            url: "https://giphy-analytics.giphy.com/simple_analytics?response_id=g87n3mkuro6mfnxnyh8kp3crp7cztwuvdt1ubbn3&event_type=GIF_SEARCH&gif_id=75yk3rYrClLyM&action_type=CLICK"
          },
          onsent: {
            url: "https://giphy-analytics.giphy.com/simple_analytics?response_id=g87n3mkuro6mfnxnyh8kp3crp7cztwuvdt1ubbn3&event_type=GIF_SEARCH&gif_id=75yk3rYrClLyM&action_type=SENT"
          }
        }
      }
    ],
    pagination: {
      total_count: 3654,
      count: 1,
      offset: 0
    },
    meta: {
      status: 200,
      msg: "OK",
      response_id: "g87n3mkuro6mfnxnyh8kp3crp7cztwuvdt1ubbn3"
    }
  }];

  public async findByTitle(title: string): Promise<IGiphy | undefined> {
    const fakeGif = await this.gifs.find(gif => gif.data[0].title === title);
    return fakeGif;
  }
}
export default FakeGiphyRepository;
