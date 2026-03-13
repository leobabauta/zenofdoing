/** Day illustrations */

const DAY_IMAGES: Record<number, string> = {
  1: '/images/day1.png',
  2: '/images/day2.png',
  3: '/images/day3.png',
  4: '/images/day4.png',
  5: '/images/day5.png',
  6: '/images/day6.png',
};

export function DayIllustration({ day, className }: { day: number; className?: string }) {
  const src = DAY_IMAGES[day] || DAY_IMAGES[1];
  return (
    <img
      src={src}
      alt={`Day ${day} illustration`}
      className={className}
      style={{ display: 'block', width: '100%', height: 'auto' }}
    />
  );
}

/** @deprecated Use DayIllustration instead */
export function HomeIllustration({ className }: { className?: string }) {
  return <DayIllustration day={1} className={className} />;
}
