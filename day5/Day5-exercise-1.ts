// Day 5 - Exercise 1
interface ItemShop {
  id: number;
  title: string;
  variantId?: number;
}

function addToCart(item: ItemShop) {
  console.log(`Adding "${item.title}" to cart.`);
}

addToCart({ id: 1, title: "shoes" });
