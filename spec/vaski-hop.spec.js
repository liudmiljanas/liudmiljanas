var storeRandom = computerSelection();

describe("computerSelection", function(){
		
//  beforeAll(function() {
//  });
//	
	it("should provide a number greater than 0", function(){
    	expect(storeRandom).toBeGreaterThan(0);
  		});
  
  	it ("should provide a number less than 4", function(){
	 	expect(storeRandom).toBeLessThan(4);
		});
	
	it ("should return an integer", function (){
	 	expect(storeRandom).toEqual(Math.floor(storeRandom));
		expect(storeRandom).not.toBe(null);
		});	
	});


describe ("init", function(){
	it("should reset magicNumber to 0", function(){
		expect(magicNumber).toEqual(0);
		});
	it ("should reset playerSelection to -1", function (){
		expect(playerSelection).toEqual(-1);
		});
	});

