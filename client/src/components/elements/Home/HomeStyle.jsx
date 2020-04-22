import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  modal: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center"
  },
  paper: {
    color: "#FFFFFF",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "transparent",
  },
  clicker: {
    marginTop: "2em",
    textAlign:'center'
  },
  topHeading: {
    backgroundColor: "#6AC3AE",
    color: "#FFFFFF",
    textAlign:'center',
    padding:'12px 0',
    fontSize: "30px", 
  },
  mainPanel:{
    display:'flex',
    flexDirection:"column",
  }
}));