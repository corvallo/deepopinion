import { FC, useMemo, useRef } from "react";

const List: FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const innerHeight = useMemo(() => 100 * 99, []);

  return (
    <div className='list' ref={listRef}>
      <div style={{ height: `${innerHeight}px` }}>
        {new Array(100).fill({}).map((_, i) => (
          <div key={i}>{i}</div>
        ))}
      </div>
    </div>
  );
};
export default List;
