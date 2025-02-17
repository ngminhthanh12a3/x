import { UserOutlined } from '@ant-design/icons';
import { Bubble } from '@ant-design/x';
import { Button, Flex } from 'antd';
import React from 'react';

const text = 'Ant Design X love you! ';

const App = () => {
  const [repeat, setRepeat] = React.useState(1);

  return (
    <Flex vertical gap="small">
      <Bubble
        content={text.repeat(repeat)}
        typing={{ step: 2, interval: 50 }}
        avatar={{ icon: <UserOutlined /> }}
      />
      <Bubble
        content={text.repeat(repeat)}
        typing={{ step: 2, interval: 50, suffix: <>💗</> }}
        avatar={{ icon: <UserOutlined /> }}
      />

      <Button
        style={{ alignSelf: 'flex-end' }}
        onClick={() => {
          setRepeat((ori) => (ori < 5 ? ori + 1 : 1));
        }}
      >
        Repeat {repeat} Times
      </Button>
    </Flex>
  );
};

export default App;
