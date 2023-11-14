<div align=center>
  <img src='./heliux-banner.png'>
  <h1>Heliux</h1>
  <b>The webApp library </b>
  <p>Make a WebApp with ease using Heliux</p>
</div>

## Feature
- Easy to learn
- simple
- lightweight
- Open source

## Example
```js
const heliux = require('heliux');

const app = heliux.App({
  port: 3000
}); //making a app

app.newPage('/', () => {
  return `
  <h1>Hello World</h1>
  `
}); //create new page 

app.start(); //statrting the app
```

[Discord Server](https://discord.gg/)
[Documentation](https://github.com/AsterOrg/heliux.wiki.git)