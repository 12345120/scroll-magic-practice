const { dest } = require("gulp");
const gulp = require("gulp");
const browserify = require("browserify");

const scrollmagic = require("scrollmagic");


// ! this doesn't work bc of no window reference 
const main = (cb) => {
  return browserify(scrollmagic)
    .transform("babelify", {
      presets: ["@babel/preset-env"],
    })
    .bundle()
    .pipe("./sm_bundle.js");
};
exports.main = main;


// const task = (cb) => {
//   return gulp.src("./test1/1.txt").pipe(dest("./test2"));
// };
// exports.task = task;
