import { useState, useEffect } from "react";
import { Nullish } from "@/types";
const useDebounce = (value: Nullish<string>, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<Nullish<string>>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;