const printingName = require("../src/printingName");

describe("Print Name Test", () => {
    test("Name printing", () => {
      // arrange and act
      var result = printingName.printName("Teddy")
  
      // assert
      expect(result).toBe("HelloTeddy");
    });
  
  });