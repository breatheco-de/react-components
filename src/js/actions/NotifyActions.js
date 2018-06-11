import Flux from '@4geeksacademy/react-flux-dash';
import NotifyStore from '../stores/NotificationStore';

export const remove = (id) =>{
    let state = NotifyStore.getState();
    let notifications = state['notifications'].filter(noti => noti.id != id);
    Flux.dispatchEvent("notifications", notifications);
};

export const add = (type, message, confirm=null, timout=6000) =>{
    
    let state = NotifyStore.getState();
    let notyId = Math.floor(Math.random() * 100000000000);
    if(typeof state['notifications'] === 'undefined' || !state['notifications']) state['notifications'] = [];
    let notifications = state['notifications'].concat([{
        id: notyId,
        msg: message,
        type: type,
        onConfirm: confirm,
        timout: timout
    }]);
    
    Flux.dispatchEvent("notifications", notifications);
    
    if(!timout) timout = 99999999999999999;
    setTimeout(() => {
        remove(notyId);
    },timout);
};

export const success = (msg, conf, timout=6000) => add('success', msg, conf, timout);
export const error = (msg, conf, timout=6000) => add('error', msg, conf, timout);
export const info = (msg, conf, timout=6000) => add('info', msg, conf, timout);
export const clean = () => Flux.dispatchEvent("notifications", []);
