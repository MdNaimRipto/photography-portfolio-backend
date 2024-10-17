export interface IPhotography {
  id: string;
  serviceName: string;
  serviceTakerName: string;
  serviceCardImage: string;
  serviceCardDescription: string;
  serviceDescription: Array<string>;
  images: Array<{
    img: string;
    masonry: string;
  }>;
}
