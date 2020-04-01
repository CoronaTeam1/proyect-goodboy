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
    height: "100%",
    backgroundColor: "transparent",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center"
  },
  title: {
    fontSize: "35px"
  },
  description: {
    fontSize: "23px"
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
  header: {
    textAlign: "center",
    backgroundColor: "#6AC3AE",
    color: "#FFFFFF",
    paddingLeft: "115px",
    paddingRight: "115px",
    marginTop: "-35px",
    marginLeft: "-110px",
    width: "100%",
    padding: "2px"
  },
  init:{
    fontSize: "30px",
    marginTop: "50px"
  }
}));
