import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, postTitle, postBody, reactions, tags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value.split = "";

    // addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form
      className="create-post"
      style={{ width: "80%" }}
      onSubmit={handleSubmit}
    >
      <div class="mb-3">
        <label htmlFor="userId" class="htmlForm-label">
          Enter your User Id here
        </label>
        <br />
        <input
          type="type"
          ref={userIdElement}
          class="htmlForm-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div class="mb-3">
        <label htmlFor="title" class="htmlForm-label">
          Post Title
        </label>
        <br />
        <input
          type="type"
          ref={postTitleElement}
          class="htmlForm-control"
          id="title"
          placeholder="How are you feeling today?"
        />
      </div>

      <div class="mb-3">
        <label htmlFor="body" class="htmlForm-label">
          Post Content
        </label>
        <br />
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          class="htmlForm-control"
          id="body"
          placeholder="Tell us more"
        />
      </div>

      <div class="mb-3">
        <label htmlFor="reactions" class="htmlForm-label">
          Reactions
        </label>
        <input
          type="type"
          ref={reactionsElement}
          class="htmlForm-control"
          id="reactions"
          placeholder="How many people reacted to this post?"
        />
      </div>

      <div class="mb-3">
        <label htmlFor="tags" class="htmlForm-label">
          Enter your hashtags here
        </label>
        <input
          type="type"
          ref={tagsElement}
          class="htmlForm-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
