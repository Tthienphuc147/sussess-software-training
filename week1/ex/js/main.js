const calendarBtn = document.querySelector(".btn-create");
const calendarBlock = document.querySelector(".calendar-block");
const resetBtn = document.querySelector('.btn-reset');

const calendarDays = 24;

const open = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;//set style for parent element content child element
    event.target.style.opacity = "0";
    event.target.style.transitionDuration = "2s";
    event.target.style.fontSize = "150%";
    event.target.style.backgroundColor = "rgb(168, 190, 182)"
}

const createCalendar = () => {
    document.querySelectorAll(".image").forEach(el => el.remove());
    for(let i = 0; i  < calendarDays; i++) {
        const calendarItem = document.createElement("div");
        const calendarItemText = document.createElement("div");
        resetBtn.classList.add("class","d-block");
        // calendarItem.classList.add("image");
        calendarItem.setAttribute("class", "image");//set class
        calendarItem.style.gridArea = "d" + (i + 1);//set style
        calendarBlock.appendChild(calendarItem);//add element

        // calendarItemText.classList.add("text");
        calendarItemText.setAttribute("class", "text");
        calendarItemText.innerHTML = i + 1;
        calendarItem.appendChild(calendarItemText);

        courseNumber = i + 1;
        let path = `./images/course-${courseNumber}.jpg`;

        calendarItemText.addEventListener("click", open.bind(null,path));
        //bind(function,list arguments)
    }
}

const resetCalendar = () => {
    resetBtn.classList.add("class","d-none");
    document.querySelectorAll(".image").forEach(el => el.remove());
}

calendarBtn.addEventListener("click", createCalendar);
resetBtn.addEventListener("click",resetCalendar)
