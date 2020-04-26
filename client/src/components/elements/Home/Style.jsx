import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80%",
    backgroundColor: "transparent",
    padding: theme.spacing(2, 4, 3),
    textAlign: "center"
  },
  title: {
    fontSize: "35px"
  },
  description: {
    fontSize: "22px"
  },
  text: {
    fontSize: "14px"
  },
  arrow: {
    marginTop: "50px"
  },

  clicker: {
    marginTop: "160px"
  },
  navs: {
    textAlign: "center",
    backgroundColor: "#6AC3AE",
    color: "#FFFFFF",
    paddingLeft: "25px",
    paddingRight: "115px",
    marginTop: "-35px",
    marginLeft: "-110px",
    width: "100%",
    padding: "2px"
  },
  init: {
    paddingLeft: "160px",
    fontSize: "30px",
    marginTop: "50px"
  },
  footer: {
    margin: "10px -65px 0px 100px"
  },
  main:{
    paddingBottom: "30px"
  },
  card: {
    margin: "20px auto",
    maxWidth: 345,
  },
  contentCard: {
    display: "flex",
  },
  imgCard: { width: "40%", height: "20%" }
}));