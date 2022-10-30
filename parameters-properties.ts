class Params {
  constructor(public x: string, private y: string, protected z: string) { }
}

const p = new Params('x', 'y', 'z')

p.x
p.y
p.z