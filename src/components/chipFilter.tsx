import styled from "styled-components";
import Chip from "@/components/chip";
import type {ChipFilter} from "@/types";
const Container = styled.div`
  display: flex;
  gap: 8px;
  margin: 24px 0;
`;

export default function ChipFilter({category, chipList}: {category: string, chipList: ChipFilter[]}) {
  return <Container>
    {chipList.map((chip) => (
      <Chip key={chip.value} name={chip.name} value={chip.value} category={category} />
    ))}
  </Container>
}