import type { BubbleToken } from '.';
import type { GenerateStyle } from '../../theme/cssinjs-utils';

const genBubbleListStyle: GenerateStyle<BubbleToken> = (token) => {
  const { componentCls, padding } = token;
  return {
    [`${componentCls}-list`]: {
      display: 'flex',
      flexDirection: 'column',
      gap: padding,
      overflowY: 'auto',
    },
  };
};

export default genBubbleListStyle;
