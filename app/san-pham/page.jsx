import { productData } from "@/lib/placeholder";
import CardProduct from "@/components/CardProduct";

const SanPham = () => {
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

  return (
    <section className="col-span-3">
      <div className="grid grid-cols-1 gap-x-2 gap-y-3 md:grid-cols-4">
        <CardProduct allItems={allItems} />
      </div>
    </section>
  );
};

export default SanPham;
