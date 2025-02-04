$(document).ready(function () {
  $(".scrollDownWrap").click(function (e) {
    e.preventDefault();
    let scrollHeight = $(".bannerSection").outerHeight();
    $("html, body").scrollTop(scrollHeight);
  });

  var $slider = $(".slider");

  if ($slider.length) {
    $slider.slick({
      pauseOnFocus: false,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      centerMode: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  var $leaderSlider = $(".leaderSlider");

  if ($leaderSlider.length) {
    $leaderSlider.slick({
      pauseOnFocus: false,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      centerMode: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  var $eventSlider = $(".eventSlider");

  if ($eventSlider.length) {
    const $status = $(".eventSliderPaging");
    // $eventSlider.on(
    //   "init reInit afterChange",
    //   function (event, slick, currentSlide, nextSlide) {
    //     let i = (currentSlide ? currentSlide : 0) + 1;
    //     $status.text(i + " of " + slick.slideCount);
    //   }
    // );
    $eventSlider.slick({
      pauseOnFocus: false,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      centerMode: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  setTimeout(() => {
    $(".hs-form-radio-display .hs-input").click(function () {
      $(".hs-form-radio-display").removeClass("checkedRadioBtn");
      $(this).parent().toggleClass("checkedRadioBtn");
    });

    $("input").focus(function () {
      $(this).parent().prev().prev().addClass("floating");
    });
    $("input").blur(function () {
      if ($(this).val().length === 0) {
        $(this).parent().prev().prev().removeClass("floating");
      } else {
        $(this).parent().prev().prev().addClass("floating");
      }
    });
  }, 1000);
  $(".customTd h6").mouseover(function () {
    $(".customTd h6 img").hide();
    $(this)
      .parents(".customTd")
      .next()
      .find("img")
      .stop()
      .fadeIn("slow")
      .show();
  });
  $(".customTd h6").mouseleave(function () {
    $(this).parents(".customTd").next().find("img").stop().fadeOut("fast");
  });
  // Hide Header on on scroll down
  let didScroll;
  let lastScrollTop = 0;
  let delta = 1;
  let navbarHeight = 89;
  $(window).scroll(function (event) {
    didScroll = true;
  });
  checkScreen();

  setInterval(function () {
    if (didScroll) {
      if (!$("header").hasClass("hover")) hasScrolled();
      logoColorChange();
      didScroll = false;
    }
  }, 250);

  let imageBanner = false;
  let iframePage = false;
  if ($(".iframeMainWrapper").length) {
    iframePage = true;
    let headerHeight = checkScreen() > 991 ? 89 : 72;
    $("header").addClass("opening");
    $("header").removeClass("nav-up").addClass("nav-down");
    $(".headerBg")
      .stop()
      .animate(
        {
          height: headerHeight,
        },
        500,
        function () {
          $("header").removeClass("opening");
          $("header").removeClass("closing");
        }
      );
  }
  if ($(".imageBanner").length) {
    // let headerHeight = checkScreen() > 991 ? 89 : 72;
    $("body").addClass("purpleHeader");
    imageBanner = true;
    if (!$("header").hasClass("opening")) {
      $("header").addClass("opening");
      $("header").removeClass("nav-up").addClass("nav-down");
      $(".headerBg")
        .stop()
        .animate(
          {
            height: navbarHeight,
          },
          1,
          function () {
            $("header").removeClass("opening");
            $("header").removeClass("closing");
          }
        );
    }
  }
  let previousWidth = $(window).width();
  $(window).resize(function () {
    checkScreen();
    caseStudyHeight();
    setTabContentHeight();
    let newWidth = $(window).width();
    if (
      (previousWidth <= 991 && newWidth > 991) ||
      (previousWidth >= 991 && newWidth < 991)
    ) {
      previousWidth = $(window).width();
      if (checkScreen() <= 991) {
        $(".megaMenuWrapper").css({ display: "block" });
        $(".navbar-toggler").addClass("collapsed");
        $(".navbar-collapse").removeClass("show");
        $("header").removeClass("hover");
        $("header").removeClass("nav-up").addClass("nav-down");
        $(".menuListWrapper li").removeClass("active");
        $(".headerBg").stop().animate(
          {
            height: 72,
          },
          500
        );
      } else {
        $(".menuListWrapper li").removeClass("active");
        $(".megaMenuWrapper").css({ display: "none" });
        if ($(window).scrollTop() == 0 && iframePage == false) {
          $("header").removeClass("nav-down");
          $("header").removeClass("hover");

          $(".headerBg").stop().animate(
            {
              height: 0,
            },
            500
          );
        } else {
          $(".headerBg").stop().animate(
            {
              height: 89,
            },
            500
          );
        }
      }
    }
  });

  function hasScrolled() {
    let st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop) {
      // Scroll Down
      if (checkScreen() > 991 && iframePage === false) {
        if (!$("header").hasClass("closing")) {
          $("header").addClass("closing");
          $("header").removeClass("nav-down").addClass("nav-up");
          $(".headerBg")
            .stop()
            .animate(
              {
                height: "0px",
              },
              500,
              function () {
                $("header").removeClass("closing");
                $("header").removeClass("opening");
              }
            );
        }
      } else {
        if (!$("header").hasClass("opening")) {
          $("header").addClass("opening");
          $("header").removeClass("nav-up").addClass("nav-down");
          $(".headerBg")
            .stop()
            .animate(
              {
                height: navbarHeight,
              },
              500,
              function () {
                $("header").removeClass("opening");
                $("header").removeClass("closing");
              }
            );
        }
      }
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        if (!$("header").hasClass("opening")) {
          $("header").addClass("opening");
          $("header").removeClass("nav-up").addClass("nav-down");
          $(".headerBg")
            .stop()
            .animate(
              {
                height: navbarHeight,
              },
              500,
              function () {
                $("header").removeClass("opening");
                $("header").removeClass("closing");
              }
            );
        }
      }
      // if (st === 0 && imageBanner === false && checkScreen() > 991) {
      if (st === 0 && imageBanner === false && iframePage === false) {
        $("header").removeClass("nav-up").removeClass("nav-down");
        $(".headerBg")
          .stop()
          .animate(
            {
              height: "0px",
            },
            500,
            function () {
              $("header").removeClass("opening");
              $("header").removeClass("closing");
            }
          );
      }
    }

    lastScrollTop = st;
  }

  function checkScreen() {
    let windowWidth = $(window).width();
    navbarHeight = windowWidth > 991 ? 89 : 72;
    return windowWidth;
  }
  $("header").hover(
    function (e) {
      if ($(e.target).is(".menuListWrapper li")) {
        // your child span is being hovered over
        e.stopPropagation();
      } else if ($(e.target).is("header") || $(e.target).is(".navbar")) {
        let headerHeight = checkScreen() > 991 ? 89 : 72;
        $(this).addClass("hover");
        $("header").removeClass("nav-up").addClass("nav-down");
        $(".headerBg").stop().animate(
          {
            height: headerHeight,
          },
          500
        );
      }
    },
    function () {
      let headerHeight = checkScreen() > 991 ? 89 : 72;
      if (checkScreen() > 991) {
        $(this).removeClass("hover");
        $(".menuListWrapper li").removeClass("active");
        $(".megaMenuWrapper").css({ display: "none" });
        if ($(window).scrollTop() == 0 && imageBanner === false) {
          $("header").removeClass("nav-down");
          $(".headerBg").stop().animate(
            {
              height: 0,
            },
            500
          );
        } else {
          $(".headerBg").stop().animate(
            {
              height: headerHeight,
            },
            500
          );
        }
      } else {
        if ($(".navbar-toggler").hasClass("collapsed")) {
          $(this).removeClass("hover");
          $(".menuListWrapper li").removeClass("active");
          if ($(window).scrollTop() == 0 && iframePage == false) {
            $("header").removeClass("nav-down");
            $(".headerBg").stop().animate(
              {
                height: 0,
              },
              500
            );
          } else {
            $(".headerBg").stop().animate(
              {
                height: headerHeight,
              },
              500
            );
          }
        }
      }
    }
  );
  $(".navbar-toggler").click(function () {
    if (!$(this).hasClass("collapsed")) {
      $("header").addClass("hover");
      $("header").removeClass("nav-up").addClass("nav-down");
      $(".headerBg").stop().animate(
        {
          height: 72,
        },
        500
      );
    }
  });

  $(".menuListWrapper > li").hover(function () {
    if (checkScreen() > 991) {
      const currentMenu = $(this);
      if (!$(this).hasClass("active")) {
        let headerHeight = checkScreen() > 991 ? 89 : 72;
        $("header").addClass("hover");
        $("header").removeClass("nav-up").addClass("nav-down");
        $(".headerBg").stop().animate(
          {
            height: headerHeight,
          },
          500
        );
        $(".menuListWrapper li").removeClass("active");
        currentMenu.children(".megaMenuWrapper").css({ display: "block" });
        let minMenuHeight =
          currentMenu.children(".megaMenuWrapper").outerHeight() > 361
            ? currentMenu.children(".megaMenuWrapper").outerHeight()
            : 361;
        // let menuHeight = currentMenu.children('.megaMenuWrapper').outerHeight() + 89 || 89;
        let menuHeight = minMenuHeight + 89 || 89;

        $(".headerBg")
          .stop()
          .animate(
            {
              height: menuHeight,
            },
            function () {
              currentMenu.addClass("active");
              $("li:not(.active) .megaMenuWrapper").css({ display: "none" });
            }
          );
      }
    }
  });

  $(".menuListWrapper > li").click(function () {
    const currentMenu = $(this);
    if (checkScreen() <= 991) {
      if (!currentMenu.hasClass("active")) {
        $("header").addClass("hover");
        $("header").removeClass("nav-up").addClass("nav-down");
        $(".menuListWrapper > li").removeClass("active");
        currentMenu.addClass("active");
      } else {
        currentMenu.removeClass("active");
      }
    }
  });

  $(".searchContactUsWrap .icon").click(function () {
    if ($(".searchContactUsWrap").hasClass("active")) {
      $(this).parents(".searchContactUsWrap").removeClass("active");
    } else {
      $(this).parents(".searchContactUsWrap").addClass("active");
      $(".searchContactUsWrap input").focus();
    }
  });
  $(".searchContactUsWrap .title").click(function () {
    if ($(".searchContactUsWrap").hasClass("active")) {
      $(this).parents(".searchContactUsWrap").removeClass("active");
    } else {
      $(this).parents(".searchContactUsWrap").addClass("active");
      $(".searchContactUsWrap input").focus();
    }
  });

  // change logo color on purple background
  logoColorChange();
  function logoColorChange() {
    let isOnPurple = [];
    let pageScroll = $(window).scrollTop() + 65;
    $(".purpleSection").each(function (index) {
      let purpleBgStart = $(this).offset().top;
      let purpleBgEnd = $(this).outerHeight() + purpleBgStart;
      pageScroll >= purpleBgStart && pageScroll <= purpleBgEnd
        ? isOnPurple.push(1)
        : isOnPurple.push(0);
    });
    isOnPurple.includes(1)
      ? $("header").addClass("whiteLogo").removeClass("purpleLogo")
      : $("header").removeClass("whiteLogo").addClass("purpleLogo");
  }
  // hear from us slider
  var $slider1 = $("#headerFromUsSlider");

  if ($slider1.length) {
    var currentSlide1;
    var slidesCount1;
    var sliderCounter1 = document.createElement("div");
    sliderCounter1.classList.add("slider__counter");

    var updateSliderCounter1 = function (slick, currentIndex) {
      currentSlide1 = slick.slickCurrentSlide() + 1;
      slidesCount1 = slick.slideCount1;
      if (slidesCount1 > 3) {
        $(sliderCounter1).text(currentSlide1 + " of " + slidesCount1);
      }
    };

    $slider1.on("init", function (event, slick) {
      $slider.append(sliderCounter1);
      updateSliderCounter1(slick);
    });

    $slider1.on("afterChange", function (event, slick, currentSlide1) {
      updateSliderCounter1(slick, currentSlide1);
    });
    $slider1.slick({
      pauseOnFocus: false,
      autoplay: false,
      dots: false,
      autoplaySpeed: 10000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
  // hear from us slider
  var $slider1 = $("#testimonySlider");

  if ($slider1.length) {
    var currentSlide1;
    var slidesCount1;
    var sliderCounter1 = document.createElement("div");
    sliderCounter1.classList.add("slider__counter");

    var updateSliderCounter1 = function (slick, currentIndex) {
      currentSlide1 = slick.slickCurrentSlide() + 1;
      slidesCount1 = slick.slideCount1;
      if (slidesCount1 > 3) {
        $(sliderCounter1).text(currentSlide1 + " of " + slidesCount1);
      }
    };

    $slider1.on("init", function (event, slick) {
      $slider.append(sliderCounter1);
      updateSliderCounter1(slick);
    });

    $slider1.on("afterChange", function (event, slick, currentSlide1) {
      updateSliderCounter1(slick, currentSlide1);
    });
    $slider1.slick({
      pauseOnFocus: false,
      autoplay: true,
      dots: false,
      autoplaySpeed: 10000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }

  // Co.ach testimonials slider
  var $slider2 = $("#coachTestimonySlider");

  if ($slider2.length) {
    var currentSlide1;
    var slidesCount1;
    var sliderCounter1 = document.createElement("div");
    sliderCounter1.classList.add("slider__counter");

    var updateSliderCounter1 = function (slick, currentIndex) {
      currentSlide1 = slick.slickCurrentSlide() + 1;
      slidesCount1 = slick.slideCount;
      if (slidesCount1 > 1) {
        $(sliderCounter1).text(currentSlide1 + " of " + slidesCount1);
      }
    };

    $slider2.on("init", function (event, slick) {
      $slider2.append(sliderCounter1);
      updateSliderCounter1(slick);
    });

    $slider2.on("afterChange", function (event, slick, currentSlide1) {
      updateSliderCounter1(slick, currentSlide1);
    });
    $slider2.slick({
      pauseOnFocus: false,
      autoplay: false,
      dots: false,
      autoplaySpeed: 10000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
  // const caseStudyHeight = function () {
  //   if ($(".caseStudyListWrapper").length) {
  //     let h4 = 0;
  //     $(".caseStudyListWrapper .caseStudyItemWrap h4").outerHeight("auto");
  //     $(".caseStudyListWrapper .caseStudyItemWrap h4").each(function () {
  //       let thisHeight = $(this).outerHeight();
  //       if (thisHeight > h4) {
  //         h4 = thisHeight;
  //       }
  //     });
  //     h4 == 0 ? "auto" : h4;
  //     $(".caseStudyListWrapper .caseStudyItemWrap h4").height(h4);
  //   }
  // };
  const caseStudyHeight = function () {
    if ($(".caseStudyListWrapper").length) {
      $(".caseStudyListWrapper").each(function () {
        let h4 = 0;
        $(this).find("h4").outerHeight("auto");
        $(this)
          .find("h4")
          .each(function () {
            let thisHeight = $(this).outerHeight();
            if (thisHeight > h4) {
              h4 = thisHeight;
            }
          });
        h4 == 0 ? "auto" : h4;
        $(this).find("h4").height(h4);
      });
    }

    if ($(".eventListWrapper").length) {
      $(".eventListWrapper").each(function () {
        let h4 = 0;
        $(this).find("h4").outerHeight("auto");
        $(this)
          .find("h4")
          .each(function () {
            let thisHeight = $(this).outerHeight();
            if (thisHeight > h4) {
              h4 = thisHeight;
            }
          });
        h4 == 0 ? "auto" : h4;
        $(this).find("h4").height(h4);
      });
    }

    if ($(".outcomesWrap .box").length) {
      let boxHeight = $(".outcomesWrap .box").outerWidth();
      $(".outcomesWrap .box").css({ minHeight: boxHeight });
    }
  };
  caseStudyHeight();
  if ($(".outcomesWrap").length) {
    $(window).scroll(startCounter);
    function startCounter() {
      let outcomesTop = $(".outcomesWrap").offset().top;
      let windowHeight = $(window).height();
      let animateStart = outcomesTop - windowHeight;
      if ($(window).scrollTop() > animateStart) {
        $(window).off("scroll", startCounter);
        $(".box h1 span").each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate(
            { Counter: $this.text() },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.ceil(this.Counter));
              },
            }
          );
        });
      }
    }
  }
  $(".openTranscript").click(function (e) {
    e.preventDefault();
    $(".transcriptWrap").slideToggle(1000);
  });

  //Thought leadership listing page tabs js
  const setTabContentHeight = function () {
    jQuery(".tabContent").show();
    jQuery(".tabContent").height("auto");

    let elementHeight = 0;
    $(".filterTabWrap .tabContent").each(function () {
      let currentHeight = jQuery(this).outerHeight();
      currentHeight > elementHeight ? (elementHeight = currentHeight) : "";
    });
    jQuery(".tabContent").height(elementHeight);
    jQuery(".tabContent").hide();
    const activeTab = jQuery(".tab.active").attr("href");
    jQuery(activeTab).show();
  };

  setTabContentHeight();
  jQuery(".tagsWrap").hide();
  jQuery(".tabContent").hide();

  jQuery(".tabs a").click(function (e) {
    e.preventDefault();
    const activeTab = jQuery(this).attr("href");
    var tabactive = jQuery(this).attr("id");
    jQuery(".tabactive").val(tabactive);
    if (jQuery(".tagsWrap").hasClass("active")) {
      if (jQuery(this).hasClass("active")) {
        jQuery(".tabs a").removeClass("active");
        jQuery(this).find("span").text("+");
        jQuery(".tagsWrap").slideUp(400);
        setTimeout(function () {
          jQuery(activeTab).hide();
        }, 400);
        jQuery(".tagsWrap").removeClass("active");
      } else {
        jQuery(".tabs a").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".tabs a").find("span").text("+");
        jQuery(this).find("span").text("-");
        jQuery(".tabContent").hide();
        jQuery(activeTab).show();
      }
    } else {
      jQuery(".tabs a").removeClass("active");
      jQuery(".tabs a").find("span").text("+");
      jQuery(this).addClass("active");
      jQuery(".tagsWrap").addClass("active");
      jQuery(this).find("span").text("-");
      jQuery(activeTab).show();
      jQuery(".tagsWrap").slideDown();
    }
    return false;
  });
});
var currentActive = jQuery(".tabactive").val();
if (currentActive == "filtertab1") {
  setTimeout(function () {
    jQuery(".tagsWrap").addClass("active");
    jQuery(".tagsWrap").show();
    jQuery("#tab1").show();
  }, 600);
}
if (currentActive == "filtertab2") {
  setTimeout(function () {
    jQuery(".tagsWrap").addClass("active");
    jQuery(".tagsWrap").show();
    jQuery("#tab2").show();
  }, 600);
}
var $hereFromPeople = $("#hereFromPeopleSlider");
$hereFromPeople.slick({
  dots: false,
  pauseOnFocus: false,
  autoplay: false,
  autoplaySpeed: 1500,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

var $podCastSlider = $("#podCastSlider");
$podCastSlider.slick({
  dots: false,
  pauseOnFocus: false,
  autoplay: false,
  autoplaySpeed: 1500,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

var $latestUpdatesSlider = $("#latestUpdateSlider");
$latestUpdatesSlider.slick({
  pauseOnFocus: false,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  dots: true,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Home news insights slider

var $learnNucliOsSlider = $("#learnNucliOsSlider");
$learnNucliOsSlider.slick({
  pauseOnFocus: false,
  autoplay: false,
  autoplaySpeed: 1500,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

var $newsInsightsslider = $("#newsInsightsSlider");
if ($newsInsightsslider.length) {
  var newsInsightscurrentSlide;
  var newsInsightsslidesCount;
  var newsInsightssliderCounter = document.createElement("div");
  newsInsightssliderCounter.classList.add("slider__counter");

  var newsInsightsupdateSliderCounter = function (slick, currentIndex) {
    newsInsightscurrentSlide = slick.slickCurrentSlide() + 1;
    newsInsightsslidesCount = slick.slideCount;
    if (newsInsightsslidesCount > 1) {
      $(newsInsightssliderCounter).text(
        newsInsightscurrentSlide + " of " + newsInsightsslidesCount
      );
    }
  };

  $newsInsightsslider.on("init", function (event, slick) {
    $newsInsightsslider.append(newsInsightssliderCounter);
    newsInsightsupdateSliderCounter(slick);
  });

  $newsInsightsslider.on(
    "afterChange",
    function (event, slick, newsInsightscurrentSlide) {
      newsInsightsupdateSliderCounter(slick, newsInsightscurrentSlide);
      var link = $(".slick-current").find(".hiddenlink").val();
      $(".newslink").attr("href", link);
    }
  );
  $newsInsightsslider.slick({
    pauseOnFocus: false,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  });
}

const $threeImgSlider = $("#threeImgSlider");
if ($threeImgSlider.length) {
  const $status = $(".threeImgSliderPaging");
  $threeImgSlider.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      let i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + " of " + slick.slideCount);
    }
  );
  $threeImgSlider.slick({
    pauseOnFocus: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  });
}

const $videoSlider = $("#videoSlider");
if ($videoSlider.length) {
  const $status = $(".videoSliderPaging");
  $videoSlider.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      let i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + " of " + slick.slideCount);
    }
  );
  $videoSlider.slick({
    pauseOnFocus: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  });
}

const $mobImgSlider = $("#mobImgSlider");
if ($mobImgSlider.length) {
  const $status = $(".mobImgSliderPaging");
  $mobImgSlider.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      let i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + " of " + slick.slideCount);
    }
  );
  $mobImgSlider.slick({
    pauseOnFocus: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  });
}

var $leadersSlider = $(".leadersSlider");
$leadersSlider.slick({
  pauseOnFocus: false,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
