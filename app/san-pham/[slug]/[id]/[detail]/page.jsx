import { CardContent, CardDescription } from "@/components/ui/card";

import { productDataID } from "@/lib/placeholder";
import Swipe from "./Swipe";
import { convertToSlug } from "@/lib/utils";
import Link from "next/link";
export async function generateStaticParams() {
  const data = GenerateData();
  return data.map((post) => ({
    slug: convertToSlug(post.category),
    id: convertToSlug(post.subcategory),
    detail: post.id.toString(),
  }));
}
function GenerateData() {
  const allItems = [];

  productDataID.forEach((category) => {
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
export default function PostId({ params }) {
  const { slug, id, detail } = params;
  const data = GenerateData();

  const onFilterProductID = data.find(
    (category) =>
      convertToSlug(category.category) === slug &&
      convertToSlug(category.subcategory) === id &&
      category.id === parseInt(detail),
  );

  return (
    <>
      {onFilterProductID && (
        <>
          <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-2">
            <>
              <Swipe data={onFilterProductID} />
            </>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="border-b px-1 pb-2 text-2xl font-bold text-blue-600">
                  {onFilterProductID?.name}
                </h1>
                <CardContent className="px-1 pt-2">
                  {onFilterProductID?.description.map((data, index) => (
                    <CardDescription className="px-1" key={index}>
                      {data}
                    </CardDescription>
                  ))}
                </CardContent>
              </div>
              <div>
                <CardContent className="flex justify-between">
                  <div>
                    Giá: <span> </span>
                    <del>
                      {onFilterProductID?.price?.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </del>
                  </div>
                  <Link
                    href="/lien-he"
                    className="cursor-pointer text-xl font-semibold text-red-700"
                  >
                    Liên hệ
                  </Link>
                </CardContent>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <p className="text-xl font-semibold text-blue-500">Mô tả chi tiết:</p>

          {onFilterProductID?.body?.map((data, index) => (
            <ul key={index} className="list-inside list-disc">
              <li className="text-md pt-2 font-medium">{data.name}</li>
              {data.description.map((data, index) => (
                <div key={index} className="font-sans text-sm">
                  <span className="text-md px-2 font-medium"> - </span>
                  {data}
                </div>
              ))}
            </ul>
          ))}
        </>
      )}
    </>
  );
}
