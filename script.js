if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  var infile = "lib/bugsfreetv.json";
} else {
  var infile = "https://boxtv.netlify.app/lib/bugsfreetv.json";
}
const sectionA = document.querySelector("section");
var mainelem = document.createElement("main");
sectionA.appendChild(mainelem);
var maindiv = document.createElement('div');
mainelem.appendChild(maindiv);
maindiv.setAttribute('id', "myvideo");
var currentInfo = document.createElement("div");
sectionA.appendChild(currentInfo);
currentInfo.setAttribute('id', "currentInfo");
var asideelem = document.createElement("aside");
sectionA.appendChild(asideelem);
let buttelem = document.createElement("div");
asideelem.appendChild(buttelem);
buttelem.setAttribute('class', "searchbutt");
let searchelem = document.createElement('div');
asideelem.appendChild(searchelem);
searchelem.setAttribute('class', "searchbox");
var vidobj = document.getElementById("myvideo");
var chnumb = 0x0;
function onImgError(_0xcf1171) {
  _0xcf1171.src = "img/no-image.png";
  _0xcf1171.onerror = '';
  return true;
}
$.get(infile, getlst);
function getlst(_0x5d0607) {
  let _0x472a97 = '';
  $.each(_0x5d0607, _0x44d07e);
  function _0x44d07e(_0x46fdb8, _0x3ef56b) {
    if (_0x46fdb8 % _0x5d0607.length) {
      _0x472a97 += "<li data-chnum=" + _0x46fdb8 + " data-name='" + _0x3ef56b[0x0] + "' class='mychnl " + _0x3ef56b[0x1] + " 'tabindex=" + _0x46fdb8 + "><div class='thumbimg'><img src=" + _0x3ef56b[0x2] + " onerror='onImgError(this)' width='100%' height='100%'></div></li>";
    }
  }
  var _0x446308 = document.createElement("nav");
  sectionA.appendChild(_0x446308);
  let _0x1fbd25 = document.createElement('ul');
  _0x446308.appendChild(_0x1fbd25);
  _0x1fbd25.setAttribute('id', "menu");
  document.getElementById("menu").innerHTML = _0x472a97;
  let _0x5060f2 = localStorage.getItem('ChHistory2');
  if (_0x5060f2 !== null) {
    chnumb = _0x5060f2;
  } else {
    chnumb = chnumb + 0x1;
  }
  var _0x397fc5 = document.getElementById("menu");
  var _0x2d13ff = _0x397fc5.querySelectorAll('LI');
  _0x2d13ff.forEach(_0x9e07f0 => {
    var _0x102929 = _0x9e07f0.getAttribute('data-chNum');
    var _0x2c0c76 = _0x9e07f0.getAttribute('data-name');
    if (chnumb == _0x102929) {
      _0x9e07f0.classList.add("active");
      _0x27aab2(chnumb, _0x5d0607, _0x2c0c76);
      _0x4b08ba();
      _0x9e07f0.focus();
    }
    _0x9e07f0.addEventListener("click", function () {
      _0x486682(_0x9e07f0, _0x102929, _0x5d0607, _0x2c0c76);
    });
  });
  _0x25b4ef(chnumb);
  _0xbb6722(chnumb);
  function _0x486682(_0x2acc7f, _0x2e4128, _0x43d683, _0x30edf1) {
    _0x2bb2a6();
    _0x14fbec();
    _0x5f4fc4();
    _0x4cbe53();
    _0x4b08ba();
    _0x2acc7f.classList.add('active');
    localStorage.setItem('ChHistory2', _0x2e4128);
    _0x27aab2(_0x2e4128, _0x43d683, _0x30edf1);
    _0x25b4ef(_0x2e4128);
    _0xbb6722(_0x2e4128);
  }
  function _0x4cbe53() {
    var _0x3b338d = document.querySelector(".searchbox");
    _0x3b338d.classList.remove("show");
    _0x3b338d.classList.add("hide");
  }
  function _0x27aab2(_0x358293, _0x4f3b9e, _0x504155) {
    var _0x2806fc = document.getElementById('currentInfo');
    _0x2806fc.innerHTML = "<ul><li>" + _0x504155 + "</li><li>" + _0x358293 + " / " + _0x4f3b9e.length + " Channels</li></ul><span></span>";
    document.title = _0x504155;
    _0x55f55a();
  }
  function _0x4b08ba() {
    document.getElementById("currentInfo").classList.remove("hide");
    setTimeout(function () {
      document.getElementById("currentInfo").classList.add("hide");
    }, 0x2710);
  }
  function _0xbb6722(_0x5ee42b) {
    vidobj.setAttribute("style", "background-image:url('" + _0x5d0607[_0x5ee42b][0x2] + "')");
  }
  function _0x76644c() {
    const _0x235ab1 = document.querySelector(".active");
    if (_0x235ab1) {
      _0x235ab1.scrollIntoView({
        'block': "center",
        'inline': "center",
        'behavior': "auto"
      });
    }
  }
  function _0x25b4ef(_0x147b38) {
    _0x76644c();
    if (_0x5d0607[_0x147b38][0x3].indexOf(".m3u8") !== -0x1) {
      var _0x21d0d2 = 'application/x-mpegURL';
      _0x52ce90(_0x147b38, _0x21d0d2);
    } else {
      if (_0x5d0607[_0x147b38][0x3].indexOf('.mpd') !== -0x1) {
        var _0x21d0d2 = "application/dash+xml";
        _0x52ce90(_0x147b38, _0x21d0d2);
      } else {
        if (_0x5d0607[_0x147b38][0x3].indexOf("youtube") !== -0x1) {
          _0x302e9d(_0x147b38);
        } else {
          var _0x21d0d2 = "audio/mp3";
          _0x52ce90(_0x147b38, _0x21d0d2);
        }
      }
    }
  }
  function _0x52ce90(_0x4c6778, _0x41f486) {
    vidobj.setAttribute("style", "background-image:url('" + _0x5d0607[_0x4c6778][0x2] + "')");
    var _0x4a91d5 = document.createElement("video");
    vidobj.appendChild(_0x4a91d5);
    _0x4a91d5.setAttribute('id', "vidZ");
    _0x4a91d5.setAttribute("preload", "auto");
    _0x4a91d5.setAttribute("autoplay", "true");
    _0x4a91d5.setAttribute("loop", 'true');
    _0x4a91d5.setAttribute("tabindex", '-1');
    _0x4a91d5.setAttribute("playsinline", "playsinline");
    _0x4a91d5.setAttribute("playsinline", "true");
    _0x4a91d5.setAttribute("controls", "true");
    _0x4a91d5.setAttribute("muted", "false");
    _0x4a91d5.setAttribute("class", "video-js video-bgimg vjs-fill vjs-fluid vjs-theme-fantasy vjs-theme-city vjs-theme-forest vjs-theme-sea");
    _0x4a91d5.setAttribute('poster', _0x5d0607[_0x4c6778][0x2]);
    var _0x1c9ffa = document.createElement("source");
    _0x4a91d5.appendChild(_0x1c9ffa);
    _0x1c9ffa.setAttribute("src", _0x5d0607[_0x4c6778][0x3]);
    _0x1c9ffa.setAttribute('type', _0x41f486);
    var _0x45e709 = videojs(_0x4a91d5, {
      'liveui': true,
      'liveTracker': true,
      'muted': false,
      'loadingSpinner': true,
      'bigPlayButton': true,
      'language': 'en',
      'fluid': true,
      'fill': true,
      'responsive': true,
      'playbackRates': [0.5, 0.75, 0x1, 1.25, 1.5, 1.75, 0x2],
      'fluid': true,
      'errorDisplay': true
    });
    _0x45e709.fill(true);
    _0x45e709.play();
    _0x45e709.fill(true);
    _0x45e709.maxQualitySelector({
      'autoLabel': "Auto "
    });
    _0x45e709.play();
    videojs('vidZ').ready(function () {
      this.hotkeys({
        'volumeStep': 0.1,
        'seekStep': 0x5,
        'enableMute': true,
        'enableFullscreen': true,
        'enableNumbers': false,
        'enableVolumeScroll': false,
        'enableHoverScroll': true,
        'seekStep': function (_0x2cfd32) {
          if (_0x2cfd32.ctrlKey && _0x2cfd32.altKey) {
            return 300;
          } else {
            if (_0x2cfd32.ctrlKey) {
              return 0x3c;
            } else {
              return _0x2cfd32.altKey ? 0xa : 0x5;
            }
          }
        },
        'fullscreenKey': function (_0x22eb54) {
          return _0x22eb54.which === 0x46;
        },
        'customKeys': {
          'simpleKey': {
            'key': function (_0x31d1d9) {
              return _0x31d1d9.which === 0x53;
            },
            'handler': function (_0x167edd, _0x3f5ead, _0x3412c4) {
              if (_0x167edd.paused()) {
                _0x167edd.play();
              } else {
                _0x167edd.pause();
              }
            }
          },
          'complexKey': {
            'key': function (_0x53d4df) {
              return _0x53d4df.which === 0x4d;
            },
            'handler': function (_0x1638b9, _0x50a279, _0x3db912) {
              if (_0x50a279.enableMute) {
                _0x1638b9.muted(!_0x1638b9.muted());
              }
            }
          },
          'numbersKey': {
            'key': function (_0x534303) {
              return _0x534303.which > 0x2f && _0x534303.which < 0x3b || _0x534303.which > 0x5f && _0x534303.which < 0x6a;
            },
            'handler': function (_0x1ab174, _0x2fa307, _0x20838d) {
              if (_0x2fa307.enableModifiersForNumbers || !(_0x20838d.metaKey || _0x20838d.ctrlKey || _0x20838d.altKey)) {
                var _0x38ceb6 = 0x30;
                if (_0x20838d.which > 0x5f) {
                  _0x38ceb6 = 0x60;
                }
                var _0xdb6760 = _0x20838d.which - _0x38ceb6;
                _0x1ab174.currentTime(_0x1ab174.duration() * _0xdb6760 * 0.1);
              }
            }
          },
          'emptyHotkey': {},
          'withoutKey': {
            'handler': function (_0x111e93, _0x323316, _0x43f506) {
              console.log("withoutKey handler");
            }
          },
          'withoutHandler': {
            'key': function (_0x344005) {
              return true;
            }
          },
          'malformedKey': {
            'key': function () {
              console.log("I have a malformed customKey. The Key function must return a boolean.");
            },
            'handler': function (_0x42fd3f, _0x75bb44, _0x3d16ac) {}
          }
        }
      });
    });
  }
  function _0x302e9d(_0x48ad1e) {
    var _0x243a5c = document.createElement("iframe");
    vidobj.appendChild(_0x243a5c);
    _0x243a5c.setAttribute('id', "vidZ");
    _0x243a5c.setAttribute("frameborder", '0');
    _0x243a5c.setAttribute("width", "100%");
    _0x243a5c.setAttribute("height", "100%");
    _0x243a5c.setAttribute("allowfullscreen", '0');
    _0x243a5c.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    vidobj.setAttribute("style", "background-image:url('" + _0x5d0607[_0x48ad1e][0x2] + "')");
    _0x243a5c.setAttribute("src", _0x5d0607[_0x48ad1e][0x3]);
  }
  function _0x14fbec() {
    if (vidobj.getElementsByTagName('video').length > 0x0) {
      var _0x2aad30 = document.getElementById("vidZ_html5_api");
      _0x2aad30.pause();
      _0x2aad30.removeAttribute('src');
      vidobj.innerHTML = '';
      _0x2aad30.remove();
    }
  }
  function _0x5f4fc4() {
    if (vidobj.getElementsByTagName("iframe").length > 0x0) {
      var _0x4c08be = document.getElementById('vidZ');
      vidobj.innerHTML = '';
      _0x4c08be.remove();
    }
  }
  function _0x2bb2a6() {
    var _0x29605e = document.getElementById("menu");
    var _0x56dd97 = _0x29605e.querySelectorAll('LI');
    _0x56dd97.forEach(function (_0x276845) {
      _0x276845.classList.remove("active");
    });
  }
  buttelem.addEventListener("click", function () {
    var _0x9e83b8 = document.querySelector('.searchbox');
    _0x9e83b8.classList.toggle("show");
    _0x9e83b8.classList.remove("hide");
    searchelem.innerHTML = "<span><input type=\"text\" id=\"inptbx\" autocomplete=\"off\" placeholder=\"Search...\"></span><ul id=\"filterList\"><li>Welcome</li><li>News</li><li>Regional</li><li>Lifestyle</li><li>Fun</li><li>Music</li><li>Movies</li><li>Internet Radio</li></ul>";
    var _0x3a7e8f = document.getElementById("currentInfo");
    var _0x3d8cdc = _0x3a7e8f.classList.contains("hide");
    if (_0x3d8cdc.length > 0x0) {
      _0x3a7e8f.classList.add('hide');
    } else {
      _0x3a7e8f.classList.toggle("hide");
    }
    _0x76644c();
    _0x57d97b();
    $('.not-found').remove();
    $('#inptbx').select().val('').keyup(_0x339d2a);
    $("#menu li").show();
    $("#filterList li").removeClass("filterChannel");
  });
  function _0x339d2a() {
    filterString = $('#inptbx').val().toLowerCase();
    if (filterString.length < 0x1) {
      $("#menu li").slideDown();
    } else {
      var _0x503c3a = $("<li class=\"nochnl\">No channel found</li>");
      $("#menu li").each(function () {
        var _0x4afcc9 = $(this).data("name").toLowerCase().indexOf(filterString) == -0x1;
        var _0x35167b = $(this).data("name");
        if (_0x4afcc9) {
          $(this).hide();
        } else {
          $(this).show();
        }
        if (_0x4afcc9 != _0x35167b) {} else {
          $(".nochnl").remove();
          _0x503c3a.detach();
        }
      });
    }
  }
  function _0x57d97b() {
    $("#filterList li").click(function (_0x12363b) {
      $("#filterList li").removeClass("filterChannel");
      $(this).addClass("filterChannel");
      _0x76644c();
      filterStr = $(this).text().toLowerCase().replace(/\s/g, '');
      if (filterStr.length < 0x1) {
        $("#menu li").show();
      } else {
        $("#menu li").each(function () {
          var _0x20999e = $(this).attr('class').toLowerCase().indexOf(filterStr) == -0x1;
          if (_0x20999e) {
            $(this).hide();
          } else {
            $(this).show();
          }
        });
      }
    });
  }
  function _0x55f55a() {
    window.dataLayer = window.dataLayer || [];
    function _0x442c0b() {
      dataLayer.push(arguments);
    }
    _0x442c0b('js', new Date());
    _0x442c0b("config", "B000000000000");
    (function (_0x435ee7, _0x1618f4, _0x573014, _0x44aba0, _0xe1b3ec) {
      _0x435ee7[_0x44aba0] = _0x435ee7[_0x44aba0] || [];
      _0x435ee7[_0x44aba0].push({
        'gtm.start': new Date().getTime(),
        'event': "gtm.js"
      });
      var _0x2d0a75 = _0x1618f4.getElementsByTagName(_0x573014)[0x0];
      var _0x44d0ca = _0x1618f4.createElement(_0x573014);
      var _0x427347 = _0x44aba0 != 'dataLayer' ? '&l=' + _0x44aba0 : '';
      _0x44d0ca.async = true;
      _0x44d0ca.src = "https://www.googletagmanager.com/gtm.js?id=" + _0xe1b3ec + _0x427347;
      _0x2d0a75.parentNode.insertBefore(_0x44d0ca, _0x2d0a75);
    })(window, document, "script", 'dataLayer', 'GTM-BUGSFREEEEE');
  }
}
