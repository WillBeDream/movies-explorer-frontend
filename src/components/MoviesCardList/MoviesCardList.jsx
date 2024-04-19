import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MoviesCardList({ movies, saveMovies, handleMovieLike, handleDeleteMovie, isLoadingMovies, errorNoMovie, errorNoSavedMovie, errorMoviesFirst }) {
  const { pathname } = useLocation()
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [isButtonOn, setIsButtonOn] = useState(false);
  
  const getCardsCount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1171) {
      return 16;
    } else if (screenWidth >= 901) {
      return 12;
    } else if (screenWidth >= 751) {
      return 8;
    } else if (screenWidth >= 481) {
      return 4;
    } else {
      return 5;
    }
  };
 
  const сount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1171) {
      return 4;
    } else if (screenWidth >= 901) {
      return 3;
    } else if (screenWidth >= 751) {
      return 2;
    } else if (screenWidth >= 481) {
      return 1;
    } else {
      return 2;
    }
  };

  useEffect(() => {
    if (pathname === '/movies') {
      setVisibleMovies(movies.slice(0, getCardsCount(window.innerWidth)));
      setIsButtonOn(movies.length > getCardsCount(window.innerWidth));
      window.addEventListener('resize', function() {
        setVisibleMovies(movies.slice(0, getCardsCount(window.innerWidth)));
        setIsButtonOn(movies.length > getCardsCount(window.innerWidth));
      });
    }
  }, [movies, pathname]);
 
  const handleShowMore = () => {
    setVisibleMovies(prevVisibleMovies => [
      ...prevVisibleMovies,
      ...movies.slice(prevVisibleMovies.length, prevVisibleMovies.length + сount())
    ]);

    if (visibleMovies.length +сount() >= movies.length) {
      setIsButtonOn(false);
    }
  };

  return (
    <>
      <section className="elements" aria-label="видеофильм">
        <ul className="element">
          {isLoadingMovies ? <Preloader /> :
            (pathname === '/movies' && movies.length !== 0) ?
            visibleMovies.map(data => {
                return (
                  <MoviesCard 
                    data={data}
                    src={`https://api.nomoreparties.co${data.image.url}`}
                    handleMovieLike={handleMovieLike}
                    saveMovies={saveMovies}
                    key={data.id}
                  />
                )             
            }) : movies.length !== 0 ?
                  movies.map(data => {
                    return (
                      <MoviesCard 
                        data={data}
                        src={data.image}
                        handleDeleteMovie={handleDeleteMovie}
                        key={data._id}
                      />
                    )  
                  }) : errorMoviesFirst ?
                        <span className="element__error">Во время запроса произошла ошибка. Возможно, проблема с 
                        соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
                     : errorNoSavedMovie ? 
                        <span className='element__error'>Нет сохраненных фильмов</span>
                     : errorNoMovie ?
                        <span className='element__error'>Ничего не найдено</span>
                     :  <span className='element__error'></span>
          } 
        </ul>
        {isButtonOn && pathname === '/movies' && <button className="elements__more" type="button" name="more" onClick={handleShowMore}>Ещё</button>}
      </section>
    </>
  )
}

export default MoviesCardList;

