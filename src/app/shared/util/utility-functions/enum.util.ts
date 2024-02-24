enum EnumType {
  NUMBER,
  STRING,
}

function enumType(input: any): EnumType {
  const keys: string[] = Object.keys(input);
  const value: string | number = input[keys[0]];
  if (typeof value === 'number') return EnumType.NUMBER;
  else return EnumType.STRING;
}

export function enumToArray(input: any): Array<string | number> {
  const type = enumType(input);

  if (type === EnumType.NUMBER) {
    return Object.values(input).filter(value => typeof value === 'number') as number[];
  } else {
    return Object.values(input);
  }
}
