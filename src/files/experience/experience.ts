type ExperienceMovements = {
  role: string;
  date: string;
  location: string;
  description?: string;
};

export type Experience = {
  company: string;
  movements: ExperienceMovements[];
};
