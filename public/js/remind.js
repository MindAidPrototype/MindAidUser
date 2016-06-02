function submitNewStudent() {
  const sname = document.getElementById('newStudentName').value
  const score = document.getElementById('newStudentScore').value
  const stclass = document.getElementById('newStudentClass').value
  const date = document.getElementById('newStudentDate').value
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
      if (xhr.responseText === 'stored in database') {
        window.location.href = '/remind'
      }
    }
  }
  xhr.open('post', '/newStudentInfo')
  xhr.send(JSON.stringify({
    sname,
    score,
    stclass,
    date
  }))
}

document.getElementById('submitNewStudent').addEventListener('click', submitNewStudent)

function showStudents() {
  const studentsContainer = document.getElementById('studentsContainer')
  studentsContainer.style.visibility === 'visible' ?
    studentsContainer.style.visibility = 'hidden' : studentsContainer.style.visibility = 'visible'
}

document.getElementById('showStudents').addEventListener('click', showStudents)
