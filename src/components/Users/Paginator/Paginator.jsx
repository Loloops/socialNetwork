import { useEffect, useState } from 'react';
import classes from '../Users.module.css';

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage]);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.paginatorWrapper}>
      {portionNumber > 1 && (
        <button
          className={classes.prev}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}>
          Prev
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <button
              className={`${currentPage === p && classes.selectedpadge} ${classes.page}`}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}>
              {p}
            </button>
          );
        })}
      {portionCount > portionNumber && (
        <button
          className={classes.next}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}>
          Next
        </button>
      )}
    </div>
  );
};
export default Paginator;
