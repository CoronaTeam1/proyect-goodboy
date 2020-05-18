import { makeStyles } from "@material-ui/styles";

export default makeStyles({
    mainWrapper:{
        display:'flex',
        flexDirection:'column',
        marginTop:'50px',
        textAlign:'center',
    },
    dogInfo:{
        padding:'20px'
    },
    decoration:{
        width:'90%',
        height:'10px',
        backgroundColor:'#6ac3ae',
        borderRadius:'20px',
        display:'inline-block',
        margin:'20px 0px',
    },
    imgWrapper:{
        margin: "auto",
        width: "90%",
        height: "130px",
        overflow: "hidden",
        borderRadius: "50%"
    }
})