const dest = {
    "portfolio":"https://georgejrdev.github.io/Portfolio/",
    "blog":"https://medium.com/@oliveirajunio748",
    "linkedin":"https://www.linkedin.com/in/georgejrdev/",
    "youtube":"https://www.youtube.com/@Hipper-2701",
    "github":"https://github.com/georgejrdev",
    
    "project-github-super-toolkit":"https://github.com/georgejrdev/Super-ToolKit",
    "project-deploy-big-lib":"https://big-lib.vercel.app/",
    "project-github-text-highlighter":"https://github.com/georgejrdev/Text-Highlighter",
    "project-deploy-text-highlighter":"https://georgejrdev.github.io/Text-Highlighter/",
    "project-github-study-planner":"https://github.com/georgejrdev/Study-Planner",
    "project-github-link-tree":"https://github.com/georgejrdev/Link-Tree",
    "project-deploy-link-tree":"https://georgejrdev.github.io/Link-Tree/",
    "project-github-slide-js":"https://github.com/georgejrdev/Slide.js",
    "project-deploy-slide-js":"https://georgejrdev.github.io/Slide.js/example.html",
    "project-deploy-vocabulary":"https://plus-vocabulary.vercel.app/",
    "project-github-simple-text":"https://github.com/georgejrdev/Simple-Text",
    "project-github-feature-flag-controller":"https://github.com/georgejrdev/Feature-Flag-Controller",
    "project-github-mario-mocap-control":"https://github.com/georgejrdev/Mario-Mocap-Control",
    "project-github-audiobook-generator":"https://github.com/georgejrdev/AudioBook-Generator",
    "project-deploy-audiobook-generator":"https://audiobook-generator-chi.vercel.app/",

    "blog-post-always-choose-the-simple":"https://medium.com/@oliveirajunio748/always-choose-simplicity-61bcf37e6910",
    "blog-post-a-good-idea-for-a-simple-workflow":"deleted",
    "blog-post-the-basics-of-git":"deleted",
    "blog-post-javascript-is-the-worst-language":"deleted",
}

function redirect(){
    let key = getUrlParam()

    if (key == null){
        renderError(">null or empty<")
        return
    }

    key = key.toLowerCase()

    if (dest[key] == null){
        renderError(key)
        return
    }

    if (dest[key] == "deleted"){
        renderDeleted(key)
        return
    }

    const url = dest[key]
    window.location.href = url
}

function getUrlParam(){
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('to')
}

function renderError(key){
    document.getElementById("success").style.display = "none"
    document.getElementById("h1-error").innerHTML = `Redirect to ${key} not found.`
    document.getElementById("error").style.display = "block"
}

function renderDeleted(key){
    document.getElementById("success").style.display = "none"
    document.getElementById("h1-deleted").innerHTML = `The page has been deleted.`
    document.getElementById("deleted").style.display = "block"
}

redirect()