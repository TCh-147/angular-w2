import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public index = 0;
  public score = 0;

  public bookStyle;
  public rateOverStyle;
  public rateStart;
  
  public bookCollection = [
    {
      title: 'Harry Potter and the Philosopher\'s Stone',
      summary: 'The book is about 11 year old Harry Potter, who receives a letter saying that he is invited to attend Hogwarts, school of witchcraft and wizardry. He then learns that a powerful wizard and his minions are after the sorcerer’s stone that will make this evil wizard immortal and undefeatable. Harry decides to go after the sorcerer’s stone before the wizard reaches it, but his loyal friends, Hermione and Ron don’t let Harry face this danger alone.',
      author: 'J.K Rowling',
      rating: 5
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      summary: 'Harry Potter and the Chamber of Secrets begins when Harry is spending a miserable summer with his only remaining family, the Dursleys. During a dinner party hosted by his uncle and aunt, Harry is visited by Dobby, a house-elf. Dobby warns Harry not to return to Hogwarts, the magical school for wizards that Harry attended the previous year. Harry politely disregards the warning, and Dobby wreaks havoc in the kitchen, infuriating the Dursleys. The Dursleys angrily imprison Harry in his room for the rest of the summer. Luckily, Harry\'s friend Ron Weasley steals Harry away in a flying car, and Harry happily spends the rest of the summer at the Weasley home.',
      author: 'J.K Rowling',
      rating: 5
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      summary: 'Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and is the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort\'s old allies.',
      author: 'J.K Rowling',
      rating: 5
    },
    {
      title: 'Harry Potter and the Goblet of Fire',
      summary: 'The story begins fifty years before the present day, with a description of how the Riddle family was mysteriously killed at supper, and their groundsman, Frank Bryce, was suspected of the crime, then declared innocent. Frank Bryce, now an elderly man, wakes in the night to see a light in the window of the abandoned Riddle House. He investigates and overhears Voldemort and Wormtail plotting to kill a boy named Harry Potter. Voldemort takes note of him and kills him on the spot. Harry Potter wakes up in the night with a throbbing pain in the scar Voldemort gave him. He worries that Voldemort is nearby, and he writes to Sirius Black, his godfather, mentioning the pain in his scar.',
      author: 'J.K Rowling',
      rating: 5
    },
    {
      title: 'Harry Potter and the Order of the Phoenix',
      summary: 'Harry Potter is spending another tedious summer with his dreadful Aunt Petunia and Uncle Vernon when a group of evil spirits called “dementors” stage an unexpected attack on Harry and his cousin Dudley. After using magic to defend himself, Harry is visited by a group of wizards and whisked off to number twelve, Grimmauld Place, London. Number twelve is the home of Harry’s godfather, Sirius Black, and the headquarters of the Order of the Phoenix. The Order is a group of wizards, led by Hogwarts headmaster Albus Dumbledore, dedicated to fighting evil Lord Voldemort and his followers. The Order is forced to operate in secrecy, outside of the jurisdiction of the Ministry of Magic, which is headed by the dense and corrupt Cornelius Fudge. Fudge refuses to believe that Lord Voldemort has returned.',
      author: 'J.K Rowling',
      rating: 5
    },
    {
      title: 'Harry Potter and the Half-Blood Prince',
      summary: 'Lord Voldemort has returned to power, and his wrath has been felt in both the Muggle and Wizarding worlds. Severus Snape, long considered an enemy of Voldemort and a member of Dumbledore’s anti-Voldemort coalition, the Order of the Phoenix, meets with Narcissa Malfoy, mother of Draco and wife of Lucius, an imprisoned Death Eater. Snape makes an Unbreakable Vow to Narcissa, promising to protect her son, Draco.',
      author: 'J.K Rowling',
      rating: 5
    },
    {
      title: 'Harry Potter and the Deathly Hallows',
      summary: 'At Malfoy Manor, Snape tells Voldemort the date that Harry’s friends are planning to move him from the house on Privet Drive to a new safe location, so that Voldemort can capture Harry en route. As Harry packs to leave Privet Drive, he reads two obituaries for Dumbledore, both of which make him think that he didn’t know Dumbledore as well as he should have. Downstairs, he bids good-bye to the Dursleys for the final time, as the threat of Voldemort forces them to go into hiding themselves.',
      author: 'J.K Rowling',
      rating: 5
    },
    {
      title: 'Caraval',
      summary: 'Scarlett has never left the tiny island where she and her beloved sister, Tella, live with their ruthless father.  Now Scarlett\'s has arranged a marriage for her, and Scarlett thinks her dreams of seeing Caraval, the legendary, once-a-year performance where the audience participates in the show, are over. But this year, Scarlett\'s long-dreamt-of invitation finally arrives.  With the help of a mysterious sailor who she has just met, Tella whisks Scarlett away to the show. Only, as soon as they arrive, Tella is kidnapped by Caraval\'s mastermind organizer, Legend.  It turns out that this season\'s Caraval revolves around Tella, and whoever finds her first is the winner.Scarlett has been told that everything that happens during Caraval is only an eleborate performance.  But she nevertheless becomes enmeshed in a game of love, heartbreak, and magic with the other players in the game.  And whether Caraval is real or not, she must find Tella before the five nights of the game are over, a dangerous domino effect of consequences is set off, and her sister disappears forever.  Welcome, welcome to Caraval......beware of getting swept too far away! ',
      author: 'Stephanie Garber',
      rating: 5
    },
    {
      title: 'The Great Gatsby',
      summary: 'Nick Carraway, a young man from Minnesota, moves to New York in the summer of 1922 to learn about the bond business. He rents a house in the West Egg district of Long Island, a wealthy but unfashionable area populated by the new rich, a group who have made their fortunes too recently to have established social connections and who are prone to garish displays of wealth. Nick’s next-door neighbor in West Egg is a mysterious man named Jay Gatsby, who lives in a gigantic Gothic mansion and throws extravagant parties every Saturday night.',
      author: 'F. Scott Fitzgerald',
      rating: 5
    }
  ];

  public modelTitle = this.bookCollection[this.index].title;
  public modelSummary = this.bookCollection[this.index].summary;
  public modelAuthor = this.bookCollection[this.index].author;


  public nextBook(){
    this.index++;

    if(this.index >= this.bookCollection.length){
      this.rateStart = document.getElementById("rateBooks");
      this.rateOverStyle = document.getElementById("rateOver");
      this.rateStart?.setAttribute("style", "display: none");
      this.rateOverStyle?.setAttribute("style", "display: block");
    }
    
  }

  public rating(score){

    this.bookCollection[this.index].title = this.modelTitle;
    this.bookCollection[this.index].summary = this.modelSummary;
    this.bookCollection[this.index].author = this.modelAuthor;
    
    this.score = (this.bookCollection[this.index].rating + score) / 2;
    this.bookCollection[this.index].rating = this.score;

    this.nextBook();
    this.resetTempData();

  }

  public resetTempData(){

    this.modelTitle = this.bookCollection[this.index].title;
    this.modelSummary = this.bookCollection[this.index].summary;
    this.modelAuthor = this.bookCollection[this.index].author;

  }

  public consoleLog(){

    console.log('index: ', this.index);
    console.log('Title: ', this.bookCollection[this.index].title);
    console.log('Summary: ', this.bookCollection[this.index].summary);
    console.log('Author: ', this.bookCollection[this.index].author);

  }

  public displayBook(){
    this.bookStyle = document.getElementById("book");
    this.bookStyle.setAttribute("style", "display: block");
    this.rateOverStyle = document.getElementById("rateOver");
    this.rateOverStyle?.setAttribute("style", "display: none");
  }

  public rateAgain(){

    this.index = 0;

    this.rateStart = document.getElementById("rateBooks");
    this.rateStart?.setAttribute("style", "display: block");
    this.rateOverStyle = document.getElementById("rateOver");
    this.rateOverStyle?.setAttribute("style", "display: none");

  }
  

}
