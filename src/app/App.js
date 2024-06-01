import './App.css';
import Article from '../article/Article';
import articles from '../data/db.json';
import { useState } from 'react';

function App() {
    const [articlesList, setArticleList] = useState(articles);
    console.log(articlesList);
    
    var i = 1;
    console.log(i);
    i += 1;
    console.log(i);

    const addArticle = () => {
        const article = {
            id: 3,
            title: "Wowwww! amazing!!!!",
            author: "aaa bbb",
            category: "Guess",
            publication_date: "2024-01-12"
        };
        setArticleList([...articlesList, article]);
    };

    return (
        <div className="App">
            <button onClick={addArticle}>Add</button>
            {articlesList.map((article) => (
                <Article key={article.id} {...article} />
            ))}
        </div>
    );
}

export default App;
