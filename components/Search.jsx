"use client";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { productData } from "@/lib/placeholder";
import { convertToSlug, removeVietnameseTones } from "@/lib/utils";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
const createUrl = (title, rowTitle, id) => {
  return `/san-pham/${convertToSlug(title)}/${convertToSlug(rowTitle)}/${id}`;
};
export default function Search() {
  const [dataFilter, setDataFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const allItems = productData.flatMap((category) =>
    category.subcategories.flatMap((subcategory) =>
      subcategory.items.map((item) => ({
        ...item,
        category: category.category,
        subcategory: subcategory.name,
      })),
    ),
  );

  useEffect(() => {
    const normalizedSearchTerm = removeVietnameseTones(
      searchTerm.toLowerCase(),
    );
    setDataFilter(
      allItems.filter((item) =>
        removeVietnameseTones(item.name.toLowerCase()).includes(
          normalizedSearchTerm,
        ),
      ),
    );
    return () => {
      setDataFilter([]);
    };
  }, [searchTerm]);

  const handleChangeSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <>
        <Dialog className="translate-y-40">
          <DialogTrigger className="relative">
            <div>
              <div className="right-3 ml-4 flex items-center justify-center rounded-full border border-primary p-2 md:absolute md:top-1/2 md:ml-0 md:-translate-y-1/2 md:border-none md:p-0">
                <SearchIcon className="h-6 w-6" />
              </div>
              <Input
                type="text"
                placeholder="Quick search..."
                className="hidden rounded-lg md:block md:min-w-80"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="min-h-80 -translate-y-60 md:-translate-y-1/2">
            <DialogHeader className="space-y-2 pr-4">
              <div className="mb-4">
                <Input
                  placeholder="Quick search..."
                  value={searchTerm}
                  onChange={handleChangeSearch}
                />
              </div>
              {dataFilter.slice(0, 6).map((value, index) => (
                <div key={index}>
                  <Link
                    href={createUrl(
                      value.category,
                      value.subcategory,
                      value.id,
                    )}
                  >
                    <DialogClose>
                      <DialogDescription className="text-md font-medium hover:text-gray-800">
                        {value.name}
                      </DialogDescription>
                    </DialogClose>
                  </Link>
                  <hr />
                </div>
              ))}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </>
    </div>
  );
}
