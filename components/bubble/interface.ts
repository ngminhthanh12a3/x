import type { AvatarProps } from 'antd';
import type { AnyObject } from '../_util/type';

export interface TypingOption {
  /**
   * @default 1
   */
  step?: number;
  /**
   * @default 50
   */
  interval?: number;
  /**
   * @default null
   */
  suffix?: React.ReactNode;
}

type SemanticType = 'avatar' | 'content' | 'header' | 'footer';

export type BubbleContentType = React.ReactNode | AnyObject;

export interface BubbleProps<ContentType extends BubbleContentType = string>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  bubbleKey: string | number;
  prefixCls?: string;
  rootClassName?: string;
  styles?: Partial<Record<SemanticType, React.CSSProperties>>;
  classNames?: Partial<Record<SemanticType, string>>;
  avatar?: AvatarProps | React.ReactElement;
  placement?: 'start' | 'end';
  loading?: boolean;
  typing?: boolean | TypingOption;
  content?: BubbleContentType;
  messageRender?: (
    content: ContentType,
    defaultRender: (content: string) => React.ReactNode,
    bubbleKey: string | number,
  ) => React.ReactNode;
  loadingRender?: () => React.ReactNode;
  variant?: 'filled' | 'borderless' | 'outlined' | 'shadow';
  shape?: 'round' | 'corner';
  onTypingComplete?: VoidFunction;
  header?: (bubbleKey: string | number, content: ContentType) => React.ReactNode;
  footer?: (bubbleKey: string | number, content: ContentType) => React.ReactNode;
}
