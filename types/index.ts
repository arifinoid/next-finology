export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
};

export type Filters = {
  search: string;
  city: string;
  company: string;
};
