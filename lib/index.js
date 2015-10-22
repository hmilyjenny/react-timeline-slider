import TimelineSlider from "./components/timeline_slider"
import AutoWidth from "./components/auto_width"

export default AutoWidth(TimelineSlider);
global.ReactTimelineSlider = AutoWidth(TimelineSlider);
