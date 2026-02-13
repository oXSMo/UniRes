import { MdClose } from "react-icons/md";
import Modal from "../../../Components/common/Modal";
import Input from "../../../Components/common/Input";
import { useState } from "react";
import Select from "../../../Components/common/Select";
import { useCreateRoom } from "../../../Hooks/useDashboard";
import { toast } from "react-toastify";

function NewRoom({ open, setOpen }) {
  const [credentials, setCredentials] = useState({
    number: "",
    wing: "",
    type: "",
    status: "",
  });
  const { loading, createRoom, err } = useCreateRoom();

  const submitHnadler = async (e) => {
    e.preventDefault();
    if (await createRoom(credentials)) {
      toast.success("Room Created Successfuly");
      setCredentials({ number: "", wing: "", type: "", status: "" });
    }
  };
  return (
    <Modal open={open} onClose={setOpen} className="modal w-165 max-w-11/12">
      <MdClose
        onClick={() => setOpen(false)}
        className="absolute top-6 right-6 text-xl hover:text-red-600 cursor-pointer button text-gray-500"
      />
      <header className="py-6  border-b border-gray-200  px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-2">Create New Room</h1>
        <h2 className="text-gray-500 text-sm w-10/12">
          Enter the details to register new empty space.
        </h2>
      </header>
      <form onSubmit={submitHnadler} className="py-4 px-4 md:px-6 space-y-4">
        {/*  ROOM SPECIFICATIONS  */}
        <h1 className="text-[17px] mb-3 font-bold tracking-wide text-gray-400">
          ROOM SPECIFICATIONS
        </h1>

        <aside className="grid md:grid-cols-2 md:gap-4 gap-2">
          <Input
            name="number"
            set={setCredentials}
            placeholder="A-101"
            err={err.number}
            value={credentials.number}
            title="Room Number"
          />
          <div>
            <Select
              name="wing"
              options={["A", "B", "C", "D"]}
              title="Wing"
              placeholder="Select Wing"
              set={setCredentials}
              state={credentials}
              err={err.wing}
              list={["A", "B", "C", "D"]}
            />
          </div>
        </aside>

        {/*  STATUS AND CLASSIFICATION  */}
        <h1 className="text-[17px] mb-3 font-bold tracking-wide text-gray-400">
          STATUS AND CLASSIFICATION
        </h1>
        <aside className="grid md:grid-cols-2 md:gap-4 gap-2">
          <Select
            name="type"
            placeholder="Select Room Type"
            options={["Singl", "Double", "Triple"]}
            title="Room Type"
            set={setCredentials}
            err={err.type}
            state={credentials}
            list={["Singl", "Double", "Triple"]}
          />
          <Select
            name="status"
            placeholder="Select Room Type"
            options={["Occupied", "Empty"]}
            title="Room Status"
            set={setCredentials}
            err={err.status}
            state={credentials}
          />
        </aside>

        <aside className="flex gap-3 justify-end tracking-wide mt-8">
          <button
            onClick={() => setOpen(false)}
            className="button font-bold text-gray-600 px-6 py-2"
          >
            Cancel
          </button>
          <button
            disabled={loading}
            type="submit"
            className="button font-medium bg-primary rounded-md text-white  w-32 h-10"
          >
            {loading ? <div className="loader w-5 " /> : "Create Room"}
          </button>
        </aside>
      </form>
    </Modal>
  );
}

export default NewRoom;
