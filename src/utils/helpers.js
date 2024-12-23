import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { useMemo } from "react";

export function factorCartPrice(discount_price, regular_price) {
  if (discount_price > regular_price) return regular_price;

  return discount_price;
}

export function formatParams(params) {
  return params.replace(/-/g, " ");
}

// Check item in wishlist
export function useCheckCart(product) {
  const { cartItems } = useCart();

  const foundItem = useMemo(() => {
    return cartItems?.find((item) => item?._id === product?._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems.length]);

  return foundItem;
}

// Check item in wishlist
export function useCheckWishlist(product) {
  const { wishlistItems } = useWishlist();

  const foundItem = useMemo(() => {
    return wishlistItems?.find((item) => item?._id === product?._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishlistItems.length]);

  return foundItem;
}

export function useEcommerce() {
  const { onAdd, onRemove, onIncrease, onDecrease } = useCart();
  const wishlist = useWishlist();

  function addToCart(product) {
    onAdd({
      ...product,
      price: factorCartPrice(product?.discountedPrice, product?.price),
    });
  }

  function removeFromCart(product) {
    onRemove(product._id, product.title);
  }

  function increaseQuantity(id) {
    onIncrease(id);
  }

  function decreaseQuantity(id, title) {
    onDecrease(id, title);
  }

  function addToWishlist(product) {
    wishlist.onAdd(product);
  }

  function removeFromWishlist(id, title) {
    wishlist.onRemove(id, title);
  }

  return {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    addToWishlist,
    removeFromWishlist,
  };
}

// Random code generator
export function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

export const formatDate = (date) => {
  return date.toISOString()?.split("T")[0];
};
