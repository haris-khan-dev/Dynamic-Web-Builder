// CREATING A DYNAMIC WEBSITE BUILDER

let btn = document.querySelector(".btn");

btn.onclick = function () {
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
    let title = document.createElement("div");
    title.className = "text";
    title.textContent = "Introduction to Web development | tutorial # 1";
    
    // create info container
    let infoDiv = document.createElement("div");
    infoDiv.className = "info";
    infoDiv.textContent = "Code with Haris • 1.3M views • 1 day ago";
    
    // inserting elements into there containers
    imageDiv.append(img);
    textDiv.append(title);
    textDiv.append(infoDiv);
    
    card.append(imageDiv);
    card.append(textDiv);
    
    document.querySelector(".container").append(card);
}
