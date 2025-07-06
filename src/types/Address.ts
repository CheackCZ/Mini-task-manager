import type { Geo } from "./Geo";

// Address type declaration
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}