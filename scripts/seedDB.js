const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/languageapp"
);

// Presentation Seeds
const presentation = [
  {
    language: "Spanish",
    content: [
      {
        imageUrl: "https://lh4.googleusercontent.com/JGHNuGPjr0Xnxwpvnv0h3tL0YgtllY88PNSeGhZ_lQI2RJhiKBoBehbv-0brtqkpBrwLhti4gkJAAL8d6vwj8nVh_UiqTFN1MIJ075c",
        targetWord: "uno",
        audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/uno",
        phonetic: "OOh-noh"
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/psc4EAo0yUjV2XnzhsIJGsv1Gnfqv31lkidhLX7JMvbNGcMvyK24nHLD0oR9_J2Y90Qk0NlUBeV5Y0SSWPb-Anv2rUTYt9-oxkUx9Dmp",
        targetWord: "dos",
        audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/dos",
        phonetic: "dohs"
      },
      {
        imageUrl: "https://lh4.googleusercontent.com/jHGLYCMWC9YTgLXFEGKn9-78VFvOcgsfZcg9COYTBygozWtJubnnlWqUNhxqnPBb0osFCiCEDSUErjNgTt3rX3ZRdTqs_yc3fvzxHmVa",
        targetWord: "tres",
        audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/tres",
        phonetic: "trehs"
      },
      {
        imageUrl: "https://lh5.googleusercontent.com/F0NPtP9sg55LFldZrOE0W36iMp-jZOdwgraSIAHfx00lB_F-ySThfuZJZ4TvcRVAwleOHHRk0ro0rkm0k7on6Hc5LH2Q4TERKJS5DLzJ",
        targetWord: "cuatro",
        audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/cuatro",
        phonetic: "KWAH-troh"
      },
      {
        imageUrl: "https://lh6.googleusercontent.com/RcOgKGna3y7Nb6uWOQB6B9gaOy23cv9_koMmK1IxstnjIyc4-3ESIruYRqeAA5M2cQTwqkNc9DpBo1TtV6WPGRLPYk4IUJ19K8AU9gvq",
        targetWord: "cinco",
        audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/cinco",
        phonetic: "SEEN-ko"
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/xe64WZcm7cYXdxtekR2bsUZwpF10-c1Y3nnLpPtROvttBF81CxTruhzX4_nMKmPzc0smH_c9rI6WZyefh6T1QR0sQmrDC_zstSqnoco4",
        targetWord: "seis",
        audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/seis",
        phonetic: "sayss"
      },
      {
        imageUrl: "https://lh6.googleusercontent.com/tRdgEnV9LYyfJ0YfBEel4RrCFOJeai68_9WLWRRNuK3_WxN1jlJcApWM5LlrWlCi61SlG7neuGhEqyub0Kk7PTqJwPfae9GJiqkZOlO_",
        targetWord: "siete",
        audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/siete",
        phonetic: "SYEH-teh"
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/7XO8LtG2luVW6gFjcoFDmhzslywfM1vVF9Y72NWoC8fXFMkqCCL3qh9eLKbMuufy4xALSFvRcdQgc8gg5sAvxizoA2kSHMqOrk5TNvjs",
        targetWord: "ocho",
        audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/ocho",
        phonetic: "OH-choh"
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/hwqoJtiEofyyfzNQN89aQAOxF8n8Vh_NHpL3MKCJkoy_l-4ilDXSsgFcGFjBgQTbbkFHOF0f8vB4O658GmBNy2qO9lcWo9JOXmLjdlLg",
        targetWord: "nueve",
        audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/nueve",
        phonetic: "NWEH-bay"
      },
      {
        imageUrl: "https://lh4.googleusercontent.com/Um2YRCxNwdnQq3Twim2cHicnALUho6u8MSHDtHiZ351q-16QjWQo8TpKROJfgUT5xo-O7JNs4wy-nbHvTMxYo23SQer_57-PdIZD5ou-",
        targetWord: "diez",
        audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/diez",
        phonetic: "dyess"
      }
    ]
  },
  {
    language: "Navajo",
    content: [
      {
        imageUrl: "https://lh4.googleusercontent.com/JGHNuGPjr0Xnxwpvnv0h3tL0YgtllY88PNSeGhZ_lQI2RJhiKBoBehbv-0brtqkpBrwLhti4gkJAAL8d6vwj8nVh_UiqTFN1MIJ075c",
        targetWord: "tʼááłáʼí",
        audioToPlay: "https://soundcloud.com/dinehpodcast/taalai",
        phonetic: ""
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/psc4EAo0yUjV2XnzhsIJGsv1Gnfqv31lkidhLX7JMvbNGcMvyK24nHLD0oR9_J2Y90Qk0NlUBeV5Y0SSWPb-Anv2rUTYt9-oxkUx9Dmp",
        targetWord: "naaki",
        audioToPlay: "https://soundcloud.com/dinehpodcast/naaki",
        phonetic: ""
      },
      {
        imageUrl: "https://lh4.googleusercontent.com/jHGLYCMWC9YTgLXFEGKn9-78VFvOcgsfZcg9COYTBygozWtJubnnlWqUNhxqnPBb0osFCiCEDSUErjNgTt3rX3ZRdTqs_yc3fvzxHmVa",
        targetWord: "táá'",
        audioToPlay: "https://soundcloud.com/dinehpodcast/taa",
        phonetic: ""
      },
      {
        imageUrl: "https://lh5.googleusercontent.com/F0NPtP9sg55LFldZrOE0W36iMp-jZOdwgraSIAHfx00lB_F-ySThfuZJZ4TvcRVAwleOHHRk0ro0rkm0k7on6Hc5LH2Q4TERKJS5DLzJ",
        targetWord: "dį́į́ʼ",
        audioToPlay: "https://soundcloud.com/dinehpodcast/dii",
        phonetic: ""
      },
      {
        imageUrl: "https://lh6.googleusercontent.com/RcOgKGna3y7Nb6uWOQB6B9gaOy23cv9_koMmK1IxstnjIyc4-3ESIruYRqeAA5M2cQTwqkNc9DpBo1TtV6WPGRLPYk4IUJ19K8AU9gvq",
        targetWord: "ashdla'",
        audioToPlay: "https://soundcloud.com/dinehpodcast/ashdla",
        phonetic: ""
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/xe64WZcm7cYXdxtekR2bsUZwpF10-c1Y3nnLpPtROvttBF81CxTruhzX4_nMKmPzc0smH_c9rI6WZyefh6T1QR0sQmrDC_zstSqnoco4",
        targetWord: "hastą́ą́",
        audioToPlay: "https://soundcloud.com/dinehpodcast/hastaa",
        phonetic: ""
      },
      {
        imageUrl: "https://lh6.googleusercontent.com/tRdgEnV9LYyfJ0YfBEel4RrCFOJeai68_9WLWRRNuK3_WxN1jlJcApWM5LlrWlCi61SlG7neuGhEqyub0Kk7PTqJwPfae9GJiqkZOlO_",
        targetWord: "tsostsʼid",
        audioToPlay: "https://soundcloud.com/dinehpodcast/tsostsid",
        phonetic: "so-stid"
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/7XO8LtG2luVW6gFjcoFDmhzslywfM1vVF9Y72NWoC8fXFMkqCCL3qh9eLKbMuufy4xALSFvRcdQgc8gg5sAvxizoA2kSHMqOrk5TNvjs",
        targetWord: "tseebíí",
        audioToPlay: "https://soundcloud.com/dinehpodcast/tseebii",
        phonetic: "say-bee"
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/hwqoJtiEofyyfzNQN89aQAOxF8n8Vh_NHpL3MKCJkoy_l-4ilDXSsgFcGFjBgQTbbkFHOF0f8vB4O658GmBNy2qO9lcWo9JOXmLjdlLg",
        targetWord: "náhástʼéí",
        audioToPlay: "https://soundcloud.com/dinehpodcast/nahastei",
        phonetic: "nah-ha-tsay"
      },
      {
        imageUrl: "https://lh4.googleusercontent.com/Um2YRCxNwdnQq3Twim2cHicnALUho6u8MSHDtHiZ351q-16QjWQo8TpKROJfgUT5xo-O7JNs4wy-nbHvTMxYo23SQer_57-PdIZD5ou-",
        targetWord: "neeznáá",
        audioToPlay: "https://soundcloud.com/dinehpodcast/neeznaa",
        phonetic: "nez-na"
      }
    ]
  }
]


// Insert Presentation Seeds
db.Presentation
  .remove({})
  .then(() => db.Presentation.collection.insertMany(presentation))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



// Quiz Seeds  
const quizzes = [
  {
    language: "Spanish",
    questions: [
      {
        imageUrl: "https://lh3.googleusercontent.com/psc4EAo0yUjV2XnzhsIJGsv1Gnfqv31lkidhLX7JMvbNGcMvyK24nHLD0oR9_J2Y90Qk0NlUBeV5Y0SSWPb-Anv2rUTYt9-oxkUx9Dmp",
        answerOptions: ["cuatro", "dos", "cinco"],
        correctAnswer: "dos",
        explanation: ""
      },
      {
        imageUrl: "https://lh4.googleusercontent.com/JGHNuGPjr0Xnxwpvnv0h3tL0YgtllY88PNSeGhZ_lQI2RJhiKBoBehbv-0brtqkpBrwLhti4gkJAAL8d6vwj8nVh_UiqTFN1MIJ075c",
        answerOptions: ["uno", "tres", "dos"],
        correctAnswer: "uno",
        explanation: ""
      },
      {
        imageUrl: "https://lh5.googleusercontent.com/F0NPtP9sg55LFldZrOE0W36iMp-jZOdwgraSIAHfx00lB_F-ySThfuZJZ4TvcRVAwleOHHRk0ro0rkm0k7on6Hc5LH2Q4TERKJS5DLzJ",
        answerOptions: ["cinco", "cuatro", "uno"],
        correctAnswer: "cuatro",
        explanation: ""
      },
      {
        imageUrl: "https://lh4.googleusercontent.com/jHGLYCMWC9YTgLXFEGKn9-78VFvOcgsfZcg9COYTBygozWtJubnnlWqUNhxqnPBb0osFCiCEDSUErjNgTt3rX3ZRdTqs_yc3fvzxHmVa",
        answerOptions: ["dos", "cuatro", "tres"],
        correctAnswer: "tres",
        explanation: ""
      },
      {
        imageUrl: "https://lh6.googleusercontent.com/RcOgKGna3y7Nb6uWOQB6B9gaOy23cv9_koMmK1IxstnjIyc4-3ESIruYRqeAA5M2cQTwqkNc9DpBo1TtV6WPGRLPYk4IUJ19K8AU9gvq",
        answerOptions: ["cinco", "tres", "uno"],
        correctAnswer: "cinco",
        explanation: ""
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/7XO8LtG2luVW6gFjcoFDmhzslywfM1vVF9Y72NWoC8fXFMkqCCL3qh9eLKbMuufy4xALSFvRcdQgc8gg5sAvxizoA2kSHMqOrk5TNvjs",
        answerOptions: ["nueve", "seis", "ocho"],
        correctAnswer: "ocho",
        explanation: ""
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/xe64WZcm7cYXdxtekR2bsUZwpF10-c1Y3nnLpPtROvttBF81CxTruhzX4_nMKmPzc0smH_c9rI6WZyefh6T1QR0sQmrDC_zstSqnoco4",
        answerOptions: ["seis", "diez", "siete"],
        correctAnswer: "seis",
        explanation: ""
      },
      {
        imageUrl: "https://lh4.googleusercontent.com/Um2YRCxNwdnQq3Twim2cHicnALUho6u8MSHDtHiZ351q-16QjWQo8TpKROJfgUT5xo-O7JNs4wy-nbHvTMxYo23SQer_57-PdIZD5ou-",
        answerOptions: ["siete", "nueve", "diez"],
        correctAnswer: "diez",
        explanation: ""
      },
      {
        imageUrl: "https://lh6.googleusercontent.com/tRdgEnV9LYyfJ0YfBEel4RrCFOJeai68_9WLWRRNuK3_WxN1jlJcApWM5LlrWlCi61SlG7neuGhEqyub0Kk7PTqJwPfae9GJiqkZOlO_",
        answerOptions: ["ocho", "siete", "seis"],
        correctAnswer: "siete",
        explanation: ""
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/hwqoJtiEofyyfzNQN89aQAOxF8n8Vh_NHpL3MKCJkoy_l-4ilDXSsgFcGFjBgQTbbkFHOF0f8vB4O658GmBNy2qO9lcWo9JOXmLjdlLg",
        answerOptions: ["nueve", "ocho", "diez"],
        correctAnswer: "nueve",
        explanation: ""
      }
    ]
  },
  {
    language: "Navajo",
    questions: [
      {
        imageUrl: "https://lh6.googleusercontent.com/La_RdIfupKPvPwHBm3DCwQ5qhyk985vH2Eo99LjQBiy0N18k78twAK4z1_ubftWQYN6s0hdDWZ2QgThsUYNMTAhSMSyW8yl8b3fexCkn",
        answerOptions: ["tseebíí", "tsostsʼid", "tʼááłáʼí"],
        correctAnswer: "tsostsʼid",
        explanation: ""
      },
      {
        imageUrl: "https://lh6.googleusercontent.com/KgIK5q3bdyWEEi7iDViXpwNa4rcq7nTacGYnz0JBTZNsyE90wJRrlZcbwzlcTT3SGpdz21LHi3RMtRDT5woV4kXxHGsrkIAOES1MFKBg",
        answerOptions: ["táá'", "neeznáá", "naaki",],
        correctAnswer: "táá'",
        explanation: ""
      },
      {
        imageUrl: "https://lh6.googleusercontent.com/w1cZ3asHCKrrWqYTU12Xh87wW9JScKtq5kNn4JH02tgeyg1kJbthasv72xccYososn6cPyQs2WQD9fLSlBqrF9mogjI3qdwJfsUK2HrT",
        answerOptions: ["dį́į́ʼ", "náhástʼéí", "neeznáá"],
        correctAnswer: "neeznáá",
        explanation: ""
      },
      {
        imageUrl: "https://lh5.googleusercontent.com/XXa44tKsbe5BIgqR33BZZlQL4kGuF4AMmED9L3xWMVYG1jzCa6dFVxWW8uBthx4jQr0NHcYjdK_A7DSGbGyVrJFvR-NlDD4E-MDc9Njr",
        answerOptions: ["hastą́ą́", "ashdla'", "tsostsʼid"],
        correctAnswer: "hastą́ą́",
        explanation: ""
      },
      {
        imageUrl: "https://lh4.googleusercontent.com/8dUNdfWbuIzYbOfmi8frXtYcYExK0mgkv6yT5FZ24W2kbebSxCSY81B41RYs8tPei-ZVUGZthbsyVFJSiR4wJhQ5qgQd5KL8BfZKeV4N",
        answerOptions: ["tseebíí", "tʼááłáʼí", "táá'"],
        correctAnswer: "tseebíí",
        explanation: ""
      },
      {
        imageUrl: "https://lh4.googleusercontent.com/PXKejlEaBKsw1scP7XrRqdIDr55AP3jbvnPo2eLGfwbS44R3vGkOdlHD-Ngk7D-wMpIALqdk0pS_2oTs8sbFmIPoCqboPfAWvfl8-iwV",
        answerOptions: ["náhástʼéí", "neeznáá", "naaki"],
        correctAnswer: "naaki",
        explanation: ""
      },
      {
        imageUrl: "https://lh6.googleusercontent.com/EPDgo1hqHiCljjfh4rQCYxmP4S-QcPoze51cA8ln8yuX1Yjcvk2xS7gzImOefmKJS7CdP0EcoXCmHyLp9c0ShX_L9apnSXiS5k1YxvKu",
        answerOptions: ["ashdla'", "dį́į́ʼ", "náhástʼéí"],
        correctAnswer: "náhástʼéí",
        explanation: ""
      },
      {
        imageUrl: "https://lh5.googleusercontent.com/Cqt4xUwCw35h-L7WSIcWy73viHOWS9yi6KT_gDwQZlVOMT4ZuiSjls12d8P_bSfxK6n8hpwl53gfcy8AJY1f1CJLsmW9ytyGj-XUY5DE",
        answerOptions: ["hastą́ą́", "dį́į́ʼ", "tsostsʼid"],
        correctAnswer: "dį́į́ʼ",
        explanation: ""
      },
      {
        imageUrl: "https://lh4.googleusercontent.com/MyjyB7iT4G_BGrkO7cuJh9PxSEw4STmLeUS1OwEFopj5Gw_M75JrvYWpofZq6AEjXu2zQreBjoS35OCkyEFVL_dxhojfPx9FqK6bQXs",
        answerOptions: ["tʼááłáʼí", "táá'", "tseebíí"],
        correctAnswer: "tʼááłáʼí",
        explanation: ""
      },
      {
        imageUrl: "https://lh5.googleusercontent.com/jcJa9JNMUBA3D9PnA2wnSEk120g35uMcFKisVoF3_HzJBikyBVhRY8JTaDW1b1RBop2-Gk9J2RsBia52DG1IuuSGbvbldzoGFmzCL0nb",
        answerOptions: ["neeznáá", "naaki", "ashdla'"],
        correctAnswer: "ashdla'",
        explanation: ""
      },
    ]
  }
]


// Insert Quiz Seeds
db.Quiz
  .remove({})
  .then(() => db.Quiz.collection.insertMany(quizzes))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });