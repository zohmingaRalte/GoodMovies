import React, { useState } from "react";
import "./styles.css";

const moviesDB = {
  Action: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/89/Extraction_%282020_film%29.png",
      about:
        "A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord. But in the murky underworld of weapons dealers and drug traffickers, an already deadly mission approaches the impossible.",
      name: "Extraction (2020)",
      rating: "9/10"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
      about:
        "Bad Boys for Life is a 2020 American action comedy film that is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys trilogy. Will Smith and Martin Lawrence reprise their starring roles in the film, which is directed by Adil & Bilall and written by Chris Bremner, Peter Craig and Joe Carnahan.",
      name: "Bad Boys For Life (2020)",
      rating: "8.5/10"
    },
    {
      image:
        "https://img.cinemablend.com/quill/b/a/6/1/f/3/ba61f36f8d92df895cbcbbaa9038274982e7fbf1.jpg",
      about:
        "Ray Garrison, an elite soldier killed in battle, is resurrected and given superhuman abilities. As he sets out to get revenge, he uncovers secrets about his life and the people supposedly helping him.",
      name: "Bloodshot (2020)",
      rating: "7/10"
    }
  ],

  Thriller: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
      about:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      name: "Parasite (2019)",
      rating: "8.6/10"
    },
    {
      image:
        "https://cps-static.rovicorp.com/2/Open/NBC_Universal_30/Program/33100953/_derived_jpg_q90_500x500_m0/US_N_VR.jpg",
      about:
        "Adelaide Wilson and her family are attacked by mysterious figures dressed in red. Upon closer inspection, the Wilsons realise that the intruders are exact lookalikes of them.",
      name: "Us (2019)",
      rating: "7.8/10"
    },
    {
      image:
        "https://i.pinimg.com/736x/9b/09/52/9b095255f0c031967dd262ced12723f9.jpg",
      about:
        "After 27 years, the Losers Club receive a call from their friend Mike Hanlon that Pennywise is back. They decide to honour their promise and return to their old town to end the evil clown for good.",
      name: "IT Chapter Two (2019)",
      rating: "7/10"
    }
  ],
  Romance: [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTh6K-oC8QWZbxcnekqj3-xkfY1Z6vsUcYQ&usqp=CAU",
      about:
        "Landon is assigned community service after getting in trouble. His punishment also involves participating in the spring play, during which he falls in love with Jamie, the reverend's daughter.",
      name: "A Walk To Remember (2002)",
      rating: "9.4/10"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgJqfhF2LvQd5JQy9XJL-_Ceq6rhLFzHmVw&usqp=CAU",
      about:
        "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from dementia, on a daily basis out of his notebook.",
      name: "The Notebook (2014)",
      rating: "9/10"
    },
    {
      image:
        "https://65.media.tumblr.com/ed76b0b17b8d489c61d0daa3fae7f262/tumblr_mydouiYnl31sfevmio2_1280.jpg",
      about:
        "Two cancer-afflicted teenagers Hazel and Augustus meet at a cancer support group. The two of them embark on a journey to visit a reclusive author in Amsterdam.",
      name: "The Fault in Our Stars (2014)",
      rating: "8.6/10"
    }
  ],
  Comedy: [
    {
      image:
        "https://static.wikia.nocookie.net/jumanji/images/1/1b/Jumanji_2017_Poster.jpg/revision/latest?cb=20181023182751",
      about:
        "When four students play with a magical video game, they are drawn to the jungle world of Jumanji, where they are trapped as their avatars. To return to the real world, they must finish the game.",
      name: "Jumanji: Welcome To the Jungle (2017)",
      rating: "8.5/10"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbfHe5QfHKCAFFeXc5dNokzALidHYTs4Ayg&usqp=CAU",
      about:
        "Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. Meanwhile, living next door to Rick is Sharon Tate and her husband Roman Polanski.",
      name: "Once Upon a Time in Hollywood (2019)",
      rating: "7/10"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyOF6vX2_InC1GfAPNH3RWFeoearlXqnKog&usqp=CAU",
      about:
        "Lifeguard Mitch Buchannon and his team discover a drug racket involving businesswoman Victoria Leeds and decide to unearth the truth and bring the perpetrators to justice.",
      name: "Baywatch (2017)",
      rating: "6.8/10"
    }
  ],
  SciFi: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/5b/GeminiManPoster.jpeg",
      about:
        "Henry is an ageing assassin who finds himself being chased by someone with the ability to predict his moves. He soon discovers that the person is his clone and sets out to discover his origin.",
      name: "Gemini Man (2019)",
      rating: "8.6/10"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJVFD5z6uvFLYTYJtRiYUNdusNarbqA8sVnw&usqp=CAU",
      about:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      name: "Inception (2010)",
      rating: "8/10"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuamNVcuwSnKuI-WAxhfK-swHTyynsDEfQpQ&usqp=CAU",
      about:
        "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
      name: "The Matrix (1999)",
      rating: "7.8/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");

  function clickGenreHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎬GoodMovies</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favourite movies. Select a genre to get started.
      </p>
      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button key={genre} onClick={() => clickGenreHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "2rem",
                border: "1px solid #D1D5DB",
                width: "500px",
                margin: "1rem auto",
                borderRadius: "0.5rem",
                height: "300px"
              }}
            >
              <div className="imageDiv">
                <img src={movie.image} />
              </div>
              <div className="about">{movie.about}</div>
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> ⭐{movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
