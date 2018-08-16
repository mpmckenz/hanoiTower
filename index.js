const tower1 = document.getElementById("tower1")
const tower2 = document.getElementById("tower2")
const tower3 = document.getElementById("tower3")
const disk1 = document.createElement("div")
const disk2 = document.createElement("div")
const disk3 = document.createElement("div")
const disk4 = document.createElement("div")
const diskHolder = document.getElementById("heldDisk")

// Arrays
const diskArr = [disk1, disk2, disk3, disk4]

const towerArr = [tower1, tower2, tower3]

let heldDisk = null

// const disk1Node = document.getElementById("disk1")
// const disk1 = {
//     node: disk1Node;
//     value: 90;
// }
// disk1Node.style.width = disk1.value + "%";

function initdisks() {
    for (let diskIndex in diskArr) {
        const disk = diskArr[diskIndex]
        disk.dataset.width = -diskIndex
        const classList = disk.classList
        classList.add("disk")

        const id = "disk" + (parseInt(diskIndex) + 1)
        disk.id = id;
    }
}

function inittower() {
    for (let tower of towerArr) {
        tower.onclick = click;
    }
}

function start() {
    for (let disk of diskArr) {
        tower1.appendChild(disk)
    }
}
// Determine if disk is held or to pick up
function click(event) {
    let tower = event.currentTarget
    if (heldDisk !== null) {
        let topdisk = tower.lastElementChild
        if (topdisk !== null) {
            if (parseInt(topdisk.dataset.width) > parseInt(heldDisk.dataset.width)) {
                tower.appendChild(heldDisk)
                heldDisk = null;
            }
        }
        else {
            tower.appendChild(heldDisk)
            heldDisk = null
        }
    }
    else {
        heldDisk = tower.lastElementChild;
        if (heldDisk != null) {
            diskHolder.appendChild(heldDisk)
        }
    }
}


initdisks();
start();
inittower();
