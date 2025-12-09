import { Button } from "@/components/ui/button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonComponent = ({ children, ...props }: Props) => {
  return (
    <Button
      className="bg-[#1A5D63] hover:bg-[#21767e]  text-[#fff] w-full border-black border-2 cursor-pointer"
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
