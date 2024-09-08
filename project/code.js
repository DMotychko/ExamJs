const divContainer = document.getElementById("container")

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

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

    })