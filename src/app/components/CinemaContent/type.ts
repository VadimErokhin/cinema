export interface VideoItem {
  id: number;
  width: number;
  height: number;
  duration: number;
  full_res: null | string;
  tags: Array<any>;
  url: string;
  image: string;
  avg_color: null | string;
  user: User;
  video_files: Array<VideoFile>;
  video_pictures: Pictures[];
}

export interface User {
  id: number;
  name: string;
  url: string;
}

export interface VideoFile {
  file_type: string;
  fps: number;
  height: number;
  id: number;
  link: string;
  quality: Quality;
  width: number;
}

export enum Quality {
  SD = "sd",
  HD = "hd",
}

export interface Pictures {
  id: number;
  nr: number;
  picture: string;
}

export interface VideoResponse {
  next_page: string;
  page: number;
  per_page: number;
  total_results: number;
  url: string;
  videos: VideoItem[];
}
