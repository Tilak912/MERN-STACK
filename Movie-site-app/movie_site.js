
//deleting existing list

var btns = document.querySelectorAll('#movie-list .delete');

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li)
  });
});


//to delete new created list
var list = document.querySelector('#movie-list ul');

list.addEventListener('click', function(e){
  if(e.target.className === 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
})

//to add new movies to the list
const addForm = document.forms['add-movie'];

addForm.addEventListener('submit', function(e){

  e.preventDefault();

  var value = addForm.querySelector('input[type="text"]').value;

  var li = document.createElement('li');
  var movieName = document.createElement('span');
  var deleteBtn = document.createElement('span');

  li.appendChild(movieName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  deleteBtn.textContent =  'delete';
  movieName.textContent = value;

  movieName.classList.add('name');
  deleteBtn.classList.add('delete');
});

//to search movie

var findform = document.forms['search-movies'];
findform.addEventListener('keyup',function(e){
  e.preventDefault();

  var find_movie = document.querySelector("input[type='text']").value.toUpperCase();
  var movie_list = document.querySelectorAll('li .name');
  var lists=document.querySelectorAll('li');
  for(var i=0;i<movie_list.length;i++){
    if(movie_list[i].textContent.toUpperCase().indexOf(find_movie)>-1)  lists[i].style.display='';
    else lists[i].style.display='none';
  }
});

//to hide lists

var check=document.querySelector('#hide');
check.addEventListener('click',function(e){
if (check.checked) list.hidden=true;
else list.hidden=false;
});
