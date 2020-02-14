describe("FizzBuzz Game Function", function () {

    beforeEach(function () {
        fizzBuzz = new fizzbuzz();
    });

    describe("checks number", function () {
        it("should exist", function () {
            expect(fizzbuzz).toBeDefined();
        });
        it("should return FizzBuzz!", function () {
            var result = fizzbuzz(15)
            expect(result).toBe("FizzBuzz!")
        });
        it("should return Fizz", function (){
            var result = fizzbuzz(6)
            expect(result).toBe("Fizz")
        });
            it("should return Buzz", function (){
            var result = fizzbuzz(10)
            expect(result).toBe("Buzz")
        });
    });
});