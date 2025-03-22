import React from 'react';
import axios from 'axios';
import { Post } from '@/types/post';
import AddArticle from '@/components/AddArticle';

export default async function ArticlesPage() {
  const { data: posts } = await axios.get<Post[]>(
    'http://localhost:3001/posts',
  );

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Latest Articles
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Explore our collection of insightful articles and stay updated
              with the latest trends.
            </p>
          </div>
          <AddArticle />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {posts.map((post: Post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <button className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
