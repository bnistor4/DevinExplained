import { useDeckStore } from '../store/deckStore';

/**
 * Official brand lockups from public/assets/.
 * Note the inverted filenames: devin.png is the BLACK Devin lockup while
 * cognition.png is the WHITE Cognition lockup.
 * `dark` overrides the theme detection (e.g. for band:'dark' slides).
 */
const FILES = {
  devin: { black: '/assets/brand-logo-devin.png', white: '/assets/brand-logo-devin-1.png' },
  cognition: {
    black: '/assets/brand-logo-cognition-1.png',
    white: '/assets/brand-logo-cognition.png',
  },
} as const;

export default function BrandLogo({
  brand,
  height = 20,
  dark,
  className,
}: {
  brand: 'devin' | 'cognition';
  height?: number;
  dark?: boolean;
  className?: string;
}) {
  const theme = useDeckStore((s) => s.theme);
  const onDark = dark ?? theme === 'dark';
  return (
    <img
      src={onDark ? FILES[brand].white : FILES[brand].black}
      alt={brand === 'devin' ? 'Devin' : 'Cognition'}
      className={className}
      style={{ height, width: 'auto', display: 'block' }}
      draggable={false}
    />
  );
}
