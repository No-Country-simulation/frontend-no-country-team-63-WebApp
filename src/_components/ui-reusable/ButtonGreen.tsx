import { Button } from "@/components/ui/button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonGreen = ({ children, ...props }: Props) => {
  return (
    
      <Button
        {...props}
        className="bg-[#1A5D63] hover:bg-[#217b83] cursor-pointer w-full p-[1rem] text-[#fff] max-w-[300px]"
      >
        {children}
      </Button>
    
  );
};

export default ButtonGreen;
