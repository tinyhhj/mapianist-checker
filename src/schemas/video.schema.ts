import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VideoDocument = Video & Document;
export type Author = {
  authLevel: number;
  coverUrl: string | null;
  followerCnt: number;
  followingCnt: number;
  isArtist: boolean;
  isLessonManager: boolean;
  isNoblesse: boolean;
  isOfficial: boolean;
  isTrophy: boolean;
  name: string;
  point: number;
  profileUrl: string;
  userId: number;
};

@Schema()
export class Video {
  @Prop()
  'authorId': number;
  @Prop()
  'category': string[];
  @Prop()
  'createdAt': string;
  @Prop()
  'comments': number;
  @Prop()
  'description': string;
  @Prop()
  'isPopular': boolean;
  @Prop()
  'isViolation': boolean;
  @Prop()
  'likes': number;
  @Prop()
  'postId': number;
  @Prop()
  'sortedAt': string;
  @Prop()
  'tags': string[];
  @Prop()
  'title': string;
  @Prop()
  'updatedAt': string;
  @Prop()
  'views': number;
  @Prop()
  'youtubeThumbnailUrl': string;
  @Prop()
  'youtubeVideoId': string;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
