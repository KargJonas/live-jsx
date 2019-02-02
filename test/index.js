// function Comp() {
//   return (
//     <div>
//       <h1>Test</h1>
//     </div>
//   );
// }

// render(Comp, "#root");

function MyElement(props) {
  return (
    <div>
      <h1 stye="color:red">This is a title!</h1>
      <p>Hello, {props.name}</p>
      <textarea width="200" height="300" />
    </div>
  );
}

console.log(String(MyElement));

// myRenderFunc(<MyElement name="Jonas" />, "#root");