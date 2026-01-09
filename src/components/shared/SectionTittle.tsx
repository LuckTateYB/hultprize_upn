import { cn } from "../../lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionTitle({ title, subtitle, centered = true, light = false, className }: SectionTitleProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className={cn(
        'font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4',
        light ? 'text-secondary-foreground' : 'text-gradient'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg max-w-2xl',
          centered && 'mx-auto',
          light ? 'text-secondary-foreground/80' : 'text-muted-foreground'
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        'mt-6 h-1 w-24 rounded-full',
        centered && 'mx-auto',
        light ? 'bg-accent' : 'bg-gradient-accent'
      )} />
    </div>
  );
}
