const cariList = document.querySelector("#cari-list");


cariList.addEventListener("keyup", pencarian);

function pencarian(e) {
    const cariList = e.target.value.toLowerCase();
    let itemList = document.querySelectorAll(".item-list");

    itemList.forEach((item) => {
        const isiItem = item.textContent.toLowerCase();

        if(isiItem.indexOf(cariList) != -1){
            item.setAttribute("style", "display: block;");
        } else {
            item.setAttribute("style", "display: none;");
        }
    });
}