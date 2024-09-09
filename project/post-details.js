function getUrl () {
    let url = new URLSearchParams(window.location.search);
      return url.get('postId')
}

const divPostDetails = document.getElementById('post-details')
const divComments = document.getElementById('comments')
let idUrl = getUrl()


async function loadPostAndComments () {
    try {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${idUrl}`)
        const post = await postResponse.json()

        divPostDetails.innerHTML = `
            <p>User ID: ${post.userId}</p>
            <p>Post ID: ${post.id}</p>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
        `

        const responseComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${idUrl}/comments`)
        const comments = await responseComments.json()


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
    } catch (error) {
        console.log (error)
    }

}

loadPostAndComments();