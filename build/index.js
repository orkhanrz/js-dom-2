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
    const tasksToDoEl = document.querySelector(".taskItemContainer");
    const newElement = document.createElement("p");
    newElement.textContent = taskInput.value;
    tasksToDoEl.insertAdjacentElement("beforeend", newElement);
    taskInput.value = "";
    taskItemParagraphs = document.querySelectorAll(".taskItem .taskItemContainer p");
    newElement.addEventListener("click", () => addActiveClass(newElement));
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
        this.classList.add('active');
        filteredItemsDiv.innerHTML = '';
        let filteredItems;
        if (this.id === ItemCategory.All) {
            filteredItems = items;
        }
        else {
            filteredItems = items.filter((i) => i.category === this.id);
        }
        ;
        renderItems(filteredItems);
    });
});
renderItems(items);
