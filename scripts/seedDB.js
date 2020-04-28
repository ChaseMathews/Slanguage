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
        audioToPlay: "https://cf-media.sndcdn.com/1JCfsLlYB6oM.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMUpDZnNMbFlCNm9NLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgwNDA1Nzd9fX1dfQ__&Signature=FpgDh9ZQPxO9H71bQRfJZi8LKbrnSCgUCsDOtEFtPKuVuPlItXmxLmT7KdRmTAf82IpkK~~ELBIrbu3DO5Vd5EG01V9d5bc9hV3wIkBIShrLEtuaQnZ2hfUaNJWBQL0N1e5ZInU6h3ZgTPiZiDlDw2kzqIlb3Kg0k8Ex4zWJndTxMPH2dsIJ3~V62HTlSPqW9MTJ2MuTZNzUcvR538aQ40CBtgd4IRqT50re2RyWC1IJg1~SfNgojaSDbDg3HWQQW9mqF7TRupQnrHFk8QYqddK6s60KvwgLGi0O3O-F0dhFEcpQ88~nUr09J26yzL6nT75DDSncvWbja9S2QpyH~g__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "OOh-noh"
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/psc4EAo0yUjV2XnzhsIJGsv1Gnfqv31lkidhLX7JMvbNGcMvyK24nHLD0oR9_J2Y90Qk0NlUBeV5Y0SSWPb-Anv2rUTYt9-oxkUx9Dmp",
        targetWord: "dos",
        audioToPlay: "https://cf-media.sndcdn.com/QTHb3wnzgCXP.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vUVRIYjN3bnpnQ1hQLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgwNDA2OTh9fX1dfQ__&Signature=LJWAplyEXipbf~62bix-uiUuaoeGrXIOBZhUhDv9T1s9l9U0cXtDwJa2wsGdf-F0NMQhR9q5AsBVWChkUeg35wnocXSsNJqMpGN154MzjBd78f6KC3GyWDhPbxPiLfGW0S1zFGAXxEAY4KWsGs0NBHZGdOmDOGLmDc5FgcgxOPsvJAoc4XsdVKwboJIhmmAsouZQr6ogl~ZWQAdCQBwLrW66uSv08oW4Q6xjdWVEYNNRLMXiGg5vzKGWTfmIJ66SrvQDyWepLhjdaHLVia7aCUIKPGIqNJp94fPoKJpxjGqRx9xIMZcABr00H7PAxnZVwd-5v83Lxws5w5iBpc-y9g__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "dohs"
      },
      {
        imageUrl: "https://lh4.googleusercontent.com/jHGLYCMWC9YTgLXFEGKn9-78VFvOcgsfZcg9COYTBygozWtJubnnlWqUNhxqnPBb0osFCiCEDSUErjNgTt3rX3ZRdTqs_yc3fvzxHmVa",
        targetWord: "tres",
        audioToPlay: "https://cf-media.sndcdn.com/cV2kHFeyfPoF.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vY1Yya0hGZXlmUG9GLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgwNDA3MzR9fX1dfQ__&Signature=Ohxs16o7ozz6xu~jdWb-XiZKrSCNphZwsZUJbjAbOFIlBq-XK43g~184qN7YmhUQg57eSUFS3wugRQOQvVORuzQwG3inY-9PuhAa-gifFVBvbJnUENJL8~qJCRyzCxnwoVFqbPkzoFFbXzrK-JDcCxiHjQaS6u1mPkFs9tXoMYgO8Gq4LIfM7KYXrq~9ilpdMglQ1rHogce5nzgypX~Kqus0M3z~SdYRhprlf2j--SnqBhtEJk8HvjidnsAe-UW~oLmJWB~msNQrWGgmO7BYD05S3y6tG85gd3ZSkgBTKjC2e4g73mh2DgURykU5NV-zV5c8HN20dWyPFJ-zmYIPPg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "trehs"
      },
      {
        imageUrl: "https://lh5.googleusercontent.com/F0NPtP9sg55LFldZrOE0W36iMp-jZOdwgraSIAHfx00lB_F-ySThfuZJZ4TvcRVAwleOHHRk0ro0rkm0k7on6Hc5LH2Q4TERKJS5DLzJ",
        targetWord: "cuatro",
        audioToPlay: "https://cf-media.sndcdn.com/zF5Q94pHBCgT.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vekY1UTk0cEhCQ2dULjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgwNDA3NTR9fX1dfQ__&Signature=JWxXTXZ-xGD~Yvb3jtXCEOMoqNNE~fZ32no5v-qFSP1NvB9CNbGz38DcuXJ31ORJfCJ2IJkMUZ77NCSGwOpS58JB-OdQQ31BBKAhcf-54g4TWe2nAmJeLNT8YZQIpi7VFBXfbCUj5A5e7B9IXKMjb8TWFtFansr2ILAyq2UNJ8FfJ~OA8tvsFs0seSSGF9dfKKIEkBkjhJZouxX2DeGyA3pYPcBsmY0UidKgLkcd0A322XfAJkfBA4D12DVXrgb-nfhHeVGWy5~22kDDa~77fW5K~7pS9YWETExu8s7hssm1blvlRmpOHR1roGC0~v-8lu6B~1Ugf4ptzS2k2ou4Rg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "KWAH-troh"
      },
      {
        imageUrl: "https://lh6.googleusercontent.com/RcOgKGna3y7Nb6uWOQB6B9gaOy23cv9_koMmK1IxstnjIyc4-3ESIruYRqeAA5M2cQTwqkNc9DpBo1TtV6WPGRLPYk4IUJ19K8AU9gvq",
        targetWord: "cinco",
        audioToPlay: "https://cf-media.sndcdn.com/u6vmbXom0hex.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vdTZ2bWJYb20waGV4LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgwNDA3ODl9fX1dfQ__&Signature=MVsreLdz9AS3Y3socIBB4eK0iGeBV2uqWEFC~5DkkDVu9BSgoNmm3FoDgQDkSN8tns~1Gs6sn2omwcB6qibIM-v4U7DK6rBC6j2x7Bc4kLAvcWCcotmotR7JdIkvojlLrJf4VhGRLQvI18nzd7APz~KiS8iqiLUEXX84EqQKIs~tSUoBHMb7f0jgklKTSejlhw7hAkDCAkt8q4nhdFw7v6DYPbXmqmTIxs0Yzb20HXo6ejWpDmPQ7DtQbgrnwAshgII9K8KbE~xqRJf6-GcK9Y-rgIPZYKFWALWa0XLFbyN56AMhQW-N1u19GNwt0yvd933VdzYIveQ8F6hWVStkjA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "SEEN-ko"
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/xe64WZcm7cYXdxtekR2bsUZwpF10-c1Y3nnLpPtROvttBF81CxTruhzX4_nMKmPzc0smH_c9rI6WZyefh6T1QR0sQmrDC_zstSqnoco4",
        targetWord: "seis",
        audioToPlay: "https://cf-media.sndcdn.com/rgXKgIX9LffD.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vcmdYS2dJWDlMZmZELjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgwNDA4MTF9fX1dfQ__&Signature=G1y5FdBD-Qt2pHJeupzBi0tu6Q6GszG8Xlu~9XDC4fha5LXEECSUvaeIbw5Z0kiOqyw3fFaNp3GzCF9WJPNOtfVf3X1BONLuzphzo21DkUW3ZysKquEV1~t5uWb~Mu0icg71tdd1P22zbQmExivI9qnW26tmWOTxi4b0NCZMm70xpPBXC~XcrM2YUmYlukGv7iIoT~xQNJrpirvsp4pw9~mnfm~QZLvfdcJGPNaTZjAl-x4NUUCRv2mtmKj~vpSS91iKMoMb4Wi55ciBsamvqaw5pCXCcRcoMaAbruQOfvjvg24HG5xFK9BWNiOd7ZNgcBG95Ozfe9xoOjuBNchz6Q__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "sayss"
      },
      {
        imageUrl: "https://lh6.googleusercontent.com/tRdgEnV9LYyfJ0YfBEel4RrCFOJeai68_9WLWRRNuK3_WxN1jlJcApWM5LlrWlCi61SlG7neuGhEqyub0Kk7PTqJwPfae9GJiqkZOlO_",
        targetWord: "siete",
        audioToPlay: "https://cf-media.sndcdn.com/uZHIW54QU2Yt.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vdVpISVc1NFFVMll0LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgwNDA4MzJ9fX1dfQ__&Signature=GarSEYBX8uh0HIQ-wTWubWgiX0Btr2FWwOP5FeJ27~1Eo-L250Iz5b3BgrNweuaiqEfungYZDR52CZ1hnll30Nl~BZvZzthb~O2Ul8ZNI4~1vtj3jowpO28JxIFtUqNzYwZCseIcKWco5-YsBVzuPwIeigKNcp2qD1~2mbJCcho7D7~vEeLC8T6wXKjmwlqV3E4hCDkXrTpLpYlXAGu03ixCWHMeucaOOG8WWaibb2fBN82mr8UEL57iirCI1riu3PmbUTJ3gAoasZ1Z95mSiLfTvL25V20Noq94rXa3lXJwob1n~t0Xtob1URVSLQaPPNXJmgUZDKYObvZ7GloZjw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "SYEH-teh"
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/7XO8LtG2luVW6gFjcoFDmhzslywfM1vVF9Y72NWoC8fXFMkqCCL3qh9eLKbMuufy4xALSFvRcdQgc8gg5sAvxizoA2kSHMqOrk5TNvjs",
        targetWord: "ocho",
        audioToPlay: "https://cf-media.sndcdn.com/gvZeBwPtcGWy.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vZ3ZaZUJ3UHRjR1d5LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgwNDA4NzF9fX1dfQ__&Signature=VHgv1TJ5jZaZG6VPZihDMRwLQ4TGPWk3GwaUYg0bnEQPHeSTFTrHWKnvI1w1qiBJ1KaNBhhXhw1JhufCi293ONb4~yG1B0fpZjrRWfmpVwjZOU1uL~B3nLKarWWRj3Q41iVsp1GOXFvA0JPwZYwf1UL-BzGevFPDv8rs7HxjfTu3GzYaWQNxMJgfyhRRxRYS-1kcRN4kuhTK4RnYJH0wLjCztyRSAt2jL8qe~FgB7dNgVobAxFYQvcZomPqriKQKXxyhY-o2JVDloPBDAkdm7jecuVJBYuejKiZ09apbwbex3eLkMlE2713jtbCnS00TGcrTJ5NtFXwRQF15gtE-1Q__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "OH-choh"
      },
      {
        imageUrl: "https://lh3.googleusercontent.com/hwqoJtiEofyyfzNQN89aQAOxF8n8Vh_NHpL3MKCJkoy_l-4ilDXSsgFcGFjBgQTbbkFHOF0f8vB4O658GmBNy2qO9lcWo9JOXmLjdlLg",
        targetWord: "nueve",
        audioToPlay: "https://cf-media.sndcdn.com/SYxe09GI4SQw.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vU1l4ZTA5R0k0U1F3LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgwNDA4OTF9fX1dfQ__&Signature=A4m4WkDsEm90YgU4dXnir5pgsqUEtCw3MG-vEAOZVvZWWoO0C2OSPomVlm15Y63YPJ~Bt4YXPVW1Hwo24TudAjIyOo9zXi7AplegvOB7ZjYgOd3lZwgN9Yg0z85ocwCg09XNbvC5zIjssEx0CxYTy1k82w2~lbcVBVh3hiFrmP2fOSO6mQ2LTaVW6FT~nQC3XRi33IK9S0esNoJt2689KPC2eawAL9XWjcs4unMrdJXOOF~xteBOO4eO2JO~qZMPBqfm6p82VSt3mF7WiZQ8zd9VuTi1BPPjEJ70WoGzdiGk9W90VsZa06LQ-SNmL7oHsuEolFsPFDuci2eASjOM~g__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
        phonetic: "NWEH-bay"
      },
      {
        imageUrl: "https://lh4.googleusercontent.com/Um2YRCxNwdnQq3Twim2cHicnALUho6u8MSHDtHiZ351q-16QjWQo8TpKROJfgUT5xo-O7JNs4wy-nbHvTMxYo23SQer_57-PdIZD5ou-",
        targetWord: "diez",
        audioToPlay: "https://cf-media.sndcdn.com/0l2nwWT3N0Zw.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMGwybndXVDNOMFp3LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgwNDA5MTJ9fX1dfQ__&Signature=WineSMfUYRB7yypLk5vsyElOi3SKkaqXs-wLdUCbRRZ1aE-8Z62KuvR9ncZrCXJ5jZRHecGyalvLEjNMXwXUvWFIavWeDLOIeWWS9ivMlVeXN98sHkFyglE6nQq1-3pKzmoQpA-0dApa2UiIHv-6jyW1BSqcIV1dgxM3AhPxkLkgPwPu~UjUknqveFg5Y2GpAziEMfAYOhZCuLtAgTemytIUhgP0~gNoB4rcbdWBBDH73nPQdPgPdg6927sf9oqAZqs7JTbeOvVvxOnSDRSODEvFE1720GpuY7E~7JBfAz-sRG9osMhsfl-XwDNuvbG1zuD0NKoSJJZ2GjYYOy0SkQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
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
