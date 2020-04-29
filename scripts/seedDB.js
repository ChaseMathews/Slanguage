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
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/1-Number-PNG.png",
        targetWord: "uno",
        audioToPlay: "https://cf-media.sndcdn.com/1JCfsLlYB6oM.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMUpDZnNMbFlCNm9NLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgxMzI5NDZ9fX1dfQ__&Signature=Dr~MVG3vqPmH91fzzmH3oeMoKF2gLZePh5ZKFgVq6R4RupP141E4WZjQz2Xmbj9hCV9WId6XG7IWt-rh4ROQmp5LKG2psRtOTT59SkgePtYlCFl9WVVCuHXGfqDIK4rXMeRgkIiGjLSwLAu4JCia7wKwXLwQ9OQfNA4vpwOMtg8vJS7RtDhlGbrY9viqBH1nYcrOlr50Y6DwbTNEENSjA91gpV6F8DvDVRr4SxPiYFEfiBAHdMrvTIpOt3eD277y9kosV-doKpsvelzZy59BJu2iuDRMifbGoM0oRftnjVO2W4Y5pUqRWX7cYrvZcgiSJ6jp~E0d7iY4XtmeXL5JTw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "OOh-noh"
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/2-Number-PNG.png",
        targetWord: "dos",
        audioToPlay: "https://cf-media.sndcdn.com/QTHb3wnzgCXP.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vUVRIYjN3bnpnQ1hQLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgxMzMzOTl9fX1dfQ__&Signature=EiDzWGt3fDo-140uiuDydhBH8YDALO2Q-TYviaSNZUGHPggGK9Cd9BOhRPV78TFnH7EZ6RSbgKTv~9DeV6a7CzlfGLzI7acPeozqRL0DI99zS82pWVZ~EDc7mCvqJv894tb61Uc-EmiBYPuNY~SkMs7mo6epd3DLP3OWB5K6sqS-pV7yM0~cgGvF7KCOg37WZm9UfN6Vfi8MwIjhJk9OYLtuY08iLVx4RRqJFNNXbeiYto1eGCZSWW2w-WosukaeO5NM5xkZI4EmvkrZIoCLNLTYsm~gYSa50IynexM5U4hNOPstreBf340WaUGiffXhHRU0PgsntBzacjJ~ZtDhlg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "dohs"
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/3-Number-PNG.png",
        targetWord: "tres",
        audioToPlay: "https://cf-media.sndcdn.com/cV2kHFeyfPoF.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vY1Yya0hGZXlmUG9GLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgxMzMzNDl9fX1dfQ__&Signature=T9Sba4x1p~C4dJvLWzX7CWSd6eRxaCUf6qWI~TuLBJ9r3SbHhzXMkpKL0HPccGvYuxHOCCOKpGXgOTvtW1tu1pRhLC5mpQwW~v1prnnsy9TqHYoT3qROBP83-tuDuvGUsVMfiht1lEj0clonG4x1GNEkNYD~gm9kPUicH6fb47a-SPRGJj1uXhmTApRSHBDOU9YfqhhC6FLm6YV4mgduoPh0UXSwFJRa1eeg-6JcfbXjLWwn~I6KsEuxyuvB5GvZce1E3ai010B2HIwCBX-1558SvdjYHOXBBfQucvwTakJBJditXJ5J2lDxfGnbYtKZ8kL9ZFj0adbOMQWeMPzkEw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "trehs"
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/4-Number-PNG.png",
        targetWord: "cuatro",
        audioToPlay: "https://cf-media.sndcdn.com/zF5Q94pHBCgT.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vekY1UTk0cEhCQ2dULjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgxMzM0NDZ9fX1dfQ__&Signature=QZawsBMbC40EDWuw4h8xf3bgA32e0-rQIJ7yWybK6b5VdExtCf5sNw3t26MW83Q9DJddgXKarsx-QxZx9UMckBcEP0g8deT6LoahfXtlaX8vn4STchPEpXFpSeTge5HEUnG1o53Yv9mMpEBOev25zLKaoNPNSKXdw0fwXWflNnKhVBwmaCDdwzAC-TUPKz6tRl8aKq8SUvm37P~N7OPhrOjyswQeZN8wwDi0HLbD47UIDfcV5Idqa8oCUEInVxBGplrvMqPLCgxXw4kAnH~SsDTsUjbZ6Oxzhvw09mRF8-nYxc9LvFs4cUV9kgQTnR7S0fnWXu7jp3eMNweqRCGzHQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "KWAH-troh"
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/5-Number-PNG.png",
        targetWord: "cinco",
        audioToPlay: "https://cf-media.sndcdn.com/u6vmbXom0hex.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vdTZ2bWJYb20waGV4LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgxMzM0ODN9fX1dfQ__&Signature=TYXHrXZf3rw6EcAR2M4RHjuo4T~dQmZWHnvb6bbIlF1xNFKNv7pQsAeDO3H488X80sAFkrvjjSDtEy2ueLwLcf7NKxgViZeawzPIelvBZWhdMYUJhRM~NcTqXiglGtl~6DAbvLAESNL9vzAySwQPpxQfMepT1ygR9faS~0neb5JDpU8f4WLO~0adZU3r-uh4l27FnQHCS34tunnDfAiBk9LNottXXi0t3WQcfPGouOLiD5Y2kBxppn2-RUmVRN-r~Ferwx9xeJqHOU3M9uUV4ocYfZIj5xtA5BtXDUSi6ofF~lk6GvlptkwHGJD4l3j0ud4F82huZGtXABC-C58QBQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "SEEN-ko"
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/6-Number-PNG.png",
        targetWord: "seis",
        audioToPlay: "https://cf-media.sndcdn.com/rgXKgIX9LffD.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vcmdYS2dJWDlMZmZELjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgxMzM1MDh9fX1dfQ__&Signature=NFQAak3pJuUCHlfLXljJR0YpjDaT7YOSEN-9Pc0l2JM6SEerGzn5-mcOsyPfz4-rMt7FwkzNGiNjRcGwcIy0p4kMSeDSVFxWesDNUQxMf7IxFN3Fdksi1FoHzYay5Nr6FkQut8kdWLG7unmNk4kVNsG6QrwCOM5a6-AVlsFb5Zbsk~zVORVMIX8PHrAKjuw98Q4hAXRM12kgUUD23PgypaLz9i7cIelSsCSDnhy0GutfcAd-3omPGhNrkTv9uipL79Rp05vNnhIHr9-oSz7wdxDm-yXKQUVqge~upGDSDu4lbEDEEj~EONl10B52oVobO6aoEJiSMHzIT6-AfO7HLg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "sayss"
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/7-Number-PNG.png",
        targetWord: "siete",
        audioToPlay: "https://cf-media.sndcdn.com/uZHIW54QU2Yt.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vdVpISVc1NFFVMll0LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgxMzM1Mjh9fX1dfQ__&Signature=AJCc6LeT8m49rc3d0bSqcTSPFyfmsewHyk-1AbBI37SrHTpdG-qpdvDrUvs4CUDTemugI7JHI~a2Clsxb2NthE314oP2jCfJ3Q59oy5CttsGtAA6zMl-CnSxUYLe6KCts0znRU3gu4-GEwUJMIPUvvPPYaCY52mSadVIB3p~p8Df1ph86xrXkCqgETphf9Lp6RIi5-Au0j3Gnj6Z3SFtBUf1TaUZunU946~Foa1e1BSl45tFn-aqGll-npaKuXyLH4toXg3EbTRv~zd4DKPdZaxJgy5nj-IKCBADFmeTsKMEc06uoVgYyNi2r7NixPsv6tODM12y757SHs2XO27KqQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "SYEH-teh"
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/8-Number-PNG.png",
        targetWord: "ocho",
        audioToPlay: "https://cf-media.sndcdn.com/gvZeBwPtcGWy.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vZ3ZaZUJ3UHRjR1d5LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgxMzM1NTJ9fX1dfQ__&Signature=MHr5tslOK7f0NUiBxWKZkz~2wZ5i0ZL78kKxaFCzkoE8PCypI3s8AbGACbaTgn3Wa2E2weoHn0lqZE0f54hvvxO9NzEbVRKW8NSpvSwz3SksXkBtNU8fLAoPDxwACvF0VsgJp2OqwargXsEV4Botpp5nhin0TPEcyM7uiw25hhrHaF8GomXyDl9jcZuE1smdHQAtDixNCRCwDD1AWP81g0TjifKtLLB~EqN8iue6Bt0fwCAGtF7X051U9Xd4zWALMJkDC8YglDCxcSIexv0EKmcmlCcGu4js9ILW~UotBui7kaC8fBabjwSMjvOJZuI0XTm5QBLb2PS2cYlgE0Sakw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "OH-choh"
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/9-Number-PNG.png",
        targetWord: "nueve",
        audioToPlay: "https://cf-media.sndcdn.com/SYxe09GI4SQw.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vU1l4ZTA5R0k0U1F3LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgxMzM1NzJ9fX1dfQ__&Signature=MreTjlgBOatuFTWusg31bnM1DYjobCPjRWxlZclAJAAB-WBOKmyFTI7EtYiZqAXJ9dKXII8RvP~fp~mK38nhynsHUFOrqzlQa4l5OxWgcAbQiReFfTtiB0SkzmSJjF5X-J6XNBgBu3ZNCkoJJ~6nKZPgk2NOnez5K5nFbNPpLA4jg3LRqBPnPZnQGSkuhhpEP~XJIA3-jePVekKMY88S6UWiuWFePXJhgs2e6MLB11WzsQK~vvIZiomlLLOGYaXiNSEWEYvPU71foLKtRWESEfuVVgj0t8MKJnReaXRmmfxCwzjnk1bj5BzoPF6xmNmH1oZHJxQ0GEYKLxehp9vx7Q__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "NWEH-bay"
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/10-Number-PNG.png",
        targetWord: "diez",
        audioToPlay: "https://cf-media.sndcdn.com/0l2nwWT3N0Zw.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMGwybndXVDNOMFp3LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgxMzM1OTN9fX1dfQ__&Signature=f3pO5-Nznyw0rmD~5qRihaIjsi1mT1IK350UVu4PUsZXAbkdCU-JmMaU0R1FnXtzf-j9HflPl9fUnEeoy5~2qg7KtUE7QEJx3KDas24Od9tEn0EMetHqp9BTUeGf9YveQgB6oI8b7QWp6A~2QkUJZsdj5D-rONxH39AS2J694llmWoJmg5zM6elaOaKKjtYcJSTI7btAtwinRj1CvPZ8kPAJjaizI~jBERx76Y-Sr7~zIAIMThBdtTmAzbNTNp3B9EqiipjpqwJSwWmvl3b3TwE7-gBuMDJmXKMJQkCJEEP9XtdcaxI5ogrsgDUaY~WSF9EGXLQvpeMdwTdbiZXDYA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "dyess"
      }
    ]
  },
  {
    language: "Navajo",
    content: [
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/1-Number-PNG.png",
        targetWord: "tʼááłáʼí",
        audioToPlay: "https://soundcloud.com/dinehpodcast/taalai",
        phonetic: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/2-Number-PNG.png",
        targetWord: "naaki",
        audioToPlay: "https://soundcloud.com/dinehpodcast/naaki",
        phonetic: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/3-Number-PNG.png",
        targetWord: "táá'",
        audioToPlay: "https://soundcloud.com/dinehpodcast/taa",
        phonetic: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/4-Number-PNG.png",
        targetWord: "dį́į́ʼ",
        audioToPlay: "https://soundcloud.com/dinehpodcast/dii",
        phonetic: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/5-Number-PNG.png",
        targetWord: "ashdla'",
        audioToPlay: "https://soundcloud.com/dinehpodcast/ashdla",
        phonetic: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/6-Number-PNG.png",
        targetWord: "hastą́ą́",
        audioToPlay: "https://soundcloud.com/dinehpodcast/hastaa",
        phonetic: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/7-Number-PNG.png",
        targetWord: "tsostsʼid",
        audioToPlay: "https://soundcloud.com/dinehpodcast/tsostsid",
        phonetic: "so-stid"
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/8-Number-PNG.png",
        targetWord: "tseebíí",
        audioToPlay: "https://soundcloud.com/dinehpodcast/tseebii",
        phonetic: "say-bee"
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/9-Number-PNG.png",
        targetWord: "náhástʼéí",
        audioToPlay: "https://soundcloud.com/dinehpodcast/nahastei",
        phonetic: "nah-ha-tsay"
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/10-Number-PNG.png",
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
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/2-Number-PNG.png",
        answerOptions: ["cuatro", "dos", "cinco"],
        correctAnswer: "dos",
        explanation: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/1-Number-PNG.png",
        answerOptions: ["uno", "tres", "dos"],
        correctAnswer: "uno",
        explanation: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/4-Number-PNG.png",
        answerOptions: ["cinco", "cuatro", "uno"],
        correctAnswer: "cuatro",
        explanation: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/3-Number-PNG.png",
        answerOptions: ["dos", "cuatro", "tres"],
        correctAnswer: "tres",
        explanation: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/5-Number-PNG.png",
        answerOptions: ["cinco", "tres", "uno"],
        correctAnswer: "cinco",
        explanation: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/8-Number-PNG.png",
        answerOptions: ["nueve", "seis", "ocho"],
        correctAnswer: "ocho",
        explanation: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/6-Number-PNG.png",
        answerOptions: ["seis", "diez", "siete"],
        correctAnswer: "seis",
        explanation: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/10-Number-PNG.png",
        answerOptions: ["siete", "nueve", "diez"],
        correctAnswer: "diez",
        explanation: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/7-Number-PNG.png",
        answerOptions: ["ocho", "siete", "seis"],
        correctAnswer: "siete",
        explanation: ""
      },
      {
        imageUrl: "http://www.pngall.com/wp-content/uploads/2016/04/9-Number-PNG.png",
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
