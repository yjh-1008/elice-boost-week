
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";
import SearchArea from "@/components/common/searchArea";

export default function Home({allList}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
  return (
    <main>
      <SearchArea />
    </main>
  );
}
