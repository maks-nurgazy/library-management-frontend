import Book from "./Book";
import './Books.css';
import {useState} from "react";

export default function Books() {

    const [books, setBooks] = useState([
        {
            "id": 2,
            "title": "Delbirim",
            "summary": "Klara and the Sun, the first novel by Kazuo Ishiguro since he was awarded the Nobel Prize in Literature, tells the story of Klara, an Artificial Friend with outstanding observational qualities, who, from her place in the store, watches carefully the behavior of those who come in to browse, and of those who pass on the street outside. She remains hopeful a customer will soon choose her.\r\nKlara and the Sun is a thrilling book that offers a look at our changing world through the eyes of an unforgettable narrator, and one that explores the fundamental question: what does it mean to love?",
            "isbn": "1-59017-194-3",
            "book_author": "Chyngyz Aitmatov",
            "publish_date": 1961,
            "book_format": "Paper",
            'image': 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg'
        },
        {
            "id": 5,
            "title": "Hamlet",
            "summary": "Among Shakespeare's plays, \"Hamlet\" is considered by many his masterpiece. Among actors, the role of Hamlet, Prince of Denmark, is considered the jewel in the crown of a triumphant theatrical career. Now Kenneth Branagh plays the leading role and co-directs a brillant ensemble performance. Three generations of legendary leading actors, many of whom first assembled for the Oscar-winning film \"Henry V\", gather here to perform the rarely heard complete version of the play. This clear, subtly nuanced, stunning dramatization, presented by The Renaissance Theatre Company in association with \"Bbc\" Broadcasting, features such luminaries as Sir John Gielgud, Derek Jacobi, Emma Thompson and Christopher Ravenscroft. It combines a full cast with stirring music and sound effects to bring this magnificent Shakespearen classic vividly to life. Revealing new riches with each listening, this production of \"Hamlet\" is an invaluable aid for students, teachers and all true lovers of Shakespeare - a recording to be treasured for decades to come",
            "isbn": "1-59017-194-5",
            "book_author": "William Shakespeare",
            "publish_date": 1767,
            "book_format": "Paper",
            'image': 'https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/40/2020/08/31160044/st_pauls_architecture_lg-444x444.jpg?ver=200831210219'
        },
        {
            "id": 1,
            "title": "Jamila",
            "summary": "The son of a struggling single mother, Jamie Conklin just wants an ordinary childhood. But Jamie is no ordinary child. Born with an unnatural ability his mom urges him to keep secret, Jamie can see what no one else can see and learn what no one else can learn. But the cost of using this ability is higher than Jamie can imagine - as he discovers when an NYPD detective draws him into the pursuit of a killer who has threatened to strike from beyond the grave",
            "isbn": "1-59017-194-2",
            "book_author": "Chyngyz Aitmatov",
            "publish_date": 1957,
            "book_format": "Paper",
            'image': 'https://secure.syndetics.com/index.aspx?isbn=9781335628794/MC.GIF&client=sntpapl&type=xw12&oclc='
        },
        {
            "id": 3,
            "title": "Jaralangan jurok",
            "summary": "It's the summer of 1996 and school's out forever for Andy, her boyfriend Marcus, her best friend Peter, and Em. When Andy's alcoholic mother predicts the apocalypse, the four teenagers decide to see out the end of the world at a deserted manor house, the site of a historic unsolved mystery. There they meet David�charming and unreliable, he seems to have appeared out of nowhere.\r\nDavid presents an irresistible lure for both Andy and Peter and complicates the dynamics of their lifelong friendship.",
            "isbn": "1-59017-194-4",
            "book_author": "Aaly Tokombaev",
            "publish_date": 1974,
            "book_format": "Paper",
            'image': 'https://secure.syndetics.com/index.aspx?isbn=9780756411817/MC.GIF&client=sntpapl&type=xw12&oclc='
        },
        {
            "id": 8,
            "title": "Julius Caesar",
            "summary": "The Oxford School Shakespeare has become the preferred introduction to the literary legacy of the greatest playwright in the English language. This exclusive collection of the Bard's best works has been designed specifically for readers new to Shakespeare's rich literary legacy. Each play is presented complete and unabridged, in large print. Every book is well illustrated",
            "isbn": "2-59017-194-4",
            "book_author": "Kobo Abe",
            "publish_date": 2010,
            "book_format": "Paper",
            'image': 'https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/40/2020/08/31160044/st_pauls_architecture_lg-444x444.jpg?ver=200831210219'

        },
        {
            "id": 7,
            "title": "King Lear",
            "summary": "King Lear challenges us with the magnitude, intensity, and sheer duration of the pain that it represents. Its figures harden their hearts, engage in violence, or try to alleviate the suffering of others. Lear himself rages until his sanity cracks. What, then, keeps bringing us back to King Lear? For all the force of its language, King Lear is almost equally powerful when translated, suggesting that it is the story, in large part, that draws us to the play.\r\n\r\nThe play tells us about families struggling between greed and cruelty, on the one hand, and support and consolation, on the other. Emotions are extreme, magnified to gigantic proportions. We also see old age portrayed in all its vulnerability, pride, and, perhaps, wisdom�one reason this most devastating of Shakespeare�s tragedies is also perhaps his most moving",
            "isbn": "2-59017-194-3",
            "book_author": "Mahmud Kashkari",
            "publish_date": 1876,
            "book_format": "Paper",
            'image': 'https://secure.syndetics.com/index.aspx?isbn=9781335628794/MC.GIF&client=sntpapl&type=xw12&oclc='
        },
        {
            "id": 6,
            "title": "Romeo and Juliet",
            "summary": "In Romeo and Juliet, Shakespeare creates a violent world, in which two young people fall in love. It is not simply that their families disapprove; the Montagues and the Capulets are engaged in a blood feud.\r\n\r\nIn this death-filled setting, the movement from love at first sight to the lovers� final union in death seems almost inevitable. And yet, this play set in an extraordinary world has become the quintessential story of young love. In part because of its exquisite language, it is easy to respond as if it were about all young lovers",
            "isbn": "1-59017-194-9",
            "book_author": "William Shakespeare",
            "publish_date": 1788,
            "book_format": "Paper",
            'image': 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg'

        },
        {
            "id": 9,
            "title": "The Great Gatsby",
            "summary": "In the spring of 1922, Nick takes a house in the fictional village of West Egg on Long Island, where he finds himself living among the colossal mansions of the newly rich. Across the water in the more refined village of East Egg live his cousin Daisy and her brutish, absurdly wealthy husband Tom Buchanan. Early in the summer Nick goes over to their house for dinner, where he also meets Jordan Baker, a friend of Daisy�s and a well-known golf champion, who tells him that Tom has a mistress in New York City",
            "isbn": "9780743273565",
            "book_author": "Francis Scott Fitzgerald",
            "publish_date": 2010,
            "book_format": "PDF",
            'image': 'https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/40/2020/08/31160044/st_pauls_architecture_lg-444x444.jpg?ver=200831210219'

        },
        {
            "id": 4,
            "title": "The Murder of Roger Ackroyd",
            "summary": "In King's Abbot, wealthy widow Mrs Ferrars unexpectedly commits suicide, which distresses her fianc� widower Roger Ackroyd. At dinner that evening in Ackroyd's home of Fernly Park, his guests include his sister-in-law Mrs Cecil Ackroyd and her daughter Flora, big-game hunter Major Blunt, Ackroyd's personal secretary Geoffrey Raymond, and Dr James Sheppard, whom Ackroyd invited earlier that day. During dinner, Flora announces her engagement to Ackroyd's stepson, Ralph Paton. After dinner, Ackroyd reveals to Sheppard in his study that Mrs Ferrars had confided in him that she was being blackmailed over the murder of her husband.",
            "isbn": "0-14-118727-1",
            "book_author": "Agatha Christie",
            "publish_date": 2013,
            "book_format": "Paper",
            'image': 'https://secure.syndetics.com/index.aspx?isbn=9781335628794/MC.GIF&client=sntpapl&type=xw12&oclc='
        }
    ]);

    return (
        <div className='grid-container'>
            {
                books.map(book => {
                    return <Book key={book.id} book={book}/>
                })
            }
        </div>
    )
}