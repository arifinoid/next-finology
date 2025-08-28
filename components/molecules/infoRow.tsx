type InfoRowProps = { icon: React.ReactNode; label: string; value: string };

export default function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {icon}
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium truncate" title={value}>
        {value}
      </span>
    </div>
  );
}
