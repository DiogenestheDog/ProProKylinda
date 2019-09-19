
export const fetchUser = id => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${user.id}`,
    });
};

export const fetchAllUsers = () => {
    return $.ajax({
        method: "GET",
        url: `/api/users`
    })
}


// export const updateUser = user => ({
//     url: `/api/users/${user.id}`,
//     method: 'PUT',
//     data: user,
//     contentType: false,
//     processData: false
// });