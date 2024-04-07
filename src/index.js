   // Function to add data to the DOM
    //function addInfo(data) {
      Promise.all([

        fetch("http://localhost:3000/images"),
        fetch("http://localhost:3000/comments")
      ]).then(function(responses) {
        return Promise.all(responses.map(function(response) {
          return response.json()
        
      }))})
        .then(data => {
          //console.log(data);   //it works!




         const myTitle=document.querySelector("#card-title");
         //console.log(myTitle);
          myTitle.innerHTML = data[0][0].title

         //place the image
         const myImage=document.querySelector("#card-image");
         //console.log(myImage);
          myImage.src=data[0][0].image

          //Place the comments 
          //iterate over the comments
          const myComments=document.querySelector("#comments-list");
          if(data[1].length >0) {
            myComments.innerHTML = '' //clear the existing comments
            data[1].forEach(comment => {
              myComments.innerHTML += `<p>${comment.content}</p>`;
            })
          }else{
            console.log("Comments cannot be displayed")
          }

         const myLikes=document.querySelector("#like-count");
         myLikes.innerHTML=`${data[0][0].likes} likes`

          }
        )

        .catch(function(err) {console.log("error occurred!")})
     // }





     

// updating the number of likes

const likebtn = document.querySelector("#like-button")
  //console.log(likebtn)
  likebtn.addEventListener("click",function(e) {
 

  })

 // referenes
const likeButton = document.getElementById("like-button");
const myLikes=document.querySelector("#like-count");

// Initially set likes count to 0
let likes = 0;

// Function to update the likes count display
function updateLikesDisplay() {
  myLikes.textContent = likes + " likes";
}

// Add event listener to the like button
likeButton.addEventListener("click", function() {
  // Increment the likes count
  likes++;
  // Update the likes count display
  updateLikesDisplay();
});







// POSTS 
const commentbtn=document.querySelector(".comment-button");
//console.log(commentbtn)

const commentForm = document.getElementById("comment-form");//is a form in the HTML

  const commentInput = document.getElementById("comment");// input in the HTML

  const myComments=document.querySelector("#comments-list");// the list item in the HTML



  commentForm.addEventListener("submit",function(e) {
     e.preventDefault();// prevernts default reload

     const commentTexts= commentInput.value
     //console.log(commentTexts)
     const commentListItem = document.createElement("li");
     //create a list for the new comments
     commentListItem.textContent = commentTexts;

     // Append the new comment list item to the comments list
     myComments.appendChild(commentListItem);

     commentForm.reset()

     function addComment
     (commentText) {
       // Create a new comment list item
       const commentListItem = document.createElement("li");
       commentListItem.textContent = commentText;
       
       // Append the new comment list item to the comments list
       myComments.appendChild(commentListItem);
      }
      
      addComment()
      
    })





