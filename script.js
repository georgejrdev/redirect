const dest = {
    "portfolio":"https://github.com/georgejrdev",
    "blog":"https://medium.com/@social.georgejr",
    "linkedin":"https://www.linkedin.com/in/georgejrdev/",
    "github":"https://github.com/georgejrdev",
    "lattes":"http://lattes.cnpq.br/1133403728021540",
    "link-tree":"https://georgejrdev.github.io/Link-Tree/",

    "project-github-link-tree":"https://github.com/georgejrdev/Link-Tree",
    "project-deploy-link-tree":"https://georgejrdev.github.io/redirect/?to=link-tree",
    "project-github-mario-mocap-control":"https://github.com/georgejrdev/Mario-Mocap-Control",
    "project-github-slide-js":"deleted",
    "project-deploy-slide-js":"deleted",
    "project-deploy-vocabulary":"deleted",
    "project-github-simple-text":"deleted",
    "project-github-feature-flag-controller":"deleted",
    "project-github-super-toolkit":"deleted",
    "project-deploy-big-lib":"deleted",
    "project-github-text-highlighter":"deleted",
    "project-deploy-text-highlighter":"deleted",
    "project-github-study-planner":"deleted",
    "project-github-audiobook-generator":"deleted",
    "project-deploy-audiobook-generator":"deleted",

    "blog-post-always-choose-the-simple":"deleted",
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