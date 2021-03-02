class c1 {
  constructor(p2) {
    this.p2 = p2;
  }
}

class c2 extends c1 {
  constructor(p1, p2, p3) {
    super(p2);
    this.p1 = p1;
    this.p3 = p3;
  }
}

class c3 extends c2 {
  constructor(p1, p2, p3, p4) {
    super(p1, p2, p3);
    this.p4 = p4;
  }
}

const myClass = new c3(1, 2, 3, 4);

console.log(myClass);
