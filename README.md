React Timeline
=============

*Just a draft, not working yet*

A Timeline Slider for React.

### Usage

```es6
ReactDOM.render(<ReactTimeline range={[2010, 2011, 2012]} width="600", height: "40" />, el)
```

### Contributing and running examples

First, clone repository

```bash
git clone git@github.com:ecostage/react-timeline-slider.git
```

then enter in the project directory, install dependencies and compile assets

```bash
cd react-timeline-slider
npm install
gulp build
```

run a HTTP server

```bash
http-server
```

the examples are `example/index.html` and `example/multiple.html`

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
}
```

## TODO

- [x] Add multiple handlers option;
- [x] Refactor of the code
- [ ] Add play/stop option
- [x] ~~Discuss how to customize style~~ Please review if thats a good way

