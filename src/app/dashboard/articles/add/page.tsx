'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ReloadIcon } from "@radix-ui/react-icons"

export default function Page() {
  const [formData, setFormData] = useState({ title: '', body: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const { title, body } = formData;

    if (!title.trim() || !body.trim()) {
      setError('Please fill in all fields!');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      });

      if (!response.ok) {
        throw new Error('Failed to save data to the database');
      }

      setFormData({ title: '', body: '' });

    } catch (err: any) {
      setError(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 space-y-4">
      <Card className="w-[400px]">
        <CardContent className="p-6 space-y-4">
          <Input
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit();
            }}
          />
          <Textarea
            placeholder="Body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            className="min-h-[100px]"
          />

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
