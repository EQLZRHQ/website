// Feature type
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  // metric: string;
}

// Review type
export interface Review {
  id: number;
  name: string;
  title: string;
  image: string;
  text: string;
}

// Blog post type
export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  image: string;
  link: string;
}

// Mobile app step type
export interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}