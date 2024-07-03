// always place your context file in src/contexts/{context_name}Context.tsx
// in this example, context_name = Post

// just replace Post with whatever context file you want to make

import { createContext, useContext, useMemo, useState } from "react";
// import { faker } from "@faker-js/faker";

// function createRandomPost() {
//   return {
//     title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
//     body: faker.hacker.phrase(),
//   };
// }

// 1) CREATE A CONTEXT
const PostContext = createContext();

// Make a provider that will replace Context.Provider
// pass the children props to this provider
function PostProvider({ children }) {
  // all use state and useeffect and other state logic goes here

  ///////////////////////// SAMPLE CODE START
  const [posts, setPosts] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }
  //////////////////// SAMPLE CODE FINISH

  //   add values such as states and functions you need to pass
  const value = {
    ///////////// SAMPLE CODE START
    //   posts: searchedPosts,
    //   onAddPost: handleAddPost,
    //   onClearPosts: handleClearPosts,
    //   searchQuery,
    //   setSearchQuery,
    //////////////////// SAMPLE CODE FINISH
  };

  return (
    // 2) PROVIDE VALUE TO CHILD COMPONENTS
    // Returning the context Provider
    <PostContext.Provider value={value}>{children}</PostContext.Provider>
  );
}

// make a use hook that easily lets you use all the data
function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    //   informs whether the provider is being used out of provider hook
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { PostProvider, usePosts };
