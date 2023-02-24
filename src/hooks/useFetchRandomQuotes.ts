import { useEffect, useState } from "react";
import { fetchQuote } from "../utils/fetchQuote";

export const useFetchRandomQuotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchQuote().then((data) => {
      setQuote(data.content);
      setAuthor(data.author);
    });
    setIsLoading(false);
  }, []);

  const quoteWithAuthor = `\"${quote}\" - ${author}`;

  const refetchQuote = () => {
    setIsLoading(true);
    fetchQuote().then((data) => {
      setQuote(data.content);
      setAuthor(data.author);
    });
    setIsLoading(false);
  };

  return { quoteWithAuthor, isLoading, refetchQuote };
};
