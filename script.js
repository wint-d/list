const $add = document.getElementById('add')
const $addForm = document.getElementById('addForm')
const $color = document.getElementById('color')
const $dialog = document.getElementById('dialog')
const $searchForm = document.getElementById('searchForm')
const $search = document.getElementById('search')
const $list = document.getElementById('list')


function createElement (type, props, ...children) {
  const $el = document.createElement(type)
  Object.keys(props).forEach(prop => $el[prop] = props[prop])
  $el.append(...children)
  return $el
}

function buildList (items) {
  $list.innerHTML = ''
  $list.append(...items.map(item => 
    createElement('li', {className: 'list-group-item'}, item)))
}

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'orange',
  'purple',
  'brown'
]

buildList(colors)

