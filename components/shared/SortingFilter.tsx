"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const sortingOptions = [
  { _id: "price_ASC", name: "Prix, croissant", value: "price_ASC" },
  { _id: "price_DESC", name: "Prix, décroissant", value: "price_DESC" },
];

const SortingFilter = () => {
  const [sorting, setSorting] = useState(sortingOptions);
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSelectSorting = (sortValue: string) => {
    let newUrl = "";

    if (sortValue && sortValue !== "None") {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "sort",
        value: sortValue,
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["sort"],
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <Select onValueChange={(value: string) => onSelectSorting(value)}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Trier par" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="None" className="select-item p-regular-14">
          Aucun
        </SelectItem>

        {sorting.map((sort) => (
          <SelectItem
            value={sort.value.toString()}
            key={sort._id}
            className="select-item p-regular-14"
          >
            {sort.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortingFilter;
