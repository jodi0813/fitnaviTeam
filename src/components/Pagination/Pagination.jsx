import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

function PaginationComponent({ totalPages, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
    onPageChange(data.selected);
  };

  return (
    <ReactPaginate
      previousLabel="«"
      nextLabel="»"
      breakLabel="..."
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      forcePage={currentPage} // 外部控制目前頁面
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
    />
  );
}

export default PaginationComponent;