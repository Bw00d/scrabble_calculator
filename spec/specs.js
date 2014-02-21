describe('scrabbleScorer', function() {
  it('should return a number value for a single letter', function() {
    scrabbleScorer('a').should.equal(1);
    scrabbleScorer('s').should.equal(1);
    scrabbleScorer('x').should.equal(8);
  });
  it('should return all added values of letters in a word', function() {
    scrabbleScorer('as').should.equal(2);
    scrabbleScorer('cat').should.equal(5);
    scrabbleScorer('epicodus').should.equal(13);
  });

});
describe('indexFinder', function() {
  it('should return the index on the letter in the dictionary', function() {
    indexFinder('v').should.equal(3);
    indexFinder('m').should.equal(2);
    indexFinder('x').should.equal(5);
  });
});
