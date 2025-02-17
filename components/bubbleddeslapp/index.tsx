import Bubble from './Bubble';
import List from './BubbleList';

export type { BubbleProps as BubbleDESLAPPProps } from './interface';

type BubbleDESLAPPType = typeof Bubble & {
  List: typeof List;
};

(Bubble as BubbleDESLAPPType).List = List;

export default Bubble as BubbleDESLAPPType;
