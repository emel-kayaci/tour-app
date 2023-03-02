export enum SelectedPage {
  Home = "home",
  About = "about",
  OurTours = "ourtours",
  Contact = "contact",
}

export interface AboutType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface TourType {
  name: string;
  description: string;
  image: string;
}
