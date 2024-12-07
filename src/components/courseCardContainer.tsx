import { Course } from "@/types"
import CourseCard from "@/components/courseCard";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export default function CourseCardContainer({courseList}: {courseList: Course[]}) {
  return <Container>
    {courseList.map((course) => {
      return <CourseCard key={course.id} course={course} />
    })}
  </Container>
}