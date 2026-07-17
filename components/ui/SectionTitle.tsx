interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center md:mb-16">
      {label && (
        <span className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {label}
        </span>
      )}
      <h2 className="mt-2 mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="h-px w-16 bg-border" />
        <div className="h-2 w-2 rounded-full bg-primary" />
        <div className="h-px w-16 bg-border" />
      </div>
    </div>
  );
}
