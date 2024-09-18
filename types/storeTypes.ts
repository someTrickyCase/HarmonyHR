export type Session = {
  id: number | null;
  name: string;
  avatar: string;
  creationAt: string;
  email: string;
  role: string;
  updatedAt: string;
};

export type State = {
  session: Session;
  updateSession: any;
};

export type Action = {
  updateSession: (session: Session) => void;
};

export type Navigation = {
  link: string;
  changeLink: (link: string) => void;
};
