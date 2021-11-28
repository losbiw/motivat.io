import {useEffect, useRef} from 'react';

const usePrevious = (value: any) => {
  const ref = useRef(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
