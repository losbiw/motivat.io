import React, {FC} from 'react';
import {Image, ImageProps} from 'react-native';

interface Props extends ImageProps {
  color: string;
}

const Icon: FC<Props> = props => (
  <Image {...props} style={[{tintColor: props.color}, props.style]} />
);

export default Icon;
