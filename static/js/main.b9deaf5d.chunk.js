(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a(258)},258:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(15),i=a.n(o),s=a(19),l=a(95),c=a.n(l),m=a(97),d=a.n(m),u=a(94),y=a.n(u),h=Object(s.withStyles)({icon:{color:"rgba(255, 255, 255, 0.54)"},gridListTile:{margin:"auto",width:300,height:400}})(function(e){var t=e.film,a=e.classes,r=e.handleClick;return n.a.createElement(c.a,{onClick:function(){return r(t)},className:a.gridListTile},n.a.createElement("img",{src:t.Poster||y.a,alt:t.Title}),n.a.createElement(d.a,{title:t.Title,subtitle:n.a.createElement("span",null,"Date: ",t.Released)}))}),b=a(98),g=a.n(b),p=a(27),M=Object(p.b)(function(e){return{filmList:e.filmList}},{selectFilm:function(e){return{type:"SELECT_FILM",payload:e}}})(Object(s.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper}}})(function(e){var t=e.filmList,a=e.selectFilm,r=e.classes;return n.a.createElement("div",{className:r.root},n.a.createElement(g.a,null,t.map(function(e){return n.a.createElement(h,{key:e.imdbID,film:e,handleClick:a})})))})),A=a(99),R=a.n(A),T=a(100),S=a.n(T),f=a(61),v=a.n(f),D=a(101),V=a.n(D),E=a(102),w=a.n(E),N=Object(s.withStyles)({root:{flexGrow:1},menuButton:{marginLeft:-18,marginRight:10}})(function(e){var t=e.classes;return n.a.createElement("div",{className:t.root},n.a.createElement(R.a,{position:"static"},n.a.createElement(S.a,{variant:"dense"},n.a.createElement(V.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},n.a.createElement(w.a,null)),n.a.createElement(v.a,{variant:"h6",color:"inherit"},"Films"))))}),F=a(40),k=a(18),B=a(103),O=a(104),P=a(111),L=a(105),C=a(110),G=a(41),I=a.n(G),W=a(62),j=a.n(W),_=a(106),X=a.n(_),Y=a(109),x=a.n(Y),z=a(108),J=a.n(z),Z=a(107),U=a.n(Z),Q=function(e){function t(){var e,a;Object(B.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(n)))).state={film:{Title:"",Released:""}},a.resetState=function(){a.setState({film:{Title:""}})},a.handleClose=function(){a.props.resetSelectedFilm(),a.resetState()},a.handleSave=function(){a.props.saveFilm(a.state.film),a.resetState()},a.handleChange=function(e){return function(t){return a.setState({film:Object(k.a)({},a.state.film,Object(F.a)({},e,t.target.value))})}},a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.selectedFilm,t=this.state.film;return n.a.createElement("div",null,n.a.createElement(X.a,{open:!!e,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},n.a.createElement(U.a,{id:"form-dialog-title"},"Edit film"),n.a.createElement(J.a,null,n.a.createElement(j.a,{autoFocus:!0,margin:"dense",id:"Title",label:"Title",value:t.Title,onChange:this.handleChange("Title"),fullWidth:!0}),n.a.createElement(j.a,{autoFocus:!0,margin:"dense",id:"Released",label:"Released",value:t.Released,onChange:this.handleChange("Released")})),n.a.createElement(x.a,null,n.a.createElement(I.a,{onClick:this.handleClose,color:"primary"},"Cancel"),n.a.createElement(I.a,{onClick:this.handleSave,color:"primary"},"Save"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.selectedFilm&&""===t.film.Title?Object(k.a)({},t,{film:e.selectedFilm}):null}}]),t}(n.a.Component),q=Object(p.b)(function(e){return{selectedFilm:e.selectedFilm}},{resetSelectedFilm:function(){return{type:"RESET_SELECTED_FILM"}},saveFilm:function(e){return{type:"SAVE_FILM",payload:e}}})(Q),H=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(N,null),n.a.createElement(M,null),n.a.createElement(q,null))},K=a(39),$={filmList:[{Title:"Guardians of the Galaxy Vol. 2",Year:"2017",Rated:"PG-13",Released:"05 May 2017",Runtime:"136 min",Genre:"Action, Adventure, Comedy, Sci-Fi",Director:"James Gunn",Writer:"James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",Actors:"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",Plot:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",Language:"English",Country:"USA",Awards:"Nominated for 1 Oscar. Another 12 wins & 42 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.7/10"},{Source:"Rotten Tomatoes",Value:"84%"},{Source:"Metacritic",Value:"67/100"}],Metascore:"67",imdbRating:"7.7",imdbVotes:"449,175",imdbID:"tt3896198",Type:"movie",DVD:"22 Aug 2017",BoxOffice:"$389,804,217",Production:"Walt Disney Pictures",Website:"https://marvel.com/guardians",Response:"True"},{Title:"Captain Marvel",Year:"2019",Rated:"PG-13",Released:"08 Mar 2019",Runtime:"124 min",Genre:"Action, Adventure, Sci-Fi",Director:"Anna Boden, Ryan Fleck",Writer:"Anna Boden (screenplay by), Ryan Fleck (screenplay by), Geneva Robertson-Dworet (screenplay by), Nicole Perlman (story by), Meg LeFauve (story by), Anna Boden (story by), Ryan Fleck (story by), Geneva Robertson-Dworet (story by)",Actors:"Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Jude Law",Plot:"Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",Language:"English",Country:"USA",Awards:"N/A",Poster:"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"6.9/10"},{Source:"Rotten Tomatoes",Value:"79%"},{Source:"Metacritic",Value:"65/100"}],Metascore:"65",imdbRating:"6.9",imdbVotes:"80,858",imdbID:"tt4154664",Type:"movie",DVD:"N/A",BoxOffice:"N/A",Production:"Marvel Studios",Website:"https://movies.disney.com/captain-marvel",Response:"True"},{Title:"Bohemian Rhapsody",Year:"2018",Rated:"PG-13",Released:"02 Nov 2018",Runtime:"134 min",Genre:"Biography, Drama, Music",Director:"Bryan Singer",Writer:"Anthony McCarten (story by), Peter Morgan (story by), Anthony McCarten (screenplay by)",Actors:"Rami Malek, Lucy Boynton, Gwilym Lee, Ben Hardy",Plot:"The story of the legendary rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).",Language:"English",Country:"UK, USA",Awards:"N/A",Poster:"https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"8.1/10"},{Source:"Rotten Tomatoes",Value:"61%"},{Source:"Metacritic",Value:"49/100"}],Metascore:"49",imdbRating:"8.1",imdbVotes:"271,569",imdbID:"tt1727824",Type:"movie",DVD:"12 Feb 2019",BoxOffice:"N/A",Production:"20th Century Fox",Website:"http://www.bohemianrhapsody.com",Response:"True"},{Title:"Green Book",Year:"2018",Rated:"PG-13",Released:"16 Nov 2018",Runtime:"130 min",Genre:"Biography, Comedy, Drama, Music",Director:"Peter Farrelly",Writer:"Nick Vallelonga, Brian Hayes Currie, Peter Farrelly",Actors:"Viggo Mortensen, Mahershala Ali, Linda Cardellini, Sebastian Maniscalco",Plot:"A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.",Language:"English, Italian, Russian, German",Country:"USA",Awards:"N/A",Poster:"https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"8.3/10"},{Source:"Rotten Tomatoes",Value:"80%"},{Source:"Metacritic",Value:"69/100"}],Metascore:"69",imdbRating:"8.3",imdbVotes:"138,886",imdbID:"tt6966692",Type:"movie",DVD:"19 Feb 2019",BoxOffice:"N/A",Production:"Universal Pictures",Website:"https://www.uphe.com/movies/green-book",Response:"True"},{Title:"Alita: Battle Angel",Year:"2019",Rated:"PG-13",Released:"14 Feb 2019",Runtime:"122 min",Genre:"Action, Adventure, Romance, Sci-Fi, Thriller",Director:"Robert Rodriguez",Writer:'James Cameron (screenplay by), Laeta Kalogridis (screenplay by), Yukito Kishiro (based on the graphic novel series "Gunnm" by)',Actors:"Rosa Salazar, Christoph Waltz, Jennifer Connelly, Mahershala Ali",Plot:"A deactivated female cyborg is revived, but cannot remember anything of her past life and goes on a quest to find out who she is.",Language:"English, Spanish",Country:"USA",Awards:"N/A",Poster:"https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.6/10"},{Source:"Rotten Tomatoes",Value:"59%"},{Source:"Metacritic",Value:"54/100"}],Metascore:"54",imdbRating:"7.6",imdbVotes:"50,783",imdbID:"tt0437086",Type:"movie",DVD:"N/A",BoxOffice:"N/A",Production:"20th Century Fox",Website:"http://www.AlitaBattleAngel.com",Response:"True"},{Title:"A Star Is Born",Year:"2018",Rated:"R",Released:"05 Oct 2018",Runtime:"136 min",Genre:"Drama, Music, Romance",Director:"Bradley Cooper",Writer:"Eric Roth (screenplay by), Bradley Cooper (screenplay by), Will Fetters (screenplay by), Moss Hart (based on the 1954 screenplay by), John Gregory Dunne (based on the 1976 screenplay by), Joan Didion (based on the 1976 screenplay by), Frank Pierson (based on the 1976 screenplay by), William A. Wellman (based on a story by), Robert Carson (based on a story by)",Actors:"Lady Gaga, Bradley Cooper, Sam Elliott, Andrew Dice Clay",Plot:"A musician helps a young singer find fame, even as age and alcoholism send his own career into a downward spiral.",Language:"English",Country:"USA",Awards:"1 nomination.",Poster:"https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.9/10"},{Source:"Rotten Tomatoes",Value:"89%"},{Source:"Metacritic",Value:"88/100"}],Metascore:"88",imdbRating:"7.9",imdbVotes:"186,913",imdbID:"tt1517451",Type:"movie",DVD:"19 Feb 2019",BoxOffice:"N/A",Production:"Warner Bros. Pictures",Website:"http://www.astarisbornmovie.com/",Response:"True"},{Title:"Spider-Man: Into the Spider-Verse",Year:"2018",Rated:"PG",Released:"14 Dec 2018",Runtime:"117 min",Genre:"Animation, Action, Adventure, Family, Sci-Fi",Director:"Bob Persichetti, Peter Ramsey, Rodney Rothman",Writer:"Phil Lord (screenplay by), Rodney Rothman (screenplay by), Phil Lord (story by)",Actors:"Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",Plot:"Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.",Language:"English, Spanish",Country:"USA",Awards:"N/A",Poster:"https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"8.6/10"},{Source:"Rotten Tomatoes",Value:"97%"},{Source:"Metacritic",Value:"87/100"}],Metascore:"87",imdbRating:"8.6",imdbVotes:"122,126",imdbID:"tt4633694",Type:"movie",DVD:"26 Feb 2019",BoxOffice:"N/A",Production:"Sony Pictures",Website:"http://www.intothespiderverse.movie/",Response:"True"},{Title:"Avengers: Endgame",Year:"2019",Rated:"N/A",Released:"26 Apr 2019",Runtime:"N/A",Genre:"Action, Adventure, Fantasy, Sci-Fi",Director:"Anthony Russo, Joe Russo",Writer:"Christopher Markus, Stephen McFeely, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (comic book)",Actors:"Bradley Cooper, Brie Larson, Chris Hemsworth, Chris Evans",Plot:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",Language:"English",Country:"USA",Awards:"N/A",Poster:"https://m.media-amazon.com/images/M/MV5BNGZiMzBkZjMtNjE3Mi00MWNlLWIyYjItYTk3MjY0Yjg5ODZkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",Ratings:[],Metascore:"N/A",imdbRating:"N/A",imdbVotes:"N/A",imdbID:"tt4154796",Type:"movie",DVD:"N/A",BoxOffice:"N/A",Production:"Marvel Studios",Website:"N/A",Response:"True"},{Title:"Aquaman",Year:"2018",Rated:"PG-13",Released:"21 Dec 2018",Runtime:"143 min",Genre:"Action, Adventure, Fantasy, Sci-Fi",Director:"James Wan",Writer:"David Leslie Johnson-McGoldrick (screenplay by), Will Beall (screenplay by), Geoff Johns (story by), James Wan (story by), Will Beall (story by), Mort Weisinger (Aquaman created by), Paul Norris (Aquaman created by)",Actors:"Jason Momoa, Amber Heard, Willem Dafoe, Patrick Wilson",Plot:"Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",Language:"English",Country:"Australia, USA",Awards:"N/A",Poster:"https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.4/10"},{Source:"Rotten Tomatoes",Value:"65%"},{Source:"Metacritic",Value:"55/100"}],Metascore:"55",imdbRating:"7.4",imdbVotes:"169,327",imdbID:"tt1477834",Type:"movie",DVD:"N/A",BoxOffice:"N/A",Production:"Warner Bros. Pictures",Website:"http://www.aquamanmovie.com/",Response:"True"},{Title:"Isn't It Romantic",Year:"2019",Rated:"PG-13",Released:"13 Feb 2019",Runtime:"89 min",Genre:"Comedy, Fantasy, Romance",Director:"Todd Strauss-Schulson",Writer:"Erin Cardillo (screenplay by), Dana Fox (screenplay by), Katie Silberman (screenplay by), Erin Cardillo (story by)",Actors:"Rebel Wilson, Liam Hemsworth, Adam Devine, Priyanka Chopra",Plot:"A young woman disenchanted with love mysteriously finds herself trapped inside a romantic comedy.",Language:"English",Country:"USA",Awards:"N/A",Poster:"https://m.media-amazon.com/images/M/MV5BZGE1NGYxOWItODdmMy00NWNhLTgxZmMtYmVjYmViMGI0NTdmXkEyXkFqcGdeQXVyNzE2MTQyMzM@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"6.1/10"},{Source:"Rotten Tomatoes",Value:"68%"},{Source:"Metacritic",Value:"60/100"}],Metascore:"60",imdbRating:"6.1",imdbVotes:"14,891",imdbID:"tt2452244",Type:"movie",DVD:"N/A",BoxOffice:"N/A",Production:"New Line Cinema",Website:"http://IsntItRomantic.com",Response:"True"},{Title:"The Favourite",Year:"2018",Rated:"R",Released:"21 Dec 2018",Runtime:"119 min",Genre:"Biography, Comedy, Drama, History",Director:"Yorgos Lanthimos",Writer:"Deborah Davis, Tony McNamara",Actors:"Olivia Colman, Rachel Weisz, Emma Delves, Faye Daveney",Plot:"In early 18th century England, a frail Queen Anne occupies the throne and her close friend, Lady Sarah, governs the country in her stead. When a new servant, Abigail, arrives, her charm endears her to Sarah.",Language:"English",Country:"Ireland, UK, USA",Awards:"N/A",Ratings:[{Source:"Internet Movie Database",Value:"7.8/10"},{Source:"Rotten Tomatoes",Value:"93%"},{Source:"Metacritic",Value:"90/100"}],Metascore:"90",imdbRating:"7.8",imdbVotes:"64,262",imdbID:"tt5083738",Type:"movie",DVD:"12 Feb 2019",BoxOffice:"N/A",Production:"Fox Searchlight Pictures, Film4 and Waypoint",Website:"http://www.foxsearchlight.com/thefavourite/",Response:"True"},{Title:"Hellboy",Year:"2004",Rated:"PG-13",Released:"02 Apr 2004",Runtime:"122 min",Genre:"Action, Fantasy, Horror, Sci-Fi",Director:"Guillermo del Toro",Writer:"Guillermo del Toro (screenplay), Guillermo del Toro (screen story), Peter Briggs (screen story), Mike Mignola (comic books)",Actors:"Ron Perlman, John Hurt, Selma Blair, Rupert Evans",Plot:"A demon, raised from infancy after being conjured by and rescued from the Nazis, grows up to become a defender against the forces of darkness.",Language:"English, Russian",Country:"USA",Awards:"3 wins & 23 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BNTc1ZWY0ZTEtZTVmNi00MTg0LTg4NmQtZTI4OWNiMmQ0MWZkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"6.9/10"},{Source:"Rotten Tomatoes",Value:"81%"},{Source:"Metacritic",Value:"72/100"}],Metascore:"72",imdbRating:"6.9",imdbVotes:"281,099",imdbID:"tt0167190",Type:"movie",DVD:"27 Jul 2004",BoxOffice:"$59,035,104",Production:"Sony Pictures",Website:"http://www.sonypictures.com/movies/hellboy/",Response:"True"}],selectedFilm:null},ee=a(60),te=a.n(ee),ae=Object(s.createMuiTheme)({palette:{type:"dark"},typography:{useNextVariants:!0}}),re=Object(K.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TOP_FILMS":return Object(k.a)({},e,{filmList:t.payload});case"SELECT_FILM":return Object(k.a)({},e,{selectedFilm:t.payload});case"SAVE_FILM":var a=t.payload;return Object(k.a)({},e,{selectedFilm:null,filmList:e.filmList.map(function(e){return e.imdbID===a.imdbID?a:e})});case"RESET_SELECTED_FILM":return Object(k.a)({},e,{selectedFilm:null});default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(n.a.createElement(p.a,{store:re},n.a.createElement(te.a,{theme:ae},n.a.createElement(H,null))),document.getElementById("root"))},94:function(e,t,a){e.exports=a.p+"static/media/poster_none.4c0c4e8d.png"}},[[112,1,2]]]);
//# sourceMappingURL=main.b9deaf5d.chunk.js.map