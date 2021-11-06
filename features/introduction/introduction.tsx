import React, {FC, useState} from 'react';
import Slide from './slide';
import slides from './slides-data';

interface Props {
  setIsIntroShown: boolean;
}

const Introduction: FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Slide
      setSlideIndex={setSlideIndex}
      slideIndex={slideIndex}
      {...slides[slideIndex]}
    />
  );
};

export default Introduction;
