export type Route = 'inicio' | 'nosotros' | 'cronograma' | 'impacto' | 'contacto';

export interface Leader {
  id: number;
  name: string;
  role: string;
  career: string;
  image: string;
  linkedinUrl: string;
}

export interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  agenda: {
    time: string;
    activity: string;
    speaker?: string;
  }[];
  subEvents?: {
    id: number;
    title: string;
    icon: string;
  }[];
}
