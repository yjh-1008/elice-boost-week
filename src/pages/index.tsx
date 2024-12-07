import SearchArea from "@/components/common/searchArea";
import Pagination from "@/components/common/pagination";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchCourseList from "@/lib/api/fetch-course-list";
import { useEffect } from "react";
import {useRouter} from "next/router";
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const query = context.query;
  const {offset, count} = query
  const courseList = await fetchCourseList({offset: Number(offset), count: Number(count)  });
  return {
    props: {
      courseList,
    }
  }
}

export default function Home({courseList}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // console.log(courseList);
  const router = useRouter();
  useEffect(() => {
    console.log(courseList);
    // debugger;
  }, [router.query]);
  return (
    <main> 
        <SearchArea />
        {/* {courseList && courseList.courses.map((item) => {
          return <div key={item.title}>{item.title}</div>
        })} */}
        <Pagination total={courseList?.course_count ?? 1} displaySize={5} />
    </main>
  );
}
