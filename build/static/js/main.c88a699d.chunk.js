(this["webpackJsonpbmr-calculator"]=this["webpackJsonpbmr-calculator"]||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/logo-hb.184cc0c3.png"},15:function(e,a,t){e.exports=t(25)},20:function(e,a,t){},21:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(8),i=t.n(c),o=(t(20),t(2)),s=t(3),r=t(4),u=t(5),h=t(0),g=t(6),m=(t(21),t(22),t(13)),b=t.n(m),v=t(10),k=[1300,1600,1800,2e3,2300,2800],w=new RegExp(/^([1-9]|[0-9][.][0-9]|[1-9][.]|[1-9][.][0-9][0-9]|[1-9][0-9]|[1-9][0-9][.][0-9]|[1-9][0-9][0-9][.]|[1][0-9][0-9]|[1-9][0-9][.][0-9][0-9]|[1-9][1-9][.][0-9][0-9]|[1][0-9][0-9][.][0-9]|[1][0-9][0-9][.][0-9][0-9]|20[0-0])$/),d=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(r.a)(this,Object(u.a)(a).call(this,e))).state={plec:{value:-161,label:"Kobieta"},wzrost:"",waga:"",wiek:"",cel:{value:0,label:"Redukcja"},aktywnosc:{value:0,label:"Niska"},wynik:"",dieta:"",uzupelnijDane:!1},t.changePlec=t.changePlec.bind(Object(h.a)(t)),t.changeWzrost=t.changeWzrost.bind(Object(h.a)(t)),t.changeWiek=t.changeWiek.bind(Object(h.a)(t)),t.changeWaga=t.changeWaga.bind(Object(h.a)(t)),t.changeCel=t.changeCel.bind(Object(h.a)(t)),t.changeAktywnosc=t.changeAktywnosc.bind(Object(h.a)(t)),t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"changePlec",value:function(e){this.setState({plec:e})}},{key:"changeWzrost",value:function(e){(w.test(e.target.value)||""===e.target.value)&&this.setState({wzrost:e.target.value})}},{key:"changeWiek",value:function(e){(w.test(e.target.value)||""===e.target.value)&&this.setState({wiek:e.target.value})}},{key:"changeWaga",value:function(e){(w.test(e.target.value)||""===e.target.value)&&this.setState({waga:e.target.value})}},{key:"changeCel",value:function(e){this.setState({cel:e})}},{key:"changeAktywnosc",value:function(e){this.setState({aktywnosc:e})}},{key:"obliczZapotrzebowanie",value:function(){var e=this.state,a=e.plec,t=e.wzrost,n=e.waga,l=e.wiek,c=e.cel,i=e.aktywnosc;if(Boolean(t)&&Boolean(n)&&Boolean(l)){var o=6.25*t+9.99*n-4.92*l;o+=a.value,o+=c.value,o+=i.value,o=10*Math.ceil(o/10);var s=this.najblizszaDieta(o);this.setState({wynik:o+" kcal",dieta:s,uzupelnijDane:!1})}else this.setState({uzupelnijDane:!0})}},{key:"najblizszaDieta",value:function(e){var a=null;if("Utrzymanie wagi"===this.state.cel.label){for(var t=0;t<k.length;t++)if(e<k[t]){a=k[t-1];break}}else a=k.reduce((function(a,t){return Math.abs(t-e)<Math.abs(a-e)?t:a}));switch(console.log(a),a){case 1300:case 1600:return a+" kcal BASIC / WEGE";case 1800:return a+" kcal BASIC / WEGE / GYM";case 2e3:case 2300:return a+" kcal BASIC / WEGE";case 2800:return a+" kcal GYM"}}},{key:"render",value:function(){var e=this,a=this.state,t=a.plec,n=a.wzrost,c=a.waga,i=a.wiek,o=a.cel,s=a.aktywnosc,r=a.wynik,u=a.dieta,h=a.uzupelnijDane;return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:b.a,className:"img-fluid"})),l.a.createElement("div",{className:"bmr-calc"},l.a.createElement("label",null,"P\u0142e\u0107:"),l.a.createElement(v.a,{onChange:this.changePlec,defaultValue:t,options:[{value:-161,label:"Kobieta"},{value:5,label:"M\u0119\u017cczyzna"}]}),l.a.createElement("label",null,"Wiek:"),l.a.createElement("input",{className:"form-control",value:i,onChange:this.changeWiek}),l.a.createElement("label",null,"Waga:"),l.a.createElement("input",{className:"form-control",value:c,onChange:this.changeWaga}),l.a.createElement("label",null,"Wzrost:"),l.a.createElement("input",{className:"form-control",value:n,onChange:this.changeWzrost}),l.a.createElement("label",null,"Aktywno\u015b\u0107 fizyczna:"),l.a.createElement(v.a,{onChange:this.changeAktywnosc,defaultValue:s,options:[{value:0,label:"Niska"},{value:300,label:"\u015arednia"},{value:600,label:"Wysoka"}]}),l.a.createElement("label",null,"Cel:"),l.a.createElement(v.a,{onChange:this.changeCel,defaultValue:o,options:[{value:0,label:"Redukcja"},{value:300,label:"Utrzymanie wagi"},{value:600,label:"Masa"}]}),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.obliczZapotrzebowanie()}},"Oblicz zapotrzebowanie"),h?l.a.createElement("div",{className:"uzupelnijDane"},"Uzupe\u0142nij dane"):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"wynik"},""!==r?l.a.createElement("div",null,"Twoje zapotrzebowanie to: ",l.a.createElement("div",{className:"font-weight-bolder"},r)):null),l.a.createElement("div",{className:"dieta"},""!==u?l.a.createElement("div",null,"Proponowana dieta: ",l.a.createElement("div",{className:"font-weight-bolder"},u)):null),l.a.createElement("div",null,l.a.createElement("small",null,"Wyliczenia z powy\u017cszego kalkulatora s\u0105 wyliczeniami orientacyjnymi, nie nale\u017cy na nich bazowa\u0107 w 100%."))))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c88a699d.chunk.js.map