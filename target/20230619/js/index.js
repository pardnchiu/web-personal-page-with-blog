document.addEventListener("DOMContentLoaded", _ => {
    const app = new PD({
        id: "app",
        data: {
            navTitle: "PARDN LTD",
            navFa: "fa-solid fa-bars",
            navTarget: ["HOME", "CHILD", "CHILD", "CHILD", "CHILD", "CHILD", "CHILD", "CHILD"],
            footerTarget: [
                {
                    href: "https://github.com/pardnchiu/website-template-25",
                    fa: "fa-brands fa-github"
                },
                {
                    href: "https://linkedin.com/pardnchiu",
                    fa: "fa-brands fa-linkedin-in"
                },
                {
                    href: "https://lin.ee/Gtcb5kc",
                    fa: "fa-brands fa-line"
                }
            ]
        },
        next: function () {
            let delay_observer;
            setTimeout(() => {
                const ary = [].slice.call(document.querySelectorAll("*.delay"));
                if ("IntersectionObserver" in window) {
                    delay_observer = new IntersectionObserver((entries, _) => {
                        entries.forEach((e) => {
                            if (e.isIntersecting) {
                                let elm = e.target;
                                delay_observer.unobserve(elm);
                                elm.class_("delay");
                            };
                        });
                    });
                    let timer = setTimeout(function () {
                        clearTimeout(timer);
                        ary.forEach(e => delay_observer.observe(e));
                    }, 300);
                };
            }, 300);
        }
    });
});