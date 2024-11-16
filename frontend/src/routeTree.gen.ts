/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MoodsImport } from './routes/moods'
import { Route as CreateMoodImport } from './routes/create-mood'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const MoodsRoute = MoodsImport.update({
  id: '/moods',
  path: '/moods',
  getParentRoute: () => rootRoute,
} as any)

const CreateMoodRoute = CreateMoodImport.update({
  id: '/create-mood',
  path: '/create-mood',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/create-mood': {
      id: '/create-mood'
      path: '/create-mood'
      fullPath: '/create-mood'
      preLoaderRoute: typeof CreateMoodImport
      parentRoute: typeof rootRoute
    }
    '/moods': {
      id: '/moods'
      path: '/moods'
      fullPath: '/moods'
      preLoaderRoute: typeof MoodsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/create-mood': typeof CreateMoodRoute
  '/moods': typeof MoodsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/create-mood': typeof CreateMoodRoute
  '/moods': typeof MoodsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/create-mood': typeof CreateMoodRoute
  '/moods': typeof MoodsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/create-mood' | '/moods'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/create-mood' | '/moods'
  id: '__root__' | '/' | '/about' | '/create-mood' | '/moods'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  CreateMoodRoute: typeof CreateMoodRoute
  MoodsRoute: typeof MoodsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  CreateMoodRoute: CreateMoodRoute,
  MoodsRoute: MoodsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/create-mood",
        "/moods"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/create-mood": {
      "filePath": "create-mood.tsx"
    },
    "/moods": {
      "filePath": "moods.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
