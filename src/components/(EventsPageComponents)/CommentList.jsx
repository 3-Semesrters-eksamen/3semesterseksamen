"use client";
import { useState } from "react";

const inputBase = "w-full bg-transparent border border-white/15 rounded-sm text-white text-sm tracking-wider px-4 py-4 outline-none transition-colors duration-200 placeholder-white/30 focus:border-[#e8003a]";
const inputErr = "w-full bg-transparent border border-red-600 rounded-sm text-white text-sm tracking-wider px-4 py-4 outline-none transition-colors duration-200 placeholder-white/30";

export default function CommentList({ initialComments, apiUrl }) {
  const [comments, setComments] = useState(initialComments);
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [editError, setEditError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const startEdit = (comment) => {
    setEditingId(comment.id);
    setEditContent(comment.content);
    setEditError("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditContent("");
    setEditError("");
  };

  const saveEdit = async (id) => {
    if (!editContent.trim()) {
      setEditError("Comment cannot be empty");
      return;
    }
    if (editContent.trim().length < 5) {
      setEditError("Comment must be at least 5 characters");
      return;
    }

    setIsSaving(true);
    try {
      const res = await fetch(`${apiUrl}/comments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: editContent }),
      });
      if (res.ok) {
        setComments((prev) => prev.map((c) => (c.id === id ? { ...c, content: editContent } : c)));
        cancelEdit();
      } else {
        setEditError("Something went wrong. Please try again.");
      }
    } catch {
      setEditError("Something went wrong. Please try again.");
    }
    setIsSaving(false);
  };

  const deleteComment = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/comments/${id}`, { method: "DELETE" });
      if (res.ok) {
        setComments((prev) => prev.filter((c) => c.id !== id));
        if (editingId === id) cancelEdit();
      }
    } catch {}
  };

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-widest mb-8">{comments.length} COMMENTS</h2>

      {comments.length === 0 && <p className="text-gray-500 text-sm">Ingen kommentarer endnu.</p>}

      {comments.map((comment) => (
        <div key={comment.id} className="border-b border-gray-800 py-6">
          {editingId === comment.id ? (
            <div className="flex flex-col gap-3">
              <p className="text-white font-bold text-sm">{comment.name}</p>

              <div className="flex flex-col gap-1">
                <textarea
                  value={editContent}
                  onChange={(e) => {
                    setEditContent(e.target.value);
                    setEditError("");
                  }}
                  className={`${editError ? inputErr : inputBase} resize-y min-h-32`}
                />
                {editError && (
                  <span className="text-red-400 text-[11px]" role="alert">
                    {editError}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <button onClick={() => deleteComment(comment.id)} className="text-[0.75rem] tracking-[0.14em] text-gray-500 hover:text-red-500 transition-colors duration-200 uppercase">
                  DELETE COMMENT
                </button>

                <div className="flex gap-6">
                  <button onClick={cancelEdit} className="text-[0.75rem] tracking-[0.14em] text-gray-500 hover:text-white transition-colors duration-200 uppercase">
                    CANCEL
                  </button>
                  <button onClick={() => saveEdit(comment.id)} disabled={isSaving} className="relative text-[0.82rem] font-bold tracking-[0.14em] text-white hover:text-[#e8003a] transition-colors duration-200 uppercase disabled:opacity-50 group">
                    {isSaving ? "SAVING..." : "SAVE"}
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-white/40 transition-colors duration-200 group-hover:bg-[#e8003a]" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-start justify-between gap-4">
                <p className="text-white font-bold mb-1">
                  {comment.name}
                  <span className="text-pink-500 font-normal text-xs ml-2">Posted {new Date(comment.date).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}</span>
                </p>
                <button onClick={() => startEdit(comment)} className="text-[0.7rem] tracking-[0.14em] text-gray-500 hover:text-[#e8003a] transition-colors duration-200 uppercase shrink-0">
                  EDIT
                </button>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{comment.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
