let data=[];
let n;
let pageNum;
let start = 0;
let end = 10;
window.onload = getData();
function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        for (let i = 0; i < json.length; i++) {
          data.push(json[i])   
        }
        showdata()
      })
      
    }

    function showdata(){
          if(data.length!==0){
            let tabData = ""
            n = data.slice(start,end)
            for(let i = 0 ; i<n.length; i++){
              tabData = tabData + `<tr>
              <td style="color:#c5586c;">${n[i].id}</td>
              <td >${n[i].title} </td>
              <td >${n[i].body}</td>
              </tr>`
            }

            document.getElementById("users").innerHTML = tabData;
            pageNum = 10;
            let Count  = Math.ceil(data.length /pageNum)
            let m = "";
            for (let index = 0; index<Count; index++) {
                  m += `<button onclick="newData()" class="btn btn-primary mx-1" id="new">${index+1}</button>`
                }
                document.getElementById("numbers").innerHTML= m  
              }
}

    function getFirstPage (){
      if(event.target.id == "first"){
        start = start+ pageNum
        end = end + pageNum
      }
      if(event.target.id == "last"){
        start = start- pageNum
        end = end - pageNum
      }
      showdata()
    }


    function newData()
      {
        let getdata= parseInt(event.target.innerHTML)
        start= (getdata*pageNum)-pageNum
        end = (getdata*pageNum)
        showdata()
      }

     function findName(){
       input = document.getElementById('myInput');
      let p = input.value.toLowerCase();
     console.log(p)
    //  let q = data.filter(function(user)
    //  {
    //    user = user.title.toLowerCase()
    //    console.log(user)
    //    return user.indexOf(p) > -1;  
    //  })
    //   input.addEventListener('keyup', q);
   }   


 
  //  for (var i = 0, row; row = table.rows[i]; i++) {    
  //       console.log(i)  
  //  } 



  //  function liveSearch() {
  //   // Locate the card elements
  //   let cards = document.querySelectorAll('.cards')
  //   // Locate the search input
  //   let search_query = document.getElementById("searchbox").value;
  //   // Loop through the cards
  //   for (var i = 0; i < cards.length; i++) {
  //     // If the text is within the card...
  //     if(cards[i].innerText.toLowerCase()
  //       // ...and the text matches the search query...
  //       .includes(search_query.toLowerCase())) {
  //         // ...remove the `.is-hidden` class.
  //         cards[i].classList.remove("is-hidden");
  //     } else {
  //       // Otherwise, add the class.
  //       cards[i].classList.add("is-hidden");
  //     }
  //   }
  //
  function newt(){
    var o1 = document.getElementById("n1");
    debugger 
o1.hasChildNodes(0)

  }
    
  
      



