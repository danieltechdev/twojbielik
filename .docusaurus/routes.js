import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/twojbielik/blog',
    component: ComponentCreator('/twojbielik/blog', 'fb6'),
    exact: true
  },
  {
    path: '/twojbielik/blog/archive',
    component: ComponentCreator('/twojbielik/blog/archive', '0df'),
    exact: true
  },
  {
    path: '/twojbielik/blog/authors',
    component: ComponentCreator('/twojbielik/blog/authors', '536'),
    exact: true
  },
  {
    path: '/twojbielik/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/twojbielik/blog/authors/all-sebastien-lorber-articles', '292'),
    exact: true
  },
  {
    path: '/twojbielik/blog/authors/yangshun',
    component: ComponentCreator('/twojbielik/blog/authors/yangshun', 'e8f'),
    exact: true
  },
  {
    path: '/twojbielik/blog/first-blog-post',
    component: ComponentCreator('/twojbielik/blog/first-blog-post', 'd1a'),
    exact: true
  },
  {
    path: '/twojbielik/blog/tags',
    component: ComponentCreator('/twojbielik/blog/tags', '316'),
    exact: true
  },
  {
    path: '/twojbielik/blog/tags/docusaurus',
    component: ComponentCreator('/twojbielik/blog/tags/docusaurus', 'dd9'),
    exact: true
  },
  {
    path: '/twojbielik/blog/tags/hola',
    component: ComponentCreator('/twojbielik/blog/tags/hola', '328'),
    exact: true
  },
  {
    path: '/twojbielik/docs',
    component: ComponentCreator('/twojbielik/docs', '5a5'),
    routes: [
      {
        path: '/twojbielik/docs',
        component: ComponentCreator('/twojbielik/docs', 'd3c'),
        routes: [
          {
            path: '/twojbielik/docs',
            component: ComponentCreator('/twojbielik/docs', '3f2'),
            routes: [
              {
                path: '/twojbielik/docs/category/narzędzia',
                component: ComponentCreator('/twojbielik/docs/category/narzędzia', 'b2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/category/następne-kroki',
                component: ComponentCreator('/twojbielik/docs/category/następne-kroki', '7c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/category/prompty',
                component: ComponentCreator('/twojbielik/docs/category/prompty', '16f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/category/szybki-start',
                component: ComponentCreator('/twojbielik/docs/category/szybki-start', 'b4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/rozwiniecie/narzedzia/anythingllm',
                component: ComponentCreator('/twojbielik/docs/rozwiniecie/narzedzia/anythingllm', 'ac3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/rozwiniecie/narzedzia/jan',
                component: ComponentCreator('/twojbielik/docs/rozwiniecie/narzedzia/jan', 'e1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/rozwiniecie/narzedzia/ollama',
                component: ComponentCreator('/twojbielik/docs/rozwiniecie/narzedzia/ollama', '587'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/rozwiniecie/promptowanie/budowa',
                component: ComponentCreator('/twojbielik/docs/rozwiniecie/promptowanie/budowa', '49b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/rozwiniecie/promptowanie/gotowce',
                component: ComponentCreator('/twojbielik/docs/rozwiniecie/promptowanie/gotowce', 'a3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/wklad',
                component: ComponentCreator('/twojbielik/docs/wklad', '42e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/wprowadzenie/instalacja',
                component: ComponentCreator('/twojbielik/docs/wprowadzenie/instalacja', '55c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/wprowadzenie/pobieranie',
                component: ComponentCreator('/twojbielik/docs/wprowadzenie/pobieranie', '648'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/wprowadzenie/specyfikacja',
                component: ComponentCreator('/twojbielik/docs/wprowadzenie/specyfikacja', '2c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/wprowadzenie/ustawienia',
                component: ComponentCreator('/twojbielik/docs/wprowadzenie/ustawienia', '14b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/wprowadzenie/uzycie',
                component: ComponentCreator('/twojbielik/docs/wprowadzenie/uzycie', '563'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/twojbielik/docs/wstep',
                component: ComponentCreator('/twojbielik/docs/wstep', '142'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/twojbielik/',
    component: ComponentCreator('/twojbielik/', '184'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
