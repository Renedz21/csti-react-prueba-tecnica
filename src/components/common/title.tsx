import { ITitleProps } from "@/types";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const Title = ({ title }: ITitleProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-pretty text-3xl font-bold text-gray-800">{title}</h1>
      <Button className="flex items-center gap-2" variant="outline">
        <SlidersHorizontal className="h-4 w-4 text-gray-700" />
        <span className="text-base">Filtros</span>
      </Button>
    </div>
  );
};

export default Title;
