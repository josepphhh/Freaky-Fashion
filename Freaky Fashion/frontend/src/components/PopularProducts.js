import React from 'react';

const PopularProducts = (props) => {
    const products = props.products.map(prod => {
        return <div className="card" key={prod.Id} style={{marginTop: '3rem'}}>
            <img src={prod.image} className="card-img-top" alt={prod.product_name} />
            <div className="card-body">
                <h5 className="card-title">{prod.product_name}</h5>
                <p className="card-text">{prod.price}</p>
            </div>
        </div>
    });

    return (
        <div className="card-deck">
            {products}
        </div>
    );
};

export default PopularProducts;
