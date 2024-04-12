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
    }
    else {
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
let taskItemParagraphs = document.querySelectorAll(".taskItem .taskItemContainer p");
const taskItemButtons = document.querySelectorAll(".taskButtons button");
const taskInput = document.querySelector("#taskInput");
const taskInputBtn = document.querySelector("#taskInputBtn");
let activeElement;
function removeActiveClasses(elements) {
    elements.forEach((element) => element instanceof Element && element.classList.remove("active"));
}
function moveElement(element, position) {
    var _a, _b;
    const nextElement = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
    const previousElement = (_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.previousElementSibling;
    if (activeElement) {
        if (position === "left") {
            previousElement.children[1].insertAdjacentElement("beforeend", activeElement);
        }
        else {
            nextElement.children[1].insertAdjacentElement("beforeend", activeElement);
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
    taskItemParagraphs = document.querySelectorAll(".taskItem .taskItemContainer p");
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
        }
        else {
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
        if (this.id === "increaseSound" &&
            soundPercentage <= 100 - soundProgressChangePercentage) {
            soundPercentage += soundProgressChangePercentage;
        }
        if (this.id === "decreaseSound" &&
            soundPercentage >= 0 + soundProgressChangePercentage) {
            soundPercentage -= soundProgressChangePercentage;
        }
        controlSound(soundPercentage);
    });
});
soundProgressBar.addEventListener("click", function (e) {
    const percentage = Math.floor((100 * Math.floor(e.clientX - this.getBoundingClientRect().left)) /
        soundProgressWidth);
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
            }
            else {
                activeImageIndex++;
            }
        }
        if (this.id === "previous") {
            if (activeImageIndex === 0) {
                activeImageIndex = images.length - 1;
            }
            else {
                activeImageIndex--;
            }
        }
        activeImg.src = images[activeImageIndex];
    });
});
renderImages();
// Task 8
const paginationDiv = document.querySelector('.paginationPages');
const paginationItemsDiv = document.querySelector('.items');
const paginationControlBtns = document.querySelectorAll('.paginationControl');
const pageItems = [];
let numberOfItemsPerPage = 10;
let activePage = 1;
function createItems(amount) {
    for (let i = 1; i <= amount; i++) {
        pageItems.push('Item ' + i);
    }
    ;
}
;
function fetchData(page) {
    paginationItemsDiv.innerHTML = '';
    const start = (page * numberOfItemsPerPage) - numberOfItemsPerPage;
    const end = page * numberOfItemsPerPage;
    for (let i = start; i < end; i++) {
        const newItem = document.createElement('li');
        newItem.innerText = pageItems[i];
        paginationItemsDiv.appendChild(newItem);
    }
    ;
}
;
function createPages() {
    paginationDiv.innerHTML = '';
    for (let i = 1; i <= pageItems.length / numberOfItemsPerPage; i++) {
        const paginationBtn = document.createElement('button');
        paginationBtn.innerText = JSON.stringify(i);
        i === 1 && paginationBtn.classList.add('active');
        paginationDiv.appendChild(paginationBtn);
        paginationBtn.addEventListener('click', function () {
            activePage = +this.innerText;
            removeActiveClasses(document.querySelectorAll('.paginationPages button'));
            this.classList.add('active');
            disableBtns();
            fetchData(i);
        });
    }
    ;
}
;
function disableBtns() {
    let previousBtn = paginationControlBtns[0];
    let nextBtn = paginationControlBtns[1];
    previousBtn.disabled = false;
    nextBtn.disabled = false;
    if (activePage === 1) {
        previousBtn.disabled = true;
    }
    ;
    if (activePage === pageItems.length / numberOfItemsPerPage) {
        nextBtn.disabled = true;
    }
    ;
}
;
paginationControlBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        let pages = document.querySelectorAll('.paginationPages button');
        removeActiveClasses(pages);
        if (this.id === 'previousPage' && activePage > 1) {
            activePage--;
        }
        ;
        if (this.id === 'nextPage' && activePage < pageItems.length / numberOfItemsPerPage) {
            activePage++;
        }
        ;
        pages[activePage - 1].classList.add('active');
        disableBtns();
        fetchData(activePage);
    });
});
createItems(100);
createPages();
disableBtns();
fetchData(activePage);
;
const usersTableBody = document.querySelector('.panelContent table tbody');
const addUserBtn = document.querySelector('#addUser');
let deleteUserBtns = document.querySelectorAll('.deleteUserBtn');
let editUserBtns = document.querySelectorAll('.editUserBtns');
let users = [];
function fetchUsers() {
    users = JSON.parse(localStorage.getItem('users')) || [];
}
;
function updateUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}
function renderUsers() {
    usersTableBody.innerHTML = '';
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
    ;
    usersTableBody.innerHTML = usersHTML;
    deleteUserBtns = document.querySelectorAll('.deleteUserBtn');
    editUserBtns = document.querySelectorAll('.editUserBtn');
    deleteUserBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const id = this.parentElement.id;
            deleteUser(+id);
        });
    });
    editUserBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const id = +this.parentElement.id;
            const user = users.find(u => u.id === id);
            openModal('edit', user);
        });
    });
}
;
function validate(body) {
    let isValid = true;
    for (let key of Object.keys(body)) {
        if (!body[key].length) {
            isValid = false;
        }
    }
    ;
    return isValid;
}
;
function openModal(mode, user) {
    const modal = `
		<div class="usersModal">
			<div class="usersModalContent">
				<button id="closeUserModal">X</button>
				<input type="text" class="userInput" required placeholder="Name" id="name" ${mode === 'edit' ? `value=${user === null || user === void 0 ? void 0 : user.name}` : ''}>
				<input type="text" class="userInput" required placeholder="Surname" id="surname" ${mode === 'edit' ? `value=${user === null || user === void 0 ? void 0 : user.surname}` : ''}>
				<input type="text" class="userInput" required placeholder="Age" id="age" ${mode === 'edit' ? `value=${user === null || user === void 0 ? void 0 : user.age}` : ''}>
				${mode === 'edit' ? `<button class="userActionBtn" id='editUser'>Edit</button>` : `<button class="userActionBtn" id='createUser'>Create</button>`}
			</div>
		</div>
	`;
    document.body.insertAdjacentHTML('beforeend', modal);
    const userModal = document.querySelector('.usersModal');
    const nameInput = document.querySelector('#name');
    const surnameInput = document.querySelector('#surname');
    const ageInput = document.querySelector('#age');
    const actionBtn = document.querySelector('.userActionBtn');
    const closeModalBtn = document.querySelector('#closeUserModal');
    const userInputs = document.querySelectorAll('.userInput');
    actionBtn.disabled = true;
    userInputs.forEach(uI => {
        uI.addEventListener('keyup', function () {
            if (!validate({ name: nameInput.value, surname: surnameInput.value, age: ageInput.value })) {
                actionBtn.disabled = true;
            }
            else {
                actionBtn.disabled = false;
            }
        });
    });
    actionBtn === null || actionBtn === void 0 ? void 0 : actionBtn.addEventListener('click', function () {
        let nameInputVal = nameInput.value;
        let surnameInputVal = surnameInput.value;
        let ageInputVal = ageInput.value;
        if (mode === 'edit') {
            editUser(user.id, { name: nameInputVal, surname: surnameInputVal, age: +ageInputVal });
        }
        ;
        if (mode === 'create') {
            const newUserId = users.length ? +users[users.length - 1].id + 1 : 1;
            createUser({ id: newUserId, name: nameInputVal, surname: surnameInputVal, age: +ageInputVal });
        }
        ;
        userModal.remove();
    });
    closeModalBtn === null || closeModalBtn === void 0 ? void 0 : closeModalBtn.addEventListener('click', () => userModal.remove());
}
;
function createUser(user) {
    users.push(user);
    updateUsers(users);
    renderUsers();
}
;
function editUser(id, updateBody) {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex != -1) {
        users[userIndex] = Object.assign(Object.assign({}, users[userIndex]), updateBody);
    }
    ;
    updateUsers(users);
    renderUsers();
}
;
function deleteUser(id) {
    users = users.filter(u => u.id !== id);
    updateUsers(users);
    renderUsers();
}
;
fetchUsers();
renderUsers();
addUserBtn.addEventListener('click', () => openModal('create'));
// Task 10
const assessmentRowElements = document.querySelectorAll('.assessment table tbody tr p');
const assessmentModal = document.querySelector('.assessmentModal');
const assessmentMarks = document.querySelectorAll('.assessmentModalItems p');
const rowHeadElements = document.querySelectorAll('.rowHeadEl');
const closeAssessmentModalBtn = document.querySelector('.closeAssessment');
let activeAssessmentElement;
function toggleAssessmentModal() {
    assessmentModal.classList.toggle('active');
}
;
function swapElementValue(targetEl, swapEl) {
    targetEl.innerHTML = swapEl.innerHTML;
    targetEl.classList.remove(targetEl.classList.value);
    targetEl.classList.add(swapEl.classList[0]);
}
;
closeAssessmentModalBtn.addEventListener('click', toggleAssessmentModal);
assessmentRowElements.forEach(el => {
    el.addEventListener('click', function () {
        activeAssessmentElement = this;
        toggleAssessmentModal();
    });
});
assessmentMarks.forEach(mark => {
    mark.addEventListener('click', function () {
        swapElementValue(activeAssessmentElement, this);
        toggleAssessmentModal();
    });
});
rowHeadElements.forEach(el => {
    el.addEventListener('click', function () {
        const columns = Array.from(this.parentElement.parentElement.children);
        const index = this.parentElement && columns.indexOf(this.parentElement) + 3;
        const tableColElements = document.querySelectorAll(`.assessment table tbody tr td:nth-child(${index}) p`);
        tableColElements.forEach((colEl) => {
            if (colEl.classList.contains('black')) {
                swapElementValue(colEl, this);
            }
        });
    });
});
