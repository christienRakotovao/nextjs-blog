
export async function getPostFromJsonApi () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
          return data
      });
    return res;
}