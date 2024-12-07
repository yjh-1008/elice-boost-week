import type {OrgCourseListResponses} from '@/types';
export default async function fetchBooks({offset, count}: {offset: number, count: number}):Promise<OrgCourseListResponses> {
  console.log(offset, count);
  const url = `https://api-rest.elice.io/org/academy/course/list/?landing_section_course_id=10391&offset=${offset}&count=${count}`;
  try {
    const response = await fetch(url, {method: "GET", next: {revalidate:5}})
    if(!response.ok) {
      throw new Error();
    }

    return await response.json();
  }catch(err) {
    console.log(err);
    return {
      courses: [],
      course_count: 0,
    };
  }

}