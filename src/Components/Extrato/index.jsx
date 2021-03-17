import React from "react";
import { Box } from "../UI";
import { extratoLista } from "../../info";
import { Btn } from "../UI";
import { Items } from "../Items/index";
const Extrato = () => {
  return (
    <Box>
      {
        extratoLista.updates.map((extrato, index) => {
          return (
            <Items key={index} data={extrato} />
          )
        })
      }
      <Btn>Ver mais</Btn>
    </Box>
  )
}

export default Extrato