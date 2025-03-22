import { useEffect, useState } from "react";
import { Post, User } from "@/types/types";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [newuser, setNewuser] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [usersRes, postsRes, newuserRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("http://localhost:3001/posts"),
        ]);

        if (!usersRes.ok) throw new Error(`Failed to fetch users: ${usersRes.status}`);
        if (!postsRes.ok) throw new Error(`Failed to fetch posts: ${postsRes.status}`);
        if (!newuserRes.ok) throw new Error(`Failed to fetch newuser posts: ${newuserRes.status}`);

        const usersData: User[] = await usersRes.json();
        const postsData: Post[] = await postsRes.json();
        const newuserData: Post[] = await newuserRes.json();

        setUsers(usersData);
        setPosts(postsData);
        setNewuser(newuserData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, users, newuser, loading, error };
}
