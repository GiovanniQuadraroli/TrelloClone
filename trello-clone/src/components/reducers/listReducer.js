
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
        default :
            return state;
    }
};

export default listReducer;