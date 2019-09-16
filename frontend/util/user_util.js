
export const updateUser = user => ({
    url: `/api/users/${user.id}`,
    method: 'PUT',
    data: user,
    contentType: false,
    processData: false
});