import { useEffect, useState } from "react";

/**
 * Debounced state hook to avoid filtering on every keypress
 */
export default function useDebouncedValue<T>(value: T, ms = 200) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);

  return debounced;
}
