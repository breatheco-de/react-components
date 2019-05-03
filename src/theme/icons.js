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
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle';
import faCircleRegular from '@fortawesome/fontawesome-free-regular/faCircle';
import faPencil from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';
import faCode from '@fortawesome/fontawesome-free-solid/faCode';
import faQrcode from '@fortawesome/fontawesome-free-solid/faQrcode';
import faExchangeAlt from '@fortawesome/fontawesome-free-solid/faExchangeAlt';

import faTachometerAlt from '@fortawesome/fontawesome-free-solid/faTachometerAlt';
import faUserGraduate from '@fortawesome/fontawesome-free-solid/faUserGraduate';
import faBookOpen from '@fortawesome/fontawesome-free-solid/faBookOpen';
import faCalendarPlus from '@fortawesome/fontawesome-free-solid/faCalendarPlus';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faCalendarCheck from '@fortawesome/fontawesome-free-solid/faCalendarCheck';
import faDumbbell from '@fortawesome/fontawesome-free-solid/faDumbbell';
import faQuestionCircle from '@fortawesome/fontawesome-free-solid/faQuestionCircle';
import faBook from '@fortawesome/fontawesome-free-solid/faBook';
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt';

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
    faYoutube, faTimes, faPowerOff, faBell, faBars, faTrash, faList, faCircle,
    faCircleRegular, faPencil, faExclamationTriangle, faCode, faExchangeAlt, faQrcode,
    faTachometerAlt,faUserGraduate, faBookOpen, faCalendarPlus, faUsers,
    faCalendarCheck, faDumbbell, faQuestionCircle, faBook, faSignOutAlt
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
        pencil: 'fas fa-pencil-alt',
        question: 'fas fa-question',
        times: 'fas fa-times',
        arrowRight: 'fas fa-arrow-right',
        arrowLeft: 'fas fa-arrow-left',
        trash: 'fas fa-trash',
        circle: 'fas fa-circle',
        circleFilled: 'far fa-circle',
        exclamationTriangle: 'fas fa-exclamation-triangle',
        code: 'fas fa-code',
        youtube: 'fab fa-youtube',
        exchange: 'fas fa-exchange-alt',

        tachometer: 'fas fa-tachometer-alt',
        graduate: 'fas fa-user-graduate',
        bookOpen: 'fas fa-book-open',
        calendarPlus: 'fas fa-calendar-plus',
        users: 'fas fa-users',
        calendarCheck: 'fas fa-calendar-check',
        dumbbell: 'fas fa-dumbbell',
        questionCircle: 'fas fa-question-circle',
        book: 'fas fa-book',
        signOut: 'fas fa-sign-out-alt',

        qrcode: "fas fa-qrcode"
    };
    if(typeof _icons[name] === 'undefined') throw new Error('Invalid icon name: '+name);
    else return _icons[name];
};