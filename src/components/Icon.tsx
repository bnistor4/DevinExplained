import { Circle, icons } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

/** Renders a lucide icon by its PascalCase name, falling back to a dot. */
export default function Icon({ name, ...props }: { name?: string } & LucideProps) {
  const Cmp = (name && icons[name as keyof typeof icons]) || Circle;
  return <Cmp {...props} />;
}
