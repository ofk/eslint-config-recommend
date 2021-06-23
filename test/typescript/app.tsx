import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

import { Button } from './button';
import { Text } from './text';

const App: React.FC<{ name: string }> = ({ name }) => {
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

ReactDOM.render(<App name="world" />, document.querySelector('#app'));
