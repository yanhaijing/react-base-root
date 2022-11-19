import { Link, useNavigate } from 'react-router-dom';

export function Hello3() {
  const nav = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          nav('/hello/hello');
          nav('/hello/hello', { replace: true });
          nav(`/hello/hello?a=${1}`);
        }}
      ></button>
      <Link to={'/hello/hello'}>/hello/hello</Link>
      <Link to={'/hello/hello'} replace>
        /hello/hello replace
      </Link>
      <Link to={`/hello/hello?a=${1}`}>/hello/hello</Link>
    </div>
  );
}
