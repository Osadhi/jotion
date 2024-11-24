"use client";

import { useCallback, useMemo } from "react";
import { useTheme } from "next-themes";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import { DefaultBlockSchema, defaultBlockSchema } from "@blocknote/core";
import "@blocknote/core/style.css";
import { useEdgeStore } from "@/lib/edgestore";
import { BlockNoteEditor } from "@blocknote/core";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable = true }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = useCallback(async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });
    return response.url;
  }, [edgestore]);

  const parsedContent = useMemo(() => {
    if (!initialContent) return undefined;
    try {
      return JSON.parse(initialContent);
    } catch {
      return undefined;
    }
  }, [initialContent]);

  const editor = useCreateBlockNote({
    initialContent: parsedContent,
    uploadFile: handleUpload,
    schema: defaultBlockSchema,
  });

  const handleChange = useCallback(() => {
    const saveData = JSON.stringify(editor.document, null, 2);
    onChange(saveData);
  }, [editor, onChange]);

  return (
    <div className="relative w-full">
      <BlockNoteView
        editor={editor}
        editable={editable}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={handleChange}
      />
    </div>
  );
};

export default Editor;
