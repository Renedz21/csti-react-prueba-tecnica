import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react";

type SheetFilterProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  onClean?: () => void;
};

const SheetFilter = ({
  children,
  description,
  title,
  onClean,
}: SheetFilterProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center gap-2" variant="outline">
          <SlidersHorizontal className="h-4 w-4 text-gray-700" />
          <span className="text-base">Filtros</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {children}
        <SheetFooter>
          <SheetClose asChild>
            <Button
              className="w-full"
              variant="outline"
              onClick={onClean}
              type="button"
            >
              Limpiar filtros
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetFilter;
