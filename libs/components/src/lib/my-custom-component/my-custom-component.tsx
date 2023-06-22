/* eslint-disable-next-line */
export interface MyCustomComponentProps {}

export function MyCustomComponent(props: MyCustomComponentProps) {
  return (
    <div>
      <h1>Welcome to MyCustomComponent!</h1>
      <p className="bg-yellow-800 text-white p-4 text-lg">This is a paragraph with a larger font size.</p>
    </div>
  );
}

export default MyCustomComponent;
