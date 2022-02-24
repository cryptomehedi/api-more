const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUser(data))
}


const displayUser = users => {
    const buddies = users.results;
    const buddiesDiv = document.querySelector('.buddies')
    for (const buddy of buddies){
        console.log(buddy);
        const p = document.createElement('p');
        p.innerText = `
        <img src="${buddy.picture.medium}" alt="">
        Name: ${buddy.name.title} ${buddy.name.first} $${buddy.name.last}
        Age: ${buddy.dob.age}
        DOB: ${buddy.dob.date}
        Gender: ${ buddy.gender}
        Email: ${buddy.email}
        Phone: ${buddy.phone}
        Register Date: ${buddy.registered.age} & ${buddy.registered.date}
        
        `;
        buddiesDiv.appendChild(p);

    }
    console.log(buddies);
}