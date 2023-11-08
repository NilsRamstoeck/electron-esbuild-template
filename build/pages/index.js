// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var f;
var e;
var c = {};
var s = [];
var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var v = Array.isArray;
function h(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function p(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y(l2, u2, t2) {
  var i2, o2, r2, f2 = {};
  for (r2 in u2)
    "key" == r2 ? i2 = u2[r2] : "ref" == r2 ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps)
    for (r2 in l2.defaultProps)
      void 0 === f2[r2] && (f2[r2] = l2.defaultProps[r2]);
  return d(l2, f2, i2, o2, null);
}
function d(n2, t2, i2, o2, r2) {
  var f2 = { type: n2, props: t2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r2 ? ++u : r2, __i: -1 };
  return null == r2 && null != l.vnode && l.vnode(f2), f2;
}
function k(n2) {
  return n2.children;
}
function m(n2, l2) {
  this.props = n2, this.context = l2;
}
function b(n2, l2) {
  if (null == l2)
    return n2.__ ? b(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? b(n2) : null;
}
function g(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return g(n2);
  }
}
function w(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
}
function x() {
  var n2, l2, u2, t2, o2, r2, e2, c2, s2;
  for (i.sort(f); n2 = i.shift(); )
    n2.__d && (l2 = i.length, t2 = void 0, o2 = void 0, r2 = void 0, c2 = (e2 = (u2 = n2).__v).__e, (s2 = u2.__P) && (t2 = [], o2 = [], (r2 = h({}, e2)).__v = e2.__v + 1, z(s2, r2, e2, u2.__n, void 0 !== s2.ownerSVGElement, null != e2.__h ? [c2] : null, t2, null == c2 ? b(e2) : c2, e2.__h, o2), r2.__.__k[r2.__i] = r2, L(t2, r2, o2), r2.__e != c2 && g(r2)), i.length > l2 && i.sort(f));
  x.__r = 0;
}
function C(n2, l2, u2, t2, i2, o2, r2, f2, e2, a2, h2) {
  var p2, y2, _, m2, g2, w2, x2, C2, $, D2 = 0, H2 = t2 && t2.__k || s, I2 = H2.length, T2 = I2, j2 = l2.length;
  for (u2.__k = [], p2 = 0; p2 < j2; p2++)
    null != (m2 = u2.__k[p2] = null == (m2 = l2[p2]) || "boolean" == typeof m2 || "function" == typeof m2 ? null : m2.constructor == String || "number" == typeof m2 || "bigint" == typeof m2 ? d(null, m2, null, null, m2) : v(m2) ? d(k, { children: m2 }, null, null, null) : m2.__b > 0 ? d(m2.type, m2.props, m2.key, m2.ref ? m2.ref : null, m2.__v) : m2) ? (m2.__ = u2, m2.__b = u2.__b + 1, m2.__i = p2, -1 === (C2 = A(m2, H2, x2 = p2 + D2, T2)) ? _ = c : (_ = H2[C2] || c, H2[C2] = void 0, T2--), z(n2, m2, _, i2, o2, r2, f2, e2, a2, h2), g2 = m2.__e, (y2 = m2.ref) && _.ref != y2 && (_.ref && N(_.ref, null, m2), h2.push(y2, m2.__c || g2, m2)), null == w2 && null != g2 && (w2 = g2), ($ = _ === c || null === _.__v) ? -1 == C2 && D2-- : C2 !== x2 && (C2 === x2 + 1 ? D2++ : C2 > x2 ? T2 > j2 - x2 ? D2 += C2 - x2 : D2-- : D2 = C2 < x2 && C2 == x2 - 1 ? C2 - x2 : 0), x2 = p2 + D2, "function" == typeof m2.type ? (C2 !== x2 || _.__k === m2.__k ? e2 = P(m2, e2, n2) : void 0 !== m2.__d ? e2 = m2.__d : g2 && (e2 = g2.nextSibling), m2.__d = void 0) : g2 && (e2 = C2 !== x2 || $ ? S(n2, g2, e2) : g2.nextSibling), "function" == typeof u2.type && (u2.__d = e2)) : (_ = H2[p2]) && null == _.key && _.__e && (_.__e == e2 && (e2 = b(_), "function" == typeof u2.type && (u2.__d = e2)), O(_, _, false), H2[p2] = null);
  for (u2.__e = w2, p2 = I2; p2--; )
    null != H2[p2] && ("function" == typeof u2.type && null != H2[p2].__e && H2[p2].__e == e2 && (u2.__d = H2[p2].__e.nextSibling), O(H2[p2], H2[p2]));
}
function P(n2, l2, u2) {
  for (var t2, i2 = n2.__k, o2 = 0; i2 && o2 < i2.length; o2++)
    (t2 = i2[o2]) && (t2.__ = n2, l2 = "function" == typeof t2.type ? P(t2, l2, u2) : S(u2, t2.__e, l2));
  return l2;
}
function S(n2, l2, u2) {
  return l2 != u2 && n2.insertBefore(l2, u2 || null), l2.nextSibling;
}
function A(n2, l2, u2, t2) {
  var i2 = n2.key, o2 = n2.type, r2 = u2 - 1, f2 = u2 + 1, e2 = l2[u2];
  if (null === e2 || e2 && i2 == e2.key && o2 === e2.type)
    return u2;
  if (t2 > (null != e2 ? 1 : 0))
    for (; r2 >= 0 || f2 < l2.length; ) {
      if (r2 >= 0) {
        if ((e2 = l2[r2]) && i2 == e2.key && o2 === e2.type)
          return r2;
        r2--;
      }
      if (f2 < l2.length) {
        if ((e2 = l2[f2]) && i2 == e2.key && o2 === e2.type)
          return f2;
        f2++;
      }
    }
  return -1;
}
function D(n2, l2, u2, t2, i2) {
  var o2;
  for (o2 in u2)
    "children" === o2 || "key" === o2 || o2 in l2 || I(n2, o2, null, u2[o2], t2);
  for (o2 in l2)
    i2 && "function" != typeof l2[o2] || "children" === o2 || "key" === o2 || "value" === o2 || "checked" === o2 || u2[o2] === l2[o2] || I(n2, o2, l2[o2], u2[o2], t2);
}
function H(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a.test(l2) ? u2 : u2 + "px";
}
function I(n2, l2, u2, t2, i2) {
  var o2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2)
          for (l2 in t2)
            u2 && l2 in u2 || H(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            t2 && u2[l2] === t2[l2] || H(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      o2 = l2 !== (l2 = l2.replace(/(PointerCapture)$|Capture$/, "$1")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = Date.now(), n2.addEventListener(l2, o2 ? j : T, o2)) : n2.removeEventListener(l2, o2 ? j : T, o2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (i2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && "rowSpan" !== l2 && "colSpan" !== l2 && "role" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function T(n2) {
  var u2 = this.l[n2.type + false];
  if (n2.t) {
    if (n2.t <= u2.u)
      return;
  } else
    n2.t = Date.now();
  return u2(l.event ? l.event(n2) : n2);
}
function j(n2) {
  return this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function z(n2, u2, t2, i2, o2, r2, f2, e2, c2, s2) {
  var a2, p2, y2, d2, _, b2, g2, w2, x2, P2, $, S2, A2, D2, H2, I2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != t2.__h && (c2 = t2.__h, e2 = u2.__e = t2.__e, u2.__h = null, r2 = [e2]), (a2 = l.__b) && a2(u2);
  n:
    if ("function" == typeof I2)
      try {
        if (w2 = u2.props, x2 = (a2 = I2.contextType) && i2[a2.__c], P2 = a2 ? x2 ? x2.props.value : a2.__ : i2, t2.__c ? g2 = (p2 = u2.__c = t2.__c).__ = p2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = p2 = new I2(w2, P2) : (u2.__c = p2 = new m(w2, P2), p2.constructor = I2, p2.render = q), x2 && x2.sub(p2), p2.props = w2, p2.state || (p2.state = {}), p2.context = P2, p2.__n = i2, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != I2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = h({}, p2.__s)), h(p2.__s, I2.getDerivedStateFromProps(w2, p2.__s))), d2 = p2.props, _ = p2.state, p2.__v = u2, y2)
          null == I2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
        else {
          if (null == I2.getDerivedStateFromProps && w2 !== d2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w2, P2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w2, p2.__s, P2) || u2.__v === t2.__v)) {
            for (u2.__v !== t2.__v && (p2.props = w2, p2.state = p2.__s, p2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), $ = 0; $ < p2._sb.length; $++)
              p2.__h.push(p2._sb[$]);
            p2._sb = [], p2.__h.length && f2.push(p2);
            break n;
          }
          null != p2.componentWillUpdate && p2.componentWillUpdate(w2, p2.__s, P2), null != p2.componentDidUpdate && p2.__h.push(function() {
            p2.componentDidUpdate(d2, _, b2);
          });
        }
        if (p2.context = P2, p2.props = w2, p2.__P = n2, p2.__e = false, S2 = l.__r, A2 = 0, "prototype" in I2 && I2.prototype.render) {
          for (p2.state = p2.__s, p2.__d = false, S2 && S2(u2), a2 = p2.render(p2.props, p2.state, p2.context), D2 = 0; D2 < p2._sb.length; D2++)
            p2.__h.push(p2._sb[D2]);
          p2._sb = [];
        } else
          do {
            p2.__d = false, S2 && S2(u2), a2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++A2 < 25);
        p2.state = p2.__s, null != p2.getChildContext && (i2 = h(h({}, i2), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (b2 = p2.getSnapshotBeforeUpdate(d2, _)), C(n2, v(H2 = null != a2 && a2.type === k && null == a2.key ? a2.props.children : a2) ? H2 : [H2], u2, t2, i2, o2, r2, f2, e2, c2, s2), p2.base = u2.__e, u2.__h = null, p2.__h.length && f2.push(p2), g2 && (p2.__E = p2.__ = null);
      } catch (n3) {
        u2.__v = null, c2 || null != r2 ? (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null) : (u2.__e = t2.__e, u2.__k = t2.__k), l.__e(n3, u2, t2);
      }
    else
      null == r2 && u2.__v === t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : u2.__e = M(t2.__e, u2, t2, i2, o2, r2, f2, c2, s2);
  (a2 = l.diffed) && a2(u2);
}
function L(n2, u2, t2) {
  u2.__d = void 0;
  for (var i2 = 0; i2 < t2.length; i2++)
    N(t2[i2], t2[++i2], t2[++i2]);
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function M(l2, u2, t2, i2, o2, r2, f2, e2, s2) {
  var a2, h2, y2, d2 = t2.props, _ = u2.props, k2 = u2.type, m2 = 0;
  if ("svg" === k2 && (o2 = true), null != r2) {
    for (; m2 < r2.length; m2++)
      if ((a2 = r2[m2]) && "setAttribute" in a2 == !!k2 && (k2 ? a2.localName === k2 : 3 === a2.nodeType)) {
        l2 = a2, r2[m2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === k2)
      return document.createTextNode(_);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", k2) : document.createElement(k2, _.is && _), r2 = null, e2 = false;
  }
  if (null === k2)
    d2 === _ || e2 && l2.data === _ || (l2.data = _);
  else {
    if (r2 = r2 && n.call(l2.childNodes), h2 = (d2 = t2.props || c).dangerouslySetInnerHTML, y2 = _.dangerouslySetInnerHTML, !e2) {
      if (null != r2)
        for (d2 = {}, m2 = 0; m2 < l2.attributes.length; m2++)
          d2[l2.attributes[m2].name] = l2.attributes[m2].value;
      (y2 || h2) && (y2 && (h2 && y2.__html == h2.__html || y2.__html === l2.innerHTML) || (l2.innerHTML = y2 && y2.__html || ""));
    }
    if (D(l2, _, d2, o2, e2), y2)
      u2.__k = [];
    else if (C(l2, v(m2 = u2.props.children) ? m2 : [m2], u2, t2, i2, o2 && "foreignObject" !== k2, r2, f2, r2 ? r2[0] : t2.__k && b(t2, 0), e2, s2), null != r2)
      for (m2 = r2.length; m2--; )
        null != r2[m2] && p(r2[m2]);
    e2 || ("value" in _ && void 0 !== (m2 = _.value) && (m2 !== l2.value || "progress" === k2 && !m2 || "option" === k2 && m2 !== d2.value) && I(l2, "value", m2, d2.value, false), "checked" in _ && void 0 !== (m2 = _.checked) && m2 !== l2.checked && I(l2, "checked", m2, d2.checked, false));
  }
  return l2;
}
function N(n2, u2, t2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function O(n2, u2, t2) {
  var i2, o2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || N(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u2);
      }
    i2.base = i2.__P = null, n2.__c = void 0;
  }
  if (i2 = n2.__k)
    for (o2 = 0; o2 < i2.length; o2++)
      i2[o2] && O(i2[o2], u2, t2 || "function" != typeof n2.type);
  t2 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l2, u2) {
  return this.constructor(n2, u2);
}
n = s.slice, l = { __e: function(n2, l2, u2, t2) {
  for (var i2, o2, r2; l2 = l2.__; )
    if ((i2 = l2.__c) && !i2.__)
      try {
        if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2)
          return i2.__E = i2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, m.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u2), this.props)), n2 && h(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), w(this));
}, m.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
}, m.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, x.__r = 0, e = 0;

// src/render/components/HelloWorld.tsx
function HelloWorld({}) {
  return /* @__PURE__ */ y("div", null, "Hello World");
}

// src/render/pages/index.tsx
function pages_default({}) {
  return /* @__PURE__ */ y("html", { lang: "en" }, /* @__PURE__ */ y("head", null, /* @__PURE__ */ y("meta", { charset: "UTF-8" }), /* @__PURE__ */ y("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), /* @__PURE__ */ y("title", null, "Electron App")), /* @__PURE__ */ y("body", null, /* @__PURE__ */ y(HelloWorld, null)));
}
export {
  pages_default as default
};
