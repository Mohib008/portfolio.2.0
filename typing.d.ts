interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Socail extends SanityBody {
  _type: "social";
  _title: string;
  _url: string;
}