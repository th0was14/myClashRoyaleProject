const apiUrl = "http://localhost:3004";

export const postComment = (body: string, postId: number) =>
  fetch(`${apiUrl}/comments/`, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ body, postId })
  }).then(res => res.json());

export const fetchByTypeAndId = (type: string, id?: number) => {
  const fetchCall = id
    ? fetch(`${apiUrl}/${type}/${id}`)
    : fetch(`${apiUrl}/${type}`);
  return fetchCall.then(response => response.json());
};
