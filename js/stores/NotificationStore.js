import Flux from '@4geeksacademy/react-flux-dash';

class NotificationStore extends Flux.DashStore{
    constructor(){
        super();
        this.state = {
            notifications: []
        };
        this.addEvent("notifications", this._notificationsTransformer.bind(this));
    }
    
    _notificationsTransformer(notifications){
        if(Array.isArray(notifications)) return notifications;
        else return [];
    }
    
    getAllNotifications(){
        return this.state.notifications;
    }
}

export default new NotificationStore();