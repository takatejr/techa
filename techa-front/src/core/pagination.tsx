import React from "react";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <div key={number} className="number">
          <button onClick={() => paginate(number)}>{number}</button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
