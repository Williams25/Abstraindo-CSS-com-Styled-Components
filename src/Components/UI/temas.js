import {
  conteudoClaro, conteudoEscuro, fundoClaro,
  fundoEscuro, textoEscuro, textoFundoClaro
} from "./variaveis";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: ''
}

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoEscuro,
  filter: "invert(100%)"
}