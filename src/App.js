import { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import UserForm from './components/UserForm'

const App = () => {
  const [usuarios, setUsuarios] = useState([])

  const submit =  usuario => {
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }

  return(
    <div style={{padding:20}}>
      <Container>
        <Card>
          <UserForm submit={submit}/>
        </Card>
        <Card>
          <ul>
            {usuarios.map(x => 
            <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li>
            )}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App;
