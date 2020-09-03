export const state = {
  title: 'Reactive Application',
  loginRoute: '/login',
  links: [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/courses', icon: 'view_list', title: 'courses' },
    { path: '/lessons', icon: 'assignment', title: 'lessons' },
    { path: '/users', icon: 'account_circle', title: 'users' },
  ],
};

// TOOLBAR
export const getToolbar = () => cy.get('[data-cy=toolbar]');

export const getTitle = () => cy.get('.title');

export const getToggleBtn = () => cy.get('[data-cy=toggle-btn]');

export const getLoginBtn = () => cy.get('[data-cy=login-btn]');

// NAV
export const getSideNav = () => cy.get('[data-cy=side-nav]');

export const getNavList = () => cy.get('[data-cy=nav-list]>mat-list-item');

export const getNavItem = (item) => cy.get(`[data-cy=nav-item-${item}]`);
