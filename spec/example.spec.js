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

    it('sinon: calls the original function', function () {
        var myAPI = { method: function () {} };

        var mock = sinon.mock(myAPI);
        mock.expects("method").once().withArgs(10);
        myAPI.method(10);
        mock.verify();
    });
});

describe("sinon example test", function () {
    var time2013_10_01;

    time2013_10_01 = (new Date(2013, 10-1, 1)).getTime();

    beforeEach(function() {
        // sinon was defined in global scope
        this.fakeTimer = new sinon.useFakeTimers(time2013_10_01);
    });

    it("some test", function() {
        //test
    });

    afterEach(function() {
        this.fakeTimer.restore();
    });beforeEach

});