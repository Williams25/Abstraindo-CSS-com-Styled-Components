import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .text{
    font-weight: bold;
  }
`

const Item = ({ data }) => {
  return (
    <ItemWrapper>
      <span className="text">{data.type}</span>
      <span>{data.from}</span>
      <span>{data.value}</span>
    </ItemWrapper>
  )
}

export default Item