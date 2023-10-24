var Fe = Object.defineProperty, Ue = Object.defineProperties;
var _e = Object.getOwnPropertyDescriptors;
var B = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, ee = Object.prototype.propertyIsEnumerable;
var te = Math.pow, Q = (e, t, r) => t in e ? Fe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, T = (e, t) => {
  for (var r in t || (t = {}))
    Z.call(t, r) && Q(e, r, t[r]);
  if (B)
    for (var r of B(t))
      ee.call(t, r) && Q(e, r, t[r]);
  return e;
}, R = (e, t) => Ue(e, _e(t));
var re = (e, t) => {
  var r = {};
  for (var n in e)
    Z.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && B)
    for (var n of B(e))
      t.indexOf(n) < 0 && ee.call(e, n) && (r[n] = e[n]);
  return r;
};
var S = (e, t, r) => new Promise((n, a) => {
  var i = (s) => {
    try {
      c(r.next(s));
    } catch (u) {
      a(u);
    }
  }, o = (s) => {
    try {
      c(r.throw(s));
    } catch (u) {
      a(u);
    }
  }, c = (s) => s.done ? n(s.value) : Promise.resolve(s.value).then(i, o);
  c((r = r.apply(e, t)).next());
});
function le(e, t) {
  return e[13] = 1, e[14] = t >> 8, e[15] = t & 255, e[16] = t >> 8, e[17] = t & 255, e;
}
const ue = "p".charCodeAt(0), fe = "H".charCodeAt(0), de = "Y".charCodeAt(0), me = "s".charCodeAt(0);
let j;
function Pe() {
  const e = new Int32Array(256);
  for (let t = 0; t < 256; t++) {
    let r = t;
    for (let n = 0; n < 8; n++)
      r = r & 1 ? 3988292384 ^ r >>> 1 : r >>> 1;
    e[t] = r;
  }
  return e;
}
function $e(e) {
  let t = -1;
  j || (j = Pe());
  for (let r = 0; r < e.length; r++)
    t = j[(t ^ e[r]) & 255] ^ t >>> 8;
  return t ^ -1;
}
function Be(e) {
  const t = e.length - 1;
  for (let r = t; r >= 4; r--)
    if (e[r - 4] === 9 && e[r - 3] === ue && e[r - 2] === fe && e[r - 1] === de && e[r] === me)
      return r - 3;
  return 0;
}
function ge(e, t, r = !1) {
  const n = new Uint8Array(13);
  t *= 39.3701, n[0] = ue, n[1] = fe, n[2] = de, n[3] = me, n[4] = t >>> 24, n[5] = t >>> 16, n[6] = t >>> 8, n[7] = t & 255, n[8] = n[4], n[9] = n[5], n[10] = n[6], n[11] = n[7], n[12] = 1;
  const a = $e(n), i = new Uint8Array(4);
  if (i[0] = a >>> 24, i[1] = a >>> 16, i[2] = a >>> 8, i[3] = a & 255, r) {
    const o = Be(e);
    return e.set(n, o), e.set(i, o + 13), e;
  } else {
    const o = new Uint8Array(4);
    o[0] = 0, o[1] = 0, o[2] = 0, o[3] = 9;
    const c = new Uint8Array(54);
    return c.set(e, 0), c.set(o, 33), c.set(n, 37), c.set(i, 50), c;
  }
}
const Le = "AAlwSFlz", Me = "AAAJcEhZ", Oe = "AAAACXBI";
function We(e) {
  let t = e.indexOf(Le);
  return t === -1 && (t = e.indexOf(Me)), t === -1 && (t = e.indexOf(Oe)), t;
}
const H = "[modern-screenshot]", x = typeof window != "undefined", qe = x && "Worker" in window, he = x && "atob" in window, je = x && "btoa" in window;
var ce;
const z = x ? (ce = window.navigator) == null ? void 0 : ce.userAgent : "", we = z.includes("Chrome"), L = z.includes("AppleWebKit") && !we, X = z.includes("Firefox"), Ve = (e) => e && "__CONTEXT__" in e, He = (e) => e.constructor.name === "CSSFontFaceRule", ze = (e) => e.constructor.name === "CSSImportRule", A = (e) => e.nodeType === 1, _ = (e) => typeof e.className == "object", pe = (e) => e.tagName === "image", Xe = (e) => e.tagName === "use", G = (e) => A(e) && typeof e.style != "undefined" && !_(e), Ge = (e) => e.nodeType === 8, Ye = (e) => e.nodeType === 3, D = (e) => e.tagName === "IMG", M = (e) => e.tagName === "VIDEO", Je = (e) => e.tagName === "CANVAS", ne = (e) => e.tagName === "TEXTAREA", Ke = (e) => e.tagName === "INPUT", Qe = (e) => e.tagName === "STYLE", Ze = (e) => e.tagName === "SCRIPT", et = (e) => e.tagName === "SELECT", tt = (e) => e.tagName === "SLOT", rt = (e) => e.tagName === "IFRAME", E = (...e) => console.warn(H, ...e), nt = (e) => console.time(`${H} ${e}`), ot = (e) => console.timeEnd(`${H} ${e}`), at = (e) => {
  var r;
  const t = (r = e == null ? void 0 : e.createElement) == null ? void 0 : r.call(e, "canvas");
  return t && (t.height = t.width = 1), t && "toDataURL" in t && !!t.toDataURL("image/webp").includes("image/webp");
}, V = (e) => e.startsWith("data:");
function ye(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (x && e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i) || !x)
    return e;
  const r = O().implementation.createHTMLDocument(), n = r.createElement("base"), a = r.createElement("a");
  return r.head.appendChild(n), r.body.appendChild(a), t && (n.href = t), a.href = e, a.href;
}
function O(e) {
  var t;
  return (t = e && A(e) ? e == null ? void 0 : e.ownerDocument : e) != null ? t : window.document;
}
const W = "http://www.w3.org/2000/svg";
function be(e, t, r) {
  const n = O(r).createElementNS(W, "svg");
  return n.setAttributeNS(null, "width", e.toString()), n.setAttributeNS(null, "height", t.toString()), n.setAttributeNS(null, "viewBox", `0 0 ${e} ${t}`), n;
}
function Se(e, t) {
  let r = new XMLSerializer().serializeToString(e);
  return t && (r = r.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/ug, "")), `data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`;
}
function st(e, t = "image/png", r = 1) {
  return S(this, null, function* () {
    try {
      return yield new Promise((n, a) => {
        e.toBlob((i) => {
          i ? n(i) : a(new Error("Blob is null"));
        }, t, r);
      });
    } catch (n) {
      if (he)
        return E("Failed canvas to blob", { type: t, quality: r }, n), it(e.toDataURL(t, r));
      throw n;
    }
  });
}
function it(e) {
  var c, s;
  const [t, r] = e.split(","), n = (s = (c = t.match(/data:(.+);/)) == null ? void 0 : c[1]) != null ? s : void 0, a = window.atob(r), i = a.length, o = new Uint8Array(i);
  for (let u = 0; u < i; u += 1)
    o[u] = a.charCodeAt(u);
  return new Blob([o], { type: n });
}
function Ee(e, t) {
  return new Promise((r, n) => {
    const a = new FileReader();
    a.onload = () => r(a.result), a.onerror = () => n(a.error), a.onabort = () => n(new Error(`Failed read blob to ${t}`)), t === "dataUrl" ? a.readAsDataURL(e) : t === "arrayBuffer" && a.readAsArrayBuffer(e);
  });
}
const ct = (e) => Ee(e, "dataUrl"), lt = (e) => Ee(e, "arrayBuffer");
function k(e, t) {
  const r = O(t).createElement("img");
  return r.decoding = "sync", r.loading = "eager", r.src = e, r;
}
function F(e, t) {
  return new Promise((r) => {
    const { timeout: n, ownerDocument: a, onError: i } = t != null ? t : {}, o = typeof e == "string" ? k(e, O(a)) : e;
    let c = null, s = null;
    function u() {
      r(o), c && clearTimeout(c), s == null || s();
    }
    if (n && (c = setTimeout(u, n)), M(o)) {
      const l = o.currentSrc || o.src;
      if (!l)
        return o.poster ? F(o.poster, t).then(r) : u();
      if (o.readyState >= 2)
        return u();
      const f = u, d = (m) => {
        E(
          "Failed video load",
          l,
          m
        ), i == null || i(m), u();
      };
      s = () => {
        o.removeEventListener("loadeddata", f), o.removeEventListener("error", d);
      }, o.addEventListener("loadeddata", f, { once: !0 }), o.addEventListener("error", d, { once: !0 });
    } else {
      const l = pe(o) ? o.href.baseVal : o.currentSrc || o.src;
      if (!l)
        return u();
      const f = () => S(this, null, function* () {
        if (D(o) && "decode" in o)
          try {
            yield o.decode();
          } catch (m) {
            E(
              "Failed to decode image, trying to render anyway",
              o.dataset.originalSrc || l,
              m
            );
          }
        u();
      }), d = (m) => {
        E(
          "Failed image load",
          o.dataset.originalSrc || l,
          m
        ), u();
      };
      if (D(o) && o.complete)
        return f();
      s = () => {
        o.removeEventListener("load", f), o.removeEventListener("error", d);
      }, o.addEventListener("load", f, { once: !0 }), o.addEventListener("error", d, { once: !0 });
    }
  });
}
function ut(e, t) {
  return S(this, null, function* () {
    G(e) && (D(e) || M(e) ? yield F(e, { timeout: t }) : yield Promise.all(
      ["img", "video"].flatMap((r) => Array.from(e.querySelectorAll(r)).map((n) => F(n, { timeout: t })))
    ));
  });
}
const Ce = function() {
  let t = 0;
  const r = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * te(36, 4) << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${r()}${t}`);
}();
function ve(e) {
  return e == null ? void 0 : e.split(",").map((t) => t.trim().replace(/"|'/g, "").toLowerCase()).filter(Boolean);
}
function ft(e) {
  return {
    time: (t) => e && nt(t),
    timeEnd: (t) => e && ot(t),
    warn: (...t) => e && E(...t)
  };
}
function dt(e) {
  return {
    cache: e ? "no-cache" : "force-cache"
  };
}
function N(e, t) {
  return S(this, null, function* () {
    return Ve(e) ? e : mt(e, R(T({}, t), { autoDestruct: !0 }));
  });
}
function mt(e, t) {
  return S(this, null, function* () {
    var m, g, p, y, h;
    const { scale: r = 1, workerUrl: n, workerNumber: a = 1 } = t || {}, i = !!(t != null && t.debug), o = (m = t == null ? void 0 : t.features) != null ? m : !0, c = (g = e.ownerDocument) != null ? g : x ? window.document : void 0, s = (y = (p = e.ownerDocument) == null ? void 0 : p.defaultView) != null ? y : x ? window : void 0, u = /* @__PURE__ */ new Map(), l = R(T({
      // Options
      width: 0,
      height: 0,
      quality: 1,
      type: "image/png",
      scale: r,
      backgroundColor: null,
      style: null,
      filter: null,
      maximumCanvasSize: 0,
      timeout: 3e4,
      progress: null,
      debug: i,
      fetch: T({
        requestInit: dt((h = t == null ? void 0 : t.fetch) == null ? void 0 : h.bypassingCache),
        placeholderImage: "data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        bypassingCache: !1
      }, t == null ? void 0 : t.fetch),
      font: {},
      drawImageInterval: 100,
      workerUrl: null,
      workerNumber: a,
      onCloneNode: null,
      onEmbedNode: null,
      onCreateForeignObjectSvg: null,
      autoDestruct: !1
    }, t), {
      // InternalContext
      __CONTEXT__: !0,
      log: ft(i),
      node: e,
      ownerDocument: c,
      ownerWindow: s,
      dpi: r === 1 ? null : 96 * r,
      svgStyleElement: Te(c),
      svgDefsElement: c == null ? void 0 : c.createElementNS(W, "defs"),
      svgStyles: /* @__PURE__ */ new Map(),
      defaultComputedStyles: /* @__PURE__ */ new Map(),
      workers: [
        ...new Array(
          qe && n && a ? a : 0
        )
      ].map(() => {
        try {
          const b = new Worker(n);
          return b.onmessage = (w) => S(this, null, function* () {
            var I, J, $, K;
            const { url: C, result: v } = w.data;
            v ? (J = (I = u.get(C)) == null ? void 0 : I.resolve) == null || J.call(I, v) : (K = ($ = u.get(C)) == null ? void 0 : $.reject) == null || K.call($, new Error(`Error receiving message from worker: ${C}`));
          }), b.onmessageerror = (w) => {
            var v, I;
            const { url: C } = w.data;
            (I = (v = u.get(C)) == null ? void 0 : v.reject) == null || I.call(v, new Error(`Error receiving message from worker: ${C}`));
          }, b;
        } catch (b) {
          return E("Failed to new Worker", b), null;
        }
      }).filter(Boolean),
      fontFamilies: /* @__PURE__ */ new Set(),
      fontCssTexts: /* @__PURE__ */ new Map(),
      acceptOfImage: `${[
        at(c) && "image/webp",
        "image/svg+xml",
        "image/*",
        "*/*"
      ].filter(Boolean).join(",")};q=0.8`,
      requests: u,
      drawImageCount: 0,
      tasks: [],
      features: o,
      isEnable: (b) => {
        var w;
        return typeof o == "boolean" ? o : (w = o[b]) != null ? w : !0;
      }
    });
    l.log.time("wait until load"), yield ut(e, l.timeout), l.log.timeEnd("wait until load");
    const { width: f, height: d } = gt(e, l);
    return l.width = f, l.height = d, l;
  });
}
function Te(e) {
  if (!e)
    return;
  const t = e.createElement("style"), r = t.ownerDocument.createTextNode(`
.______background-clip--text {
  background-clip: text;
  -webkit-background-clip: text;
}
`);
  return t.appendChild(r), t;
}
function gt(e, t) {
  let { width: r, height: n } = t;
  if (A(e) && (!r || !n)) {
    const a = e.getBoundingClientRect();
    r = r || a.width || Number(e.getAttribute("width")) || 0, n = n || a.height || Number(e.getAttribute("height")) || 0;
  }
  return { width: r, height: n };
}
function ht(e, t) {
  return S(this, null, function* () {
    const {
      log: r,
      timeout: n,
      drawImageCount: a,
      drawImageInterval: i
    } = t;
    r.time("image to canvas");
    const o = yield F(e, { timeout: n }), { canvas: c, context2d: s } = wt(e.ownerDocument, t), u = () => {
      try {
        s == null || s.drawImage(o, 0, 0, c.width, c.height);
      } catch (l) {
        E("Failed to drawImage", l);
      }
    };
    if (u(), t.isEnable("fixSvgXmlDecode"))
      for (let l = 0; l < a; l++)
        yield new Promise((f) => {
          setTimeout(() => {
            u(), f();
          }, l + i);
        });
    return t.drawImageCount = 0, r.timeEnd("image to canvas"), c;
  });
}
function wt(e, t) {
  const { width: r, height: n, scale: a, backgroundColor: i, maximumCanvasSize: o } = t, c = e.createElement("canvas");
  c.width = Math.floor(r * a), c.height = Math.floor(n * a), c.style.width = `${r}px`, c.style.height = `${n}px`, o && (c.width > o || c.height > o) && (c.width > o && c.height > o ? c.width > c.height ? (c.height *= o / c.width, c.width = o) : (c.width *= o / c.height, c.height = o) : c.width > o ? (c.height *= o / c.width, c.width = o) : (c.width *= o / c.height, c.height = o));
  const s = c.getContext("2d");
  return s && i && (s.fillStyle = i, s.fillRect(0, 0, c.width, c.height)), { canvas: c, context2d: s };
}
const pt = [
  "width",
  "height"
], yt = [
  "stroke",
  "fill"
];
function Ae(e, t, r) {
  var y;
  const { defaultComputedStyles: n, ownerDocument: a } = r, i = e.nodeName.toLowerCase(), o = _(e) && i !== "svg", c = o ? yt.map((h) => [h, e.getAttribute(h)]).filter(([, h]) => h !== null) : [], s = [
    o && "svg",
    i,
    c.map((h, b) => `${h}=${b}`).join(","),
    t
  ].filter(Boolean).join(":");
  if (n.has(s))
    return n.get(s);
  let u = r.sandbox;
  if (!u)
    try {
      a && (u = a.createElement("iframe"), u.id = `__SANDBOX__-${Ce()}`, u.width = "0", u.height = "0", u.style.visibility = "hidden", u.style.position = "fixed", a.body.appendChild(u), (y = u.contentWindow) == null || y.document.write('<!DOCTYPE html><meta charset="UTF-8"><title></title><body>'), r.sandbox = u);
    } catch (h) {
      E("Failed to create iframe sandbox", h);
    }
  if (!u)
    return /* @__PURE__ */ new Map();
  const l = u.contentWindow;
  if (!l)
    return /* @__PURE__ */ new Map();
  const f = l.document;
  let d, m;
  o ? (d = f.createElementNS(W, "svg"), m = d.ownerDocument.createElementNS(d.namespaceURI, i), c.forEach(([h, b]) => {
    m.setAttributeNS(null, h, b);
  }), d.appendChild(m)) : d = m = f.createElement(i), m.textContent = " ", f.body.appendChild(d);
  const g = l.getComputedStyle(m, t), p = /* @__PURE__ */ new Map();
  for (let h = g.length, b = 0; b < h; b++) {
    const w = g.item(b);
    pt.includes(w) || p.set(w, g.getPropertyValue(w));
  }
  return f.body.removeChild(d), n.set(s, p), p;
}
function Ne(e, t) {
  var i;
  const r = /* @__PURE__ */ new Map(), n = [], a = /* @__PURE__ */ new Map();
  for (let o = e.length, c = 0; c < o; c++) {
    const s = e.item(c), u = e.getPropertyValue(s), l = e.getPropertyPriority(s), f = s.lastIndexOf("-"), d = f > -1 ? s.substring(0, f) : void 0;
    if (d) {
      let m = a.get(d);
      m || (m = /* @__PURE__ */ new Map(), a.set(d, m)), m.set(s, [u, l]);
    }
    t.get(s) === u && !l || (d ? n.push(d) : r.set(s, [u, l]));
  }
  for (let o = n.length, c = 0; c < o; c++)
    (i = a.get(n[c])) == null || i.forEach((s, u) => r.set(u, s));
  return r;
}
const bt = [
  ":before",
  ":after"
  // ':placeholder', TODO
], St = [
  ":-webkit-scrollbar",
  ":-webkit-scrollbar-button",
  // ':-webkit-scrollbar:horizontal', TODO
  ":-webkit-scrollbar-thumb",
  ":-webkit-scrollbar-track",
  ":-webkit-scrollbar-track-piece",
  // ':-webkit-scrollbar:vertical', TODO
  ":-webkit-scrollbar-corner",
  ":-webkit-resizer"
];
function Et(e, t, r, n) {
  const { ownerWindow: a, svgStyleElement: i, svgStyles: o } = n;
  if (!i || !a)
    return;
  function c(s) {
    var h;
    const u = a.getComputedStyle(e, s);
    let l = u.getPropertyValue("content");
    if (!l || l === "none")
      return;
    l = l.replace(/(')|(")|(counter\(.+\))/g, "");
    const f = [Ce()], d = Ae(e, s, n), m = [
      `content: '${l}';`
    ], g = Ne(u, d);
    if (g.delete("content"), g.delete("-webkit-locale"), ((h = g.get("background-clip")) == null ? void 0 : h[0]) === "text" && t.classList.add("______background-clip--text"), g.forEach(([b, w], C) => {
      m.push(`${C}: ${b}${w ? " !important" : ""};`);
    }), m.length === 1)
      return;
    try {
      t.className = [t.className, ...f].join(" ");
    } catch (b) {
      return;
    }
    const p = m.join(`
  `);
    let y = o.get(p);
    y || (y = [], o.set(p, y)), y.push(`.${f[0]}:${s}`);
  }
  bt.forEach(c), r && St.forEach(c);
}
function Ct(e, t) {
  ne(e) && (t.innerHTML = e.value), (ne(e) || Ke(e) || et(e)) && t.setAttribute("value", e.value);
}
function vt(e, t, r, n) {
  var u, l, f, d;
  const { ownerWindow: a } = n, i = t.style, o = a.getComputedStyle(e), c = Ae(e, null, n), s = Ne(o, c);
  return s.delete("transition-property"), s.delete("all"), s.delete("d"), s.delete("content"), r && (s.delete("margin-top"), s.delete("margin-right"), s.delete("margin-bottom"), s.delete("margin-left"), s.delete("margin-block-start"), s.delete("margin-block-end"), s.delete("margin-inline-start"), s.delete("margin-inline-end"), s.set("box-sizing", ["border-box", ""])), ((u = s.get("background-clip")) == null ? void 0 : u[0]) === "text" && (t.classList.add("______background-clip--text"), i.removeProperty("background")), we && (s.has("font-kerning") || s.set("font-kerning", ["normal", ""]), (((l = s.get("overflow-x")) == null ? void 0 : l[0]) === "hidden" || ((f = s.get("overflow-y")) == null ? void 0 : f[0]) === "hidden") && ((d = s.get("text-overflow")) == null ? void 0 : d[0]) === "ellipsis" && e.scrollWidth === e.clientWidth && s.set("text-overflow", ["clip", ""])), s.forEach(([m, g], p) => {
    i.setProperty(p, m, g);
  }), s;
}
function Tt(e, t) {
  var r;
  try {
    if ((r = e == null ? void 0 : e.contentDocument) != null && r.body)
      return q(e.contentDocument.body, t);
  } catch (n) {
    E("Failed to clone iframe", n);
  }
  return e.cloneNode(!1);
}
function Ie(e) {
  if (e.ownerDocument)
    try {
      const a = e.toDataURL();
      if (a !== "data:,")
        return k(a, e.ownerDocument);
    } catch (a) {
    }
  const t = e.cloneNode(!1), r = e.getContext("2d"), n = t.getContext("2d");
  try {
    return r && n && n.putImageData(
      r.getImageData(0, 0, e.width, e.height),
      0,
      0
    ), t;
  } catch (a) {
    E("Failed to clone canvas", a);
  }
  return t;
}
function At(e) {
  return S(this, null, function* () {
    if (e.ownerDocument && !e.currentSrc && e.poster)
      return k(e.poster, e.ownerDocument);
    const t = e.cloneNode(!1);
    t.crossOrigin = "anonymous", e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc);
    const r = t.ownerDocument;
    if (r) {
      let n = !0;
      if (yield F(t, {
        onError: () => n = !1
      }), !n)
        return e.poster ? k(e.poster, e.ownerDocument) : t;
      t.currentTime = e.currentTime, yield new Promise((i) => {
        t.addEventListener("seeked", i, { once: !0 });
      });
      const a = r.createElement("canvas");
      a.width = e.offsetWidth, a.height = e.offsetHeight;
      try {
        const i = a.getContext("2d");
        i && i.drawImage(t, 0, 0, a.width, a.height);
      } catch (i) {
        return E("Failed to clone video", i), e.poster ? k(e.poster, e.ownerDocument) : t;
      }
      return Ie(a);
    }
    return t;
  });
}
function Nt(e) {
  const t = e.cloneNode(!1);
  return e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager"), t;
}
function It(e, t) {
  return Je(e) ? Ie(e) : rt(e) ? Tt(e, t) : D(e) ? Nt(e) : M(e) ? At(e) : e.cloneNode(!1);
}
function oe(e, t, r) {
  return S(this, null, function* () {
    A(t) && (Qe(t) || Ze(t)) || r.filter && !r.filter(t) || e.appendChild(yield q(t, r));
  });
}
function ae(e, t, r) {
  return S(this, null, function* () {
    var a, i;
    const n = (i = A(e) ? (a = e.shadowRoot) == null ? void 0 : a.firstChild : void 0) != null ? i : e.firstChild;
    for (let o = n; o; o = o.nextSibling)
      if (!Ge(o))
        if (A(o) && tt(o) && typeof o.assignedNodes == "function") {
          const c = o.assignedNodes();
          for (let s = 0; s < c.length; s++)
            yield oe(t, c[s], r);
        } else
          yield oe(t, o, r);
  });
}
function xt(e, t) {
  const { backgroundColor: r, width: n, height: a, style: i } = t, o = e.style;
  if (r && o.setProperty("background-color", r, "important"), n && o.setProperty("width", `${n}px`, "important"), a && o.setProperty("height", `${a}px`, "important"), i)
    for (const c in i)
      o[c] = i[c];
}
const kt = /^[\w-:]+$/;
function q(e, t, r = !1) {
  return S(this, null, function* () {
    var c, s, u, l;
    const { ownerDocument: n, ownerWindow: a, fontFamilies: i } = t;
    if (n && Ye(e))
      return n.createTextNode(e.data);
    if (n && a && A(e) && (G(e) || _(e))) {
      const f = yield It(e, t);
      if (t.isEnable("removeAbnormalAttributes")) {
        const g = f.getAttributeNames();
        for (let p = g.length, y = 0; y < p; y++) {
          const h = g[y];
          kt.test(h) || f.removeAttribute(h);
        }
      }
      const d = vt(e, f, r, t);
      r && xt(f, t);
      let m = !1;
      if (t.isEnable("copyScrollbar")) {
        const g = [
          (c = d.get("overflow-x")) == null ? void 0 : c[0],
          (s = d.get("overflow-y")) == null ? void 0 : s[1]
        ];
        m = g.includes("scroll") || (g.includes("auto") || g.includes("overlay")) && (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
      }
      return Et(e, f, m, t), Ct(e, f), (l = ve((u = d.get("font-family")) == null ? void 0 : u[0])) == null || l.forEach((g) => i.add(g)), M(e) || (yield ae(e, f, t)), f;
    }
    const o = e.cloneNode(!1);
    return yield ae(e, o, t), o;
  });
}
function Rt(e) {
  if (e.ownerDocument = void 0, e.ownerWindow = void 0, e.svgStyleElement = void 0, e.svgDefsElement = void 0, e.svgStyles.clear(), e.defaultComputedStyles.clear(), e.sandbox) {
    try {
      e.sandbox.remove();
    } catch (t) {
    }
    e.sandbox = void 0;
  }
  e.workers = [], e.fontFamilies.clear(), e.fontCssTexts.clear(), e.requests.clear(), e.tasks = [];
}
function Dt(e) {
  const c = e, { url: t, timeout: r, responseType: n } = c, a = re(c, ["url", "timeout", "responseType"]), i = new AbortController(), o = r ? setTimeout(() => i.abort(), r) : void 0;
  return fetch(t, T({ signal: i.signal }, a)).then((s) => {
    if (!s.ok)
      throw new Error("Failed fetch, not 2xx response", { cause: s });
    switch (n) {
      case "dataUrl":
        return s.blob().then(ct);
      case "text":
      default:
        return s.text();
    }
  }).finally(() => clearTimeout(o));
}
function U(e, t) {
  const { url: r, requestType: n = "text", responseType: a = "text", imageDom: i } = t;
  let o = r;
  const {
    timeout: c,
    acceptOfImage: s,
    requests: u,
    fetch: {
      requestInit: l,
      bypassingCache: f,
      placeholderImage: d
    },
    workers: m
  } = e;
  n === "image" && (L || X) && e.drawImageCount++;
  let g = u.get(r);
  if (!g) {
    f && f instanceof RegExp && f.test(o) && (o += (/\?/.test(o) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
    const p = T({
      url: o,
      timeout: c,
      responseType: a,
      headers: n === "image" ? { accept: s } : void 0
    }, l);
    g = {
      type: n,
      resolve: void 0,
      reject: void 0,
      response: null
    }, g.response = (!L && r.startsWith("http") && m.length ? new Promise((y, h) => {
      m[u.size & m.length - 1].postMessage(T({ rawUrl: r }, p)), g.resolve = y, g.reject = h;
    }) : Dt(p)).catch((y) => {
      if (u.delete(r), n === "image" && d)
        return E("Failed to fetch image base64, trying to use placeholder image", o), typeof d == "string" ? d : d(i);
      throw y;
    }), u.set(r, g);
  }
  return g.response;
}
function xe(e, t, r, n) {
  return S(this, null, function* () {
    if (!ke(e))
      return e;
    for (const [a, i] of Ft(e, t))
      try {
        const o = yield U(
          r,
          {
            url: i,
            requestType: n ? "image" : "text",
            responseType: "dataUrl"
          }
        );
        e = e.replace(Ut(a), `$1${o}$3`);
      } catch (o) {
        E("Failed to fetch css data url", a, o);
      }
    return e;
  });
}
function ke(e) {
  return /url\((['"]?)([^'"]+?)\1\)/.test(e);
}
const Re = /url\((['"]?)([^'"]+?)\1\)/g;
function Ft(e, t) {
  const r = [];
  return e.replace(Re, (n, a, i) => (r.push([i, ye(i, t)]), n)), r.filter(([n]) => !V(n));
}
function Ut(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function _t(e, t) {
  return S(this, null, function* () {
    const {
      ownerDocument: r,
      svgStyleElement: n,
      fontFamilies: a,
      fontCssTexts: i,
      tasks: o,
      font: c
    } = t;
    if (!(!r || !n || !a.size))
      if (c && c.cssText) {
        const s = ie(c.cssText, t);
        n.appendChild(r.createTextNode(`${s}
`));
      } else {
        const s = Array.from(r.styleSheets).filter((l) => {
          try {
            return "cssRules" in l && !!l.cssRules.length;
          } catch (f) {
            return E(`Error while reading CSS rules from ${l.href}`, f), !1;
          }
        });
        yield Promise.all(
          s.flatMap((l) => Array.from(l.cssRules).map((f, d) => S(this, null, function* () {
            if (ze(f)) {
              let m = d + 1;
              const g = f.href;
              let p = "";
              try {
                p = yield U(t, {
                  url: g,
                  requestType: "text",
                  responseType: "text"
                });
              } catch (h) {
                E(`Error fetch remote css import from ${g}`, h);
              }
              const y = p.replace(
                Re,
                (h, b, w) => h.replace(w, ye(w, g))
              );
              for (const h of $t(y))
                try {
                  l.insertRule(
                    h,
                    h.startsWith("@import") ? m += 1 : l.cssRules.length
                  );
                } catch (b) {
                  E("Error inserting rule from remote css import", { rule: h, error: b });
                }
            }
          })))
        ), s.flatMap((l) => Array.from(l.cssRules)).filter((l) => {
          var f;
          return He(l) && ke(l.style.getPropertyValue("src")) && ((f = ve(l.style.getPropertyValue("font-family"))) == null ? void 0 : f.some((d) => a.has(d)));
        }).forEach((l) => {
          const f = l, d = i.get(f.cssText);
          d ? n.appendChild(r.createTextNode(`${d}
`)) : o.push(
            xe(
              f.cssText,
              f.parentStyleSheet ? f.parentStyleSheet.href : null,
              t
            ).then((m) => {
              m = ie(m, t), i.set(f.cssText, m), n.appendChild(r.createTextNode(`${m}
`));
            })
          );
        });
      }
  });
}
const Pt = /(\/\*[\s\S]*?\*\/)/gi, se = /((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})/gi;
function $t(e) {
  if (e == null)
    return [];
  const t = [];
  let r = e.replace(Pt, "");
  for (; ; ) {
    const i = se.exec(r);
    if (!i)
      break;
    t.push(i[0]);
  }
  r = r.replace(se, "");
  const n = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, a = new RegExp(
    "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
    "gi"
  );
  for (; ; ) {
    let i = n.exec(r);
    if (i)
      a.lastIndex = n.lastIndex;
    else if (i = a.exec(r), i)
      n.lastIndex = a.lastIndex;
    else
      break;
    t.push(i[0]);
  }
  return t;
}
const Bt = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Lt = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function ie(e, t) {
  const { font: r } = t, n = r ? r == null ? void 0 : r.preferredFormat : void 0;
  return n ? e.replace(Lt, (a) => {
    for (; ; ) {
      const [i, , o] = Bt.exec(a) || [];
      if (!o)
        return "";
      if (o === n)
        return `src: ${i};`;
    }
  }) : e;
}
function Mt(e, t) {
  if (D(e)) {
    const r = e.currentSrc || e.src;
    if (!V(r))
      return [
        U(t, {
          url: r,
          imageDom: e,
          requestType: "image",
          responseType: "dataUrl"
        }).then((n) => {
          n && (e.srcset = "", e.dataset.originalSrc = r, e.src = n || "");
        })
      ];
    (L || X) && t.drawImageCount++;
  } else if (_(e) && !V(e.href.baseVal)) {
    const r = e.href.baseVal;
    return [
      U(t, {
        url: r,
        imageDom: e,
        requestType: "image",
        responseType: "dataUrl"
      }).then((n) => {
        n && (e.dataset.originalSrc = r, e.href.baseVal = n || "");
      })
    ];
  }
  return [];
}
const Ot = [
  "background-image",
  "border-image-source",
  "-webkit-border-image",
  "-webkit-mask-image",
  "list-style-image"
];
function Wt(e, t) {
  return Ot.map((r) => {
    const n = e.getPropertyValue(r);
    return n ? ((L || X) && t.drawImageCount++, xe(n, null, t, !0).then((a) => {
      !a || n === a || e.setProperty(
        r,
        a,
        e.getPropertyPriority(r)
      );
    })) : null;
  }).filter(Boolean);
}
function qt(e, t) {
  var c;
  const { ownerDocument: r, svgDefsElement: n } = t, a = (c = e.getAttribute("href")) != null ? c : e.getAttribute("xlink:href");
  if (!a)
    return [];
  const [i, o] = a.split("#");
  if (o) {
    const s = `#${o}`, u = r == null ? void 0 : r.querySelector(`svg ${s}`);
    if (i && e.setAttribute("href", s), n != null && n.querySelector(s))
      return [];
    if (u)
      return [
        q(u, t).then((l) => {
          n != null && n.querySelector(s) || n == null || n.appendChild(l);
        })
      ];
    if (i)
      return [
        U(t, {
          url: i,
          responseType: "text"
        }).then((l) => {
          n == null || n.insertAdjacentHTML("beforeend", l);
        })
      ];
  }
  return [];
}
function De(e, t) {
  const { tasks: r } = t;
  A(e) && ((D(e) || pe(e)) && r.push(...Mt(e, t)), Xe(e) && r.push(...qt(e, t))), G(e) && r.push(...Wt(e.style, t)), e.childNodes.forEach((n) => {
    De(n, t);
  });
}
function jt(e, t) {
  return S(this, null, function* () {
    const r = yield N(e, t);
    if (A(r.node) && _(r.node))
      return r.node;
    const {
      ownerDocument: n,
      log: a,
      tasks: i,
      svgStyleElement: o,
      svgDefsElement: c,
      svgStyles: s,
      font: u,
      progress: l,
      autoDestruct: f,
      onCloneNode: d,
      onEmbedNode: m,
      onCreateForeignObjectSvg: g
    } = r;
    a.time("clone node");
    const p = yield q(r.node, r, !0);
    if (o && n) {
      let C = "";
      s.forEach((v, I) => {
        C += `${v.join(`,
`)} {
  ${I}
}
`;
      }), o.appendChild(n.createTextNode(C));
    }
    a.timeEnd("clone node"), d == null || d(p), u !== !1 && A(p) && (a.time("embed web font"), yield _t(p, r), a.timeEnd("embed web font")), a.time("embed node"), De(p, r);
    const y = i.length;
    let h = 0;
    const b = () => S(this, null, function* () {
      for (; ; ) {
        const C = i.pop();
        if (!C)
          break;
        try {
          yield C;
        } catch (v) {
          E("Failed to run task", v);
        }
        l == null || l(++h, y);
      }
    });
    l == null || l(h, y), yield Promise.all([...Array(4)].map(b)), a.timeEnd("embed node"), m == null || m(p);
    const w = Vt(p, r);
    return c && w.insertBefore(c, w.children[0]), o && w.insertBefore(o, w.children[0]), f && Rt(r), g == null || g(w), w;
  });
}
function Vt(e, t) {
  const { width: r, height: n } = t, a = be(r, n, e.ownerDocument), i = a.ownerDocument.createElementNS(a.namespaceURI, "foreignObject");
  return i.setAttributeNS(null, "x", "0%"), i.setAttributeNS(null, "y", "0%"), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.append(e), a.appendChild(i), a;
}
function Y(e, t) {
  return S(this, null, function* () {
    var o;
    const r = yield N(e, t), n = yield jt(r), a = Se(n, r.isEnable("removeControlCharacter"));
    r.autoDestruct || (r.svgStyleElement = Te(r.ownerDocument), r.svgDefsElement = (o = r.ownerDocument) == null ? void 0 : o.createElementNS(W, "defs"), r.svgStyles.clear());
    const i = k(a, n.ownerDocument);
    return yield ht(i, r);
  });
}
function Xt(e, t) {
  return S(this, null, function* () {
    const r = yield N(e, t), { log: n, type: a, quality: i, dpi: o } = r, c = yield Y(r);
    n.time("canvas to blob");
    const s = yield st(c, a, i);
    if (["image/png", "image/jpeg"].includes(a) && o) {
      const u = yield lt(s.slice(0, 33));
      let l = new Uint8Array(u);
      return a === "image/png" ? l = ge(l, o) : a === "image/jpeg" && (l = le(l, o)), n.timeEnd("canvas to blob"), new Blob([l, s.slice(33)], { type: a });
    }
    return n.timeEnd("canvas to blob"), s;
  });
}
function P(e, t) {
  return S(this, null, function* () {
    const r = yield N(e, t), { log: n, quality: a, type: i, dpi: o } = r, c = yield Y(r);
    n.time("canvas to data url");
    let s = c.toDataURL(i, a);
    if (["image/png", "image/jpeg"].includes(i) && o && he && je) {
      const [u, l] = s.split(",");
      let f = 0, d = !1;
      if (i === "image/png") {
        const w = We(l);
        w >= 0 ? (f = Math.ceil((w + 28) / 3) * 4, d = !0) : f = 33 / 3 * 4;
      } else
        i === "image/jpeg" && (f = 18 / 3 * 4);
      const m = l.substring(0, f), g = l.substring(f), p = window.atob(m), y = new Uint8Array(p.length);
      for (let w = 0; w < y.length; w++)
        y[w] = p.charCodeAt(w);
      const h = i === "image/png" ? ge(y, o, d) : le(y, o), b = window.btoa(String.fromCharCode(...h));
      s = [u, ",", b, g].join("");
    }
    return n.timeEnd("canvas to data url"), s;
  });
}
function Ht(e, t) {
  return S(this, null, function* () {
    const r = yield N(e, t), { width: n, height: a, ownerDocument: i } = r, o = yield P(r), c = be(n, a, i), s = c.ownerDocument.createElementNS(c.namespaceURI, "image");
    return s.setAttributeNS(null, "href", o), s.setAttributeNS(null, "height", "100%"), s.setAttributeNS(null, "width", "100%"), c.appendChild(s), Se(c, r.isEnable("removeControlCharacter"));
  });
}
function Gt(e, t) {
  return S(this, null, function* () {
    const r = yield N(e, t), { ownerDocument: n, width: a, height: i, scale: o, type: c } = r, s = c === "image/svg+xml" ? yield Ht(r) : yield P(r), u = k(s, n);
    return u.width = Math.floor(a * o), u.height = Math.floor(i * o), u.style.width = `${a}px`, u.style.height = `${i}px`, u;
  });
}
function Yt(e, t) {
  return S(this, null, function* () {
    return P(
      yield N(e, R(T({}, t), { type: "image/jpeg" }))
    );
  });
}
function Jt(e, t) {
  return S(this, null, function* () {
    const r = yield N(e, t), n = yield Y(r);
    return n.getContext("2d").getImageData(0, 0, n.width, n.height).data;
  });
}
function Kt(e, t) {
  return S(this, null, function* () {
    return P(
      yield N(e, R(T({}, t), { type: "image/png" }))
    );
  });
}
function Qt(e, t) {
  return S(this, null, function* () {
    return P(
      yield N(e, R(T({}, t), { type: "image/webp" }))
    );
  });
}
export {
  mt as createContext,
  Rt as destroyContext,
  Xt as domToBlob,
  Y as domToCanvas,
  P as domToDataUrl,
  jt as domToForeignObjectSvg,
  Gt as domToImage,
  Yt as domToJpeg,
  Jt as domToPixel,
  Kt as domToPng,
  Ht as domToSvg,
  Qt as domToWebp,
  F as loadMedia,
  ut as waitUntilLoad
};
