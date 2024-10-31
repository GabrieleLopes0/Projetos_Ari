const API_URL = "https://jsonplaceholder.typicode.com/albums";

function loadUserListAndOrderByUserId() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const users = data;
            const sortedUsers = users.sort((a, b) => a.userId - b.userId);
            
            const userList = document.getElementById("list-users");
            userList.innerHTML = "";

            sortedUsers.forEach(user => {
                const ul = document.createElement("ul");

                ul.innerHTML = `
                    <li>userId: ${user.userId}</li>
                    <li>id: ${user.id}</li>
                    <li>title: ${user.title}</li>
                `;
                
                userList.appendChild(ul);
            });
        });
}