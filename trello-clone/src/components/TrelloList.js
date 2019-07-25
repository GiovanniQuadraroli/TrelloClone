import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';

const TrelloList = ({ title, cards , listID}) => {
    return (
        <Droppable droppableId={String(listID)}>
            {
                (provided) => (
                    <div style ={styles.container}
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

                    </div>
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