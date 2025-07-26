async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  displayPosts(data);
}

function displayPosts(posts) {
  const ul = document.getElementById('post-list');
  posts.forEach(post => {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    h1.textContent = post.title;
    const p = document.createElement('p');
    p.textContent = post.body;
    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

getPosts();
