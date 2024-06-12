import { FC, ReactNode } from "react";
import { ButtonProps, Button as RAButton } from "react-aria-components";
import { tv } from "tailwind-variants";

interface ButtonTypes extends ButtonProps {
  /**
   * The variant of the component
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "link";
  /**
   * The size of the component
   * @default "medium"
   */
  size: "small" | "medium" | "large";
  /**
   * The element will placed at the start
   */
  startIcon?: ReactNode;
  /**
   * The element will placed at the end
   */
  endIcon?: ReactNode;
}

const buttonVariant = tv({
  base: ["font-poppins"],
  variants: {
    variant: {
      primary:
        "border border-primary p-2.5 leading-tight hover:bg-primary hover:text-white",
      secondary: "",
      link: "",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

const Button: FC<ButtonTypes> = ({
  children,
  variant,
  startIcon,
  endIcon,
  ...rest
}) => {
  return (
    <RAButton className={buttonVariant({ variant })} {...rest}>
      <>
        {startIcon}
        {children}
        {endIcon}
      </>
    </RAButton>
  );
};

export default Button;
