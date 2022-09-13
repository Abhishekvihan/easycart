import React from 'react';
import Product from './Product';

function ProductList({ products }) {
  return (
    <div className="pb-10 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white ">
        <div className="flex flex-wrap justify-center pb-10 space-y-4 justify-items-center lg:grid lg:grid-cols-3">
          {products &&
            products.map((item) => (
              <Product
                id={item.id}
                key={item.id}
                title={item.title}
                category={item.category}
                price={item.price}
                thumbnail={item.thumbnail}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
