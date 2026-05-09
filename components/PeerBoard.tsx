"use client";

import { FormEvent, useEffect, useState } from "react";
import { getStoredBoardPosts, setStoredBoardPosts } from "@/lib/progress";
import { BoardPost } from "@/types";

export function PeerBoard() {
  const [description, setDescription] = useState("");
  const [commentDrafts, setCommentDrafts] = useState<Record<string, string>>({});
  const [posts, setPosts] = useState<BoardPost[]>([]);

  useEffect(() => {
    setPosts(getStoredBoardPosts());
  }, []);

  useEffect(() => {
    setStoredBoardPosts(posts);
  }, [posts]);

  const addPost = (event: FormEvent) => {
    event.preventDefault();
    if (!description.trim()) return;

    setPosts((prev) => [
      {
        id: crypto.randomUUID(),
        description: description.trim(),
        createdAt: new Date().toISOString(),
        comments: []
      },
      ...prev
    ]);
    setDescription("");
  };

  const addComment = (postId: string) => {
    const text = commentDrafts[postId]?.trim();
    if (!text) return;

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, { id: crypto.randomUUID(), text, createdAt: new Date().toISOString() }]
            }
          : post
      )
    );

    setCommentDrafts((prev) => ({ ...prev, [postId]: "" }));
  };

  return (
    <section className="editorial-card p-6 space-y-6" aria-labelledby="peer-board-heading">
      <div>
        <h3 id="peer-board-heading" className="text-2xl text-[#0F1F3D]">
          Peer Feedback Callout
        </h3>
        <p className="text-slate-700 mt-2">Share your project, then support classmates with specific, constructive comments.</p>
      </div>

      <form onSubmit={addPost} className="space-y-3" aria-label="Submit project to class board">
        <label htmlFor="peer-board-description" className="sr-only">
          Project description for the class board
        </label>
        <textarea
          id="peer-board-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Paste a short description of your project..."
          className="w-full min-h-28 rounded-xl border border-slate-300 p-3 bg-white text-[#0F1F3D]"
        />
        <button type="submit" className="rounded-full bg-[#F5A623] px-4 py-2 font-semibold text-[#0F1F3D]">
          Submit to class board
        </button>
      </form>

      <div className="grid gap-4 md:grid-cols-2" role="list">
        {posts.map((post) => (
          <article key={post.id} className="border border-slate-200 rounded-xl p-4 bg-white space-y-3" role="listitem">
            <p className="text-slate-800">{post.description}</p>
            <div className="space-y-2" aria-label="Comments on this post">
              {post.comments.map((comment) => (
                <p key={comment.id} className="text-sm bg-slate-100 rounded-lg px-3 py-2 text-slate-800">
                  {comment.text}
                </p>
              ))}
            </div>
            <div className="flex gap-2">
              <label htmlFor={`comment-${post.id}`} className="sr-only">
                Comment on this project
              </label>
              <input
                id={`comment-${post.id}`}
                value={commentDrafts[post.id] ?? ""}
                onChange={(event) => setCommentDrafts((prev) => ({ ...prev, [post.id]: event.target.value }))}
                placeholder="Leave a constructive comment"
                className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#0F1F3D]"
              />
              <button
                onClick={() => addComment(post.id)}
                type="button"
                className="px-3 py-2 rounded-lg bg-[#0F1F3D] text-white text-sm shrink-0"
              >
                Comment
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
