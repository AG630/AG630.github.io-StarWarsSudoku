#  Documenting how I created a Sudoku game in HTML, CSS and JavaScript:

## Introduction

Welcome to the Star Wars themed Sudoku interactive website, where you can test your logic skills and enjoy the galaxy far, far away. Sudoku is a puzzle game that involves filling a 9x9 grid with numbers from 1 to 9, so that each row, column and 3x3 box contains every digit exactly once. On this website, you can choose from different levels of difficulty, from easy to hard,in the them of the original trilogy to the Mandalorian. Whether you are a fan of Jedi, Sith, rebels or bounty hunters, you will find something to challenge and entertain you on this website. May the Force be with you!

To learn and understand more web development tools in my personal journey coding software, I decided to be more hands on with creating apps and websites to help me understand core programming principles. HTML and CSS were easier to learn from reading content on how they worked, but I found that I'm a stronger learner with being proactive and doing more coding than video watching. I would recommend the same for anyone else reading, please don't get overwhelmed with all the videos out there!

With this idea in mind, I decided I wanted to prepare myself for a project hand in that I have in the coming months, by starting off with a Sudoku game project. I have to credit my girlfriend for the inspiration, as we were doing a lot of Sudoku's over the last few months, and I thought it could be a fun project to start off with.

## What was the aim for the user?

Sudoku is a logic-based puzzle game that involves filling a 9x9 grid with digits from 1 to 9. The grid is divided into nine 3x3 subgrids, and each subgrid, row, and column must contain all nine digits without repeating. To play sudoku, the user starts with a partially filled grid and tries to complete it by following the rules. The user can use various strategies to eliminate possible candidates for each cell, such as looking for naked singles, hidden singles, pointing pairs, box-line reduction, and more. The user can check their progress by counting how many digits are left in each subgrid, row, and column. The user wins the game when they fill the entire grid correctly.

The aim for this project was to create a working Sudoku game, that a user would play, solve and complete. The game is a logical 9*9 grid with digits, and the aim of the game is to fill in each row and column containing digital 1 through to 9. However players must fill in the lines vertically and horizontally within the grid, without repeating any numbers - https://en.wikipedia.org/wiki/Sudoku.




## The starting point

I knew which technologies I wanted to use for this project:

-HTML
-CSS
-JavaScript

The last one being the most important to learn, albeit refreshing my memory on HTML and CSS didn't hurt either. 

## The Layout and Design of the Homepage, and subsequent Sudoku pages

I decided to do some research on what makes a well designed website. There are hundreds sources anyone can use for this research, but I decided to follow the advice of an excellent UX Designer who I follow on Twitter - Vitaly Freidman. He wrote a post on how to create a well designed website: https://www.smashingmagazine.com/2008/01/10-principles-of-effective-web-design/.

Vitaly initially discusses the importance of the "usability and the utility" of a good web page, rather than the visual design of one. In hindsight, this would have been a really important lesson for my first project that I created, as I know that I did focus a lot around the visual aesthetics of that project. I decided I needed to create a webpage that runs well.

I started off by writing out my HTML code. The HTML5 specification encourages web developers to use UTF-8 character set as it covers more symbols than ASCII, ISO and ANSI.

The meta tag tag defines the character set, page description, keywords, the author of the content and viewport settings. To make the Sudoku game user-friendly, I coded the width of the page to follow the screen-width of the device and the initial zoom level for when the user opens the browser. (This information can be found at w3schools.com, they have in-depth details. I wanted to explain them as I was coding them, so that I could understand why they are there. It's easy to add these bits of code in and not really know why they are there and what they do so I took the liberty of being very in-depth on the details behind the decisions).

I then added the links to the JavaScript and CSS so that they would work when I started to code those in too.

### Design

To begin with, I had started designing the Sudoku pages with a peaceful, you could say meditative theme with calm colours and images such as "peacefull dock". The final design was peaceful and effective, but I wasn't satisfied with it because it was built entirely in HTML and CSS, which is fine as it gave a great refresher into those, but this project needed to be stronger with my JavaScript coding. So I took a topic that I personally love, and incorporated it into the fun of building a Sudoku, in a Star Wars theme. The initial inspiration I took was from https://github.com/autumnchris/tic-tac-toe-game. 

This star wars-style Tic Tac Toe uses a Star Wars theme font "https://use.fontawesome.com/releases/v5.0.8/css/all.css" as well as an API byt https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600.

The initial development of the Homepage largely uses elements from Autumn Chris' Tic-Tac-Toe, however, I have created a navigation bar and buttons to direct a Sudoku user to the "Easy", "Medium" and "Hard" pages. The buttons are using the fonts of the API's and onclick display blue outline.

The second part of the homepage is the blue on-screen writing that appears like the Star Wars movies. The inspiration behind this feature is by Christopher Kade - https://dev.to/christopherkade/developing-the-star-wars-opening-crawl-in-htmlcss-2j9e. Now Chris has coded an entire Opening Crawl from the star wars sage which includes the crawl explaining the plot of the movies. I decided not to include this in the homepage because the users purpose is to play the Sudoku.

Within my code also includes an Audio file with the theme from Star Wars - https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3 which is set to Autoplay. The other Audio files for the Sudoku pages were taken from: https://archive.org/details/tvtunes_32438, https://archive.org/details/StarWarsCantinaBand12 and https://archive.org/details/StarWarsTheImperialMarchDarthVadersTheme.

![Alt text](<Screenshot 2023-09-30 194154-1.png>)

I proceeded to applying a black background and yellow tiles and numbers for the Sudoku's also to keep continuation of the design.

## Planning the JavaScript for this project

The plan for the numbers within the grid.

I will be creating two sets of grids. The first will be the 'problem' grid and the second the 'solution' grid.

Each grid will have two arrays of strings and within each string will contain digits 0 to 8 on the Y axis and 0 - 8 on the X axis. (The X and Y axes are 0 - 8 because JavaScript conducts arrays starting at 0, and not 1.)  

If you can imagine each row in the X and Y axes filled with numbers starting at 1 through to 9, in a scrambled order but with 3 blanks in each row. We would go 'along the corridor' (follow the X axis) to 6, and 'down the stairs' (follow down) to number 3. So we would have 6,3. This could be any number from 1 to 9, but let's pretend that on the 9*9 grid, it's a blank. The user would have to figure out the answer to the sudoku here, but if they guess it incorrectly, the error counter would increase by 1. If the user finds the correct answer, the tile is filled in with the correct number and the error counter stays the same number. The 'solution' grid would have the full solution to the Sudoku and it's going to act as a cross-reference for correct and incorrect answers.

To understand which tile will correspond to the index of the grid, each tile will be assigned an ID corresponding its X and Y axis. The example given previously was 6,3 which would have an ID of "6-3".


For the next step of this project, I created a problem board and solution board filled with the appropriate numbers. 

I then added in a window.onload function which contained a setGame function within. The Window.onload function method gets executed after an entire web page is loaded. This includes all the elements with DOM such as the head tag, title tag and all the CSS too. The called function will be executed after the object is loaded. 

###Variable Declarations:

numSelected and tileSelected are initially set to null. They will later hold the selected number and tile respectively.
The errors is set to 0 and will keep track of the number of errors made by the player.
The grid is a 2D array representing the initial state of the Sudoku board, with “-” representing empty cells.
The solution is a 2D array representing the correct solution to the Sudoku puzzle.

Window Onload Event:

When the window loads, it calls the setGame() function to set up the game.

###setGame Function:

This function sets up the game board. It creates clickable number buttons (1-9) and a 9x9 grid of tiles.
Each tile is given an ID corresponding to its row and column, and an event listener for click events.
If a tile in the grid array is not “-”, it’s considered a starting tile and its value is displayed on the board.

###selectNumber Function:

This function is called when a number button is clicked. It deselects any previously selected number and selects the clicked number.
selectTile Function:

This function is called when a tile on the board is clicked.
If a number has been selected and the clicked tile is empty, it checks if placing the selected number in the clicked tile’s position matches the solution.
If it matches, it places the number in the tile. If not, it increments the error count.

I found some Sudoku problem and solutions online to use for my Sudoku's https://sudoku.com/hard/. I copied the JavaScript code for each page but edited the boards for the Medium and Hard sections with the correct digits for the increasingly more difficult Sudoku's.


## Sudoku Styling

I added some text styling to the Sudoku. The title and the numbers will be in Arial and I also centered the body of the HTML so that the Sudoku is central on the user's screen.

The line-break was set to 500 pixels, so that it didn't take up the entire screen yet clearly seperated the title and error number counter.

The error counter was set to purple for no particular reason other than to add some contrast.

The width and height of the Sudoku grid was set to 450 pixels. As there are 9 numbers in any given sudoku grid, I needed each tile within the grid to be set to 50 pixels high and wide in order to form a perfect square. 

The guide I followed to create this Sudoku game included a margin: 0 auto, but I didn't understand what that did. Fortunately, software developer friends over at Stackoverflow.com had the answer. It simply means that the browser sets the margin, and that the result is dependent on the browser being used. Another answer stated that specifying a width of an object set to margin: 0 auto will allow the parent container to sit centrally. I did not know that but it makes sense!

Each individual tile. I set the height and width to 48 pixels to form perfect squares but also to leave room for the borders of the tiles. I set the borders of the tiles to 1 pixel and the colour to light gray,so that the squares were clearly outlined on the grid.

The text was then set to 20 pixels, bold and centrally aligned within the box too. The text will of course be just numbers within the box. I then created a number styling for the digit font, and copy and pasted the tile styling except for the font colour which has been set to black for the numbers.

![Alt text](<Screenshot 2023-09-30 194154.png>)

## Tests, failures and commits

Creating this document was challenging to say the least. I was testing my HTML and CSS code using w3's webcode validator: https://validator.w3.org/nu/. I was happy with testing the project from start to finish which really helped with developing the project, something I didn't do enough of in my previous project.

As I mentioned earlier, going through the HTML and CSS code for this project missed some key elements that I overlooked! For example, The Doctype I missed and had to double check through my pages...ops. 

Another HTML error I encountered on this coding project was the "Element not allowed as child of element ul in this context". This was for my hyperlinks within my pages to redirect users to any one of them. They were originally coded with a elements surrounding the button elements, however <a> elements cannot be be child elements of ul and so I had to include li elements to each of my hyperlinks.

I had to change the ``` <input type="button" value="Easy"> into a <form action="/StarWars-Sudoku/Sudoku-JS-Easy/Easy.html" method="get">
   <button type="submit"Easy> ``` solution, which still acts as a button but removes the a element.

Some more failures included the names of all of the pages I created as well as the mp3 files. They were missing hyphens where there were spaces which were an easy enough correction to manage.

Unfortunately, the screen shots that I had were lost for the issues. My recycle bin on my local hard drive didn't have them and I could not find them anywhere on my Laptop which was incredibly frustrating as having them to show for my journey would have been a great plus for the project. There was one screen shot I was able to record which documented including a background without the StarWars logo. I quickly discovered that the reason for this was due to the logo formatting. It was a .webp file. I had to go back and find a Star Wars logo that had a black background and was a Jpeg!

The other huge boo boo was my failure to commit this project. The realisation came at a point where my code was shaping out to look visually incredible (if I do say so myself), but a few added changes completely disorientated my project. I was in full panic mode because of the hours of time I had spent creating this Sudoku. Once I realised my blatent mistake, I made sure to commit the project regularly to avoid it in the future. You can be sure I won't be forgetting to commmit my future projects any time soon!

Another failure of this journey was initially failing to upload my code with the GitHub desktop app. My first attempt to upload the project and commmit it, was via an online resource that did not work for me. Once I downloaded to Github desktop application, the upload was much more straight forward.

![Alt text](<Screenshot 2023-09-21 101720.png>)

![Alt text](<Screenshot 2023-09-21 101733.png>)

![Alt text](<Screenshot 2023-09-21 101720-1.png>)

### personal mistakes

To tie in the commit failure and loss of documentation, I must admit that this project has had some major learning curves that I will be taking into future projects. I will proceed to document the development process through descriptive commit messages which is a criteria I need to follow, but also to help myself out. It can be difficult to remember where you left off from a project and documenting my project would have been significantly easier on my mind and also my stress levels. 

## Meeting my user's needs

The aim of this project was to create a working Sudoku that a player can play, and know where their shortcomings were throughout - which the Sudoku does. If you attempt to place a digit within the Sudoku, the error counter increases and the box stays empty. The target audience included two demographics. Fans of Star Wars and individuals who enjoy a Sudoku to tickle their brains. Initially I did consider Sudoku lovers, but I soon realised that the design wasn't stimulating enough - which I have included in the initial development stages of the project. Throughout the development process of this project, I shared the website with several colleagues at work who either liked Sudoku's or were fans of Star Wars. I found that the star wars fans enjoyed the interaction with the games, because it was a Star Wars themed page whereas the Sudoku fans were less interested in the Star Wars them and more interested in the Sudoku itself. In other words, it didn't matter that Star Wars themed songs, fonts and designs were features of the games. 

## GitHub Deployment

This project was deployed to GitHub via the Desktop app. 

The first step was downloading the Git Installer - https://git-scm.com/, the windows version for my particular machine.

I installed git and left the default settings so if you don’t have a preference just let it guide you.

I then created a Local Repository and started adding folders to the repository with git add. 
    
And I was committing my changes to the local repository.

The final steps was pushing the project to my StarWars repository on my GitHub.


## Credits

### Code

I watched some videos on how to code all the HTML, CSS and JavaScript for this project. This especially helped with understanding which functions I should use and how they needed to be configured correctly.

- [kenny Yip] (https://www.youtube.com/watch?v=S4uRtTb8U-U&t=419s&pp=ygURamF2YXNjcmlwdCBzdWRva3U%3D)
- [Christoper Kade] (https://codepen.io/christopherkade/pen/rJVPjz)
- [Autumn Chris] (https://github.com/autumnchris/tic-tac-toe-game)

**Media** 

[Star Wars Logo] (https://de.wiktionary.org/wiki/Datei:Star_Wars_Logo.svg)

[]
 





 




 

 




