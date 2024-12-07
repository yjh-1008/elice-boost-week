import { ChipFilter } from "@/types";
import styled from "styled-components";
import { useRouter } from "next/router";
const ChipItem = styled.div`
  border-radius: 16px;
  width:40px;
  text-align: center;
  border: 1px solid #e0e0e0;
  padding: 4px 8px;
  background-color: gray;
  color: white;
  &:hover {
    background-color: rgb(115, 83, 234);
  }
  cursor: pointer;
`;

export default function Chip({name, value, category}: ChipFilter & {name: string, value: string, category: string}  ) {
  const router = useRouter();


  const onChipClick = (type: string) => {
    const query = router.query
    let categoryValue = query[category] as string[];
    if(!Array.isArray(categoryValue)) {
      categoryValue = [categoryValue]
    }
    categoryValue = categoryValue.filter((item) => item !== undefined); 
    if(query[category]?.includes(type)) {
      const newValues = categoryValue.filter((item) => !item || item !== type);
      router.push({pathname: router.pathname, query: {...router.query, [category]: newValues}})
    } else {
      console.log(type, categoryValue)
      if(categoryValue.length === 0) {
        delete query[category];
        router.push({pathname: router.pathname, query: {...router.query, [category]: [type]}})
      } else {  
        router.push({pathname: router.pathname, query: {...router.query, [category]: [type, ...categoryValue]}})
      }
    }
  };

  return <ChipItem onClick={(e) => onChipClick(value)} style={{backgroundColor: router.query[category]?.includes(value) ? "rgb(115, 83, 234)" : "gray"}}>{name}</ChipItem>
}
