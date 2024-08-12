import './NewCollections.css'
import newColectionProducts from '../Assets/new_collections'
import Item from '../Item/Item'
import { useState } from 'react';
import Pagination from './Pagination';

const NewCollections = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    const lastPostIndex = currentPage * productsPerPage;
    const fristPostIndex = lastPostIndex - productsPerPage;
    const currentPosts = newColectionProducts.slice(fristPostIndex, lastPostIndex)

    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {currentPosts.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
                }
            </div>
            <Pagination
                newColectionProducts={newColectionProducts.length}
                productsPerPage={productsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default NewCollections