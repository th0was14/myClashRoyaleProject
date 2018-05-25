export const servicePost = () => {
    const apiUrl = "http://localhost:3004/";

    return fetch(`${apiUrl}posts/1`).then(response => response.json());

}