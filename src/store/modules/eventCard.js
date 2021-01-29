import axios from 'axios';

const url = 'http://localhost:5000/';

const state = {
    eventCard: []
}

const getters = {
    allEventCard: state => state.eventCard,
    cardByTopic: state => {
        let cards = state.eventCard
        let res = {}

        
        cards.forEach(card => {
            if( !(card.topic in res)){
                res[card.topic] = []
            }
            res[card.topic].push(card)
        });
        return res
    }
    
}

const actions = {
    async fetchEventCard({ commit }){
        if(state.eventCard.length == 0){
            const response = await axios.get(
                url+'eventCard/', {withCredentials: true}
            );
            
            console.log(response.data);
            commit('setEventCard', response.data);
        }
    },

    async addEventCard({ commit }, events){
        console.log(events)
        const response = await axios.post(
            url+'eventCard/add/', events
        );
        commit('newEventCard', response.data);
    }

}

const mutations = {
    setEventCard: (state, events) => (state.eventCard = events),
    newEventCard: (state, event) => state.eventCard.push(event)
}

export default {
    state,
    getters,
    actions,
    mutations
};