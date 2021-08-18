const menuItems = ["salad", "burgur and fries", "cake and coffee"]

const printMenuItems = (menu)=> {
    menu.forEach((element, index) => {
        setTimeout(() => console.log(element), 2000 + index * 2000)
    });  
    }


const printMenuItemsFunc = () => printMenuItems(menuItems)

setTimeout(() => console.log("Hi"), 0)

setTimeout(printMenuItemsFunc, 2000)

console.log("Have a good meal!")