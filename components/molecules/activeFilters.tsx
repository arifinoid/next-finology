import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { hasValue } from "@/lib/utils";
import type { Filters } from "@/types";
import { X } from "lucide-react";

type ActiveFiltersProps = {
  filters: Filters;
  onClear: () => void;
  onChange: (patch: Partial<Filters>) => void;
};

export default function ActiveFilters({
  filters,
  onClear,
  onChange,
}: ActiveFiltersProps) {
  const hasActive =
    hasValue(filters.search) ||
    hasValue(filters.city) ||
    hasValue(filters.company);
  if (!hasActive) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-muted-foreground">Active filters:</span>
      {hasValue(filters.search) && (
        <Badge variant="secondary" className="gap-1">
          Search: {filters.search}
          <X
            className="h-3 w-3 cursor-pointer"
            onClick={() => onChange({ search: "" })}
          />
        </Badge>
      )}
      {hasValue(filters.city) && (
        <Badge variant="secondary" className="gap-1">
          City: {filters.city}
          <X
            className="h-3 w-3 cursor-pointer"
            onClick={() => onChange({ city: "" })}
          />
        </Badge>
      )}
      {hasValue(filters.company) && (
        <Badge variant="secondary" className="gap-1">
          Company: {filters.company}
          <X
            className="h-3 w-3 cursor-pointer"
            onClick={() => onChange({ company: "" })}
          />
        </Badge>
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={onClear}
        className="ml-1 bg-transparent"
      >
        Clear All
      </Button>
    </div>
  );
}
