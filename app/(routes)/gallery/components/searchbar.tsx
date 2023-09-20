"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const tags = [
  {
    id: 1,
    tagName: "boxer",
  },
  {
    id: 2,
    tagName: "boy",
  },
  {
    id: 1,
    tagName: "glasses",
  },
  {
    id: 1,
    tagName: "girl",
  },
  {
    id: 1,
    tagName: "happy",
  },
  {
    id: 1,
    tagName: "man",
  },
  {
    id: 1,
    tagName: "woman",
  },
];

export function SearchBar({ initialSearch }: { initialSearch: string }) {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const router = useRouter();

  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
          router.refresh();
        }}
      >
        <Label htmlFor="tag-name" className="text-right pb-1">
          Search By Tag
        </Label>
        <div className="flex gap-2">
          <Input
            className="md:max-w-[300px]"
            onChange={(e) => setTagName(e.currentTarget.value)}
            id="tag-name"
            value={tagName}
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
      <p className="text-base mt-2 font-medium">Tags:</p>
      <div className="flex items-center gap-2 flex-wrap my-1">
        {tags.map((tag) => (
          <span className="px-2 py-[6px] rounded-md bg-gray-200 text-black" key={tag.id}>
            {tag.tagName}
          </span>
        ))}
      </div>
    </>
  );
}
