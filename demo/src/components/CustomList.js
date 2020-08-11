import React, { useState } from "react"
import { List, ListItem, ListItemText } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Add from "@material-ui/icons/Add"
import Swipeable from "react-mui-swipeable"

const useStyles = makeStyles(theme => ({
    listItem: {
        backgroundColor: theme.palette.background.paper,
        userSelect: "none"
    }
}))

function DefaultList() {
    const theme = useTheme()

    const classes = useStyles()

    const [items, setItems] = useState(["Swipe me left #1", "Swipe me left #2", "Swipe me left #3", "Swipe me left #4", "Swipe me left #5"])

    const handleSwipeLeft = (index) => {
        items[index] = "Swipe me left #" + (+items[index].match(/\d+/)[0] + 1)
        setItems([...items])
    }

    return (
        <List>
            {items.map((text, i) => (
                <Swipeable
                    key={i}
                    onSwipeLeft={() => handleSwipeLeft(i)}
                    swipeLeftConfig={{
                        color: theme.palette.success.main,
                        icon: Add,
                        moveOutOfScreen: false
                    }}
                >
                    <ListItem className={classes.listItem}>
                        <ListItemText>{text}</ListItemText>
                    </ListItem>
                </Swipeable>
            ))}
        </List>
    )
}

export default DefaultList