import Head from 'next/head';
import BasePage from '../components/BasePage';
import { mdToPost, PostData, getPosts } from '../loader';
import { BlogPost } from '../components/BlogPage';

const Home = (props: { post: PostData; posts: PostData[] }) => {
  const { post } = props;
  return (
    <BasePage>
      <Head>
        <title>Combinatorial Cooking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPost post={post} />
      <br />
      <br />
    </BasePage>
  );
};
export default Home;

export const getStaticProps = async () => {
  const slug = 'index';
  const mdFile1 = await import(`../md/${slug}.md`);
  const post = mdToPost(mdFile1);
  const posts = await getPosts();
  return { props: { post, posts } };
};
