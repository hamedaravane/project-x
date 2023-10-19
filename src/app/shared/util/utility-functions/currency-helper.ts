export function currencyHelper(value: string): string {
  const currencyEqual: Record<string, string> = {
    IRT: 'تومان',
    USD: 'دلار آمریکا',
    USDT: 'ننر',
  };
  return currencyEqual[value];
}
