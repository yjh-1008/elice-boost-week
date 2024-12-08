import styled from "styled-components";
import { CourseIconTexts } from "@/components/iconText";

const Card = styled.div`
  width: 296px;
  height: 338px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: #d3d3d3;
`;

const CardBody = styled.div`
  padding: 28px 24px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #d3d3d3;
  `;

const Label = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  color: #524fa1;
  margin-bottom: 12px;
  background-color: #d3d3d3;
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
  background-color: #d3d3d3;
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
  background-color: #d3d3d3;
`;


const Logo = styled.img`
  object-fit: contain;
  background-color: #d3d3d3;
`;

const LogoWrapper = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d3d3d3;
  border-radius: 4px;
  overflow: hidden;
`;


const IconTextContainer = styled.div`
  flex: 1;
  background-color: #d3d3d3;
`;

const ItemSimpleInfoContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
  align-items: start;
  flex: 1;
  justify-content: space-between;
  background-color: #d3d3d3;
`;

export default function CourseCardSkeleton({count}: {count: number}) {
  return <div>
    {Array.from({length: count}).map((_, index) => {
      return(
        <Card key={`courseCardSkeleton-${index}`}>
        <CardBody>
          {/* <div>{course.}</div> */}
          <Title data-testid="course-title"></Title>
          <Description data-testid="course-description">
          </Description>
          <ItemSimpleInfoContainer>
            <IconTextContainer data-testid="icon-text-container">
              <CourseIconTexts.Difficulty />
              <CourseIconTexts.ClassType />
              <CourseIconTexts.Duration />
              </IconTextContainer>
                <LogoWrapper>
                  <Logo
                  width={52}
                  height={52}
                  loading="lazy"
                  data-testid="course-logo"
                />
              </LogoWrapper>
          </ItemSimpleInfoContainer>
          <Label data-testid="course-label"></Label>
        </CardBody>
      </Card>
      )
    })}
  </div>
} 