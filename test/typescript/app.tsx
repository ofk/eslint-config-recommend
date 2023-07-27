import React, { useCallback, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from './button';
import { Text } from './text';

type AppProps<T = object> = { name: string; onButtonClick?: () => void } & T;

const App: React.FC<AppProps> = ({ name, onButtonClick }) => {
  const [text, setText] = useState<string | undefined>(undefined);
  const onClick = useCallback(() => {
    setText((prevText) => `Hello ${prevText ?? name}!`);
    onButtonClick?.();
  }, [name, onButtonClick]);
  return (
    <div>
      <Text color={text ? 'red' : undefined}>{text ?? 'Push button'}</Text>
      <Button onClick={onClick}>Hello</Button>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.querySelector('#app')!).render(<App name="world" />);
