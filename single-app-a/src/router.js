import Vue from "vue";
import VueRouter from "vue-router";

import PaginaPrincipal from './PaginaPrincipal'
import PaginaA from './PaginaA'

Vue.use(VueRouter);

const routes = [{ 
    path: "/app-a",
    component: PaginaPrincipal,
    children: [{
        name: 'pagina-a',
        path: 'pagina-a',
        component: PaginaA
    }]
}];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

