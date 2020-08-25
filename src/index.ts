
class TestClass extends Bitmap{
  /**
   * @param x
   * @param y
   */
  testFunc(x: number, y: number): number {
    return 1;
  }
}

const btm = new TestClass(100, 200);



console.log(btm.clear());
