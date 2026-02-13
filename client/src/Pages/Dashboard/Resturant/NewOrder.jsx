import { useState } from "react";
import Modal from "../../../Components/common/Modal";
import { MdClose } from "react-icons/md";
import Input from "../../../Components/common/Input";
import Select from "../../../Components/common/Select";

function NewOrder({ open, setOpen }) {
  const [credentials, setCredentials] = useState({
    vendor: "",
    category: "",
    amount: "",
    status: "",
  });

  const submitHnadler = (e) => {
    e.preventDefault();
  };
  return (
    <Modal open={open} onClose={setOpen} className="modal w-165 max-w-11/12">
      <MdClose
        onClick={() => setOpen(false)}
        className="absolute top-6 right-6 text-xl hover:text-red-600 cursor-pointer button text-gray-500"
      />
      <header className="py-6  border-b border-gray-200  px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-2">Add New Order</h1>
      </header>

      <form onSubmit={submitHnadler} className="py-4 px-4 md:px-6 space-y-4">
        <Input
          name="vendor"
          set={setCredentials}
          placeholder="Vendor Name"
          //   err={err.number}
          value={credentials.vendor}
          title="Vendor"
        />

        <aside className="grid md:grid-cols-3 gap-3">
          <Input
            name="amount"
            set={setCredentials}
            placeholder="0.00 DA"
            //   err={err.number}
            type="number"
            value={credentials.vendor}
            title="Amount"
          />
          <Select
            name="cateogry"
            options={["Product", "Food", "Tools"]}
            set={setCredentials}
            state={credentials}
            title="Category"
            placeholder="Select Catagory"
          />
          <Select
            name="status"
            options={["Pending", "Delivered", "Cancelled"]}
            set={setCredentials}
            state={credentials}
            title="Category"
            placeholder="Select Catagory"
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
            // disabled={loading}
            type="submit"
            className="button font-medium bg-primary rounded-md text-white  w-32 h-10"
          >
            {/* {loading ? <div className="loader w-5 " /> : "Create User"} */} Create Order
          </button>
        </aside>
      </form>
    </Modal>
  );
}

export default NewOrder;
