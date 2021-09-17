// $(document).ready(() => {
// });

$(() => {

    const createPost = (post) => {
        const $title = $('<h2>').text(`Title: ${post.title}`);
        // const $title2 = $(`<h2>Title : ${post.title}</h2>`);
        const $body = $('<h2>').text(`Body: ${post.body}`);

        const $post = $('<div>').addClass('post');
        // $post.append($title).append($body);
        $post.append($title, $body);
        return $post;
    }

    const createPosts = (posts) => {
        $container = $('#postsContainer');
        $container.empty();

        for(const post of posts){
            const $post = createPost(post);
            $container.prepend($post);
        }
    }
    
    const fetchPosts = () => {$.ajax({
        url: '/api/posts',
        method: "GET",
        dataType: "json",
        success: (posts) => {
            console.log(posts);
            createPosts(posts);
        },
        error : (error) => {
            console.log(error);
        }
    })}
    

    fetchPosts();

    const form = $('#createPostForm');
    form.on('submit', function(event) {

        event.preventDefault();

        const serializedData = $(this).serialize();
        console.log(serializedData);

        // $.post('api/posts', serializedData, () => {}, () => {});
        $.post('api/posts', serializedData)
         .then((resp) => {
             console.log(resp);
             fetchPosts();
         });
        //  $.ajax({
        //      method: "POST",
        //      url: '/api/posts',
        //      .,

        //  });

    });


    console.log("Hello!")

});