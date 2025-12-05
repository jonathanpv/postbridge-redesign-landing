import { Newspaper, Clapperboard, Bird, Bot, type LucideProps } from 'lucide-react';
import React from 'react';

// The user will replace these with actual brand logos later.
// Using lucide-react icons as placeholders.
const featuredOn = [
  {
    name: "TechCrunch",
    Icon: Newspaper,
  },
  {
    name: "Product Hunt",
    Icon: Clapperboard,
  },
  {
    name: "Twitter",
    Icon: Bird,
  },
  {
    name: "Indie Hackers",
    Icon: Bot,
  },
];

export const AsFeaturedOnSection = () => {
  return (
    <div className="w-full mx-auto py-36">
      <p className="text-center text-sm font-medium tracking-widest text-muted-foreground uppercase mb-8">
        FEATURED ON
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {featuredOn.map(({ name, Icon }) => (
          <div
            key={name}
            className="flex items-center justify-center gap-3 h-16 px-6 bg-brand-50/20 rounded-3xl  shadow-[inset_0_0px_10px_var(--brand-300)]"
          >
            <Icon className="h-6 w-6 text-muted-foreground opacity-80" />
            <span className="text-lg font-semibold text-muted-foreground opacity-80">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};