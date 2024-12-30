export type Tuser = {
  email: string;
  role: "OWNER";
};

export type TProject = {
  id?: string;
  name: string;
  photo?: string;
  category?: string;
  description: string;
  github?: string;
  live?: string;
};

export type TBlog = {
  id?: string;
  title: string;
  subtitle: string;
  content: string;
  photo: string;
  category: string;
};

export type TSkill = {
  id?: string;
  name: string;
  level: string;
};

export type TExperience = {
  id?: string;
  title: string;
  company: string;
  startDate?: Date;
  endDate?: Date;
  description: string;
};
