import React from 'react'

const PhotoPost = () => {

  // estado reativo do formulário
  const[token, setToken] = React.useState('');
  const[nome, setNome] = React.useState('');
  const[peso, setPeso] = React.useState('');
  const[idade, setIdade] = React.useState('');
  const[img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // form data e append
    const formData = new FormData();
    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);

    // Api externa
    // fetch de informações de post da para nova postagem do usuário
    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
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

      {/* token */}
      <input 
        type='text'
        placeholder='token' 
        value={token} 
        onChange={({target}) => setToken(target.value)} 
      />
      {/* nome */}
      <input 
        type='text'
        placeholder='name' 
        value={nome} 
        onChange={({target}) => setNome(target.value)} 
      />      
      {/* peso */}
      <input 
        type='text'
        placeholder='weight' 
        value={peso} 
        onChange={({target}) => setPeso(target.value)} 
      />
      {/* idade */}
      <input 
        type='text'
        placeholder='years' 
        value={idade} 
        onChange={({target}) => setIdade(target.value)} 
      />
      {/* arquivo de postagem */}
      <input 
        type='file'
        onChange={({target}) => setImg(target.files[0])} 
      />            

      {/* botão de enviar */}
      <button>Enviar</button>
    </form>
  )
}

export default PhotoPost