import routesJson from './routesMetadata.json';

export interface RouteMetadata {
  path: string;
  title: string;
  description: string;
  h1: string;
  summary: string;
}

export const ROUTES_METADATA: RouteMetadata[] = routesJson as RouteMetadata[];

export const ROUTE_SEO_MAP: Record<string, RouteMetadata> = Object.fromEntries(
  ROUTES_METADATA.map((r) => [r.path, r])
);
