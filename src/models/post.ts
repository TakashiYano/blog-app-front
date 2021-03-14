export type Post = {
  id: string;
  title: string;
  content: string;
  public: boolean;
};

export type ListPost = {
  id: string;
  excerpt: string;
  public: boolean;
};

export const EXAMPLE_POST: Post = {
  id: "123",
  title: `lorem`,
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus dolor, ipsa sed eius quisquam praesentium debitis nam ipsum delectus aliquid doloribus fugit esse et quibusdam in tempore non laudantium.`,
  public: false,
};

export const EXAMPLE_MY_POST_LIST: ListPost[] = [
  {
    id: "5",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    public: false,
  },
  {
    id: "4",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus dolor,`,
    public: true,
  },
  {
    id: "3",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus dolor, ipsa`,
    public: false,
  },
  {
    id: "2",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus dolor, ipsa sed`,
    public: false,
  },
  {
    id: "1",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus dolor, ipsa sed eius`,
    public: true,
  },
];

export const EXAMPLE_OTHER_USER_POST_LIST: ListPost[] = [
  {
    id: "5",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    public: false,
  },
  {
    id: "4",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus dolor,`,
    public: true,
  },
  {
    id: "3",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus dolor, ipsa`,
    public: true,
  },
  {
    id: "2",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus dolor, ipsa sed`,
    public: false,
  },
  {
    id: "1",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus dolor, ipsa sed eius`,
    public: true,
  },
];
