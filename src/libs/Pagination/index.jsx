import React from 'react'
import ReactPaginate from 'react-paginate';

const Paginate = ({onChange,totalItems,currentPage,itemsCountPerPage}) => {

    const prevLabel = <div className="admin-pagination__item admin-pagination__item--arrow"><a href=""><i className="fas fa-angle-left"></i></a></div>
    const nextLabel = <div className="admin-pagination__item admin-pagination__item--arrow"><a href=""><i className="fas fa-angle-right"></i></a></div>

    const changePage = (data)=>{
        onChange(data.selected+1)
    }
    return (
        <ReactPaginate
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            breakLabel={'...'}
            nextLabel={nextLabel}
            previousLabel={prevLabel}
            containerClassName={'flex'}
            activeClassName={'active'}
            breakClassName={'admin-pagination__item'}
            pageClassName={'admin-pagination__item'}
            onPageChange={changePage}
            pageCount={totalItems/itemsCountPerPage}
            forcePage={currentPage-1}
        />
    )
}

export default Paginate