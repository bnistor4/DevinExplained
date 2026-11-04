import type { ComponentType } from 'react';
import type { Lang } from '../../../content/schema';
import { trentoSlides } from './trento';
import TalkTimer from './common/TalkTimer';

export type CustomSlideProps = { lang: Lang; props?: Record<string, string> };
export type CustomSlideComponent = ComponentType<CustomSlideProps>;

export const customSlides: Record<string, CustomSlideComponent> = {
  ...trentoSlides,
  'talk-timer': TalkTimer,
};
