export function readableNumbers(value: number): string {
  const currencyUnits: string[] = ['', 'هزار', 'میلیون', 'میلیارد'];
  const persianDigits: string[] = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  const digitCount: number = value.toString().length;

  if (digitCount === 0) {
    return 'رایگان';
  }

  let indexValue = 0;

  const toPersianDigit = (num: number): string => {
    return num.toString().replace(/\d/g, (d: string) => persianDigits[+d]);
  };

  const addCommas = (str: string): string => {
    const reversed = str.split('').reverse().join('');
    const chunks = [];
    for (let i = 0; i < reversed.length; i += 3) {
      chunks.push(reversed.slice(i, i + 3));
    }
    return chunks.join('٬').split('').reverse().join('');
  };

  for (let i = digitCount; i >= 0; i -= 3) {
    if (i === 4 && (value / 1000) % 1 !== 0) {
      return addCommas(toPersianDigit(value)) + ' ' + currencyUnits[indexValue];
    }
    if (i > 3) {
      value = value / 1000;
      indexValue++;
    }
  }
  return toPersianDigit(value) + ' ' + currencyUnits[indexValue];
}
