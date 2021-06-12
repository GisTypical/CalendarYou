import React from 'react'

export const Test = () => {
  function handleEvent(e: any): any {
    var form = new FormData();
    console.log("hola");
    form.append("username", "Gerardo");
    const options = {
      method: 'POST',
      body: form
    }
    fetch('http://localhost:8080/signup', options)
      .then(resp => {
        return resp.json();
      })
      .then(resp => {
        console.log(resp);
      });
    console.log("hola");
    form.append("username", "Gerardo2");
    fetch('http://localhost:8080/signup', options)
      .then(resp => {
        return resp.json();
      })
      .then(resp => {
        console.log(resp);
      });
  }
  return (
    <div>
      <div>
        <input type='button' onClick={handleEvent}></input>
      </div>
    </div>
  )
}

export default Test;