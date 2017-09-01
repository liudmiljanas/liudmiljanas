describe("my suite", function () {
    it("should do stuff", function () {
        expect(1).toBe(1);
    });
    it("should do stuff2", function () {
        document.body.innerHTML += __html__['myapp.html'];
        var myDiv = document.getElementById('myDiv');
        mylibinit();
        expect(document.getElementById('myDiv').innerText).toBe("New fuckin data");

    });
    it('should work with chai framewrokd', function() {
        assert.ok('everything', 'everything is ok');
        // expect('foo').to.not.equal 'bar';
        // 1.should.not.equal 2;
        // should.exist 123;
    });
});

