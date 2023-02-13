// add event handler : 
// primary button
function makePink(){
    document.body.style.backgroundColor = 'Pink';
    // when click the btn then change h1 text
    document.getElementById('heading').innerText = 'this is event handler text-1'
}

// secondary button
function makePurple(){
   document.body.style.backgroundColor = 'purple';
    // when click the btn then change h1 text
    document.getElementById('heading').innerText = 'this is event handler text-2'
}

// success button
function makeCadetBlue(){
    document.body.style.backgroundColor = 'cadetblue';
    // when click the button then change h1 text
    document.getElementById('heading').innerText = 'this is event handler text-3'
}

// now we see even listener :
// button primary
const firstEvent = document.getElementById('first').addEventListener('click', function(){
    document.body.style.backgroundColor = 'olive';
    // when click the button then change h1 text
    document.getElementById('heading-2').innerText = ' this is event listener text-1'
});

// button secondary
const secondEvent = document.getElementById('second').addEventListener('click', function(){
    document.body.style.backgroundColor = '#51E1ED';
    // when click the button then change h1 text
    document.getElementById('heading-2').innerText = 'this is event listener text-2'
})

// button success
const thirdEvent = document.getElementById('third').addEventListener('click', function(){
    document.body.style.backgroundColor = '#E07C24';
    // when click the button then change h1 text
    document.getElementById('heading-2').innerText = 'this is event listener tex-3'
})

const nextPageButton = document.getElementById('submit').addEventListener('click', function(){
    window.location.href = 'condition.html'
})

