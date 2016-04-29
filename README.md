React Timeline
=============

A Timeline Slider for React.

### Usage

```es6
<ReactTimeline 
  range={[2010, 2011, 2012]}
  width="600"
  height: "40" />
```

### Installation

The recommended way to install react-timeline-slider is through npm (with browserify, webpack or a similar bundler)

```bash
npm install react-timeline-slider
```

Alternatively, you can copy the [react-timeline-slider directory](dist/react-timeline-slider)
inside dist and use it in your RequireJS project. You will need to set it as a package:

```javascript
require.config({
  "packages": ["react-timeline-slider"]
});
```

Feel free to check the [RequireJS example](example/examples/requirejs/requirejs.html).

### Contributing and running examples

First, clone the repository

```bash
git clone git@github.com:ecostage/react-timeline-slider.git
```

Install the dependencies

```bash
cd react-timeline-slider
npm install
```

You can then build the development bundle:

```bash
npm run build
```

Start the http-server to take a look at or modify the examples:

```bash
npm run server
```

Keep gulp watching changes on the background and rebuilding:

```bash
npm run watch
```

Or just do all of them at once with:

```bash
npm start
```

The development bundle bundles all the dependencies (including React itself)
and exposes the globals React and ReactDOM to make things easier for everyone.

The examples should be available at `http://localhost:8080/example/examples/<example>.html`

## Styling

```scss
$background-color: 'gray';
$handler-color: 'blue';
$connector-color: 'green';

.react-timeline-slider {
  &__background {
    fill: $background-color;
  }

  &__tick-point {
    r: 2;
  }

  &__tick-text {
    font-size: 10px;
  }

  &__handler {
    r: 7;
    fill: $handler-color;
    transition: r 0.4s;

    &:hover {
      fill: darken($handler-color, 12%);
    }

    &:active {
      r: 9;
    }
  }

  &__line-between-handlers {
    stroke: $connector-color;
    stroke-width: 4px;
  }

  &__control-bg {
    fill: rgba(170, 170, 170, 0.7);
  }

  &__control-button {
    fill: rgb(255, 255, 255);
  }

  &__control-pause {
    fill: rgb(148, 57, 57);
  }

  &__control-play {
    fill: rgb(131, 240, 132);
  }
}
```
