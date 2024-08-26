export interface CommonResponse<T> {
  code: string;
  message: string;
  data: T;
}

export interface ImageResource {
  id: string;
  url: string;
}

export interface UserProfile {
  user_name: string;
  privacy_type: number;
  profile_picture: ImageResource;
  name: string;
  bio: string;
  followers_count: number;
  followings_count: number;
  posts_count: number;
  replies_count: number;
  reposts_count: number;
  reactions_count: number;
}

export interface AuthResponse extends CommonResponse<UserProfile> {}

export interface AuthFormValues {
  login_id: string;
  password: string;
}

export interface PostsFormValues {
  post_type?: number;
  content?: string;
  has_poll?: boolean;
  media_files?: ImageResource[];
}
