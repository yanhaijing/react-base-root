export function truncate2(str: string | undefined) {
  if (str === undefined) {
    return '-';
  }

  return str;
}

interface Data {
  a?: string;
}

function fetch(): Data {
  return { a: 'str' };
}

const data = fetch();

truncate2(data.a);
