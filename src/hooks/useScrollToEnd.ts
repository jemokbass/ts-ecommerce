import { useEffect } from "react";

export const useScrollToEnd = (action: () => void, withLastPage: boolean = false) => {
  useEffect(() => {
    const onScroll = (e: Event) => {
      const target = e.currentTarget as Window;

      if (target.innerHeight + target.scrollY >= document.body.scrollHeight && !withLastPage) {
        action();
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [action, withLastPage]);
};
