import { A as ActiveRouter } from './active-router-70ae40a5.js';
import './match-path-760e1797.js';
import './index-1e0c6758.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
