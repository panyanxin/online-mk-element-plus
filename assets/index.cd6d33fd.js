import{d as v,r as B,a as i,o as A,c as C,b as r,w as l,u,E as _,j as a,e as s,g as y}from"./index.fe4b2a60.js";const x=[{type:"input",value:"",label:"\u7528\u6237\u540D",prop:"username",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:2,max:6,message:"\u7528\u6237\u540D\u57282-6\u4F4D\u4E4B\u95F4",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"",label:"\u5BC6\u7801",prop:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:6,max:15,message:"\u5BC6\u7801\u57286-15\u4F4D\u4E4B\u95F4",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placeholder:"\u8BF7\u9009\u62E9\u804C\u4F4D",prop:"role",label:"\u804C\u4F4D",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"\u804C\u4F4D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"option",label:"\u7ECF\u7406",value:"1"},{type:"option",label:"\u4E3B\u7BA1",value:"2"},{type:"option",label:"\u5458\u5DE5",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"\u7231\u597D",rules:[{required:!0,message:"\u7231\u597D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"checkbox",label:"\u8DB3\u7403",value:"1"},{type:"checkbox",label:"\u7BEE\u7403",value:"2"},{type:"checkbox",label:"\u6392\u7403",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"radio",label:"\u7537",value:"male"},{type:"radio",label:"\u5973",value:"female"},{type:"radio",label:"\u4FDD\u5BC6",value:"not"}]},{type:"upload",label:"\u4E0A\u4F20",prop:"pic",uploadAttrs:{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:!0,limit:3},rules:[{required:!0,message:"\u56FE\u7247\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},{type:"editor",value:"123",prop:"desc",label:"\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0",rules:[{required:!0,message:"\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}],k=s("Click to upload"),w=y("div",{style:{color:"#ccc","font-size":"12px"}},"jpg/png files with a size less than 500kb",-1),O=s("\u63D0\u4EA4"),R=s("\u91CD\u7F6E"),$=v({__name:"index",setup(q){let n=B(),c=e=>{e.form.validate(o=>{o?(console.log(e.model),a.success("\u63D0\u4EA4\u6210\u529F")):a.error("\u8868\u5355\u586B\u5199\u6709\u8BEF,\u8BF7\u68C0\u67E5")})},p=()=>{n.value.resetFields()},d=(e,o)=>{console.log("handleRemove"),console.log(e,o)},g=e=>{console.log("handlePreview"),console.log(e)},m=e=>(console.log("beforeRemove"),_.confirm(`Cancel the transfert of ${e.file.name} ?`)),h=e=>{console.log("handleExceed",e),a.warning(`The limit is 3, you selected ${e.files.length} files this time, add up to ${e.files.length+e.fileList.length} totally`)},F=e=>{console.log("success"),console.log(e)},f=e=>{console.log("change"),console.log(e)},b=e=>{console.log("handleBeforeUpload"),console.log(e)};return(e,o)=>{const t=i("el-button"),E=i("m-form");return A(),C("div",null,[r(E,{ref_key:"form",ref:n,"label-width":"100px",options:u(x),onOnChange:u(f),onBeforeUpload:u(b),onOnPreview:u(g),onOnRemove:u(d),onBeforeRemove:u(m),onOnSuccess:u(F),onOnExceed:u(h)},{uploadArea:l(()=>[r(t,{size:"small",type:"primary"},{default:l(()=>[k]),_:1})]),uploadTip:l(()=>[w]),action:l(D=>[r(t,{type:"primary",onClick:P=>u(c)(D)},{default:l(()=>[O]),_:2},1032,["onClick"]),r(t,{onClick:u(p)},{default:l(()=>[R]),_:1},8,["onClick"])]),_:1},8,["options","onOnChange","onBeforeUpload","onOnPreview","onOnRemove","onBeforeRemove","onOnSuccess","onOnExceed"])])}}});export{$ as default};
