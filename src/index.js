document.addEventListener("DOMContentLoaded", () => {
// your code here
  const form=document.querySelector("#create-task-form")
  const tasks=document.querySelector("#tasks")
  console.log(tasks)
  form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const taskDescription=document.querySelector("#new-task-description")
    const taskValue=taskDescription.value
    if(taskValue==""){
      console.log(taskDescription.value)
      alert("please write something")
    }
    else{
      const taskList=document.createElement('li');
      const deleteButton= document.createElement('button')
      deleteButton.textContent='x'
       taskList.textContent= taskDescription.value
      tasks.appendChild(taskList)
      taskList.appendChild(deleteButton)
      deleteButton.addEventListener('click',()=>{
      taskList.remove()

      })

    }
    form.reset()
    
  })
});
