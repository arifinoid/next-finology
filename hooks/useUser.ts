import { API_URL } from "@/constants";
import type { User } from "@/types";
import { useCallback, useEffect, useState } from "react";

/**
 * Fetch hook with AbortController & simple retry
 */
export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL, { signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data: User[] = await res.json();
      setUsers(Array.isArray(data) ? data : []);
    } catch (err: unknown) {
      if ((err as any)?.name === "AbortError") return;
      setError(err instanceof Error ? err.message : "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const ac = new AbortController();

    fetchUsers(ac.signal);

    return () => ac.abort();
  }, [fetchUsers]);

  return { users, loading, error, refetch: () => fetchUsers() };
}
