describe("computerSelection", function () {
		beforeEach(function () {
        document.body.innerHTML += __html__['index.html'];
        start();
    });

	var storeRandom = computerSelection();
	
    it("should provide a number smaller than 0", function () {
        expect(storeRandom).toBeGreaterThan(0);
    	});

    it("should provide a number that's 3 or less", function () {
        expect(storeRandom).not.toBeGreaterThan(3);
    	});
    it("should return an integer", function () {
        expect(storeRandom).toEqual(Math.floor(storeRandom));
        expect(storeRandom).not.toBe(null);
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