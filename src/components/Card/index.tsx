import { colors } from "config/constants";
import { ReactElement } from "react";
import { motion } from "framer-motion";

type CardComponent = {
  imageSrc: string;
  isSelected: boolean;
};

const CardComponent = ({
  imageSrc,
  isSelected,
}: CardComponent): ReactElement => {
  const variants = {
    selected: { scale: 1.1 },
    default: { scale: 0.9 },
  };

  return (
    <motion.div
      animate={isSelected ? "selected" : "default"}
      variants={variants}
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "10px",
        border: isSelected ? `2px solid ${colors.peach}` : "none",
        overflow: "clip",
      }}
    >
      <img
        style={{ objectFit: "cover", height: "150px" }}
        src={imageSrc}
        alt="image"
      />
    </motion.div>
  );
};

export default CardComponent;
