import { useState } from "react";
//  Imports from another files
import BarChart from "../Components/BarChart";
import PieChart from "../Components/PieChart";
import Statics from "../Components/Statics";
import TableData from "../Components/TableData";

const monthsData = [
  { month: "January", value: "01" },
  { month: "February", value: "02" },
  { month: "March", value: "03" },
  { month: "April", value: "04" },
  { month: "May", value: "05" },
  { month: "June", value: "06" },
  { month: "July", value: "07" },
  { month: "August", value: "08" },
  { month: "September", value: "09" },
  { month: "October", value: "10" },
  { month: "November", value: "11" },
  { month: "December", value: "12" },
];

const LandingPage = () => {
  const [month, setMonth] = useState("03");
  // capture selected month
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  return (
    <main>
      {/* Welcome Text */}
      <div className="container mx-auto my-20 px-5">
        <h1 className="text-3xl font-Geological font-bold mb-2 ">
          Welcome to TabularInsight{" "}
          <span className="text-xl">a subsdiry of</span>{" "}
          <span className="text-primary shadow-md shadow-orange-200">
            Roxiler
          </span>
        </h1>
        <h5 className="text-xl font-Poppins text-gray-500 mb-3">
          {" "}
          Easy way to find all the transtations of the products and services
        </h5>
        <p className="text-md font-BriemHand text-gray-600/70 md:w-3/4 lg:w-1/2">
          You can get the data of any product and service in just a few clicks.
          You can filter the data based on the months or years. Bar Chart and
          Pie Chart gives more information visually for a paticular month.
        </p>
      </div>
      {/* Search Box */}
      <section className="section">
        <div className="flex justify-between items-center flex-col sm:flex-row gap-4  w-[80%] min-w-[150px] max-w-[900px]">
          <div>
            <input
              type="search"
              placeholder="Search Transaction"
              className="rounded-lg  outline-none focus:outline-primary p-1 md:p-2 md:m-2 text-sm md:text-xl"
            />
          </div>
          <div className="">
            <label htmlFor="month" className="font-Poppins">
              Select Month{" "}
            </label>
            <select
              name="month"
              id="month"
              value={month}
              className="font-Montserrat p-2 rounded-lg outline-none focus:outline-primary"
              onChange={handleMonth}
            >
              {monthsData.map((monthDetail, index) => (
                <option key={index} value={monthDetail.value}>
                  {monthDetail.month}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <TableData sMonth={month} />
      <Statics sMonth={month} />
      <BarChart sMonth={month} />
      <PieChart sMonth={month} />
    </main>
  );
};

export default LandingPage;
