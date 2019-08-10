import React, {useState} from 'react';
import TrelloCard from './TrelloCard';
import TrelloCreate from './TrelloCreate';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import styled from "styled-components"
import {connect} from "react-redux"
import {editTitle,deleteList} from "../actions"
import Icon from "@material-ui/core/Icon"

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

const StyledInput = styled.input`
  width: 90%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DeleteButton = styled(Icon)`
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  }
`;

const EditButton = styled(Icon)`
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  }
`;

const ListTitle = styled.h4`
  transition: background 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;

const TrelloList = React.memo(({title,cards,listID,index,dispatch}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [listTitle, setListTitle ] = useState(title)

    const handleFocus = e => {
        e.target.select()
    }

    const handleChange = e => {
        e.preventDefault()
        setListTitle(e.target.value)
    }

    const handleFinishEditing = e => {
        setIsEditing(false)
        dispatch(editTitle(listID, listTitle))
    }

    const handleDeleteList = () => {
        setIsEditing(false)
        dispatch(deleteList(listID))
    }
    
    const renderEditInput = () => {
        console.log("prova")
        return (
            <form onSubmit={handleFinishEditing}>
                <StyledInput
                    type = "text"
                    value = {listTitle}
                    onChange = {handleChange}
                    autoFocus
                    onFocus = {handleFocus}
                    onBlur = {handleFinishEditing}
                />
            </form>
        )
    }

    return (
        <Draggable draggableId={String(listID)} index={index}>
            {
                provided => (
                    <ListContainer 
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref = {provided.innerRef}
                    >
                        <Droppable droppableId={String(listID)} type = "card">
                            {
                                provided => (
                                    <div>
                                        <div>
                                            {isEditing ? (renderEditInput()) : (
                                                <TitleContainer>
                                                    <ListTitle>{listTitle}</ListTitle>
                                                    <EditButton onClick = {()=>setIsEditing(true)}>edit</EditButton>
                                                    <DeleteButton onClick ={handleDeleteList}>delete</DeleteButton>
                                                </TitleContainer>
                                            )}
                                        </div>
                                        <div {...provided.droppableProps} ref= {provided.innerRef}>
                                                {
                                                    cards.map((card,index) => (
                                                        <TrelloCard key = {card.id}
                                                            text = {card.text}
                                                            id = {card.id}
                                                            index = {index}
                                                            listID = {listID}
                                                        />
                                                    ))
                                                }
                                                {provided.placeholder}
                                                <TrelloCreate listID={listID}/>
                                        </div>
                                    </div>
                                )
                            }
                        </Droppable>
                    </ListContainer>
                )
            }
        </Draggable>
    )
})

export default connect()(TrelloList);