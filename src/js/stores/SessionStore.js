/* global localStorage */
import Flux from '@4geeksacademy/react-flux-dash';

class SessionStore extends Flux.DashStore{
    constructor(){
        super();
        
        // Or Declare an event with some transformation logic
        this.addEvent("session", this._sessionTransformer.bind(this));
    }
    
    setPersistedState(data){
        const session = this.getSession();
        const newState = Object.assign(session || {}, data);
        localStorage.setItem('user_store', JSON.stringify(newState));
        return newState;
    }
    getPersistedState(){
        let persistedState = JSON.parse(localStorage.getItem('user_store'));
        return persistedState;
    }
    
    _sessionTransformer(data){
        let session = this.getPersistedState();
        
        if(!session) return this.setPersistedState(data);
        else return this.setPersistedState(Object.assign(session, data));
    }
    
    getSession(){
        return this.getPersistedState();
    }
    
}
export default new SessionStore();