import expect from 'expect';
import {
  getFiles,
} from '../../src/get-files';

describe('tree parser', function() {
  it('has a getFiles function', () => {
    expect(getFiles).toBeA('function');
  });

  it('returns a promise', () => {
    const result = getFiles();
    expect(result.then).toBeA('function');
  });

  it('resolves an array', () => {
    const result = getFiles();
    return result.then(expectedArray => {
      expect(expectedArray).toBeAn('array');
    });
  });

  describe('returned array', () => {
    it('contains objects', () => {
      const result = getFiles();
      return result.then(expectedArray => {
        expectedArray.forEach(item =>
          expect(item).toBeAn('object')
        );
      });
    });

    it('object shape', () => {
      const result = getFiles();
      return result.then(expectedArray => {
        expectedArray.forEach(item => {
          expect(item.segments).toBeAn('array');
          expect(item.path).toBeA('string');
          expect(item.content).toBeA('string');
        });
      });
    });
  });
});
