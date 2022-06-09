// traditional functional ready 
$(document).ready(function (){
    // this variable is empty for now and will display user information
    var user =''

    // when the form submit it will prevent auto submission of form 
    $("#form").submit(function(event){
        event.preventDefault()

        // get the username field value
        var username = $("#username").val()
        // we search the user and we pass the user we want to search to it
        getUsers(username)
    })

    // lets now implement the method to search user that is inputed
    function getUsers(username){
        // get request to the Api endpoint- q will querry for username- pnly display up to 80 pages- call back funtion to get the data
        $.get("https://api.github.com/search/users?q="+ username +"+in:user&per_page=80", function(data){
            //console log to check if username was returned from Api
            console.log(data)
            // we get items from array and grab url of user(html_url)then also grab picture of user
            // target black to redirect user page to new window when we click on user picture
            data.items.forEach(item => {
                user = `<a target="_blank" href="${item.html_url}"><img class="img-thumbnail ml-4" width="100" height="100" src ="${item.avatar_url}"/></a>`
                // add to DOM to append and pass user propriete
                $("#result1").append(user)
            });
        })
        
    }
})