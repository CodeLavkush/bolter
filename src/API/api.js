import conf from '../conf/conf'

async function getAllTodos(){
    const options = {method: 'GET', headers: {accept: 'application.json'}}
    
    try {
        const response = await fetch(conf.url, options)
        const apiData = await response.json()
        return apiData
    } catch (error) {
        console.error(error)
    }
}

async function deleteTodo(id) {
    const url = `${conf.url}/${id}`
    const options = {method: 'DELETE', headers: {accept: 'application.json'}}
    
    try {
        const response = await fetch(url, options)
        const apiData = await response.json()
        return apiData
    } catch (error) {
        console.error(error)
    }
}

async function updateTodo(id, newTodo) {
    const url = `${conf.url}/${id}`
    const options = {method: 'PATCH', headers: {accept: 'application.json', 'content-type': 'application/json'}, body: JSON.stringify(newTodo)}
    
    try {
        const response = await fetch(url, options)
        const apiData = await response.json()
        return apiData
    } catch (error) {
        console.error(error)
    }
}

async function createTodo(todo) {
    const options = {method: 'POST', headers: {accept: 'application/json', 'content-type': 'application/json'}, body: JSON.stringify(todo)}
    
    try {
        const response = await fetch(conf.url, options)
        const apiData = await response.json()
        return apiData
    } catch (error) {
        console.error(error)
    }
}

async function toggleTodo(id){
    const url = `${conf.url}/toggle/status/${id}`;
    const options = {method: 'PATCH', headers: {accept: 'application/json'}};

    try {
        const response = await fetch(url, options);
        const apiData = await response.json();
        return apiData
    } catch (error) {
        console.error(error);
    }
}

export default {
    getAllTodos,
    deleteTodo,
    updateTodo,
    createTodo,
    toggleTodo,
}