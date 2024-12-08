import styled from 'styled-components';
import type { Course } from '@/types';
import {CourseIconTexts} from '@/components/iconText';
interface CourseCardProps {
  course: Course;
}

const Card = styled.div`
  width: 296px;
  height: 338px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const CardBody = styled.div`
  padding: 28px 24px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  `;

const Label = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  color: #524fa1;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #222;
  line-height: 1.6;
  margin: 0 0 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  font-size: 14px;
  color: #5e5f61;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const Logo = styled.img`
  object-fit: contain;
`;

const LogoWrapper = styled.div`
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 4px;
  overflow: hidden;
`;


const IconTextContainer = styled.div`
  flex: 1;
`;

const ItemSimpleInfoContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
  align-items: start;
  flex: 1;
  justify-content: space-between;

`;

const getEnrollmentLabel = (enrollType: number, isFree: boolean): string => {
  if (enrollType === 4) return '구독';
  if (enrollType === 0) return isFree ? '무료' : '유료';
  return '';
};

export default function CourseCard({ course }: CourseCardProps) {
  const enrollmentLabel = getEnrollmentLabel(course.enroll_type, course.is_free);

  return (
    <Card>
      <CardBody>
        {/* <div>{course.}</div> */}
        <Title data-testid="course-title">{course.title}</Title>
        <Description data-testid="course-description">
          {course.short_description}
        </Description>
        <ItemSimpleInfoContainer>
          <IconTextContainer data-testid="icon-text-container">
            <CourseIconTexts.Difficulty />
            <CourseIconTexts.ClassType />
            <CourseIconTexts.Duration />
            </IconTextContainer>
            {course.logo_file_url && (
              <LogoWrapper>
                <Logo
                src={course.logo_file_url}
                alt={`${course.title} 로고`}
                width={52}
                height={52}
                loading="lazy"
                 data-testid="course-logo"
              />
            </LogoWrapper> 
            )}
        </ItemSimpleInfoContainer>
        <Label data-testid="course-label">{enrollmentLabel}</Label>
      </CardBody>
    </Card>
  );
}