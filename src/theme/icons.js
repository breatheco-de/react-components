/* global FontAwesomeConfig */

/**
 * 1) First you have to import the @fortawesome/fontawesome library
*/
import fontawesome from '@fortawesome/fontawesome';


/**
 * 2) Then you have to import every icon that you will use
*/
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faSync from '@fortawesome/fontawesome-free-solid/faSync';
import faEllipsisV from '@fortawesome/fontawesome-free-solid/faEllipsisV';
import faGraduationCap from '@fortawesome/fontawesome-free-solid/faGraduationCap';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faAngleDoubleDown from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown';
import faAngleDoubleUp from '@fortawesome/fontawesome-free-solid/faAngleDoubleUp';
import faQuestion from '@fortawesome/fontawesome-free-solid/faQuestion';
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle';
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff';
import faBell from '@fortawesome/fontawesome-free-solid/faBell';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import faList from '@fortawesome/fontawesome-free-solid/faList';
/**
 * 3) Tell font-awesome that you want to replace your icons with SVGs (recomended for performance)
*/
fontawesome.config = {
  autoReplaceSvg: 'nest'
};

/**
 * 4) Add the icons into the font-awesome library
*/
fontawesome.library.add(
    faCheck, faGraduationCap, faPlay, faSpinner, faSearch, faGithub, faEnvelope,
    faCog, faSync, faEllipsisV, faExternalLinkAlt, faArrowRight, faArrowLeft,
    faAngleDoubleDown, faAngleDoubleUp, faQuestion, faExclamationCircle,
    faYoutube, faTimes, faPowerOff, faBell, faBars, faTrash, faList
);


/**
 * 5) Now, you can place the icon tag anywhere you want to icon to show, for example:
 *    <i className="fas fa-check"></i>
*/
export const icon = (name) => {
    const _icons = {
        cog: 'fas fa-cog',
        graduationCap: 'fas fa-graduation-cap',
        check: 'fas fa-check',
        list: 'fas fa-list',
        search: 'fas fa-search',
        envelope: 'fas fa-envelope',
        sync: 'fas fa-sync',
        bell: 'fas fa-bell',
        play: 'fas fa-play',
        powerOff: 'fas fa-power-off',
        bars: 'fas fa-bars',
        question: 'fas fa-question',
        times: 'fas fa-times',
        arrowRight: 'fas fa-arrow-right',
        arrowLeft: 'fas fa-arrow-left',
        trash: 'fas fa-trash'
    };
    if(typeof _icons[name] === 'undefined') throw new Error('Invalid icon name: '+name);
    else return _icons[name];
};