const login = () => {
  const user = document.getElementById('username').value
  const pass = document.getElementById('password').value
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
      if (xhr.responseText === '1'){
        window.location.href = '/remind'
      }
      else {
        console.log(xhr.responseText)
      }
    }
  }
  xhr.open('post', '/authenticate')
  xhr.send(JSON.stringify({
    user,
    pass
  }))
}

document.getElementById('loginButton').addEventListener('click', login)
