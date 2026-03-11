export const Card = ({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div className="bg-alchemy-surface border border-white/5 p-6 rounded-2xl hover:border-dynamic/50 transition-colors group shadow-xl">
      {title && (
        <h3 className="text-xl font-bold mb-1 group-hover:text-dynamic transition-colors">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-sm text-slate-400 mb-4 uppercase tracking-widest">
          {subtitle}
        </p>
      )}
      <div className="text-slate-300">{children}</div>
    </div>
  );
};
