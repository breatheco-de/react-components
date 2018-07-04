import Flux from '@4geeksacademy/react-flux-dash';
import BC from '@breathecode/api-js-wrapper';

export const loginUser = (username, password) =>{
    return BC.credentials().autenticate(username, password)
    .then((data) => {
        Flux.dispatchEvent("session", {
            githubToken: null,
            autenticated: true,
            breathecodeToken: data.access_token,
            currentCohort: (data.cohorts.length === 1) ? data.cohorts[0] : data.cohorts,
            user: {
                bc_id: data.id,
                wp_id: data.wp_id,
                bio: data.bio,
                cohorts: data.cohorts,
                currently_active: data.currently_active,
                total_points: data.total_points,
                financial_status: data.financial_status,
                avatar: data.avatar_url,
                phone: data.phone,
                github: data.github,
                email: data.email || data.username,
                created_at: data.created_at,
                full_name: data.full_name,
                type: data.type || 'student'
            }
        });
        
        window.location.href="/";
    });
};
    
export const logoutUser = (history) => {
    Flux.dispatchEvent("session", { 
        autenticated: false,
        breathecodeToken: null,
        user: null
    });
    //window.location.href="/login";
};
    
export const remindUser = (email) =>{
    return BC.credentials().remind(email)
    .then((data) => {
        return data;
    });
}