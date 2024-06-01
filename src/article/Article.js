import './Article.css';
import umbrella from './weather.png';

function Article({ id, title, author, category, publication_date }) {
    return (
        <a href={`article.html?id=${id}`}>
            <article>
                <h3>{title}</h3>
                <span>{author}, <time>{publication_date}</time></span>
                <p>{category}</p>
                <img src={umbrella} alt="weather" className="small-image" />
            </article>
        </a>
    );
}

export default Article;
