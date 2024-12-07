import SearchArea from "@/components/common/searchArea";
import Pagination from "@/components/common/pagination";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchCourseList from "@/lib/api/fetch-course-list";
import { useEffect } from "react";
import CourseCardContainer from "@/components/courseCardContainer";
import {useRouter} from "next/router";
import styled from "styled-components";
import ChipFilter from "@/components/chipFilter";
import searchParamGenerator from "@/lib/utils/searchParamGenerator";
const Main = styled.main`
  padding: 20px;
  overflow-y: auto
`;

const TotalCount = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 12px 0;
  padding: 12px 0;
  border-bottom: 2px solid #e0e0e0;
`;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  // const {offset, count, ...rest} = context.query;  
  const params = searchParamGenerator(context.query as Record<string, string|string[]>);
  const courseList = await fetchCourseList(params);
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
  const CHIP_LIST = [
    {name: "무료", value: "free"},
    {name: "유료", value: "paid"},
    {name: "구독", value: "subscription"},
  ]
  return (
    <Main> 
        <SearchArea />
        <ChipFilter category="price" chipList={CHIP_LIST} />
        <TotalCount>전체 {courseList?.course_count}개</TotalCount >
        <CourseCardContainer courseList={courseList?.courses ?? []} />
        <Pagination total={courseList?.course_count ?? 1} displaySize={5} />
    </Main>
  );
}
