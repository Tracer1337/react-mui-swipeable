import React from "react"
import { CssBaseline, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import DefaultList from "./components/DefaultList.js"
import CustomList from "./components/CustomList.js"

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: 500,
        margin: `${theme.spacing(2)}px auto 0 auto`,
        padding: `0 ${theme.spacing(2)}px`,
        overflowX: "hidden"
    },

    spacing: {
        marginBottom: theme.spacing(2)
    },

    listItem: {
        backgroundColor: theme.palette.background.paper,
        userSelect: "none"
    }
}))

function App() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <CssBaseline/>

            <div className={classes.spacing}>
                <Typography variant="h3">React Mui Swipeable</Typography>
                <Typography variant="h6">Works best on mobile</Typography>
            </div>

            <div className={classes.spacing}>
                <DefaultList/>
                <Button
                    varaint="link"
                    href="https://github.com/Tracer1337/react-mui-swipeable/tree/master/demo/src/components/DefaultList.js"
                    target="_blank"
                >View source</Button>
            </div>

            <div className={classes.spacing}>
                <CustomList/>
                <Button
                    varaint="link"
                    href="https://github.com/Tracer1337/react-mui-swipeable/tree/master/demo/src/components/CustomList.js"
                    target="_blank"
                >View source</Button>
            </div>
        </div>
    )
}

export default App