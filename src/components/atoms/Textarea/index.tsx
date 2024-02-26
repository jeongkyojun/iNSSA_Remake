import React, { useEffect, useRef } from 'react';
import { StyledTextarea } from './styles';
import { PropTypes } from './types';

const Textarea = ({ id, name, changeHandler, ...rest }: PropTypes) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = ref.current.scrollHeight + 'px';
    }
  }, []);

  return (
    <StyledTextarea
      id={id}
      name={name}
      ref={ref}
      onChange={e => changeHandler?.(e)}
      {...rest}
    />
  );
};

export default Textarea;
