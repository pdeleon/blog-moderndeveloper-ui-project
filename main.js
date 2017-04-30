(function(window){

// ID
var comment = document.getElementById("comment");
var post = document.getElementById("post");
var commentList = document.getElementById("comment-list");
var reply = document.getElementsByClassName("reply");

//Nodes 
var textarea_node = document.createElement("textarea");

var commentPostNode = document.createElement("div");
var userImgNode = document.createElement("div");
var userImgNodePic = document.createElement("img");
var commentBodyNode = document.createElement("div");
var commentInfoNode = document.createElement("div");
var userNameNode = document.createElement("a");
var commentTime = document.createElement("span");
var pNode = document.createElement("p");
var replyNode = document.createElement("p");

var replyText = document.createTextNode("Reply");
var userNameText = document.createTextNode("Rory Duncan");
var commentTimeText = document.createTextNode("1 day");

replyNode.appendChild(replyText);
userNameNode.appendChild(userNameText);
commentTime.appendChild(commentTimeText);


userImgNode.appendChild(userImgNodePic).setAttribute("src", "images/Rory.jpg");
commentPostNode.appendChild(userImgNode).setAttribute("class", "user-img");


commentInfoNode.appendChild(userNameNode).setAttribute("class", "user-name");
commentInfoNode.appendChild(commentTime).setAttribute("class", "comment-time-tag");

commentBodyNode.appendChild(commentInfoNode).setAttribute("class", "comment-info");
commentBodyNode.appendChild(pNode);
commentBodyNode.appendChild(replyNode).setAttribute("class", "reply");

commentPostNode.appendChild(commentBodyNode).setAttribute("class", "comment-body");



// Comment
post.addEventListener("click", function(){
  if(comment.value === "") {
    return;
  }
  else {
    commentList.appendChild(commentPostNode).setAttribute("class", "comment-post");

  }

  commentList.lastChild.querySelector("div.comment-body p").innerHTML = comment.value;
  comment.value = "";

},false);

// Reply to comment
document.addEventListener("click", function(event) {
  var selection = event.target;

  function insertAfter(newNode, selection) {
        selection.parentNode.insertBefore(newNode, event.target.nextSibling);
    }

  if(selection.className === "reply") {

    insertAfter(textarea_node, selection);
    selection.nextSibling.classList.add("show");
    selection.innerHTML = "Post";
    selection.classList.remove("reply");
    selection.classList.add("post");

  }
},false);

// Post reply to post
document.addEventListener("click", function(event) {
  var selection = event.target;
  var userReply = selection.nextSibling.value;

  if(selection.className === "post" && selection.nextSibling.value !== "") {

    selection.innerHTML = "Reply";
    selection.classList.remove("post");
    selection.classList.add("reply")
    selection.nextSibling.setAttribute("class", "gone");

    // Adds HTML
    selection.parentNode.appendChild(commentPostNode).setAttribute("class", "comment-post comment-reply");

    selection.parentNode.lastChild.querySelector("div.comment-body p").innerHTML = userReply;
  }  
  
},false);


})(window);
