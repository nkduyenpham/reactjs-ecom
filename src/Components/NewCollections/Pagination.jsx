import './Pagination.css';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ newColectionProducts, productsPerPage, currentPage, setCurrentPage }) => {
    let pages = [];
    const scrollPosition = useRef(0); // To store the scroll position before page changes

    for (let i = 1; i <= Math.ceil(newColectionProducts / productsPerPage); i++) {
        pages.push(i)
    }

    const handlePageClick = (page) => {
        scrollPosition.current = window.scrollY;
        setCurrentPage(page);
    }

    useEffect(() => {
        // Restore scroll position after state update
        window.scrollTo(0, scrollPosition.current);
    }, [currentPage]);

    return (
        <div className='pagination'>
            {
                pages.map((page, i) => {
                    return <button
                        type="button"
                        key={i}
                        onClick={() => handlePageClick(page)}
                        className={page === currentPage ? 'active' : ''}>
                        {page}
                    </button>
                })
            }
        </div >
    )
}

// Define prop types
Pagination.propTypes = {
    newColectionProducts: PropTypes.number.isRequired,
    productsPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination