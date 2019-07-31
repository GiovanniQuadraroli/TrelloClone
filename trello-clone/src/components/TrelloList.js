import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
    background-color : #dfe3e6;
    border-radius : 3px;
    width : 300px;
    padding : 8px;
    height : 100%;
    margin-right : 8px;
`;

const TrelloList = ({ title, cards , listID}) => {
    return (
        <Droppable droppableId={String(listID)}>
            {
                (provided) => (
                    <ListContainer 
                    ref = { provided.innerRef }
                    {...provided.droppableProps}>
                        <h4>{title}</h4>
                            <div>
                            { 
                                cards.map((card,index) => 
                                <TrelloCard 
                                key = { card.id }
                                cardID = {card.id} 
                                text = {card.text}
                                index = {index} ></TrelloCard>)
                            }
                            <TrelloActionButton listID = { listID }></TrelloActionButton>
                            </div>
                            {provided.placeholder}

                    </ListContainer>
                )
            }
        
        </Droppable>
    )
};

const styles = {
    container : {
        backgroundColor : "#dfe3e6",
        borderRadius : 3 ,
        width : 300 ,
        padding : 8 ,
        height : "100%",
        marginRight : 8
    }
};

export default TrelloList;