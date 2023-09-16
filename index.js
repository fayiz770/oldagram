const post = document.getElementById('section');
const posts = [
    {
        name: "Habiburrahman Niazi",
        username: "niazi1853",
        location: "Saripul, Afghanistan",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: "21B"
    },
    {
        name: "Mobian Oladi",
        username: "oladi1819",
        location: "Saripul, Afghanistan",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: "432k"
    },
        {
        name: "Mojiborahman Niazi",
        username: "niazi735",
        location: "Istanbul, Turkey",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: '152k'
    }
]

posts.forEach((e) => {
    post.innerHTML += 
    `
        <div class="container">
            <div class="post">
                <div class="post-header">
                    <img class="circle" src=${e.avatar} alt="">
                    <div class="post-header-title">
                        <span class="post-name">${e.name}</span>
                        <span class="post-location">${e.location}</span>
                    </div>
                </div>
                <div class="post-image">
                    <img class="post-image-img" src=${e.post} alt="post-vangogh">
                </div>
                <div class="post-icons">
                    <img src="images/icon-heart.png" alt="" class="post-icons-img">
                    <img src="images/icon-comment.png" alt="" class="post-icons-img">
                    <img src="images/icon-dm.png" alt="" class="post-icons-img">
                </div>
                <div class="post-likes">
                    <span>${e.likes} likes</span>
                </div>
                <div class="post-friends">
                    <span>${e.username} ${e.comment}</span>
                </div>
            </div>
        </div>
    `
})
