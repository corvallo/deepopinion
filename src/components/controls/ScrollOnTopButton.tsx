import { CSSProperties, FC, useCallback, useEffect, useRef, useState } from "react";
import useScrollOnTop from "../../hooks/useScrollOnTop";

const ScrollOnTopButton: FC = () => {
  const { scrollOnTop } = useScrollOnTop(".list");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});
  useEffect(() => {
    const observer = new IntersectionObserver(observeCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });
    const list = document.querySelector(".list");
    if (list) {
      observer.observe(list);
    }
    return () => {
      observer.unobserve(list!);
    };
  });

  const observeCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].target.scrollTop > 50) {
      buttonRef.current?.classList.remove("hide");
      buttonRef.current?.classList.add("show");
      setStyle({
        top: entries[0].target.clientHeight - buttonRef.current!.clientHeight,
        left: entries[0].target.clientWidth - buttonRef.current!.clientWidth,
      });
    } else {
      buttonRef.current?.classList.remove("show");
      buttonRef.current?.classList.add("hide");
    }
  }, []);

  return (
    <button ref={buttonRef} style={{ ...style }} className='btn-fab show' onClick={scrollOnTop}>
      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
        <path fill='white' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z' />
      </svg>
    </button>
  );
};
export default ScrollOnTopButton;
