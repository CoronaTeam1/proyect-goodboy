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
  image65w: {
    width: '65%',
    margin: '0 auto'
  },
  margin0: {
    margin: '0'
  },
  margin5updw: {
    margin: '5px 0'
  },
  mainWrapper: {
    margin: '65px 0 60px 0',
    padding: '5%'
  },
  card: {
    marginBottom: '20px'
  }
}));