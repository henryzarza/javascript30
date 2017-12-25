const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const btnClear = document.querySelector('.btn-clear');
var items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populatedList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populatedList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return;

    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    populatedList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
}

function clearData() {
    localStorage.clear();
    items = [];
    populatedList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
btnClear.addEventListener('click', clearData);

populatedList(items, itemsList);