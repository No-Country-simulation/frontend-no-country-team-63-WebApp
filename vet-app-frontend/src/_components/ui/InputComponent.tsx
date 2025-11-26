import { Input } from "@/components/ui/input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputComponent = ({ children, ...props }: Props) => {
  return (
    <input
      className="border-2 border-black placeholder:text-center p-2 hover:bg-[#287f87b7] focus:border-[#287F87]"
      {...props}
    />
  );
};

export default InputComponent;
