import Button from "./Button";
import illustrationImage from "../../images/illustration-intro.svg";

export default function Hero() {
  return (
    <div className="container">
      <div className="Hero">
        <div className="Titles">
          <div className="texts">
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Mange makes it simple for software trams to plan day-to-day tasks
              while keeping the larger team goals in view
            </p>
            <Button />
          </div>
        </div>
        <div className="illustration">
          <img src={illustrationImage} alt="" />
        </div>
      </div>
      ;
    </div>
  );
}
