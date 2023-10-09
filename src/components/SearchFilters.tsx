import Image from "next/image";
import ArrowDown from "../assets/ArrowDown.svg";

export default function SearchFilters() {
  return (
    <section className="flex justify-between mt-8">
      <div className="flex items-center">
        <div className="flex border rounded-lg">
          <input
            type="text"
            className="block w-full pl-4 pr-20 py-2 text-black bg-white border rounded-md  focus:ring focus:ring-opacity-40"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="relative lg:max-w-sm">
          <Image
            className="absolute top-5 right-3 w-3"
            src={ArrowDown}
            alt="arrow"
          />
          <select className="pl-3 pr-8 py-2.5 text-white bg-slate-700 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option disabled selected>
              Sort By
            </option>
            <option>Option</option>
            <option>Option</option>
            <option>Option</option>
          </select>
        </div>
        <div className="relative lg:max-w-sm">
          <Image
            className="absolute top-5 right-3 w-3"
            src={ArrowDown}
            alt="arrow"
          />
          <select className="pl-3 pr-7 py-2.5 text-white bg-slate-700 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option disabled selected>
              Filters
            </option>
            <option>Option</option>
            <option>Option</option>
            <option>Option</option>
          </select>
        </div>
      </div>
    </section>
  );
}
