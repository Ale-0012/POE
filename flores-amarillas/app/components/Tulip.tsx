interface TulipProps {
  color?: string;
  scale?: number;
  delay?: number;
}

export default function Tulip({
  color = "#fb7185",
  scale = 1,
  delay = 0,
}: TulipProps) {
  return (
    <div
      className="flower-wrapper"
      style={{
        transform: `scale(${scale})`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="tulip">
        <div className="tulip-petal tulip-petal-left" style={{ backgroundColor: color }}></div>
        <div className="tulip-petal tulip-petal-right" style={{ backgroundColor: color }}></div>
        <div className="tulip-petal tulip-petal-center" style={{ backgroundColor: color }}></div>
      </div>

      <div className="stem"></div>
      <div className="leaf leaf-left"></div>
      <div className="leaf leaf-right"></div>
    </div>
  );
}