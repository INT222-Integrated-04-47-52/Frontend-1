import React from "react";
import ProductItem from "../ShopComponent//ProductItem";
import withContext from "../../withContext";
 import axios from "axios";

const ProductList = props => {
  const { products} = props.context;
  // const {id} = props;

  // console.log(id);

  // const  onPostDeleteHandler = (props) =>{
  //   const {e,id} = props;
  //   e.stopPropagation();
  //   if(window.confirm('R U Sure?')){
  //     axios.delete(`${process.env.REACT_APP_API_URL}/delete/${id}`
  //     ).then((response)=> {
  //     // this.getPosts();
  //   })
  //   }
  // }
  return (
    <div>
      <div className="hero is-primary">
    
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
            //     postclicked={onPostDeleteHandler.bind(product,id)}
                // onClick={() => handleRemove(product.id)}
            //  postDeleted={onPostDeleteHandler.bind(product.id)}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
          
};

export default withContext(ProductList);