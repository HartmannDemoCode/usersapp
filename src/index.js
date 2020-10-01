import 'bootstrap/dist/css/bootstrap.css'

const tb = document.getElementById('tb');
const url = 'http://localhost:3333/api/users';
fetch(url)
.then(res=>fetchWithErrorCheck(res))
.then((data)=>{
    const trs = data.map((user)=>{
        return `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.age}</td><td>${user.gender}</td><td>${user.email}</td></tr>`;
    });
    const trStr = trs.join('');
    tb.innerHTML = trStr;
});






function fetchWithErrorCheck(res){
    if(!res.ok){
      return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
}