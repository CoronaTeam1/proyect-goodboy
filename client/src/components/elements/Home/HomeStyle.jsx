import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  modal: {
    display: "flex",

  },
  paper: {
    color: "#FFFFFF",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "transparent",
    padding: '0em 4em'
  },
  clicker: {
    marginTop: "2em",
    textAlign: 'center'
  },
<<<<<<< HEAD
  topHeading: {
    backgroundColor: "#6AC3AE",
    color: "#FFFFFF",
    textAlign: 'center',
    padding: '12px 0',
    fontSize: "30px",
  },
  mainPanel: {
    display: 'flex',
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold"
  },
  description: {
    fontSize: '1.3em'
=======
  mainPanel:{
    display:'flex',
    flexDirection:"column",
>>>>>>> 243c4508bfafb7f802b98a8735bb5521e4579acd
  },
  text: {
    fontSize: '0.9em'
  },
  image100: {
    width: '100%'
  },
  margin0: {
    margin: '0'
  }
}));