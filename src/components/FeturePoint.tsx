interface FeaturePointsProps {
  count: string;
  title: string;
  description: string;
}

export default function FeaturePoints({
  count,
  title,
  description,
}: FeaturePointsProps) {
  return (
    <div className="feature-point">
      <div className="title">
        <span>{count}</span>
        <h4>{title}</h4>
      </div>
      <p className="desc">{description}</p>
    </div>
  );
}
