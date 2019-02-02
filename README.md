# Live JSX
## This is a JSX compiler for the browser.

### Usage:
- Include the script with a "factory"-attribute in HTML
```html
<script src="path/to/live-jsx.js" factory="React.el"></script>
```
- Add a "jsx"-attribute to any script that uses jsx
```jsx
<script type="jsx" src="my-jsx-script.js"></script>

<script type="jsx">
const myElement = <h1>This is an element!</h1>;
</script>
```

That's it.