import Navbar from "@/components/common/navbar";
import Title from "./components/common/title";
import { DataTable } from "./users/data-table";
import { useGetUsers } from "./features/api";
import { columns } from "./users/columns";

const App = () => {
  const { data, isLoading } = useGetUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="container mx-auto py-8">
        <Title title="Tabla de usuarios" />

        <DataTable data={data} columns={columns} searchKey="email" />
      </div>
    </main>
  );
};

export default App;
