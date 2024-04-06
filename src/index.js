document.addEventListener('DOMContentLoaded', () => {

    // Declare variables for easy reference
    const baseUrl = "http://localhost:3000";
    
    
    // Function to add data to the DOM
    function addInfo(data) {
        fetch(`${baseUrl}`)
        
        .then(data => {
            
        // Select main area
            const form = document.querySelector('.image-container');
            
            // UNDER IMAGES
            // Place the image
            const image = document.querySelector('.logo');
            const myImage = document.createElement('img');
            myImage.src = `${data.image}`;
            image.appendChild(myImage);
            
            // Add the number of likes
                const numLikes = document.querySelector("#like-count");
                const myNumLikes = document.createElement('span');
                myNumLikes.textContent =`${ data.numLikes}`;
                numLikes.appendChild(myNumLikes);
                
                // Add the title
                const title = document.querySelector("#card-title");
                const myTitle = document.createElement("h2");
                myTitle.textContent = `${data.title}`;
                title.appendChild(myTitle);
                
                // UNDER COMMENTS
                // Add the comments
                const comments = document.querySelector('#comments-list');
                const myComments = document.createElement("li");
                myComments.textContent = `${data.content}`;
                comments.appendChild(myComments);
                
                // Append elements to the form
                form.appendChild(image);
                form.appendChild(numLikes);
                form.appendChild(title);
                form.appendChild(comments);
                
            })
}


const button=document.querySelector('#like-button');
button.addEventListener('click', function (event) {
    if (event.target.matches('#like-button')) {
      const imageId = event.target.id;
      const currentLikesElement = event.target.previousSibling;
      const currentLikes = parseInt(currentLikesElement.textContent.split(' ')[0]); // Extract current likes count from DOM
      const newLikes = currentLikes + 1;

      updateLikesCount(imageId, newLikes)
        .then(updatedLikes => {
          currentLikesElement.textContent = `${updatedLikes.likes} Likes`;
        })
        .catch(error => {
          console.error('Error updating likes count:', error);
        });
    }
  });

  function updateLikesCount(imagesId, newLikes) {
    return fetch('http://localhost:3000', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        likes: newLikes
      })
    })
    .then(response => response.json());
  }
})