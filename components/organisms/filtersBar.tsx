import useDebouncedValue from "@/hooks/useDebouncedValue";
import type { Filters } from "@/types";
import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

type FiltersBarProps = {
  filters: Filters;
  onChange: (patch: Partial<Filters>) => void;
  cities: string[];
  companies: string[];
};

export default function FiltersBar({
  filters,
  onChange,
  cities,
  companies,
}: FiltersBarProps) {
  const [searchDraft, setSearchDraft] = useState(filters.search);
  const debounced = useDebouncedValue(searchDraft, 250);

  useEffect(() => {
    if (debounced !== filters.search) onChange({ search: debounced });
  }, [debounced]);

  useEffect(() => {
    if (filters.search === "" && searchDraft !== "") setSearchDraft("");
  }, [filters.search]);

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5" /> Filters
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="search-name"
            >
              Search by name
            </label>
            <Input
              id="search-name"
              placeholder="Enter user name..."
              value={searchDraft}
              onChange={(e) => setSearchDraft(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Filter by city
            </label>
            <Select
              value={filters.city}
              onValueChange={(v) => onChange({ city: v })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select city..." />
              </SelectTrigger>
              <SelectContent>
                {cities.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Filter by company
            </label>
            <Select
              value={filters.company}
              onValueChange={(v) => onChange({ company: v })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select company..." />
              </SelectTrigger>
              <SelectContent>
                {companies.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
