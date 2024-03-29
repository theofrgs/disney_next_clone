"use client";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { term: string };
};
function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);
  // API call to get the movies
  return <div>Welcome to the search page: {term}</div>;
}

export default SearchPage;
