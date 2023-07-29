export interface UserConfig {
  username: string;
  image: {
    png: string;
    webp: string;
  };
}

export interface CommentConfig {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: UserConfig;
  replies: Array<repliesConfig>;
}
export interface repliesConfig
  extends Pick<
    CommentConfig,
    "id" | "content" | "createdAt" | "score" | "user"
  > {
  replyingTo: string;
}
