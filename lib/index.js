/**
 * Constants
 */

var shortener = /^(?:https?\:\/\/)?(?:www\.)?youtu\.be/
var main = /^(?:https?\:\/\/)?(?:www\.)?youtube\.com\/+(?:watch|embed)/

/**
 * isYoutube
 */

function isYoutubeVideo (url) {
  return shortener.test(url) || main.test(url)
}

/**
 * Exports
 */

module.exports = isYoutubeVideo
