// rafce
import { categories } from "@/utils/categories";
import Link from "next/link";
const CategoriesList = ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <div>
      <div className="flex justify-center my-4 font-bold gap-x-4 ">
        {categories.map((item) => {
            const isActive = item.label === category
          return (
            <Link
              href={`/?category=${item.label}${searchTerm}`}
              key={item.label}
            >
              <article className={`p-3 flex flex-col 
              justify-center hover:text-primary hover:scale-110
              hover:duration-300
              items-center ${isActive ? 'text-primary' : ''}`}>
                <item.icon />
                <p>{item.label}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CategoriesList;
