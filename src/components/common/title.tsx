import { ITitleProps } from "@/types";
const Title = ({ title }: ITitleProps) => {
  return (
    <h1 className="text-pretty text-2xl font-bold text-gray-800">{title}</h1>
  );
};

export default Title;
