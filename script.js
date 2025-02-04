// CREATING A DYNAMIC WEBSITE BUILDER

let btn = document.querySelector(".btn");

btn.onclick = function () {
    
    const title = document.getElementById('title').value
    const channel = document.getElementById('channel').value
    const views = document.getElementById('views').value
    const date = document.getElementById('date').value

    // create card container
    let card = document.createElement("div");
    card.className = "card";
    
    // create image container
    let imageDiv = document.createElement("div");
    imageDiv.className = "imageContainer";
    
    // create image 
    let img = document.createElement("img");
    img.src = "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA";
    
    // create text container
    let textDiv = document.createElement("div");
    textDiv.className = "textContainer";

    // create text
    let text = document.createElement("div");
    text.className = "text";
    text.textContent = `${title}`;
    
    // create info container
    let infoDiv = document.createElement("div");
    infoDiv.className = "info";
    infoDiv.textContent = `${channel} • ${views} • ${date}`;
    
    // inserting elements into there containers
    imageDiv.append(img);
    textDiv.append(text);
    textDiv.append(infoDiv);
    
    card.append(imageDiv);
    card.append(textDiv);
    
    document.querySelector(".cardContainer").append(card);

    // clear inputs
    document.getElementById('title').value = ''
    document.getElementById('channel').value = ''
    document.getElementById('views').value = ''
    document.getElementById('date').value = ''
}
