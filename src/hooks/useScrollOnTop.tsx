import { useCallback } from "react";

const useScrollOnTop = (selector: string) => {
  const scrollOnTop = useCallback(() => {
    document.querySelector(selector)?.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return { scrollOnTop };
};
export default useScrollOnTop;
