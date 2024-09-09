function getUrl () {
    let url = new URLSearchParams(window.location.search);
    return url.get('id');
}

const idUrl = getUrl()

const userDetailsDiv = document.getElementById('user-details');
const titlesDiv = document.getElementById('titles')

async function loadUser () {
    try {
        const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${idUrl}`)
        const user = await responseUser.json()

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
    }
    catch (error) {
        console.log(error)
    }

}

let buttonTitlesPosts = document.getElementById('show-title')

async function loadPostTitles() {
    try {
        const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/users/${idUrl}/posts`)
        const posts = await responsePosts.json()

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

        buttonTitlesPosts.disabled = true
        if(buttonTitlesPosts.disabled === true) {
            buttonTitlesPosts.className = 'disable show-title'
        }

    }
    catch (error) {
        console.log(error)
    }

}

loadUser()

buttonTitlesPosts.onclick = () => loadPostTitles()