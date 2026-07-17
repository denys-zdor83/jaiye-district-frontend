"use client";

import { useState } from "react";

export function usePagination<T>(items: T[], perPage: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / perPage);
  const pageItems = items.slice((currentPage - 1) * perPage, currentPage * perPage);

  function goToPage(page: number) {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  }

  return { currentPage, totalPages, pageItems, goToPage };
}
