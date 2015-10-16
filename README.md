React Timeline
=============

A Timeline Slider for React.

### Usage

`es6
ReactDOM.render(<ReactTimeline range={[2010, 2011, 2012]} width="600", height: "40" />, el)
`

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
http-serve 8080
```

the examples are `example/index.html` and `example/multiple.html`

## TODO

- [x] Add multiple handlers option;
- [x] Refactor of the code
- [ ] Add play/stop option
- [x] ~~Discuss how to customize style~~ Please review if thats a good way

