import { Col, Icon, Row } from '@antmjs/vantui';
import { observer } from 'mobx-react';
import { PureComponent } from 'react';

import { descriptionItems, homeItems, images } from '../api/home';
import { MainNav } from '../components/MainNav';
import { SwiperView } from '../components/SwiperView';

definePageConfig({
  navigationBarTitleText: '首页'
});

@observer
export default class HomePage extends PureComponent {
  render() {
    return (
      <>
        <SwiperView images={images} />

        <Row className='text-center my-2'>
          {descriptionItems.map(({ icon, text }) => (
            <Col span={8} key={text} className='text-nowrap'>
              <Icon name={icon} className='text-warning me-1' />
              {text}
            </Col>
          ))}
        </Row>

        <Row>
          {homeItems?.map(({ icon, text }) => (
            <Col className='text-center' key={text} span={6}>
              <div className='bg-primary p-3 rounded-circle text-white m-3 mb-2'>
                <Icon name={icon} style={{ fontSize: '1.5rem' }} />
              </div>
              {text}
            </Col>
          ))}
        </Row>

        <MainNav path='home' />
      </>
    );
  }
}
