import React, {Component} from 'react';
import {Grid, Carousel, SearchBar, NoticeBar} from 'antd-mobile';
class Modules extends Component {
  constructor() {
    super();
    const allModulesName = ['WIFI Speed', 'WIFI Users', 'Monitor']
    const modules = Array.from(allModulesName).map((name, i) => ({
      icon: '',
      text: name
    }));

    this.state={
      data: [1, 2, 3],
      modules: modules,
      imgHeight: 176,
    }
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return(
      <div>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <SearchBar placeholder="Search" maxLength={8} />
        <Grid data={this.state.modules} isCarousel onClick={_el => console.log(_el)} />
        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}  style={{position: 'absolute', bottom: '0', width:'100%'}}>
          Notice: @copyright Leon.Chen
        </NoticeBar>
      </div>
    )
  }
}
export default Modules;