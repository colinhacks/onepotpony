import React from 'react';
// import matter from 'gray-matter';
import glob from 'glob';

import BlogPage from '../../components/BlogPage';
import { mdToPost } from '../../loader';

function Post(props: any) {
  const { post } = props;

  return <BlogPage post={post} />;
}

// const Post: React.SFC<{ post: BlogPostData }> = (props) => {
//   console.log('PROPS!');
//   console.log(props);
//   return (
//     <BlogPage post={props.post}>
//       <Markdown source={props.post.content || ''} />
//     </BlogPage>
//   );
// };

export const getStaticPaths = () => {
  const blogs = glob.sync('./md/blog/*.md');
  console.log(JSON.stringify(blogs, null, 2));
  const slugs = blogs.map((file: string) => {
    const popped = file.split('/').pop();
    if (!popped) throw new Error(`Invalid blog path: ${file}`);
    return popped.slice(0, -3).trim();
  });

  const paths = slugs.map((slug) => `/blog/${slug}`);
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  console.log(`slug: ${params.slug}`);
  const mdFile = await import(`../../md/blog/${params.slug}.md`);
  const post = mdToPost(mdFile);
  return { props: { post } };
};

export default Post;
