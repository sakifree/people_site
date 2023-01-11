// LOADERS - a function to get data that runs before a route loads and can be used in a component with the useLoaderData hook
const URL = "https://people-api-ce2f.onrender.com"

export const peopleLoader = async () => {
    const response = await fetch(URL + "/people")
    const people = await response.json()
    return people
}

export const personLoader = async ({params}) => {
    const response = await fetch(URL + "/people/" + params.id)
    const person = await response.json()
    return person
}