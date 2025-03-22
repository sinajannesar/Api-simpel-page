// types.ts
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: { lat: string; lng: string };
    };
    phone: string;
    website: string;
    company: { name: string; catchPhrase: string; bs: string };
  }
  
  export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export interface PostWithUser extends Post {
    user: User | null;
  }
  
  export interface DataState {
    mergedData: PostWithUser[];
    loading: boolean;
    error: string | null;
    fetchAndMergeData: () => Promise<void>;
  }
  

  export interface Person {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
  
  export interface Data {
    users: Person[];
    loading: boolean;
    error: string | null;
    fetchUsers: () => Promise<void>;
  }
  
  export interface UserInfoProps {
    name: string;
    email: string;
    phone: string;
    website: string;
    company: string;
    catchPhrase: string;
    onClose: () => void;
}


export interface PostCardProps {
  title: string;
  body: string;
  onViewMore: () => void;
}

export interface Useruser {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  role: string;
  department: string;
  location: string;
  bio: string;
}