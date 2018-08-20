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

function initdisks() {
    for (let diskIndex in diskArr) {
        const disk = diskArr[diskIndex]
        disk.dataset.width = -diskIndex
        const classList = disk.classList
        classList.add("disk")

        const id = "disk" + (Number(diskIndex) + 1)
        disk.id = id;
    }
}

function inittowers() {
    for (let tower of towerArr) {
        tower.onclick = click;
    }
}

function populateTower1() {
    for (let disk of diskArr) {
        tower1.appendChild(disk)
    }
}
// Determine if disk is held or to pick up
function click(event) {
    const tower = event.currentTarget
    if (heldDisk) {
        let topdisk = tower.lastElementChild;
        const isEmptyTower = !topdisk;
        const canStack = topdisk && (Number(topdisk.dataset.width) > Number(heldDisk.dataset.width));
        if (isEmptyTower || canStack) {
            appendDiskToTower(heldDisk, tower);
        }
    } else {
        heldDisk = tower.lastElementChild;
        if (heldDisk) {
            diskHolder.appendChild(heldDisk)
        }
    }
}

function appendDiskToTower(disk, tower) {
    tower.appendChild(disk);
    heldDisk = null;
    if (checkForWin()) {
        celebrate();
        console.log("WIN!");
    }
}

function checkForWin() {
    return tower3.childElementCount === 4;
}

function celebrate() {
    document.body.appendChild(document.createTextNode("VICTORY"));
}

initdisks();
inittowers();
populateTower1();
