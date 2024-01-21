export type Room = {
  id: string;
  name: string;
  members: string[];
  createdAt: Date;
  interactedAt: Date;
  updatedAt: Date;
  ownerId: number;
  owner: {
    name: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
  };
};
