const gulp = require(`gulp`);
const sass = require(`gulp-sass`);
const autoprefixer = require(`gulp-autoprefixer`);
const plumber = require(`gulp-plumber`);
const sourcemaps = require(`gulp-sourcemaps`);
const gulpStylelint = require(`gulp-stylelint`);
const cleanCSS = require(`gulp-clean-css`);
// const rename = require(`gulp-rename`);

module.exports = function styles() {
  return gulp.src(`src/styles/**/*.scss`)
    .pipe(plumber())
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [
        {
          formatter: `string`,
          console: true
        }
      ]
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({
      debug: true,
      compatibility: `*`
    }, (details) => {
      // eslint-disable-next-line no-console
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`);
    }))
    .pipe(sourcemaps.write())
    // .pipe(rename({ suffix: `.min` }))
    .pipe(gulp.dest(`build/css`));
};
