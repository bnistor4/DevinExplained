import type { Lang, Slide } from '../../content/schema';
import TitleSlide from './TitleSlide';
import BulletsSlide from './BulletsSlide';
import CompareSlide from './CompareSlide';
import TimelineSlide from './TimelineSlide';
import StatsSlide from './StatsSlide';
import CardsSlide from './CardsSlide';
import QuoteSlide from './QuoteSlide';
import AnalogySlide from './AnalogySlide';
import PricingSlide from './PricingSlide';
import CodeSlide from './CodeSlide';
import MediaSlide from './MediaSlide';
import PeopleSlide from './PeopleSlide';
import QaSlide from './QaSlide';
import AgendaSlide from './AgendaSlide';
import CommunitySlide from './CommunitySlide';
import StorySlide from './StorySlide';
import SlideFrame from './SlideFrame';
import { customSlides } from './custom';
import type { Frame } from './shared';
import './slides.css';

export default function SlideRenderer({
  slide,
  lang,
  f,
}: {
  slide: Slide;
  lang: Lang;
  f: Frame;
}) {
  const b = slide.block;
  switch (b.type) {
    case 'title':
      return <TitleSlide block={b} lang={lang} f={f} />;
    case 'bullets':
      return <BulletsSlide block={b} lang={lang} f={f} />;
    case 'compare':
      return <CompareSlide block={b} lang={lang} f={f} />;
    case 'timeline':
      return <TimelineSlide block={b} lang={lang} f={f} />;
    case 'stats':
      return <StatsSlide block={b} lang={lang} f={f} />;
    case 'cards':
      return <CardsSlide block={b} lang={lang} f={f} />;
    case 'quote':
      return <QuoteSlide block={b} lang={lang} f={f} />;
    case 'analogy':
      return <AnalogySlide block={b} lang={lang} f={f} />;
    case 'pricing':
      return <PricingSlide block={b} lang={lang} f={f} />;
    case 'code':
      return <CodeSlide block={b} lang={lang} f={f} />;
    case 'media':
      return <MediaSlide block={b} lang={lang} f={f} />;
    case 'people':
      return <PeopleSlide block={b} lang={lang} f={f} />;
    case 'qa':
      return <QaSlide block={b} lang={lang} f={f} />;
    case 'agenda':
      return <AgendaSlide block={b} lang={lang} f={f} />;
    case 'community':
      return <CommunitySlide block={b} lang={lang} f={f} />;
    case 'story':
      return <StorySlide block={b} lang={lang} f={f} />;
    case 'custom': {
      const Cmp = customSlides[b.component];
      return (
        <SlideFrame f={f} className="slide-custom">
          {Cmp ? (
            <Cmp lang={lang} props={b.props} />
          ) : (
            <p className="slide-custom-missing">missing custom slide: {b.component}</p>
          )}
        </SlideFrame>
      );
    }
    default:
      return null;
  }
}
