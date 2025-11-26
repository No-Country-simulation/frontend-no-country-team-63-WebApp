import { Button } from "@/components/ui/button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonComponent = ({ children, ...props }: Props) => {
  return (
    <Button
      className="bg-[#E8E8E8] hover:bg-[#f5f4f4]  text-[#000] w-full border-black border-2 cursor-pointer"
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
