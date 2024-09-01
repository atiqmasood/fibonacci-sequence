import React, { useMemo } from "react";

interface SequenceItemProps {
  count: number;
  index: number;
}

const SequenceItem: React.FC<SequenceItemProps> = ({ count, index }) => {
  // Memoize the polygon rendering to avoid recalculating it on every render
  const polygon = useMemo(() => {
    switch (index % 3) {
      case 0:
        return (
          <div className="w-10 h-10 border-2 border-primary rounded-lg"></div>
        );
      case 1:
        return (
          <div className="w-10 h-10 border-2 border-primary rounded-full"></div>
        );
      case 2:
        return <div className="triangle w-10 h-10"></div>;
      default:
        return null;
    }
  }, [index]);

  return (
    <div
      className="flex justify-center w-full gap-4 flex-wrap px-8"
      key={`${count}${index}`}
    >
      {[...Array(count)].map((_, i) => (
        <div key={i}>{polygon}</div>
      ))}
    </div>
  );
};

export default React.memo(SequenceItem);
