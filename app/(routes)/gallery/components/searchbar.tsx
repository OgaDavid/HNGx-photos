
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchBar({ initialSearch }: { initialSearch: string }) {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const router = useRouter();

  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch]);

  return (
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
  );
}
