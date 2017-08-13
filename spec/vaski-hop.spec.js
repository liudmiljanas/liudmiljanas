describe("computerSelection", function() {
  it("should provide an integer from 1 to 3", function() {
    expect(computerSelection).toBe(1) ||
	expect(computerSelection).toBe(2) ||
	  expect(computerSelection).toBe(3);
  });
});
