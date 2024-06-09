import React from 'react'
import NewsItems from './NewsItems'

export default function NewsComponent() {
    let articles = [
        {
            "source": {
            "id": null,
            "name": "Slate Magazine"
            },
            "author": "Lizzie O’Leary",
            "title": "Fee’d Up: A Musician’s Take on Ticketmaster",
            "description": "Would breaking up Live Nation/Ticketmaster actually help artists?",
            "url": "https://slate.com/podcasts/whatnexttbd/2024/06/howlaurajanegracecanaffordtotour",
            "urlToImage": "https://compote.slate.com/images/9a0bf6e2aafa405faa12475adca84b70.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
            "publishedAt": "20240609T09:00:00Z",
            "content": "Its hard to imagine music fans mourning a breakup of Ticketmaster and its parent company Live Nation, as a Department of Justice lawsuit requests. But even with this monopolistic middleman out of th… [+478 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Xataka.com"
            },
            "author": "Herrera Castro",
            "title": "MediaMarkt tiene descuentazos para dar y regalar este fin de semana: smart TVs, teléfonos, portátiles y mucho más",
            "description": "MediaMarkt vuelve una semana más con una gran selección de ofertas en distintos dispositivos para aquellos usuarios que estén a la caza de productos con descuento.  Se acercan el verano y el gasto de las vacaciones y son muchos los usuarios que pueden hacerse…",
            "url": "https://www.xataka.com/seleccion/mediamarkttienedescuentazosparadarregalarestefinsemanasmarttvstelefonosportatilesmucho",
            "urlToImage": "https://i.blogs.es/761f4f/tech_village_rotterdam_1/840_560.jpeg",
            "publishedAt": "20240609T08:31:53Z",
            "content": "MediaMarkt vuelve una semana más con una gran selección de ofertas en distintos dispositivos para aquellos usuarios que estén a la caza de productos con descuento.  Se acercan el verano y el gasto de… [+4128 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Xataka.com"
            },
            "author": "Yúbal Fernández",
            "title": "Los 22 mejores GPTs para mejorar las funciones de tu ChatGPT",
            "description": "Te traemos una colección con los mejores GPTs para ChatGPT, de forma que puedas ampliar las posibilidades de este chatbot de inteligencia artificial. Los GPTs son unos modelos de ChatGPT entrenados específicamente para tareas concretas, y que aumentan las hab…",
            "url": "https://www.xataka.com/basics/22mejoresgptsparamejorarfuncionestuchatgpt",
            "urlToImage": "https://i.blogs.es/6f39d7/gpts/840_560.jpeg",
            "publishedAt": "20240609T12:01:56Z",
            "content": "Te traemos una colección con los mejores GPTs para ChatGPT, de forma que puedas ampliar las posibilidades de este chatbot de inteligencia artificial. Los GPTs son unos modelos de ChatGPT entrenados e… [+11339 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Xataka.com"
            },
            "author": "Javier Lacort",
            "title": "He usado el glucómetro de Ultrahuman durante dos semanas sin ser diabético. Aprendí algo sobre mi cuerpo, pero no es para cualquiera",
            "description": "Si algo me enseñó Superlópez en los noventa fue el sentido de la responsabilidad, el humor y el trabajo en equipo. Solo así se explica que cuando mi compañero Enrique me comentó que nos habían ofrecido probar el Ultrahuman M1, un glucómetro que pinchar en tu …",
            "url": "https://www.xataka.com/analisis/heusadoglucometroultrahumandurantedossemanasserdiabeticoaprendialgomicuerponopara",
            "urlToImage": "https://i.blogs.es/619405/ultrahumanm1destacada/840_560.jpeg",
            "publishedAt": "20240609T09:01:55Z",
            "content": "Si algo me enseñó Superlópez en los noventa fue el sentido de la responsabilidad, el humor y el trabajo en equipo. Solo así se explica que cuando mi compañero Enrique me comentó que nos habían ofreci… [+8449 chars]"
            },
            {
            "source": {
            "id": "foxnews",
            "name": "Fox News"
            },
            "author": "Kurt Knutsson, CyberGuy Report",
            "title": "AI is coming to iPhone next: 5 powerful things you can already do with iOS 17",
            "description": "Your iPhone can do much more now. Kurt \"CyberGuy\" Knutsson describes his top five favorite new iPhone features that Apple has rolled out with iOS 17.",
            "url": "https://www.foxnews.com/tech/aicomingiphonenexthere5powerfulthingsyoucanalreadydoios17",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/06/1Thetop5bestofiOS17features.jpg",
            "publishedAt": "20240609T14:00:21Z",
            "content": "Your iPhone can do a lot more now, thanks to the iOS 17 update. \r\nIf you just bought an iPhone 15, your phone will come with iOS 17 already installed. But if you have an older iPhone, you'll need to … [+3748 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Digital Trends"
            },
            "author": "Christine RomeroChan",
            "title": "I have the 2024 Apple Watch Pride band, and it’s stunning",
            "description": "It's Pride Month, and that means a new Pride Edition Apple Watch band. I have the latest 2024 band, and it's my new favorite.",
            "url": "https://www.digitaltrends.com/mobile/2024prideeditionapplewatchbandhandsonphotosstunning/",
            "urlToImage": "https://www.digitaltrends.com/wpcontent/uploads/2024/06/apple2024prideeditionbraidedsololoopsideviewlugs.jpg?resize=1200%2C630&p=1",
            "publishedAt": "20240609T15:30:23Z",
            "content": "Christine RomeroChan / Digital Trends\r\nIt’s June, which means it’s Pride Month. This takes place every year to honor the ongoing struggle for civil rights for the LGBTQ+ community, as well as the ac… [+4325 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Digital Trends"
            },
            "author": "Joe Maring",
            "title": "The one thing I really want to see at WWDC 2024",
            "description": "WWDC 2024 is almost upon us. As we inch closer and closer to Apple's big event, there's just one thing I desperately want to be announced.",
            "url": "https://www.digitaltrends.com/mobile/theonethingireallywantfromwwdc2024ios18aifeatures/",
            "urlToImage": "https://www.digitaltrends.com/wpcontent/uploads/2024/06/iphone15promaxnaturaltitaniumoutsidehand1.jpeg?resize=1200%2C630&p=1",
            "publishedAt": "20240609T13:00:22Z",
            "content": "Joe Maring / Digital Trends\r\nWell, folks, it’s almost time. WWDC 2024 — Apple’s annual developer conference — kicks off in a matter of hours. The Worldwide Developers Conference is always a big deal … [+4685 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Digital Trends"
            },
            "author": "Mark Coppock",
            "title": "I love the MacBook Pro, but this Windows laptop came surprisingly close",
            "description": "The MacBook Pro 16 sits atop the 16inch laptop world thanks to great performance and superior battery life. The Lenovo Yoga Pro 9i 16 costs less. Which wins?",
            "url": "https://www.digitaltrends.com/computing/lenovoyogapro9i16vsmacbookpro16/",
            "urlToImage": "https://www.digitaltrends.com/wpcontent/uploads/2024/01/applemacbookpro16m3maxspeakere1704401850364.jpg?resize=1200%2C630&p=1",
            "publishedAt": "20240609T12:00:34Z",
            "content": "Mark Coppock / Digital Trends\r\nThere are some great machines in the 15inch laptop category, which has recently been stretched to include the more common 16inch laptop. The best among them is the Ap… [+11526 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Digital Trends"
            },
            "author": "Dan Girolamo",
            "title": "Like Bad Boys: Ride or Die? Then watch these three action movies now",
            "description": "If you liked Bad Boys: Ride or Die, watch these three movies next, including one of the first great buddy cop movies and a giant blockbuster from Will Smith.",
            "url": "https://www.digitaltrends.com/movies/actionmovieslikebadboysrideordie/",
            "urlToImage": "https://www.digitaltrends.com/wpcontent/uploads/2017/10/bestnetflixmoviesmeninblack.jpg?resize=1200%2C630&p=1",
            "publishedAt": "20240609T15:00:53Z",
            "content": "Sony Pictures\r\nWill Smith and Martin Lawrence are grabbing their badges and suiting up for the fourth installment in the Bad Boys franchise, Bad Boys: Ride or Die. In the sequel, detectives Mike Lowr… [+3673 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "BBC News"
            },
            "author": null,
            "title": "Adults and teens turn to 'dumbphones' to cut screen time",
            "description": "Parents and teens alike are trading in their smartphones for \"dumber\" models to help stay offline.",
            "url": "https://www.bbc.com/news/articles/c7227njm45eo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4775/live/20b031601f7411efa13a0b8c563da930.jpg",
            "publishedAt": "20240609T01:56:23Z",
            "content": "By Emma Vardy, LA Correspondent, BBC News\r\nAdults and teens concerned about their screen time are turning in their smartphones for dumber models.\r\nBuried in the settings of many smartphones is the op… [+4391 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Medium"
            },
            "author": "Neta Dror",
            "title": "The Era of the Autodidact Is Here",
            "description": "It was always a bit difficult explaining people I was a visual artist AND a digital marketer, a web developer, a writer and a storyteller. 10 years ago, when I was applying to jobs, interviewers said…",
            "url": "https://medium.com/swlh/theeraoftheautodidacthasarrived9fb085cc51af",
            "urlToImage": "https://miro.medium.com/v2/resize:fit:500/1*gqPQzUeFaeOMzubDJGGyg.jpeg",
            "publishedAt": "20240609T13:40:08Z",
            "content": "It was always a bit difficult explaining people I was a visual artist AND a digital marketer, a web developer, a writer and a storyteller. 10 years ago, when I was applying to jobs, interviewers said… [+4490 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "heise online"
            },
            "author": "Judith Hohmann",
            "title": "Click Boom Flash: Neue PodcastFolge \"Geburten fotografieren\"",
            "description": "Welches Spezialwissen sollten Fotografen mitbringen, die eine Geburt begleiten? Oder geht es am Ende nur um Licht und Schatten?",
            "url": "https://www.heise.de/news/ClickBoomFlashNeuePodcastFolgeGeburtenfotografieren9749181.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.pnglossy85.webplossy85.foil1/_wwwheisede_/imgs/18/4/6/0/6/4/9/6/CtFoto_Podcast_16_97c539ba3ce9faccd.png",
            "publishedAt": "20240609T07:24:00Z",
            "content": "Erst vergehen Stunden voller Schmerz und dann geht es plötzlich ganz schnell ein Baby kommt auf die Welt und krempelt das Leben zweier Menschen um. Diesen intimen Moment erlebt jedes Paar unterschied… [+2141 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "9to5Mac"
            },
            "author": "Arin Waichulis",
            "title": "Security Bite: Apple refused to pay bounty to Kaspersky for uncovering vulnerability part of ‘Operation Triangulation’",
            "description": "Kaspersky, the renowned Russian cybersecurity firm, made headlines at this time last year after uncovering an attack chain using four iOS zeroday vulnerabilities to create a zeroclick exploit. Kaspersky was able to identify and report one of the vulnerabili…",
            "url": "https://9to5mac.com/2024/06/09/securitybiteapplerefusedtopaybountytokasperskyforuncoveringvulnerabilitypartofoperationtriangulation/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2023/11/ApplebreachedPERMrules.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "20240609T15:39:26Z",
            "content": "Kaspersky, the renowned Russian cybersecurity firm, made headlines at this time last year after uncovering an attack chain using four iOS zeroday vulnerabilities to create a zeroclick exploit. Kasp… [+4334 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "9to5Mac"
            },
            "author": "Benjamin Mayo",
            "title": "Apple blocks PC emulator from being available in iOS App Store and thirdparty app stores",
            "description": "App Review has rejected a submission from the developers of UTM, a generic PC system emulator for iPhone and iPad. \n\n\n\nThe open source app was submitted to the store, given the recent rule change that allows retro game console emulators, like Delta or Folium.…",
            "url": "https://9to5mac.com/2024/06/09/appleblockspcemulatorutmappstore/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2024/06/pcemulatoriosappstore.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "20240609T14:12:47Z",
            "content": "App Review has rejected a submission from the developers of UTM, a generic PC system emulator for iPhone and iPad. \r\nThe open source app was submitted to the store, given the recent rule change that … [+1651 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "9to5Mac"
            },
            "author": "Benjamin Mayo",
            "title": "Report: iOS 18 will tint iPhone app icons in dark mode, allow users to lock apps behind Face ID",
            "description": "On the day before WWDC, we have a couple more reports about some non AIrelated iPhone software, which Apple will officially announce tomorrow as part of iOS 18.\n\n\n\nMacRumors reports that app icons will change color in Dark Mode for the first time, with a dar…",
            "url": "https://9to5mac.com/2024/06/09/reportios18willtintappiconsindarkmodeallowuserstolockappsbehindfaceid/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2024/06/ios18darkicons.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "20240609T10:02:03Z",
            "content": "Mockup of dark colored Safari and Apple Music icons\r\nOn the day before WWDC, we have a couple more reports about some non AIrelated iPhone software, which Apple will officially announce tomorrow as … [+2645 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Genbeta.com"
            },
            "author": "Antonio Vallejo",
            "title": "Vivo en Andalucía y acabo de descubrir un inmenso catálogo para ver películas gratis de forma legal. Así funciona el servicio eFILM",
            "description": "A pesar de que hoy día tengamos más plataformas de suscripción que nunca, no hay que irse demasiado lejos si queremos disfrutar de películas y series gratis y de forma legal. Desde que las plataformas FAST (Free AdSupported Television) han comenzado a aparec…",
            "url": "https://www.genbeta.com/afondo/vivoandaluciaacabodescubririnmensocatalogoparaverpeliculasgratisformalegalasifuncionaservicioefilm",
            "urlToImage": "https://i.blogs.es/f3b28f/efilm/840_560.jpeg",
            "publishedAt": "20240609T15:01:59Z",
            "content": "A pesar de que hoy día tengamos más plataformas de suscripción que nunca, no hay que irse demasiado lejos si queremos disfrutar de películas y series gratis y de forma legal. Desde que las plataforma… [+4428 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Sponsored Content)",
            "title": "'Apple Intelligence' at the core of nextgen Apple hardware, services",
            "description": "Apple's forthcoming \"Apple Intelligence\" features will be the key to both future software and future hardware, including allnew device launches.Improvements to Siri and health monitoring will be at the core of future Apple hardware.A new report from Bloomber…",
            "url": "https://appleinsider.com/articles/24/06/09/appleintelligenceatthecoreofnextgenapplehardwareservices",
            "urlToImage": "https://photos5.appleinsider.com/gallery/599561229684427485987210907Sirixl4225638512xl.jpg",
            "publishedAt": "20240609T14:33:34Z",
            "content": "Improvements to Siri and health monitoring will be at the core of future Apple hardware.\r\nApple's forthcoming \"Apple Intelligence\" features will be the key to both future software and future hardware… [+2457 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Charles Martin)",
            "title": "Apple has drawn a fuzzy line about what counts as console emulation on iPhone",
            "description": "Apple's App Store app review team has rejected PC emulator UTM SE, spawning questions about what might be allowed, and from whom.Nowabandoned UTM multiplatform emulator for iOS.\"After almost two month long review process, Apple has rejected UTM SE from the …",
            "url": "https://appleinsider.com/articles/24/06/09/appleappearstohavedrawnafuzzylineforiphoneaboutwhatcountsasconsoleemulation",
            "urlToImage": "https://photos5.appleinsider.com/gallery/59957122972Unknown1xl.jpg",
            "publishedAt": "20240609T17:16:51Z",
            "content": "Nowabandoned UTM multiplatform emulator for iOS.\r\nApple's App Store app review team has rejected PC emulator UTM SE, spawning questions about what might be allowed, and from whom.\r\n\"After almost tw… [+2775 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Charles Martin)",
            "title": "iOS 18 is getting the ability to lock apps with Face ID & a dark mode expansion",
            "description": "New options in iOS 18 are rumored to include the ability to lock individual apps away from prying eyes, as well as taking the existing Dark Mode setting to new levels.Dark Mode may extend in iOS 18Beyond our own exclusive about what Siri will be able to do in…",
            "url": "https://appleinsider.com/articles/24/06/09/ios18isgettingtheabilitytolockappswithfaceiddarkmodeonthelockscreen",
            "urlToImage": "https://photos5.appleinsider.com/gallery/59955122967IMG_9197xl.jpg",
            "publishedAt": "20240609T13:06:43Z",
            "content": "Dark Mode may extend in iOS 18\r\nNew options in iOS 18 are rumored to include the ability to lock individual apps away from prying eyes, as well as taking the existing Dark Mode setting to new levels.… [+2882 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Christine McKee)",
            "title": "Apple's M3 MacBook Air plunges to $899, the lowest price ever",
            "description": "A recordbreaking price drop has hit Apple's M3 MacBook Air, dropping the 13inch model to just $899.B&H Photo and Amazon are engaged in a weekend price war, with both Apple Authorized Resellers slashing the price of the lastest MacBook Air down to $899.Buy f…",
            "url": "https://appleinsider.com/articles/24/06/09/applesm3macbookairplungesto899thelowestpriceever",
            "urlToImage": "https://photos5.appleinsider.com/gallery/59954122966m3macbookairlaptoponsalexl.jpg",
            "publishedAt": "20240609T06:15:15Z",
            "content": "A recordbreaking price drop has hit Apple's M3 MacBook Air, dropping the 13inch model to just $899.\r\nB&amp;H Photo and Amazon are engaged in a weekend price war, with both Apple Authorized Reseller… [+872 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Amber Neely)",
            "title": "The best alternatives to Adobe Photoshop, Illustrator, InDesign, and more",
            "description": "If you're quite ready to pony up the $60 a month it takes to access Adobe's Creative Cloud All Apps bundle, there are plenty of lowcost and nocost alternatives out there. Here are our favorites.The best alternatives to Adobe's bigname softwareAdobe product…",
            "url": "https://appleinsider.com/inside/mac/best/thebestalternativestoadobephotoshopillustratorindesignandmore",
            "urlToImage": "https://photos5.appleinsider.com/gallery/59927122881altnerantivesxl.jpg",
            "publishedAt": "20240609T12:45:04Z",
            "content": "The best alternatives to Adobe's bigname software\r\nIf you're quite ready to pony up the $60 a month it takes to access Adobe's Creative Cloud All Apps bundle, there are plenty of lowcost and nocos… [+10075 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Gizmodo.jp"
            },
            "author": "satomi",
            "title": "AIの覇権を握るのは誰？ 来週開催のWWDCの裏でうごめく思惑",
            "description": "アップル、グーグル、OpenAIなど、WWDCを前にして巨大テックたちが目論むAIの覇権争い状況を整理。",
            "url": "https://www.gizmodo.jp/2024/06/whowillbethewinnerinaiindustry.html",
            "urlToImage": "https://media.loomapp.com/gizmodo/dist/images/2024/06/07/shutterstock_2425536391.jpg?w=1280&h=630&f=jpg",
            "publishedAt": "20240609T11:00:00Z",
            "content": "GoogleOpenAI\r\niPhoneiOSChatGPTAppleOpenAIBloombergThe Information\r\nWWDC\r\nOpenAICEOAppleiPhoneChat GPTOpenAICEOGoogle\r\nAppleOpenAIChatGPTSiriThe Information\r\nBloombergAION\r\nAppleGoogleGeminiiPhone\r\nAp… [+805 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Yanko Design"
            },
            "author": "Vincent Nguyen",
            "title": "WWDC 2024: New Apple Intelligence From the Core",
            "description": "WWDC 2024: New Apple Intelligence From the CoreApologies for today’s Sneakers Sunday feature being replaced, but there’s a compelling reason: Apple’s special event, WWDC 2024, is taking place tomorrow. Given the significance...",
            "url": "https://www.yankodesign.com/2024/06/09/wwdc2024newappleintelligencefromthecore/",
            "urlToImage": "https://www.yankodesign.com/images/design_news/2024/06/wwdc2024newappleintelligencefromthecore/Image231.jpeg",
            "publishedAt": "20240609T17:20:53Z",
            "content": "Apologies for todays Sneakers Sunday feature being replaced, but theres a compelling reason: Apples special event, WWDC 2024, is taking place tomorrow. Given the significance of this event, Ill be at… [+10152 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Applesfera.com"
            },
            "author": "Álvaro García M.",
            "title": "La persona que puso la 'i' a los productos Apple cree que se debería eliminar de los iPhone",
            "description": "Si te hablamos de Ken Segall probablemente no sepas de quién hablamos. Si te hablamos del iMac, del iPod, del iPhone o del iPad seguro que sí. Pues tanto Ken Segall como todos estos productos tienen mucho en común, dado que Segall fue el hombre detrás de la \"…",
            "url": "https://www.applesfera.com/curiosidades/personaquepusoiaproductosapplecreequesedeberiaeliminariphone",
            "urlToImage": "https://i.blogs.es/37c931/iphonejobs/840_560.jpeg",
            "publishedAt": "20240609T15:01:59Z",
            "content": "Si te hablamos de Ken Segall probablemente no sepas de quién hablamos. Si te hablamos del iMac, del iPod, del iPhone o del iPad seguro que sí. Pues tanto Ken Segall como todos estos productos tienen … [+4237 chars]"
            }
    ];
  return (
    <div>
        <h1 className='font-semibold text-xl capitalize mb-5'>top headlines ...</h1>
        <div className='grid grid-cols-3 gap-5'>
            {/* <NewsItems title={title} description={description} imgUrl={imgUrl}/> */}
        {articles.map((element)=>{
            return <NewsItems
            title={`${element.title.slice(0,40)} . . .`}
            description={`${element.description.slice(0,50)} . . .`}
            imgUrl = {element.urlToImage}
            />
        })}
        </div>
    </div>
  )
}