import axios from "axios";

const getData = async (id) => {
  if (!id || typeof id !== "number") {
    return {
      success: false,
      message: "Please provide a number type input!",
    };
  }

  const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
  const {data: posts} = await axios (`https://jsonplaceholder.typicode.com/posts?id=${id}`)
  return {...user, posts}
};

export default getData;