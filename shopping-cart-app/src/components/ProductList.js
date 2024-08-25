import React from 'react';

function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: 'Aloe Vera', price: 10, image: 'https://cdn.pixabay.com/photo/2014/04/05/11/06/aloe-vera-314458_1280.jpg', category: 'Indoor' },
    { id: 2, name: 'Cactus', price: 15, image: 'https://cdn.pixabay.com/photo/2021/10/26/12/23/cactus-6743531_1280.jpg', category: 'Indoor' },
    { id: 3, name: 'Fern', price: 20, image: 'https://cdn.pixabay.com/photo/2019/09/16/12/13/plant-4480822_1280.jpg', category: 'Indoor' },
    { id: 4, name: 'Bonsai', price: 30, image: 'https://cdn.pixabay.com/photo/2021/03/22/11/40/bonsai-6114252_1280.jpg', category: 'Outdoor' },
    { id: 5, name: 'Orchid', price: 25, image: 'https://cdn.pixabay.com/photo/2015/09/26/23/31/flowers-959986_1280.jpg', category: 'Outdoor' },
    { id: 6, name: 'Succulent', price: 12, image: 'https://cdn.pixabay.com/photo/2020/03/28/17/06/rosette-4977833_1280.jpg', category: 'Outdoor' },
  ];

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="product-list">
      <h2>Nuestros Productos</h2>
      {categories.map(category => (
        <div key={category} className="product-category">
          <h3>{category}</h3>
          <div className="products">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <div key={product.id} className="product">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button onClick={() => addToCart(product)}>Añadir a la cesta</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;