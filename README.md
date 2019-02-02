# Live JSX
## This is a JSX compiler for the browser.

> `/dist` contains the precompiled library.

### Usage:
- Include the script with a "factory"-attribute in HTML (factory defines the JSX-Method)
```html
<script src="path/to/live-jsx.js" factory="React.createElement"></script>
```
- Add a "type"-attribute with the value "jsx" to any script that uses jsx
```html
<script type="jsx" src="my-jsx-script.js"></script>

<script type="jsx">
  const myElement = <h1>This is a JSX element!</h1>;
</script>
```

## Example
```html
<script src="path/to/live-jsx.js" factory="myCustomElFunction"></script>
<script type="jsx">

  function MyElement(props) {
    return (
      <div>
        <h1 stye="color:red">This is a title!</h1>
        <p>Hello, {props.name}</p>
        <textarea width="200" height="300" />
      </div>
    );
  }

  myRenderFunc(<MyElement name="Jonas" />, "#root");

</script>
```

## That will be turned into this:

```html
<script src="path/to/live-jsx.js" factory="myCustomElFunction"></script>
<script>
  function MyElement(props) {
    return (
      myCustomElFunction('div', null, [
        myCustomElFunction('h1', {stye: "color:red"}, ["This is a title!"]),
        myCustomElFunction('p', null, ["Hello, ", props.name]),
        myCustomElFunction('textarea', {width: "200", height: "300"})
      ])
    );
  }

  myRenderFunc(MyElement({name: "Jonas"}), "#root");
</script>
```