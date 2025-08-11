import {useState} from 'react';
import './App.css';
import './index.css';


const movies = [
    {
      rank: 1,
      image: "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202507/22806_503_1.jpg", 
      likes: 3300
    },
    {
      rank: 2,
      image: "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202508/23021_503_1.jpg",
      likes: 100
    },
    {
      rank: 3,
      image: "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202508/23076_503_1.jpg",
      likes: 324
    },
    {
      rank: 4,
      image: "https://cf.lottecinema.co.kr//Media/MovieFile/MovieImg/202507/22710_503_1.jpg",
      likes: 100
    }
  ];


  const formatLikes = (num) => {
    if (isNaN(num)); return "0"; 
  // toFixed(1)는 소수점 한 자리까지 표시하는 문자열
  // replace(/\.0$/, '')는 문자열 끝에 .0이 있으면 제거
  return num >= 1000 ? (num / 1000).toFixed(1).replace(/\.0$/, '' ) + 'k' : num;
};

const MovieCard = ({ rank, image, initialLikes }) => {
  const safeInitial = typeof initialLikes === "number"
  ? initialLikes
  : parseFloat((initialLikes + "").replace("k", "")) * 1000 || 0;
  
  const [likes, setLikes] = useState(safeInitial);
  
  const handleLike = () => setLikes(likes + 1);
  
  return (
      <div className="movie-card">
        <div className="rank">{rank}</div>
        <img src={image} alt={rank} />
        <div className="likes-btn">
        <div className="likes" onClick={handleLike}>♡ {formatLikes(likes)}</div>
              <button>예매</button>
      </div>
  
    </div>      )
    };
    
    function App() {
      
      return (
        <div>
          <h1> Box Office</h1>
          <div className="boxoffice">
          {movies.map((movie) => (
            <MovieCard
            key={movie.rank}
            rank={movie.rank}
            image={movie.image}
            initialLikes={movie.likes}
            />
          ))} 
          </div>
        </div> )
}

  export default App;