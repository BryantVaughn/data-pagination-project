/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(students, pageNum) {
	let startIdx = pageNum * 9 - 9;
	let endIdx = pageNum * 9;

	const studentList = document.querySelector('.student-list');
	studentList.innerHTML = '';

	students.forEach((student, idx) => {
		if (idx >= startIdx && idx < endIdx) {
			const fullName = `${student.name.first} ${student.name.last}`;
			const studentHTML = `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${student.picture.thumbnail}" alt="Profile Picture" />
            <h3>${fullName}</h3>
            <span class="email">${student.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${student.registered.date}</span>
          </div>
        </li>
      `;
		}
	});
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
