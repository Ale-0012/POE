interface FlowerProps {
  color?: string;
  centerColor?: string;
  scale?: number;
  delay?: number;
}

export default function Flower({
  color = "#facc15",
  centerColor = "#78350f",
  scale = 1,
  delay = 0,
}: FlowerProps) {
  return (
    <div
      className="flower-wrapper"
      style={{
        transform: `scale(${scale})`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="flower">
        <div className="petal petal-top" style={{ backgroundColor: color }}></div>
        <div className="petal petal-right" style={{ backgroundColor: color }}></div>
        <div className="petal petal-bottom" style={{ backgroundColor: color }}></div>
        <div className="petal petal-left" style={{ backgroundColor: color }}></div>

        <div className="petal petal-top-right" style={{ backgroundColor: color }}></div>
        <div className="petal petal-bottom-right" style={{ backgroundColor: color }}></div>
        <div className="petal petal-bottom-left" style={{ backgroundColor: color }}></div>
        <div className="petal petal-top-left" style={{ backgroundColor: color }}></div>

        <div
          className="flower-center"
          style={{ backgroundColor: centerColor }}
        ></div>
      </div>

      <div className="stem"></div>
      <div className="leaf leaf-left"></div>
      <div className="leaf leaf-right"></div>
    </div>
  );
}