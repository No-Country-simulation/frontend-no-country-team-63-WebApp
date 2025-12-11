import { Label } from "@/components/ui/label";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const LabelComponent = ({ children, ...props }: Props) => {
  return (
    <label className=" hover:text-[#287f87b7] text-[#000] text-left cursor-pointer" {...props}>
      {children}
    </label>
  );
};

export default LabelComponent;
