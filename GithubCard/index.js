
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function createCard (images, name, username, locations, profiles, followers, followings, bios) {


  // createElement
  const cardmain = document.createElement('div');
  const image = document.createElement('img');
  const cardinfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const usernames = document.createElement('p');
  const Location = document.createElement('p');
  const Profile= document.createElement('p');
  const Follower = document.createElement('p');
  const Following = document.createElement('p');
  const Bio = document.createElement('p');

  // connecting element 
  cardmain.appendChild(image);
  cardmain.appendChild(cardinfo);
  cardinfo.appendChild(h3);
  cardinfo.appendChild(usernames);
  cardinfo.appendChild(Location);
  cardinfo.appendChild(Profile);
  cardinfo.appendChild(Follower);
  cardinfo.appendChild(Following);
  cardinfo.appendChild(Bio);

  // adding classList 

  cardmain.classList.add("card");
  cardinfo.classList.add("card-info");
  h3.classList.add("name");
  usernames.classList.add("username");


  image.src = images;
  h3.textContent = ` ${name}`;
  usernames.textContent = `${username}`;
  Location.textContent = `Location: ${locations}`;
  Profile.textContent = `Profile: ${profiles}`;
  Follower.textContent = `Followers: ${followers}`;
  Following.textContent = `Following: ${followings}`;
  Bio.textContent = `Bio: ${bios}`;



  return cardmain

}

const main = document.querySelector(".cards")


axios.get('https://api.github.com/users/duraanali')
  .then(response => {
    const userData = response.data;

    const card = createCard(
      userData.avatar_url,
      userData.name,
      userData.login,
      userData.location,
      userData.html_url,
      userData.followers,
      userData.following,
      userData.bio
    );
    main.appendChild(card);
  })
  .catch(error => console.log(error));

  axios.get('https://api.github.com/users/gabalaax')
  .then(response => {
    const userData = response.data;
    const card = createCard(
      userData.avatar_url,
      userData.name,
      userData.login,
      userData.location,
      userData.html_url,
      userData.followers,
      userData.following,
      userData.bio
    );
    main.appendChild(card);
  })
  .catch(error => console.log(error));

  axios.get('https://api.github.com/users/TaasCode')
  .then(response => {
    const userData = response.data;
    const card = createCard(
      userData.avatar_url,
      userData.name,
      userData.login,
      userData.location,
      userData.html_url,
      userData.followers,
      userData.following,
      userData.bio
    );
    main.appendChild(card);
  })
  .catch(error => console.log(error));


  axios.get('https://api.github.com/users/gabischool')
  .then(response => {
    const userData = response.data;
    const card = createCard(
      userData.avatar_url,
      userData.name,
      userData.login,
      userData.location,
      userData.html_url,
      userData.followers,
      userData.following,
      userData.bio
    );
    main.appendChild(card);
  })
  .catch(error => console.log(error));

/*
  STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/

//  const followersArray = []