import { makeStyles } from "@material-ui/styles";

export default makeStyles({
    footer: {
        height: "60px",
        backgroundColor: "#6AC3AE",
        color: "#FFFFFF",
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'fixed',
        bottom: '0px',
        width: '100vw',
        zIndex: '9999'
    },
    btPadding: {
        paddingTop: '5px'
    }
})