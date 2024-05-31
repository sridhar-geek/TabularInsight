import PropTypes from 'prop-types'

// Imports from another files
import { Suspense } from "react";
import { useTableData } from "../React Query/CustomHook";

const TableData = ({sMonth}) => {
  const { isLoading, data, isError, error } = useTableData(sMonth);

  return (
    <article className="flex flex-col justify-center items-center gap-4 my-10">
      {/* heading */}
      <h3 className="heading">Whole transtation data of January Month</h3>
      {/* container */}
      <section className="bg-white rounded-3xl shadow-md shadow-gray-300 px-6 py-10  w-[80%] overflow-x-auto">
        {/* Varaibles */}
        {isLoading ? (
          <h1 className="loadingClass">Loading...</h1>
        ) : isError ? (
          <h1 className="errorClass">{error.message}</h1>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>ProductId</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Image</th>
                  <th>Date of Sale</th>
                </tr>
              </thead>
              <tbody>
                {data?.transactions.length > 0 ? (
                  data?.transactions.map((product) => {
                    return (
                      <tr key={product.id} className="tablerow">
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td className="text-pretty">{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.sold ? "Sold" : "unSold"}</td>
                        <td>
                          <Suspense fallback={<p>Loading..</p>}>
                          <img
                            className="image"
                            src={product.image}
                            alt={product.title}
                            />
                            </Suspense>
                        </td>
                        <td>{new Date(product.dateOfSale).toDateString()}</td>
                      </tr>
                    );
                  })
                ) : (
                  <h1>No matches found, Try another</h1>
                )}
              </tbody>
            </table>
          </>
        )}
      </section>
    </article>
  );
};

// Validating PropTypes
  TableData.propTypes = {
    sMonth: PropTypes.string.isRequired,
  };

export default TableData;
