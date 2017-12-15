var assert = require("assert")
var Location = require("../location.js")

describe( "Location", function(){

  var testLocation

  beforeEach(function(){
    testLocation = new Location("Nova Scotia", [5, 3]);
  });

  it("should have a name", function(){
    assert.strictEqual(testLocation.name, "Nova Scotia")
  });
  it("should have a lat", function(){
    assert.deepStrictEqual(testLocation.latlng[0], 5)
  });
  it("should have a lng");
  it("should have a description")
  it("should have events");


});
