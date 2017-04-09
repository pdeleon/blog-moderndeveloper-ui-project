// ID
var comment = document.getElementById("comment");
var post = document.getElementById("post");
var commentList = document.getElementById("comment-list");

var reply = document.getElementsByClassName("reply");

// NODES 
var div_node = document.createElement("div");
var textarea_node = document.createElement("textarea");


// EVENT LISTENERS

// Post comment
post.addEventListener("click", function(){
if(comment.value === "") {
  return;
}

commentList.appendChild(div_node).setAttribute("class", "comment-post");
commentList.lastChild.innerHTML = '<div class="user-img"><img src="images/Rory.jpg" alt="userimg"></div><div class="comment-body"></div>'
commentList.lastChild.querySelector("div.comment-body").innerHTML = '<div class="comment-info"><a href="#" class="user-name">Rory Duncan</a><span class="comment-time-tag">1 day ago</span></div>' +
  '<p></p>' +
  '<p class="reply">Reply</p>';

commentList.lastChild.querySelector("div.comment-body p").innerHTML = comment.value;

comment.value = "";
});

for(var i = 0; i < reply.length; i++) {

  reply[i].addEventListener("click", function() {

    this.insertBefore(textarea_node, this.firstChild);
    this.firstChild.setAttribute("class", "light-grey"); 

    // this.parentNode.appendChild(div_node).setAttribute("class", "comment-post comment-reply");

    // this.parentNode.lastChild.innerHTML = '<div class="user-img"><img src="images/Rory.jpg" alt="userimg"></div><div class="comment-body"></div>'
    // this.parentNode.lastChild.querySelector("div.comment-body").innerHTML = '<div class="comment-info"><a href="#" class="user-name">Rory Duncan</a><span class="comment-time-tag">1 day ago</span></div>' +
    //   '<p></p>' +
    //   '<p class="reply">Reply</p>';

    // this.parentNode.lastChild.querySelector("div.comment-body p").innerHTML = comment.value;

  });
}




