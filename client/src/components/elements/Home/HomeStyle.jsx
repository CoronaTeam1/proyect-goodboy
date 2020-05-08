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
  mainPanel: {
    display: 'flex',
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold"
  },
  description: {
    fontSize: '1.3em'
  },
  text: {
    fontSize: '0.9em'
  },
  image100: {
    width: '100%'
  },
  margin0: {
    margin: '0'
  },
  mainWrapper: {
    margin: '45px 0 60px 0',
    padding: '8%'
  },
  card: {
    marginBottom: '20px'
  }
}));
