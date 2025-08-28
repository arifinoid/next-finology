"use client";

import React, { useCallback, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import Loading from "@/components/molecules/loading";
import useUsers from "@/hooks/useUser";
import type { Filters, User } from "@/types";
import { hasValue, normalize } from "@/lib/utils";
import ErrorComponent from "@/components/molecules/error";
import FiltersBar from "@/components/organisms/filtersBar";
import ActiveFilters from "@/components/molecules/activeFilters";
import UserCard from "@/components/organisms/userCard";

export default function Home() {
  const { users, loading, error, refetch } = useUsers();
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

  const { cities, companies } = useMemo(() => {
    const getCity = (u: User) => u.address?.city;
    const getCompanyName = (u: User) => u.address?.city;

    const cities: string[] = [
      ...new Set(users.map(getCity).filter(Boolean)),
    ].sort();
    const companies: string[] = [
      ...new Set(users.map(getCompanyName).filter(Boolean)),
    ].sort();

    return { cities, companies };
  }, [users]);

  const filtered = useMemo(() => {
    const q = normalize(filters.search);
    return users.filter((u) => {
      const byName = !hasValue(q) || normalize(u.name).includes(q);
      const byCity =
        !hasValue(filters.city) || u.address?.city === filters.city;
      const byCompany =
        !hasValue(filters.company) || u.company?.name === filters.company;

      return byName && byCity && byCompany;
    });
  }, [users, filters]);

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

        <FiltersBar
          filters={filters}
          onChange={onChangeFilters}
          cities={cities}
          companies={companies}
        />
        <ActiveFilters
          filters={filters}
          onClear={clearAll}
          onChange={onChangeFilters}
        />

        <div className="my-6">
          <p className="text-muted-foreground">
            Showing {filtered.length} of {users.length} users
          </p>
        </div>

        {filtered.length === 0 ? (
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((u) => (
              <UserCard key={u.id} user={u} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
