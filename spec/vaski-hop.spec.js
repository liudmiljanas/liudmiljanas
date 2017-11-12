'use strict';

describe("setComputerSelection", function () {
	it("should assign an object to var computerSelection", function () {
		expect(computerSelection).toEqual(undefined);
		setComputerSelection();
		expect(typeof computerSelection).toBe("object");
	});
});

describe("setComputerSelection", function () {
	beforeEach(function () {
		document.body.innerHTML += __html__['index.html'];
		start();

	});

	it("should set 'computerSelection' to 1 out of 3 available choices", function () {
		setComputerSelection();
		expect(allSelectionTypes.includes(computerSelection)).toBe(true);
	});

});

describe("init", function () {
	beforeEach(function () {
		start()
	});

	it("should reset playerSelection to -1", function () {
		expect(playerSelection).toEqual(-1);
	});

	it("should make computer imgs hidden", function () {
		expect(scissors2.className, paper2.className, well2.className).toContain("hidden");
	});

	it("should remove player img active classes ", function () {
		expect(scissors.className, paper.className, well.className).not.toContain("active");
	});

	it("should remove hiding from 'continue' button", function () {
		expect(continueButton.className).not.toContain("hidden");
	});
	it("should remove error font styling", function () {
		expect(playerName.className).not.toContain("errors");
	});

	it("should add text 'Choose wisely'", function () {
		expect(playerName.innerHTML).toBe("Choose wisely")
	});

});

describe("initializeVariables", function () {
	it("should have all selectors defined", function () {
		expect(scissors, scissors2, paper, paper2, well, well2).toBeDefined();
		expect(continueButton, resetButton, playerName).toBeDefined();
	});
});




describe("addEventListeners", function () {

	beforeEach(function () {
		start()
	});

	it("should add a border to selected item, and remove it for others onClick", function () {
		scissors.click();
		expect(scissors.className).toContain("active");
		well.click();
		expect(scissors.className).not.toContain("active");
		paper.click();
		expect(well.className).not.toContain("active");
		expect(paper.className).toContain("active");
		init();
	});
	
	it("should add relevant PlayerSelection values onClick", function () {
		expect(playerSelection.associatedNumber).toEqual(undefined);
		scissors.click();
		expect(playerSelection.associatedNumber).toBe(1);
		paper.click();
		expect(playerSelection.associatedNumber).toBe(2);
		well.click();
		expect(playerSelection.associatedNumber).toBe(3);
	});

	it("should call continueGame on continueButton click", function () {
		spyOn(window, "continueGame");
		start();
		continueButton.click();
		expect(window.continueGame).toHaveBeenCalled();
		init();
	});

	it("should call fn init on reset button click", function () {
		spyOn(window, "init");
		start();
		resetButton.click();
		expect(window.init).toHaveBeenCalled();
	});

});

describe('showPlayerSelection', function () {
	it("should change HTML text", function () {
		scissors.click();
		expect(playerName.innerHTML).toContain("Your selection is Scissors");
	});
})

