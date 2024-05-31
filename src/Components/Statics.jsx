import PropTypes from "prop-types";
// Imports from another files
import { useGetStatics } from "../React Query/CustomHook";

const Statics = ({ sMonth }) => {
  const { data, isLoading, isError, error } = useGetStatics(sMonth);

  return (
    <article className="section">
      {/* heading */}
      <h3 className="heading">Statics of January Month</h3>
      {/* container */}
      <section className="bg-white rounded-3xl shadow-md shadow-gray-300 px-6 py-10  w-[60%] min-w-[350px] max-w-[500px]">
        {/* Varaibles */}
        {isLoading ? (
          <h1 className="loadingClass">Loading...</h1>
        ) : isError ? (
          <h1 className="errorClass">{error.message}</h1>
        ) : (
          <>
            <div className="statics_container">
              <h3>Total value of Sales in January</h3>
              <h2>${Math.ceil(data?.statics.totalSaleAmount)}</h2>
            </div>
            <div className="statics_container">
              <h3>No of Sold Items </h3>
              <h2>{data?.statics.soldItems}</h2>
            </div>
            <div className="statics_container">
              <h3>No of UnSold Items</h3>
              <h2>{data?.statics.unsoldItems}</h2>
            </div>
          </>
        )}
      </section>
    </article>
  );
};

// validating PropTypes
Statics.propTypes = {
  sMonth: PropTypes.string.isRequired,
};

export default Statics;
