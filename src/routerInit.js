import { changeRoute } from './lib/router.js';

const init = () => {
    changeRoute(window.location.hash);
    window.addEventListener('hashchange', () => {
        changeRoute(window.location.hash);
    });
};

window.addEventListener('load', init);
