"use client";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { PostCard } from "@/components/ui/postcard";
import { UserInfo } from "@/components/ui/userinfo";
import { usePosts } from "@/hooks/usepost";
import { User } from "@/types/types";

export default function Page() {
  const { posts, users, newuser, loading, error } = usePosts();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleViewMore = (userId: number) => {
    const user = users.find((user) => user.id === userId) || null;
    setSelectedUser(user);
  };

  return (
    <>
      <div className="text-2xl text-center mb-6">Posts</div>
      <div className="flex flex-col items-center space-y-4">
        {loading && <ReloadIcon className="h-6 w-6 animate-spin" />}
        {error && <div className="text-red-500">{error}</div>}
        {posts.length === 0 && !loading && !error && <p className="text-gray-500">No posts available.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {[...posts, ...newuser].map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} onViewMore={() => handleViewMore(post.userId)} />
          ))}
        </div>

        {selectedUser && (
          <UserInfo
            name={selectedUser.name}
            email={selectedUser.email}
            phone={selectedUser.phone}
            website={selectedUser.website}
            company={selectedUser.company.name}
            catchPhrase={selectedUser.company.catchPhrase}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </div>
    </>
  );
}
