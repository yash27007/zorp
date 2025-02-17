import { MouseEventHandler } from "react";

const Button = ({
  buttonText,
  onClick,
  variant = "primary",
}: {
  buttonText: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "outline";
}) => {
  const baseStyles =
    "px-6 py-3 rounded-xl shadow-md transition cursor-pointer font-medium";
  const styles = {
    primary: "bg-logo-green-500 text-white hover:bg-logo-green-300",
    outline: "border border-logo-green-500 text-logo-green-500",
  };

  return (
    <button className={`${baseStyles} ${styles[variant]}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export { Button };
