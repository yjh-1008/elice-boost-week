export type Nullish<T> = T | null | undefined;

export interface OrgCourseListResponses {
  course_count: number;
  courses: {
    courseType: number;
    tags: string[];
    title: string;
    shortDescription: string;
    classType: number;
    logoFileUrl: null | string;
    enrollRolePeriod: null | string;
    enrolledRoleEndDatetime: number | null;
    beginDatetime: number;
    endDatetime: null|number;
    isDiscounted: boolean;
    discountedPrice: string;
    discountedPriceUsd: string;
    discountRate: null | any;
    price: string;
    priceUsd: string;
    enrollType: number;
    isFree: boolean;
  }[];
}