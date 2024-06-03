import CardProduct from "@/components/CardProduct";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productData } from "@/lib/placeholder";
import { convertToSlug } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const data = GenerateData();
  return data.map((post) => ({
    slug: convertToSlug(post.category),
    id: convertToSlug(post.subcategory),
  }));
}

function GenerateData() {
  const allItems = [];

  productData.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      subcategory.items.forEach((item) => {
        item.category = category.category;
        item.subcategory = subcategory.name;
        allItems.push(item);
      });
    });
  });
  return allItems;
}

export default function LoaiSanPham({ params }) {
  const { slug, id } = params;
  const data = GenerateData();

  const filterCategory = data.filter(
    (category) =>
      convertToSlug(category.category) === slug &&
      convertToSlug(category.subcategory) === id,
  );

  return (
    <section className="col-span-3">
      <div className="grid grid-cols-1 gap-x-2 gap-y-3 md:grid-cols-4">
        <CardProduct allItems={filterCategory} />
      </div>
    </section>
  );
}
