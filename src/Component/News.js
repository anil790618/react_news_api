import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "iOS 16 will let you skip CAPTCHAs on some websites",
            "description": "iOS 16 might just help you avoid the CAPTCHA anti-bot systems that stand between you and some web sign-ins. As MacRumorsnoticed, Apple used WWDC 2022 to detail a Private Access Token system in iOS 16, iPadOS 16 and macOS Ventura that skips CAPTCHAs altogether…",
            "url": "https://www.engadget.com/ios-16-captcha-bypas-automatic-verification-193352666.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/70ff2ea0-f0c8-11ec-bfbe-ba7485492839",
            "publishedAt": "2022-06-20T19:33:52Z",
            "content": "iOS 16 might just help you avoid the CAPTCHA anti-bot systems that stand between you and some web sign-ins. As MacRumorsnoticed, Apple used WWDC 2022 to detail a Private Access Token system in iOS 16… [+1303 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "Razer's Kishi gamepad for iOS is cheaper than ever right now",
            "description": "If you've been looking for a better way to play games on your phone than relying on touch controls, an external controller is what you need. The Razer Kishi\r\n is a solid dedicated gamepad option and the iOS version has dropped to an all-time low price on Amaz…",
            "url": "https://www.engadget.com/razer-kishi-ios-controller-good-deal-amazon-180442359.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-09/64355de0-f807-11ea-bdff-b8b93a51dc26",
            "publishedAt": "2022-06-20T18:04:42Z",
            "content": "If you've been looking for a better way to play games on your phone than relying on touch controls, an external controller is what you need. The Razer Kishi\r\n is a solid dedicated gamepad option and … [+1905 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Power demand in parts of China sets new records amid searing heat - Reuters",
            "description": "Power consumption surged in large Chinese provinces north of the Yangtze river amid warmer-than-normal weather, with regions like Henan, China's third-most populous province, challenged by record electricity demand.",
            "url": "https://www.reuters.com/world/china/power-demand-parts-china-sets-new-records-amid-searing-heat-2022-06-20/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=99",
            "publishedAt": "2022-06-20T08:14:00Z",
            "content": "BEIJING, June 20 (Reuters) - Power consumption surged in large Chinese provinces north of the Yangtze river amid warmer-than-normal weather, with regions like Henan, China's third-most populous provi… [+2207 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tencent forms 'extended reality' unit as metaverse race gathers steam - sources - Reuters",
            "description": "China's Tencent Holdings <a href=\"https://www.reuters.com/companies/0700.HK\" target=\"_blank\">(0700.HK)</a> announced to its staff on Monday the official formation of an \"extended reality\" (XR) unit, three people familiar with the matter said, formally placing…",
            "url": "https://www.reuters.com/world/china/tencent-forms-extended-reality-unit-metaverse-race-gathers-steam-sources-2022-06-20/",
            "urlToImage": "https://www.reuters.com/resizer/mgDXiazd1PmWKl8kVfcoZyyj9iQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/M25NBZME45OODNQCKGFUWJWRWA.jpg",
            "publishedAt": "2022-06-20T13:24:00Z",
            "content": "HONG KONG, June 20 (Reuters) - China's Tencent Holdings (0700.HK) announced to its staff on Monday the official formation of an \"extended reality\" (XR) unit, three people familiar with the matter sai… [+2741 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "nicholas.sutrich@futurenet.com (Nicholas Sutrich)",
            "title": "Meta finally showed us why it's been spending $10 billion on VR",
            "description": "VR is still in its infancy in many ways, and Meta's Reality Labs showed us how it's leading the pack and paving the way for the next generation of headsets.",
            "url": "https://www.androidcentral.com/gaming/virtual-reality/meta-quest-prototypes-2022",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/Feoczu26SpqxZHTS3Qfnvb-1200-80.jpg",
            "publishedAt": "2022-06-20T14:00:00Z",
            "content": "VR has come a long, long way in the six short years since the first real mainstream headsets launched, but as Meta CEO Mark Zuckerberg told me and a virtual room of journalists at a special roundtabl… [+8098 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Barry Glendenning and Nedum Onuoha. Produced by Joel Grove and executive produced by Max Sanderson.",
            "title": "The life and times of Nedum Onuoha – Football Weekly",
            "description": "Max Rushden is joined by Barry Glendenning and Nedum Onuoha to discuss the former Manchester City defender’s storied careerRate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitt…",
            "url": "https://www.theguardian.com/football/audio/2022/jun/20/nedum-onouha-manchester-city-football-weekly",
            "urlToImage": "https://i.guim.co.uk/img/media/def74c4a994f20f8948cf0ff811384fe83214f89/0_24_4500_2700/master/4500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=68823b53bfde64df6bb443bfe85db0b3",
            "publishedAt": "2022-06-20T14:21:09Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nOn todays pod, Max Rushden and Barry Glendenning… [+712 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Jim Waterson Media editor",
            "title": "Paramount: we won’t remove content from eras with ‘different sensibilities’",
            "description": "Boss of media company says it would be a mistake to censor art because it may offend some people todayThe boss of the US media company Paramount has said he does not want to remove historic programmes from his new subscription streaming service because they n…",
            "url": "https://amp.theguardian.com/film/2022/jun/20/paramount-not-remove-content-eras-different-tastes-sensibilities",
            "urlToImage": "https://i.guim.co.uk/img/media/6f5856ff504b805afc7dee7e115045b09c49990a/0_274_6048_3628/master/6048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=efd081852dc30fda5753eee7a8fd35ea",
            "publishedAt": "2022-06-20T17:38:15Z",
            "content": "The boss of the US media company Paramount has said he does not want to remove historic programmes from his new subscription streaming service because they no longer meet current expectations.\r\nBob B… [+1896 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Samuel Gibbs Consumer technology editor",
            "title": "Nreal Air review: new augmented reality specs put a big screen in your view",
            "description": "AR smart glasses with displays now widely available in UK but must be connected to a smartphone to workThe first widely available augmented reality glasses have hit the UK high street, putting TV shows, movies and games on a big virtual screen just in front o…",
            "url": "https://amp.theguardian.com/technology/2022/jun/20/nreal-air-review-ar-smart-glasses-uk",
            "urlToImage": "https://i.guim.co.uk/img/media/ba1cf6ba7b3b17ab8687c34041f6b0f9ee356268/339_483_4507_2704/master/4507.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTMucG5n&enable=upscale&s=a022d49a5224937b82d631fd2bcf9932",
            "publishedAt": "2022-06-20T06:00:10Z",
            "content": "The first widely available augmented reality glasses have hit the UK high street, putting TV shows, movies and games on a big virtual screen just in front of your eyes. But while the Nreal Air are th… [+9415 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Juli Clover",
            "title": "President Biden Praises Apple Employees in Maryland for Unionizing",
            "description": "U.S. President Joe Biden this morning said that he was \"proud\" of Apple employees in Maryland who voted to unionize over the weekend, reports Reuters. Though other Apple retail locations have been discussing unionization, the Maryland employees are the first …",
            "url": "https://www.macrumors.com/2022/06/20/apple-store-maryland-union-biden-praise/",
            "urlToImage": "https://images.macrumors.com/t/bMT8pACVgG_kp94mcmej24ejHBI=/2000x/article-new/2022/06/towson-maryland-apple-store.jpg",
            "publishedAt": "2022-06-20T17:07:33Z",
            "content": "U.S. President Joe Biden this morning said that he was \"proud\" of Apple employees in Maryland who voted to unionize over the weekend, reports Reuters. Though other Apple retail locations have been di… [+2652 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "iOS 16 Will Let iPhone Users Bypass CAPTCHAs in Supported Apps and Websites",
            "description": "Tapping on images of traffic lights or deciphering squiggly text to prove you are human will soon be a much less common nuisance for iPhone users, as iOS 16 introduces support for bypassing CAPTCHAs in supported apps and websites.\n\n\n\n\n\nThe handy new feature c…",
            "url": "https://www.macrumors.com/2022/06/20/ios-16-bypass-captchas/",
            "urlToImage": "https://images.macrumors.com/t/SECgzp2tH_rqv6pl0JxtEQ29eVQ=/2124x/article-new/2022/06/iOS-16-Bypass-CAPTCHA.jpg",
            "publishedAt": "2022-06-20T15:44:33Z",
            "content": "Tapping on images of traffic lights or deciphering squiggly text to prove you are human will soon be a much less common nuisance for iPhone users, as iOS 16 introduces support for bypassing CAPTCHAs … [+1299 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Meara Isenberg",
            "title": "New Beyoncé Single 'Break My Soul' Drops Tonight: What to Know - CNET",
            "description": "It's the first single from her upcoming album, Renaissance.",
            "url": "https://www.cnet.com/culture/entertainment/new-beyonce-single-break-my-soul-drops-tonight-what-to-know/",
            "urlToImage": "https://www.cnet.com/a/img/resize/599023f9c26b79297444cc46be9b5996fc404e03/2022/06/20/9fa77790-a1de-40bf-8e55-77ac8f0fb58d/gettyimages-1051936458.jpg?auto=webp&fit=crop&height=630&width=1200",
            "publishedAt": "2022-06-20T15:11:00Z",
            "content": "We're getting a new single from Beyoncé today, offering a taste of her upcoming album, Renaissance. Break My Soul will be the first song released from the album, and it's set to drop tonight at 12 a.… [+2686 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Mark Serrels",
            "title": "The Netflix Video Game More People Need to Play - CNET",
            "description": "Yes, video game. You read that right.",
            "url": "https://www.cnet.com/culture/entertainment/the-netflix-video-game-more-people-need-to-play/",
            "urlToImage": "https://www.cnet.com/a/img/resize/8fcd4e53d7d968dad0a2dc40434715bb54a60a26/2022/06/20/456c382a-1401-4db7-99ca-8b0a5185ed59/poinpy.png?auto=webp&fit=crop&height=630&width=1200",
            "publishedAt": "2022-06-20T23:06:00Z",
            "content": "Decades ago, when smartphones magically transformed into video game devices, I was very much a mobile gaming guy. I'd spend hours of my commute time on games like Doodle Jump, Angry Birds or Tiny Win… [+3415 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Entrepreneur"
            },
            "author": "Madeline Garfinkle",
            "title": "An Apple Store in Maryland Is the First to Unionize in the U.S.: 'We Did It Towson!'",
            "description": "Workers sought a union to receive more agency over compensation, work conditions, and safety operations.",
            "url": "https://www.entrepreneur.com/article/429874",
            "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1655739723-GettyImages-1342200877.jpg",
            "publishedAt": "2022-06-20T15:00:00Z",
            "content": "In a 65 to 33 vote of around 111 eligible employees, an Apple store in Towson, Maryland, elected to become the first unionized store in the U.S. and will join the International Association of Machini… [+2354 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Hartley Charlton",
            "title": "Sarcastic Android 'Lyric Explainer Video' Urges Apple to Adopt RCS in Messages",
            "description": "Google has urged Apple to adopt Rich Communication Services (RCS) in its Messages app in a \"lyric explainer video\" for Drake's \"Texts Go Green.\"\n\n\n\n\n\nRCS is designed to replace SMS messaging and touts support for higher resolution photos and videos, audio mes…",
            "url": "https://www.macrumors.com/2022/06/20/android-video-urges-apple-to-adopt-rcs/",
            "urlToImage": "https://images.macrumors.com/t/mVsxVkokGvYOZLv_lWKhis5yQl8=/2500x/article-new/2021/07/General-Apps-Messages.jpg",
            "publishedAt": "2022-06-20T12:32:06Z",
            "content": "Google has urged Apple to adopt Rich Communication Services (RCS) in its Messages app in a \"lyric explainer video\" for Drake's \"Texts Go Green.\"\r\nRCS is designed to replace SMS messaging and touts su… [+1140 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Hartley Charlton",
            "title": "AirTag Shipments Reportedly Grown Over Time, Making Second-Generation Model More Likely",
            "description": "Apple has gradually sold an increasing number of AirTags, despite not receiving much attention, according to Apple analyst Ming-Chi Kuo.\n\n\n\n\n\nIn a tweet, Kuo explained that he believes Apple shipped around 20 million AirTag item trackers in 2021, rising to 35…",
            "url": "https://www.macrumors.com/2022/06/20/airtag-shipments-reportedly-grown-over-time/",
            "urlToImage": "https://images.macrumors.com/t/hAYrP-u8n-DDiRCQO6heuZ7EJ9I=/2000x/article-new/2021/05/airtag-in-hand.jpg",
            "publishedAt": "2022-06-20T10:22:41Z",
            "content": "Apple has gradually sold an increasing number of AirTags, despite not receiving much attention, according to Apple analyst Ming-Chi Kuo.\r\nIn a tweet, Kuo explained that he believes Apple shipped arou… [+858 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Mat Smith",
            "title": "The Morning After: Google uses Drake's 'Texts Go Green' to explain RCS to Apple - Yahoo Canada Shine On",
            "description": "Google uses Drake’s ‘Texts Go Green’ to explain RCS to Apple,\nSenators call for a common charger standard in the US,\nBalenciaga looks even worse on Mark...",
            "url": "https://ca.news.yahoo.com/the-morning-after-google-drake-texts-go-green-rcs-apple-111559996.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/qN0BwdlfG6DQXebVxoLLog--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTU-/https://s.yimg.com/os/creatr-uploaded-images/2022-03/935e9c30-9ef5-11ec-af7f-7b7bd5855154",
            "publishedAt": "2022-06-20T11:15:59Z",
            "content": "Google has been trying to nudge Apple into adopting the GSMAs RCS messaging protocol, from not-so-subtle jabs at I/O 2022 to lengthy Twitter threads from the head of Android. The latest tool from the… [+2611 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Boing Boing"
            },
            "author": "Boing Boing's Shop",
            "title": "This Mac bundle is stacked with apps, and it's only $49",
            "description": "Let's be honest. Macs are fantastic, and they have been for quite some time. Apple has always done a great job of making sleek, stylish, fun, and downright practical pieces of technology for your everyday use. \n\n\n\nBut with all of the wonderful features that m…",
            "url": "https://boingboing.net/2022/06/20/this-mac-bundle-is-stacked-with-apps-and-its-only-49.html",
            "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2022/06/sale_313145_article_image.jpeg?fit=1200%2C800&ssl=1",
            "publishedAt": "2022-06-20T21:00:00Z",
            "content": "Let's be honest. Macs are fantastic, and they have been for quite some time. Apple has always done a great job of making sleek, stylish, fun, and downright practical pieces of technology for your eve… [+1717 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Tomás Rivero",
            "title": "iOS 16 podrá resolver los Captcha por ti",
            "description": "¿Cansado de confirmar que no eres un robot? Pues estás de suerte. Al actualizar a iOS 16, Apple incluirá en tu dispositivo una nueva función que te permitirá saltarte este paso de seguridad implementado en algunos sitios web. No importa si se trata de señalar…",
            "url": "https://hipertextual.com/2022/06/ios-16-resolver-captcha-automaticamente",
            "urlToImage": "https://newspack-hipertextual.s3.amazonaws.com/wp-content/uploads/2022/06/Apple-iOS-16-scaled.jpg",
            "publishedAt": "2022-06-20T18:46:11Z",
            "content": "¿Cansado de confirmar que no eres un robot? Pues estás de suerte. Al actualizar a iOS 16, Apple incluirá en tu dispositivo una nueva función que te permitirá saltarte este paso de seguridad implement… [+3014 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Nicolás Rivera",
            "title": "Tesla perderá el liderazgo en coches eléctricos en apenas 18 meses",
            "description": "Tesla es líder indiscutible en lo que a coches eléctricos se refiere. Y, durante años, ha sido clave en la transición hacia estas unidades de potencia más sostenibles y, desde un punto de vista técnico, también superiores a los motores de combustión convencio…",
            "url": "https://hipertextual.com/2022/06/tesla-perdera-el-liderazgo-en-coches-electricos-en-2024",
            "urlToImage": "https://newspack-hipertextual.s3.amazonaws.com/wp-content/uploads/2022/04/paul-steuber-huV0Jexsi3o-unsplash-scaled.jpg",
            "publishedAt": "2022-06-20T11:20:28Z",
            "content": "Tesla es líder indiscutible en lo que a coches eléctricos se refiere. Y, durante años, ha sido clave en la transición hacia estas unidades de potencia más sostenibles y, desde un punto de vista técni… [+2941 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Judy Berman",
            "title": "Snowflake Mountain Isn’t Just Pandering to Viewers on the Right. It’s Also Hinting at Where Netflix May Be Headed",
            "description": "The streamer's latest foray into reality TV is, depending on your age, location, and political sympathies, either pandering to you or trolling you",
            "url": "https://time.com/6188548/snowflake-mountain-netflix-review/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2022/06/SM_101_Unit_00617_RT.jpg?quality=85&w=1200&h=628&crop=1",
            "publishedAt": "2022-06-20T07:01:49Z",
            "content": "Snowflake Mountain is, depending on your age, location, and political sympathies, either pandering to you or trolling you. Its bias is right there in the first word of the title, a favorite pejorativ… [+7836 chars]"
        }
    ]
    constructor() {
        super();
        console.log("hello i'm constructor form news");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
  async  componentDidMount(){
        console.log("cdm");
        let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bf5789592b524b108ad26d42900baed6"
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});

    }
    render() {
        return (
            <div>
                <div className="container my-5">
                    <div className="row">
                        {this.state.articles.map((element) => {
                          return  <div className="col-12 col-md-4" key={element.url}>
                          <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,50):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                      </div>
                        })}
                       
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default News