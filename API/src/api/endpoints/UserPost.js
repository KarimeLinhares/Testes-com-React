import React from 'react'

const UserPost = () => {

  // estado reativo do formulário
  const[username, setUserName] = React.useState('');
  const[email, setEmail] = React.useState('');
  const[password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Api externa
    // fetch de informações de post do usuário novo
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        console.log(json);
        return json
      });
  }
  
  return (
    <form onSubmit={handleSubmit}>

      {/* inputs do formulários */}
      {/* value sempre será o valor reativo */}
      {/* onChange recebe a função de callback, com o event e o set */}

      {/* nome de usuário */}
      <input 
        type='text'
        placeholder='username' 
        value={username} 
        onChange={({target}) => setUserName(target.value)} 
      />
      {/* email */}
      <input 
        type='text'
        placeholder='email' 
        value={email} 
        onChange={({target}) => setEmail(target.value)} 
      />      
      {/* senha */}
      <input 
        type='text'
        placeholder='password' 
        value={password} 
        onChange={({target}) => setPassword(target.value)} 
      />

      {/* botão de enviar */}
      <button>Enviar</button>
    </form>
  )
}

export default UserPost