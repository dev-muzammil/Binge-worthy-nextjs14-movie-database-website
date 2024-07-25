"use client";
import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`)
  };
  return (
    <form
      className="flex justify-around mx-auto max-w-6xl px-5 "
      onSubmit={handleSubmit}
    >
      <input
        size="md"
        variant="outline"
        placeholder="Seach Any Movie..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-emerald-500 disabled:text-gray-400"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
