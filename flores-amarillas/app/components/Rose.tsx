interface RoseProps {
  color?: string;
  scale?: number;
  delay?: number;
}

export default function Rose({
  color = "#e11d48",
  scale = 1,
  delay = 0,
}: RoseProps) {
  return (
    <div
      className="flower-wrapper"
      style={{
        transform: `scale(${scale})`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="rose">
        <div className="rose-petal rose-petal-1" style={{ backgroundColor: color }}></div>
        <div className="rose-petal rose-petal-2" style={{ backgroundColor: color }}></div>
        <div className="rose-petal rose-petal-3" style={{ backgroundColor: color }}></div>
        <div className="rose-petal rose-petal-4" style={{ backgroundColor: color }}></div>
        <div className="rose-center"></div>
      </div>

      <div className="stem"></div>
      <div className="leaf leaf-left"></div>
      <div className="leaf leaf-right"></div>
    </div>
  );
}