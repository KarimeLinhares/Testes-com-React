import React from 'react'

const TokenPost = () => {

  // estado reativo do formulário
  const[username, setUserName] = React.useState('');
  const[password, setPassword] = React.useState('');
  const[token, setToken] = React.useState('');


  function handleSubmit(event) {
    event.preventDefault();

    // Api externa
    // fetch de informações de token do usuário novo
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(json => {
        console.log(json);
        setToken(json.token)
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
      {/* senha */}
      <input 
        type='text'
        placeholder='password' 
        value={password} 
        onChange={({target}) => setPassword(target.value)} 
      />

      {/* botão de enviar */}
      <button>Enviar</button>
      <p style={{wordBreak: 'break-all'}}>{token}</p>
    </form>
  )
}

export default TokenPost;