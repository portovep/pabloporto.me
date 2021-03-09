import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

const parsePost = (fileName) => {
  const id = fileName.replace(/\.md$/, "");

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    id,
    ...matterResult.data,
  };
};

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(parsePost).sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
