import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
// Imports from another files
import { useCategoryData } from "../React Query/CustomHook";

/** This component is used to render category names in pie chart */
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
  value,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={13}
      fontWeight={700}
    >
      {name} ({value})
    </text>
  );
};

/** Main Component */
const PieGraph = ({sMonth}) => {
  const { isLoading, error, data, isError } = useCategoryData(sMonth);

  // Function to convert api data into desired format
  function transformPieChartData(data) {
    const transformedData = [];
    const pieChartData = data?.pieChartData;
    // Check if pieChartData exists to avoid errors
    if (!pieChartData) {
      return transformedData;
    }
    // Loop through each key-value pair in pieChartData
    for (const category in pieChartData) {
      // Create a new object for each category
      const newData = {
        name: category,
        value: pieChartData[category],
      };
      // Add the new object to the transformedData array
      transformedData.push(newData);
    }
    return transformedData;
  }

  const pieArray = transformPieChartData(data);

  // colors for pieChart
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#4f40e5",
    "#75A47F",
  ];

  return (
    <article className="section">
      {/* heading */}
      <h3 className="heading">Categories Availabe in January Month</h3>
      {isLoading ? (
        <h1 className="loadingClass">Loading...</h1>
      ) : isError ? (
        <h1 className="errorClass">{error.message}</h1>
      ) : (
        <ResponsiveContainer width="100%" height={500}>
          {/* container */}
          <PieChart width={400} height={500}>
            <Pie
              data={pieArray}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={200}
              dataKey="value"
            >
              {pieArray.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}
    </article>
  );
};

// validating PropTypes
  PieGraph.propTypes = {
    sMonth: PropTypes.string.isRequired,
  };

export default PieGraph;
