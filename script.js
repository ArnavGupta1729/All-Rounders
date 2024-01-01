let productsContainer = document.getElementById(`productsContainer`)
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => {
    let products = json.products;
    products.forEach((product) => {
        console.log(product);
        let productCard = document.createElement('div');
        let title = document.createElement('h1');
        let brand = document.createElement('h3');
        let description = document.createElement('p');
        let price = document.createElement('div');
        let img = document.createElement('img');
        let btn = document.createElement(`button`);
        btn.title = 'Buy Now'
        btn.innerHTML = 'Buy Now';
        btn.addEventListener(`click`, function myFunction() {
            let a = confirm `Are you sure you want to buy this?`
            console.log(a);
            if (a=true) {
                btn.style.borderColor = 'green';
                btn.style.color = `black`
            }
            else {
                btn.style.borderColor = `red`
            }
        });
        
        title.innerHTML=`${product.title}`
        brand.innerHTML=`${product.brand}`
        description.innerHTML=`${product.description}`
        price.innerHTML=`$ ${product.price}/-   `
        img.setAttribute('src', product.thumbnail);
        img.setAttribute('title', `${product.title}`);
        img.style.width = '200px';
        img.style.height = '270px';
        productCard.appendChild(img);
        productCard.appendChild(title);
        productCard.appendChild(brand);
        productCard.appendChild(price);
        productCard.appendChild(description);
        productCard.appendChild(btn);
        productsContainer.appendChild(productCard);
    });
})

