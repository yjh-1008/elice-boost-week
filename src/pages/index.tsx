import SearchArea from "@/components/common/searchArea";
import Pagination from "@/components/common/pagination";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchCourseList from "@/lib/api/fetch-course-list";
import { useEffect } from "react";
import CourseCardContainer from "@/components/courseCardContainer";
import {useRouter} from "next/router";
import styled from "styled-components";

const Main = styled.main`
  padding: 20px;
  overflow-y: auto
`;
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const query = context.query;
  const {offset, count} = query
  console.log(offset, count);
  const courseList = await fetchCourseList({offset: Number(offset), count: Number(count)  });
  return {
    props: {
      courseList,
    }
  }
}



export default function Home({courseList}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(courseList);
  const router = useRouter();
  useEffect(() => {

    if(router.query.offset === undefined || router.query.count === undefined) {
      
      router.push({
        pathname: router.pathname,
        query: {
          offset: 1,
          count: 20
        }
      });
    }
  }, [router.query]);
  return (
    <Main> 
        <SearchArea />
        <div>전체 {courseList?.course_count}개</div>
        <CourseCardContainer courseList={courseList?.courses ?? []} />
        <Pagination total={courseList?.course_count ?? 1} displaySize={5} />
    </Main>
  );
}
