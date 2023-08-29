import Button from "components/Button";
import CardComponent from "components/Card";
import { ButtonDir } from "config/emuns";
import { ReactElement, useState } from "react";

type CarouselProps = {
  data: string[];
};

const Carousel = ({ data }: CarouselProps): ReactElement => {
  const [pointerPosition, setPointerPosition] = useState(0);

  const movePorter = async (dir: ButtonDir) => {
    if (dir === ButtonDir.RIGHT) {
      if (pointerPosition < data.length - 1) {
        setPointerPosition(pointerPosition + 1);
      } else {
        setPointerPosition(0);
      }
    }
    if (dir === ButtonDir.LEFT) {
      if (pointerPosition > 0) {
        setPointerPosition(pointerPosition - 1);
      } else {
        setPointerPosition(data.length - 1);
      }
    }
  };

  return (
    <>
      <section>
        <div style={{ display: "flex" }}>
          {data.map((url, index) => {
            return (
              <div style={{ marginRight: "24px" }}>
                <CardComponent
                  isSelected={index === pointerPosition}
                  key={index}
                  imageSrc={url}
                />
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Button onClick={() => movePorter(ButtonDir.LEFT)}>Left</Button>
          <Button onClick={() => movePorter(ButtonDir.RIGHT)}>Right</Button>
        </div>
      </section>
    </>
  );
};

export default Carousel;
