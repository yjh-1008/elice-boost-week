'use client'
import { Course } from "@/types"
import CourseCard from "@/components/courseCard";
import styled from "styled-components";
import { Suspense } from "react";
import CourseCardSkeleton from "@/components/skeleton/courseCardSkeleton";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export default function CourseCardContainer({courseList}: {courseList: Course[]}) {
  return (
    <Container>
        <Suspense fallback={<CourseCardSkeleton count={8}/>}>
          {courseList.map((course) => {
            return <CourseCard key={course.id} course={course} />
        })}
      </Suspense>
    </Container>
  )

}