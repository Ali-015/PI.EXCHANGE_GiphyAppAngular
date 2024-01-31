import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifComponent } from './gif.component';
import { DisplayName, Rating, SourceTLD, Type, Username } from '../../interfaces/gifs.interfaces';

describe('GifComponent', () => {
  let component: GifComponent;
  let fixture: ComponentFixture<GifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GifComponent);
    component = fixture.componentInstance;
    component.gif = {
      "type": Type.GIF,
      "id": "PELOkMAgwNZA9noYK0",
      "url": "https://giphy.com/gifs/mls-reaction-soccer-messi-PELOkMAgwNZA9noYK0",
      "slug": "mls-reaction-soccer-messi-PELOkMAgwNZA9noYK0",
      "bitly_gif_url": "https://gph.is/g/aQ65N5A",
      "bitly_url": "https://gph.is/g/aQ65N5A",
      "embed_url": "https://giphy.com/embed/PELOkMAgwNZA9noYK0",
      "username": Username.Andbox,
      "source": "",
      "title": "Oh No Ugh GIF by Major League Soccer",
      "rating": Rating.G,
      "content_url": "",
      "source_tld": SourceTLD.Empty,
      "source_post_url": "",
      "is_sticker": 0,
      "import_datetime": "2024-01-30 15:14:41",
      "trending_datetime": "2024-01-30 22:31:27",
      "images": {
        "original": {
          "height": "257",
          "width": "480",
          "size": "2097876",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/giphy.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=giphy.gif&ct=g",
        },
        "downsized": {
          "height": "257",
          "width": "480",
          "size": "1221607",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/giphy-downsized.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=giphy-downsized.gif&ct=g"
        },
        "downsized_large": {
          "height": "257",
          "width": "480",
          "size": "2097876",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/giphy.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=giphy.gif&ct=g"
        },
        "downsized_medium": {
          "height": "257",
          "width": "480",
          "size": "2097876",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/giphy.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=giphy.gif&ct=g"
        },
        "downsized_small": {
          "height": "220",
          "width": "412",
          "mp4_size": "84180",
          "mp4": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/giphy-downsized-small.mp4?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=giphy-downsized-small.mp4&ct=g"
        },
        "downsized_still": {
          "height": "257",
          "width": "480",
          "size": "17305",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/giphy-downsized_s.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=giphy-downsized_s.gif&ct=g"
        },
        "fixed_height": {
          "height": "200",
          "width": "374",
          "size": "998723",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/200.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=200.gif&ct=g",
          "mp4_size": "153074",
          "mp4": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/200.mp4?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=200.mp4&ct=g",
          "webp_size": "196194",
          "webp": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/200.webp?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "374",
          "size": "96143",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/200_d.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=200_d.gif&ct=g",
          "webp_size": "53380",
          "webp": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/200_d.webp?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "187",
          "size": "339811",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/100.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=100.gif&ct=g",
          "mp4_size": "56487",
          "mp4": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/100.mp4?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=100.mp4&ct=g",
          "webp_size": "87178",
          "webp": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/100.webp?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=100.webp&ct=g"
        },
        "fixed_height_small_still": {
          "height": "100",
          "width": "187",
          "size": "5467",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/100_s.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=100_s.gif&ct=g"
        },
        "fixed_height_still": {
          "height": "200",
          "width": "374",
          "size": "14612",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/200_s.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=200_s.gif&ct=g"
        },
        "fixed_width": {
          "height": "107",
          "width": "200",
          "size": "384550",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/200w.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=200w.gif&ct=g",
          "mp4_size": "58383",
          "mp4": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/200w.mp4?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=200w.mp4&ct=g",
          "webp_size": "92592",
          "webp": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/200w.webp?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "107",
          "width": "200",
          "size": "35244",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/200w_d.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=200w_d.gif&ct=g",
          "webp_size": "21404",
          "webp": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/200w_d.webp?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "54",
          "width": "100",
          "size": "136382",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/100w.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=100w.gif&ct=g",
          "mp4_size": "26471",
          "mp4": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/100w.mp4?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=100w.mp4&ct=g",
          "webp_size": "42270",
          "webp": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/100w.webp?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=100w.webp&ct=g"
        },
        "fixed_width_small_still": {
          "height": "54",
          "width": "100",
          "size": "2683",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/100w_s.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=100w_s.gif&ct=g"
        },
        "fixed_width_still": {
          "height": "107",
          "width": "200",
          "size": "6042",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/200w_s.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=200w_s.gif&ct=g"
        },
        "looping": {
          "mp4_size": "1730632",
          "mp4": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/giphy-loop.mp4?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=giphy-loop.mp4&ct=g"
        },
        "original_still": {
          "height": "257",
          "width": "480",
          "size": "49564",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/giphy_s.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=giphy_s.gif&ct=g"
        },
        "original_mp4": {
          "height": "256",
          "width": "480",
          "mp4_size": "250292",
          "mp4": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/giphy.mp4?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=giphy.mp4&ct=g"
        },
        "preview": {
          "height": "188",
          "width": "352",
          "mp4_size": "42621",
          "mp4": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/giphy-preview.mp4?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=giphy-preview.mp4&ct=g"
        },
        "preview_gif": {
          "height": "58",
          "width": "108",
          "size": "48265",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/giphy-preview.gif?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=giphy-preview.gif&ct=g"
        },
        "preview_webp": {
          "height": "146",
          "width": "272",
          "size": "41106",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/giphy-preview.webp?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=giphy-preview.webp&ct=g"
        },
        "480w_still": {
          "height": "257",
          "width": "480",
          "size": "2097876",
          "url": "https://media3.giphy.com/media/PELOkMAgwNZA9noYK0/480w_s.jpg?cid=7e4be442ub6cid6r5btnnii53b9xik5cph1pu3p7xtdl28m4&ep=v1_gifs_gifId&rid=480w_s.jpg&ct=g"
        }
      },
      "user": {
        "avatar_url": "https://media4.giphy.com/avatars/mls/h4Bu2tOxnyzi.png",
        "banner_image": "https://media4.giphy.com/channel_assets/mls/XxEtQBiDAX4l.gif",
        "banner_url": "https://media4.giphy.com/channel_assets/mls/XxEtQBiDAX4l.gif",
        "profile_url": "https://giphy.com/mls/",
        "username": Username.Andbox,
        "display_name": DisplayName.Nyxl,
        "description": "",
        "instagram_url": "https://instagram.com/mls",
        "website_url": "http://www.mlssoccer.com",
        "is_verified": true
      },
      "analytics_response_payload": "e=Z2lmX2lkPVBFTE9rTUFnd05aQTlub1lLMCZldmVudF90eXBlPUdJRl9CWV9JRCZjaWQ9N2U0YmU0NDJ1YjZjaWQ2cjVidG5uaWk1M2I5eGlrNWNwaDFwdTNwN3h0ZGwyOG00JmN0PWc",
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
