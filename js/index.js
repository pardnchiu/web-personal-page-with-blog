let delay_observer;
(_ => {
  document.addEventListener("DOMContentLoaded", _ => {
    const body = new PD({
      id: "body",
      data: {
        items: [
          { href: "./index.html", name: "HOME" },
          { href: "./portfolio.html", name: "PORTFOLIO" },
          { href: "./blog.html", name: "BLOG" },
        ],
      },
      event: {
        tab: function () {
          this.$pre().$$class("show") ? this.$pre().class_("show") : this.$pre()._class("show")
        }
      },
      next: _ => {
        (_ => {
          let ary = [].slice.call(document.querySelectorAll("*.delay"));
          if ("IntersectionObserver" in window) {
            delay_observer = new IntersectionObserver((entries, observer) => {
              entries.forEach((e) => {
                if (e.isIntersecting) {
                  let elm = e.target;
                  delay_observer.unobserve(elm);
                  elm.class_("delay");
                  let timer = setTimeout(function () {
                    clearTimeout(timer);
                    elm._attr({ done: 1 });
                  }, 700);
                  setTimeout(function () {
                    elm.class_("at");
                  }, 1300);
                };
              });
            });
            let timer = setTimeout(function () {
              clearTimeout(timer);
              ary.forEach(e => delay_observer.observe(e));
            }, 50);
          };

          updateShadow();
          document.body.addEventListener("scroll", function () {
            updateShadow();
          });

          function updateShadow() {
            const y = document.body.$y;
            const bottom = document.body.scrollHeight - "footer".$.clientHeight - document.body.clientHeight;

            (function () {
              if (!"nav".$) return;
              if (y <= 0) return "nav".$.style_("boxShadow");
              else if (y >= 32) return "nav".$._style({
                boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)"
              });
              "nav".$._style({
                boxShadow: `0 ${0.125 * y / 32}rem ${0.25 * y / 32}rem rgba(0, 0, 0, ${0.1 * y / 32})`
              });
            }());

            (function () {
              if (!"section.float-bottom".$) return;
              const value = bottom - y;
              if (value <= 0) {
                return "section.float-bottom".$.style_("boxShadow");
              }
              else if (value >= 32) {
                return "section.float-bottom".$._style({
                  boxShadow: "0 -0.25rem 0.5rem rgba(0, 0, 0, 0.1)"
                });
              };
              "section.float-bottom".$._style({
                boxShadow: `0 -${0.125 * value / 32}rem ${0.25 * value / 32}rem rgba(0, 0, 0, ${0.1 * value / 32})`
              });
            }());
          };
        })();
      }
    })
  });
})();
