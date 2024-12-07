import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSignal, faLaptop, faClock } from '@fortawesome/free-solid-svg-icons';

interface IconTextProps {
  icon: IconDefinition;
  text: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: #7d7e80;
`;

const Text = styled.span`
  font-size: 12px;
  color: #7d7e80;
  line-height: 1;
`;

export default function IconText({ icon, text }: IconTextProps) {
  return (
    <Container>
      <Icon icon={icon} />
      <Text>{text}</Text>
    </Container>
  );
}

// 미리 정의된 IconText 타입들
export const CourseIconTexts = {
  Difficulty: () => (
    <IconText icon={faSignal} text="난이도 : 미설정" />
  ),
  ClassType: () => (
    <IconText icon={faLaptop} text="수업 : 온라인" />
  ),
  Duration: () => (
    <IconText icon={faClock} text="기간 : 무제한" />
  ),
};