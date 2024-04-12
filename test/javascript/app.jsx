import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from './button';
import { Text } from './text';

// eslint-disable-next-line react-refresh/only-export-components
const App = ({ name, onButtonClick }) => {
  const [text, setText] = useState(undefined);
  const onClick = useCallback(() => {
    setText((prevText) => `Hello ${prevText || name}!`);
    if (onButtonClick) onButtonClick();
  }, [name, onButtonClick]);
  return (
    <div>
      <Text color={text ? 'red' : undefined}>{text || 'Push button'}</Text>
      <Button onClick={onClick}>Hello</Button>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

App.defaultProps = {
  onButtonClick: undefined,
};

createRoot(document.querySelector('#app')).render(<App name="world" />);
