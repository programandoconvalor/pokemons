// Core
import React, { useEffect, useState, forwardRef } from "react";
import MaterialTable from "material-table";
import Axios from "axios";
// Config
import Config from "../../config/Config";
// Style
import { makeStyles } from "@material-ui/styles";
// Icons
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import PictureAsPdf from "@material-ui/icons/PictureAsPdf";
// Messages
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grass from "../../assets/images/type/Grass.png";
import Poison from "../../assets/images/type/Poison.png";
import Fire from "../../assets/images/type/Fire.png";
import Ground from "../../assets/images/type/Ground.png";
import Rock from "../../assets/images/type/Rock.png";
import Steel from "../../assets/images/type/Steel.png";
import Electric from "../../assets/images/type/Electric.png";
import Dragon from "../../assets/images/type/Dragon.png";
import Ghost from "../../assets/images/type/Ghost.png";
import Psychic from "../../assets/images/type/Psychic.png";
import Normal from "../../assets/images/type/Normal.png";
import Bug from "../../assets/images/type/Bug.png";
import Flying from "../../assets/images/type/Flying.png";
import Dark from "../../assets/images/type/Dark.png";
import Fairy from "../../assets/images/type/Fairy.png";
import {
  Typography,
  TextField,
  Paper,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  MenuItem,
  Tooltip,
  Divider,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 2,
    textAlign: "center",
    color: "#B72E28",
    fontSize: "12px",
    width: "50px",
  },
  paperChild: {
    padding: 2,
    textAlign: "center",
    color: "#49607a",
    fontSize: "18px",
    width: "200px",
  },
  colHeader: {
    color: "#4A4A4A",
  },
  ball: {
    height: 100,
    width: 100,
    overflow: "hidden",
    borderColor: "#B72E28",
    borderWidth: 4,
    borderRadius: 260 / 2,
    boxShadow: "0 4px 8px rgba(183,46,40,0.5)",
  },
  ballList: {
    height: 50,
    width: 50,
    overflow: "hidden",
    borderColor: "#B72E28",
    borderWidth: 4,
    borderRadius: 260 / 2,
    boxShadow: "0 4px 8px rgba(183,46,40,0.5)",
  },
  ballListEvolution: {
    height: 50,
    width: 50,
    overflow: "hidden",
    borderColor: "#f9be00",
    borderWidth: 4,
    borderRadius: 260 / 2,
    boxShadow: "0 4px 8px rgba(249,190,0,0.5)",
  },
  
  type: {
    display: "flex",
    alignItems: "center",
    //justifyContent: "space-between",
    gap: "20px",
  },
  imgType: {
    height: 40,
    width: 40,
  },
});
const TablePokemons = () => {
  const classes = useStyles();
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    PDF: forwardRef((props, ref) => <PictureAsPdf {...props} ref={ref} />),
  };

  const [dataAPI, setDataAPI] = useState([]);

  let columns = [
    {
      title: "#",
      field: "num",
      editable: "onAdd",
    },
    {
      title: "Name",
      field: "name",
      validate: (rowData) => (rowData.name === "" ? Config.MsgError_Empty : ""),
    },
    {
      title: "Ball",
      field: "img",
      render: (rowData) => (
        <img src={rowData.img} className={classes.ballList} />
      ),
    },

    {
      title: "type",
      field: "type",
      hidden: true,
    },

    {
      title: "height",
      field: "height",
      hidden: true,
    },

    {
      title: "weight",
      field: "weight",
      hidden: true,
    },
    {
      title: "candy",
      field: "candy",
      hidden: true,
    },
    {
      title: "candy_count",
      field: "candy_count",
      hidden: true,
    },
    {
      title: "egg",
      field: "egg",
      hidden: true,
    },
    {
      title: "spawn_chance",
      field: "spawn_chance",
      hidden: true,
    },
    {
      title: "avg_spawns",
      field: "avg_spawns",
      hidden: true,
    },
    {
      title: "spawn_time",
      field: "spawn_time",
      hidden: true,
    },
    {
      title: "next_evolution",
      field: "next_evolution",
      hidden: true,
    },
    
    {
        title: "prev_evolution",
        field: "prev_evolution",
        hidden: true,
      },
  ];

  // GetAll Pokemons
  const getDataPokemons = async () => {
    try {
      // get data API with axios
      const data = await Axios.get(`${Config.Url_API}`);
      if (data.status == 200) {
        // case sucess set data with useState
        setDataAPI(data.data.pokemon);
      } else {
        setDataAPI([]);
        toast.error(Config.MsgError_Server);
      }
    } catch (error) {
      // control exceptions
      setDataAPI([]);
      toast.error(Config.MsgError_Server);
    }
  };

  useEffect(() => {
    getDataPokemons();
  }, []);
  return (
    <>
      <ToastContainer
        autoClose={4000}
        position="top-right"
        className="toast-container"
        toastClassName="dark-toast"
        style={{ fontWeight: "bold" }}
      />
      <MaterialTable
        title={<h3 className={classes.colHeader}>{Config.MsgTitleTable}</h3>}
        columns={columns}
        icons={tableIcons}
        data={dataAPI}
        options={{
          headerStyle: {
            borderBottomColor: "#f86e4c",
            backgroundColor: "#e8f8ff",
            color: "#00005b",
            borderBottomWidth: "2px",
            fontFamily: "verdana",
          },
          rowStyle: (z) => {
            if (z.tableData.id % 2) {
              return { backgroundColor: "#FAF7FA" };
            }
          },
          actionsColumnIndex: -1,
        }}
        //DETAILS
        detailPanel={[
          {
            icon: tableIcons.Medicine,
            tooltip: "Show Pokemon Card",
            render: (rowData) => {
              return (
                <>
                  <Grid container spacing={2} align="center">
                    <Grid item xs={12} sm={3}>
                      <Card>
                        <CardContent>
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <img
                              className="preview"
                              src={rowData.img}
                              class={classes.ball}
                            />
                            <h3>{rowData.name}: type</h3>
                            <div className={classes.type}>
                              {rowData.type.map((type, index) => (
                                <>
                                  <Grid container spacing={2} align="center">
                                    <Grid item xs={12} sm={12}>
                                      <div key={index}>
                                        <Tooltip key={index} title={type} arrow>
                                          <img
                                            src={
                                              type === "Grass"
                                                ? Grass
                                                : type === "Poison"
                                                ? Poison
                                                : type === "Fire"
                                                ? Fire
                                                : type === "Ground"
                                                ? Ground
                                                : type === "Rock"
                                                ? Rock
                                                : type === "Steel"
                                                ? Steel
                                                : type === "Electric"
                                                ? Electric
                                                : type === "Dragon"
                                                ? Dragon
                                                : type === "Ghost"
                                                ? Ghost
                                                : type === "Psychic"
                                                ? Psychic
                                                : type === "Normal"
                                                ? Normal
                                                : type === "Bug"
                                                ? Bug
                                                : type === "Flying"
                                                ? Flying
                                                : type === "Dark"
                                                ? Dark
                                                : type === "Fairy"
                                                ? Fairy
                                                : ""
                                            }
                                            alt="poke-type"
                                            className={classes.imgType}
                                          ></img>
                                        </Tooltip>
                                      </div>
                                    </Grid>
                                  </Grid>
                                </>
                              ))}
                            </div>

                            <br />
                            <Divider />
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="h5" component="h2">
                            Features
                          </Typography>
                          <div className={classes.root}>
                            <Grid container spacing={3}>
                              <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                  height {rowData.height}
                                </Paper>
                              </Grid>
                              <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                  weight {rowData.weight}
                                </Paper>
                              </Grid>
                              <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                  egg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                  {rowData.egg}
                                </Paper>
                              </Grid>
                              <Grid item xs={3}>
                                <Paper className={classes.paper}>
                                  time {rowData.spawn_time}{" "}
                                </Paper>
                              </Grid>
                            </Grid>
                            <Divider />
                          </div>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Multipliers</Button>
                        </CardActions>
                        <TextField
                          label="choice option"
                          margin="normal"
                          fullWidth
                          select
                        >
                          {rowData.multipliers.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </TextField>
                        
                        <br />
                        <br />
                        <br />
                      </Card>
                      <Divider />
                      <br />
                      <br />
                    </Grid>
                    {rowData.next_evolution  ? (
                        <>
                    <Grid item xs={12} sm={6}>
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="h5" component="h2">
                            Next Evolutions
                          </Typography>
                          <div className={classes.root}>
                            <Grid container spacing={12}>
                              {rowData.next_evolution.map((data, index) => (
                                <Grid item xs={index}>
                                  <Paper className={classes.paperChild}>
                                    # {data.num}
                                    <p />
                                    {dataAPI.map((dta, index) => (
                                      <>
                                        {dta.num === data.num ? (
                                          <>
                                          <Grid
                                            container
                                            spacing={2}
                                            align="center"
                                          >
                                            <Grid item xs={12} sm={12}>
                                              <div key={index}>
                                                <Tooltip
                                                  key={index}
                                                  title={data.name}
                                                  arrow
                                                >
                                                  <>
                                                    <img
                                                      src={
                                                        dta.num === data.num
                                                          ? dta.img
                                                          : ""
                                                      }
                                                      alt="poke-img"
                                                      className={classes.ballListEvolution}
                                                    ></img>
                                                    <p />
                                                    Name: {data.name}
                                                  </>
                                                </Tooltip>
                                              </div>
                                            </Grid>
                                          </Grid>
                                          <br/>
                                          <br/>
                                          </>
                                        ) : (
                                          <></>
                                        )}
                                      </>
                                    ))}
                                  </Paper>
                                </Grid>
                              ))}
                            </Grid>
                            <Divider />
                          </div>
                        </CardContent>
                      </Card>
                      <Divider />
                      <br />
                      <br />
                    </Grid></>
                    ): rowData.prev_evolution  ?(
                        <>Prev</>
                    ):(<></>)}
                  </Grid>
                </>
              );
            },
          },
        ]}
        //END-DETAILS
      />
    </>
  );
};

export default TablePokemons;
