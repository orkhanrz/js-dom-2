"use strict";
// Task 1
let current;
const quoteText = document.querySelector(".quoteText");
const quoteAuthor = document.querySelector(".quoteAuthor");
const quoteChange = document.querySelector("#quoteChange");
const quotes = [
	{
		text: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind",
		author: "Bernard M. Baruch",
	},
	{
		text: "Two things are infinite: the universe and human stupidity; and i'm not sure about the universe",
		author: "Albert Einstein",
	},
	{
		text: "Don't cry because it's over, smile because it happened.",
		author: "Dr. Seuss",
	},
];
function getRandomNumber(elements) {
	let random = Math.floor(Math.random() * elements.length);
	if (random === current) {
		getRandomNumber(elements);
	} else {
		current = random;
	}
	return current;
}
function changeQuote() {
	let random = getRandomNumber(quotes);
	let activeQuote = quotes[random];
	quoteText.innerText = activeQuote.text;
	quoteAuthor.innerText = activeQuote.author;
}
quoteChange.onclick = changeQuote;
// Task 2
const todoBtns = document.getElementsByClassName(".todo-list li button");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector(".todo-list");
const todoAddBtn = document.querySelector("#todoAddBtn");
function addTodo() {
	const todoItem = document.createElement("li");
	const todoText = document.createElement("p");
	const todoDeleteBtn = document.createElement("button");
	const todoDeleteIcon = document.createElement("i");
	todoDeleteIcon.classList.add("fa-solid");
	todoDeleteIcon.classList.add("fa-trash");
	todoText.innerText = todoInput.value;
	todoItem.appendChild(todoText);
	todoItem.appendChild(todoDeleteBtn);
	todoDeleteBtn.appendChild(todoDeleteIcon);
	todoList.appendChild(todoItem);
	todoInput.value = "";
	todoDeleteBtn.addEventListener("click", function () {
		todoItem.remove();
	});
}
todoAddBtn.onclick = addTodo;
//Task 3
let taskItemParagraphs = document.querySelectorAll(
	".taskItem .taskItemContainer p"
);
const taskItemButtons = document.querySelectorAll(".taskButtons button");
const taskInput = document.querySelector("#taskInput");
const taskInputBtn = document.querySelector("#taskInputBtn");
let activeElement;
function removeActiveClasses(elements) {
	elements.forEach(
		(element) =>
			element instanceof Element && element.classList.remove("active")
	);
}
function moveElement(element, position) {
	var _a, _b;
	const nextElement =
		(_a = element.parentElement) === null || _a === void 0
			? void 0
			: _a.nextElementSibling;
	const previousElement =
		(_b = element.parentElement) === null || _b === void 0
			? void 0
			: _b.previousElementSibling;
	if (activeElement) {
		if (position === "left") {
			previousElement.children[1].insertAdjacentElement(
				"beforeend",
				activeElement
			);
		} else {
			nextElement.children[1].insertAdjacentElement(
				"beforeend",
				activeElement
			);
		}
	}
}
function addActiveClass(element) {
	removeActiveClasses(taskItemParagraphs);
	element.classList.add("active");
	activeElement = element;
}
taskItemButtons.forEach((btn) => {
	btn.addEventListener("click", function () {
		if (this.className.includes("leftArrow")) {
			moveElement(this, "left");
		}
		if (this.className.includes("rightArrow")) {
			moveElement(this, "right");
		}
	});
});
taskInputBtn.addEventListener("click", () => {
	removeActiveClasses(taskItemParagraphs);
	const tasksToDoEl = document.querySelector(".taskItemContainer");
	const newElement = document.createElement("p");
	newElement.textContent = taskInput.value;
	tasksToDoEl.insertAdjacentElement("beforeend", newElement);
	taskInput.value = "";
	taskItemParagraphs = document.querySelectorAll(
		".taskItem .taskItemContainer p"
	);
	newElement.addEventListener("click", () => {
		addActiveClass(newElement);
	});
});
// Task 4
const imageItems = document.querySelectorAll(".imageItem");
const modal = document.querySelector(".modal");
imageItems.forEach((item) => {
	item.addEventListener("click", function () {
		const [img, prgrph] = this.children;
		const newModal = document.createElement("div");
		newModal.classList.add("modal");
		const image = img;
		const modalImage = document.createElement("img");
		modalImage.src = image.src;
		const paragraph = prgrph;
		const modalText = document.createElement("p");
		const modalTextContent = document.createTextNode(paragraph.innerText);
		modalText.appendChild(modalTextContent);
		const modalCloseBtn = document.createElement("button");
		modalCloseBtn.classList.add("close-btn");
		modalCloseBtn.innerText = "X";
		newModal.appendChild(modalCloseBtn);
		newModal.appendChild(modalImage);
		newModal.appendChild(modalText);
		document.body.appendChild(newModal);
		modalCloseBtn.addEventListener("click", () => newModal.remove());
	});
});
// Task 5
const categoryBtns = document.querySelectorAll(".filterCategories button");
const filteredItemsDiv = document.querySelector(".filteredItems");
var ItemCategory;
(function (ItemCategory) {
	ItemCategory["All"] = "all";
	ItemCategory["Nature"] = "nature";
	ItemCategory["Car"] = "car";
	ItemCategory["People"] = "people";
})(ItemCategory || (ItemCategory = {}));
const items = [
	{
		id: 1,
		image: "https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "Girl",
		desc: "Lorem ipsum dolor...",
		category: ItemCategory.People,
	},
	{
		id: 2,
		image: "https://images.pexels.com/photos/3018993/pexels-photo-3018993.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "Man",
		desc: "Lorem ipsum dolor...",
		category: ItemCategory.People,
	},
	{
		id: 3,
		image: "https://images.pexels.com/photos/34540/old-lady-smile-beautiful-woman.jpg?auto=compress&cs=tinysrgb&w=600",
		title: "Woman",
		desc: "Lorem ipsum dolor...",
		category: ItemCategory.People,
	},
	{
		id: 4,
		image: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
		title: "Main in Forest",
		desc: "Lorem ipsum dolor...",
		category: ItemCategory.Nature,
	},
	{
		id: 5,
		image: "https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "Autumn",
		desc: "Lorem ipsum dolor...",
		category: ItemCategory.Nature,
	},
	{
		id: 6,
		image: "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "Winter",
		desc: "Lorem ipsum dolor...",
		category: ItemCategory.Nature,
	},
	{
		id: 7,
		image: "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "Lake",
		desc: "Lorem ipsum dolor...",
		category: ItemCategory.Nature,
	},
	{
		id: 8,
		image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "Bmw M5",
		desc: "Lorem ipsum dolor...",
		category: ItemCategory.Car,
	},
	{
		id: 9,
		image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "Alfa Romeo",
		desc: "Lorem ipsum dolor...",
		category: ItemCategory.Car,
	},
	{
		id: 10,
		image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "Mercedes-Benz AMG GTS C190",
		desc: "Lorem ipsum dolor...",
		category: ItemCategory.Car,
	},
	{
		id: 11,
		image: "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "BMW E46",
		desc: "Lorem ipsum dolor...",
		category: ItemCategory.Car,
	},
	{
		id: 12,
		image: "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600",
		title: "Audi RS7",
		desc: "Lorem ipsum dolor...",
		category: ItemCategory.Car,
	},
];
function renderItems(items) {
	items.forEach((item) => {
		const newItem = document.createElement("div");
		newItem.classList.add("filteredItem");
		const newItemImage = document.createElement("img");
		newItemImage.src = item.image;
		const newItemTitle = document.createElement("h3");
		newItemTitle.innerText = item.title;
		const newItemText = document.createElement("p");
		newItemText.innerText = item.desc;
		newItem.appendChild(newItemImage);
		newItem.appendChild(newItemTitle);
		newItem.appendChild(newItemText);
		filteredItemsDiv.appendChild(newItem);
	});
}
categoryBtns.forEach((btn) => {
	btn.addEventListener("click", function () {
		removeActiveClasses(categoryBtns);
		this.classList.add("active");
		filteredItemsDiv.innerHTML = "";
		let filteredItems;
		if (this.id === ItemCategory.All) {
			filteredItems = items;
		} else {
			filteredItems = items.filter((i) => i.category === this.id);
		}
		renderItems(filteredItems);
	});
});
renderItems(items);
// Task 6
const soundActions = document.querySelectorAll(".soundControlBar button");
const soundProgress = document.querySelector(".soundControlProgress");
const soundProgressBar = document.querySelector(".soundControlProgressBar");
const soundPercentageEl = document.querySelector(".soundControlPercentage");
const soundProgressWidth = 500;
const soundProgressChangePercentage = 5;
let soundPercentage = 50;

function controlSound(soundPercentage) {
	soundProgress.style.width = soundPercentage + "%";
	soundPercentageEl.innerText = soundPercentage + "%";
}

soundActions.forEach((btn) => {
	btn.addEventListener("click", function () {
		if (
			this.id === "increaseSound" &&
			soundPercentage <= 100 - soundProgressChangePercentage
		) {
			soundPercentage += soundProgressChangePercentage;
		}
		if (
			this.id === "decreaseSound" &&
			soundPercentage >= 0 + soundProgressChangePercentage
		) {
			soundPercentage -= soundProgressChangePercentage;
		}
		controlSound(soundPercentage);
	});
});

soundProgressBar.addEventListener("click", function (e) {
	const percentage = Math.floor(
		(100 * Math.floor(e.clientX - this.getBoundingClientRect().left)) /
			soundProgressWidth
	);
	soundPercentage = percentage;
	controlSound(soundPercentage);
});

// Task 7
const activeImg = document.querySelector(".activeImage img");
const inactiveImagesDiv = document.querySelector(".inActiveImages");
const imageControlBtns = document.querySelectorAll(".imageControls button");
let activeImageIndex = 0;
let activeImage;
const images = [
	"https://images.pexels.com/photos/581222/pexels-photo-581222.jpeg?auto=compress&cs=tinysrgb&w=600",
	"https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=600",
	"https://images.pexels.com/photos/33393/caudata-strelitzia-bird-of-paradise-flower-strelitzia-orchids.jpg?auto=compress&cs=tinysrgb&w=600",
	"https://images.pexels.com/photos/1242286/pexels-photo-1242286.jpeg?auto=compress&cs=tinysrgb&w=600",
	"https://images.pexels.com/photos/54267/sunflower-blossom-bloom-flowers-54267.jpeg?auto=compress&cs=tinysrgb&w=600",
	"https://images.pexels.com/photos/207172/pexels-photo-207172.jpeg?auto=compress&cs=tinysrgb&w=600",
	"https://images.pexels.com/photos/129044/pexels-photo-129044.jpeg?auto=compress&cs=tinysrgb&w=600",
	"https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg?auto=compress&cs=tinysrgb&w=600",
];
function renderImages() {
	images.forEach((img) => {
		const newImageDiv = document.createElement("div");
		newImageDiv.classList.add("inActiveImageItem");
		const newImageEl = document.createElement("img");
		newImageEl.src = img;
		newImageDiv.appendChild(newImageEl);
		inactiveImagesDiv.appendChild(newImageDiv);
		newImageDiv.addEventListener("click", function () {
			const targetImageDiv = this.children[0];
			activeImg.src = targetImageDiv.src;
		});
	});
}
imageControlBtns.forEach((btn) => {
	btn.addEventListener("click", function () {
		if (this.id === "next") {
			if (activeImageIndex === images.length - 1) {
				activeImageIndex = 0;
			} else {
				activeImageIndex++;
			}
		}
		if (this.id === "previous") {
			if (activeImageIndex === 0) {
				activeImageIndex = images.length - 1;
			} else {
				activeImageIndex--;
			}
		}
		activeImg.src = images[activeImageIndex];
	});
});
renderImages();
// Task 8
const paginationDiv = document.querySelector(".paginationPages");
const paginationItemsDiv = document.querySelector(".items");
const paginationControlBtns = document.querySelectorAll(".paginationControl");
const pageItems = [];
let numberOfItemsPerPage = 10;
let activePage = 1;
function createItems(amount) {
	for (let i = 1; i <= amount; i++) {
		pageItems.push("Item " + i);
	}
}
function fetchData(page) {
	paginationItemsDiv.innerHTML = "";
	const start = page * numberOfItemsPerPage - numberOfItemsPerPage;
	const end = page * numberOfItemsPerPage;
	for (let i = start; i < end; i++) {
		const newItem = document.createElement("li");
		newItem.innerText = pageItems[i];
		paginationItemsDiv.appendChild(newItem);
	}
}
function createPages() {
	paginationDiv.innerHTML = "";
	for (let i = 1; i <= pageItems.length / numberOfItemsPerPage; i++) {
		const paginationBtn = document.createElement("button");
		paginationBtn.innerText = JSON.stringify(i);
		i === 1 && paginationBtn.classList.add("active");
		paginationDiv.appendChild(paginationBtn);
		paginationBtn.addEventListener("click", function () {
			activePage = +this.innerText;
			removeActiveClasses(
				document.querySelectorAll(".paginationPages button")
			);
			this.classList.add("active");
			disableBtns();
			fetchData(i);
		});
	}
}
function disableBtns() {
	let previousBtn = paginationControlBtns[0];
	let nextBtn = paginationControlBtns[1];
	previousBtn.disabled = false;
	nextBtn.disabled = false;
	if (activePage === 1) {
		previousBtn.disabled = true;
	}
	if (activePage === pageItems.length / numberOfItemsPerPage) {
		nextBtn.disabled = true;
	}
}
paginationControlBtns.forEach((btn) => {
	btn.addEventListener("click", function () {
		let pages = document.querySelectorAll(".paginationPages button");
		removeActiveClasses(pages);
		if (this.id === "previousPage" && activePage > 1) {
			activePage--;
		}
		if (
			this.id === "nextPage" &&
			activePage < pageItems.length / numberOfItemsPerPage
		) {
			activePage++;
		}
		pages[activePage - 1].classList.add("active");
		disableBtns();
		fetchData(activePage);
	});
});
createItems(50);
createPages();
disableBtns();
fetchData(activePage);

//Task 9
const usersTableBody = document.querySelector(".panelContent table tbody");
const addUserBtn = document.querySelector("#addUser");
let deleteUserBtns = document.querySelectorAll(".deleteUserBtn");
let editUserBtns = document.querySelectorAll(".editUserBtns");
let users = [];

function fetchUsers() {
	users = JSON.parse(localStorage.getItem("users")) || [];
}

function updateUsers(users) {
	localStorage.setItem("users", JSON.stringify(users));
}

function renderUsers() {
	usersTableBody.innerHTML = "";
	let usersHTML = ``;
	if (users) {
		users.forEach((u) => {
			usersHTML += `
				<tr id=${u.id}>
					<td>${u.id}</td>
					<td>${u.name}</td>
					<td>${u.surname}</td>
					<td>${u.age}</td>
					<td class="editUserBtn"><i class="fa-solid fa-pencil"></i></td>
					<td class="deleteUserBtn"><i class="fa-solid fa-trash"></i></td>
				</tr>
			`;
		});
	}
	usersTableBody.innerHTML = usersHTML;

	deleteUserBtns = document.querySelectorAll(".deleteUserBtn");
	editUserBtns = document.querySelectorAll(".editUserBtn");

	deleteUserBtns.forEach((btn) => {
		btn.addEventListener("click", function () {
			const id = this.parentElement.id;
			deleteUser(+id);
		});
	});

	editUserBtns.forEach((btn) => {
		btn.addEventListener("click", function () {
			const id = +this.parentElement.id;
			const user = users.find((u) => u.id === id);
			openModal("edit", user);
		});
	});
}
function validate(body) {
	let isValid = true;
	for (let key of Object.keys(body)) {
		if (!body[key].length) {
			isValid = false;
		}
	}
	return isValid;
}
function openModal(mode, user) {
	const modal = `
		<div class="usersModal">
			<div class="usersModalContent">
				<button id="closeUserModal">X</button>
				<input type="text" class="userInput" required placeholder="Name" id="name" ${
					mode === "edit"
						? `value=${
								user === null || user === void 0
									? void 0
									: user.name
						  }`
						: ""
				}>
				<input type="text" class="userInput" required placeholder="Surname" id="surname" ${
					mode === "edit"
						? `value=${
								user === null || user === void 0
									? void 0
									: user.surname
						  }`
						: ""
				}>
				<input type="text" class="userInput" required placeholder="Age" id="age" ${
					mode === "edit"
						? `value=${
								user === null || user === void 0
									? void 0
									: user.age
						  }`
						: ""
				}>
				${
					mode === "edit"
						? `<button class="userActionBtn" id='editUser'>Edit</button>`
						: `<button class="userActionBtn" id='createUser'>Create</button>`
				}
			</div>
		</div>
	`;
	document.body.insertAdjacentHTML("beforeend", modal);
	const userModal = document.querySelector(".usersModal");
	const nameInput = document.querySelector("#name");
	const surnameInput = document.querySelector("#surname");
	const ageInput = document.querySelector("#age");
	const actionBtn = document.querySelector(".userActionBtn");
	const closeModalBtn = document.querySelector("#closeUserModal");
	const userInputs = document.querySelectorAll(".userInput");
	actionBtn.disabled = true;
	userInputs.forEach((uI) => {
		uI.addEventListener("keyup", function () {
			if (
				!validate({
					name: nameInput.value,
					surname: surnameInput.value,
					age: ageInput.value,
				})
			) {
				actionBtn.disabled = true;
			} else {
				actionBtn.disabled = false;
			}
		});
	});
	actionBtn === null || actionBtn === void 0
		? void 0
		: actionBtn.addEventListener("click", function () {
				let nameInputVal = nameInput.value;
				let surnameInputVal = surnameInput.value;
				let ageInputVal = ageInput.value;
				if (mode === "edit") {
					editUser(user.id, {
						name: nameInputVal,
						surname: surnameInputVal,
						age: +ageInputVal,
					});
				}
				if (mode === "create") {
					const newUserId = users.length
						? +users[users.length - 1].id + 1
						: 1;
					createUser({
						id: newUserId,
						name: nameInputVal,
						surname: surnameInputVal,
						age: +ageInputVal,
					});
				}
				userModal.remove();
		  });
	closeModalBtn === null || closeModalBtn === void 0
		? void 0
		: closeModalBtn.addEventListener("click", () => userModal.remove());
}
function createUser(user) {
	users.push(user);
	updateUsers(users);
	renderUsers();
}
function editUser(id, updateBody) {
	const userIndex = users.findIndex((u) => u.id === id);
	if (userIndex != -1) {
		users[userIndex] = Object.assign(
			Object.assign({}, users[userIndex]),
			updateBody
		);
	}
	updateUsers(users);
	renderUsers();
}
function deleteUser(id) {
	users = users.filter((u) => u.id !== id);
	updateUsers(users);
	renderUsers();
}

fetchUsers();
renderUsers();
addUserBtn.addEventListener("click", () => openModal("create"));

// Task 10
const assessmentRowElements = document.querySelectorAll(
	".assessment table tbody tr p"
);
const assessmentModal = document.querySelector(".assessmentModal");
const assessmentMarks = document.querySelectorAll(".assessmentModalItems p");
const rowHeadElements = document.querySelectorAll(".rowHeadEl");
const closeAssessmentModalBtn = document.querySelector(".closeAssessment");
let activeAssessmentElement;
function toggleAssessmentModal() {
	assessmentModal.classList.toggle("active");
}
function swapElementValue(targetEl, swapEl) {
	targetEl.innerHTML = swapEl.innerHTML;
	targetEl.classList.remove(targetEl.classList.value);
	targetEl.classList.add(swapEl.classList[0]);
}
closeAssessmentModalBtn.addEventListener("click", toggleAssessmentModal);
assessmentRowElements.forEach((el) => {
	el.addEventListener("click", function () {
		activeAssessmentElement = this;
		toggleAssessmentModal();
	});
});
assessmentMarks.forEach((mark) => {
	mark.addEventListener("click", function () {
		swapElementValue(activeAssessmentElement, this);
		toggleAssessmentModal();
	});
});
rowHeadElements.forEach((el) => {
	el.addEventListener("click", function () {
		const columns = Array.from(this.parentElement.parentElement.children);
		const index =
			this.parentElement && columns.indexOf(this.parentElement) + 3;
		const tableColElements = document.querySelectorAll(
			`.assessment table tbody tr td:nth-child(${index}) p`
		);
		tableColElements.forEach((colEl) => {
			if (colEl.classList.contains("black")) {
				swapElementValue(colEl, this);
			}
		});
	});
});

// Task 11
const ilhamInputWrapper = document.querySelector(".ilhamInputWrapper");
const ilhamInput = document.querySelector(".ilham input");
const ilhamBtn = document.querySelector(".ilham button");
const targetHeadCol = document.querySelector(".targetHeadCol");
const targetBodyCols = document.querySelectorAll(".targetBodyCol");
let mark = 0;
let rowMarks = [0, 0, 0, 0, 0];

function closeAssessmentTool() {
	document.querySelectorAll(".tool").forEach((tool) => tool.remove());
}

function openAssessmentTool(cell, row) {
	closeAssessmentTool();
	const tool = document.createElement("div");
	tool.classList.add("tool");
	const full = document.createElement("button");
	full.textContent = "tam";
	full.classList.add("green");
	const part = document.createElement("button");
	part.textContent = "natamam";
	part.classList.add("yellow");
	const zero = document.createElement("button");
	zero.textContent = "0";
	zero.classList.add("red");
	tool.appendChild(full);
	tool.appendChild(part);
	tool.appendChild(zero);
	cell.appendChild(tool);

	tool.childNodes.forEach((btn) => {
		btn.addEventListener("click", function () {
			markPerson(row, cell, btn);
		});
	});
}

function createElements(length) {
	mark = 10 / length;
	for (let row = 1; row <= length; row++) {
		const th = document.createElement("th");
		th.innerText = `Is No${row}`;
		targetHeadCol.before(th);
		targetBodyCols.forEach((targetBodyCell, i) => {
			const td = document.createElement("td");
			const button = document.createElement("button");
			button.innerText = `d/e`;
			button.classList.add("black");
			td.appendChild(button);
			targetBodyCell.before(td);

			button.addEventListener("click", () => {
				openAssessmentTool(td, i + 1);
			});
		});
	}
}

function markPerson(row, cell, btn) {
	cell.children[0].textContent = btn.textContent;
	cell.children[0].classList.remove(cell.children[0].classList.value);
	cell.children[0].classList.add(btn.classList.value);

	if (btn.className.includes("green")) {
		rowMarks[row] += mark;
	} else if (btn.className.includes("yellow")) {
		rowMarks[row] += mark / 2;
	} else {
		rowMarks[row] += 0;
	}

	targetBodyCols[row - 1].textContent = rowMarks[row].toFixed(2);
	cell.children[0].disabled = true;
	closeAssessmentTool();
}

ilhamBtn.addEventListener("click", () => {
	createElements(+ilhamInput.value);
	ilhamInputWrapper.remove();
});

// Task 12
var quiz = {
	az: {
		easy: [
			{
				question: "Azərbaycan dilində neçə sait var?",
				A: "A)8",
				B: "B)9",
				C: "C)7",
				D: "D)11",
				correct: "B",
			},
			{
				question: "Azərbaycan dilində neçə samit səs var?",
				A: "A)34",
				B: "B)23",
				C: "C)25",
				D: "D)32",
				correct: "C",
			},
			{
				question: "Hansı kar samitin cingiltili qarşılığı yoxdur?",
				A: "A)H",
				B: "B)F",
				C: "C)G",
				D: "D)C",
				correct: "A",
			},
			{
				question: "Əlifbada neçə hərf var?",
				A: "A)30",
				B: "B)23",
				C: "C)32",
				D: "D)34",
				correct: "C",
			},
			{
				question: "Bitişdirici samitləri göstərin:",
				A: "A)d,t,l",
				B: "B)n,m,s",
				C: "C)m,l,k",
				D: "D)n,y,s",
				correct: "D",
			},
		],
		medium: [
			{
				question: "Qrammatik cəhətdən feil bildirir?",
				A: "A)Hərəkət",
				B: "B)Xususiyyət",
				C: "C)Keyfiyyət",
				D: "D)Əlamət",
				correct: "A",
			},
			{
				question: "Feilin neçə sadə şəkli var?",
				A: "A)4",
				B: "B)5",
				C: "C)6",
				D: "D)8",
				correct: "C",
			},
			{
				question: "Feil haqqında hansı fikir səhvdir?",
				A: "A)feilin dərəcələri var",
				B: "B)feil hərəkət bildirir",
				C: "C)feil təsirli və təsirsiz olur",
				D: "D)feilin 3 zamanı var",
				correct: "A",
			},
			{
				question: "Feilin quruluşca neçə novu var?",
				A: "A)5",
				B: "B)6",
				C: "C)4",
				D: "D)3",
				correct: "D",
			},
			{
				question: "Feil cümlədə əsasən hansı cümlə üzvü olur?",
				A: "A)təyin",
				B: "B)mübtəda",
				C: "C)xəbər",
				D: "D)zərflik",
				correct: "C",
			},
		],
		hard: [
			{
				question:
					"Hansı əlaqə növü bütün tabeli mürəkkəb cümlələrdə olur?",
				A: "A)Qarşılaşdırma",
				B: "B)Zaman",
				C: "C)Səbəb-nəticə",
				D: "D)Heç biri",
				correct: "B",
			},
			{
				question: "Mürəkkəb cümlənin hansı növləri var?",
				A: "A)tabeli, tabesiz",
				B: "B)düzəltmə",
				C: "C)əmr",
				D: "D)sadə",
				correct: "A",
			},
			{
				question: "Mürəkkəb cümlənin neçə novu var?",
				A: "A)6",
				B: "B)2",
				C: "C)5",
				D: "D)3",
				correct: "D",
			},
			{
				question:
					"Hansı bağlayıcı merəkkəb cümlənin tərəflərini bağlamır?",
				A: "A)ancaq",
				B: "B)ilə",
				C: "C)belə ki",
				D: "D)yəni",
				correct: "B",
			},
			{
				question: "Mürəkkəb cümlələr neçə növə ayrılır?",
				A: "A)2",
				B: "B)4",
				C: "C)5",
				D: "D)3",
				correct: "A",
			},
		],
	},
	math: {
		easy: [
			{
				question: "5 %-i 2 olan ədədi tap?",
				A: "A)43",
				B: "B)40",
				C: "C)49",
				D: "D)35",
				correct: "A",
			},
			{
				question: "(x+3)+(x+1)=12 Tənliyi həll edin?",
				A: "A)3",
				B: "B)5",
				C: "C)4",
				D: "D)35",
				correct: "C",
			},
			{
				question: "Sürəti 7 olan neçə düzgün olmayan kəsr var?",
				A: "A)7",
				B: "B)32",
				C: "C)4",
				D: "D)6",
				correct: "A",
			},
			{
				question: "4%-i 5,6 olan ədədi tapın:",
				A: "A)48",
				B: "B)400",
				C: "C)49",
				D: "D)140",
				correct: "D",
			},
			{
				question:
					"0,1(3) sonsuz dövrü onluq kəsrini adi kəsrə çevirin.",
				A: "A)2/15",
				B: "B)26/15",
				C: "C)12/15",
				D: "D)7/15",
				correct: "A",
			},
		],
		medium: [
			{
				question:
					"İki ədədin cəmi 5, fərqi 3-dür.Bu ədədlərin hasilini tapın?",
				A: "A)4",
				B: "B)7",
				C: "C)9",
				D: "D)5",
				correct: "A",
			},
			{
				question: "X≠0 olarsa, 2x(x+y)=5y,x(x-y)=y olduqda x-i tapın?",
				A: "A)3/4",
				B: "B)5",
				C: "C)4/9",
				D: "D)38",
				correct: "A",
			},
			{
				question:
					"x+y=5,x-y=1 olduğuna görə, x2-y2+3x+3y ifadəsinin qiymətini tapın?",
				A: "A)10",
				B: "B)20",
				C: "C)30",
				D: "D)40",
				correct: "B",
			},
			{
				question:
					"2x+y=5,x-3y=-5 tənliklər sistemindən x+y cəmini tapın?",
				A: "A)4",
				B: "B)7",
				C: "C)3",
				D: "D)5",
				correct: "C",
			},
			{
				question: "x+3=2(y-4),y-2=4x tənliklər sistemindən x-i tapın:",
				A: "A)1/15",
				B: "B)2/15",
				C: "C)3/15",
				D: "D)4/15",
				correct: "B",
			},
		],
		hard: [
			{
				question: "Hesablayın: (9-2√10)(9+2√10)?",
				A: "A)36",
				B: "B)12",
				C: "C)12√10",
				D: "D)41",
				correct: "D",
			},
			{
				question: "Hesablayın: (3√5+√15)2-10√27?",
				A: "A)80",
				B: "B)70",
				C: "C)60",
				D: "D)50",
				correct: "C",
			},
			{
				question: "√(5+2√6)=?",
				A: "A)√2+√6",
				B: "B)√3+√2",
				C: "C)√5+√2",
				D: "D)√3+√5",
				correct: "B",
			},
			{
				question: "A=√6+1 və b=√6 -1 olduğuna görə, a:b+b:a=?",
				A: "A)2,8",
				B: "B)3,8",
				C: "C)3",
				D: "D)2",
				correct: "A",
			},
			{
				question: "(x-3)2+(y+7)2=0 isə, xy=?",
				A: "A)23",
				B: "B)-32",
				C: "C)21",
				D: "D)-21",
				correct: "D",
			},
		],
	},
	geography: {
		easy: [
			{
				question: "Hansı ölkə ilə həmsərhəd deyilik?",
				A: "A)Türkiyə",
				B: "B)Qazaxıstan",
				C: "C)Özbəkistan",
				D: "D)Rusiya",
				correct: "C",
			},
			{
				question: "Hansı çay sərhəd çayıdır?",
				A: "A)Kür",
				B: "B)Mazımçay",
				C: "C)Tərtərçay",
				D: "D)Kiş",
				correct: "B",
			},
			{
				question: "Azərbaycan Respublikası hansı qitədə yerləşir?",
				A: "A)Amerika",
				B: "B)Avropa",
				C: "C)Afrika",
				D: "D)Asiya",
				correct: "D",
			},
			{
				question: "Kasıblıq, aşağı təhsil və səhiyyə hansı regiona aiddir?",
				A: "A)Avropa",
				B: "B)Amerika",
				C: "C)Afrika",
				D: "D)Avstraliya",
				correct: "C",
			},
			{
				question: 'Bu ölkə "Böyük yeddiliyə" daxil deyil?',
				A: "A)Yaponiya",
				B: "B)Almaniya",
				C: "C)Fransa",
				D: "D)Ispaniya",
				correct: "D",
			},
		],
		medium: [
			{
				question: 'Miqrasiya adlanır?',
				A: "A)Əhalinin könüllü olaraq başqa ölkəyə köçməsi",
				B: "B)Əhalinin bir yerdən başqa yerə köçməsi",
				C: "C)Əhalinin bir qisminin müvəqqəti şəkildə başqa ölkəyə köçürülməsi",
				D: "D)Əhalinin məcburi şəkildə ölkədən çıxarılması",
				correct: "B",
			},
			{
				question: 'ABŞ – a immiqrantlar başlıca olaraq gəlirlər:',
				A: "A)Latın Amerikasından, Asiyadan və Avropadan",
				B: "B)Hindistandan, Kanadadan, Afrikadan",
				C: "C)Cənubi Avropadan, Şimali Afrikadan, MDB ölkələrindən",
				D: "D)Hindistandan, Pakistandan, Misirdən",
				correct: "A",
			},
			{
				question: 'Hind – Avropa dil ailəsinə aid olmayan dil qrupu?',
				A: "A)Qafqaz",
				B: "B)Slavyan",
				C: "C)Iran",
				D: "D)Roman",
				correct: "A",
			},
			{
				question: 'Birmillətli dövlət deyil?',
				A: "A)Niderland",
				B: "B)Norveç",
				C: "C)Türkiyə",
				D: "D)Yaponiya",
				correct: "C",
			},
			{
				question: 'Hansı dünyəvi dindir?',
				A: "A)Iudaizm",
				B: "B)Sintoizm",
				C: "C)Lamaizm",
				D: "D)Buddizm",
				correct: "D",
			},
		],
		hard: [
			{
				question: 'Mərkəzi Amerika regionuna aid deyil?',
				A: "A)Meksika",
				B: "B)Beliz",
				C: "C)Honduras",
				D: "D)Çili",
				correct: "D",
			},
			{
				question: 'Ən çox əhalisi olan ölkə?',
				A: "A)Kolumbiya",
				B: "B)Meksika",
				C: "C)Braziliya",
				D: "D)Argentina",
				correct: "C",
			},
			{
				question: 'Latın Amerikasında ən geniş yayılmış dil hansıdır?',
				A: "A)Portuqal",
				B: "B)İngilis",
				C: "C)İtalyan",
				D: "D)İspan",
				correct: "D",
			},
			{
				question: 'Çinin əhalisi?',
				A: "A)2,101,3 mln. nəfər",
				B: "B)1,761,3 mln. nəfər",
				C: "C)2, 243, 7 mln. nəfər",
				D: "D)1,348,6 mln. nəfər",
				correct: "D",
			},
			{
				question: 'Ən çox əhalisi olan Mərkəzi Asiya ölkəsi?',
				A: "A)Qırğızıstan",
				B: "B)Türkmənistan",
				C: "C)Özbəkistan",
				D: "D)Qazaxıstan",
				correct: "C",
			},
		],
	},
};

const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const step3 = document.querySelector(".step-3");
const step4 = document.querySelector(".step-4");
const quizPages = document.querySelector(".controls .pages");
const question = document.querySelector(".question");
const options = document.querySelector(".options");
const optionsBtns = document.querySelectorAll(".options button");
const previous = document.querySelector(".leftBtn");
const next = document.querySelector(".rightBtn");

let subject;
let level;
let questions = [];
let questionIndex = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let notAnswered = 0;

function showQuestion(questionIndex) {
	let currentQuestion = questions[questionIndex];

	quizPages.childNodes.forEach((page) => page.classList.remove("active"));
	quizPages.childNodes[questionIndex].classList.add("active");
	optionsBtns.forEach((btn) => {
		btn.classList.remove("wrong");
		btn.classList.remove("selected");
		btn.disabled = false;
	});

	question.innerText = currentQuestion.question;
	A.textContent = currentQuestion.A;
	B.textContent = currentQuestion.B;
	C.textContent = currentQuestion.C;
	D.textContent = currentQuestion.D;
}

function createQuizPages(questions) {
	const pages = questions.length;

	for (let i = 1; i <= pages; i++) {
		const page = document.createElement("button");
		page.innerText = i;

		quizPages.appendChild(page);

		page.addEventListener("click", function () {
			questionIndex = i - 1;
			showQuestion(questionIndex);
		});
	}
}

function endGame() {
	notAnswered = questions.length - (wrongAnswers + rightAnswers);

	correctCount.textContent = rightAnswers;
	wrongCount.textContent = wrongAnswers;
	notAnsweredCount.textContent = notAnswered;
	totalCount.textContent = questions.length;

	step3.style.display = "none";
	step4.style.display = "block";
}

function restartGame() {
	subject = null;
	level = null;
	questions = [];
	questionIndex = 0;
	rightAnswers = 0;
	wrongAnswers = 0;
	notAnswered = 0;
	quizPages.innerHTML = "";

	step4.style.display = "none";
	step1.style.display = "block";
}

step1.childNodes.forEach((btn) => {
	btn.addEventListener("click", function () {
		subject = this.id;
		step1.style.display = "none";
		step2.style.display = "block";
	});
});

step2.childNodes.forEach((btn) => {
	btn.addEventListener("click", function () {
		level = this.id;
		questions = quiz[subject][level];
		step2.style.display = "none";
		step3.style.display = "block";

		createQuizPages(questions);
		showQuestion(questionIndex);
	});
});

next.addEventListener("click", () => {
	if (questionIndex < questions.length - 1) {
		questionIndex++;

		showQuestion(questionIndex);
	} else {
		endGame();
	}
});

previous.addEventListener("click", () => {
	if (questionIndex > 0) {
		questionIndex--;

		showQuestion(questionIndex);
	}
});

optionsBtns.forEach((option) => {
	option.addEventListener("click", function () {
		const correctAnswer = questions[questionIndex]["correct"];

		if (this.id === correctAnswer) {
			rightAnswers++;
			this.classList.add("selected");
		} else {
			wrongAnswers++;
			this.classList.add("wrong");
			document
				.querySelector(".options #" + correctAnswer)
				.classList.add("selected");
		}

		optionsBtns.forEach((option) => (option.disabled = true));
	});
});

restart.addEventListener("click", restartGame);
