'use strict';

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
		expect(scissors2.className, paper2.className, well2.className).toContain("hidden");
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
	it("should have all selectors defined", function(){
		expect(scissors,scissors2,paper,paper2, well, well2).toBeDefined();
		expect(continueButton, resetButton, playerName).toBeDefined();
	});
});


describe ("setComputerNumber", function(){
	it("should assign magicNumber a value", function() {
			setComputerNumber();
	 	   	expect(typeof(magicNumber)).toBe("number");
			expect(magicNumber).toBeGreaterThan(0);
	   });
});

describe ("addEventListeners", function(){

	it("should add a border to selected item, and remove it for others onClick", function(){
		scissors.click();
		expect(scissors.className).toContain("active");
		well.click();
		expect(scissors.className).not.toContain("active");
		paper.click();
		expect(well.className).not.toContain("active");
		expect(paper.className).toContain("active");
		init();
	});

	it ("should add relevant PlayerSelection values onClick", function(){
		expect(playerSelection).toBeLessThan(1);
		scissors.click();
		expect(playerSelection).toBe(1);
		paper.click();
		expect(playerSelection).toBe(2);
		well.click();
		expect(playerSelection).toBe(3);
	});
	
	it ("should call displayComputerSelection on continueButton click", function(){
        spyOn(window, "displayComputerSelection");
    	start();
        continueButton.click();
        expect(window.displayComputerSelection).toHaveBeenCalled();
		init();
	});
			
	it ("should call fn init on reset button click", function(){
		spyOn(window, "init");
		start();
		resetButton.click();
		expect(window.init).toHaveBeenCalled();
	});

});

describe('showPlayerSelection', function(){
	it ("should change HTML text", function(){
		scissors.click();
		expect(playerName.innerHTML).toContain("Your selection is 1");
	});
})
		

//describe ("winner", function(){
//	it("should not be undefined ", function(){
//		
//		expect(winner)
//	})
//});