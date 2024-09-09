const divContainer = document.getElementById("container")

async function loadUsers () {
    try {
        const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await responseUsers.json()

        for (const user of users) {

            const div = document.createElement('div');
            const paragraphElement = document.createElement('p');
            const linkElement = document.createElement("a");

            div.className = 'user'
            paragraphElement.innerText = (`Name: ${user.name},  ID: ${user.id}`);
            linkElement.href = `user-details.html?id=${user.id}`
            linkElement.innerText = 'Детальна інформація'

            div.appendChild(paragraphElement)
            div.appendChild(linkElement);
            divContainer.appendChild(div);
        }
    }
    catch (error) {
        console.log(error)
    }

}

loadUsers();