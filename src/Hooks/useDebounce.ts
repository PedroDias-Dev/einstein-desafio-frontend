import { useEffect, useState } from "react";

const UseDebounce = ({ value, delay }: { value: any; delay: number }) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default UseDebounce;
