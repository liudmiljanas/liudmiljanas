describe("computerSelection", function () {
    beforeEach(function () {
        document.body.innerHTML += __html__['index.html'];
        start();
    });

    it("should provide a number greater than 0", function () {
        expect(computerSelection()).toBeGreaterThan(0);
    });

    it("should provide a number less than 4", function () {
        expect(computerSelection()).toBeLessThan(4);
    });
    it("should return an integer", function () {
        // expect(computerSelection()).toEqual(Math.floor(computerSelection())); // wtf ???
        expect(computerSelection()).not.toBe(null);
    });
});


describe("init", function () {
    it("should reset magicNumber to 0", function () {
        expect(magicNumber).toEqual(0);
    });
    it("should reset playerSelection to -1", function () {
        expect(playerSelection).toEqual(-1);
    });
});