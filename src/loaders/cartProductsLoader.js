import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader =  async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
 
    // if cart data is in database, you have to use async, await
    const storedCart = getShoppingCart();
    const savedCart = [];

    for(const id in storedCart)
    {
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct)
        {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    // if you need to return two things, what will you do ?
    // you can return an array of two or more things, this is the first option 
    // or you can return an object, this is the another option

    return savedCart;
}

export default cartProductsLoader;