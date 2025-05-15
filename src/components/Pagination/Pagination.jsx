import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";

function Pagination({ pageCount, forcePage, onPageChange }) {
  const handlePageClick = (data) => {
    onPageChange(data.selected);
  };

  return (
 <ReactPaginate
      pageCount={pageCount}
      onPageChange={handlePageClick}
      forcePage={forcePage} // 告訴它目前在哪頁
      previousLabel="«"
      nextLabel="»"
      breakLabel="..."
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      containerClassName="pagination"
      activeClassName="active"
      disabledClassName="disabled"
    />
  );
}

export default Pagination;