import React from 'react';

class Tick {
  constructor(value, x) {
    this.value = value;
    this.x = x;
  }
}

class TickCollection {
  constructor(ticks) {
    this.ticks = ticks;
  }

  map() {
    return this.ticks.map.apply(this.ticks, arguments);
  }

  toArray() {
    return this.ticks;
  }

  findByValue(v) {
    return this.ticks.find((t) => t.value == v);
  }

  findCloser(x) {
    return this.ticks.map((t) => {
      return {
        tick: t,
        distance: Math.abs(x - t.x)
      };
    }).sort((a, b) => a.distance - b.distance)[0].tick;
  }

  min() {
    return this.ticks.sort((a, b) => a.x - b.x)[0];
  }

  max() {
    return this.ticks.sort((a, b) => b.x - a.x)[0];
  }

  static fromRange(range, containerWidth) {
    let ticksNumber = range.length;
    let gutter = containerWidth / (ticksNumber - 1);

    return new TickCollection(range.map((v, i) => {
      let x = i * gutter;

      return new Tick(v, x);
    }));
  }
}

export { Tick, TickCollection };
