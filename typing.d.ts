interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: Image;
  asset: {
  _type: "refrence";
  _ref: string;
  }
}

export interface pageInfo extends SanityBody {
  _type: "PageInfo";
  _backgroundInformation: string;
  _email: string;
  _role: string
  _address: string;
  _heroImage: Image;
  _name: string;
  _phoneNumber: string;
  _profilePic: Image;
}

export interface Technalogy extends SanityBody {
  _image: Image;
  _progress: number;
  _title: string;
}



export interface Experience extends SanityBody {
  _type: "Experience";
  _company: string;
  _companyImage: Image;
  _dateStarted: Date;
  _dateEnded: Date;
  _isCurrentlyWorkingHere: boolean;
  _jobTitle: string;
  _points: string[];
  _Technologies: Technalogy[];
}

export interface Skill extends SanityBody {
  _type: "Skill";
  _title: string;
  _image: Image;
  _progress: number;
}

export interface Project extends SanityBody {
  _type: "project";
  _title: string;
  _image: Image;
  _linkToBiuld: string;
  _summary: string;
  _technologies: Technology[];
}

export interface Socail extends SanityBody {
  _type: "social";
  _title: string;
  _url: string;
}