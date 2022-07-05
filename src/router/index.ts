import {
    About,
    PostIdPage,
    Posts,
    Error as ErrorPage,
    Login
} from 'pages';

export const privateRoutes = [
    { path: '/about', component: About },
    { path: '/posts', component: Posts },
    { path: '/posts/:id', component: PostIdPage },
    { path: '/error', component: ErrorPage },
];

export const publicRoutes = [
    { path: '/login', component: Login },
];
