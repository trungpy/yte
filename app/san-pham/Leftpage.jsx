import React from "react";
import Link from "next/link";
import { dataNavigate } from "@/lib/placeholder";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { convertToSlug } from "@/lib/utils";
const createUrl = (title, rowTitle) => {
  return `/san-pham/${convertToSlug(title)}/${convertToSlug(rowTitle)}`;
};
export default function Leftpage() {
  const path = "/projects";

  return (
    <>
      <div className="flex flex-col gap-3">
        <Accordion type="single" collapsible>
          {dataNavigate.map((data, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-md py-2 text-center font-medium text-blue-700">
                {data.category}
              </AccordionTrigger>
              {data.datas.map((row, index) => (
                <Link
                  href={createUrl(data.category, row.subcategory)}
                  key={index}
                  replace
                >
                  <AccordionContent className="text- px-3 py-1 font-medium">
                    <span className="border-black hover:border-b hover:text-gray-500">
                      {row.subcategory}
                    </span>
                  </AccordionContent>
                </Link>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
