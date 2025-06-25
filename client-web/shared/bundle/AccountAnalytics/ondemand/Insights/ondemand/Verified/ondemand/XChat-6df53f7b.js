"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-6df53f7b"],
    {
        256958: (t, e, a) => {
            a.d(e, { Am: () => p, x7: () => E });
            var r = a(202784),
                n = a(928316),
                o = Array(12).fill(0),
                s = ({ visible: t }) =>
                    r.createElement(
                        "div",
                        { className: "sonner-loading-wrapper", "data-visible": t },
                        r.createElement(
                            "div",
                            { className: "sonner-spinner" },
                            o.map((t, e) => r.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${e}` })),
                        ),
                    ),
                i = r.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, r.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })),
                l = r.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, r.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })),
                d = r.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, r.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })),
                c = r.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, r.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })),
                u = 1,
                h = new (class {
                    constructor() {
                        (this.subscribe = (t) => (
                            this.subscribers.push(t),
                            () => {
                                let e = this.subscribers.indexOf(t);
                                this.subscribers.splice(e, 1);
                            }
                        )),
                            (this.publish = (t) => {
                                this.subscribers.forEach((e) => e(t));
                            }),
                            (this.addToast = (t) => {
                                this.publish(t), (this.toasts = [...this.toasts, t]);
                            }),
                            (this.create = (t) => {
                                var e;
                                let { message: a, ...r } = t,
                                    n = "number" == typeof (null == t ? void 0 : t.id) || (null == (e = t.id) ? void 0 : e.length) > 0 ? t.id : u++,
                                    o = this.toasts.find((t) => t.id === n),
                                    s = void 0 === t.dismissible || t.dismissible;
                                return o ? (this.toasts = this.toasts.map((e) => (e.id === n ? (this.publish({ ...e, ...t, id: n, title: a }), { ...e, ...t, id: n, dismissible: s, title: a }) : e))) : this.addToast({ title: a, ...r, dismissible: s, id: n }), n;
                            }),
                            (this.dismiss = (t) => (
                                t ||
                                    this.toasts.forEach((t) => {
                                        this.subscribers.forEach((e) => e({ id: t.id, dismiss: !0 }));
                                    }),
                                this.subscribers.forEach((e) => e({ id: t, dismiss: !0 })),
                                t
                            )),
                            (this.message = (t, e) => this.create({ ...e, message: t })),
                            (this.error = (t, e) => this.create({ ...e, message: t, type: "error" })),
                            (this.success = (t, e) => this.create({ ...e, type: "success", message: t })),
                            (this.info = (t, e) => this.create({ ...e, type: "info", message: t })),
                            (this.warning = (t, e) => this.create({ ...e, type: "warning", message: t })),
                            (this.loading = (t, e) => this.create({ ...e, type: "loading", message: t })),
                            (this.promise = (t, e) => {
                                if (!e) return;
                                let a;
                                void 0 !== e.loading && (a = this.create({ ...e, promise: t, type: "loading", message: e.loading, description: "function" != typeof e.description ? e.description : void 0 }));
                                let r = t instanceof Promise ? t : t(),
                                    n = void 0 !== a;
                                return (
                                    r
                                        .then(async (t) => {
                                            if (m(t) && !t.ok) {
                                                n = !1;
                                                let r = "function" == typeof e.error ? await e.error(`HTTP error! status: ${t.status}`) : e.error,
                                                    o = "function" == typeof e.description ? await e.description(`HTTP error! status: ${t.status}`) : e.description;
                                                this.create({ id: a, type: "error", message: r, description: o });
                                            } else if (void 0 !== e.success) {
                                                n = !1;
                                                let r = "function" == typeof e.success ? await e.success(t) : e.success,
                                                    o = "function" == typeof e.description ? await e.description(t) : e.description;
                                                this.create({ id: a, type: "success", message: r, description: o });
                                            }
                                        })
                                        .catch(async (t) => {
                                            if (void 0 !== e.error) {
                                                n = !1;
                                                let r = "function" == typeof e.error ? await e.error(t) : e.error,
                                                    o = "function" == typeof e.description ? await e.description(t) : e.description;
                                                this.create({ id: a, type: "error", message: r, description: o });
                                            }
                                        })
                                        .finally(() => {
                                            var t;
                                            n && (this.dismiss(a), (a = void 0)), null == (t = e.finally) || t.call(e);
                                        }),
                                    a
                                );
                            }),
                            (this.custom = (t, e) => {
                                let a = (null == e ? void 0 : e.id) || u++;
                                return this.create({ jsx: t(a), id: a, ...e }), a;
                            }),
                            (this.subscribers = []),
                            (this.toasts = []);
                    }
                })(),
                m = (t) => t && "object" == typeof t && "ok" in t && "boolean" == typeof t.ok && "status" in t && "number" == typeof t.status,
                f = (t, e) => {
                    let a = (null == e ? void 0 : e.id) || u++;
                    return h.addToast({ title: t, ...e, id: a }), a;
                },
                p = Object.assign(f, { success: h.success, info: h.info, warning: h.warning, error: h.error, custom: h.custom, message: h.message, promise: h.promise, dismiss: h.dismiss, loading: h.loading }, { getHistory: () => h.toasts });
            function g(t) {
                return void 0 !== t.label;
            }
            !(function (t, { insertAt: e } = {}) {
                if (!t || "undefined" == typeof document) return;
                let a = document.head || document.getElementsByTagName("head")[0],
                    r = document.createElement("style");
                (r.type = "text/css"), "top" === e && a.firstChild ? a.insertBefore(r, a.firstChild) : a.appendChild(r), r.styleSheet ? (r.styleSheet.cssText = t) : r.appendChild(document.createTextNode(t));
            })(
                ':where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n',
            );
            var v = 3,
                b = 14;
            function y(...t) {
                return t.filter(Boolean).join(" ");
            }
            var w = (t) => {
                var e, a, n, o, u, h, m, f, p, v;
                let { invert: b, toast: y, unstyled: w, interacting: x, setHeights: E, visibleToasts: k, heights: N, index: B, toasts: C, expanded: S, removeToast: T, defaultRichColors: M, closeButton: z, style: I, cancelButtonStyle: R, actionButtonStyle: Y, className: P = "", descriptionClassName: j = "", duration: A, position: H, gap: L, loadingIcon: D, expandByDefault: $, classNames: U, icons: V, closeButtonAriaLabel: _ = "Close toast", pauseWhenPageIsHidden: O, cn: W } = t,
                    [F, K] = r.useState(!1),
                    [X, q] = r.useState(!1),
                    [G, J] = r.useState(!1),
                    [Q, Z] = r.useState(!1),
                    [tt, et] = r.useState(0),
                    [at, rt] = r.useState(0),
                    nt = r.useRef(null),
                    ot = r.useRef(null),
                    st = 0 === B,
                    it = B + 1 <= k,
                    lt = y.type,
                    dt = !1 !== y.dismissible,
                    ct = y.className || "",
                    ut = y.descriptionClassName || "",
                    ht = r.useMemo(() => N.findIndex((t) => t.toastId === y.id) || 0, [N, y.id]),
                    mt = r.useMemo(() => {
                        var t;
                        return null != (t = y.closeButton) ? t : z;
                    }, [y.closeButton, z]),
                    ft = r.useMemo(() => y.duration || A || 4e3, [y.duration, A]),
                    pt = r.useRef(0),
                    gt = r.useRef(0),
                    vt = r.useRef(0),
                    bt = r.useRef(null),
                    [yt, wt] = H.split("-"),
                    xt = r.useMemo(() => N.reduce((t, e, a) => (a >= ht ? t : t + e.height), 0), [N, ht]),
                    Et = (() => {
                        let [t, e] = r.useState(document.hidden);
                        return (
                            r.useEffect(() => {
                                let t = () => {
                                    e(document.hidden);
                                };
                                return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
                            }, []),
                            t
                        );
                    })(),
                    kt = y.invert || b,
                    Nt = "loading" === lt;
                (gt.current = r.useMemo(() => ht * L + xt, [ht, xt])),
                    r.useEffect(() => {
                        K(!0);
                    }, []),
                    r.useLayoutEffect(() => {
                        if (!F) return;
                        let t = ot.current,
                            e = t.style.height;
                        t.style.height = "auto";
                        let a = t.getBoundingClientRect().height;
                        (t.style.height = e), rt(a), E((t) => (t.find((t) => t.toastId === y.id) ? t.map((t) => (t.toastId === y.id ? { ...t, height: a } : t)) : [{ toastId: y.id, height: a, position: y.position }, ...t]));
                    }, [F, y.title, y.description, E, y.id]);
                let Bt = r.useCallback(() => {
                    q(!0),
                        et(gt.current),
                        E((t) => t.filter((t) => t.toastId !== y.id)),
                        setTimeout(() => {
                            T(y);
                        }, 200);
                }, [y, T, E, gt]);
                return (
                    r.useEffect(() => {
                        if ((y.promise && "loading" === lt) || y.duration === 1 / 0 || "loading" === y.type) return;
                        let t,
                            e = ft;
                        return (
                            S || x || (O && Et)
                                ? (() => {
                                      if (vt.current < pt.current) {
                                          let t = new Date().getTime() - pt.current;
                                          e -= t;
                                      }
                                      vt.current = new Date().getTime();
                                  })()
                                : e !== 1 / 0 &&
                                  ((pt.current = new Date().getTime()),
                                  (t = setTimeout(() => {
                                      var t;
                                      null == (t = y.onAutoClose) || t.call(y, y), Bt();
                                  }, e))),
                            () => clearTimeout(t)
                        );
                    }, [S, x, $, y, ft, Bt, y.promise, lt, O, Et]),
                    r.useEffect(() => {
                        let t = ot.current;
                        if (t) {
                            let e = t.getBoundingClientRect().height;
                            return rt(e), E((t) => [{ toastId: y.id, height: e, position: y.position }, ...t]), () => E((t) => t.filter((t) => t.toastId !== y.id));
                        }
                    }, [E, y.id]),
                    r.useEffect(() => {
                        y.delete && Bt();
                    }, [Bt, y.delete]),
                    r.createElement(
                        "li",
                        {
                            "aria-live": y.important ? "assertive" : "polite",
                            "aria-atomic": "true",
                            role: "status",
                            tabIndex: 0,
                            ref: ot,
                            className: W(P, ct, null == U ? void 0 : U.toast, null == (e = null == y ? void 0 : y.classNames) ? void 0 : e.toast, null == U ? void 0 : U.default, null == U ? void 0 : U[lt], null == (a = null == y ? void 0 : y.classNames) ? void 0 : a[lt]),
                            "data-sonner-toast": "",
                            "data-rich-colors": null != (n = y.richColors) ? n : M,
                            "data-styled": !(y.jsx || y.unstyled || w),
                            "data-mounted": F,
                            "data-promise": !!y.promise,
                            "data-removed": X,
                            "data-visible": it,
                            "data-y-position": yt,
                            "data-x-position": wt,
                            "data-index": B,
                            "data-front": st,
                            "data-swiping": G,
                            "data-dismissible": dt,
                            "data-type": lt,
                            "data-invert": kt,
                            "data-swipe-out": Q,
                            "data-expanded": !!(S || ($ && F)),
                            style: { "--index": B, "--toasts-before": B, "--z-index": C.length - B, "--offset": `${X ? tt : gt.current}px`, "--initial-height": $ ? "auto" : `${at}px`, ...I, ...y.style },
                            onPointerDown: (t) => {
                                Nt || !dt || ((nt.current = new Date()), et(gt.current), t.target.setPointerCapture(t.pointerId), "BUTTON" !== t.target.tagName && (J(!0), (bt.current = { x: t.clientX, y: t.clientY })));
                            },
                            onPointerUp: () => {
                                var t, e, a, r;
                                if (Q || !dt) return;
                                bt.current = null;
                                let n = Number((null == (t = ot.current) ? void 0 : t.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0),
                                    o = new Date().getTime() - (null == (e = nt.current) ? void 0 : e.getTime()),
                                    s = Math.abs(n) / o;
                                if (Math.abs(n) >= 20 || s > 0.11) return et(gt.current), null == (a = y.onDismiss) || a.call(y, y), Bt(), void Z(!0);
                                null == (r = ot.current) || r.style.setProperty("--swipe-amount", "0px"), J(!1);
                            },
                            onPointerMove: (t) => {
                                var e;
                                if (!bt.current || !dt) return;
                                let a = t.clientY - bt.current.y,
                                    r = t.clientX - bt.current.x,
                                    n = ("top" === yt ? Math.min : Math.max)(0, a),
                                    o = "touch" === t.pointerType ? 10 : 2;
                                Math.abs(n) > o ? null == (e = ot.current) || e.style.setProperty("--swipe-amount", `${a}px`) : Math.abs(r) > o && (bt.current = null);
                            },
                        },
                        mt && !y.jsx
                            ? r.createElement(
                                  "button",
                                  {
                                      "aria-label": _,
                                      "data-disabled": Nt,
                                      "data-close-button": !0,
                                      onClick:
                                          Nt || !dt
                                              ? () => {}
                                              : () => {
                                                    var t;
                                                    Bt(), null == (t = y.onDismiss) || t.call(y, y);
                                                },
                                      className: W(null == U ? void 0 : U.closeButton, null == (o = null == y ? void 0 : y.classNames) ? void 0 : o.closeButton),
                                  },
                                  r.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, r.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), r.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })),
                              )
                            : null,
                        y.jsx || r.isValidElement(y.title)
                            ? y.jsx || y.title
                            : r.createElement(
                                  r.Fragment,
                                  null,
                                  lt || y.icon || y.promise
                                      ? r.createElement(
                                            "div",
                                            { "data-icon": "", className: W(null == U ? void 0 : U.icon, null == (u = null == y ? void 0 : y.classNames) ? void 0 : u.icon) },
                                            y.promise || ("loading" === y.type && !y.icon) ? y.icon || (null != V && V.loading ? r.createElement("div", { className: "sonner-loader", "data-visible": "loading" === lt }, V.loading) : D ? r.createElement("div", { className: "sonner-loader", "data-visible": "loading" === lt }, D) : r.createElement(s, { visible: "loading" === lt })) : null,
                                            "loading" !== y.type
                                                ? y.icon ||
                                                      (null == V ? void 0 : V[lt]) ||
                                                      ((t) => {
                                                          switch (t) {
                                                              case "success":
                                                                  return i;
                                                              case "info":
                                                                  return d;
                                                              case "warning":
                                                                  return l;
                                                              case "error":
                                                                  return c;
                                                              default:
                                                                  return null;
                                                          }
                                                      })(lt)
                                                : null,
                                        )
                                      : null,
                                  r.createElement("div", { "data-content": "", className: W(null == U ? void 0 : U.content, null == (h = null == y ? void 0 : y.classNames) ? void 0 : h.content) }, r.createElement("div", { "data-title": "", className: W(null == U ? void 0 : U.title, null == (m = null == y ? void 0 : y.classNames) ? void 0 : m.title) }, y.title), y.description ? r.createElement("div", { "data-description": "", className: W(j, ut, null == U ? void 0 : U.description, null == (f = null == y ? void 0 : y.classNames) ? void 0 : f.description) }, y.description) : null),
                                  r.isValidElement(y.cancel)
                                      ? y.cancel
                                      : y.cancel && g(y.cancel)
                                        ? r.createElement(
                                              "button",
                                              {
                                                  "data-button": !0,
                                                  "data-cancel": !0,
                                                  style: y.cancelButtonStyle || R,
                                                  onClick: (t) => {
                                                      var e, a;
                                                      g(y.cancel) && dt && (null == (a = (e = y.cancel).onClick) || a.call(e, t), Bt());
                                                  },
                                                  className: W(null == U ? void 0 : U.cancelButton, null == (p = null == y ? void 0 : y.classNames) ? void 0 : p.cancelButton),
                                              },
                                              y.cancel.label,
                                          )
                                        : null,
                                  r.isValidElement(y.action)
                                      ? y.action
                                      : y.action && g(y.action)
                                        ? r.createElement(
                                              "button",
                                              {
                                                  "data-button": !0,
                                                  "data-action": !0,
                                                  style: y.actionButtonStyle || Y,
                                                  onClick: (t) => {
                                                      var e, a;
                                                      g(y.action) && (t.defaultPrevented || (null == (a = (e = y.action).onClick) || a.call(e, t), Bt()));
                                                  },
                                                  className: W(null == U ? void 0 : U.actionButton, null == (v = null == y ? void 0 : y.classNames) ? void 0 : v.actionButton),
                                              },
                                              y.action.label,
                                          )
                                        : null,
                              ),
                    )
                );
            };
            function x() {
                if ("undefined" == typeof window || "undefined" == typeof document) return "ltr";
                let t = document.documentElement.getAttribute("dir");
                return "auto" !== t && t ? t : window.getComputedStyle(document.documentElement).direction;
            }
            var E = (t) => {
                let { invert: e, position: a = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: s, closeButton: i, className: l, offset: d, theme: c = "light", richColors: u, duration: m, style: f, visibleToasts: p = v, toastOptions: g, dir: E = x(), gap: k = b, loadingIcon: N, icons: B, containerAriaLabel: C = "Notifications", pauseWhenPageIsHidden: S, cn: T = y } = t,
                    [M, z] = r.useState([]),
                    I = r.useMemo(() => Array.from(new Set([a].concat(M.filter((t) => t.position).map((t) => t.position)))), [M, a]),
                    [R, Y] = r.useState([]),
                    [P, j] = r.useState(!1),
                    [A, H] = r.useState(!1),
                    [L, D] = r.useState("system" !== c ? c : "undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
                    $ = r.useRef(null),
                    U = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
                    V = r.useRef(null),
                    _ = r.useRef(!1),
                    O = r.useCallback(
                        (t) => {
                            var e;
                            (null != (e = M.find((e) => e.id === t.id)) && e.delete) || h.dismiss(t.id), z((e) => e.filter(({ id: e }) => e !== t.id));
                        },
                        [M],
                    );
                return (
                    r.useEffect(
                        () =>
                            h.subscribe((t) => {
                                t.dismiss
                                    ? z((e) => e.map((e) => (e.id === t.id ? { ...e, delete: !0 } : e)))
                                    : setTimeout(() => {
                                          n.flushSync(() => {
                                              z((e) => {
                                                  let a = e.findIndex((e) => e.id === t.id);
                                                  return -1 !== a ? [...e.slice(0, a), { ...e[a], ...t }, ...e.slice(a + 1)] : [t, ...e];
                                              });
                                          });
                                      });
                            }),
                        [],
                    ),
                    r.useEffect(() => {
                        "system" === c
                            ? ("system" === c && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? D("dark") : D("light")),
                              "undefined" != typeof window &&
                                  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: t }) => {
                                      D(t ? "dark" : "light");
                                  }))
                            : D(c);
                    }, [c]),
                    r.useEffect(() => {
                        M.length <= 1 && j(!1);
                    }, [M]),
                    r.useEffect(() => {
                        let t = (t) => {
                            var e, a;
                            o.every((e) => t[e] || t.code === e) && (j(!0), null == (e = $.current) || e.focus()), "Escape" === t.code && (document.activeElement === $.current || (null != (a = $.current) && a.contains(document.activeElement))) && j(!1);
                        };
                        return document.addEventListener("keydown", t), () => document.removeEventListener("keydown", t);
                    }, [o]),
                    r.useEffect(() => {
                        if ($.current)
                            return () => {
                                V.current && (V.current.focus({ preventScroll: !0 }), (V.current = null), (_.current = !1));
                            };
                    }, [$.current]),
                    M.length
                        ? r.createElement(
                              "section",
                              { "aria-label": `${C} ${U}`, tabIndex: -1 },
                              I.map((t, a) => {
                                  var n;
                                  let [o, c] = t.split("-");
                                  return r.createElement(
                                      "ol",
                                      {
                                          key: t,
                                          dir: "auto" === E ? x() : E,
                                          tabIndex: -1,
                                          ref: $,
                                          className: l,
                                          "data-sonner-toaster": !0,
                                          "data-theme": L,
                                          "data-y-position": o,
                                          "data-x-position": c,
                                          style: { "--front-toast-height": `${(null == (n = R[0]) ? void 0 : n.height) || 0}px`, "--offset": "number" == typeof d ? `${d}px` : d || "32px", "--width": "356px", "--gap": `${k}px`, ...f },
                                          onBlur: (t) => {
                                              _.current && !t.currentTarget.contains(t.relatedTarget) && ((_.current = !1), V.current && (V.current.focus({ preventScroll: !0 }), (V.current = null)));
                                          },
                                          onFocus: (t) => {
                                              (t.target instanceof HTMLElement && "false" === t.target.dataset.dismissible) || _.current || ((_.current = !0), (V.current = t.relatedTarget));
                                          },
                                          onMouseEnter: () => j(!0),
                                          onMouseMove: () => j(!0),
                                          onMouseLeave: () => {
                                              A || j(!1);
                                          },
                                          onPointerDown: (t) => {
                                              (t.target instanceof HTMLElement && "false" === t.target.dataset.dismissible) || H(!0);
                                          },
                                          onPointerUp: () => H(!1),
                                      },
                                      M.filter((e) => (!e.position && 0 === a) || e.position === t).map((a, n) => {
                                          var o, l;
                                          return r.createElement(w, { key: a.id, icons: B, index: n, toast: a, defaultRichColors: u, duration: null != (o = null == g ? void 0 : g.duration) ? o : m, className: null == g ? void 0 : g.className, descriptionClassName: null == g ? void 0 : g.descriptionClassName, invert: e, visibleToasts: p, closeButton: null != (l = null == g ? void 0 : g.closeButton) ? l : i, interacting: A, position: t, style: null == g ? void 0 : g.style, unstyled: null == g ? void 0 : g.unstyled, classNames: null == g ? void 0 : g.classNames, cancelButtonStyle: null == g ? void 0 : g.cancelButtonStyle, actionButtonStyle: null == g ? void 0 : g.actionButtonStyle, removeToast: O, toasts: M.filter((t) => t.position == a.position), heights: R.filter((t) => t.position == a.position), setHeights: Y, expandByDefault: s, gap: k, loadingIcon: N, expanded: P, pauseWhenPageIsHidden: S, cn: T });
                                      }),
                                  );
                              }),
                          )
                        : null
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-6df53f7b.bc9ae1da.js.map
