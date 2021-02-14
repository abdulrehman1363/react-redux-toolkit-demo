import React from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import {selectTodos ,del} from './todoSlice'
import { List ,FlexboxGrid,IconButton,Icon } from 'rsuite';
const Todo = () => {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()
    return (
        <div>
            <List bordered>
                {todos.map(({txt, id}) => (
                    <FlexboxGrid key={id}>
                        <FlexboxGrid.Item colspan={12}>
                            <List.Item>
                                {txt}
                            </List.Item>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={10}></FlexboxGrid.Item> 
                        <FlexboxGrid.Item colspan={2}>
                            <IconButton icon={<Icon icon="minus"/>} 
                                onClick={() => dispatch(del(id))}
                                color='red' circle 
                            />
                        </FlexboxGrid.Item>
                    </FlexboxGrid>  
                ))}
            </List>
        </div>
    )
}

export default Todo
