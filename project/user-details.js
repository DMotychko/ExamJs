function getUrl () {
    let url = new URLSearchParams(window.location.search);
    return url.get('id');
}

const userDetailsDiv = document.getElementById('user-details');
const titlesDiv = document.getElementById('titles')

fetch(`https://jsonplaceholder.typicode.com/users/${getUrl()}`)
    .then(response => response.json())
    .then(user => {
        userDetailsDiv.innerHTML = `
            <p>ID: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Adress: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p>Geo:</p>
            <ul>
                <li>Latitude: ${user.address.geo.lat}</li>
                <li>Longitude: ${user.address.geo.lng}</li>
            </ul>
            <p>Company:</p>
            <ul>
                <li>Name: ${user.company.name}</li>
                <li>Catchphrase: ${user.company.catchPhrase}</li>
                <li>BS: ${user.company.bs}</li>
            </ul>
        `;
    })

function fetchTitlesPosts() {
    fetch(`https://jsonplaceholder.typicode.com/users/${getUrl()}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                let div = document.createElement('div');
                let h3 = document.createElement('h3');
                let a = document.createElement("a");

                h3.innerText = `${post.title}`
                a.href = `post-details.html?postId=${post.id}`
                a.innerText = 'Детальна інформація'

                div.appendChild(h3)
                div.appendChild(a)
                titlesDiv.appendChild(div)
            }
        })
}

let buttonTitlesPosts = document.getElementById('show-title')
buttonTitlesPosts.onclick = () => fetchTitlesPosts()