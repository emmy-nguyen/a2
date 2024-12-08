/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as ShowMoodImport } from "./routes/show-mood";
import { Route as AuthenticatedImport } from "./routes/_authenticated";
import { Route as IndexImport } from "./routes/index";
import { Route as AuthenticatedProfileImport } from "./routes/_authenticated/profile";
import { Route as AuthenticatedCreateMoodImport } from "./routes/_authenticated/create-mood";
import { Route as AuthenticatedAllMoodsImport } from "./routes/_authenticated/all-moods";

// Create/Update Routes

const ShowMoodRoute = ShowMoodImport.update({
  id: "/show-mood",
  path: "/show-mood",
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedRoute = AuthenticatedImport.update({
  id: "/_authenticated",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const AuthenticatedProfileRoute = AuthenticatedProfileImport.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => AuthenticatedRoute,
} as any);

const AuthenticatedCreateMoodRoute = AuthenticatedCreateMoodImport.update({
  id: "/create-mood",
  path: "/create-mood",
  getParentRoute: () => AuthenticatedRoute,
} as any);

const AuthenticatedAllMoodsRoute = AuthenticatedAllMoodsImport.update({
  id: "/all-moods",
  path: "/all-moods",
  getParentRoute: () => AuthenticatedRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/_authenticated": {
      id: "/_authenticated";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof AuthenticatedImport;
      parentRoute: typeof rootRoute;
    };
    "/show-mood": {
      id: "/show-mood";
      path: "/show-mood";
      fullPath: "/show-mood";
      preLoaderRoute: typeof ShowMoodImport;
      parentRoute: typeof rootRoute;
    };
    "/_authenticated/all-moods": {
      id: "/_authenticated/all-moods";
      path: "/all-moods";
      fullPath: "/all-moods";
      preLoaderRoute: typeof AuthenticatedAllMoodsImport;
      parentRoute: typeof AuthenticatedImport;
    };
    "/_authenticated/create-mood": {
      id: "/_authenticated/create-mood";
      path: "/create-mood";
      fullPath: "/create-mood";
      preLoaderRoute: typeof AuthenticatedCreateMoodImport;
      parentRoute: typeof AuthenticatedImport;
    };
    "/_authenticated/profile": {
      id: "/_authenticated/profile";
      path: "/profile";
      fullPath: "/profile";
      preLoaderRoute: typeof AuthenticatedProfileImport;
      parentRoute: typeof AuthenticatedImport;
    };
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedAllMoodsRoute: typeof AuthenticatedAllMoodsRoute;
  AuthenticatedCreateMoodRoute: typeof AuthenticatedCreateMoodRoute;
  AuthenticatedProfileRoute: typeof AuthenticatedProfileRoute;
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedAllMoodsRoute: AuthenticatedAllMoodsRoute,
  AuthenticatedCreateMoodRoute: AuthenticatedCreateMoodRoute,
  AuthenticatedProfileRoute: AuthenticatedProfileRoute,
};

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren
);

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "": typeof AuthenticatedRouteWithChildren;
  "/show-mood": typeof ShowMoodRoute;
  "/all-moods": typeof AuthenticatedAllMoodsRoute;
  "/create-mood": typeof AuthenticatedCreateMoodRoute;
  "/profile": typeof AuthenticatedProfileRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "": typeof AuthenticatedRouteWithChildren;
  "/show-mood": typeof ShowMoodRoute;
  "/all-moods": typeof AuthenticatedAllMoodsRoute;
  "/create-mood": typeof AuthenticatedCreateMoodRoute;
  "/profile": typeof AuthenticatedProfileRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/_authenticated": typeof AuthenticatedRouteWithChildren;
  "/show-mood": typeof ShowMoodRoute;
  "/_authenticated/all-moods": typeof AuthenticatedAllMoodsRoute;
  "/_authenticated/create-mood": typeof AuthenticatedCreateMoodRoute;
  "/_authenticated/profile": typeof AuthenticatedProfileRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | "/"
    | ""
    | "/show-mood"
    | "/all-moods"
    | "/create-mood"
    | "/profile";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "" | "/show-mood" | "/all-moods" | "/create-mood" | "/profile";
  id:
    | "__root__"
    | "/"
    | "/_authenticated"
    | "/show-mood"
    | "/_authenticated/all-moods"
    | "/_authenticated/create-mood"
    | "/_authenticated/profile";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren;
  ShowMoodRoute: typeof ShowMoodRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  ShowMoodRoute: ShowMoodRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/show-mood"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/all-moods",
        "/_authenticated/create-mood",
        "/_authenticated/profile"
      ]
    },
    "/show-mood": {
      "filePath": "show-mood.tsx"
    },
    "/_authenticated/all-moods": {
      "filePath": "_authenticated/all-moods.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/create-mood": {
      "filePath": "_authenticated/create-mood.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/profile": {
      "filePath": "_authenticated/profile.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
