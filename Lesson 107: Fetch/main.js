var postApi = 'https://jsonplaceholder.typicode.com/posts'
fetch(postApi)
    .then(function(response){
        return response.json()
    })
    .then(function(post){
        var htmls = post.map(function(post){
            return  `<li>
            <h2>${post.tittle}</h2>
            <p>${post.body}</p>
            </li>`
        })
        var html = htmls.join('')
        document.getElementById('post-block').innerHTML = htmls
    })
    .catch(function(err){
        alert('lỗi lòi c')
    })