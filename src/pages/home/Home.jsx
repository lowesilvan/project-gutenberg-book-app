import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/BooksReducer/bookSlice";
import { Loading } from "../../components/loading/Loading"
import ConnectionError from "../../components/Error/ConnectionError";
import BookList from "../../components/bookList/BookList";
import { Container } from "@chakra-ui/react";

const Home = () => {
  const dispatch = useDispatch();

  // booklist states from redux createAsyncThunk
  const { books, loading, error} = useSelector((state) => state.library);

  // fetch booklist and watch the dispatch
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  if (loading) return <Loading />;
  return (
    <Container maxW={1000}>
      {/* <Header /> */}
      <div>
        {books.results && <BookList books={books} />}
        {error && <ConnectionError error={error} />}
      </div>
    </Container>
  );
};

export default Home;
