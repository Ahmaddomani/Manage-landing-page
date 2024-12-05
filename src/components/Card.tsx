interface CardProps {
  imgUrl: string;
  title: string;
  description: string;
}

export default function Card({ imgUrl, title, description }: CardProps) {
  return (
    <div className="card">
      <img src={imgUrl} alt="" />
      <h4>{title}</h4>
      <p className="desc">{description}</p>
    </div>
  );
}
