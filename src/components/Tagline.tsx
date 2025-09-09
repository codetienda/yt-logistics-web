import React from "react";
import clsx from "clsx";

type TaglineProps = {
  label: string;
  dotColor?: string;
  dotSize?: number;
  className?: string;
};

const Tagline: React.FC<TaglineProps> = ({
  label,
  dotColor = "bg-amber-600",
  dotSize = 12,
  className = "",
}) => {
  return (
    <div className={clsx("flex items-center gap-2 mb-2", className)}>
      <span
        className={clsx("rounded-full", dotColor)}
        style={{ width: dotSize, height: dotSize }}
      />
      <p className="text-sm font-light uppercase m-0">{label}</p>
    </div>
  );
};

export default Tagline;
