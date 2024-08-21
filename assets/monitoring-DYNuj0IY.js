import{_ as I,c,a as t,b as i,w as r,T as y,F as x,r as d,o as m,d as u,g as L,n as A,t as o,h as T,p as k,f as C}from"./index-Dmde9vMG.js";const P=""+new URL("../img/disable-block-insecure-private-network-requests.webp",import.meta.url).href,F={data(){return{loading:!1,connected:!1,printerAddress:localStorage.getItem("pinterAddress"),videoUrl:null,imgUrl:null,wsUrl:null,ws:null,hostname:null,deviceState:null,printFileName:null,printProgress:null,currentLayer:null,totalLayer:null,printStartTime:null,printJobTime:null,printLeftTime:null,nozzleTemp:null,bedTemp:null,boxTemp:null,usedMaterialLength:null,fanMain:!1,fanAuxiliary:!1,fanCase:!1,light:!1,showInstructions:!localStorage.getItem("ignoreInstructions"),addressRules:[s=>/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(s)||"IP inválido"]}},mounted(){this.printerAddress&&this.connect()},methods:{connect(){this.printerAddress&&(this.loading=!0,this.videoUrl=`http://${this.printerAddress}:8080/?action=stream`,this.imgUrl=`http://${this.printerAddress}/downloads/original/current_print_image.png`,this.wsUrl=`ws://${this.printerAddress}:9999`,this.ws=new WebSocket(this.wsUrl),this.ws.onopen=()=>{this.connected=!0,this.loading=!1},this.ws.onclose=()=>{this.connected=!1,this.loading=!1},this.ws.onmessage=s=>{if(!s.data)return;const e=JSON.parse(s.data);if(e.hostname&&(this.hostname=e.hostname),e.deviceState&&(this.deviceState=e.deviceState),e.layer&&(this.currentLayer=e.layer),e.TotalLayer&&(this.totalLayer=e.TotalLayer),e.printFileName){const a=e.printFileName.split("/");if(!(a!=null&&a.length))return;this.printFileName=a[a.length-1].replace(/\.gcode/i,"")}e.printStartTime&&(this.printStartTime=new Date(e.printStartTime*1e3)),e.printJobTime&&(this.printJobTime=e.printJobTime),e.printLeftTime&&(this.printLeftTime=e.printLeftTime),e.printProgress&&(this.printProgress=e.printProgress),e.nozzleTemp&&(this.nozzleTemp=parseFloat(e.nozzleTemp).toFixed(2)),e.bedTemp0&&(this.bedTemp=parseFloat(e.bedTemp0).toFixed(2)),e.boxTemp&&(this.boxTemp=parseFloat(e.boxTemp).toFixed(2)),e.usedMaterialLength&&(this.usedMaterialLength=e.usedMaterialLength),e.fan&&(this.fanMain=!!e.fan),e.fanAuxiliary&&(this.fanAuxiliary=!!e.fanAuxiliary),e.fanCase&&(this.fanCase=!!e.fanCase),e.lightSw!=null&&(this.light=!!e.lightSw),location.href.includes("log=true")&&console.log(e)},this.ws.onerror=s=>{this.connected=!1,this.loading=!1,this.$store.dispatch("openAlert",{color:"error",text:"Falha ao conectar com a impressora"}),console.log(s)})},saveAddress(){/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(this.printerAddress)&&(localStorage.setItem("pinterAddress",this.printerAddress),this.connect())},toggleLight(){this.light=!this.light,this.ws.send({method:"set",params:{lightSw:this.light?1:0}})},ignoreInstructions(){this.showInstructions=!1,localStorage.setItem("ignoreInstructions","true")},getDeviceState(){return this.deviceState==1?"Em uso":"Disponível"},getPrintStartTime(){var s;return(s=this.printStartTime)==null?void 0:s.toLocaleTimeString()},getPrintJobTime(){const s=parseInt((this.printJobTime??0)/60/60),e=parseInt((this.printJobTime??0)/60%60),a=parseInt((this.printJobTime??0)%60);return`${String(s).padStart(2,"0")}:${String(e).padStart(2,"0")}:${String(a).padStart(2,"0")}`},getPrintLeftTime(){const s=parseInt((this.printLeftTime??0)/60/60),e=parseInt((this.printLeftTime??0)/60%60),a=parseInt((this.printLeftTime??0)%60);return`${String(s).padStart(2,"0")}:${String(e).padStart(2,"0")}:${String(a).padStart(2,"0")}`}}},l=s=>(k("data-v-74316fcd"),s=s(),C(),s),z={ref:"camera"},U=l(()=>t("figcaption",null,"Câmera não conectada",-1)),J=["src"],N=["src"],D=l(()=>t("span",null,null,-1)),V=l(()=>t("span",null,"Início da impressão:",-1)),M=l(()=>t("span",null,"Tempo de impressão:",-1)),B=l(()=>t("span",null,"Tempo restante:",-1)),q=l(()=>t("span",null,"Identificação:",-1)),E=l(()=>t("span",null,"Status:",-1)),R=l(()=>t("span",null,"Temperatura do bico:",-1)),K={key:0},O=l(()=>t("span",null,"Temperatura da mesa:",-1)),W={key:0},j={key:0},G=l(()=>t("span",null,"Temperatura da câmara:",-1)),H={key:0,class:"banner elevation-12"},Q=l(()=>t("p",null,"Para que a câmera e a imagem da impressão funcionem, copie esse link no seu navegador:",-1)),X=l(()=>t("code",null,"chrome://flags#block-insecure-private-network-requests",-1)),Y=l(()=>t("p",null,[u("Altere essa opção para "),t("strong",null,"DISABLED"),u(", como na imagem abaixo:")],-1)),Z=l(()=>t("img",{src:P},null,-1));function $(s,e,a,ee,n,p){const h=d("v-card-title"),S=d("v-text-field"),f=d("v-card-text"),g=d("v-card"),b=d("v-divider"),v=d("v-icon"),w=d("v-btn");return m(),c(x,null,[t("main",null,[i(g,null,{default:r(()=>[i(h,null,{default:r(()=>[u(" Conexão ")]),_:1}),i(f,null,{default:r(()=>[i(S,{modelValue:n.printerAddress,"onUpdate:modelValue":e[0]||(e[0]=_=>n.printerAddress=_),rules:n.addressRules,loading:n.loading,label:"IP da impressora","append-inner-icon":"search",placeholder:"255.255.255.255","onClick:appendInner":e[1]||(e[1]=_=>p.saveAddress()),onKeyup:e[2]||(e[2]=L(_=>p.saveAddress(),["enter"]))},null,8,["modelValue","rules","loading"])]),_:1})]),_:1}),i(g,null,{default:r(()=>[i(h,null,{default:r(()=>[u(" Camera ")]),_:1}),i(f,null,{default:r(()=>[t("figure",z,[U,t("img",{src:n.videoUrl??"/img/empty.webp",onerror:"this.src='/img/empty.webp'",crossorigin:"anonymous"},null,8,J)],512)]),_:1})]),_:1}),i(g,null,{default:r(()=>[i(h,null,{default:r(()=>[u(" Impressão ")]),_:1}),i(f,null,{default:r(()=>[t("article",{style:A({"--progress":`${n.printProgress}%`})},[t("header",null,[t("span",null,o(n.printFileName),1)]),t("img",{src:n.imgUrl??"/img/bed.webp",onerror:"this.src='/img/bed.webp'",crossorigin:"anonymous"},null,8,N),D,t("footer",null,[t("span",null,o(n.printProgress??0)+"%",1),t("span",null,"Camada "+o(`${n.currentLayer??0} / ${n.totalLayer??0}`),1)])],4),t("p",null,[V,t("span",null,o(p.getPrintStartTime()),1)]),i(b),t("p",null,[M,t("span",null,o(p.getPrintJobTime()),1)]),t("p",null,[B,t("span",null,o(p.getPrintLeftTime()),1)])]),_:1})]),_:1}),i(g,null,{default:r(()=>[i(h,null,{default:r(()=>[u(" Impressora ")]),_:1}),i(f,null,{default:r(()=>[t("p",null,[q,t("span",null,o(n.hostname),1)]),t("p",null,[E,t("span",null,o(p.getDeviceState()),1)]),t("p",null,[R,n.nozzleTemp?(m(),c("span",K,o(n.nozzleTemp)+" °C",1)):T("",!0)]),t("p",null,[O,n.bedTemp?(m(),c("span",W,o(n.bedTemp)+" °C",1)):T("",!0)]),n.boxTemp?(m(),c("p",j,[G,t("span",null,o(n.boxTemp)+" °C",1)])):T("",!0)]),_:1})]),_:1})]),i(y,{name:"fade"},{default:r(()=>[n.showInstructions?(m(),c("footer",H,[Q,X,Y,Z,i(w,{block:"",onClick:e[3]||(e[3]=_=>p.ignoreInstructions())},{default:r(()=>[i(v,{icon:"check"}),u(" Não mostrar mais esse aviso")]),_:1})])):T("",!0)]),_:1})],64)}const ne=I(F,[["render",$],["__scopeId","data-v-74316fcd"]]);export{ne as default};
