const showMoreButton = document.getElementById("showMore");
const showMoreItems = document.querySelectorAll(".itemLebih");
let showItemMax = 0;

const showMore = n => {
    let o = null;
    for (let i=showItemMax; i<n; i++) {
        showMoreItems[i].classList.remove("hidden");
    };
    (n == 0) || (n == 3) ? o = 1 : o = 2;
    showMoreButton.setAttribute("onclick", `showMore(${n+o})`);
    showItemMax = n;
    if (showItemMax == showMoreItems.length) {
        showMoreButton.innerText = "Tutup";
        showMoreButton.setAttribute("onclick", "closedMore()")
    };
};

const closedMore = () => {
    for (let i=0; i<showMoreItems.length; i++) {
        showMoreItems[i].classList.add("hidden");
    };
    showMoreButton.innerText = "Selengkapnya";
    showMoreButton.setAttribute("onclick", "showMore(1)")
    window.scroll(0, window.scrollY - 100);
};