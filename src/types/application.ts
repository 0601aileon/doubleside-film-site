export interface ApplicationStep {
  title: string;
  titleZh?: string;
  description: string;
  descriptionZh?: string;
}

export interface Application {
  slug: string;
  title: string;
  titleZh?: string;
  subtitle: string;
  subtitleZh?: string;
  description: string;
  descriptionZh?: string;
  image: string;
  processSteps?: ApplicationStep[];
}
