export type MascotMood = 'idle' | 'wink' | 'think';

/**
 * The official Devin otter mascot (public/assets/devin.png).
 * wink: quick tilt+pop. think: gentle float.
 */
export default function Mascot({
  mood = 'idle',
  size = 120,
  className,
}: {
  mood?: MascotMood;
  size?: number;
  className?: string;
}) {
  return (
    <img
      src="/assets/devin.png"
      alt="Devin"
      className={`mascot mascot--${mood}${className ? ` ${className}` : ''}`}
      style={{ width: size, height: size }}
      draggable={false}
    />
  );
}
