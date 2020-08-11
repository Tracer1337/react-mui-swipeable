import React, { useState } from "react"
import { List, ListItem, ListItemText } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Swipeable from "react-mui-swipeable"

const useStyles = makeStyles(theme => ({
    listItem: {
        backgroundColor: theme.palette.background.paper,
        userSelect: "none"
    }
}))

function DefaultList() {
    const classes = useStyles()

    const [items, setItems] = useState(["Swipe me #1", "Swipe me #2", "Swipe me #3", "Swipe me #4", "Swipe me #5"])

    const handleSwipeLeft = index => {
        delete items[index]
        setItems([...items.filter(e => e)])
    }

    const handleSwipeRight = text => {
        alert("Swiped: " + text)
    }

    return (
        <List>
            {items.map((text, i) => (
                <Swipeable
                    key={text}
                    onSwipeLeft={() => handleSwipeLeft(i)}
                    onSwipeRight={() => handleSwipeRight(text)}
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