# React Mui Swipeable

A simple component for making elements swipeable. It follows the material design pattern and uses [@material-ui](https://material-ui.com/) internally.

```jsx
<Swipeable 
    onSwipeLeft={() => console.log("Swipe Left")}
    onSwipeRight={() => console.log("Swipe Right")}
>
    <div>Swipe Me</div>
</Swipeable>
```

### Installation

``npm install react-mui-swipeable``

### Usage

For the component to work proberly, the child must accept the style attribute. (If you use a DOM element, this will be the case)

```jsx
import Swipeable from "react-mui-swipeable"
```

```jsx
<Swipeable>
    // Single child
</Swipeable>
```

### Available Props

```js
/*
 * Triggers when the user swipes to the left / right. If no value is given,
 * The user will be unable to swipe to the left / right.
 * 
 * Default: undefined
*/
[onSwipeLeft, onSwipeRight]: Function,

/*
 * Configurations for swiping left / right.
 * 
 * Default:
 * 
 * swipeLeftConfig: {
 *     color: "#CF6679",
 *     icon: DeleteIcon,
 *     moveOutOfScreen: true
 * }
 * 
 * swipeRightConfig: {
 *     color: "#BB86FC",
 *     icon: EditIcon,
 *     moveOutOfScreen: false
 * }
*/
[swipeLeftConfig, swipeRightConfig]: {
    // Color of the background-surface exposed while swiping
    color: String,

    // Element which is renderer on the background-surface while swiping
    icon: ReactElement,

    // Whether the element should move back to the initial position when 
    // releasd or move out of screen
    moveOutOfScreen: Boolean
}

/*
 * General style configuration
 *
 * Default: {
 *     iconColor: "#000",
 *     shadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px 
 *              rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
 *     borderRadius: 8
 * }
*/
style: {
    // Color of the icon
    iconColor: String,

    // Styles applied to the child while swiping
    shadow: String,
    borderRadius: Number
}
```