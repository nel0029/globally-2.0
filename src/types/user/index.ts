export interface User {
  bio: string;
  followers_count: number;
  followings_count: number;
  name: string;
  posts_count: number;
  privacy_type: number;
  profile_picture: {
    id: string;
    url: string;
  };
  reactions_count: number;
  replies_count: number;
  reposts_count: number;
  user_name: string;
}
