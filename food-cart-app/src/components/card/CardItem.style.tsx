export const style = {
    card_item:{
        display: "flex", 
        marginBottom:"1.5rem",
        "@media screen and (max-width:800px)": {
            display: "flex",
            flexDirection: "column" as 'column',
          },
          "@media screen and (max-width:700px)": {
            marginInline: "8px",
            marginTop: "-18px",
          },
          "@media screen and (max-width:600px)": {
            marginInline: "0px",
          },
    },
    card_img:{
        width: "200px", height: "200px" ,
        "@media screen and (max-width:800px)": {
            width: "100%", height: "200px" ,
          },
          "@media screen and (max-width:700px)": {
            width: "100%", height: "200px" ,
          },
          "@media screen and (max-width:600px)": {
            width: "100%", height: "150px" ,
          },
    },
    card_content:{
        display: "flex", 
        flex: "1 1 10%",
        flexDirection: "column" as 'column',
        justifyContent: "space-between",
        textAlign:"left" as "left",
        "@media screen and (max-width:800px)": {
            "& h5":{
                fontSize: "1rem !important"
            },
            "& p":{
                fontSize: "0.8rem !important"
            },
          },
          "@media screen and (max-width:700px)": {
            "& h5":{
                fontSize: "1rem !important"
            },
          },
          "@media screen and (max-width:600px)": {
            "& h5":{
                fontSize: "0.8rem !important"
            },
          },
    },

    card_actions:{
        padding:'0rem !important',
        display: "flex", 
        justifyContent: "space-between",
    },
    add_button:{
        minWidth:"0px !important"
    },
}

