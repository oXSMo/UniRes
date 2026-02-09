import { useGetUsers } from "../../../Hooks/useDashboard";

function Table() {
  const { loading, users } = useGetUsers();

  

  return (
    <main className="max-w-full card px-0! min-h-40 overflow-hidden ">
      <div className="flex justify-between px-6 mb-4">
        <h1 className="text-lg tracking-wider font-bold ">
          Recent Maintenece Request
        </h1>
      </div>

      <section className="overflow-auto max-w-full">
        <table className="min-w-full  text-sm">
          <thead className="sticky z-10  h-10 w-full text-neutral-500   bg-white [&_th]:uppercase [&_th]:px-4  [&_th]:min-w-44 [&_th]:py-1.5  [&_div]:text-start    ">
            <tr className="bg-[#eef6ff]">
              <th>
                <div className="">Studnet</div>
              </th>
              <th>
                <div>Room</div>
              </th>
              <th>
                <div>Submited date</div>
              </th>
              <th>
                <div>Role</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr className="h-11 [&_td]:px-4">
                <td>{user.fullName}</td>
                <td>{user?.room?.number || "null"}</td>
                <td>{user.createdAt.split("T")[0]}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Table;
