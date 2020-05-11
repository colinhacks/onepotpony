import matter from 'gray-matter';
import glob from 'glob';
export type PostData = {
  title: string;
  subtitle?: string;
  content: string;
  published?: number;
  author?: string;
  authorPhoto?: string;
};

export const getPost = async (path: string): Promise<PostData> => {
  const mdFile = await import(`./md/${path}`);
  return mdToPost(mdFile);
};

export const mdToPost = (file: any): PostData => {
  // const fullPath = `./md/${path}`;
  // console.log(`fullPath: ${fullPath}`);

  console.log('parse frontmatter');
  console.log(file.default.slice(0, 100));
  const metadata = matter(file.default);
  console.log(JSON.stringify(Object.keys(metadata), null, 2));
  console.log(`content: ${metadata.content.slice(0, 50)}`);
  console.log(`DATA!!`);
  console.log(JSON.stringify(metadata.data, null, 2));
  const post = {
    title: metadata.data.title,
    subtitle: metadata.data.subtitle || null,
    published: metadata.data.published || null,
    author: metadata.data.author || null,
    authorPhoto: metadata.data.authorPhoto || null,
    content: metadata.content,
  };
  console.log(`parsed postData`);
  console.log(JSON.stringify(post, null, 2).slice(0, 200));
  if (!post.title || !post.content) {
    throw new Error(`Post missing required field.`);
  }
  // console.log(JSON.stringify(post, null, 2));
  return post;
};

export const getPosts = async (): Promise<PostData[]> => {
  const blogs = glob.sync('./md/blog/*.md');
  const postDataList = await Promise.all(
    blogs.map((path) => {
      console.log(`PATH: ${path}`);
      const modPath = path.slice(path.indexOf(`md/`) + 3);
      console.log(`modPath: ${modPath}`);
      return getPost(`${modPath}`);
    })
  );
  console.log(JSON.stringify(postDataList, null, 2));
  return postDataList;
};
