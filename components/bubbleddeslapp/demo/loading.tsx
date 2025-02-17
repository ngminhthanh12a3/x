import { UserOutlined } from '@ant-design/icons';
import { Bubble } from '@ant-design/x';
import { Flex, Switch } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  return (
    <Flex gap="large" vertical>
      <Bubble loading={loading} content="hello world !" avatar={{ icon: <UserOutlined /> }} />
      <Flex gap="large" wrap>
        Loading state:
        <Switch checked={loading} onChange={setLoading} />
      </Flex>
    </Flex>
  );
};

export default App;
