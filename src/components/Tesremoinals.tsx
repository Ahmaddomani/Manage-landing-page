import Card from "./Card";
import anisha from "../../images/avatar-anisha.png";
import ali from "../../images/avatar-ali.png";
import richerd from "../../images/avatar-richard.png";
import shania from "../../images/avatar-shanai.png";
import { AishaText, AliBravo, Richard, Shanai } from "./DescriptioTexts";
import { useEffect } from "react";
import Button from "./Button";

export default function Testimonials() {
  useEffect(() => {
    const Wrapper = document.querySelector<HTMLDivElement>(".Cards-wrapper");

    const card = document.querySelector<HTMLDivElement>(".card");

    const Pointers = [
      ...document.querySelectorAll<HTMLSpanElement>(".pointer"),
    ];

    // scroll Function
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (Wrapper && card) {
        Wrapper.scrollLeft += event.deltaY * 10;
      }
    };

    // Get the Image That is on the viewport (in the face of the user (the active) ) and its index

    if (Wrapper && card) {
      Wrapper.addEventListener("scroll", () => {
        const activeIndex = Math.round(Wrapper.scrollLeft / card.clientWidth);
        // Pointers function
        Pointers.forEach((pointer, index) => {
          pointer.classList.toggle("active", index === activeIndex);
        });
      });
    }

    Pointers.forEach((pointer) => {
      pointer.addEventListener("click", () => {
        if (card) {
          const indexpointer = Pointers.indexOf(pointer);
          Wrapper?.scrollTo({
            left: Math.round((card?.offsetWidth + 50) * indexpointer),
          });
        }
      });
    });

    if (Wrapper) {
      Wrapper.addEventListener("wheel", handleWheel, { passive: false });
    }
  }, []);
  return (
    <div className="Testimonials">
      <h1 className="title">What they've said</h1>
      <div className="Cards-wrapper ">
        <Card imgUrl={anisha} title="Anisha Li" description={AishaText} />
        <Card imgUrl={ali} title="Ali Bravo" description={AliBravo} />
        <Card imgUrl={richerd} title="Richard Watts" description={Richard} />
        <Card imgUrl={shania} title="Shanai Gough" description={Shanai} />
      </div>
      <div className="Pointers-points">
        <span className="active pointer"></span>
        <span className="pointer"></span>
        <span className="pointer"></span>
        <span className="pointer"></span>
      </div>
      <Button />
    </div>
  );
}
