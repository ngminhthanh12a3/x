import { UserOutlined } from '@ant-design/icons';
import { BubbleDESLAPP } from '@ant-design/x';
/* eslint-disable react/no-danger */
import React from 'react';

const text = `
> Render as markdown content to show rich text!

Link: [Ant Design X](https://x.ant.design)

\`\`\`verilog
module a();
endmodule
\`\`\`
`.trim();

const App = () => {
  const [renderKey, setRenderKey] = React.useState(0);

  // React.useEffect(() => {
  //   const id = setTimeout(
  //     () => {
  //       setRenderKey((prev) => prev + 1);
  //     },
  //     text.length * 100 + 2000,
  //   );

  //   return () => {
  //     clearTimeout(id);
  //   };
  // }, [renderKey]);

  return (
    <div style={{ height: 100 }} key={renderKey}>
      <BubbleDESLAPP content={text} avatar={{ icon: <UserOutlined /> }} />
    </div>
  );
};

export default App;
