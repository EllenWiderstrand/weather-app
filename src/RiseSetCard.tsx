import "./App.css";

interface RiseSetCardProps {
  icon: string;
  title: string;
  value: string;
}

const RiseSetCard = ({ icon, title, value }: RiseSetCardProps) => {
  return (
    <div className="rise-set-card">
      <span>{title}</span>
      <div className="card-info">
        <img className="card-img" src={icon} alt={title} />
        <span>{value}</span>
      </div>
    </div>
  );
};

export default RiseSetCard;
