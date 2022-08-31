const init = {
    todos: [
        {
            title: 'Learn Javascript',
            completed: false
        }, 
        {
            title: 'Learn Html, css',
            completed: true
        }
    ]
}
export default function reducer(state = init, action, args){
    switch (action){
        default:
            return state
    }
}