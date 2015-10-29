var DefaultHandlerStyle = {
  stroke: "#303030",
  fill: "#00ff66",
  r: 5
}

var DefaultBackgroundStyle = {
  fill: "rgba(200, 200, 200, 0.4)",
  stroke: "rgba(220, 220, 220, 0.2)"
}

var DefaultTickStyle = {
  fill: "#303030",
  r: "2",
}

var DefaultTextStyle = {
  fontFamily: "sans-serif",
  fontSize: "10"
}

var DefaultLineBetweenHandlersStyle = {
  stroke: "#00ff66",
  strokeWidth: "4",
  fontSize: "10"
}

var DefaultPlayStopStyle = {
  bg: {
    fill: "rgba(170, 170, 170, 0.7)"
  },
  circle: {
    r: "14",
    cx: "24",
    cy: "20",
    fill: "rgb(255, 255, 255)"
  },
  play: {
    points: "0,0 0,12 12,7",
    fill: "rgb(131, 240, 132)"
  },
  pause: {
    y: "13",
    width: "3",
    height: "15",
    fill: "rgb(148, 57, 57)"
  }
}

var DefaultStyles = {
  handlerStyle: DefaultHandlerStyle,
  backgroundStyle: DefaultBackgroundStyle,
  tickStyle: DefaultTickStyle,
  textStyle: DefaultTextStyle,
  lineBetweenHandlers: DefaultLineBetweenHandlersStyle,
  playStopStyle: DefaultPlayStopStyle
}

export default DefaultStyles;
