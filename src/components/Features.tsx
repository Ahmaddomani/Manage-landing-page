import { firstDes, secondDes, ThirdDes } from "./DescriptioTexts.tsx";
import FeaturePoints from "./FeturePoint";
export { firstDes, secondDes, ThirdDes } from "./DescriptioTexts";

export default function Features() {
  return (
    <div className="container">
      <div className="features">
        <div className="features-text">
          <h1>What's different about Mange?</h1>
          <p>
            Mange provides all the functionality your team needs,without the
            complexity.Our software is tailor-made for modern digital product
            team.
          </p>
        </div>
        <div className="features-points">
          <FeaturePoints
            count={"01"}
            title={"Track company-wide progress"}
            description={firstDes}
          />
          <FeaturePoints
            count={"02"}
            title={"Track company-wide progress"}
            description={secondDes}
          />
          <FeaturePoints
            count={"03"}
            title={"Track company-wide progress"}
            description={ThirdDes}
          />
        </div>
      </div>
    </div>
  );
}
