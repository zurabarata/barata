import {useEffect, useState} from "react";
import {fetchQuote} from "../utils/fetchQuote";


export const useFetchRandomRuotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
            setIsLoading(true);
            fetchQuote().then((data) => {
                setQuote(data.content);
                setAuthor(data.author);
            });
            setIsLoading(false);
        }
        , []);


    const quoteWithAuthor = quote + "\n\n - " + author;

    const refetchQuote = () => {
        setIsLoading(true);
        fetchQuote().then((data) => {
            setQuote(data.content);
            setAuthor(data.author);
        });
        setIsLoading(false);
    }

    return {quote, author, quoteWithAuthor, isLoading, refetchQuote};
}
