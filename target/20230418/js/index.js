document.addEventListener("DOMContentLoaded", _ => {
    const mode = location.href.$query("mode") || "pie";
    const now = new Date();
    const expand_item = [
        {
            class: "sel",
            icon: "fa-solid fa-gamepad",
            title: "娛樂"
        },
        {
            icon: "fa-solid fa-cart-shopping",
            title: "日用品"
        },
        {
            icon: "fa-solid fa-house",
            title: "房租"
        },
        {
            icon: "fa-solid fa-truck-medical",
            title: "醫療"
        },
        {
            icon: "fa-solid fa-user-group",
            title: "社交"
        },
        {
            icon: "fa-solid fa-gift",
            title: "禮物"
        },
        {
            icon: "fa-solid fa-mobile",
            title: "3C"
        },
        {
            icon: "fa-solid fa-table-cells-large",
            title: "其他"
        }
    ];
    const income_item = [
        {
            class: "sel",
            icon: "fa-solid fa-wallet",
            title: "薪水"
        },
        {
            icon: "fa-solid fa-dollar-sign",
            title: "獎金"
        },
        {
            icon: "fa-solid fa-sack-dollar",
            title: "回饋"
        },
        {
            icon: "fa-solid fa-hand-holding-dollar",
            title: "交易"
        },
        {
            icon: "fa-solid fa-arrow-trend-up",
            title: "股票"
        },
        {
            icon: "fa-solid fa-house-user",
            title: "租金"
        },
        {
            icon: "fa-solid fa-piggy-bank",
            title: "投資"
        },
        {
            icon: "fa-solid fa-table-cells-large",
            title: "其他"
        }
    ]
    const app = new PD({
        id: "app",
        data: {
            mode: mode,
            year: now.$yyyy,
            month: now.$MM,
            date: now.$format("yyyy/MM/DD dd"),
            month_total: Array.from({ length: 12 }, (_, i) => {
                return {
                    title: i + 1,
                    class: parseInt(i + 1) === parseInt(now.$M) ? "sel" : ""
                }
            }),
            day_head: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
            type_list: expand_item,
            calendar: (_ => {
                let firstDay = now.$date({ start: 1 }).$d;
                let lastDate = now.$date({ end: 1 }).$D;
                let preLastDate = now.$date({ pre: { end: 1 } }).$D;
                let month = [];
                let week = [];
                for (let i = preLastDate - firstDay + 1; i <= preLastDate; i++) {
                    week.push(
                        "td"._([
                            `button.unmonth`._(i)
                        ]).$html
                    );
                    if (week.length === 7) {
                        month.push(week);
                        week = [];
                    };
                };
                for (let i = 1; i <= lastDate; i++) {
                    week.push(
                        "td"._([
                            `button${now.$D === i ? ".sel" : ""}`._(i)
                        ]).$html
                    );
                    if (week.length === 7) {
                        month.push(week);
                        week = [];
                    };
                };
                var length = 7 - (week.length % 7);
                for (let i = 1; i <= length; i++) {
                    week.push(
                        "td"._([
                            `button.unmonth`._(i)
                        ]).$html
                    );
                    if (week.length === 7) {
                        month.push(week);
                        week = [];
                    };
                };
                return month;
            })()
        },
        event: {
            addShow: _ => {
                const isShow = "add-item".$.$$class("show");
                "add-item".$.$$class_(isShow, "show");
            },
            tabShow: _ => {
                const isShow = "app-tab".$.$$class("show");
                "app-tab".$.$$class_(isShow, "show");
            },
            selectorShow: e => {
                const isShow = "month-selector".$.$$class("show");
                e.target.$sel("i")._style({
                    transform: isShow ? "rotate(0deg)" : "rotate(180deg)"
                });
                "month-selector".$.$$class_(isShow, "show");
            },
            changeMode: _ => {
                const isCalendar = mode === "calendar";
                location.href = isCalendar ? "?mode=pie" : "?mode=calendar";
            },
            changeIncome: e => {
                const value = (e.target.dataset.value || "").trim();
                if (value.length < 1) {
                    e.target.dataset.value = "income";
                    app.data.type_list = income_item;
                }
                else {
                    delete e.target.dataset.value;
                    app.data.type_list = expand_item;
                }
            },
            changeType: e => {
                e.target.$parent(0).$sel("button.sel").class_("sel");
                e.target._class("sel");
            },
            numVal: e => {
                const dom_input = "num-input".$;
                const input_value = dom_input.dataset.value.trim();
                let button_value = e.target.dataset.value.trim();
                if (input_value.length + 1 > 16) {
                    alert("僅提供簡短計算.");
                    return;
                };

                if (button_value.$$(/^(\d+|[\+\-\÷x])$/)) {
                    if (input_value === "0" && button_value.$$(/^\d+$/)) {
                        dom_input.dataset.value = parseInt(button_value);
                        return;
                    }
                    else if (input_value === "0" && button_value.$$(/^[\+\-\÷x]$/)) {
                        return
                    }
                    else if (button_value === "÷") {
                        button_value = "/";
                    }
                    else if (button_value === "x") {
                        button_value = "*";
                    };
                    dom_input.dataset.value = `${input_value}${button_value}`;
                }
                else if (button_value === "AC") {
                    dom_input.dataset.value = 0
                }
                else if (button_value === "←") {
                    if (input_value === "0") {
                        return;
                    };
                    const new_value = input_value.slice(0, input_value.length - 1).trim();
                    dom_input.dataset.value = new_value.length < 1 ? "0" : new_value;
                }
                else if (button_value === "OK") {
                    if (input_value.$$(/[\*\/\+\-\.]+$/)) {
                        dom_input.dataset.value = input_value.__(/[\*\/\+\-\.]+$/, "");
                        return;
                    }
                    else if (input_value.$$(/[\*\/\+\-]/)) {
                        dom_input.dataset.value = eval(input_value);
                    }
                    else {
                        alert("成功新增紀錄.");
                        app.event.addShow();
                    }
                }
            }
        }
    })
})