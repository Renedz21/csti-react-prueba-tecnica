import { Button } from "@/components/ui/button";
import { IUserProps } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<IUserProps>[] = [
  {
    accessorKey: "picture",
    header: "Foto",
    cell: ({ row }) => {
      const { thumbnail } = row.original.picture;
      return (
        <img
          src={thumbnail}
          alt="user"
          className="h-auto w-10 rounded-full object-cover"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const { first, last } = row.original.name;
      return `${first} ${last}`;
    },
  },
  {
    accessorKey: "gender",
    header: "Genero",
    cell: ({ row }) => {
      const gender = row.original.gender;

      if (gender === "female") {
        return (
          <span className="rounded-full bg-pink-200 px-2 py-1 text-pink-700">
            {gender}
          </span>
        );
      } else {
        return (
          <span className="rounded-full bg-blue-200 px-2 py-1 text-blue-700">
            {gender}
          </span>
        );
      }
    },
  },
  {
    accessorKey: "email",
    header: "Correo",
  },
  {
    accessorKey: "phone",
    header: "Telefono",
  },
  {
    accessorKey: "nationality",
    header: "Nacionalidad",
    cell: ({ row }) => {
      const nat = row.original.nat;
      return nat;
    },
  },
];
