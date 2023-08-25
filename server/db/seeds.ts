use ClusterSeeds

db.dropDatabase();

db.books.insertMany([{
    title: 'Shuggie Bain',
    author: 'Douglas Stuart',
    description: 'It is 1981. Glasgow is dying and good families must grift to survive. Agnes Bain has always expected more from life, dreaming of greater things. But Agnes is abandoned by her philandering husband, and as she descends deeper into drink, the children try their best to save her, yet one by one they must abandon her to save themselves',
    image: '/images/shuggie_bain.jpg',
    category: 'fiction',
    price: 13,
    stock: 6
  },
  {
   
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An Easy and Proven Way to Build Good Habits and Break Bad Ones : Tiny Changes, Remarkable Results',
    image: '/images/atomic_habits.jpg',
    category: 'self-help',
    price: 14,
    stock: 0
  },
  {
    
    title: 'The Mirror & The Light',
    author: 'Hilary Mantel',
    description: "England, May 1536. Anne Boleyn is dead, decapitated in the space of a heartbeat by a hired French executioner. As her remains are bundled into oblivion, Thomas Cromwell breakfasts with the victors. The blacksmith's son from Putney emerges from the spring's bloodbath to continue his climb to power and wealth, while his formidable master, Henry VIII, settles to short-lived happiness with his third queen, Jane Seymour.\n" +
      '\n' +
      "Cromwell is a man with only his wits to rely on; he has no great family to back him, no private army. Despite rebellion at home, traitors plotting abroad and the threat of invasion testing Henry's regime to breaking point, Cromwell's robust imagination sees a new country in the mirror of the future. But can a nation, or a person, shed the past like a skin? Do the dead continually unbury themselves? What will you do, the Spanish ambassador asks Cromwell, when the king turns on you, as sooner or later he turns on everyone close to him?",
    image: '/images/the_mirror.jpg',
    category: 'fiction',
    price: 9,
    stock: 4
  },
  {
    
    title: "Thinking, Fast and Slow'",
    author: 'Daniel Kahneman',
    description: "Why is there more chance we'll believe something if it's in a bold type face? Why are judges more likely to deny parole before lunch? Why do we assume a good-looking person will be more competent? The answer lies in the two ways we make choices: fast, intuitive thinking, and slow, rational thinking. This book reveals how our minds are tripped up by error and prejudice (even when we think we are being logical), and gives you practical techniques for slower, smarter thinking. It will enable to you make better decisions at work, at home, and in everything you do.",
    image: '/images/thinking_fast_and_slow.jpg',
    category: 'non-fiction',
    price: 12,
    stock: 2
  },
  {
    
    title: 'Why we sleep',
    author: 'Matthew P. Walker',
    description: "Sleep is one of the most important aspects of our life, health and longevity and yet it is increasingly neglected in twenty-first-century society, with devastating consequences: every major disease in the developed world - Alzheimer's, cancer, obesity, diabetes - has very strong causal links to deficient sleep.\n" +
      '\n' +
      'In this book, the first of its kind written by a scientific expert, Professor Matthew Walker explores twenty years of cutting-edge research to solve the mystery of why sleep matters. Looking at creatures from across the animal kingdom as well as major human studies, Why We Sleep delves into everything from what really happens during REM sleep to how caffeine and alcohol affect sleep and why our sleep patterns change across a lifetime, transforming our appreciation of the extraordinary phenomenon that safeguards our existence.',
    image: '/images/why_we_sleep.jpg',
    category: 'psychology',
    price: 11,
    stock: 4
  },
  {
   
    title: 'The Catcher in the Rye',
    author: 'J. D. Salinger',
    description: "'If you really want to hear about it, the first thing you'll probably want to know is where I was born, and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth.'                              The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caufield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days.",
    image: '/images/the_catcher_in_the_rye.jpg',
    category: 'fiction',
    price: 9,
    stock: 15
  },
  {
    
    title: 'Brave New Norld',
    author: 'Aldous Huxley',
    description: "Welcome to New London. Everybody is happy here. Our perfect society achieved peace and stability through the prohibition of monogamy, privacy, money, family and history itself. Now everyone belongs. You can be happy too. All you need to do is take your Soma pills.              Discover the brave new world of Aldous Huxley's classic novel, written in 1932, which prophesied a society which expects maximum pleasure and accepts complete surveillance - no matter what the cost.",
    image: '/images/brave_new_world.jpg',
    category: 'fiction',
    price: 10,
    stock: 6
  },
  {
    
    title: 'The Big Sleep',
    author: 'Raymond Chandler',
    description: "Los Angeles Private Investigator Philip Marlowe is hired by wheelchair-bound General Sternwood to discover who is blackmailing him. A broken, weary old man, Sternwood just wants Marlowe to make the problem go away. However, with Sternwood's two wild, devil-may-care daughters prowling LA's seedy backstreets, Marlowe's got his work cut out. And that's before he stumbles over the first corpse.",
    image: '/images/the_big_sleep.jpg',
    category: 'crime',
    price: 15,
    stock: 8
  },
  {
   
    title: 'Island',
    author: 'Aldous Huxley',
    description: 'For over a hundred years the Pacific island of Pala has been the scene of a unique experiment in civilisation. Its inhabitants live in a society where western science has been brought together with Eastern philosophy to create a paradise on earth. When cynical journalist, Will Farnaby, arrives to research potential oil reserves on Pala, he quickly falls in love with the way of life on the island. Soon the need to complete his mission becomes an intolerable burden and he must make a difficult choice.                                                                    In counterpoint to Brave New World and Ape and Essence, in Island Huxley gives us his vision of utopia.',
    image: '/images/island.jpg',
    category: 'fiction',
    price: 10,
    stock: 6
  },
  {
    
    title: 'Bounce',
    author: 'Matthew Syed',
    description: `What are the real secrets of sporting success, and what lessons do they offer about life? Why doesn't Tiger Woods "choke"? Why are the best figure skaters those that have fallen over the most and why has one small street in Reading produced more top table tennis players than the rest of the country put together.`,
    image: '/images/bounce.jpg',
    category: 'self-help',
    price: 9,
    stock: 3
  },
  {
    
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    description: "Shocking and controversial when it was first published, The Grapes of Wrath is Steinbeck's Pultizer Prize-winning epic of the Joad family, forced to travel west from Dust Bowl era Oklahoma in search of the promised land of California. Their story is one of false hopes, thwarted desires and powerlessness, yet out of their struggle Steinbeck created a drama that is both intensely human and majestic in its scale and moral vision.",
    image: '/images/the_grapes_of_wrath.jpg',
    category: 'fiction',
    price: 8,
    stock: 13
  },
  {
    
    title: 'Don Quixote',
    author: 'Miguel de Cervantes Saavedra',
    description: "Widely regarded as the world's first modern novel, and one of the funniest and most tragic books ever written, Don Quixote chronicles the famous picaresque adventures of the noble knight-errant Don Quixote de La Mancha and his faithful squire, Sancho Panza, as they travel through sixteenth-century Spain.",
    image: '/images/Don_Q.jpg',
    category: 'fiction',
    price: 11,
    stock: 24
  },
  {
    
    title: 'Iron Curtain',
    author: 'Anne Applebaum',
    description: "At the end of the Second World War, the Soviet Union unexpectedly found itself in control of a huge swathe of territory in Eastern Europe. Stalin and his secret police set out to convert a dozen radically different countries to a completely new political and moral system: Communism. Anne Applebaum's landmark history of this brutal time shows how societies were ruthlessly eviscerated by Communist regimes, how opposition was destroyed and what life was like for ordinary people who had to choose whether to fight, to flee or to collaborate.                A haunting reminder of how fragile freedom can be, Iron Curtain is an exceptional work of historical and moral reckoning.",
    image: '/images/iron_curtain.jpg',
    category: 'history',
    price: 13,
    stock: 6
  },
  {
    
    title: 'The Cold War',
    author: 'Odd Arne Westad',
    description: "'As Germany and then Japan surrendered in 1945 there was a tremendous hope that a new and much better world could be created from the moral and physical ruins of the conflict. Instead, the combination of the huge power of the USA and USSR and the near-total collapse of most of their rivals created a unique, grim new environment: the Cold War.                              For over forty years the demands of the Cold War shaped the life of almost all of us. There was no part of the world where East and West did not, ultimately, demand a blind and absolute allegiance, and nowhere into which the West and East did not reach. Countries as remote from each other as Korea, Angola and Cuba were defined by their allegiances. Almost all civil wars became proxy conflicts for the superpowers. Europe was seemingly split in two indefinitely.                         Arne Westad's remarkable new book is the first to have the distance from these events and the ambition to create a convincing, powerful narrative of the Cold War. The book is genuinely global in its reach and captures the dramas and agonies of a period always overshadowed by the horror of nuclear war and which, for millions of people, was not 'cold' at all: a time of relentless violence, squandered opportunities and moral failure.",
    image: '/images/cold_war.jpg',
    category: 'history',
    price: 15,
    stock: 5
  },
  {
    
    title: 'Bloodlands',
    author: 'Timothy Snyder',
    description: "Americans call the Second World War 'the Good War.' But before it even began, America's ally Stalin had killed millions of his own citizens-and kept killing them during and after the war. Before Hitler was defeated, he had murdered six million Jews and nearly as many other Europeans. At war's end, German and Soviet killing sites fell behind the Iron Curtain, leaving the history of mass killing in darkness.                                 Assiduously researched, deeply humane, and utterly definitive, Bloodlands is a new kind of European history, presenting the mass murders committed by the Nazi and Stalinist regimes as two aspects of a single story. With a new afterword addressing the relevance of these events to the contemporary decline of democracy, Bloodlands is required reading for anyone seeking to understand the central tragedy of modern history and its meaning today.",
    image: '/images/bloodlands.jpg',
    category: 'history',
    price: 17,
    stock: 2
  },
  {
    
    title: 'Lives of the Ancient Egyptians',
    author: 'Toby Wilkinson',
    description: "From the dawn of history to the death of Cleopatra, ancient Egypt was home to larger-than-life personalities. Across one hundred lives, Toby Wilkinson explores the true character and diversity of human experience in the ancient world's greatest civilization. Some of those profiled are famous: pharaohs and queens such as Akhenaten, Nefertiti, Ramesses II and Tiye. Others are lesser known but equally engaging: Imhotep, architect of the first pyramid; Perniankhu, the court dwarf; and the royal sculptor Bak. Equally illuminating are the lives of commoners, so rarely given their own voice: ordinary men and women who include a doctor, a dentist, a housewife, a musician - and a serial criminal.",
    image: '/images/ancient_egypt.jpg',
    category: 'history',
    price: 12,
    stock: 6
  },
  {
   
    title: 'Ancient Greece ',
    author: 'Thomas R. Martin',
    description: 'Focusing on the development of the Greek city-state and the society, culture, and architecture of Athens in its Golden Age, Thomas R. Martin integrates political, military, social, and cultural history in a book that will appeal to students and general readers alike. Now in its second edition, this classic work now features new maps and illustrations, a new introduction, and updates throughout.',
    image: '/images/ancient_greece.jpg',
    category: 'history',
    price: 16,
    stock: 6
  },
  {
    
    title: 'All Hell Let Loose',
    author: 'Max Hastings',
    description: "A magisterial history of the greatest and most terrible event in history, from one of the finest historians of the Second World War. A book which shows the impact of war upon hundreds of millions of people around the world- soldiers, sailors and airmen; housewives, farm workers and children..             Reflecting Max Hastings's thirty-five years of research on World War II, All Hell Let Loose describes the course of events, but focuses chiefly upon human experience, which varied immensely from campaign to campaign, continent to continent.The author emphasises the Russian front, where more than 90% of all German soldiers who perished met their fate. He argues that, while Hitler's army often fought its battles brilliantly well, the Nazis conducted their war effort with 'stunning incompetence'. He suggests that the Royal Navy and US Navy were their countries' outstanding fighting services, while the industrial contribution of the United States was much more important to allied victory than that of the US Army.                                                            The book ranges across a vast canvas, from the agony of Poland amid the September 1939 Nazi invasion, to the 1943 Bengal famine, in which at least a million people died under British rule- and British neglect. Among many vignettes, there are the RAF's legendary raid on the Ruhr dams, the horrors of Arctic convoys, desert tank combat, jungle clashes. Some of Hastings's insights and judgements will surprise students of the conflict, while there are vivid descriptions of the tragedies and triumphs of a host of ordinary people, in uniform and out of it.                       'The cliché is profoundly true', he says. 'The world between 1939 and 1945 saw some human beings plumb the depths of baseness, while others scaled the heights of courage and nobility'. This is 'everyman's story', an attempt to answer the question: 'What was the Second World War like ?', and also an overview of the big picture. Max Hastings employs the technique which has made many of his previous books best-sellers, combining top-down analysis and bottom-up testimony to explore the meaning of this vast conflict both for its participants and for posterity.",
    image: '/images/all_hell_let_loose.jpg',
    category: 'history',
    price: 12,
    stock: 6
  },
  {
  
    title: 'Catastrophe',
    author: 'Max Hastings',
    description: "The Amazon History Book of the Year 2013 is a magisterial chronicle of the calamity that befell Europe in 1914 as the continent shifted from the glamour of the Edwardian era to the tragedy of total war.                                              In 1914, Europe plunged into the 20th century's first terrible act of self-immolation - what was then called The Great War. On the eve of its centenary, Max Hastings seeks to explain both how the conflict came about and what befell millions of men and women during the first months of strife.He finds the evidence overwhelming, that Austria and Germany must accept principal blame for the outbreak. While what followed was a vast tragedy, he argues passionately against the 'poets' view', that the war was not worth winning. It was vital to the freedom of Europe, he says, that the Kaiser's Germany should be defeated.His narrative of the early battles will astonish those whose images of the war are simply of mud, wire, trenches and steel helmets. Hastings describes how the French Army marched into action amid virgin rural landscapes, in uniforms of red and blue, led by mounted officers, with flags flying and bands playing. The bloodiest day of the entire Western war fell on 22 August 1914, when the French lost 27,000 dead. Four days later, at Le Cateau the British fought an extraordinary action against the oncoming Germans, one of the last of its kind in history. In October, at terrible cost they held the allied line against massive German assaults in the first battle of Ypres.The author also describes the brutal struggles in Serbia, East Prussia and Galicia, where by Christmas the Germans, Austrians, Russians and Serbs had inflicted on each other three million casualties.                                                      This book offers answers to the huge and fascinating question 'what happened to Europe in 1914?', through Max Hastings's accustomed blend of top-down and bottom-up accounts from a multitude of statesmen and generals, peasants, housewives and private soldiers of seven nations. His narrative pricks myths and offers some striking and controversial judgements. For a host of readers gripped by the author's last international best-seller 'All Hell Let Loose', this will seem a worthy successor.",
    image: '/images/catastrophe.jpg',
    category: 'history',
    price: 12,
    stock: 6
  },
  {

    title: 'The Real Life of Sebastian Knight',
    author: 'Vladimir Nabokov',
    description: "Spurred on by admiration for his novelist half-brother and irritation at the biography written about him by Mr Goodman ('his slapdash and very misleading book'), the narrator, V, sets out to record Sebastian Knight's life as he understands it. But buried amid the extensive quoting, digressions, seeming explanations and digs, Sebastian's erratic and troubled persona remains as elusive as ever.                       Nabokov's first novel written in English, The Real Life of Sebastian Knight is a nuanced, enigmatic potrayal of the conflict between the real and the unreal, and the futile quest for human truth.",
    image: '/images/real_life_of_sebastian.jpg',
    category: 'fiction',
    price: 8,
    stock: 1
  },
  {
    title: 'The Long Good-Bye',
    author: 'Raymon Chandler',
    description: "Down-and-out drunk Terry Lennox has a problem: his millionaire wife is dead and he needs to get out of LA fast. So he turns to his only friend in the world: Philip Marlowe, Private Investigator.      He's willing to help a man down on his luck, but later, Lennox commits suicide in Mexico and things start to turn nasty. Marlowe finds himself drawn into a sordid crowd of adulterers and alcoholics in LA's Idle Valley, where the rich are suffering one big suntanned hangover.               Marlowe is sure Lennox didn't kill his wife, but how many more stiffs will turn up before he gets to the truth?",
    image: '/images/long_goodby.jpg',
    category: 'crime',
    price: 9,
    stock: 1
  },
  {
    title: 'The Maltese Falcon',
    author: 'Dashiell Hammett',
    description: "Sam Spade is hired by the fragrant Miss Wonderley to track down her sister, who has eloped with a louse called Floyd Thursby. But Miss Wonderley is in fact the beautiful and treacherous Brigid O'Shaughnessy, and when Spade's partner Miles Archer is shot while on Thursby's trail, Spade finds himself both hunter and hunted: can he track down the jewel-encrusted bird, a treasure worth killing for, before the Fat Man finds him?",
    image: '/images/maltese_falcon.jpg',
    category: 'crime',
    price: 7,
    stock: 5
  },
  {
    title: 'The Little Sister',
    author: 'Raymond Chandler',
    description: "In noir master Raymond Chandler's The Little Sister, a movie starlet with a gangster boyfriend and a pair of siblings with a shared secret lure private eye Philip Marlowe into the less than glamorous and more than a little dangerous world of Hollywood fame. Chandler's first foray into the industry that dominates the company town that is Los Angeles.",
    image: '/images/little_sister.jpg',
    category: 'crime',
    price: 10,
    stock: 2
  },
  {
    title: 'Ancient Greece ',
    author: 'Thomas R. Martin',
    description: 'Focusing on the development of the Greek city-state and the society, culture, and architecture of Athens in its Golden Age, Thomas R. Martin integrates political, military, social, and cultural history in a book that will appeal to students and general readers alike. Now in its second edition, this classic work now features new maps and illustrations, a new introduction, and updates throughout.',
    image: '/images/ancient_greece.jpg',
    category: 'history',
    price: 16,
    stock: 6
  },
  {
    title: 'The Language Instinct',
    author: 'Steven Pinker',
    description: "How do babies learn to speak? Why are there so many languages? Do we think in our mother tongue? Who decides what's correct English?How did language evolve? In this landmark book, Pinker explains the mysteries of language within a coherent theory: that language is an adaptation for communication.",
    image: '/images/language_instinct.jpg',
    category: 'non-fiction',
    price: 12,
    stock: 3
  },
  {
    title: 'The Gift',
    author: 'Vladimir Nabokov',
    description: "The Gift is the phantasmal autobiography of Fyodor Godunov-Cherdynstev, a writer living in the closed world of Russian intellectuals in Berlin shortly after the First World War. This gorgeous tapestry of literature and butterflies tells the story of Fyodor's pursuits as a writer. Its heroine is not Fyodor's elusive and beloved Zina, however, but Russian prose and poetry themselves.",
    image: '/images/gift.jpg',
    category: 'fiction',
    price: 11,
    stock: 2
  },
  {
    title: 'Behave',
    author: 'Robert A. Sapolsky',
    description: 'We are capable of savage acts of violence but also spectacular feats of kindness: is one side of our nature destined to win out over the other?                                                       Every act of human behaviour has multiple layers of causation, spiralling back seconds, minutes, hours, days, months, years, even centuries, right back to the dawn of time and the origins of our species.                                                                  In the epic sweep of history, how does our biology affect the arc of war and peace, justice and persecution? How have our brains evolved alongside our cultures?',
    image: '/images/behave.jpg',
    category: 'non-fiction',
    price: 11,
    stock: 0
  },
  {
    title: 'The Brain That Changes Itself',
    author: 'Norman Doidge',
    description: "Meet the ninety-year-old doctor who is still practicing medicine, the stroke victim who learned to move and talk again and the woman with half a brain that rewired itself to work as a whole.            All these people had their lives transformed by the remarkable discovery that our brains can repair themselves through the power of positive thinking.Here bestselling author, psychiatrist and psychoanalyst Norman Doidge reveals the secrets of the cutting-edge science of 'neuroplasticity'. He introduces incredible case histories - blind people helped to see, IQs raised and memories sharpened - and tells the stories of the maverick scientists who are overturning centuries of assumptions about the brain.               This inspiring book will leave you with a sense of wonder at the capabilities of the mind, and the self-healing power that lies within all of us.",
    image: '/images/brain.jpg',
    category: 'non-fiction',
    price: 11,
    stock: 2
  },
  {
    title: 'In Cold Blood',
    author: 'Truman Capote',
    description: "Controversial and compelling, In Cold Blood reconstructs the murder in 1959 of a Kansas farmer, his wife and children. Truman Capote's comprehensive study of the killings and subsequent investigation explores the circumstances surrounding this terrible crime and the effect it had on those involved. At the centre of his study are the amoral young killers Perry Smith and Dick Hickcock, who, vividly drawn by Capote, are shown to be reprehensible, yet entirely and frighteningly human. The book that made Capote's name, In Cold Blood is a seminal work of modern prose, a remarkable synthesis of journalistic skill and powerfully evocative narrative.",
    image: '/images/in_cold_blood.jpg',
    category: 'fiction',
    price: 8,
    stock: 12
  },
  {
    title: 'The Blade Itself',
    author: 'Joe Abercrombie',
    description: "Inquisitor Glokta, a crippled and increasingly bitter relic of the last war, former fencing champion turned torturer extraordinaire, is trapped in a twisted and broken body - not that he allows it to distract him from his daily routine of torturing smugglers.Nobleman, dashing officer and would-be fencing champion Captain Jezal dan Luthar is living a life of ease by cheating his friends at cards. Vain, shallow, selfish and self-obsessed, the biggest blot on his horizon is having to get out of bed in the morning to train with obsessive and boring old men. And Logen Ninefingers, an infamous warrior with a bloody past, is about to wake up in a hole in the snow with plans to settle a blood feud with Bethod, the new King of the Northmen, once and for all - ideally by running away from it. But as he's discovering, old habits die really, really hard indeed... ...especially when Bayaz gets involved. A bald old man with a terrible temper and a pathetic assistant, he could be the First of the Magi, he could be a spectacular fraud, but whatever he is, he's about to make the lives of Glotka, Jezal and Logen a whole lot more difficult...",
    image: '/images/the_blade.jpg',
    category: 'fiction',
    price: 13,
    stock: 9
  },
  {
    title: 'Light on Yoga',
    author: 'B. K. S. Iyengar',
    description: "A modern yoga classic • Deepen your practice with the definitive guide to the philosophy and practice of yoga—the ancient healing discipline for body and mind—by the world-renowned teacher who brought the art of yoga to the West. Light on Yoga provides complete descriptions and illustrations of yoga positions and breathing exercises, along with explanations of the main philosophies of yoga. Iyengar's style and teachings emphasize precision and alignment, planned sequencing, timing, and the use of props. • Learn Proper Alignment • Dive Deeper Into Yoga Philosophy • Cultivate Inner Awareness With Pranayama • Learn Sanskrit • Learn Inspiration On and Off the Mat.",
    image: '/images/yoga.jpg',
    category: 'non-fiction',
    price: 19,
    stock: 1
  }

])