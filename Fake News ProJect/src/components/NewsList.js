import React from "react";
import NewsItem from "./NewsItem";

class NewsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="banner-box-outer">
          <div id="banner-overlay">
            <h1>Breaking News!</h1>
            <p>Mon President Paul Biya annonce sa candidature à l'élection présidentielle de 2025​.</p>
          </div>
          <img
            id="banner"
            src="https://source.unsplash.com/random"
            height="300"
            width="500"
            alt="a random banner from unsplash.com"
          />
        </div>

        <div id="banner-description">
          <p>
            Le président camerounais, Paul Biya,
          âgé de 92 ans et en poste depuis 1982, 
          a officiellement déclaré sa candidature pour l'élection présidentielle prévue en octobre 2025.
          Cette annonce intervient alors que plusieurs figures politiques et chefs traditionnels expriment leur soutien à une nouvelle candidature de Paul Biya, 
          malgré son âge avancé.
          </p>
        </div>
        <h1 id='news-list-container-title'>Hot Stories of the Day</h1>
        <section id="news-list-container-inner">
          {this.props.articles.map((article) => (
            <NewsItem articles={article} key={article.id} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default NewsList;
