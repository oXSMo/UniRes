import { MdClose } from "react-icons/md";
import Modal from "../../../Components/common/Modal";
import Input from "../../../Components/common/Input";
import { useEffect, useState } from "react";
import Select from "../../../Components/common/Select";
import { useCreateUser, useGetRooms } from "../../../Hooks/useDashboard";

function NewUser({ setopen, open }) {
  const [credentials, setCredentials] = useState({
    fullName: "",
    phoneNumber: "",
    role: "student",
    wing: "A",
    room: "",
  });

  const { loading, err, createUser } = useCreateUser();
  const { rooms, loading: roomsLoading } = useGetRooms(credentials.wing);
  console.log({ credentials });

  useEffect(() => {
    setCredentials({ ...credentials, room: `${rooms[0]?._id}` });
  }, [credentials.wing, rooms]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (await createUser(credentials)) {
      setCredentials({
        fullName: "",
        phoneNumber: "",
        role: "student",
        wing: "A",
        room: "",
      });
      setopen(false);
    }
  };

  console.log({ rooms });

  return (
    <Modal open={open} onClose={setopen} className="modal w-165 max-w-11/12">
      <MdClose
        onClick={() => setopen(false)}
        className="absolute top-6 right-6 text-xl hover:text-red-600 cursor-pointer button text-gray-500"
      />
      <header className="py-6  border-b border-gray-200  px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-2">Add New User</h1>
        <h2 className="text-gray-500 text-sm w-10/12">
          Register a new student,staff or admin to the resicdence system
        </h2>
      </header>

      <form onSubmit={submitHandler} className="py-4 px-4 md:px-6 space-y-4">
        <h1 className="text-[17px] mb-3 font-bold tracking-wide text-gray-400">
          PERSONAL DETAILS
        </h1>
        {/*  PERSONAL DETAILS  */}
        <div className="grid md:grid-cols-2 md:gap-4 gap-2">
          <Input
            name="fullName"
            set={setCredentials}
            placeholder="Full Name"
            // err={err.fullName}
            value={credentials.fullName}
            title="Full Name"
            err={err.fullName}
          />
          <Input
            name="phoneNumber"
            set={setCredentials}
            placeholder="07xxxxxxxx"
            type="number"
            // err={err.fullName}
            value={credentials.phoneNumber}
            title="Phone Number"
            err={err.phoneNumber}
          />
        </div>
        {/* ACCOUNT CREDENTIALS  */}
        <h1 className=" mb-3 font-bold tracking-wide text-gray-400">
          ACCOUNT CREDENTIALS
        </h1>
        <div className="grid md:grid-cols-2 md:gap-4 gap-2">
          <Input
            name="email"
            set={setCredentials}
            placeholder="s.m@mail.com"
            // err={err.fullName}
            value={credentials.email}
            title="Email"
            err={err.email}
          />
          <Input
            name="password"
            set={setCredentials}
            placeholder="✶✶✶✶✶✶✶✶✶✶✶"
            classInput="placeholder:text-[10px]"
            type="password"
            // err={err.fullName}
            value={credentials.password}
            title="Password"
            err={err.password}
          />
        </div>

        {/* ASSIGNMENT */}
        <h1 className=" mb-3 font-bold tracking-wide text-gray-400">
          ASSIGNMENT
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <Select
            name="role"
            options={["admin", "student", "chef"]}
            set={setCredentials}
            state={credentials}
            classOption=""
            list={["admin", "student", "chef"]}
          />
          <Select
            name="wing"
            options={["A", "B", "C", "D"]}
            disabled={credentials.role !== "student"}
            set={setCredentials}
            state={credentials}
            classOption=""
            list={["A", "B", "C", "D"]}
          />

          <Select
            name="room"
            placeholder="room"
            disabled={credentials.role !== "student" || roomsLoading}
            options={rooms?.map((r) => r._id)}
            set={setCredentials}
            state={credentials}
            list={rooms?.map((r) => r.number)}
          />
        </div>
        <aside className="flex gap-3 justify-end tracking-wide mt-8">
          <button
            onClick={() => setopen(false)}
            className="button font-bold text-gray-600 px-6 py-2"
          >
            Cancel
          </button>
          <button
            disabled={loading || !credentials.room || !credentials.wing}
            type="submit"
            className="button font-medium bg-primary rounded-md text-white  w-32 h-10"
          >
            {loading ? <div className="loader w-5 " /> : "Create User"}
          </button>
        </aside>
      </form>
    </Modal>
  );
}

export default NewUser;
