import React, { useState, useEffect } from 'react';
import './App.css';
import { Posts } from './assets/Posts';

function BlogPost({ post }) {
  return (
    <article className="flex flex-col items-start justify-between max-w-xl">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.datetime} className="text-gray-500">
          {post.date}
        </time>
        <a
          href={post.category.href}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {post.category.title}
        </a>
      </div>
      <div className="group relative mt-3">
        <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={post.href}>
            <span className="absolute inset-0" />
            {post.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={post.author.href}>
              <span className="absolute inset-0" />
              {post.author.name}
            </a>
          </p>
          <p className="text-gray-600">{post.author.role}</p>
        </div>
      </div>
    </article>
  );
}