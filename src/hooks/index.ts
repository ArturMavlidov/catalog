import { useEffect, useRef, DependencyList } from "react";

export const useOnUpdate = (cb: () => void, deps: DependencyList) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    cb();
  }, [...deps]);
};
