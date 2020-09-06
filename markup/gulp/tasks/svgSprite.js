const gulp = require(`gulp`);
// const replace = require(`gulp-replace`);
// const svgmin = require(`gulp-svgmin`);
// const svgsprite = require(`gulp-svg-sprite`);
// const cheerio = require(`gulp-cheerio`);
const svgstore = require(`gulp-svgstore`);
const rename = require(`gulp-rename`);


module.exports = function svgSprite() {
  return gulp.src(`source/img/sprite/*.svg`)
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename(`sprite.svg`))
    .pipe(gulp.dest(`build/img`));
};

// module.exports = function svgSprite() {
//   return gulp.src(`source/img/svg/**/*.*`)
//     .pipe(svgmin({
//       js2svg: {
//         pretty: true
//       }
//     }))
//     .pipe(cheerio({
//       run($) {
//         $(`[fill]`).removeAttr(`fill`);
//         $(`[stroke]`).removeAttr(`stroke`);
//         $(`[style]`).removeAttr(`style`);
//       },
//       parserOptions: { xmlMode: true }
//     }))
//     .pipe(replace(`&gt;`, `>`))
//     .pipe(svgsprite({
//       mode: {
//         symbol: {
//           sprite: `sprite.svg`,
//         }
//       }
//     }))
//     .pipe(gulp.dest(`build/img`));
// };
