import axios from "axios";
import { doc } from "prettier";
const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML) + 1;
};

const addComment = (comment) => {
  const li = document.createElement("li");
  const spand = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
};

const sendComment = async (comment) => {
  const videoID = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoID}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    addComment(comment);
    commentList.prepend(li);
    increaseNumber();
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
