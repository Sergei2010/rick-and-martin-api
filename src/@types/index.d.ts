export declare global {
  declare module '*.scss';
  interface Origin {
    name: string;
    url: string;
  }

  interface Location {
    name: string;
    url: string;
  }

  interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: any[];
    url: string;
    created: Date;
  }
}
