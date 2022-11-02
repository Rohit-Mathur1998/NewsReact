import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles =  [
        {
          "source": { "id": null, "name": "New York Times" },
          "author": "Alan Blinder",
          "title": "Atlanta Braves Beat Los Angeles Dodgers to Reach World Series - The New York Times",
          "description": "In third place on Aug. 13, Atlanta rode a surprising group of trade deadline acquisitions to a pennant, outlasting the 106-win Dodgers. Next up: the Houston Astros.",
          "url": "https://www.nytimes.com/2021/10/23/sports/baseball/atlanta-braves-world-series.html",
          "urlToImage": "https://static01.nyt.com/images/2021/11/23/sports/23nlcs-game6-cel2/23nlcs-game6-cel2-facebookJumbo.jpg",
          "publishedAt": "2021-10-24T05:40:00Z",
          "content": "With two outs in the bottom of the first inning, Ozzie Albies doubled off Walker Buehler. Austin Riley worked a full-count, and, as the crowd at a sold-out Truist Park began to erupt, the young third… [+858 chars]"
        },
        {
          "source": { "id": null, "name": "ESPN" },
          "author": "ESPN staff",
          "title": "College football Power Rankings after Week 8 - espn.com",
          "description": "With another week in college football behind us, it's time to look at this week's Power Rankings.",
          "url": "https://www.espn.com/college-football/story/_/id/32458702/college-football-power-rankings-week-8",
          "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1023%2Fr927386_1296x729_16%2D9.jpg",
          "publishedAt": "2021-10-24T05:32:38Z",
          "content": "The Week 8 college slate left something to be desired but, given the way the year has gone, the lackluster schedule did little to deter the unpredictability of the season.\r\nCincinnati and Oklahoma, b… [+17070 chars]"
        },
        {
          "source": { "id": "fox-news", "name": "Fox News" },
          "author": "Dom Calicchio",
          "title": "Brian Laundrie autopsy inconclusive about cause of death, further study planned, lawyer says - Fox News",
          "description": "Brian Laundrie’s recovered remains – which have been described as “bones” by police – will undergo further examination after an autopsy failed to establish a cause or manner of death, a lawyer said.",
          "url": "https://www.foxnews.com/us/brian-laundrie-autopsy-cause-death-lawyer",
          "urlToImage": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/ef81e45a-6a40-49fc-88dd-591137763047/d7f2e2de-b70c-44d5-87d8-6cfe8520b02c/1280x720/match/image.jpg",
          "publishedAt": "2021-10-24T04:38:05Z",
          "content": "Brian Laundries recovered remains which have been described as \"bones\" by police will undergo further examination after an autopsy failed to establish a cause or manner of death, a lawyer said.\r\nThe … [+2357 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Frank Pallotta, CNN Business",
          "title": "'SNL' brings back Jason Sudeikis' Joe Biden to help out the President - CNN",
          "description": "\"Saturday Night Live\" offered audiences not one, not two, but three Joe Biden's on Saturday night.",
          "url": "https://www.cnn.com/2021/10/24/media/snl-joe-biden-jason-sudeikis-cold-open/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211023233443-snl-cold-open-102321-super-tease.jpg",
          "publishedAt": "2021-10-24T04:27:00Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "KSL.com" },
          "author": "Rachel Ramirez, CNN",
          "title": "'Bomb cyclones' and 'atmospheric rivers': West Coast braces for weather whiplash - KSL.com",
          "description": "Imagine a long river of water vapor in the sky coming into the West Coast. It is how Marty Ralph, the director of the Center for Western Weather and Water Extremes at the Scripps Institution of Oceanography in San Diego, described the storm event threatening …",
          "url": "https://www.ksl.com/article/50268162/bomb-cyclones-and-atmospheric-rivers-west-coast-braces-for-weather-whiplash",
          "urlToImage": "https://img.ksl.com/slc/2545/254531/25453171.jpg?filter=ksl/responsive_story_lg",
          "publishedAt": "2021-10-24T03:57:29Z",
          "content": "Estimated read time: 6-7 minutes\r\nATLANTA Imagine a long river of water vapor in the sky coming into the West Coast. It is how Marty Ralph, the director of the Center for Western Weather and Water Ex… [+6805 chars]"
        },
        {
          "source": { "id": "fox-news", "name": "Fox News" },
          "author": "Kyle Morris",
          "title": "Glenn Youngkin vows to ban critical race theory if elected Virginia governor - Fox News",
          "description": "Virginia Republican gubernatorial candidate Glenn Youngkin said Saturday that if he is elected the commonwealth's next governor he will \"ban\" the teaching of critical race theory on his first day in office.",
          "url": "https://www.foxnews.com/politics/glenn-youngkin-critical-race-theory-ban-elected-virginia-governor",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/Youngkin.jpg",
          "publishedAt": "2021-10-24T03:04:25Z",
          "content": "Virginia Republican gubernatorial candidate Glenn Youngkin said Saturday that if he is elected the commonwealth's next governor he will \"ban\" the teaching of critical race theory on his first day in … [+2367 chars]"
        },
        {
          "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
          "author": "Megan Janetsky",
          "title": "Otoniel: Colombia’s most wanted drug lord captured - Al Jazeera English",
          "description": "President says Otoniel’s arrest is the biggest blow to drug trafficking in Colombia since Pablo Escobar’s death.",
          "url": "https://www.aljazeera.com/news/2021/10/24/otoniel-colombias-most-wanted-drug-lord-captured",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2021/10/2021-10-24T001624Z_1720553901_RC2UFQ9ESCKJ_RTRMADP_3_COLOMBIA-DRUGS-OTONIEL.jpg?resize=1200%2C630",
          "publishedAt": "2021-10-24T02:51:27Z",
          "content": "Bogota, Colombia Security forces in Colombia have captured Dairo Antonio Usuga, the countrys most wanted drug trafficker.\r\nBetter known as Otoniel, the leader of the drug trafficking gang, Autodefens… [+4383 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "PTI",
          "title": "Aromatherapy spray manufactured in India found to contain bacteria that sickened 4 people in the US: CDC - Times of India",
          "description": "US News: An aromatherapy spray, manufactured in India and being sold in the US, has been found to contain a bacteria that sickened four people earlier this yea",
          "url": "https://timesofindia.indiatimes.com/world/us/aromatherapy-spray-manufactured-in-india-found-to-contain-bacteria-that-sickened-4-people-in-the-us-cdc/articleshow/87233402.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-87233408,width-1070,height-580,imgsize-844491,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2021-10-24T02:48:00Z",
          "content": "Aromatherapy spray manufactured in India found to contain bacteria that sickened 4 people in the US: CDC\r\n<ul><li>News</li>\r\n<li>World News</li>\r\n<li>US News</li>\r\n<li>Aromatherapy spray manufactured… [+82 chars]"
        },
        {
          "source": { "id": null, "name": "HuffPost" },
          "author": "Mary Papenfuss",
          "title": "Coding Org Seeking 'Legal Counsel' After Trump Venture Seems To Violate Terms - HuffPost",
          "description": "A software project dedicated to community ownership and public accessibility runs into Donald Trump's \"Truth Social\" media efforts.",
          "url": "https://www.huffpost.com/entry/mastodon-trump-truth-social-network-licensing-requirements_n_6174a297e4b079111a5838ce",
          "urlToImage": "https://img.huffingtonpost.com/asset/6174ad9e240000594e5081b0.jpeg?cache=Lkqrf5fiHT&ops=1778_1000",
          "publishedAt": "2021-10-24T02:46:21Z",
          "content": "The founder of the software codebase program apparently lifted by Donald Trumps new Truth Social media venture is seeking legal counsel to make certain the operation complies with licensing requireme… [+2799 chars]"
        },
        {
          "source": { "id": "usa-today", "name": "USA Today" },
          "author": "Matthew Wells",
          "title": "Paulo Costa says bicep injury in camp led to weight cut issues - MMA Junkie",
          "description": "Paulo Costa promised to reveal what led to his inability to make the cut to middleweight for UFC Fight Night 196.",
          "url": "https://mmajunkie.usatoday.com/2021/10/ufc-news-paulo-costa-says-bicep-injury-in-camp-led-to-weight-cutting-issues-ahead-of-ufc-fight-night-196",
          "urlToImage": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2021/10/UFC-Fight-Night-196-Paulo-Costa-post-fight-interview.jpg?w=1024&h=576&crop=1",
          "publishedAt": "2021-10-24T02:05:13Z",
          "content": "LAS VEGAS Paulo Costa provided insight into what caused the fight week weight class changes ahead of his fight on Saturday against Marvin Vettori.\r\nIn the days leading up to UFC Fight Night 196, the … [+2376 chars]"
        },
        {
          "source": { "id": null, "name": "Yahoo Entertainment" },
          "author": "Francesca Gariano",
          "title": "Tarek El Moussa and Heather Rae Young are married — see her gorgeous dress! - Yahoo News",
          "description": "The couple looked gorgeous on their big day.",
          "url": "https://news.yahoo.com/tarek-el-moussa-heather-rae-013300381.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/WDapqWWrobLF_L0YxATXdg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://s.yimg.com/uu/api/res/1.2/4Fp1qMYbvMqeuL6X_s0GbQ--~B/aD0xMjAwO3c9MjQwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/nbc_today_217/3de7358b7ecd534bd9342eb7546bc16c",
          "publishedAt": "2021-10-24T01:48:10Z",
          "content": "Tarek El Moussa and Heather Rae Young have officially tied the knot, TODAY can confirm.\r\nTheir wedding ceremony was held outside in Santa Barbara, California, in front of family and friends and the c… [+2646 chars]"
        },
        {
          "source": { "id": null, "name": "NPR" },
          "author": null,
          "title": "Facebook dithered in curbing divisive user content in India - NPR",
          "description": "Leaked documents reveal that Facebook struggled to quash misinformation and anti-Muslim propaganda and lacked the resources to do so, even as its own employees raised red flags.",
          "url": "https://www.npr.org/2021/10/23/1048746697/facebook-misinformation-india",
          "urlToImage": "https://media.npr.org/assets/img/2021/10/23/ap21296811853222_wide-35efdcc896360d411b447a677723e0042f96e53a.jpg?s=1400",
          "publishedAt": "2021-10-24T01:24:14Z",
          "content": "Facebook lacked enough local language moderators to stop misinformation that at times led to real-world violence, according to leaked documents obtained by The Associated Press.\r\nMatt Rourke/AP\r\nNEW … [+12184 chars]"
        },
        {
          "source": { "id": "politico", "name": "Politico" },
          "author": "Heather Caygle, Alice Miranda Ollstein, Eleanor Mueller, Marianne LeVine",
          "title": "Dems weigh ditching Medicare expansion and paid leave in eleventh hour of social spending talks - POLITICO",
          "description": "Axing either of the two provisions would infuriate progressives and alienate valuable voting blocs. Yet the party might just have to.",
          "url": "https://www.politico.com/news/2021/10/23/dems-weigh-ditching-medicare-expansion-and-paid-leave-in-11th-hour-of-social-spending-talks-516929",
          "urlToImage": "https://static.politico.com/6b/f0/7ad25d60481ea8b77a1e25b3afd7/2021-1019-manchin-2-1160-2.jpg",
          "publishedAt": "2021-10-24T00:42:54Z",
          "content": "One senior Democratic aide said discussions on Medicare and paid leave were in flux as negotiations continued through the weekend. The White House and Senate leadership aides, meanwhile, denied that … [+6571 chars]"
        },
        {
          "source": { "id": "newsweek", "name": "Newsweek" },
          "author": "Andrew Stanton",
          "title": "Roger Stone Claims COVID Vaccination Has 'Injured or Killed Millions of Americans' - Newsweek",
          "description": "Stone said Dr. Anthony Fauci should be \"prosecuted\" while speaking at an anti-vaccination conference in Nashville.",
          "url": "https://www.newsweek.com/roger-stone-claims-covid-vaccination-has-injured-killed-millions-americans-1641970",
          "urlToImage": "https://d.newsweek.com/en/full/1918850/roger-stone.jpg",
          "publishedAt": "2021-10-24T00:27:45Z",
          "content": "Roger Stone falsely claimed that the COVID-19 vaccine has injured or killed millions of Americans while speaking at a large gathering for anti-vaccine advocates on Saturday.\r\nWhile speaking at the \"T… [+2955 chars]"
        },
        {
          "source": { "id": null, "name": "Www.https" },
          "author": "New York Post",
          "title": "Actor who accidentally shot and killed Brandon Lee in 1993 movie set mishap was deeply affected - Fox News",
          "description": "Actor Michael Massee was also traumatized after he accidentally shot and killed Brandon Lee on the set of \"The Crow\" in 1993.",
          "url": "https://www.https://nypost.com/2021/10/22/actor-who-fatally-shot-brandon-lee-in-1993-tragedy-also-traumatized/",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/Michael_Massee_Getty_Images.jpg",
          "publishedAt": "2021-10-23T23:55:25Z",
          "content": "Images of a distraught Alec Baldwin, who tragically killed a cinematographer with a movie prop gun, evoked memories of an actor who remained haunted after fatally shooting Brandon Lee with a gun he b… [+3620 chars]"
        },
        {
          "source": { "id": null, "name": "KSAT San Antonio" },
          "author": "Emily Martin",
          "title": "Two children dead, multiple people injured after crash at drag racing event in Kerrville, police say - KSAT San Antonio",
          "description": "Two people are dead and several others are injured after a car participating in a drag race event lost control, according to Kerrville Police.",
          "url": "https://www.ksat.com/news/local/2021/10/23/two-dead-multiple-people-injured-after-crash-at-drag-racing-event-in-kerrville-police-say/",
          "urlToImage": "https://www.ksat.com/resizer/Zehst9c6EWkhIVIL2s2Qn3ZbdZ0=/800x450/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/d1vhqlrjc8h82r.cloudfront.net/10-24-2021/t_b77fdbb28e994ecaa1ff51bbd0088b72_name_image.jpg",
          "publishedAt": "2021-10-23T23:40:43Z",
          "content": "KERRVILLE Two children are dead and several others are injured after a car participating in a drag race event lost control and hit other cars and spectators, according to Kerrville police.\r\nThe crash… [+1246 chars]"
        },
        {
          "source": { "id": null, "name": "WRAL.com" },
          "author": "Ryan Bisesi",
          "title": "Wake Co. to offer all 3 COVID-19 vaccine boosters starting on Monday - WRAL.com",
          "description": "Wake County Public Health will offer COVID-19 vaccine booster doses of Moderna, Johnson & Johnson and Pfizer-BioNTech by appointment on Monday, Oct. 25.",
          "url": "https://www.wral.com/coronavirus/wake-co-to-offer-all-3-covid-19-vaccine-boosters-starting-on-monday/19940957/",
          "urlToImage": "https://wwwcache.wral.com/asset/news/local/2021/10/23/19940958/NA36S04172021_thumb.0000006-DMID1-5sn82k5rr-768x432.jpg",
          "publishedAt": "2021-10-23T23:01:00Z",
          "content": "Wake County, N.C. — Wake County Public Health will offer COVID-19 vaccine booster doses of Moderna, Johnson &amp; Johnson and Pfizer-BioNTech shots by appointment starting on Monday, Oct. 25.\r\nThe Fo… [+1438 chars]"
        },
        {
          "source": { "id": "the-verge", "name": "The Verge" },
          "author": "Tom Warren",
          "title": "Microsoft reverses controversial .NET change after open source community outcry - The Verge",
          "description": "Microsoft angered the .NET open source community this week, and the company has been forced to reverse a controversial decision. It follows weeks of unrest in the .NET community.",
          "url": "https://www.theverge.com/2021/10/23/22742282/microsoft-dotnet-hot-reload-u-turn-response",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/hpes8tr1sPZGMmIaIUT1aJhlAdI=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10300141/acastro_180226_0001.jpg",
          "publishedAt": "2021-10-23T22:14:06Z",
          "content": ".NET 6 will now include Hot Reload across multiple platforms\r\nImage by Alex Castro / The Verge\r\nMicrosoft is reversing a decision to remove a key feature from its upcoming .NET 6 release, after a pub… [+3520 chars]"
        },
        {
          "source": { "id": null, "name": "Rivals.com" },
          "author": null,
          "title": "Michigan Wolverines Football: Wolverine Watch: Setting Up The Big One - Rivals.com - Michigan",
          "description": "Michigan set the stage, and\r\ncollege football’s brightest lights flashed on in the Great Lakes State.",
          "url": "https://michigan.rivals.com/news/michigan-wolverines-football-wolverine-watch-setting-up-the-big-one",
          "urlToImage": "https://images.rivals.com/image/upload/f_auto,q_auto,t_headline_primary/mpb7kzd0od0ybfuo4cxt",
          "publishedAt": "2021-10-23T22:13:33Z",
          "content": "Michigan set the stage, and college footballs brightest lights flashed on in the Great Lakes State.\r\nThe 7-0 Wolverines meet the 7-0 Michigan State Spartans in East Lansing, seven days hence. Its alw… [+5480 chars]"
        },
        {
          "source": { "id": "google-news", "name": "Google News" },
          "author": null,
          "title": "Dune 2 Will Have More Action, Says Denis Villeneuve | Screen Rant - Screen Rant",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMiSGh0dHBzOi8vc2NyZWVucmFudC5jb20vZHVuZS0yLW1vcmUtYWN0aW9uLWxlc3MtdGFsa2luZy1kZW5pcy12aWxsZW5ldXZlL9IBTGh0dHBzOi8vc2NyZWVucmFudC5jb20vZHVuZS0yLW1vcmUtYWN0aW9uLWxlc3MtdGFsa2luZy1kZW5pcy12aWxsZW5ldXZlL2FtcC8?oc=5",
          "urlToImage": null,
          "publishedAt": "2021-10-23T21:59:00Z",
          "content": null
        }
      ]
    constructor(){
        super();
        console.log("Hello i am a constructor from news component");
        this.state={
            articles:this.articles,
            loading:false,
            page:1
        }
    }
     async componentDidMount(){
      console.log("cdm");
      let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ea31bf2712ab489ebaa42cf3c0f4d9c5&page=1&pageSize=20";
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults})
    }
    handlePrevClick = async() => {
      console.log("Previous");
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ea31bf2712ab489ebaa42cf3c0f4d9c5&page=${this.state.page-1}&pageSize=20`;
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page-1,
        articles:parsedData.articles
      })

      

    }

    handleNextClick = async () => {
      if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

      }
      else{
      console.log("Next");
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ea31bf2712ab489ebaa42cf3c0f4d9c5&page=${this.state.page+1}&pageSize=20`;
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page+1,
        articles:parsedData.articles
      })
    }

    }
    render() {
      console.log("render");
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
                
                <div className="row">
                {this.state.articles.map((element) => {
                  return<div className="col-md-4" key={element.url}>
                    <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>

                })}
                   
                  
                    
                </div>
                
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>                
            </div>
        )
    }
}

export default News
