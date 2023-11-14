const heliux = require('heliux');
const app = heliux.App({
  port: 3000
})

// making a new page
app.addPage('/', (page) => {
  
  // element selector
  const el = page.getElement('h1')
  el.content = 'Hello World'
  
  //event Listerner
  el.event('hover', ()=>{
    console.log('element was hovered!')
  })
  
  //page content
  return `
  <h1></h1>
  `;
});

//component
function compo(prop) {
  return `
  <b>${prop.value}</b>
  `
}
compo({value:'Heyyo'})
