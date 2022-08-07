import { Grid } from "@material-ui/core";
import CardSubHeaderIcon from "../src/components/Card/CardSubHeaderIcon";
import TablePokemons from "./components/Tables/TablePokemons";
const dataSection = {
  success: true,
  message: "thats all information",
  data: {
    id: 1,
    title: "Pokédex Challenge",
    subtitle:
      "This componet shows at list pokemons and if you clic on row will show details of pokemon card ...",
  },
};

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <CardSubHeaderIcon
            title={dataSection.data.title}
            subTitle={dataSection.data.subtitle}
          />
        </Grid>
      </Grid>
      <TablePokemons />
    </>
  );
}
export default App;
