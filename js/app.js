// get data by API Response
const getRandomUsers = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(response => response.json())
        .then(data => displayUsers(data.results))
}

getRandomUsers()

const displayUsers = (users) => {
    const displayContainer = document.getElementById('display-container');

    users.forEach((user) => {
        console.log(user)
        const div = document.createElement('div');
        div.classList.add('div')
        div.innerHTML = `
            <img class="my-5 rounded-circle" src="${user.picture.large}">
            <h5>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
            <h5>Cell: ${user.cell}</h5>
            <h5>Dob: ${user.dob.date}</h5>
            <h5>Email: ${user.email}</h5>
            <h5>Gender: ${user.gender}</h5>
            <h5>ID Value: ${user.id.value}</h5>
            <h5>Location: ${user.location.street.name} , ${user.location.city}, latitude: ${user.location.coordinates.latitude}, longitude: ${user.location.coordinates.longitude}</h5>
            <h4>timezone: offset:${user.location.timezone.offset}, description: ${user.location.timezone.description}</h4>
        `;
        displayContainer.appendChild(div)
    })
}