const baseUrl = "https://api.github.com";

// Api endpoint to get user list
const userListAPI = `${baseUrl}/users`; // baseUrl + "/users"
// Api endpoint to get user list
const userListWithPaginationAPI = `${baseUrl}/users?since=11&per_page=10`;

export { userListAPI, userListWithPaginationAPI };
