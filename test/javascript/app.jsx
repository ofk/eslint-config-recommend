import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

import { Button } from './button';
import { Text } from './text';

const App = ({ name }) => {
  const [text, setText] = useState(undefined);
  const onClick = useCallback(() => {
    setText((prevText) => `Hello ${prevText || name}!`);
  }, [name]);
  return (
    <div>
      <Text color={text ? 'red' : undefined}>{text || 'Push button'}</Text>
      <Button onClick={onClick}>Hello</Button>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};

ReactDOM.render(<App name="world" />, document.querySelector('#app'));
