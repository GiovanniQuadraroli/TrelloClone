import { CONSTANTS } from "../";

let listID = 1;
let cardID = 2;

const initialState = [
    {
        title : "titolo lista",
        id : 0,
        cards : [
            {
                id : 0,
                text : "card 1"
            },
            {
                id : 1,
                text : "card 2"
            }
        ]
    },
    {
        title: "Lista 2",
        id : 1,
        cards : [{
            id  : 2,
            text : "card 3"
        }]
    }
]

const listReducer = (state = initialState,action) => {
    switch(action.type) {

        case CONSTANTS.ADD_LIST :
            const newList = {
                title : action.payload,
                cards : [],
                id : ++listID
            }
            return [...state, newList];
        
        case CONSTANTS.ADD_CARD :
            {const newCard = {
                text: action.payload.text,
                id : ++cardID
            }

            const newState = state.map(list => {
                if (list.id === action.payload.listID){
                    return {
                        ...list,
                        cards : [...list.cards, newCard]
                    };
                }
                else {return list};
            });
            return newState;}

        case CONSTANTS.DRAG_HAPPENED :
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } = action.payload;
            const newState = {...state};
            if (droppableIdStart === droppableIdEnd){
                const list = state.find(list => ( droppableIdStart === String(list.id) ));
                const card = list.cards.splice(droppableIndexStart,1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            };
            return Object.values(newState);


        default :
            return state;
    }
};

export default listReducer;