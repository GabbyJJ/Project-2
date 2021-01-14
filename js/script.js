/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const itemsPerPage = 10;

function showPage(list, page) {
  let startIndex = page * itemsPerPage - itemsPerPage;
  let endIndex = page * itemsPerPage;
  let studentList = document.querySelector(".student-list");
  console.log(studentList);
  studentList.innerHTML = ``;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      let studentItem = `
<li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
      <h3>${list[i].name.first} ${list[i].name.last}</h3>
      <span class="email">${list[i].email}</span>
    </div>
    <div class="joined-details">
      <span class="date">Joined ${list[i].registered.date}</span>
    </div>
  </li>`;
      studentList.insertAdjacentHTML("beforeend", studentItem);
    }
  }
}
function addPagination(list) {
  // create a variable to calculate the number of pages needed
  let numberOfPages = Math.ceil(list.length / itemsPerPage);
  // select the element with a class of `link-list` and assign it to a variable
  let linkList = document.querySelector(".link-list");
  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHTML = ``;
  // loop over the number of pages needed
  for (let i = 0; i < numberOfPages; i++) {
    // create the elements needed to display the pagination button
    let linkItem = `
    <li>
  <button type="button">${i + 1}</button>
</li>`;

    // insert the above elements
    linkList.insertAdjacentHTML("beforeend", linkItem);
  }

  // give the first pagination button a class of "active"
  linkList.querySelector("button").className = "active";
  // create an event listener on the `link-list` element
  linkList.addEventListener("click", function (event) {
    // if the click target is a button:
    if (event.target.nodeName === "BUTTON") {
      console.log(event);
      // remove the "active" class from the previous button
      document.querySelector(".active").className = "";
      // add the active class to the clicked button
      event.target.className = "active";
      // call the showPage function passing the `list` parameter and page to display as arguments
      showPage(data, +event.target.innerText);
    }
  });
}
showPage(data, 1);
addPagination(data);
