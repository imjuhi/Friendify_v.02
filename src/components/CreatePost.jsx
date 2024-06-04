import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  //const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post" style={{ width: "80%" }}>
      <div class="mb-3">
        <label htmlFor="userId" class="htmlForm-label">
          Enter your User Id here
        </label>
        <br />
        <input
          type="type"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          class="htmlForm-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    })
    .catch((error) => {
      console.error("Error adding post:", error);
    });

  return redirect("/");
}

export default CreatePost;
