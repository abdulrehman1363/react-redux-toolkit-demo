import React, { useState } from 'react'
import 'rsuite/dist/styles/rsuite-dark.css'
import { useDispatch } from 'react-redux'
import { add } from './features/todo/todoSlice'
import Todo from './features/todo/Todo'
import {
  Button,
  Container,
  Header,
  Navbar,
  Content,
  FlexboxGrid,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Divider,
} from 'rsuite'
import './App.css'

function App() {
  const dispatch = useDispatch();
  const [todoTxt,setTodoTxt] = useState('');
  return (
    <div className="main">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Header>
              <p className="navbar-brand">Redux React Toolkit TODO</p>
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Add ToDo</h3>} bordered>
                <Form fluid>
                  <FormGroup>
                    <ControlLabel>What you want to do?</ControlLabel>
                    <FormControl
                      name="task"
                      onChange={setTodoTxt}
                      value={todoTxt}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ButtonToolbar>
                      <Button
                        appearance="primary"
                        onClick={() => {
                          dispatch(add({
                            txt : todoTxt,
                            id : Date.now().toString()
                          }))
                          setTodoTxt('')
                        }}
                      >
                        Create
                      </Button>
                    </ButtonToolbar>
                  </FormGroup>
                </Form>
              </Panel>
              <Divider />
              <Todo />
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  )
}

export default App