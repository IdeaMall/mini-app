import { Col, Icon, Row } from '@antmjs/vantui';
import { FC } from 'react';

export type IconText = Record<'icon' | 'text', string>;

export type Icons = Partial<Record<'items', IconText[]>>;

export type DescriptionViewProps = Icons;

export const DescriptionView: FC<DescriptionViewProps> = ({ items }) => (
  <Row className='text-center my-2'>
    {items?.map(({ icon, text }) => (
      <Col span={8} key={text} className='text-nowrap'>
        <Icon name={icon} className='text-warning me-1' />
        {text}
      </Col>
    ))}
  </Row>
);

export type GridViewProps = Icons;

export const GridView: FC<GridViewProps> = ({ items }) => (
  <Row>
    {items?.map(({ icon, text }) => (
      <Col className='text-center' key={text} span={6}>
        <div className='bg-primary p-3 rounded-circle text-white m-3 mb-2'>
          <Icon name={icon} style={{ fontSize: '1.5rem' }} />
        </div>
        {text}
      </Col>
    ))}
  </Row>
);
