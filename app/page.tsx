"use client";

import React, { useCallback, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import Loading from "@/components/molecules/loading";
import type { Filters } from "@/types";
import ErrorComponent from "@/components/molecules/error";
import ActiveFilters from "@/components/molecules/activeFilters";

export default function Home() {
  const loading = false
  const error = ''
  const refetch = () => new Promise<void>((res) => res)

  const [filters, setFilters] = useState<Filters>({
    search: "",
    city: "",
    company: "",
  });

  const onChangeFilters = useCallback(
    (patch: Partial<Filters>) => setFilters((p) => ({ ...p, ...patch })),
    [],
  );
  const clearAll = useCallback(
    () => setFilters({ search: "", city: "", company: "" }),
    [],
  );

  if (loading) return <Loading />;
  if (error) return <ErrorComponent error={error} refetch={refetch} />;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            User Directory
          </h1>
          <p className="text-muted-foreground">
            Browse and filter through our user database
          </p>
        </div>

        <ActiveFilters
          filters={filters}
          onClear={clearAll}
          onChange={onChangeFilters}
        />

        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground text-lg">
              No users found matching your filters
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Try adjusting your search criteria
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
