const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=30')
    .then(res => res.json())
    .then(data => displayUser(data))
}


const displayUser = users => {
    const buddies = users.results;
    const buddiesDiv = document.querySelector('.buddies')
    buddiesDiv.textContent=""
    for (const buddy of buddies){
        // console.log(buddy);
        const p = document.createElement('p');
        p.classList.add('p-4')
        p.classList.add('m-4')
        p.classList.add('rounded')
        p.classList.add('bg-orange-200')
        p.innerHTML = `
        <img class="rounded-full" src="${buddy.picture.large}" style="width: 200px; height: 100px;">
        Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}<br>
        Age: ${buddy.dob.age}<br>
        DOB: ${buddy.dob.date}<br>
        Gender: ${ buddy.gender}<br>
        Email: ${buddy.email}<br>
        Phone: ${buddy.phone}<br>
        Register Age: ${buddy.registered.age}<br>
        Register Date: ${buddy.registered.date}<br>
        <br>
        `;
        // div.appendChild(p);
        buddiesDiv.appendChild(p);

    }
    // console.log(buddies);
}