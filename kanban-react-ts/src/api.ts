import { user, columns, tasks } from './api-data.json'

type User = {
  id: number
  firstName: string
  lastName: string
}

type Column = {
  id: number
  name: string
}

type Task = {
  id: number
  summary: string
  columnId: number
}

/**
 * Fake an API call by returning data after a random timeout between 0 and 5 seconds
 */
function mockFetch<Type>(data: Type): Promise<Type> {
  return new Promise((resolve) => {
    const timeout = Math.floor(Math.random() * 6)
    return setTimeout(() => {
      resolve(data)
    }, timeout * 1000)
  })

}

const getUser = () => mockFetch<User>(user)
const getColumns = () => mockFetch<Column[]>(columns)
const getTasks = () => mockFetch<Task[]>(tasks)

export { getUser, getColumns, getTasks, type User, type Column, type Task }
