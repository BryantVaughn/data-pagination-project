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
 * `showPage` function
 * This function creates and inserts/appends the elements needed to display a "page" of nine students.
 * It builds each student block as a string and then appends it to the student-list ul.
 */
function showPage(students, pageNum) {
	let startIdx = pageNum * 9 - 9;
	let endIdx = pageNum * 9;

	const studentList = document.querySelector('.student-list');
	studentList.innerHTML = '';

	students.forEach((student, idx) => {
		if (idx >= startIdx && idx < endIdx) {
			// Pull out student name into single variable
			const fullName = `${student.name.first} ${student.name.last}`;

			// Build student card HTML with student's info
			const studentHTML = `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${student.picture.large}" alt="Profile Picture" />
            <h3>${fullName}</h3>
            <span class="email">${student.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${student.registered.date}</span>
          </div>
        </li>
      `;

			// Add student card to page
			studentList.innerHTML += studentHTML;
		}
	});
}

/*
 * `addPagination` function
 * This function creates and inserts/appends the elements needed for the pagination buttons.
 * An event listener is attached to the pagination button holder to allow users to change between
 * pages.
 */
function addPagination(students) {
	// Get total pages needed to display all items in student list
	const totalPageBtns = Math.ceil(students.length / 9);

	const pageBtnUl = document.querySelector('.link-list');
	pageBtnUl.innerHTML = '';

	// Build pagination buttons and append to container
	for (let i = 1; i <= totalPageBtns; i++) {
		const li = document.createElement('li');

		const pageBtn = document.createElement('button');
		pageBtn.type = 'button';
		pageBtn.textContent = i;

		li.appendChild(pageBtn);
		pageBtnUl.appendChild(li);
	}

	// Select first page button and apply active class
	pageBtnUl.querySelector('[type="button"]').classList.add('active');

	// event listener
	pageBtnUl.addEventListener('click', (evt) => {
		// Pull target out of event obj
		const { target } = evt;

		// Only listen for clicks on button elements
		if (target.tagName === 'BUTTON') {
			const pageBtns = pageBtnUl.querySelectorAll('button');
			pageBtns.forEach((btn) => btn.classList.remove('active'));
			target.classList.add('active');
			showPage(students, target.textContent);
		}
	});
}

// Call functions
showPage(data, 1);
addPagination(data);
