import React, { useRef, useState, useEffect } from "react"
import anime from "animejs"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"

import Draggable from "./Draggable.js"

function Swipeable({
    children,
    swipeLeftConfig,
    swipeRightConfig,
    onSwipeRight,
    onSwipeLeft,
    style
}) {
    const containerRef = useRef()
    const childRef = useRef()

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [icon, setIcon] = useState()

    swipeLeftConfig = {
        color: "#CF6679",
        icon: DeleteIcon,
        moveOutOfScreen: true,
        ...swipeLeftConfig
    }

    swipeRightConfig = {
        color: "#BB86FC",
        icon: EditIcon,
        moveOutOfScreen: false,
        ...swipeRightConfig
    }

    style = {
        iconColor: "#000",
        shadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        borderRadius: 8,
        ...style
    }

    const moveToInitialPosition = () => {
        anime({
            targets: childRef.current,
            translateX: 0,
            duration: 200,
            easing: "easeOutSine",
            autoplay: true,
            complete: () => setPosition({ x: 0, y: 0 })
        })
    }

    const moveOutOfScreen = (sign = 1) => {
        return new Promise(resolve => {
            anime({
                targets: childRef.current,
                translateX: childRef.current.offsetWidth * sign,
                duration: 150,
                easing: "easeOutSine",
                autoplay: true,
                complete: resolve
            })
        })
    }

    const handleSwipeLeft = () => {
        const width = childRef.current.offsetWidth

        if(position.x <= width / -2) {
            if (swipeLeftConfig.moveOutOfScreen) {
                moveOutOfScreen(-1).then(onSwipeLeft)
            } else {
                moveToInitialPosition()
                onSwipeLeft()
            }
        } else {
            moveToInitialPosition()
        }
    }

    const handleSwipeRight = () => {
        const width = childRef.current.offsetWidth

        if (position.x >= width / 2) {
            if (swipeRightConfig.moveOutOfScreen) {
                moveOutOfScreen(1)
                onSwipeRight()
            } else {
                moveToInitialPosition()
                onSwipeRight()
            }
        } else {
            moveToInitialPosition()
        }
    }

    const handleDrag = (pos) => {
        const newX = position.x + pos.deltaX

        if((newX > 0 && !onSwipeRight) || (newX < 0 && !onSwipeLeft)) {
            return
        }

        setPosition({
            ...position,
            x: newX
        })
    }

    const handleDragStop = () => {
        if(position.x < 0) {
            handleSwipeLeft()
        } else if (position.x > 0) {
            handleSwipeRight()
        }
    }

    const setColor = (color) => containerRef.current.style.backgroundColor = color

    const applyHighlight = () => {
        childRef.current.style.transition = "box-shadow 100ms linear"
        childRef.current.style.boxShadow = style.shadow
        childRef.current.style.zIndex = "10"
    }

    const removeHighlight = () => {
        childRef.current.style.boxShadow = null
        childRef.current.style.zIndex = null
    }
    
    const roundCorners = (side) => {
        childRef.current.style.borderRadius = (
            side === "right" ? `0 ${style.borderRadius}px ${style.borderRadius}px 0` :
            side === "left" ? `${style.borderRadius}px 0 0 ${style.borderRadius}px` :
            null
        )
    }

    useEffect(() => {
        childRef.current.style.transform = `translateX(${position.x}px)`

        if(position.x !== 0 || position.y !== 0) {
            applyHighlight()
        } else {
            removeHighlight()
        }

        if(position.x < 0) {
            roundCorners("right")
            setColor(swipeLeftConfig.color || "")
            setIcon(swipeLeftConfig.icon)
        } else if (position.x > 0) {
            roundCorners("left")
            setColor(swipeRightConfig.color || "")
            setIcon(swipeRightConfig.icon)
        } else {
            setColor(null)
            setIcon(null)
            roundCorners(null)
        }
        
        // eslint-disable-next-line
    }, [position, swipeRightConfig, swipeLeftConfig])

    return (
        <div ref={containerRef} style={{
            display: "flex",
            alignItems: "center",
            cursor: "ew-resize"
        }}>
            {icon && React.createElement(icon, {
                style: {
                    position: "absolute",
                    color: style.iconColor,
                    right: position.x < 0 ? 16 : "null",
                    left: position.x > 0 ? 16 : "null"
                }
            })}

            <Draggable
                onDrag={handleDrag}
                onDragStop={handleDragStop}
            >
                { React.cloneElement(React.Children.only(children), {
                    ref: childRef
                }) }
            </Draggable>
        </div>
    )
}

export default Swipeable 