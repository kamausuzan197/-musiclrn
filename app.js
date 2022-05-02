   const list =document.querySelector('#movies_list');  
    const form =document.form;
    
    //delete movie 
    list.addEventListener('click',(e)=>{
    if(e.target.className =='delete') {
        const li =e.target.parentElement;
        li.parentNode.removeChild(li);
    }
    });

    //add new movies
    const addForm = document.querySelector("#addmovies");
    addForm.addEventListener("submit",function(e){
            e.preventDefault()
        

        //creating element
        const value =addForm.querySelector('.input').value;
        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');



        //add text content
        movieName.textContent = value;
        deleteBtn.textContent ='delete';

        console.log(movieName)
        //adding classes

        movieName.classList.add('name');
        deleteBtn.classList.add('delete');


        //append to DOM
        li.appendChild(movieName)
        li.appendChild(deleteBtn);
        //console.log(li)
        list.appendChild(li);
        
  });
