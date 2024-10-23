"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { RatingStars } from "../rating-stars";
import { CalculatePrice } from "./calculate-price";
import { useCheckCart } from "@/utils/helpers";
import { useRouter } from "next/navigation";

export const Product = ({ product }) => {
  const router = useRouter();
  const isInCart = useCheckCart(product);

  return (
    <Link href={`/product/${product.slug}`} passHref>
      <Card className="group border-transparent dark:border-secondary cursor-pointer">
        <CardContent className="relative pb-2">
          <div className="absolute top-2 left-0 flex items-center justify-between w-full px-2 z-[1]">
            {product?.status && <Badge>{product.status}</Badge>}
          </div>

          <figure className="relative h-[120px] md:h-[140px] w-full group-hover:scale-105 transition-transform">
            {/* <Image
              src={product?.images[0] ? product.images[0] : ""}
              alt={product?.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 120px, 140px"
            /> */}
            <Image
              src={product?.image}
              alt={product?.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 120px, 140px"
            />
          </figure>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-base h-12 line-clamp-2">
            {product?.title}
          </CardTitle>
        </CardHeader>
        <div className="px-2 py-2 md:px-3">
          <RatingStars />
          <span className="text-sm capitalize">
            <span>by </span>
            <span
              role="button"
              onClick={(e) => {
                e.preventDefault();
                router.push(`/shop?brand=${product?.brand}`);
              }}
              className="text-primary"
            >
              {product?.brand}
            </span>
          </span>
        </div>

        <CardFooter className="flex items-center justify-between md:pt-0">
          <CalculatePrice
            discountedPrice={product?.discountedPrice}
            price={product?.price}
            className="text-primary flex-col md:flex-row items-start md:items-center"
          />
          <Button
            icon={isInCart ? "check" : "cart"}
            variant={!isInCart ? "outline" : "default"}
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(product);
            }}
          >
            <span>add</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
