import { useState } from 'react'
import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

const App = () => {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange, reset] = useFormulario({ 
    name: '', 
    lastname:'', 
    email: '' 
  })

  const submit = (e) => {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario,
    ])
    reset()
  }
  return(
    <div style={{padding:20}}>
      <Container>
        <Card>
          <form onSubmit={submit}>
            <Input 
              label='Nombre' 
              name='name' 
              value={formulario.name} 
              onChange={handleChange}
              placeholder='Nombre'
            />
            <Input 
              label='Apellido' 
              name='lastname' 
              value={formulario.lastname} 
              onChange={handleChange}
              placeholder='Apellido'
            />
            <Input 
              label='Email' 
              name='email' 
              value={formulario.email} 
              onChange={handleChange}
              placeholder='Email'
            />
            <Button>Enviar</Button>
          </form>
        </Card>
        <Card>
          <ul>
            {usuarios.map(usuario => 
            <li key={usuario.email}>{`${usuario.name} ${usuario.lastname}: ${usuario.email}`}</li>
            )}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App;
