import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

//Imports from another files
import { useProductRange } from "../React Query/CustomHook";

const BarGraph = ({ sMonth }) => {
  const { data, isLoading, isError, error } = useProductRange(sMonth);

  return (
    <article className="section">
      {/* heading */}
      <h3 className="heading ">Product Range in January Month</h3>
      {isLoading ? (
        <h1 className="loadingClass">Loading...</h1>
      ) : isError ? (
        <h1 className="errorClass">{error.message}</h1>
      ) : (
        <ResponsiveContainer width="80%" height={300}>
          {/* BarChart Container */}
          <BarChart
            data={data?.barChartData}
            margin={{
              top: 30,
              right: 30,
              left: 30,
              bottom: 15,
            }}
          >
            {/* Background of BarChart */}
            <CartesianGrid horizontal={false} vertical={false} />
            <XAxis dataKey="range" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* Each bars */}
            <Bar
              dataKey="count"
              fill="#4f40e5"
              activeBar={<Rectangle fill="#86A7FC" stroke="#FF7F3E" />}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </article>
  );
};

// Validating PropTypes
BarGraph.propTypes = {
  sMonth: PropTypes.string.isRequired,
};

export default BarGraph;
