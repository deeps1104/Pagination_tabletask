// const baseUrl = "https://jsonplaceholder.typicode.com/"
// function getData(url) {
//   fetch(baseUrl + url +"/")
//     .then((response) => response.json())
//     .then((json) => {
//       return json
//     })
    
//   }
  
// function render(data){

// }
// data = getData("posts")
// render(data)

let data;
const baseUrl = "https://jsonplaceholder.typicode.com/"
function getData(url) {
  fetch(baseUrl + url +"/")
    .then((response) => response.json())
    .then((json) => {
      return json
    })
    
  }
  
  data = getData("posts")
  render(data)
  
  function render(data){
  
  }



