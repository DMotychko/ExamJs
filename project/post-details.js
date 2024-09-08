function getUrl () {
    let url = new URLSearchParams(window.location.search);
      return url.get('postId')
}

let divPostDetails = document.getElementById('post-details')
let divComments = document.getElementById('comments')

fetch(`https://jsonplaceholder.typicode.com/posts/${getUrl()}`)
    .then(response => response.json())
    .then(post => {
        divPostDetails.innerHTML = `
            <p>User ID: ${post.userId}</p>
            <p>Post ID: ${post.id}</p>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
        `
    })
fetch(`https://jsonplaceholder.typicode.com/posts/${getUrl()}/comments`)
    .then(response => response.json())
    .then(comments => {

        for (const comment of comments) {

            let newDiv = document.createElement('div')

            newDiv.className = 'comment'
            newDiv.innerHTML = `
                <p>Post ID: ${comment.postId}</p>
                <p>ID: ${comment.id}</p>
                <p>Name: ${comment.name}</p>
                <p>Email: ${comment.email}</p>
                <p>Body: ${comment.body}</p>
            `

            divComments.appendChild(newDiv)
        }

    })
