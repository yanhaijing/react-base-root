export function JsxXss() {
  return (
    <div>
      <div>{`<span>123<span>`}</div>

      <div dangerouslySetInnerHTML={{ __html: `<span>123<span>` }}></div>
    </div>
  );
}
