import BarChart from "../Components/BarChart";
import PieChart from "../Components/PieChart";
import Statics from '../Components/Statics'
import TableData from "../Components/TableData";

const LandingPage = () => {
  return (
    <div>
      {/* Welcome Text */}
      <div className="container mx-auto my-20 px-5">
        <h1 className="text-3xl font-Geological font-bold mb-2 ">
          Welcome to TabularInsight{" "}
          <span className="text-xl">a subsdiry of</span>{" "}
          <span className="text-primary shadow-md shadow-orange-200">Roxiler</span>
        </h1>
        <h5 className="text-xl font-Poppins text-gray-500 mb-3">
          {" "}
          Easy way to find all the transtations of the products and services
        </h5>
        <p className="text-md font-BriemHand text-gray-600/70 md:w-3/4 lg:w-1/2">
          You can get the data of any product and service in just a few clicks. You can filter the data based on the months or years.
          Bar Chart and Pie Chart gives more information visually for a paticular month. 
        </p>
      </div>
      <TableData />
      <Statics />
      <BarChart />
      <PieChart />
    </div>
  );
}

export default LandingPage