import { useDeckStore, useSlides } from '../store/deckStore';
import SlideRenderer from './slides/SlideRenderer';
import { slideFrame } from './slides/shared';

/** Renders every slide of the deck at print scale — mounted only while printing. */
export default function PrintDeck() {
  const slides = useSlides();
  const lang = useDeckStore((s) => s.lang);
  const moduleIds = useDeckStore((s) => s.moduleIds);
  return (
    <div className="print-deck">
      {slides.map((entry, i) => (
        <div className="print-page" key={`${entry.slide.id}-${i}`}>
          <div className="print-stage">
            <SlideRenderer
              slide={entry.slide}
              lang={lang}
              f={slideFrame(
                entry.moduleId,
                moduleIds,
                lang,
                i + 1,
                slides.length,
                entry.slide.band,
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
