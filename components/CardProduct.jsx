import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { createUrl, formatContent } from "@/lib/utils";

export default function CardProduct(allItems) {
  return (
    <>
      {allItems.allItems.map((row, index) => (
        <Card
          className="col-span-1 min-h-80 rounded-lg lg:max-h-96"
          key={index}
        >
          <CardHeader className="relative h-56 md:h-48">
            <CardTitle>
              <Image src={row.image} fill={true} alt="" />
            </CardTitle>
          </CardHeader>
          <Link href={createUrl(row.category, row.subcategory, row.id)}>
            <CardContent className="p-0">
              <h4 className="text-center text-xl font-semibold text-yellow-800">
                {formatContent(row.name, 25)}
              </h4>
            </CardContent>
          </Link>
          <CardDescription className="px-4 text-center">
            {formatContent(row.description, 70)}
          </CardDescription>
        </Card>
      ))}
    </>
  );
}
