export function truncate1(str: string) {
  return str;
}

interface Data {
  a?: string;
}

function fetch(): Data {
  return { a: 'str' };
}

const data = fetch();

truncate1(data.a);

truncate1(data.a!);
truncate1(data.a as string);
truncate1(data.a ?? '');
