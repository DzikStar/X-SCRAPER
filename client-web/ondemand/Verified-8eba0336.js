"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Verified-8eba0336"],
    {
        509345: (e, l, a) => {
            a.r(l), a.d(l, { default: () => s });
            const i = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "avatar_user",
                    selections: [
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }, action: "LOG" }], storageKey: null }, action: "LOG" },
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "LOG" }], storageKey: null }, action: "LOG" },
                        { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                    ],
                    type: "User",
                    abstractKey: null,
                    hash: "9db7537240a533242b96d0411a860f4b",
                },
                s = i;
        },
        971046: (e, l, a) => {
            a.d(l, { q: () => t });
            var i = a(552322),
                s = a(378364),
                n = a(889906);
            a(703383);
            const r = a(509345);
            function t({ user: e, ...l }) {
                const a = (0, n.useFragment)(r, e);
                if (!a) return null;
                const t = "Square" === a.profile_image_shape ? "square" : "circle";
                return (0, i.jsx)(s.q, { ...l, screenName: a.core.screen_name, shape: t, url: a.avatar.image_url });
            }
        },
        340629: (e, l, a) => {
            a.r(l), a.d(l, { default: () => s });
            const i = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "username_user",
                    selections: [
                        {
                            alias: null,
                            args: null,
                            concreteType: "HighlightedUserLabelResponse",
                            kind: "LinkedField",
                            name: "affiliates_highlighted_label",
                            plural: !1,
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "HighlightedUserLabel",
                                    kind: "LinkedField",
                                    name: "label",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }], storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                    ],
                                    storageKey: null,
                                },
                            ],
                            storageKey: null,
                        },
                        {
                            kind: "RequiredField",
                            field: {
                                alias: null,
                                args: null,
                                concreteType: "UserCore",
                                kind: "LinkedField",
                                name: "core",
                                plural: !1,
                                selections: [
                                    { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, action: "LOG" },
                                    { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "LOG" },
                                ],
                                storageKey: null,
                            },
                            action: "LOG",
                        },
                        { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null }, action: "LOG" },
                        { alias: null, args: null, kind: "ScalarField", name: "super_following", storageKey: null },
                        {
                            kind: "RequiredField",
                            field: {
                                alias: null,
                                args: null,
                                concreteType: "UserVerification",
                                kind: "LinkedField",
                                name: "verification",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                ],
                                storageKey: null,
                            },
                            action: "LOG",
                        },
                    ],
                    type: "User",
                    abstractKey: null,
                    hash: "4edcd837e5969a7574ad1274556b94cc",
                },
                s = i;
        },
        323048: (e, l, a) => {
            a.d(l, { R: () => t });
            var i = a(552322),
                s = a(589259),
                n = a(889906);
            a(703383);
            const r = a(340629);
            function t({ user: e, ...l }) {
                const a = (0, n.useFragment)(r, e);
                if (!a) return null;
                const t = (function (e) {
                    let l, a;
                    switch (("Badge" === e.affiliates_highlighted_label?.label?.user_label_display_type && "BusinessLabel" === e.affiliates_highlighted_label?.label?.user_label_type && e.affiliates_highlighted_label.label.badge && (l = { label: e.affiliates_highlighted_label.label.description, url: e.affiliates_highlighted_label.label.badge.url }), e.verification.verified_type)) {
                        case "Business":
                            a = "business";
                            break;
                        case "Government":
                            a = "government";
                            break;
                        case "User":
                            a = "user";
                            break;
                        default:
                            a = e.verification.is_blue_verified ? "user" : void 0;
                    }
                    return { affiliation: l, isProtected: !!e.privacy.protected, isSubscriber: !!e.super_following, verifiedType: a };
                })(a);
                return (0, i.jsx)(s.R, { ...l, badges: t, name: a.core.name, screenName: a.core.screen_name });
            }
        },
        699416: (e, l, a) => {
            a.d(l, { Z: () => s });
            var i = a(552322);
            const s = (e) => (0, i.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, i.jsx)("path", { d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" }) });
        },
        907934: (e, l, a) => {
            a.d(l, { Z: () => s });
            var i = a(552322);
            const s = (e) => (0, i.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, i.jsx)("path", { d: "M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z" }) });
        },
        89596: (e, l, a) => {
            a.d(l, { Z: () => s });
            var i = a(552322);
            const s = (e) => (0, i.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, i.jsx)("path", { d: "M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z" }) });
        },
        611105: (e, l, a) => {
            a.d(l, { Z: () => s });
            var i = a(552322);
            const s = (e) => (0, i.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, i.jsx)("path", { d: "M12 4c-4.418 0-8 3.58-8 8s3.582 8 8 8c3.806 0 6.993-2.66 7.802-6.22l1.95.44C20.742 18.67 16.76 22 12 22 6.477 22 2 17.52 2 12S6.477 2 12 2c3.272 0 6.176 1.57 8 4V3.5h2v6h-6v-2h2.616C17.175 5.39 14.749 4 12 4z" }) });
        },
        913577: (e, l, a) => {
            a.d(l, { Z: () => s });
            var i = a(552322);
            const s = (e) => (0, i.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, i.jsx)("path", { d: "M16 6c0 2.21-1.79 4-4 4S8 8.21 8 6s1.79-4 4-4 4 1.79 4 4zm-.76 8.57l-3.95.58 2.86 2.78-.68 3.92L17 20l3.53 1.85-.68-3.92 2.86-2.78-3.95-.58L17 11l-1.76 3.57zm-.45-3.09c-.89-.32-1.86-.48-2.89-.48-2.35 0-4.37.85-5.86 2.44-1.48 1.57-2.36 3.8-2.63 6.46l-.11 1.09h8.58l.52-2.49-4.05-4.3 5.59-.99.85-1.73z" }) });
        },
        101680: (e, l, a) => {
            a.d(l, { Z: () => s });
            var i = a(552322);
            const s = (e) => (0, i.jsxs)("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: [(0, i.jsxs)("linearGradient", { id: "a", gradientUnits: "userSpaceOnUse", x1: 4.411, x2: 18.083, y1: 2.495, y2: 21.508, children: [(0, i.jsx)("stop", { offset: 0, stopColor: "#f4e72a" }), (0, i.jsx)("stop", { offset: 0.539, stopColor: "#cd8105" }), (0, i.jsx)("stop", { offset: 0.68, stopColor: "#cb7b00" }), (0, i.jsx)("stop", { offset: 1, stopColor: "#f4ec26" }), (0, i.jsx)("stop", { offset: 1, stopColor: "#f4e72a" })] }), (0, i.jsxs)("linearGradient", { id: "b", gradientUnits: "userSpaceOnUse", x1: 5.355, x2: 16.361, y1: 3.395, y2: 19.133, children: [(0, i.jsx)("stop", { offset: 0, stopColor: "#f9e87f" }), (0, i.jsx)("stop", { offset: 0.406, stopColor: "#e2b719" }), (0, i.jsx)("stop", { offset: 0.989, stopColor: "#e2b719" })] }), (0, i.jsxs)("g", { clipRule: "evenodd", fillRule: "evenodd", children: [(0, i.jsx)("path", { d: "M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z", fill: "url(#a)" }), (0, i.jsx)("path", { d: "M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z", fill: "url(#b)" }), (0, i.jsx)("path", { d: "M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z", fill: "#d18800" })] })] });
        },
        490881: (e, l, a) => {
            a.d(l, { Z: () => s });
            var i = a(552322);
            const s = (e) => (0, i.jsx)("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: (0, i.jsx)("path", { clipRule: "evenodd", d: "M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z", fill: "#829aab", fillRule: "evenodd" }) });
        },
        808116: (e, l, a) => {
            a.d(l, { Z: () => s });
            var i = a(552322);
            const s = (e) => (0, i.jsx)("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: (0, i.jsx)("path", { d: "M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" }) });
        },
        177697: (e, l, a) => {
            a.d(l, { Z: () => s });
            var i = a(552322);
            const s = (e) => (0, i.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, i.jsx)("path", { d: "M18.586 7.001L16.707 8.88c-.391.391-1.024.391-1.414 0l-.172-.172c-.39-.391-.39-1.024 0-1.414L17 5.415c1.26-1.26.367-3.414-1.414-3.414h-1.118c-1.845 0-3.615.733-4.92 2.038-1.645 1.645-2.359 4.004-1.903 6.285l.217 1.086c.033.164-.019.333-.137.452l-5.372 5.372c-.976.976-.976 2.559 0 3.536l.879.879c.976.976 2.559.976 3.535 0l5.372-5.372c.118-.118.288-.17.452-.137l1.086.217c2.281.456 4.64-.258 6.285-1.903C21.267 13.149 22 11.379 22 9.534V8.416c0-1.782-2.154-2.674-3.414-1.414zm-.038 6.037c-1.172 1.172-2.853 1.681-4.479 1.356l-1.086-.217c-.82-.164-1.667.093-2.258.684l-5.372 5.372c-.195.195-.512.195-.707 0l-.879-.879c-.195-.195-.195-.512 0-.707l5.372-5.372c.591-.591.848-1.438.684-2.258l-.217-1.086c-.325-1.626.184-3.306 1.356-4.479.93-.93 2.191-1.452 3.506-1.452h1.118l-1.879 1.879c-1.172 1.172-1.172 3.071 0 4.243l.172.172c1.172 1.172 3.071 1.172 4.242 0L20 8.415v1.118c0 1.315-.522 2.576-1.452 3.506z" }) });
        },
        428897: (e, l, a) => {
            a.d(l, { Z: () => s });
            var i = a(552322);
            const s = (e) => (0, i.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, i.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) });
        },
        261012: (e, l, a) => {
            a.d(l, { r: () => t });
            var i = a(552322),
                s = a(199237),
                n = a(202784),
                r = a(31674);
            const t = (0, n.forwardRef)(function ({ className: e, size: l = "medium", thumbClassName: a, ...n }, t) {
                return (0, i.jsx)(s.fC, { className: (0, r.cn)("focus-visible:ring-offset-background data-[state=checked]:bg-primary rounded-full focus-visible:ring-primary inline-flex shrink-0 cursor-pointer items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-500", "medium" === l ? "h-3 w-10" : "h-2 w-6", e), ...n, ref: t, children: (0, i.jsx)(s.bU, { className: (0, r.cn)("rounded-full pointer-events-none block shadow-md ring-0 transition-transform data-[state=checked]:bg-blue-300 data-[state=unchecked]:bg-gray-50", "medium" === l ? "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5 data-[state=unchecked]:translate-x-0" : "size-3.5 data-[state=checked]:translate-x-2.5 data-[state=checked]:rtl:-translate-x-2.5 data-[state=unchecked]:translate-x-0", a) }) });
            });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Verified-8eba0336.1360ed1a.js.map
