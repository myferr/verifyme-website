import "./styles/Button.scss";

export default function Button(props: any) {
  const text: string = props.text;
  const className: string = props.className;

  return (
    <>
      <button id="btn" className={className}>
        {text}
      </button>
    </>
  );
}
