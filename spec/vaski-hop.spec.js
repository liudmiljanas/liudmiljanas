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
	
	it("should make computer imgs hidden", function(){
		expect(scissors2.className).toContain("hidden");
		expect(paper2.className).toContain("hidden");
		expect(well2.className).toContain("hidden");
	});
	
	it("should remove player img active classes ", function(){
		expect(scissors.className, paper.className,well.className).not.toContain("active");

	});

	it("should remove hiding from 'continue' button", function(){
		expect(continueButton.className).not.toContain("hidden");
	});
	it("should remove error font styling", function(){
		expect(playerName.className).not.toContain("errors");
	});
	
	it("should add text 'Choose wisely'", function(){
		expect(playerName.innerHTML).toBe("Choose wisely")
	});
		
});

describe ("initializeVariables", function(){
	it("should check that selectors are defined", function(){
		expect(scissors,scissors2,paper,paper2, well, well2).toBeDefined();
		expect(continueButton, resetButton, playerName).toBeDefined();
	});
});