'use client';

import SearchArea from "@/components/common/searchArea";
import { Suspense } from "react";

export default function Home({ params }: { params: { searchText: string } }) {
  console.log(params);
  return (
    <main> 
        <SearchArea />

    </main>
  );
}
