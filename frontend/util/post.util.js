
export const fetchPost = id => {
    return $.ajax({
        method: "GET",
        url: `/api/posts/${id}`
    });
};

// no filters yet just fetches all posts of current_user

export const fetchAllPosts = () => {
    return $.ajax({
        method: "GET",
        url: "/api/posts"
    });
};

export const createPost = post => {
    return $.ajax({
        method: "POST",
        url: "/api/posts",
        data: { post }
    });
};

export const deletePost = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/posts/${id}`
    });
};