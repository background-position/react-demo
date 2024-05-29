import React, { useState, useEffect } from 'react'
import { PropsWithChildren } from 'react'
const PostTitle = ({ title }: { title: string }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
    </>
  )
}
const PostBody = ({ body }: { body: string }) => {
  return (
    <>
      <article>
        <p>{body}</p>
      </article>
    </>
  )
}
const Post = ({ title, body }: { title: string; body: string }) => {
  return (
    <>
      <PostTitle title={title} />
      <PostBody body={body} />
    </>
  )
}
const App = () => {
  const postList = [
    { title: 'Title 1', body: 'Body 1' },
    { title: 'Title 2', body: 'Body 2' }
  ]
  return (
    <>
      {postList.map((post, index) => {
        return (
          <div key={index}>
            <Post title={post.title} body={post.body} />
          </div>
        )
      })}
    </>
  )
}

export default App
