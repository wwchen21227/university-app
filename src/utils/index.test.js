import { getFirstItemOrDefault, validateEmail } from '.';

describe('Utils', () => {
  describe('getFirstItemOrDefault', () => {
    it('should return first item from the array', () => {
      const expectedResult = 'apple';
      const fakeArray = ['apple', 'google'];
      const firstItem = getFirstItemOrDefault(fakeArray);

      expect(firstItem).toEqual(expectedResult);
    });

    it('should return default empty string if first item array is null/undefined', () => {
      const expectedResult = '';
      const fakeArray = [];
      const firstItem = getFirstItemOrDefault(fakeArray);

      expect(firstItem).toEqual(expectedResult);
    });
  });

  describe('validateEmail', () => {
    it('should return true', () => {
      expect(validateEmail('ww@hotmail.com')).toBeTruthy();
      expect(validateEmail('ww@gmail.com')).toBeTruthy();
      expect(validateEmail('tester@gmail.com')).toBeTruthy();
      expect(validateEmail('tester@ibm.com')).toBeTruthy();
      expect(validateEmail('verylongandinterestingemail@ibm.com')).toBeTruthy();
    });

    it('should return false', () => {
      expect(validateEmail('ww@hotmail')).toBeFalsy();
      expect(validateEmail('ww@.com')).toBeFalsy();
      expect(validateEmail('testergmail.com')).toBeFalsy();
      expect(validateEmail('@ibm.com')).toBeFalsy();
      expect(validateEmail('verylongandinterestingemail')).toBeFalsy();
    });
  });
});
