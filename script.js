let BOOKS = [
    {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
    },
    {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }
]

class Book {
    constructor(title,author, read) {
        this.title = title;
        this.author = author;
        this.read = read
    }

    Display() {
        let container = document.createElement('div')
        let title = document.createElement('h1');
        let author = document.createElement('p');
        title.textContent = this.title;
        author.textContent = this.author;
        container.append(title,author);
        document.body.append(container);
        if (this.read === true) container.style.opacity = '.5' 
    }
}

BOOKS.forEach(ele => {
    let p = new Book(ele.title,ele.author,ele.alreadyRead)
    p.Display()
})