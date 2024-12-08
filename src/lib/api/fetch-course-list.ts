import type {OrgCourseListResponses} from '@/types';

//: {"$and":[{"title":"%%"},{"$or":[{"status":2},{"status":3},{"status":4}]},{"$or":[{"enroll_type":0,"is_free":false}]},{"is_datetime_enrollable":true}]}
export default async function fetchBooks(query: URLSearchParams):Promise<OrgCourseListResponses> {
  const title = query.get('keyword');
  const price = query.getAll('price').map((param) => {
    return { enroll_type: 0, is_free: param === 'free' ? true : false };
  });
  const filter_conditions = JSON.stringify({
    $and: [{ title: `%${title ? title : ''}%` }, { $or: price }],
  });

  const url = `https://api-rest.elice.io/org/academy/course/list/?filter_conditions=${filter_conditions}&offset=${query.get('offset')}&count=${query.get('count')}`;

  try {
    const response = await fetch(url, {method: "GET", next: {revalidate:5}})
    if(!response.ok) {
      throw new Error();
    }

    return await response.json();
  }catch(err) {
    return {
      courses: [],
      course_count: 0,
    };
  }

}