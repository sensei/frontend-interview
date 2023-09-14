import { user, columns, tasks } from './api-data.json'

/**
 * Fake an API call by returning data after a random timeout between 0 and 5 seconds
 */
function mockFetch(data) {
  return new Promise((resolve) => {
    const timeout = Math.floor(Math.random() * 6)
    return setTimeout(() => {
      resolve(data)
    }, timeout * 1000)
  })
}

const getUser = () => mockFetch(user)
const getColumns = () => mockFetch(columns)
const getTasks = () => mockFetch(tasks)

export { getUser, getColumns, getTasks }
