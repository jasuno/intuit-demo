import { colors } from "config/constants";
import { ReactElement } from "react";

const Button = (
  props: React.ComponentPropsWithoutRef<"button">
): ReactElement => {
  const { children } = props;
  return (
    <button
      style={{
        borderRadius: "10px",
        width: "100px",
        padding: "10px",
        backgroundColor: colors.blue,
        color: "white",
        marginRight: "10px",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
