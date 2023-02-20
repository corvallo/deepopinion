export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
};
