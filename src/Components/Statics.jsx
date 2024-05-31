// Imports from another files
import { useGetStatics } from "../React Query/CustomHook";

const Statics = () => {
  const sMonth = "07";
  const { data, isLoading, isError, error } = useGetStatics(sMonth);

  if (isError) return <h1 className="font-Tourney text-2xl">{error}</h1>;
  return (
    <article className="flex flex-col justify-center items-center gap-4 my-10">
      {/* heading */}
      <h3 className="heading">Statics of the January Month</h3>
      {/* form elements */}
      <section className="bg-white rounded-3xl shadow-md shadow-gray-300 px-6 py-10  w-[60%] min-w-[350px] max-w-[500px]">
        {/* Varaibles */}
        {isLoading ? (
          <h1 className="font-Tourney text-3xl">Loading...</h1>
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

export default Statics;
