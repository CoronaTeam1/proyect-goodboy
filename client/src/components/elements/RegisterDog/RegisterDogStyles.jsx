import { makeStyles } from "@material-ui/styles";

export default makeStyles({
    containerImage: {
        margin: "auto",
        width: "90%",
        height: "150px",
        overflow: "hidden",
        borderRadius: "50%"
    },

    image: {
        margin: "auto",
        width: "90%",
        height: "130px",
        overflow: "hidden",
        borderRadius: "50%"
    },

    flexCenter:{
        display : 'flex',
        justifyContent:'center'
    },

    flexColumnCenter:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        textAlign:"center"
    },

    litMargin:{
        marginBottom:'8px'
    },

    textLeft:{
        textAlign:"left"
    },

    btPadding:{
        paddingTop:'56px'
    }

});
