var module = (function () {
    var count = 0;

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    function getCount() {
        return count;
    }

    return {
        increment: increment,
        getCount: getCount,
        decrement: decrement

    };
})();

console.log(module.getCount());
module.increment();
module.increment();
module.decrement()
module.increment();
module.decrement()

module.increment();

console.log(module.getCount());