
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

export const createPost = formData => {
    return $.ajax({
        method: "POST",
        url: "/api/posts",
        data: formData,
        contentType: false,
        processData: false
    });
};

export const deletePost = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/posts/${id}`
    });
};