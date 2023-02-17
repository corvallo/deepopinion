import { cloneElement, FC, useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface ListProps {
  children: JSX.Element[];
  rowHeight: number;
  gap?: number;
  bufferElements?: number;
}

const List: FC<ListProps> = ({ children, rowHeight = 100, gap = 1, bufferElements = 3 }) => {
  const listRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [listHeight, setListHeight] = useState<number>(0);

  useEffect(() => {
    if (listRef && listRef.current) setListHeight(listRef.current.offsetHeight);
  }, []);

  const baseStyles = useMemo(
    () => ({
      height: `${rowHeight}px`,
    }),
    [rowHeight]
  );

  const innerHeight = useMemo(() => rowHeight * (children.length - 1), [rowHeight, children.length]);

  const visibleChildrens = useMemo(() => {
    const start = Math.max(Math.floor(scrollPosition / rowHeight) - bufferElements, 0);
    const end = Math.min(Math.ceil((scrollPosition + listHeight) / rowHeight - 1) + bufferElements, children.length - 1);

    return children.slice(start, end + 1).map((element, index) => {
      const translateY = (start + index) * rowHeight + index * gap - 1;
      return cloneElement(element, {
        style: {
          ...baseStyles,
          transform: `translate3d(0,${translateY}px,0)`,
        },
      });
    });
  }, [children, scrollPosition, baseStyles, rowHeight, listHeight]);

  const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    scrollPositionRef.current = e.currentTarget.scrollTop;
    if (Math.abs(scrollPosition - scrollPositionRef.current) > rowHeight) {
      setScrollPosition(scrollPositionRef.current);
    }
  }, []);
  return (
    <div className='list' ref={listRef} onScroll={onScroll}>
      <div style={{ height: `${innerHeight}px` }}>{visibleChildrens}</div>
    </div>
  );
};
export default List;
