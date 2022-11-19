export function truncate1(str?: string) {
  return str;
}

truncate1();
truncate1(undefined);

export function truncate2(str: string | undefined) {
  return str;
}

truncate2();
truncate2(undefined);
