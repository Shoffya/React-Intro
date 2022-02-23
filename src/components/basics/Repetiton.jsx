import React from "react";
import products from "../../data/products";

export default props => {

    function getProductsListItem() {
        return products.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.name}: US$ {prod.price}
            </li>
        })
    }

    return (
        <div>
            <h2>Repetition</h2>
            {getProductsListItem()}
        </div>
    )
}