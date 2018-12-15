import React from 'react';
import style from '../bootstrap.min.css';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trail: {
        type: 'trail',
        id: '1',
        attributes: {
          trailName: 'Golden Gate Park Trail',
          distance: 6.1,
          distanceUnits: 'miles',
          elevationGain: 351,
          elevationUnits: 'ft',
          description: 'Golden Gate Park Trail is a 6.1 mile heavily trafficked loop trail located near San Francisco, California that features a lake and is good for all skill levels. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
          routeType: 'Loop',
          difficulty: 'Easy',
          tags: [
            'dogs on leash',
            'kid friendly',
            'birding',
            'hiking',
            'mountain biking',
            'nature trips',
            'road biking',
            'trail running',
            'walking',
            'forest',
            'lake',
            'partially paved'
          ],
          'general_area': 'Golden Gate Park',
          'origin': 'https://www.alltrails.com/trail/us/california/golden-gate-park-trail'
        }
      },
      heroPhoto: {
        type: 'trail-photos',
        id: '3',
        attributes: {
          photoUrl: 'https://source.unsplash.com/random/975x375',
          trailId: '5',
          userId: '33',
          uploadDate: '2018-09-23T22:58:42.900Z',
          caption: 'Buffalo in Golden Gate Park',
          isHeroPhoto: 'true'
        }
      },
      photoCount: {
        data: {
          type: 'trail-photos-count',
          attributes: {
            trailId: '1',
            count: '10'
          }
        }
      }
    };
    this.getTrailInfo = this.getTrailInfo.bind(this);
  }

  componentDidMount() {
    // this.getTrailInfo();
  }

  getTrailInfo() {
    fetch('http://localhost:3001/1/trailInfo')
      .then((response) => {
        response.json()
          .then((res) => {
            this.setState((prevState) => ({
              trail: res.data
            }));
            // console.log('this.state.trail: ', res.data);
          });
      });
  }

  render() {
    return (
      <div>
        {/* Template strings (template literals) used for css module format of Bootstrap class names */}
        {/* See webpack.config.js css-loader options for localIdentName syntax of css output */}
        {/* <!-- text/overlay content on banner --> */}
        <div id="banner_content" className="row flex-row justify-content-left align-items-end col-12">
          <div className="trail_title_wpr d-flex">
            <img src={this.state.heroPhoto.attributes.photoUrl} alt="hero img" />
            <h2>{this.state.trail.attributes.trailName}</h2>
            <div>{this.state.trail.attributes.difficulty} <span>⭐️⭐️⭐️ 8 Reviews</span></div>
            <div><span>&#35;1 of 10 trails in Golden Gate Park</span></div>
            <div>{this.state.photoCount.data.attributes.count} photos</div>
          </div>
        </div>
        {/* <!-- little bubble badges--> */}
        <div id="bubble_menu" className="row flex-row justify-content-around">

          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble d-none d-lg-flex"></div>
          <div className="bubble d-none d-lg-flex"></div>
          <div className="bubble"></div>

        </div>
      </div>
    );
  }
}
