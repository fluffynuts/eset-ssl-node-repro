describe(`ESET introduces SSL errors to node processes`, () => {
  const fetch = require("cross-fetch");
  it(`should be able to fetch from www.google.com`, async () => {
    // Arrange
    // Act
    const res = await fetch("https://www.google.com");
    const body = await res.text();
    // Assert
    expect(body.toLowerCase())
      .toContain("html");
  });
});
