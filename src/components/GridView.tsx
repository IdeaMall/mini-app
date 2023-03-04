import { Col, Icon, Row } from '@antmjs/vantui';
import { View } from '@tarojs/components';
import { FC } from 'react';
import { descriptionItems, homeItems } from '../api/home';

export const HomeGridLayout: FC = () => (
  <View>
    <DescriptionView items={descriptionItems} />
    <GridView items={homeItems} />
  </View>
);

export type IconText = Record<'icon' | 'text', string>;

export type Icons = Partial<Record<'items', IconText[]>>;

export type DescriptionViewProps = Icons;

export const DescriptionView: FC<DescriptionViewProps> = ({ items }) => (
  <Row className="text-center my-2">
    {items?.map(({ icon, text }, index) => (
      <Col span={8} key={index} className="text-nowrap">
        <Icon name={icon} className="idea-text-yellow me-1" />
        {text}
      </Col>
    ))}
  </Row>
);

export type GridViewProps = Icons;

// todo: rename this variable
export const GridView: FC<GridViewProps> = ({ items }) => {
  return (
    <Row>
      {items?.map(({ icon, text }, index) => (
        <Col className="text-center" key={index} span={6}>
          <div className="idea-bg-primary p-3 rounded-circle text-white m-3 mb-2">
            <Icon name={icon} style={{ fontSize: '1.5rem' }} />
          </div>
          <span>{text}</span>
        </Col>
      ))}
    </Row>
  );
};
