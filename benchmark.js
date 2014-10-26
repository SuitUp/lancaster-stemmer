'use strict';

/**
 * Dependencies.
 */
var stemmer;

stemmer = require('./');

/**
 * Optional dependencies.
 */

var natural,
    exception;

try {
    require('./node_modules/paice/paice.js');
} catch (error) {
    exception = error;
}

try {
    natural = require('natural').LancasterStemmer.stem;
} catch (error) {
    exception = error;
}

if (exception) {
    console.log(
        '\u001B[0;31m' +
        'The libraries needed by this benchmark could not be found. ' +
        'Please execute:\n' +
        '  npm run install-benchmark\n\n' +
        '\u001B[0m'
    );
}

/**
 * Fixtures.
 *
 * The first 1000 words from Letterpress:
 *   https://github.com/atebits/Words
 */

var fixtures;

fixtures = [
    'aa',
    'aah',
    'aahed',
    'aahing',
    'aahs',
    'aal',
    'aalii',
    'aaliis',
    'aals',
    'aardvark',
    'aardvarks',
    'aardwolf',
    'aardwolves',
    'aargh',
    'aarrgh',
    'aarrghh',
    'aarti',
    'aartis',
    'aas',
    'aasvogel',
    'aasvogels',
    'ab',
    'aba',
    'abac',
    'abaca',
    'abacas',
    'abaci',
    'aback',
    'abacs',
    'abacterial',
    'abactinal',
    'abactinally',
    'abactor',
    'abactors',
    'abacus',
    'abacuses',
    'abaft',
    'abaka',
    'abakas',
    'abalone',
    'abalones',
    'abamp',
    'abampere',
    'abamperes',
    'abamps',
    'aband',
    'abanded',
    'abanding',
    'abandon',
    'abandoned',
    'abandonedly',
    'abandonee',
    'abandonees',
    'abandoner',
    'abandoners',
    'abandoning',
    'abandonment',
    'abandonments',
    'abandons',
    'abandonware',
    'abandonwares',
    'abands',
    'abapical',
    'abas',
    'abase',
    'abased',
    'abasedly',
    'abasement',
    'abasements',
    'abaser',
    'abasers',
    'abases',
    'abash',
    'abashed',
    'abashedly',
    'abashes',
    'abashing',
    'abashless',
    'abashment',
    'abashments',
    'abasia',
    'abasias',
    'abasing',
    'abask',
    'abatable',
    'abate',
    'abated',
    'abatement',
    'abatements',
    'abater',
    'abaters',
    'abates',
    'abating',
    'abatis',
    'abatises',
    'abator',
    'abators',
    'abattis',
    'abattises',
    'abattoir',
    'ba',
    'baa',
    'baaed',
    'baaing',
    'baaings',
    'baal',
    'baalebatim',
    'baalebos',
    'baalim',
    'baalism',
    'baalisms',
    'baals',
    'baas',
    'baases',
    'baaskaap',
    'baaskaaps',
    'baaskap',
    'baaskaps',
    'baasskap',
    'baasskaps',
    'baba',
    'babaco',
    'babacoote',
    'babacootes',
    'babacos',
    'babalas',
    'babas',
    'babassu',
    'babassus',
    'babbelas',
    'babbitries',
    'babbitry',
    'babbitt',
    'babbitted',
    'babbitting',
    'babbittries',
    'babbittry',
    'babbitts',
    'babblative',
    'babble',
    'babbled',
    'babblement',
    'babblements',
    'babbler',
    'babblers',
    'babbles',
    'babblier',
    'babbliest',
    'babbling',
    'babblings',
    'babbly',
    'babe',
    'babel',
    'babeldom',
    'babeldoms',
    'babelesque',
    'babelish',
    'babelism',
    'babelisms',
    'babels',
    'babes',
    'babesia',
    'babesias',
    'babesiases',
    'babesiasis',
    'babesioses',
    'babesiosis',
    'babesiosises',
    'babiche',
    'babiches',
    'babied',
    'babier',
    'babies',
    'babiest',
    'babingtonite',
    'babingtonites',
    'babiroussa',
    'babiroussas',
    'babirusa',
    'babirusas',
    'babirussa',
    'babirussas',
    'babka',
    'babkas',
    'bablah',
    'bablahs',
    'baboo',
    'babool',
    'babools',
    'baboon',
    'babooneries',
    'baboonery',
    'baboonish',
    'baboons',
    'baboos',
    'baboosh',
    'babooshes',
    'babouche',
    'babouches',
    'babu',
    'caa',
    'caaed',
    'caaing',
    'caas',
    'caatinga',
    'caatingas',
    'cab',
    'caba',
    'cabal',
    'cabala',
    'cabalas',
    'cabaletta',
    'cabalettas',
    'cabalette',
    'cabalism',
    'cabalisms',
    'cabalist',
    'cabalistic',
    'cabalistical',
    'cabalists',
    'caballed',
    'caballer',
    'caballero',
    'caballeros',
    'caballers',
    'caballine',
    'caballing',
    'cabals',
    'cabana',
    'cabanas',
    'cabaret',
    'cabarets',
    'cabas',
    'cabbage',
    'cabbaged',
    'cabbages',
    'cabbagetown',
    'cabbagetowns',
    'cabbageworm',
    'cabbageworms',
    'cabbagey',
    'cabbaging',
    'cabbagy',
    'cabbala',
    'cabbalah',
    'cabbalahs',
    'cabbalas',
    'cabbalism',
    'cabbalisms',
    'cabbalist',
    'cabbalistic',
    'cabbalistical',
    'cabbalists',
    'cabbed',
    'cabbie',
    'cabbies',
    'cabbing',
    'cabby',
    'cabdriver',
    'cabdrivers',
    'caber',
    'cabernet',
    'cabernets',
    'cabers',
    'cabestro',
    'cabestros',
    'cabezon',
    'cabezone',
    'cabezones',
    'cabezons',
    'cabildo',
    'cabildos',
    'cabin',
    'cabined',
    'cabinet',
    'cabinetmaker',
    'cabinetmakers',
    'cabinetmaking',
    'cabinetmakings',
    'cabinetries',
    'cabinetry',
    'cabinets',
    'cabinetwork',
    'cabinetworks',
    'cabining',
    'cabinmate',
    'cabinmates',
    'cabins',
    'cable',
    'cablecast',
    'cablecasted',
    'cablecasting',
    'cablecasts',
    'cabled',
    'cablegram',
    'cablegrams',
    'cabler',
    'cablers',
    'cables',
    'cablet',
    'da',
    'daal',
    'daals',
    'dab',
    'dabba',
    'dabbas',
    'dabbed',
    'dabber',
    'dabbers',
    'dabbing',
    'dabbities',
    'dabbity',
    'dabble',
    'dabbled',
    'dabbler',
    'dabblers',
    'dabbles',
    'dabbling',
    'dabblingly',
    'dabblings',
    'dabchick',
    'dabchicks',
    'dabs',
    'dabster',
    'dabsters',
    'dace',
    'daces',
    'dacha',
    'dachas',
    'dachshund',
    'dachshunds',
    'dacite',
    'dacites',
    'dack',
    'dacked',
    'dacker',
    'dackered',
    'dackering',
    'dackers',
    'dacking',
    'dacks',
    'dacoit',
    'dacoitage',
    'dacoitages',
    'dacoities',
    'dacoits',
    'dacoity',
    'dacquoise',
    'dacquoises',
    'dacron',
    'dacrons',
    'dactyl',
    'dactylar',
    'dactyli',
    'dactylic',
    'dactylically',
    'dactylics',
    'dactyliography',
    'dactyliologies',
    'dactyliology',
    'dactyliomancies',
    'dactyliomancy',
    'dactylist',
    'dactylists',
    'dactylogram',
    'dactylograms',
    'dactylographer',
    'dactylographers',
    'dactylographic',
    'dactylographies',
    'dactylography',
    'dactylologies',
    'dactylology',
    'dactyloscopies',
    'dactyloscopy',
    'dactyls',
    'dactylus',
    'dad',
    'dada',
    'dadah',
    'dadahs',
    'dadaism',
    'dadaisms',
    'dadaist',
    'dadaistic',
    'dadaists',
    'dadas',
    'dadded',
    'daddies',
    'dadding',
    'daddle',
    'daddled',
    'daddles',
    'daddling',
    'daddock',
    'daddocks',
    'daddy',
    'dadgum',
    'dado',
    'dadoed',
    'ea',
    'each',
    'eachwhere',
    'eadish',
    'eadishes',
    'eager',
    'eagerer',
    'eagerest',
    'eagerly',
    'eagerness',
    'eagernesses',
    'eagers',
    'eagle',
    'eagled',
    'eaglehawk',
    'eaglehawks',
    'eagles',
    'eaglestone',
    'eaglestones',
    'eaglet',
    'eaglets',
    'eaglewood',
    'eaglewoods',
    'eagling',
    'eagre',
    'eagres',
    'ealdorman',
    'ealdormen',
    'eale',
    'eales',
    'ean',
    'eaned',
    'eaning',
    'eanling',
    'eanlings',
    'eans',
    'ear',
    'earache',
    'earaches',
    'earball',
    'earballs',
    'earbash',
    'earbashed',
    'earbasher',
    'earbashers',
    'earbashes',
    'earbashing',
    'earbashings',
    'earbob',
    'earbobs',
    'earbud',
    'earbuds',
    'earcon',
    'earcons',
    'eard',
    'earded',
    'earding',
    'eardrop',
    'eardrops',
    'eardrum',
    'eardrums',
    'eards',
    'eared',
    'earflap',
    'earflaps',
    'earful',
    'earfuls',
    'earing',
    'earings',
    'earl',
    'earlap',
    'earlaps',
    'earldom',
    'earldoms',
    'earless',
    'earlier',
    'earlierise',
    'earlierised',
    'earlierises',
    'earlierising',
    'earlierize',
    'earlierized',
    'earlierizes',
    'earlierizing',
    'earlies',
    'earliest',
    'earlike',
    'earliness',
    'earlinesses',
    'earlobe',
    'earlobes',
    'earlock',
    'earlocks',
    'earls',
    'earlship',
    'earlships',
    'early',
    'earlywood',
    'earlywoods',
    'earmark',
    'fa',
    'faa',
    'faaing',
    'faan',
    'faas',
    'fab',
    'fabaceous',
    'fabber',
    'fabbest',
    'fabbier',
    'fabbiest',
    'fabby',
    'fable',
    'fabled',
    'fabler',
    'fablers',
    'fables',
    'fabliau',
    'fabliaux',
    'fabling',
    'fablings',
    'fabric',
    'fabricant',
    'fabricants',
    'fabricate',
    'fabricated',
    'fabricates',
    'fabricating',
    'fabrication',
    'fabrications',
    'fabricative',
    'fabricator',
    'fabricators',
    'fabricked',
    'fabricking',
    'fabrics',
    'fabs',
    'fabular',
    'fabulate',
    'fabulated',
    'fabulates',
    'fabulating',
    'fabulator',
    'fabulators',
    'fabulise',
    'fabulised',
    'fabulises',
    'fabulising',
    'fabulist',
    'fabulistic',
    'fabulists',
    'fabulize',
    'fabulized',
    'fabulizes',
    'fabulizing',
    'fabulosities',
    'fabulosity',
    'fabulous',
    'fabulously',
    'fabulousness',
    'fabulousnesses',
    'faburden',
    'faburdens',
    'facade',
    'facades',
    'face',
    'faceable',
    'facebar',
    'facebars',
    'facebook',
    'facebooked',
    'facebooking',
    'facebooks',
    'facecloth',
    'facecloths',
    'faced',
    'facedown',
    'facedowns',
    'faceless',
    'facelessness',
    'facelessnesses',
    'facelift',
    'facelifted',
    'facelifting',
    'facelifts',
    'facemail',
    'facemails',
    'faceman',
    'facemask',
    'facemasks',
    'facemen',
    'faceplate',
    'faceplates',
    'faceprint',
    'faceprints',
    'facer',
    'facers',
    'faces',
    'facet',
    'facete',
    'gab',
    'gabapentin',
    'gabapentins',
    'gabardine',
    'gabardines',
    'gabba',
    'gabbard',
    'gabbards',
    'gabbart',
    'gabbarts',
    'gabbas',
    'gabbed',
    'gabber',
    'gabbers',
    'gabbier',
    'gabbiest',
    'gabbiness',
    'gabbinesses',
    'gabbing',
    'gabble',
    'gabbled',
    'gabblement',
    'gabblements',
    'gabbler',
    'gabblers',
    'gabbles',
    'gabbling',
    'gabblings',
    'gabbro',
    'gabbroic',
    'gabbroid',
    'gabbroitic',
    'gabbros',
    'gabby',
    'gabelle',
    'gabelled',
    'gabeller',
    'gabellers',
    'gabelles',
    'gaberdine',
    'gaberdines',
    'gaberlunzie',
    'gaberlunzies',
    'gabfest',
    'gabfests',
    'gabies',
    'gabion',
    'gabionade',
    'gabionades',
    'gabionage',
    'gabionages',
    'gabioned',
    'gabionnade',
    'gabionnades',
    'gabions',
    'gable',
    'gabled',
    'gablelike',
    'gables',
    'gablet',
    'gablets',
    'gabling',
    'gabnash',
    'gabnashes',
    'gaboon',
    'gaboons',
    'gabs',
    'gaby',
    'gad',
    'gadabout',
    'gadabouts',
    'gadarene',
    'gadded',
    'gadder',
    'gadders',
    'gaddi',
    'gadding',
    'gaddis',
    'gade',
    'gades',
    'gadflies',
    'gadfly',
    'gadge',
    'gadges',
    'gadget',
    'gadgeteer',
    'gadgeteers',
    'gadgetries',
    'gadgetry',
    'gadgets',
    'gadgety',
    'gadgie',
    'gadgies',
    'gadi',
    'gadid',
    'gadids',
    'gadis',
    'gadje',
    'gadjes',
    'gadjo',
    'ha',
    'haaf',
    'haafs',
    'haanepoot',
    'haanepoots',
    'haar',
    'haars',
    'habanera',
    'habaneras',
    'habanero',
    'habaneros',
    'habdabs',
    'habdalah',
    'habdalahs',
    'haberdasher',
    'haberdasheries',
    'haberdashers',
    'haberdashery',
    'haberdine',
    'haberdines',
    'habergeon',
    'habergeons',
    'habilable',
    'habilatory',
    'habile',
    'habiliment',
    'habiliments',
    'habilitate',
    'habilitated',
    'habilitates',
    'habilitating',
    'habilitation',
    'habilitations',
    'habilitator',
    'habilitators',
    'habit',
    'habitabilities',
    'habitability',
    'habitable',
    'habitableness',
    'habitablenesses',
    'habitably',
    'habitan',
    'habitans',
    'habitant',
    'habitants',
    'habitat',
    'habitation',
    'habitational',
    'habitations',
    'habitats',
    'habitaunce',
    'habitaunces',
    'habited',
    'habiting',
    'habits',
    'habitual',
    'habitually',
    'habitualness',
    'habitualnesses',
    'habituals',
    'habituate',
    'habituated',
    'habituates',
    'habituating',
    'habituation',
    'habituations',
    'habitude',
    'habitudes',
    'habitudinal',
    'habitue',
    'habitues',
    'habitus',
    'hable',
    'haboob',
    'haboobs',
    'habu',
    'habus',
    'hacek',
    'haceks',
    'hacendado',
    'hacendados',
    'hachis',
    'hachure',
    'hachured',
    'hachures',
    'hachuring',
    'hacienda',
    'haciendado',
    'haciendados',
    'haciendas',
    'hack',
    'hackable',
    'hackamore',
    'hackamores',
    'hackberries',
    'hackberry',
    'hackbolt',
    'hackbolts',
    'hackbut',
    'iamb',
    'iambi',
    'iambic',
    'iambically',
    'iambics',
    'iambist',
    'iambists',
    'iambographer',
    'iambographers',
    'iambs',
    'iambus',
    'iambuses',
    'ianthine',
    'iatric',
    'iatrical',
    'iatrochemical',
    'iatrochemist',
    'iatrochemistry',
    'iatrochemists',
    'iatrogenic',
    'iatrogenically',
    'iatrogenicities',
    'iatrogenicity',
    'iatrogenies',
    'iatrogeny',
    'ibadah',
    'ibadat',
    'iberis',
    'iberises',
    'ibex',
    'ibexes',
    'ibices',
    'ibidem',
    'ibis',
    'ibises',
    'ibogaine',
    'ibogaines',
    'ibrik',
    'ibriks',
    'ibuprofen',
    'ibuprofens',
    'ice',
    'iceball',
    'iceballs',
    'iceberg',
    'icebergs',
    'iceblink',
    'iceblinks',
    'iceboat',
    'iceboater',
    'iceboaters',
    'iceboating',
    'iceboatings',
    'iceboats',
    'icebound',
    'icebox',
    'iceboxes',
    'icebreaker',
    'icebreakers',
    'icebreaking',
    'icecap',
    'icecapped',
    'icecaps',
    'iced',
    'icefall',
    'icefalls',
    'icefield',
    'icefields',
    'icehouse',
    'icehouses',
    'icekhana',
    'icekhanas',
    'iceless',
    'icelike',
    'icemaker',
    'icemakers',
    'iceman',
    'icemen',
    'icepack',
    'icepacks',
    'icer',
    'icers',
    'ices',
    'icestone',
    'icestones',
    'icewine',
    'icewines',
    'ich',
    'ichabod',
    'iched',
    'iches',
    'iching',
    'ichneumon',
    'ichneumons',
    'ichnite',
    'ichnites',
    'ichnofossil',
    'ichnofossils',
    'ichnographic',
    'ichnographical',
    'ja',
    'jaap',
    'jaaps',
    'jab',
    'jabbed',
    'jabber',
    'jabbered',
    'jabberer',
    'jabberers',
    'jabbering',
    'jabberingly',
    'jabberings',
    'jabbers',
    'jabberwock',
    'jabberwockies',
    'jabberwocks',
    'jabberwocky',
    'jabbing',
    'jabbingly',
    'jabble',
    'jabbled',
    'jabbles',
    'jabbling',
    'jabers',
    'jabiru',
    'jabirus',
    'jaborandi',
    'jaborandis',
    'jabot',
    'jaboticaba',
    'jaboticabas',
    'jabots',
    'jabs',
    'jacal',
    'jacales',
    'jacals',
    'jacamar',
    'jacamars',
    'jacana',
    'jacanas',
    'jacaranda',
    'jacarandas',
    'jacare',
    'jacares',
    'jacchus',
    'jacchuses',
    'jacent',
    'jacinth',
    'jacinthe',
    'jacinthes',
    'jacinths',
    'jack',
    'jackal',
    'jackalled',
    'jackalling',
    'jackals',
    'jackanapes',
    'jackanapeses',
    'jackaroo',
    'jackarooed',
    'jackarooing',
    'jackaroos',
    'jackass',
    'jackasseries',
    'jackassery',
    'jackasses',
    'jackboot',
    'jackbooted',
    'jackbooting',
    'jackboots',
    'jackdaw',
    'jackdaws',
    'jacked',
    'jackeen',
    'jackeens',
    'jacker',
    'jackeroo',
    'jackerooed',
    'jackerooing',
    'jackeroos',
    'jackers',
    'jacket',
    'jacketed',
    'jacketing',
    'jacketless',
    'jackets',
    'jackfish',
    'jackfishes',
    'jackfruit',
    'jackfruits',
    'jackhammer',
    'jackhammered',
    'jackhammering',
    'jackhammers',
    'jackies',
    'jacking',
    'jackings',
    'jackknife',
    'jackknifed',
    'jackknifes'
];

/**
 * Do something for every word.
 *
 * @param {function(word)} callback
 */

function eachWord(callback) {
    fixtures.forEach(callback);
}

/**
 * Benchmark this module.
 */

suite('lancaster-stemmer — this module', function () {
    bench('op/s * 1,000', function () {
        eachWord(stemmer);
    });
});

/**
 * Benchmark `natural`.
 */

if (natural) {
    suite('natural', function () {
        bench('op/s * 1,000', function () {
            eachWord(natural);
        });
    });
}

/**
 * Benchmark `paice`.
 */

if ('getStem' in String.prototype) {
    suite('paice — If you\'re into extending prototypes...', function () {
        bench('op/s * 1,000', function () {
            eachWord(function (word) {
                word.getStem();
            });
        });
    });
}
