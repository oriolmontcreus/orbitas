export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  name?: string;
  created: Date;
  updated: Date;
}