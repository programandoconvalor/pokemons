import configGeneral from "../../package.json";

const Config = {
  Version: configGeneral.version,
  Title: "pokemons",
  Author: "JC - ingenierozepeda@gmail.com 08/06/2022",
  Url_API:
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
  MsgError_General: "Ocurrió un error, intente nuevamente ...",
  MsgError_Server: "Ocurrió un error, no hay conexión con el server ...",
  MsgError_API: "Error servicio API",
  MsgError_Empty: "Campo Requerido",
  MsgTitleTable: "Author: JC Zepeda - ingenierozepeda@gmail.com ...  I work with (React JS + Material UI)"
};
export default Config;
