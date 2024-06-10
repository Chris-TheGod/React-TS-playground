import React from 'react';
import usePosts from './hooks/usePosts';

const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts({ pageSize });

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <ul className='list-group'>
        {posts?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.map((post) => (
              <li key={post.id} className='list-group-item'>
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        onClick={() => fetchNextPage()}
        className='btn btn-primary my-3 ms-1'
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading...' : 'Load more'}
      </button>
    </>
  );
};

export default PostList;
