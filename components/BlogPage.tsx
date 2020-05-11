import Head from 'next/head';
import React from 'react';
import { format } from 'fecha';

import BasePage from './BasePage';
import Markdown from './Markdown';
import { PostData } from '../loader';

const BlogPage: React.FunctionComponent<{
  post: PostData;
}> = ({ post }) => {
  return (
    <BasePage>
      <BlogPost post={post} />
    </BasePage>
  );
};

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle, published, author, authorPhoto } = post;

  const authorData = (
    <div style={{ opacity: 0.6 }}>
      <span>{author ? author : ''} </span>
      <span>
        {published ? format(new Date(published), 'MMMM Do, YYYY') : ''}
      </span>
    </div>
  );

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          padding: '0px 4vw',
        }}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <div style={{ margin: '100px 0px 50px 0px' }}>
            <h1
              style={{
                margin: '10px 0px 10px 0px',
                padding: 0,
                border: 'none',
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <h2
                style={{
                  margin: '10px 0px',
                  padding: 0,
                  border: 'none',
                  opacity: '0.6',
                }}
              >
                {subtitle}
              </h2>
            )}
            <hr
              style={{
                height: '1px',
                color: '#eee',
                opacity: 0.2,
                margin: '15px 0px',
              }}
            />

            <div
              style={{
                // opacity: 0.6,
                margin: '0px',
                padding: '0px',
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'space-between',
                // alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  // opacity: 0.6,
                  margin: '0px',
                  padding: '0px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <img
                  src={authorPhoto}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '25px',
                    margin: '0px 10px 0px 0px',
                  }}
                />
                {authorData}
              </div>
            </div>
          </div>

          <Markdown source={post.content} />
        </div>
      </div>

      <style jsx global>{`
        p,
        li {
          line-height: 1.7;
        }

        h1,
        h2 {
          margin-top: 40px;
          padding-bottom: 7px;
          border-bottom: 1px solid #eee;
        }
        h1,
        h2,
        ,
        h3,
        h4,
        h5,
        h6 {
          margin: 0px;
          padding: 0px;
        }
        h1 > a,
        h2 > a,
        h3 > a,
        h4 > a,
        h5 > a,
        h6 > a {
          text-decoration: none;
        }
        hr {
          margin: 20px 0px;
          opacity: 0.35;
        }
        h1 {
          padding-top: 30px;
          padding-bottom: 10px;
          margin-top: 30px;
          margin-bottom: 30px;
        }
        h2 {
          padding-top: 25px;
          padding-bottom: 10px;
          margin-top: 25px;
          margin-bottom: 25px;
        }
        h3 {
          padding-top: 20px;
          padding-bottom: 10px;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        h4 {
          padding-top: 15px;
          padding-bottom: 10px;
          margin-top: 15px;
          margin-bottom: 15px;
        }
        h5 {
          padding-top: 10px;
          padding-bottom: 10px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        h6 {
          padding-top: 5px;
          padding-bottom: 10px;
          margin-top: 5px;
          margin-bottom: 5px;
        }
        p {
          padding: 10px 0px;
          margin: 10px 0px;
        }
        li {
          margin: 0px 0px;
        }
        img {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0px 4px 30px #00000040;
        }
      `}</style>
    </div>
  );
};

export const MarkdownPage: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  return (
    <BlogPage post={post}>
      <Markdown source={post.content || '## 404 Not Found'} />
    </BlogPage>
  );
};
export default BlogPage;
