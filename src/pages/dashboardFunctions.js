import {storage} from '../core/utils'

function toHTML(key) {
  const model = storage(key)
  const url = key.split(':').join('/')
  const title = model.title
  const date = new Date(model.openedDate).toLocaleDateString()
  const time = new Date(model.openedDate).toLocaleTimeString()
  return `
    <li class="db__record">
      <a href="#${url}">${title}</a>
      <strong>${time} | ${date}</strong>
    </li>
  `
}

function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key.includes('excel')) {
      continue
    }
    keys.push(key)
  }
  return keys
}

export function createRecordsTable() {
  const keys = getAllKeys()
  console.log(keys)
  if (!keys.length) {
    return `<p>No tables here</p>`
  }

  return `
        <div class="db__list-header">
            <span>Title</span>
            <span>Date opening</span>
        </div>

        <ul class="db__list">
          ${keys.map(toHTML).join('')}
        </ul>
  `
}
