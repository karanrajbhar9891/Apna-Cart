function mycard() {
  var mycard = document.querySelector("#mycard");

  fetch("https://dummyjson.com/carts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let cards = [];

      data.carts.map((cart) => {
        cart.products.map((product) => {
          cards.push(`
            <div class="card" >
              <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" />
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">
                  Price: ₹${product.price}<br/>
                  Quantity: ${product.quantity}
                </p>
                <button class="btn btn-primary btn-sm">Buy</button>
                <button class="btn btn-outline-secondary btn-sm">Add to Cart</button>
              </div>
            </div>
          `);
        });
      });

      mycard.innerHTML = cards.join("");
    });
}

mycard();
