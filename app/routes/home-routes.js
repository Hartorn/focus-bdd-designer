import HomeView from '../views/home';
import DataTree from '../views/data-tree/menu';

const routes = [
    {
        path: 'menu',
        component: DataTree,
        childRoutes: [
            {

                path: 'home',
                component: HomeView
            }
        ]
    }
];

export default routes;
