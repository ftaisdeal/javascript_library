const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  play() {
    console.log(this);
  },
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this)
  }
};

video.showTags();

//video.play();

video.stop = function () {
  console.log(this);
}

//video.stop();

function PlayVideo() {
  console.log(this);
}

//PlayVideo();

function Video(title) {
  this.title = "title";
  console.log(this);
}

//const v = new Video('a title');