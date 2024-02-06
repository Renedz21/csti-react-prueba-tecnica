import { DataTable } from "./users/data-table";
import { useGetUsers } from "./features/api";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Each from "./components/common/each";
import Spinner from "./components/common/spinner";
import SheetFilter from "./components/common/sheet-filter";
import Navbar from "@/components/common/navbar";
import Title from "./components/common/title";
import { columns } from "./users/columns";
import { nationalities } from "./utils/nationalities";

const formSchema = z.object({
  gender: z.string(),
  nat: z.string(),
});

const App = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "",
      nat: "",
    },
  });
  const { data, isLoading, isError } = useGetUsers();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  if (isError) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="text-3xl text-red-500">Error</h1>
      </div>
    );
  }

  return (
    <main className="h-screen w-full">
      <Navbar />
      <div className="container mx-auto h-full py-8">
        <div className="flex items-center justify-between">
          <Title title="Tabla de usuarios" />
          <SheetFilter
            title="Filtros"
            description="Filtre los usuarios por genero y nacionalidad"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Genero</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Genero" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="female">female</SelectItem>
                          <SelectItem value="male">male</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nacionalidad</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Nacionalidad" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <Each
                            of={nationalities}
                            render={(item: any) => (
                              <SelectItem value={item}>{item}</SelectItem>
                            )}
                          />
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </Form>
          </SheetFilter>
        </div>
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <DataTable data={data} columns={columns} searchKey="email" />
        )}
      </div>
    </main>
  );
};

export default App;
