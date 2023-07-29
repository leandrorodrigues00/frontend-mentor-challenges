"use client";

import { useRef } from "react";

import { CommentConfig } from "@/types";
import { useStore } from "@/store";

function StoreInitializer({ comments }: { comments: CommentConfig[] }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({ comments });
    initialized.current = true;
  }
  return null;
}

export default StoreInitializer;
