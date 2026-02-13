import { useState } from "react";
import Input from "../../../Components/common/Input";
import Header from "./Header";
import Switch from "../../../Components/common/Switch";

function Settings() {
  const [credentials, setCredentials] = useState({
    residenceName: "UniRes",
    location: "Constontain",
    email: "university@gmail.edu",
    capacity: "600",
    phoneNumber: "0562133724",
    alert: true,
    report: false,
  });
  console.log(credentials);

  return (
    <main className="w-full h-full overflow-x-hidden p-6 space-y-6">
      <Header />
      <h1 className="text-2xl font-bold tracking-wide pl-1.5 py-4">
        General Residence Configuration
      </h1>

      <article className="card [&_aside]:gap-4 space-y-6">
        <aside className="grid md:grid-cols-2 grid-cols-1 ">
          <Input
            name="residenceName"
            set={setCredentials}
            value={credentials.residenceName}
            title="Residence Name"
          />
          <Input
            name="location"
            set={setCredentials}
            value={credentials.location}
            title="Compus Location"
          />
        </aside>
        <aside className="grid md:grid-cols-4 grid-cols-1">
          <div className="col-span-2">
            <Input
              name="email"
              set={setCredentials}
              value={credentials.email}
              title="Primary Contact Email"
            />
          </div>
          <Input
            name="capacity"
            set={setCredentials}
            value={credentials.capacity}
            title="Total Capacity"
          />
          <Input
            name="phoneNumber"
            set={setCredentials}
            value={credentials.phoneNumber}
            title="Phone number"
          />
        </aside>
      </article>

      <h1 className="text-2xl font-bold tracking-wide pl-1.5 py-4">
        Notification Preference
      </h1>

      <article className="card space-y-5">
        <aside className="grid grid-cols-[1fr_auto] gap-6 p-4 border-b border-gray-300 items-center [&_div]:space-y-1">
          <div>
            <h1 className="text-lg font-bold tracking-wide">
              Maintenance Alert
            </h1>
            <p className="text-gray-500 font-medium">
              Recive email notification for urgent maintenance requests.
            </p>
          </div>
          <Switch
            active={credentials.alert}
            onClick={() =>
              setCredentials({ ...credentials, alert: !credentials.alert })
            }
          />
        </aside>
        <aside className="grid grid-cols-[1fr_auto] gap-6 p-4 border-b border-gray-300 items-center [&_div]:space-y-1">
          <div>
            <h1 className="text-lg font-bold tracking-wide">
              Monthly Statistic Reports
            </h1>
            <p className="text-gray-500 font-medium">
              Get A PDF summary of occupancy and revenue on the 1st of every
              month.
            </p>
          </div>
          <Switch
            active={credentials.report}
            onClick={() =>
              setCredentials({ ...credentials, report: !credentials.report })
            }
          />
        </aside>
      </article>
    </main>
  );
}

export default Settings;
