(function () {
    'use strict';

    class TestClass extends Bitmap {
        /**
         * @param x
         * @param y
         */
        testFunc(x, y) {
            return 1;
        }
    }
    const btm = new TestClass(100, 200);
    console.log(btm.clear());

}());
//# sourceMappingURL=TestPlugin.js.map
