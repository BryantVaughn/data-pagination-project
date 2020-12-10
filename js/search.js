/***
 * This file implements search filtering for the student cards based on student names.
 ***/

// DOM elements and globals
const headerElement = document.querySelector('.header');

/***
 * `addSearchInput` function
 * Adds an input field to the top of the page to allow users to search for students in list.
 */
function addSearchInput() {
	const searchBlock = buildSearchBlock();

	headerElement.innerHTML += searchBlock;

	headerElement
		.querySelector('[type="button"]')
		.addEventListener('click', handleSearch);
	headerElement
		.querySelector('#search')
		.addEventListener('keyup', handleSearch);
}

/***
 * `buildSearchBlock` function
 * Builds the block of HTML for the search input and button.
 */
function buildSearchBlock() {
	const searchBlockHTML = `
    <label for="search" class="student-search">
      <input id="search" placeholder="Search by name..." />
      <button type="button"><img src="img/icn-search.svg" alt="Search icon" /></button>
    </label>
  `;

	return searchBlockHTML;
}

/***
 * `handleSearch` function
 * Takes the value in the search input and filters the list of students based on the value.
 */
function handleSearch() {
	// Gather input text value
	const searchInputValue = headerElement
		.querySelector('#search')
		.value.toLowerCase();

	const filteredStudents = data.filter((student) => {
		const lowerFullName = `${student.name.first} ${student.name.last}`.toLowerCase();
		return lowerFullName.includes(searchInputValue);
	});

	if (!filteredStudents.length) {
		handleNoResults();
	} else {
		showPage(filteredStudents, 1);
	}
	addPagination(filteredStudents);
}

/***
 * `handleNoResults` function
 * Builds a message and displays it to user when no results are found based on search.
 */
function handleNoResults() {
	// Clear out student list ul
	const studentListUl = document.querySelector('.student-list');
	studentListUl.innerHTML = '';

	// Build no results li
	const noResultsLi = document.createElement('li');
	noResultsLi.classList.add('no-results');
	noResultsLi.textContent = 'No Results Found...';

	// Append no results li to student list ul
	studentListUl.appendChild(noResultsLi);
}

/***
 * Event Listeners
 ***/

// Listen for DOM content to load to add search
document.addEventListener('DOMContentLoaded', addSearchInput);
