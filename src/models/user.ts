export type User = {
  id: string;
  name: string;
  profileImage: string;
};

export type UserPutRequest = User | Pick<User, "id" | "name"> | Pick<User, "id" | "profileImage">;

export const hasName = (user: UserPutRequest): user is User | Pick<User, "id" | "name"> => {
  return "name" in user;
};

export const hasprofileImage = (user: UserPutRequest): user is User | Pick<User, "id" | "profileImage"> => {
  return "profileImage" in user;
};

export const EXAMPLE_USER_01: User = {
  id: "user1",
  name: "user1",
  profileImage: "/mocks/avatar01.jpg",
};

export const EXAMPLE_USER_02: User = {
  id: "user2",
  name: "user2",
  profileImage: "/mocks/avatar02.jpg",
};
