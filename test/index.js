/**
 * Imports
 */

var isYoutubeVideo = require('..')
var assert = require('assert')

/**
 * Tests
 */

describe('is-youtube', function () {
  it('should work', function () {
    assert.ok(!isYoutubeVideo('http://www.google.com'))
    assert.ok(isYoutubeVideo('https://www.youtube.com/watch?v=uxpDa-c-4Mc'))
    assert.ok(isYoutubeVideo('https://youtu.be/uxpDa-c-4Mc'))
    assert.ok(isYoutubeVideo('https://www.youtube.com/embed/uxpDa-c-4Mc'))
    assert.ok(isYoutubeVideo('http://www.youtube.com/watch?v=uxpDa-c-4Mc'))
    assert.ok(isYoutubeVideo('http://youtu.be/uxpDa-c-4Mc'))
    assert.ok(isYoutubeVideo('http://www.youtube.com/embed/uxpDa-c-4Mc'))
    assert.ok(isYoutubeVideo('https://youtube.com/watch?v=uxpDa-c-4Mc'))
    assert.ok(isYoutubeVideo('https://www.youtu.be/uxpDa-c-4Mc'))
    assert.ok(isYoutubeVideo('https://youtube.com/embed/uxpDa-c-4Mc'))
    assert.ok(isYoutubeVideo('youtube.com/watch?v=uxpDa-c-4Mc'))
    assert.ok(isYoutubeVideo('youtu.be/uxpDa-c-4Mc'))
    assert.ok(isYoutubeVideo('youtube.com/embed/uxpDa-c-4Mc'))
    assert.ok(!isYoutubeVideo('https://support.google.com/youtube/answer/6098135?p=yt_devicesupport&hl=en&rd=1'))
  })
})
