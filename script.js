barba.use(barbaCss)

barba.init({
    transitions: [{
        name: "fade",
        beforeEnter({current, next, trigger}){
            let bodyLinks = document.querySelectorAll("body")
            let href = next.url.path

            console.log(href)

            if(href === "/blog.html" || href === "/contact.html"){
                bodyLinks[0].classList.add("blog")
            }
            else{
                bodyLinks[0].classList.remove("blog")
            }
        },
        afterEnter(){
            $("#header").load("template.html #default-header")
        }
    }]
})