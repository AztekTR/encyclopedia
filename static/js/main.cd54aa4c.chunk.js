(this.webpackJsonpencyclopedia=this.webpackJsonpencyclopedia||[]).push([[0],{17:function(e,t,a){e.exports={button:"ErrorModal_button__399pg",header:"ErrorModal_header__1KcdR",paragraph:"ErrorModal_paragraph__fyKs9"}},23:function(e,t,a){e.exports={button:"SuccessModal_button__3V0y1",header:"SuccessModal_header__OKjnA"}},32:function(e,t,a){},43:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(14),s=a.n(r),c=(a(32),a(9)),o=a(3),l=a(11),d=a(13),h=a(16),g={categories:JSON.parse(localStorage.getItem("categories"))||{birds:{name:"Birds",items:[{id:"1",header:"Owl",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Brazilian_burrowing_owl_%28Athene_cunicularia_grallaria%29.jpg/1200px-Brazilian_burrowing_owl_%28Athene_cunicularia_grallaria%29.jpg",text:"Owls are birds from the order Strigiformes /\u02c8str\u026ad\u0292\u026af\u0254\u02d0rmi\u02d0z/,\n    which includes over 200 species of mostly solitary and nocturnal birds\n    of prey typified by an upright stance, a large, broad head, binocular\n    vision, binaural hearing, sharp talons, and feathers adapted for silent flight.\n    Exceptions include the diurnal northern hawk-owl and the gregarious burrowing owl.\n    Owls possess large, forward-facing eyes and ear-holes, a hawk-like beak,\n    a flat face, and usually a conspicuous circle of feathers, a facial disc,\n    around each eye. The feathers making up this disc can be adjusted to\n    sharply focus sounds from varying distances onto the owls' asymmetrically\n    placed ear cavities. Most birds of prey have eyes on the sides of their heads,\n    but the stereoscopic nature of the owl's forward-facing eyes permits the\n    greater sense of depth perception necessary for low-light hunting.\n    Although owls have binocular vision, their large eyes are fixed in their\n    sockets\u2014as are those of most other birds\u2014so they must turn their entire \n    heads to change views. As owls are farsighted, they are unable to clearly\n    see anything within a few centimeters of their eyes. Caught prey can be\n    felt by owls with the use of filoplumes\u2014hairlike feathers on the beak\n    and feet that act as \"feelers\". Their far vision, particularly in low light,\n    is exceptionally good."}]},reptiles:{name:"Reptiles",items:[{id:"2",header:"Alligator",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/American_Alligator.jpg/450px-American_Alligator.jpg",text:"An average adult American alligator's weight and length is 360 kg (790 lb) and 4 m (13 ft),\n  but they sometimes grow to 4.4 m (14 ft) long and weigh over 450 kg (990 lb).\n  The largest ever recorded, found in Louisiana, measured 5.84 m (19.2 ft).\n  The Chinese alligator is smaller, rarely exceeding 2.1 m (7 ft) in length.\n  Additionally, it weighs considerably less, with males rarely over 45 kg (100 lb).\n  Adult alligators are black or dark olive-brown with white undersides, while juveniles\n  have bright yellow or whitish stripes which sharply contrast against their dark hides,\n  providing them additional camouflage amongst reeds and wetland grasses.\n  No average lifespan for an alligator has been measured. One of the oldest\n  recorded alligator lives was that of Saturn, an American alligator who\n  was born in 1936 in Mississippi and spent nearly a decade in Germany before\n  spending the majority of its life at the Moscow Zoo, where it died at the age \n  of 83 or 84 on 22 May 2020. Another one of the oldest lives on record\n  is that of Muja, an American alligator who was brought as adult specimen to\n  the Belgrade Zoo in Serbia from Germany in 1937. Although no valid records\n  exist about its date of birth, it is now in its 80s and possibly the oldest\n  alligator living in captivity."}]},fish:{name:"Fish",items:[]}},chosenCategory:"birds",status:"idle"};var b=Object(h.b)({name:"articlesSlice",initialState:g,reducers:{addArticle:function(e,t){var a=Object.keys(g.categories).map((function(e){return g.categories[e].items.length})).reduce((function(e,t){return e+t}))+1;e.categories[e.chosenCategory].items.push(Object(d.a)(Object(d.a)({},t.payload),{},{id:a.toString()})),function(e){localStorage.setItem("categories",JSON.stringify(e.categories))}(e)},chooseCategory:function(e,t){e.chosenCategory=t.payload}}}),u=b.actions,m=u.addArticle,j=u.chooseCategory,f=function(e){return e.articles.categories},p=b.reducer,O=a(1);function A(e){return Object(O.jsx)("li",{children:Object(O.jsxs)("details",{children:[Object(O.jsx)("summary",{className:"categories-section__category-name",children:e.name}),Object(O.jsx)("ul",{className:"categories-section__inside-list",children:0===e.categoryMap.length?"There are no articles in this category yet.":e.categoryMap.map((function(t){return Object(O.jsx)("li",{className:"categories-section__article-name",children:Object(O.jsx)(c.b,{to:"".concat("/encyclopedia","/").concat(e.name.toLowerCase(),"/").concat(t.id),children:t.header})},t.id)}))})]})})}a(43);var x=Object(o.g)((function(){var e=Object(l.c)(f);return Object(O.jsxs)("div",{className:"categories-section",children:[Object(O.jsx)("h1",{className:"main-header",children:"Categories"}),Object(O.jsx)("div",{className:"categories-section__body",children:Object(O.jsx)("ul",{className:"categories-section__outside-list",children:Object.keys(e).map((function(t){return Object(O.jsx)(A,{name:e[t].name,categoryMap:e[t].items},e[t].name)}))})})]})})),y=a(7),w=a(12),v=a.n(w),k=a(17),N=a.n(k),C={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"1.25rem 2rem",display:"flex",flexDirection:"column",alignItems:"center",border:"2px solid rgb(255, 60, 60)",backgroundColor:"rgb(255,228,225)"}};function M(e){var t=n.a.useState(!1),a=Object(y.a)(t,2),i=a[0],r=a[1];function s(){r(!1)}return n.a.useEffect((function(){e.isOpen&&r(!0)}),[e.isOpen]),Object(O.jsx)("div",{children:Object(O.jsxs)(v.a,{isOpen:i,onRequestClose:s,style:C,contentLabel:"Error Modal",children:[Object(O.jsx)("h2",{className:N.a.header,children:"Validation error!"}),Object(O.jsx)("p",{className:N.a.paragraph,children:e.message}),Object(O.jsx)("button",{className:N.a.button,onClick:s,children:"Close"})]})})}v.a.setAppElement(document.getElementById("root"));var S=a(23),_=a.n(S),B={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"1.25rem 2.25rem",display:"flex",flexDirection:"column",gap:"0.75rem",alignItems:"center",border:"2px solid rgb(60,183,120)",backgroundColor:"rgb(245,255,250)"}};function G(e){var t=n.a.useState(!1),a=Object(y.a)(t,2),i=a[0],r=a[1];function s(){r(!1)}return n.a.useEffect((function(){e.isOpen&&r(!0)}),[e.isOpen]),Object(O.jsx)("div",{children:Object(O.jsxs)(v.a,{isOpen:i,onRequestClose:s,style:B,contentLabel:"Error Modal",children:[Object(O.jsx)("h2",{className:_.a.header,children:"Success!"}),Object(O.jsx)("button",{className:_.a.button,onClick:s,children:"Close"})]})})}v.a.setAppElement(document.getElementById("root"));a(53);function I(){var e=/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i,t=Object(l.b)(),a=Object(i.useState)(""),r=Object(y.a)(a,2),s=r[0],c=r[1],o=Object(i.useState)(""),d=Object(y.a)(o,2),h=d[0],g=d[1],b=Object(i.useState)(""),u=Object(y.a)(b,2),f=u[0],p=u[1],A=Object(i.useState)({header:s,img:h,text:f}),x=Object(y.a)(A,2),w=x[0],v=x[1],k=n.a.useState(0),N=Object(y.a)(k,2),C=N[0],S=N[1],_=n.a.useState(""),B=Object(y.a)(_,2),I=B[0],R=B[1],K=n.a.useState(0),E=Object(y.a)(K,2),Y=E[0],Q=E[1];function X(){S(C+1)}return Object(O.jsxs)("div",{className:"add-article-section",children:[Object(O.jsx)("h1",{className:"main-header",children:"You can add new articles here"}),Object(O.jsxs)("div",{className:"form-container",children:[Object(O.jsxs)("div",{className:"form-container__small-inputs",children:[Object(O.jsx)("label",{className:"form-container__label",htmlFor:"category",children:"Choose category to add"}),Object(O.jsxs)("select",{id:"category",className:"form-container__select",onChange:function(e){return t(j(e.target.value))},children:[Object(O.jsx)("option",{value:"birds",children:"Birds"}),Object(O.jsx)("option",{value:"reptiles",children:"Reptiles"}),Object(O.jsx)("option",{value:"fish",children:"Fish"})]}),Object(O.jsx)("label",{className:"form-container__label",htmlFor:"article-header",children:"Enter the name of the animal"}),Object(O.jsx)("input",{id:"article-header",className:"form-container__input",type:"text",placeholder:"Article header",onChange:function(e){return c(e.target.value)}}),Object(O.jsx)("label",{className:"form-container__label",htmlFor:"article-image",children:"Enter the URL of the animal image"}),Object(O.jsx)("input",{id:"article-image",className:"form-container__input",type:"text",placeholder:"Image for the article",onChange:function(e){return g(e.target.value)}})]}),Object(O.jsxs)("div",{className:"form-container__big-inputs",children:[Object(O.jsx)("label",{className:"form-container__label",htmlFor:"article-text",children:"Tell us about this animal:"}),Object(O.jsx)("textarea",{className:"form-container__textarea",id:"article-text",rows:"11",cols:"40",defaultValue:"It was a big and black...",onChange:function(e){return p(e.target.value)}})]})]}),Object(O.jsx)("button",{className:"add-article-section__add-button",onClick:function(a){s&&h&&f?s.length>50?(R("Article header longer then 50 symbols."),X()):e.test(h)?(v(Object.assign(w,{header:s,img:h,text:f})),t(m(w)),Q(Y+1)):(R("Invalid image URL."),X()):(R("All fields must be filled!"),X())},children:"Add"}),Object(O.jsx)(M,{isOpen:C,message:I}),Object(O.jsx)(G,{isOpen:Y})]})}function R(){return Object(O.jsxs)("div",{className:"welcome-section",children:[Object(O.jsx)("h1",{className:"main-header",children:"Welcome to Encyclopedia!"}),Object(O.jsx)("p",{children:"It's a great collection of articles about animals in different categories."})]})}a(54);var K=Object(o.g)((function(){return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)(c.b,{to:"".concat("/encyclopedia","/"),children:Object(O.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",className:"header__image"})}),Object(O.jsx)(c.b,{to:"".concat("/encyclopedia","/categories"),className:"header__link",children:"Categories"}),Object(O.jsx)(c.b,{to:"".concat("/encyclopedia","/add"),className:"header__link",children:"Add new article"})]})}));a(55),a(56);function E(){var e=Object(l.c)(f),t=Object(o.f)(),a=t.id,n=t.category,r=Object(i.useMemo)((function(){return e[n].items.find((function(e){return e.id===a}))}),[e,n,a]);return console.log("article",r),Object(O.jsxs)("div",{className:"article-section",children:[Object(O.jsx)("h1",{className:"main-header",children:r.header}),Object(O.jsxs)("div",{className:"article-section__body",children:[Object(O.jsx)("img",{className:"article-section__image",src:r.img,alt:"animal"}),Object(O.jsx)("p",{className:"article-section__text",children:r.text})]})]})}var Y=function(){return Object(O.jsx)(c.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(K,{}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"".concat("/encyclopedia","/categories"),children:Object(O.jsx)(x,{})}),Object(O.jsx)(o.a,{path:"".concat("/encyclopedia","/add"),children:Object(O.jsx)(I,{})}),Object(O.jsx)(o.a,{path:"".concat("/encyclopedia","/:category/:id"),children:Object(O.jsx)(E,{})}),Object(O.jsx)(o.a,{path:"".concat("/encyclopedia","/"),children:Object(O.jsx)(R,{})})]})]})})},Q=Object(h.a)({reducer:{articles:p}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(l.a,{store:Q,children:Object(O.jsx)(Y,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.cd54aa4c.chunk.js.map