import ReactPaginate from "react-paginate";

import * as classes from "./Pagination.module.scss";
import { count } from "console";

export const Pagination = ({
  count,
  handlePageClick,
  range = 3,
}: {
  count: number;
  handlePageClick: ({ selected }: { selected: number }) => void;
  range?: number;
}) => {
  return (
    <nav>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={range}
        pageCount={count}
        nextLabel=""
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName={classes.pagination}
        pageLinkClassName={classes.pagination__pageLink}
        activeLinkClassName={classes.pagination__pageLinkActive}
        breakLinkClassName={classes.pagination__breakLink}
      />
    </nav>
  );
};
