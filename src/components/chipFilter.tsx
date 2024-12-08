import styled from "styled-components";
import Chip from "@/components/chip";
import type {ChipFilter} from "@/types";
const Container = styled.div`
  display: flex;
  margin: 24px 0;
  align-items: stretch;
`;

const Title = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin: 0;
  background-color: #d3d3d3;
  border: 1px solid #e0e0e0;
  width: 150px;
  padding: 4px 0px 4px 16px;
`;

const ChipList = styled.div`
  display: flex;
  gap: 8px;
  background-color: white;
  flex-grow: 1;
  padding: 4px 8px;
`;

export default function ChipFilter({title, category, chipList}: {title: string, category: string, chipList: ChipFilter[]}) {
  return <Container>
    <Title>{title}</Title>
    <ChipList>
      {chipList.map((chip) => (
        <Chip key={chip.value} name={chip.name} value={chip.value} category={category} />
      ))}
    </ChipList>
  </Container>
}