function expandList(){
    document.getElementById("suggestions-list").classList.remove("fold");
};

function foldList(){
    setTimeout(function(){
        document.getElementById("suggestions-list").classList.add("fold");
    },50);
};


function getKeyword(keyword){
    document.querySelector(".search-input").value = keyword;
};

function redirect(key){
    if (key.keyCode === 13){
       location.href = 'pages/productlist.html';
    };
};