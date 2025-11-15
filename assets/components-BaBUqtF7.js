const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D_0uPbNC.js","assets/parseSignature-uvu3V_C2.js","assets/index-DiG5sY1s.js","assets/localBatchGatewayRequest-B1ZlxfyY.js","assets/hashTypedData-DOOQA3ar.js","assets/ccip-dtGRjEr1.js","assets/chunk-OIYGIGL5-sLubLBLN.js","assets/PhArrowCircleDown-gbV2vaLb.js","assets/property-DG_zVZHr.js","assets/PhArrowClockwise-Bg3BzyBs.js","assets/PhArrowDown-sE0mUGcs.js","assets/PhArrowLeft-cDekCY6D.js","assets/PhArrowRight-DUAIy7Fh.js","assets/PhArrowSquareOut-DVcJDuOr.js","assets/PhArrowsDownUp-BCeS_76Q.js","assets/PhArrowsLeftRight-B_xNg8kN.js","assets/PhArrowUp-DCv2rA8B.js","assets/PhArrowUpRight-_nUyALIJ.js","assets/PhArrowsClockwise-BGC-OSch.js","assets/PhBank-jlfK89TU.js","assets/PhBrowser-jsUyV2Ju.js","assets/PhCaretDown-TAeTvpa5.js","assets/PhCaretLeft-LcN4bWoG.js","assets/PhCaretRight-DNEs9RTt.js","assets/PhCaretUp-DENXO7HP.js","assets/PhCheck-CEGOFdcy.js","assets/PhCircleHalf-FpFX-N1p.js","assets/PhClock-EdkG2dc9.js","assets/PhCompass-BVxuDmKI.js","assets/PhCopy-B6cxk443.js","assets/PhCreditCard-BOcBt0Ep.js","assets/PhCurrencyDollar-DT3RluYJ.js","assets/PhDesktop-WP8uWM_0.js","assets/PhDeviceMobile-Bj9nv3dM.js","assets/PhDotsThree-DLQRtOq1.js","assets/PhVault-BvVEorLF.js","assets/PhEnvelope-BZlaU2rZ.js","assets/PhFunnelSimple-i-0_1qmz.js","assets/PhGlobe-CqATMjoP.js","assets/PhIdentificationCard-C2UaC_jE.js","assets/PhImage-BTIdlTqQ.js","assets/PhInfo-DfXM6WP2.js","assets/PhLightbulb-50ul1RGY.js","assets/PhMagnifyingGlass-mfL7k6Qx.js","assets/PhPaperPlaneRight-ChjuDsGR.js","assets/PhPlus-4Nw9uNRo.js","assets/PhPower-BluSf-fj.js","assets/PhPuzzlePiece-WR8BSxzn.js","assets/PhQrCode-BSmfZrGC.js","assets/PhQuestion-DeQL0FRC.js","assets/PhQuestionMark-CSwZELrx.js","assets/PhSealCheck-BEjFjmKA.js","assets/PhSignOut-Cgiis16w.js","assets/PhSpinner-CA-B2ona.js","assets/PhTrash-CxOOqvnh.js","assets/PhUser-DK-qAE6X.js","assets/PhWarning-S0Lsie3G.js","assets/PhWarningCircle-CQaWVwtU.js","assets/PhX-DI3cpm1T.js"])))=>i.map(i=>d[i]);
import{g as br,K as Uh,P as vn,R as tc}from"./chunk-OIYGIGL5-sLubLBLN.js";const wp="2.38.4";let wc={getDocsUrl:({docsBaseUrl:e,docsPath:t="",docsSlug:n})=>t?`${e??"https://viem.sh"}${t}${n?`#${n}`:""}`:void 0,version:`viem@${wp}`};class Be extends Error{constructor(t,n={}){const r=n.cause instanceof Be?n.cause.details:n.cause?.message?n.cause.message:n.details,o=n.cause instanceof Be&&n.cause.docsPath||n.docsPath,i=wc.getDocsUrl?.({...n,docsPath:o}),s=[t||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...i?[`Docs: ${i}`]:[],...r?[`Details: ${r}`]:[],...wc.version?[`Version: ${wc.version}`]:[]].join(`
`);super(s,n.cause?{cause:n.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=r,this.docsPath=o,this.metaMessages=n.metaMessages,this.name=n.name??this.name,this.shortMessage=t,this.version=wp}walk(t){return bp(this,t)}}function bp(e,t){return t?.(e)?e:e&&typeof e=="object"&&"cause"in e&&e.cause!==void 0?bp(e.cause,t):t?null:e}class Bh extends Be{constructor({max:t,min:n,signed:r,size:o,value:i}){super(`Number "${i}" is not in safe ${o?`${o*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${t?`(${n} to ${t})`:`(above ${n})`}`,{name:"IntegerOutOfRangeError"})}}class V5 extends Be{constructor(t){super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,{name:"InvalidBytesBooleanError"})}}class Wh extends Be{constructor(t){super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,{name:"InvalidHexBooleanError"})}}class jh extends Be{constructor({givenSize:t,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`,{name:"SizeOverflowError"})}}function yp(e,{strict:t=!0}={}){return!e||typeof e!="string"?!1:t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x")}function _d(e){return yp(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}function ra(e,{dir:t="left"}={}){let n=typeof e=="string"?e.replace("0x",""):e,r=0;for(let o=0;o<n.length-1&&n[t==="left"?o:n.length-o-1].toString()==="0";o++)r++;return n=t==="left"?n.slice(r):n.slice(0,n.length-r),typeof e=="string"?(n.length===1&&t==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class q5 extends Be{constructor({offset:t,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${r}).`,{name:"SliceOffsetOutOfBoundsError"})}}class vp extends Be{constructor({size:t,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`,{name:"SizeExceedsPaddingSizeError"})}}class K5 extends Be{constructor({size:t,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${n} ${r} long, but is ${t} ${r} long.`,{name:"InvalidBytesLengthError"})}}function Ji(e,{dir:t,size:n=32}={}){return typeof e=="string"?Fh(e,{dir:t,size:n}):zh(e,{dir:t,size:n})}function Fh(e,{dir:t,size:n=32}={}){if(n===null)return e;const r=e.replace("0x","");if(r.length>n*2)throw new vp({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[t==="right"?"padEnd":"padStart"](n*2,"0")}`}function zh(e,{dir:t,size:n=32}={}){if(n===null)return e;if(e.length>n)throw new vp({size:e.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let o=0;o<n;o++){const i=t==="right";r[i?o:n-o-1]=e[i?o:e.length-o-1]}return r}const Hh=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function G5(e,t={}){return typeof e=="number"||typeof e=="bigint"?Ep(e,t):typeof e=="string"?_p(e,t):typeof e=="boolean"?Vh(e,t):Cp(e,t)}function Vh(e,t={}){const n=`0x${Number(e)}`;return typeof t.size=="number"?(yr(n,{size:t.size}),Ji(n,{size:t.size})):n}function Cp(e,t={}){let n="";for(let o=0;o<e.length;o++)n+=Hh[e[o]];const r=`0x${n}`;return typeof t.size=="number"?(yr(r,{size:t.size}),Ji(r,{dir:"right",size:t.size})):r}function Ep(e,t={}){const{signed:n,size:r}=t,o=BigInt(e);let i;r?n?i=(1n<<BigInt(r)*8n-1n)-1n:i=2n**(BigInt(r)*8n)-1n:typeof e=="number"&&(i=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof i=="bigint"&&n?-i-1n:0;if(i&&o>i||o<s){const c=typeof e=="bigint"?"n":"";throw new Bh({max:i?`${i}${c}`:void 0,min:`${s}${c}`,signed:n,size:r,value:`${e}${c}`})}const a=`0x${(n&&o<0?(1n<<BigInt(r*8))+BigInt(o):o).toString(16)}`;return r?Ji(a,{size:r}):a}const qh=new TextEncoder;function _p(e,t={}){const n=qh.encode(e);return Cp(n,t)}const Kh=new TextEncoder;function Z5(e,t={}){return typeof e=="number"||typeof e=="bigint"?Zh(e,t):typeof e=="boolean"?Gh(e,t):yp(e)?jl(e,t):Yh(e,t)}function Gh(e,t={}){const n=new Uint8Array(1);return n[0]=Number(e),typeof t.size=="number"?(yr(n,{size:t.size}),Ji(n,{size:t.size})):n}const Un={zero:48,nine:57,A:65,F:70,a:97,f:102};function xd(e){if(e>=Un.zero&&e<=Un.nine)return e-Un.zero;if(e>=Un.A&&e<=Un.F)return e-(Un.A-10);if(e>=Un.a&&e<=Un.f)return e-(Un.a-10)}function jl(e,t={}){let n=e;t.size&&(yr(n,{size:t.size}),n=Ji(n,{dir:"right",size:t.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const o=r.length/2,i=new Uint8Array(o);for(let s=0,a=0;s<o;s++){const c=xd(r.charCodeAt(a++)),l=xd(r.charCodeAt(a++));if(c===void 0||l===void 0)throw new Be(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);i[s]=c*16+l}return i}function Zh(e,t){const n=Ep(e,t);return jl(n)}function Yh(e,t={}){const n=Kh.encode(e);return typeof t.size=="number"?(yr(n,{size:t.size}),Ji(n,{dir:"right",size:t.size})):n}function yr(e,{size:t}){if(_d(e)>t)throw new jh({givenSize:_d(e),maxSize:t})}function Jh(e,t={}){const{signed:n}=t;t.size&&yr(e,{size:t.size});const r=BigInt(e);if(!n)return r;const o=(e.length-2)/2,i=(1n<<BigInt(o)*8n-1n)-1n;return r<=i?r:r-BigInt(`0x${"f".padStart(o*2,"f")}`)-1n}function Y5(e,t={}){let n=e;if(t.size&&(yr(n,{size:t.size}),n=ra(n)),ra(n)==="0x00")return!1;if(ra(n)==="0x01")return!0;throw new Wh(n)}function J5(e,t={}){return Number(Jh(e,t))}function X5(e,t={}){let n=jl(e);return t.size&&(yr(n,{size:t.size}),n=ra(n,{dir:"right"})),new TextDecoder().decode(n)}const Q5={gwei:9,wei:18},Xh={ether:-9,wei:9},ev={ether:-18,gwei:-9};function Fl(e,t){let n=e.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(t,"0");let[o,i]=[n.slice(0,n.length-t),n.slice(n.length-t)];return i=i.replace(/(0+)$/,""),`${r?"-":""}${o||"0"}${i?`.${i}`:""}`}function pa(e,t="wei"){return Fl(e,Xh[t])}class zl extends Be{constructor({cause:t,message:n}={}){const r=n?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:t,name:"ExecutionRevertedError"})}}Object.defineProperty(zl,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(zl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Qh extends Be{constructor({cause:t,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${pa(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t,name:"FeeCapTooHighError"})}}Object.defineProperty(Qh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class ef extends Be{constructor({cause:t,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${pa(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t,name:"FeeCapTooLowError"})}}Object.defineProperty(ef,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class tf extends Be{constructor({cause:t,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:t,name:"NonceTooHighError"})}}Object.defineProperty(tf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class nf extends Be{constructor({cause:t,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:t,name:"NonceTooLowError"})}}Object.defineProperty(nf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class rf extends Be{constructor({cause:t,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:t,name:"NonceMaxValueError"})}}Object.defineProperty(rf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class of extends Be{constructor({cause:t}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."],name:"InsufficientFundsError"})}}Object.defineProperty(of,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds|exceeds transaction sender account balance/});class sf extends Be{constructor({cause:t,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t,name:"IntrinsicGasTooHighError"})}}Object.defineProperty(sf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class af extends Be{constructor({cause:t,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:t,name:"IntrinsicGasTooLowError"})}}Object.defineProperty(af,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class cf extends Be{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t,name:"TransactionTypeNotSupportedError"})}}Object.defineProperty(cf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class lf extends Be{constructor({cause:t,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${pa(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${pa(r)} gwei`:""}).`].join(`
`),{cause:t,name:"TipAboveFeeCapError"})}}Object.defineProperty(lf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class tv extends Be{constructor({cause:t}){super(`An error occurred while executing: ${t?.shortMessage}`,{cause:t,name:"UnknownNodeError"})}}class df extends Map{constructor(t){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=t}get(t){const n=super.get(t);return super.has(t)&&n!==void 0&&(this.delete(t),super.set(t,n)),n}set(t,n){if(super.set(t,n),this.maxSize&&this.size>this.maxSize){const r=this.keys().next().value;r&&this.delete(r)}return this}}const Mr=(e,t,n)=>JSON.stringify(e,(r,o)=>typeof o=="bigint"?o.toString():o,n),nv=e=>e,Hl=e=>e;class go extends Be{constructor({body:t,cause:n,details:r,headers:o,status:i,url:s}){super("HTTP request failed.",{cause:n,details:r,metaMessages:[i&&`Status: ${i}`,`URL: ${Hl(s)}`,t&&`Request body: ${Mr(t)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=o,this.status=i,this.url=s}}class xp extends Be{constructor({body:t,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${Hl(r)}`,`Request body: ${Mr(t)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code,this.data=n.data}}class Ad extends Be{constructor({body:t,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Hl(n)}`,`Request body: ${Mr(t)}`],name:"TimeoutError"})}}const uf=-1;class kt extends Be{constructor(t,{code:n,docsPath:r,metaMessages:o,name:i,shortMessage:s}){super(s,{cause:t,docsPath:r,metaMessages:o||t?.metaMessages,name:i||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=i||t.name,this.code=t instanceof xp?t.code:n??uf}}let Mt=class extends kt{constructor(t,n){super(t,n),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}};class Eo extends kt{constructor(t){super(t,{code:Eo.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(Eo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class _o extends kt{constructor(t){super(t,{code:_o.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(_o,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class xo extends kt{constructor(t,{method:n}={}){super(t,{code:xo.code,name:"MethodNotFoundRpcError",shortMessage:`The method${n?` "${n}"`:""} does not exist / is not available.`})}}Object.defineProperty(xo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class Ao extends kt{constructor(t){super(t,{code:Ao.code,name:"InvalidParamsRpcError",shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(Ao,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Li extends kt{constructor(t){super(t,{code:Li.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(Li,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class So extends kt{constructor(t){super(t,{code:So.code,name:"InvalidInputRpcError",shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(So,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class To extends kt{constructor(t){super(t,{code:To.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(To,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class No extends kt{constructor(t){super(t,{code:No.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(No,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class Di extends kt{constructor(t){super(t,{code:Di.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(Di,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Ir extends kt{constructor(t,{method:n}={}){super(t,{code:Ir.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${n?` "${n}"`:""} is not supported.`})}}Object.defineProperty(Ir,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class Mi extends kt{constructor(t){super(t,{code:Mi.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(Mi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class $o extends kt{constructor(t){super(t,{code:$o.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty($o,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});let wo=class Ap extends Mt{constructor(t){super(t,{code:Ap.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}};Object.defineProperty(wo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class Ro extends Mt{constructor(t){super(t,{code:Ro.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(Ro,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class ko extends Mt{constructor(t,{method:n}={}){super(t,{code:ko.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${n?` " ${n}"`:""}.`})}}Object.defineProperty(ko,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class Io extends Mt{constructor(t){super(t,{code:Io.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(Io,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class Oo extends Mt{constructor(t){super(t,{code:Oo.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(Oo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Po extends Mt{constructor(t){super(t,{code:Po.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(Po,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class Lo extends Mt{constructor(t){super(t,{code:Lo.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(Lo,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class Do extends Mt{constructor(t){super(t,{code:Do.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(Do,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class Mo extends Mt{constructor(t){super(t,{code:Mo.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(Mo,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class Uo extends Mt{constructor(t){super(t,{code:Uo.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(Uo,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class Bo extends Mt{constructor(t){super(t,{code:Bo.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty(Bo,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class Wo extends Mt{constructor(t){super(t,{code:Wo.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(Wo,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class jo extends Mt{constructor(t){super(t,{code:jo.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(jo,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class pf extends kt{constructor(t){super(t,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}var ia={exports:{}},hf=ia.exports,Sd;function ff(){return Sd||(Sd=1,(function(e,t){(function(n,r){e.exports=r()})(hf,function(){var n=1e3,r=6e4,o=36e5,i="millisecond",s="second",a="minute",c="hour",l="day",d="week",g="month",w="quarter",y="year",E="date",v="Invalid Date",x=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,I=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,R={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(K){var f=["th","st","nd","rd"],b=K%100;return"["+K+(f[(b-20)%10]||f[b]||f[0])+"]"}},L=function(K,f,b){var N=String(K);return!N||N.length>=f?K:""+Array(f+1-N.length).join(b)+K},C={s:L,z:function(K){var f=-K.utcOffset(),b=Math.abs(f),N=Math.floor(b/60),k=b%60;return(f<=0?"+":"-")+L(N,2,"0")+":"+L(k,2,"0")},m:function K(f,b){if(f.date()<b.date())return-K(b,f);var N=12*(b.year()-f.year())+(b.month()-f.month()),k=f.clone().add(N,g),H=b-k<0,q=f.clone().add(N+(H?-1:1),g);return+(-(N+(b-k)/(H?k-q:q-k))||0)},a:function(K){return K<0?Math.ceil(K)||0:Math.floor(K)},p:function(K){return{M:g,y,w:d,d:l,D:E,h:c,m:a,s,ms:i,Q:w}[K]||String(K||"").toLowerCase().replace(/s$/,"")},u:function(K){return K===void 0}},A="en",S={};S[A]=R;var O="$isDayjsObject",B=function(K){return K instanceof Q||!(!K||!K[O])},F=function K(f,b,N){var k;if(!f)return A;if(typeof f=="string"){var H=f.toLowerCase();S[H]&&(k=H),b&&(S[H]=b,k=H);var q=f.split("-");if(!k&&q.length>1)return K(q[0])}else{var be=f.name;S[be]=f,k=be}return!N&&k&&(A=k),k||!N&&A},W=function(K,f){if(B(K))return K.clone();var b=typeof f=="object"?f:{};return b.date=K,b.args=arguments,new Q(b)},V=C;V.l=F,V.i=B,V.w=function(K,f){return W(K,{locale:f.$L,utc:f.$u,x:f.$x,$offset:f.$offset})};var Q=(function(){function K(b){this.$L=F(b.locale,null,!0),this.parse(b),this.$x=this.$x||b.x||{},this[O]=!0}var f=K.prototype;return f.parse=function(b){this.$d=(function(N){var k=N.date,H=N.utc;if(k===null)return new Date(NaN);if(V.u(k))return new Date;if(k instanceof Date)return new Date(k);if(typeof k=="string"&&!/Z$/i.test(k)){var q=k.match(x);if(q){var be=q[2]-1||0,pe=(q[7]||"0").substring(0,3);return H?new Date(Date.UTC(q[1],be,q[3]||1,q[4]||0,q[5]||0,q[6]||0,pe)):new Date(q[1],be,q[3]||1,q[4]||0,q[5]||0,q[6]||0,pe)}}return new Date(k)})(b),this.init()},f.init=function(){var b=this.$d;this.$y=b.getFullYear(),this.$M=b.getMonth(),this.$D=b.getDate(),this.$W=b.getDay(),this.$H=b.getHours(),this.$m=b.getMinutes(),this.$s=b.getSeconds(),this.$ms=b.getMilliseconds()},f.$utils=function(){return V},f.isValid=function(){return this.$d.toString()!==v},f.isSame=function(b,N){var k=W(b);return this.startOf(N)<=k&&k<=this.endOf(N)},f.isAfter=function(b,N){return W(b)<this.startOf(N)},f.isBefore=function(b,N){return this.endOf(N)<W(b)},f.$g=function(b,N,k){return V.u(b)?this[N]:this.set(k,b)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(b,N){var k=this,H=!!V.u(N)||N,q=V.p(b),be=function(dt,ke){var it=V.w(k.$u?Date.UTC(k.$y,ke,dt):new Date(k.$y,ke,dt),k);return H?it:it.endOf(l)},pe=function(dt,ke){return V.w(k.toDate()[dt].apply(k.toDate("s"),(H?[0,0,0,0]:[23,59,59,999]).slice(ke)),k)},Ae=this.$W,G=this.$M,_e=this.$D,Qe="set"+(this.$u?"UTC":"");switch(q){case y:return H?be(1,0):be(31,11);case g:return H?be(1,G):be(0,G+1);case d:var Ye=this.$locale().weekStart||0,Xe=(Ae<Ye?Ae+7:Ae)-Ye;return be(H?_e-Xe:_e+(6-Xe),G);case l:case E:return pe(Qe+"Hours",0);case c:return pe(Qe+"Minutes",1);case a:return pe(Qe+"Seconds",2);case s:return pe(Qe+"Milliseconds",3);default:return this.clone()}},f.endOf=function(b){return this.startOf(b,!1)},f.$set=function(b,N){var k,H=V.p(b),q="set"+(this.$u?"UTC":""),be=(k={},k[l]=q+"Date",k[E]=q+"Date",k[g]=q+"Month",k[y]=q+"FullYear",k[c]=q+"Hours",k[a]=q+"Minutes",k[s]=q+"Seconds",k[i]=q+"Milliseconds",k)[H],pe=H===l?this.$D+(N-this.$W):N;if(H===g||H===y){var Ae=this.clone().set(E,1);Ae.$d[be](pe),Ae.init(),this.$d=Ae.set(E,Math.min(this.$D,Ae.daysInMonth())).$d}else be&&this.$d[be](pe);return this.init(),this},f.set=function(b,N){return this.clone().$set(b,N)},f.get=function(b){return this[V.p(b)]()},f.add=function(b,N){var k,H=this;b=Number(b);var q=V.p(N),be=function(G){var _e=W(H);return V.w(_e.date(_e.date()+Math.round(G*b)),H)};if(q===g)return this.set(g,this.$M+b);if(q===y)return this.set(y,this.$y+b);if(q===l)return be(1);if(q===d)return be(7);var pe=(k={},k[a]=r,k[c]=o,k[s]=n,k)[q]||1,Ae=this.$d.getTime()+b*pe;return V.w(Ae,this)},f.subtract=function(b,N){return this.add(-1*b,N)},f.format=function(b){var N=this,k=this.$locale();if(!this.isValid())return k.invalidDate||v;var H=b||"YYYY-MM-DDTHH:mm:ssZ",q=V.z(this),be=this.$H,pe=this.$m,Ae=this.$M,G=k.weekdays,_e=k.months,Qe=k.meridiem,Ye=function(ke,it,en,Sr){return ke&&(ke[it]||ke(N,H))||en[it].slice(0,Sr)},Xe=function(ke){return V.s(be%12||12,ke,"0")},dt=Qe||function(ke,it,en){var Sr=ke<12?"AM":"PM";return en?Sr.toLowerCase():Sr};return H.replace(I,function(ke,it){return it||(function(en){switch(en){case"YY":return String(N.$y).slice(-2);case"YYYY":return V.s(N.$y,4,"0");case"M":return Ae+1;case"MM":return V.s(Ae+1,2,"0");case"MMM":return Ye(k.monthsShort,Ae,_e,3);case"MMMM":return Ye(_e,Ae);case"D":return N.$D;case"DD":return V.s(N.$D,2,"0");case"d":return String(N.$W);case"dd":return Ye(k.weekdaysMin,N.$W,G,2);case"ddd":return Ye(k.weekdaysShort,N.$W,G,3);case"dddd":return G[N.$W];case"H":return String(be);case"HH":return V.s(be,2,"0");case"h":return Xe(1);case"hh":return Xe(2);case"a":return dt(be,pe,!0);case"A":return dt(be,pe,!1);case"m":return String(pe);case"mm":return V.s(pe,2,"0");case"s":return String(N.$s);case"ss":return V.s(N.$s,2,"0");case"SSS":return V.s(N.$ms,3,"0");case"Z":return q}return null})(ke)||q.replace(":","")})},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(b,N,k){var H,q=this,be=V.p(N),pe=W(b),Ae=(pe.utcOffset()-this.utcOffset())*r,G=this-pe,_e=function(){return V.m(q,pe)};switch(be){case y:H=_e()/12;break;case g:H=_e();break;case w:H=_e()/3;break;case d:H=(G-Ae)/6048e5;break;case l:H=(G-Ae)/864e5;break;case c:H=G/o;break;case a:H=G/r;break;case s:H=G/n;break;default:H=G}return k?H:V.a(H)},f.daysInMonth=function(){return this.endOf(g).$D},f.$locale=function(){return S[this.$L]},f.locale=function(b,N){if(!b)return this.$L;var k=this.clone(),H=F(b,N,!0);return H&&(k.$L=H),k},f.clone=function(){return V.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},K})(),ce=Q.prototype;return W.prototype=ce,[["$ms",i],["$s",s],["$m",a],["$H",c],["$W",l],["$M",g],["$y",y],["$D",E]].forEach(function(K){ce[K[1]]=function(f){return this.$g(f,K[0],K[1])}}),W.extend=function(K,f){return K.$i||(K(f,Q,W),K.$i=!0),W},W.locale=F,W.isDayjs=B,W.unix=function(K){return W(1e3*K)},W.en=S[A],W.Ls=S,W.p={},W})})(ia)),ia.exports}var mf=ff();const ki=br(mf);var oa={exports:{}},gf=oa.exports,Td;function wf(){return Td||(Td=1,(function(e,t){(function(n,r){e.exports=r()})(gf,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var r=["th","st","nd","rd"],o=n%100;return"["+n+(r[(o-20)%10]||r[o]||r[0])+"]"}}})})(oa)),oa.exports}var bf=wf();const yf=br(bf);var sa={exports:{}},vf=sa.exports,Nd;function Cf(){return Nd||(Nd=1,(function(e,t){(function(n,r){e.exports=r()})(vf,function(){return function(n,r,o){n=n||{};var i=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,d,g,w){return i.fromToBase(l,d,g,w)}o.en.relativeTime=s,i.fromToBase=function(l,d,g,w,y){for(var E,v,x,I=g.$locale().relativeTime||s,R=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],L=R.length,C=0;C<L;C+=1){var A=R[C];A.d&&(E=w?o(l).diff(g,A.d,!0):g.diff(l,A.d,!0));var S=(n.rounding||Math.round)(Math.abs(E));if(x=E>0,S<=A.r||!A.r){S<=1&&C>0&&(A=R[C-1]);var O=I[A.l];y&&(S=y(""+S)),v=typeof O=="string"?O.replace("%d",S):O(S,d,A.l,x);break}}if(d)return v;var B=x?I.future:I.past;return typeof B=="function"?B(v):B.replace("%s",v)},i.to=function(l,d){return a(l,d,this,!0)},i.from=function(l,d){return a(l,d,this)};var c=function(l){return l.$u?o.utc():o()};i.toNow=function(l){return this.to(c(this),l)},i.fromNow=function(l){return this.from(c(this),l)}}})})(sa)),sa.exports}var Ef=Cf();const _f=br(Ef);var aa={exports:{}},xf=aa.exports,$d;function Af(){return $d||($d=1,(function(e,t){(function(n,r){e.exports=r()})(xf,function(){return function(n,r,o){o.updateLocale=function(i,s){var a=o.Ls[i];if(a)return(s?Object.keys(s):[]).forEach(function(c){a[c]=s[c]}),a}}})})(aa)),aa.exports}var Sf=Af();const Tf=br(Sf);ki.extend(_f);ki.extend(Tf);const Nf={...yf,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},$f=["January","February","March","April","May","June","July","August","September","October","November","December"];ki.locale("en-web3-modal",Nf);const cl={getMonthNameByIndex(e){return $f[e]},getYear(e=new Date().toISOString()){return ki(e).year()},getRelativeDateFromNow(e){return ki(e).locale("en-web3-modal").fromNow(!0)},formatDate(e,t="DD MMM"){return ki(e).format(t)}};var Rd={};const z={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos",sui:"Sui",stacks:"Stacks"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],SOLANA_SPL_TOKEN_ADDRESSES:{SOL:"So11111111111111111111111111111111111111112"},HTTP_STATUS_CODES:{SERVER_ERROR:500,TOO_MANY_REQUESTS:429,SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network",SECURE_SITE_SDK_ORIGIN:(typeof process<"u"&&typeof Rd<"u"?Rd.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",REMOTE_FEATURES_ALERTS:{MULTI_WALLET_NOT_ENABLED:{DEFAULT:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."},CONNECTIONS_HOOK:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."},CONNECTION_HOOK:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."}}},IS_DEVELOPMENT:typeof process<"u"&&!1,DEFAULT_ALLOWED_ANCESTORS:["http://localhost:*","https://localhost:*","http://127.0.0.1:*","https://127.0.0.1:*","https://*.pages.dev","https://*.vercel.app","https://*.ngrok-free.app","https://secure-mobile.walletconnect.com","https://secure-mobile.walletconnect.org"]},Rf={caipNetworkIdToNumber(e){return e?Number(e.split(":")[1]):void 0},parseEvmChainId(e){return typeof e=="string"?this.caipNetworkIdToNumber(e):e},getNetworksByNamespace(e,t){return e?.filter(n=>n.chainNamespace===t)||[]},getFirstNetworkByNamespace(e,t){return this.getNetworksByNamespace(e,t)[0]},getNetworkNameByCaipNetworkId(e,t){if(!t)return;const n=e.find(o=>o.caipNetworkId===t);if(n)return n.name;const[r]=t.split(":");return z.CHAIN_NAME_MAP?.[r]||void 0}},Sp=["eip155","solana","polkadot","bip122","cosmos","sui","stacks"];var kf=20,If=1,Wr=1e6,kd=1e6,Of=-7,Pf=21,Lf=!1,gs="[big.js] ",pi=gs+"Invalid ",nc=pi+"decimal places",Df=pi+"rounding mode",Tp=gs+"Division by zero",Ue={},xn=void 0,Mf=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function Np(){function e(t){var n=this;if(!(n instanceof e))return t===xn?Np():new e(t);if(t instanceof e)n.s=t.s,n.e=t.e,n.c=t.c.slice();else{if(typeof t!="string"){if(e.strict===!0&&typeof t!="bigint")throw TypeError(pi+"value");t=t===0&&1/t<0?"-0":String(t)}Uf(n,t)}n.constructor=e}return e.prototype=Ue,e.DP=kf,e.RM=If,e.NE=Of,e.PE=Pf,e.strict=Lf,e.roundDown=0,e.roundHalfUp=1,e.roundHalfEven=2,e.roundUp=3,e}function Uf(e,t){var n,r,o;if(!Mf.test(t))throw Error(pi+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(n=t.indexOf("."))>-1&&(t=t.replace(".","")),(r=t.search(/e/i))>0?(n<0&&(n=r),n+=+t.slice(r+1),t=t.substring(0,r)):n<0&&(n=t.length),o=t.length,r=0;r<o&&t.charAt(r)=="0";)++r;if(r==o)e.c=[e.e=0];else{for(;o>0&&t.charAt(--o)=="0";);for(e.e=n-r-1,e.c=[],n=0;r<=o;)e.c[n++]=+t.charAt(r++)}return e}function hi(e,t,n,r){var o=e.c;if(n===xn&&(n=e.constructor.RM),n!==0&&n!==1&&n!==2&&n!==3)throw Error(Df);if(t<1)r=n===3&&(r||!!o[0])||t===0&&(n===1&&o[0]>=5||n===2&&(o[0]>5||o[0]===5&&(r||o[1]!==xn))),o.length=1,r?(e.e=e.e-t+1,o[0]=1):o[0]=e.e=0;else if(t<o.length){if(r=n===1&&o[t]>=5||n===2&&(o[t]>5||o[t]===5&&(r||o[t+1]!==xn||o[t-1]&1))||n===3&&(r||!!o[0]),o.length=t,r){for(;++o[--t]>9;)if(o[t]=0,t===0){++e.e,o.unshift(1);break}}for(t=o.length;!o[--t];)o.pop()}return e}function fi(e,t,n){var r=e.e,o=e.c.join(""),i=o.length;if(t)o=o.charAt(0)+(i>1?"."+o.slice(1):"")+(r<0?"e":"e+")+r;else if(r<0){for(;++r;)o="0"+o;o="0."+o}else if(r>0)if(++r>i)for(r-=i;r--;)o+="0";else r<i&&(o=o.slice(0,r)+"."+o.slice(r));else i>1&&(o=o.charAt(0)+"."+o.slice(1));return e.s<0&&n?"-"+o:o}Ue.abs=function(){var e=new this.constructor(this);return e.s=1,e};Ue.cmp=function(e){var t,n=this,r=n.c,o=(e=new n.constructor(e)).c,i=n.s,s=e.s,a=n.e,c=e.e;if(!r[0]||!o[0])return r[0]?i:o[0]?-s:0;if(i!=s)return i;if(t=i<0,a!=c)return a>c^t?1:-1;for(s=(a=r.length)<(c=o.length)?a:c,i=-1;++i<s;)if(r[i]!=o[i])return r[i]>o[i]^t?1:-1;return a==c?0:a>c^t?1:-1};Ue.div=function(e){var t=this,n=t.constructor,r=t.c,o=(e=new n(e)).c,i=t.s==e.s?1:-1,s=n.DP;if(s!==~~s||s<0||s>Wr)throw Error(nc);if(!o[0])throw Error(Tp);if(!r[0])return e.s=i,e.c=[e.e=0],e;var a,c,l,d,g,w=o.slice(),y=a=o.length,E=r.length,v=r.slice(0,a),x=v.length,I=e,R=I.c=[],L=0,C=s+(I.e=t.e-e.e)+1;for(I.s=i,i=C<0?0:C,w.unshift(0);x++<a;)v.push(0);do{for(l=0;l<10;l++){if(a!=(x=v.length))d=a>x?1:-1;else for(g=-1,d=0;++g<a;)if(o[g]!=v[g]){d=o[g]>v[g]?1:-1;break}if(d<0){for(c=x==a?o:w;x;){if(v[--x]<c[x]){for(g=x;g&&!v[--g];)v[g]=9;--v[g],v[x]+=10}v[x]-=c[x]}for(;!v[0];)v.shift()}else break}R[L++]=d?l:++l,v[0]&&d?v[x]=r[y]||0:v=[r[y]]}while((y++<E||v[0]!==xn)&&i--);return!R[0]&&L!=1&&(R.shift(),I.e--,C--),L>C&&hi(I,C,n.RM,v[0]!==xn),I};Ue.eq=function(e){return this.cmp(e)===0};Ue.gt=function(e){return this.cmp(e)>0};Ue.gte=function(e){return this.cmp(e)>-1};Ue.lt=function(e){return this.cmp(e)<0};Ue.lte=function(e){return this.cmp(e)<1};Ue.minus=Ue.sub=function(e){var t,n,r,o,i=this,s=i.constructor,a=i.s,c=(e=new s(e)).s;if(a!=c)return e.s=-c,i.plus(e);var l=i.c.slice(),d=i.e,g=e.c,w=e.e;if(!l[0]||!g[0])return g[0]?e.s=-c:l[0]?e=new s(i):e.s=1,e;if(a=d-w){for((o=a<0)?(a=-a,r=l):(w=d,r=g),r.reverse(),c=a;c--;)r.push(0);r.reverse()}else for(n=((o=l.length<g.length)?l:g).length,a=c=0;c<n;c++)if(l[c]!=g[c]){o=l[c]<g[c];break}if(o&&(r=l,l=g,g=r,e.s=-e.s),(c=(n=g.length)-(t=l.length))>0)for(;c--;)l[t++]=0;for(c=t;n>a;){if(l[--n]<g[n]){for(t=n;t&&!l[--t];)l[t]=9;--l[t],l[n]+=10}l[n]-=g[n]}for(;l[--c]===0;)l.pop();for(;l[0]===0;)l.shift(),--w;return l[0]||(e.s=1,l=[w=0]),e.c=l,e.e=w,e};Ue.mod=function(e){var t,n=this,r=n.constructor,o=n.s,i=(e=new r(e)).s;if(!e.c[0])throw Error(Tp);return n.s=e.s=1,t=e.cmp(n)==1,n.s=o,e.s=i,t?new r(n):(o=r.DP,i=r.RM,r.DP=r.RM=0,n=n.div(e),r.DP=o,r.RM=i,this.minus(n.times(e)))};Ue.neg=function(){var e=new this.constructor(this);return e.s=-e.s,e};Ue.plus=Ue.add=function(e){var t,n,r,o=this,i=o.constructor;if(e=new i(e),o.s!=e.s)return e.s=-e.s,o.minus(e);var s=o.e,a=o.c,c=e.e,l=e.c;if(!a[0]||!l[0])return l[0]||(a[0]?e=new i(o):e.s=o.s),e;if(a=a.slice(),t=s-c){for(t>0?(c=s,r=l):(t=-t,r=a),r.reverse();t--;)r.push(0);r.reverse()}for(a.length-l.length<0&&(r=l,l=a,a=r),t=l.length,n=0;t;a[t]%=10)n=(a[--t]=a[t]+l[t]+n)/10|0;for(n&&(a.unshift(n),++c),t=a.length;a[--t]===0;)a.pop();return e.c=a,e.e=c,e};Ue.pow=function(e){var t=this,n=new t.constructor("1"),r=n,o=e<0;if(e!==~~e||e<-kd||e>kd)throw Error(pi+"exponent");for(o&&(e=-e);e&1&&(r=r.times(t)),e>>=1,!!e;)t=t.times(t);return o?n.div(r):r};Ue.prec=function(e,t){if(e!==~~e||e<1||e>Wr)throw Error(pi+"precision");return hi(new this.constructor(this),e,t)};Ue.round=function(e,t){if(e===xn)e=0;else if(e!==~~e||e<-Wr||e>Wr)throw Error(nc);return hi(new this.constructor(this),e+this.e+1,t)};Ue.sqrt=function(){var e,t,n,r=this,o=r.constructor,i=r.s,s=r.e,a=new o("0.5");if(!r.c[0])return new o(r);if(i<0)throw Error(gs+"No square root");i=Math.sqrt(+fi(r,!0,!0)),i===0||i===1/0?(t=r.c.join(""),t.length+s&1||(t+="0"),i=Math.sqrt(t),s=((s+1)/2|0)-(s<0||s&1),e=new o((i==1/0?"5e":(i=i.toExponential()).slice(0,i.indexOf("e")+1))+s)):e=new o(i+""),s=e.e+(o.DP+=4);do n=e,e=a.times(n.plus(r.div(n)));while(n.c.slice(0,s).join("")!==e.c.slice(0,s).join(""));return hi(e,(o.DP-=4)+e.e+1,o.RM)};Ue.times=Ue.mul=function(e){var t,n=this,r=n.constructor,o=n.c,i=(e=new r(e)).c,s=o.length,a=i.length,c=n.e,l=e.e;if(e.s=n.s==e.s?1:-1,!o[0]||!i[0])return e.c=[e.e=0],e;for(e.e=c+l,s<a&&(t=o,o=i,i=t,l=s,s=a,a=l),t=new Array(l=s+a);l--;)t[l]=0;for(c=a;c--;){for(a=0,l=s+c;l>c;)a=t[l]+i[c]*o[l-c-1]+a,t[l--]=a%10,a=a/10|0;t[l]=a}for(a?++e.e:t.shift(),c=t.length;!t[--c];)t.pop();return e.c=t,e};Ue.toExponential=function(e,t){var n=this,r=n.c[0];if(e!==xn){if(e!==~~e||e<0||e>Wr)throw Error(nc);for(n=hi(new n.constructor(n),++e,t);n.c.length<e;)n.c.push(0)}return fi(n,!0,!!r)};Ue.toFixed=function(e,t){var n=this,r=n.c[0];if(e!==xn){if(e!==~~e||e<0||e>Wr)throw Error(nc);for(n=hi(new n.constructor(n),e+n.e+1,t),e=e+n.e+1;n.c.length<e;)n.c.push(0)}return fi(n,!1,!!r)};Ue[Symbol.for("nodejs.util.inspect.custom")]=Ue.toJSON=Ue.toString=function(){var e=this,t=e.constructor;return fi(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])};Ue.toNumber=function(){var e=+fi(this,!0,!0);if(this.constructor.strict===!0&&!this.eq(e.toString()))throw Error(gs+"Imprecise conversion");return e};Ue.toPrecision=function(e,t){var n=this,r=n.constructor,o=n.c[0];if(e!==xn){if(e!==~~e||e<1||e>Wr)throw Error(pi+"precision");for(n=hi(new r(n),e,t);n.c.length<e;)n.c.push(0)}return fi(n,e<=n.e||n.e<=r.NE||n.e>=r.PE,!!o)};Ue.valueOf=function(){var e=this,t=e.constructor;if(t.strict===!0)throw Error(gs+"valueOf disallowed");return fi(e,e.e<=t.NE||e.e>=t.PE,!0)};var ir=Np();const Fo={bigNumber(e){return e?new ir(e):new ir(0)},multiply(e,t){if(e===void 0||t===void 0)return new ir(0);const n=new ir(e),r=new ir(t);return n.times(r)},toFixed(e,t=2){return e===void 0||e===""?new ir(0).toFixed(t):new ir(e).toFixed(t)},formatNumberToLocalString(e,t=2){return e===void 0||e===""?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t,roundingMode:"floor"}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t,roundingMode:"floor"})},parseLocalStringToNumber(e){if(e===void 0||e==="")return 0;const t=e.replace(/,/gu,"");return new ir(t).toNumber()}},Bf=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Wf=[{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],jf=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Ff={getERC20Abi:e=>z.USDT_CONTRACT_ADDRESSES.includes(e)?jf:Bf,getSwapAbi:()=>Wf},zf={URLS:{FAQ:"https://walletconnect.com/faq"}},sn={validateCaipAddress(e){if(e.split(":")?.length!==3)throw new Error("Invalid CAIP Address");return e},parseCaipAddress(e){const t=e.split(":");if(t.length!==3)throw new Error(`Invalid CAIP-10 address: ${e}`);const[n,r,o]=t;if(!n||!r||!o)throw new Error(`Invalid CAIP-10 address: ${e}`);return{chainNamespace:n,chainId:r,address:o}},parseCaipNetworkId(e){const t=e.split(":");if(t.length!==2)throw new Error(`Invalid CAIP-2 network id: ${e}`);const[n,r]=t;if(!n||!r)throw new Error(`Invalid CAIP-2 network id: ${e}`);return{chainNamespace:n,chainId:r}}},Ht={RPC_ERROR_CODE:{USER_REJECTED_REQUEST:4001,USER_REJECTED_METHODS:5002,USER_REJECTED:5e3},PROVIDER_RPC_ERROR_NAME:{PROVIDER_RPC:"ProviderRpcError",USER_REJECTED_REQUEST:"UserRejectedRequestError"},isRpcProviderError(e){try{if(typeof e=="object"&&e!==null){const t=e,n=typeof t.message=="string",r=typeof t.code=="number";return n&&r}return!1}catch{return!1}},isUserRejectedMessage(e){return e.toLowerCase().includes("user rejected")||e.toLowerCase().includes("user cancelled")||e.toLowerCase().includes("user canceled")},isUserRejectedRequestError(e){if(Ht.isRpcProviderError(e)){const t=e.code===Ht.RPC_ERROR_CODE.USER_REJECTED_REQUEST,n=e.code===Ht.RPC_ERROR_CODE.USER_REJECTED_METHODS;return t||n||Ht.isUserRejectedMessage(e.message)}return e instanceof Error?Ht.isUserRejectedMessage(e.message):!1}};class Hf extends Error{constructor(t,n){super(n.message,{cause:t}),this.name=Ht.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC,this.code=n.code}}class Vf extends Hf{constructor(t){super(t,{code:Ht.RPC_ERROR_CODE.USER_REJECTED_REQUEST,message:"User rejected the request"}),this.name=Ht.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST}}const ue={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",RECENT_WALLET:"@appkit/recent_wallet",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types",CONNECTIONS:"@appkit/connections",DISCONNECTED_CONNECTOR_IDS:"@appkit/disconnected_connector_ids",HISTORY_TRANSACTIONS_CACHE:"@appkit/history_transactions_cache",TOKEN_PRICE_CACHE:"@appkit/token_price_cache",RECENT_EMAILS:"@appkit/recent_emails",LATEST_APPKIT_VERSION:"@appkit/latest_version"};function bc(e){if(!e)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}const le={setItem(e,t){ho()&&t!==void 0&&localStorage.setItem(e,t)},getItem(e){if(ho())return localStorage.getItem(e)||void 0},removeItem(e){ho()&&localStorage.removeItem(e)},clear(){ho()&&localStorage.clear()}};function ho(){return typeof window<"u"&&typeof localStorage<"u"}function ha(e,t){return t==="light"?{"--w3m-accent":e?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":e?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#202020"}}const qf=Symbol(),Vl=Symbol(),fo="a",$p="f",Id="p",Rp="c",kp="t",ql="h",bo="w",Kl="o",Gl="k";let Kf=(e,t)=>new Proxy(e,t);const ll=Object.getPrototypeOf,dl=new WeakMap,Ip=e=>e&&(dl.has(e)?dl.get(e):ll(e)===Object.prototype||ll(e)===Array.prototype),fa=e=>typeof e=="object"&&e!==null,Gf=e=>Object.values(Object.getOwnPropertyDescriptors(e)).some(t=>!t.configurable&&!t.writable),Zf=e=>{if(Array.isArray(e))return Array.from(e);const t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(n=>{n.configurable=!0}),Object.create(ll(e),t)},Yf=(e,t)=>{const n={[$p]:t};let r=!1;const o=(a,c)=>{if(!r){let l=n[fo].get(e);if(l||(l={},n[fo].set(e,l)),a===bo)l[bo]=!0;else{let d=l[a];d||(d=new Set,l[a]=d),d.add(c)}}},i=()=>{r=!0,n[fo].delete(e)},s={get(a,c){return c===Vl?e:(o(Gl,c),Jf(Reflect.get(a,c),n[fo],n[Rp],n[kp]))},has(a,c){return c===qf?(i(),!0):(o(ql,c),Reflect.has(a,c))},getOwnPropertyDescriptor(a,c){return o(Kl,c),Reflect.getOwnPropertyDescriptor(a,c)},ownKeys(a){return o(bo),Reflect.ownKeys(a)}};return t&&(s.set=s.deleteProperty=()=>!1),[s,n]},Zl=e=>e[Vl]||e,Jf=(e,t,n,r)=>{if(!Ip(e))return e;let o=r&&r.get(e);if(!o){const c=Zl(e);Gf(c)?o=[c,Zf(c)]:o=[c],r?.set(e,o)}const[i,s]=o;let a=n&&n.get(i);return(!a||a[1][$p]!==!!s)&&(a=Yf(i,!!s),a[1][Id]=Kf(s||i,a[0]),n&&n.set(i,a)),a[1][fo]=t,a[1][Rp]=n,a[1][kp]=r,a[1][Id]},Xf=(e,t)=>{const n=Reflect.ownKeys(e),r=Reflect.ownKeys(t);return n.length!==r.length||n.some((o,i)=>o!==r[i])},Qf=(e,t,n,r,o=Object.is)=>{if(o(e,t))return!1;if(!fa(e)||!fa(t))return!0;const i=n.get(Zl(e));if(!i)return!0;if(r){if(r.get(e)===t)return!1;r.set(e,t)}let s=null;for(const a of i[ql]||[])if(s=Reflect.has(e,a)!==Reflect.has(t,a),s)return s;if(i[bo]===!0){if(s=Xf(e,t),s)return s}else for(const a of i[Kl]||[]){const c=!!Reflect.getOwnPropertyDescriptor(e,a),l=!!Reflect.getOwnPropertyDescriptor(t,a);if(s=c!==l,s)return s}for(const a of i[Gl]||[])if(s=Qf(e[a],t[a],n,r,o),s)return s;if(s===null)throw new Error("invalid used");return s},em=e=>Ip(e)&&e[Vl]||null,Od=(e,t=!0)=>{dl.set(e,t)},iv=(e,t,n)=>{const r=[],o=new WeakSet,i=(s,a)=>{var c,l,d;if(o.has(s))return;fa(s)&&o.add(s);const g=fa(s)&&t.get(Zl(s));if(g){if((c=g[ql])===null||c===void 0||c.forEach(w=>{const y=`:has(${String(w)})`;r.push(a?[...a,y]:[y])}),g[bo]===!0){const w=":ownKeys";r.push(a?[...a,w]:[w])}else(l=g[Kl])===null||l===void 0||l.forEach(w=>{const y=`:hasOwn(${String(w)})`;r.push(a?[...a,y]:[y])});(d=g[Gl])===null||d===void 0||d.forEach(w=>{"value"in(Object.getOwnPropertyDescriptor(s,w)||{})&&i(s[w],a?[...a,w]:[w])})}else a&&r.push(a)};return i(e),r},ma={},Yl=e=>typeof e=="object"&&e!==null,tm=e=>Yl(e)&&!ws.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)&&!(e instanceof Promise),Op=(e,t)=>{const n=ul.get(e);if(n?.[0]===t)return n[1];const r=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return Od(r,!0),ul.set(e,[t,r]),Reflect.ownKeys(e).forEach(o=>{if(Object.getOwnPropertyDescriptor(r,o))return;const i=Reflect.get(e,o),{enumerable:s}=Reflect.getOwnPropertyDescriptor(e,o),a={value:i,enumerable:s,configurable:!0};if(ws.has(i))Od(i,!1);else if(dr.has(i)){const[c,l]=dr.get(i);a.value=Op(c,l())}Object.defineProperty(r,o,a)}),Object.preventExtensions(r)},nm=(e,t,n,r)=>({deleteProperty(o,i){const s=Reflect.get(o,i);n(i);const a=Reflect.deleteProperty(o,i);return a&&r(["delete",[i],s]),a},set(o,i,s,a){const c=!e()&&Reflect.has(o,i),l=Reflect.get(o,i,a);if(c&&(Pd(l,s)||zo.has(s)&&Pd(l,zo.get(s))))return!0;n(i),Yl(s)&&(s=em(s)||s);const d=!dr.has(s)&&im(s)?He(s):s;return t(i,d),Reflect.set(o,i,d,a),r(["set",[i],s,l]),!0}}),dr=new WeakMap,ws=new WeakSet,ul=new WeakMap,ca=[1],zo=new WeakMap;let Pd=Object.is,rm=(e,t)=>new Proxy(e,t),im=tm,om=Op,sm=nm;function He(e={}){if(!Yl(e))throw new Error("object required");const t=zo.get(e);if(t)return t;let n=ca[0];const r=new Set,o=(x,I=++ca[0])=>{n!==I&&(i=n=I,r.forEach(R=>R(x,I)))};let i=n;const s=(x=ca[0])=>(i!==x&&(i=x,c.forEach(([I])=>{const R=I[1](x);R>n&&(n=R)})),n),a=x=>(I,R)=>{const L=[...I];L[1]=[x,...L[1]],o(L,R)},c=new Map,l=(x,I)=>{const R=!ws.has(I)&&dr.get(I);if(R){if((ma?"staging":void 0)!=="production"&&c.has(x))throw new Error("prop listener already exists");if(r.size){const L=R[2](a(x));c.set(x,[R,L])}else c.set(x,[R])}},d=x=>{var I;const R=c.get(x);R&&(c.delete(x),(I=R[1])==null||I.call(R))},g=x=>(r.add(x),r.size===1&&c.forEach(([R,L],C)=>{if((ma?"staging":void 0)!=="production"&&L)throw new Error("remove already exists");const A=R[2](a(C));c.set(C,[R,A])}),()=>{r.delete(x),r.size===0&&c.forEach(([R,L],C)=>{L&&(L(),c.set(C,[R]))})});let w=!0;const y=sm(()=>w,l,d,o),E=rm(e,y);zo.set(e,E);const v=[e,s,g];return dr.set(E,v),Reflect.ownKeys(e).forEach(x=>{const I=Object.getOwnPropertyDescriptor(e,x);"value"in I&&I.writable&&(E[x]=e[x])}),w=!1,E}function st(e,t,n){const r=dr.get(e);(ma?"staging":void 0)!=="production"&&!r&&console.warn("Please use proxy object");let o;const i=[],s=r[2];let a=!1;const l=s(d=>{i.push(d),o||(o=Promise.resolve().then(()=>{o=void 0,a&&t(i.splice(0))}))});return a=!0,()=>{a=!1,l()}}function Ho(e){const t=dr.get(e);(ma?"staging":void 0)!=="production"&&!t&&console.warn("Please use proxy object");const[n,r]=t;return om(n,r())}function Ui(e){return ws.add(e),e}function am(){return{proxyStateMap:dr,refSet:ws,snapCache:ul,versionHolder:ca,proxyCache:zo}}function at(e,t,n,r){let o=e[t];return st(e,()=>{const i=e[t];Object.is(o,i)||n(o=i)})}const{proxyStateMap:cm,snapCache:lm}=am(),Fs=e=>cm.has(e);function dm(e){const t=[];let n=0;const r=new Map,o=new WeakMap,i=()=>{const l=lm.get(a),d=l?.[1];if(d&&!o.has(d)){const g=new Map(r);o.set(d,g)}},s=l=>o.get(l)||r,a={data:t,index:n,epoch:0,get size(){return Fs(this)||i(),s(this).size},get(l){const g=s(this).get(l);if(g===void 0){this.epoch;return}return this.data[g]},has(l){const d=s(this);return this.epoch,d.has(l)},set(l,d){if(!Fs(this))throw new Error("Cannot perform mutations on a snapshot");const g=r.get(l);return g===void 0?(r.set(l,this.index),this.data[this.index++]=d):this.data[g]=d,this.epoch++,this},delete(l){if(!Fs(this))throw new Error("Cannot perform mutations on a snapshot");const d=r.get(l);return d===void 0?!1:(delete this.data[d],r.delete(l),this.epoch++,!0)},clear(){if(!Fs(this))throw new Error("Cannot perform mutations on a snapshot");this.data.length=0,this.index=0,this.epoch++,r.clear()},forEach(l){this.epoch,s(this).forEach((g,w)=>{l(this.data[g],w,this)})},*entries(){this.epoch;const l=s(this);for(const[d,g]of l)yield[d,this.data[g]]},*keys(){this.epoch;const l=s(this);for(const d of l.keys())yield d},*values(){this.epoch;const l=s(this);for(const d of l.values())yield this.data[d]},[Symbol.iterator](){return this.entries()},get[Symbol.toStringTag](){return"Map"},toJSON(){return new Map(this.entries())}},c=He(a);return Object.defineProperties(c,{size:{enumerable:!1},index:{enumerable:!1},epoch:{enumerable:!1},data:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(c),c}var Ld={};const yc=(typeof process<"u"&&typeof Ld<"u"?Ld.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",ov=[{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],sv="WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",Ie={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:yc,SECURE_SITE_DASHBOARD:`${yc}/dashboard`,SECURE_SITE_FAVICON:`${yc}/images/favicon.png`,SOLANA_NATIVE_TOKEN_ADDRESS:"So11111111111111111111111111111111111111111",RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SUGGESTED_TOKENS_BY_CHAIN:{"eip155:42161":["USD₮0"]},BALANCE_SUPPORTED_CHAINS:[z.CHAIN.EVM,z.CHAIN.SOLANA],SEND_PARAMS_SUPPORTED_CHAINS:[z.CHAIN.EVM],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:[z.CHAIN.EVM],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:[z.CHAIN.EVM,z.CHAIN.SOLANA],PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES:[z.CHAIN.EVM,z.CHAIN.SOLANA],ACTIVITY_ENABLED_CHAIN_NAMESPACES:[z.CHAIN.EVM],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x",sui:"0x",stacks:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in the wallet app",WEB:"Open and continue in the wallet app"},SEND_SUPPORTED_NAMESPACES:[z.CHAIN.EVM,z.CHAIN.SOLANA],DEFAULT_REMOTE_FEATURES:{swaps:["1inch"],onramp:["meld"],email:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],activity:!0,reownBranding:!0,multiWallet:!1,emailCapture:!1,payWithExchange:!1,payments:!1,reownAuthentication:!1},DEFAULT_REMOTE_FEATURES_DISABLED:{email:!1,socials:!1,swaps:!1,onramp:!1,activity:!1,reownBranding:!1,emailCapture:!1,reownAuthentication:!1},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1,reownAuthentication:!1},DEFAULT_SOCIALS:["google","x","farcaster","discord","apple","github","facebook"],DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"},SIWX_DEFAULTS:{signOutOnDisconnect:!0}},J={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5,transactionsHistory:15e3,tokenPrice:15e3,latestAppKitVersion:6048e5},isCacheExpired(e,t){return Date.now()-e>t},getActiveNetworkProps(){const e=J.getActiveNamespace(),t=J.getActiveCaipNetworkId(),n=t?t.split(":")[1]:void 0,r=n?isNaN(Number(n))?n:Number(n):void 0;return{namespace:e,caipNetworkId:t,chainId:r}},setWalletConnectDeepLink({name:e,href:t}){try{le.setItem(ue.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=le.getItem(ue.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{le.removeItem(ue.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{le.setItem(ue.ACTIVE_NAMESPACE,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{le.setItem(ue.ACTIVE_CAIP_NETWORK_ID,e),J.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return le.getItem(ue.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{le.removeItem(ue.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{const t=bc(e);le.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{const t=J.getRecentWallets();t.find(r=>r.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),le.setItem(ue.RECENT_WALLETS,JSON.stringify(t)),le.setItem(ue.RECENT_WALLET,JSON.stringify(e)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const e=le.getItem(ue.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},getRecentWallet(){try{const e=le.getItem(ue.RECENT_WALLET);return e?JSON.parse(e):null}catch{console.info("Unable to get AppKit recent")}return null},deleteRecentWallet(){try{le.removeItem(ue.RECENT_WALLET)}catch{console.info("Unable to delete AppKit recent")}},setConnectedConnectorId(e,t){try{const n=bc(e);le.setItem(n,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return le.getItem(ue.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{const t=bc(e);return le.getItem(t)}catch{console.info("Unable to get connected connector id in namespace",e)}},setConnectedSocialProvider(e){try{le.setItem(ue.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return le.getItem(ue.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{le.removeItem(ue.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return le.getItem(ue.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){return le.getItem(ue.ACTIVE_CAIP_NETWORK_ID)?.split(":")?.[1]},setConnectionStatus(e){try{le.setItem(ue.CONNECTION_STATUS,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return le.getItem(ue.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{const e=le.getItem(ue.CONNECTED_NAMESPACES);return e?.length?e.split(","):[]}catch{return[]}},setConnectedNamespaces(e){try{const t=Array.from(new Set(e));le.setItem(ue.CONNECTED_NAMESPACES,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{const t=J.getConnectedNamespaces();t.includes(e)||(t.push(e),J.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{const t=J.getConnectedNamespaces(),n=t.indexOf(e);n>-1&&(t.splice(n,1),J.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return le.getItem(ue.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{le.setItem(ue.TELEGRAM_SOCIAL_PROVIDER,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{le.removeItem(ue.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{const t=le.getItem(ue.PORTFOLIO_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{const t=J.getBalanceCache();le.setItem(ue.PORTFOLIO_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{const n=J.getBalanceCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.portfolio))return n.balance;J.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{const t=J.getBalanceCache();t[e.caipAddress]=e,le.setItem(ue.PORTFOLIO_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{const t=le.getItem(ue.NATIVE_BALANCE_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{const t=J.getBalanceCache();le.setItem(ue.NATIVE_BALANCE_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{const n=J.getNativeBalanceCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.nativeBalance))return n;console.info("Discarding cache for address",e),J.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{const t=J.getNativeBalanceCache();t[e.caipAddress]=e,le.setItem(ue.NATIVE_BALANCE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{const t=le.getItem(ue.ENS_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{const n=J.getEnsCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.ens))return n.ens;J.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{const t=J.getEnsCache();t[e.address]=e,le.setItem(ue.ENS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{const t=J.getEnsCache();le.setItem(ue.ENS_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{const t=le.getItem(ue.IDENTITY_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{const n=J.getIdentityCache()[e];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.identity))return n.identity;J.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{const t=J.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},le.setItem(ue.IDENTITY_CACHE,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{const t=J.getIdentityCache();le.setItem(ue.IDENTITY_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},clearAddressCache(){try{le.removeItem(ue.PORTFOLIO_CACHE),le.removeItem(ue.NATIVE_BALANCE_CACHE),le.removeItem(ue.ENS_CACHE),le.removeItem(ue.IDENTITY_CACHE),le.removeItem(ue.HISTORY_TRANSACTIONS_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{le.setItem(ue.PREFERRED_ACCOUNT_TYPES,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{const e=le.getItem(ue.PREFERRED_ACCOUNT_TYPES);return e?JSON.parse(e):{}}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,t){try{const n=J.getConnections(),r=n[t]??[],o=new Map;for(const s of r)o.set(s.connectorId,{...s});for(const s of e){const a=o.get(s.connectorId),c=s.connectorId===z.CONNECTOR_ID.AUTH;if(a&&!c){const l=new Set(a.accounts.map(g=>g.address.toLowerCase())),d=s.accounts.filter(g=>!l.has(g.address.toLowerCase()));a.accounts.push(...d)}else o.set(s.connectorId,{...s})}const i={...n,[t]:Array.from(o.values())};le.setItem(ue.CONNECTIONS,JSON.stringify(i))}catch(n){console.error("Unable to sync connections to storage",n)}},getConnections(){try{const e=le.getItem(ue.CONNECTIONS);return e?JSON.parse(e):{}}catch(e){return console.error("Unable to get connections from storage",e),{}}},deleteAddressFromConnection({connectorId:e,address:t,namespace:n}){try{const r=J.getConnections(),o=r[n]??[],i=new Map(o.map(a=>[a.connectorId,a])),s=i.get(e);s&&(s.accounts.filter(c=>c.address.toLowerCase()!==t.toLowerCase()).length===0?i.delete(e):i.set(e,{...s,accounts:s.accounts.filter(c=>c.address.toLowerCase()!==t.toLowerCase())})),le.setItem(ue.CONNECTIONS,JSON.stringify({...r,[n]:Array.from(i.values())}))}catch{console.error(`Unable to remove address "${t}" from connector "${e}" in namespace "${n}"`)}},getDisconnectedConnectorIds(){try{const e=le.getItem(ue.DISCONNECTED_CONNECTOR_IDS);return e?JSON.parse(e):{}}catch{console.info("Unable to get disconnected connector ids")}return{}},addDisconnectedConnectorId(e,t){try{const n=J.getDisconnectedConnectorIds(),r=n[t]??[];r.push(e),le.setItem(ue.DISCONNECTED_CONNECTOR_IDS,JSON.stringify({...n,[t]:Array.from(new Set(r))}))}catch{console.error(`Unable to set disconnected connector id "${e}" for namespace "${t}"`)}},removeDisconnectedConnectorId(e,t){try{const n=J.getDisconnectedConnectorIds();let r=n[t]??[];r=r.filter(o=>o.toLowerCase()!==e.toLowerCase()),le.setItem(ue.DISCONNECTED_CONNECTOR_IDS,JSON.stringify({...n,[t]:Array.from(new Set(r))}))}catch{console.error(`Unable to remove disconnected connector id "${e}" for namespace "${t}"`)}},isConnectorDisconnected(e,t){try{return(J.getDisconnectedConnectorIds()[t]??[]).some(o=>o.toLowerCase()===e.toLowerCase())}catch{console.info(`Unable to get disconnected connector id "${e}" for namespace "${t}"`)}return!1},getTransactionsCache(){try{const e=le.getItem(ue.HISTORY_TRANSACTIONS_CACHE);return e?JSON.parse(e):{}}catch{console.info("Unable to get transactions cache")}return{}},getTransactionsCacheForAddress({address:e,chainId:t=""}){try{const r=J.getTransactionsCache()[e]?.[t];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.transactionsHistory))return r.transactions;J.removeTransactionsCache({address:e,chainId:t})}catch{console.info("Unable to get transactions cache")}},updateTransactionsCache({address:e,chainId:t="",timestamp:n,transactions:r}){try{const o=J.getTransactionsCache();o[e]={...o[e],[t]:{timestamp:n,transactions:r}},le.setItem(ue.HISTORY_TRANSACTIONS_CACHE,JSON.stringify(o))}catch{console.info("Unable to update transactions cache",{address:e,chainId:t,timestamp:n,transactions:r})}},removeTransactionsCache({address:e,chainId:t}){try{const n=J.getTransactionsCache(),r=n?.[e]||{},{[t]:o,...i}=r;le.setItem(ue.HISTORY_TRANSACTIONS_CACHE,JSON.stringify({...n,[e]:i}))}catch{console.info("Unable to remove transactions cache",{address:e,chainId:t})}},getTokenPriceCache(){try{const e=le.getItem(ue.TOKEN_PRICE_CACHE);return e?JSON.parse(e):{}}catch{console.info("Unable to get token price cache")}return{}},getTokenPriceCacheForAddresses(e){try{const n=J.getTokenPriceCache()[e.join(",")];if(n&&!this.isCacheExpired(n.timestamp,this.cacheExpiry.tokenPrice))return n.tokenPrice;J.removeTokenPriceCache(e)}catch{console.info("Unable to get token price cache for addresses",e)}},updateTokenPriceCache(e){try{const t=J.getTokenPriceCache();t[e.addresses.join(",")]={timestamp:e.timestamp,tokenPrice:e.tokenPrice},le.setItem(ue.TOKEN_PRICE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update token price cache",e)}},removeTokenPriceCache(e){try{const t=J.getTokenPriceCache();le.setItem(ue.TOKEN_PRICE_CACHE,JSON.stringify({...t,[e.join(",")]:void 0}))}catch{console.info("Unable to remove token price cache",e)}},getLatestAppKitVersion(){try{const e=this.getLatestAppKitVersionCache(),t=e?.version;return t&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.latestAppKitVersion)?t:void 0}catch{console.info("Unable to get latest AppKit version")}},getLatestAppKitVersionCache(){try{const e=le.getItem(ue.LATEST_APPKIT_VERSION);return e?JSON.parse(e):{}}catch{console.info("Unable to get latest AppKit version cache")}return{}},updateLatestAppKitVersion(e){try{const t=J.getLatestAppKitVersionCache();t.timestamp=e.timestamp,t.version=e.version,le.setItem(ue.LATEST_APPKIT_VERSION,JSON.stringify(t))}catch{console.info("Unable to update latest AppKit version on local storage",e)}}},P={isMobile(){return this.isClient()?!!(window?.matchMedia&&typeof window.matchMedia=="function"&&window.matchMedia("(pointer:coarse)")?.matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(e,t=""){return e?.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){if(!this.isMobile())return!1;const e=window?.navigator.userAgent.toLowerCase();return P.isMobile()&&e.includes("android")},isIos(){if(!this.isMobile())return!1;const e=window?.navigator.userAgent.toLowerCase();return e.includes("iphone")||e.includes("ipad")},isSafari(){return this.isClient()?(window?.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=Ie.TEN_SEC_MS:!0},isAllowedRetry(e,t=Ie.ONE_SEC_MS){return Date.now()-e>=t},copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{return window?.self!==window?.top}catch{return!1}},isSafeApp(){if(P.isClient()&&window.self!==window.top)try{const e=window?.location?.ancestorOrigins?.[0],t="https://app.safe.global";if(e){const n=new URL(e),r=new URL(t);return n.hostname===r.hostname}}catch{return!1}return!1},getPairingExpiry(){return Date.now()+Ie.FOUR_MINUTES_MS},getNetworkId(e){return e?.split(":")[1]},getPlainAddress(e){return e?.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let n;return(...r)=>{function o(){e(...r)}n&&clearTimeout(n),n=setTimeout(o,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t,n=null){if(P.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e,o=n;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),o&&!o?.endsWith("/")&&(o=`${o}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));const i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,redirectUniversalLink:o?`${o}wc?uri=${i}`:void 0,href:r}},formatUniversalUrl(e,t){if(!P.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},getOpenTargetForPlatform(e){return e==="popupWindow"?e:this.isTelegram()?J.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,n){window?.open(e,this.getOpenTargetForPlatform(t),n||"noreferrer noopener")},returnOpenHref(e,t,n){return window?.open(e,this.getOpenTargetForPlatform(t),n||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},isPWA(){if(typeof window>"u")return!1;const e=window?.matchMedia&&typeof window.matchMedia=="function"?window.matchMedia("(display-mode: standalone)")?.matches:!1,t=window?.navigator?.standalone;return!!(e||t)},async preloadImage(e){const t=new Promise((n,r)=>{const o=new Image;o.onload=n,o.onerror=r,o.crossOrigin="anonymous",o.src=e});return Promise.race([t,P.wait(2e3)])},parseBalance(e,t){let n="0.000";if(typeof e=="string"){const c=Number(e);if(!isNaN(c)){const l=(Math.floor(c*1e3)/1e3).toFixed(3);l&&(n=l)}}const[r,o]=n.split("."),i=r||"0",s=o||"000";return{formattedText:`${i}.${s}${t?` ${t}`:""}`,value:i,decimals:s,symbol:t}},getApiUrl(){return z.W3M_API_URL},getBlockchainApiUrl(){return z.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return z.PULSE_API_URL},getUUID(){return crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})},parseError(e){return typeof e=="string"?e:typeof e?.issues?.[0]?.message=="string"?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e,t=[]){const n={};return t&&e&&(e.forEach((r,o)=>{n[r]=o}),t.sort((r,o)=>{const i=n[r.id],s=n[o.id];return i!==void 0&&s!==void 0?i-s:i!==void 0?-1:s!==void 0?1:0})),t},calculateBalance(e){let t=0;for(const n of e)t+=n.value??0;return t},formatTokenBalance(e){const t=e.toFixed(2),[n,r]=t.split(".");return{dollars:n,pennies:r}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);default:return!1}},uniqueBy(e,t){const n=new Set;return e.filter(r=>{const o=r[t];return n.has(o)?!1:(n.add(o),!0)})},generateSdkVersion(e,t,n){const o=e.length===0?Ie.ADAPTER_TYPES.UNIVERSAL:e.map(i=>i.adapterType).join(",");return`${t}-${o}-${n}`},createAccount(e,t,n,r,o){return{namespace:e,address:t,type:n,publicKey:r,path:o}},isCaipAddress(e){if(typeof e!="string")return!1;const t=e.split(":"),n=t[0];return t.filter(Boolean).length===3&&n in z.CHAIN_NAME_MAP},getAccount(e){return e?typeof e=="string"?{address:e,chainId:void 0}:{address:e.address,chainId:e.chainId}:{address:void 0,chainId:void 0}},isMac(){const e=window?.navigator.userAgent.toLowerCase();return e.includes("macintosh")&&!e.includes("safari")},formatTelegramSocialLoginUrl(e){const t=`--${encodeURIComponent(window?.location.href)}`,n="state=";if(new URL(e).host==="auth.magic.link"){const o="provider_authorization_url=",i=e.substring(e.indexOf(o)+o.length),s=this.injectIntoUrl(decodeURIComponent(i),n,t);return e.replace(i,encodeURIComponent(s))}return this.injectIntoUrl(e,n,t)},injectIntoUrl(e,t,n){const r=e.indexOf(t);if(r===-1)throw new Error(`${t} parameter not found in the URL: ${e}`);const o=e.indexOf("&",r),i=t.length,s=o!==-1?o:e.length,a=e.substring(0,r+i),c=e.substring(r+i,s),l=e.substring(o),d=c+n;return a+d+l}},Pp={BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org"},um={validateCaipAddress(e){if(e.split(":")?.length!==3)throw new Error("Invalid CAIP Address");return e},parseCaipAddress(e){const t=e.split(":");if(t.length!==3)throw new Error(`Invalid CAIP-10 address: ${e}`);const[n,r,o]=t;if(!n||!r||!o)throw new Error(`Invalid CAIP-10 address: ${e}`);return{chainNamespace:n,chainId:r,address:o}},parseCaipNetworkId(e){const t=e.split(":");if(t.length!==2)throw new Error(`Invalid CAIP-2 network id: ${e}`);const[n,r]=t;if(!n||!r)throw new Error(`Invalid CAIP-2 network id: ${e}`);return{chainNamespace:n,chainId:r}}};var Bi={};const pm="https://secure.walletconnect.org/sdk",hm=(typeof process<"u"&&typeof Bi<"u"?Bi.NEXT_PUBLIC_SECURE_SITE_SDK_URL:void 0)||pm,fm=(typeof process<"u"&&typeof Bi<"u"?Bi.NEXT_PUBLIC_DEFAULT_LOG_LEVEL:void 0)||"error",mm=(typeof process<"u"&&typeof Bi<"u"?Bi.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION:void 0)||"4",ae={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@appkit-wallet/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",APP_RELOAD:"@w3m-app/RELOAD",APP_RPC_ABORT:"@w3m-app/RPC_ABORT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",FRAME_READY:"@w3m-frame/READY",FRAME_RELOAD_SUCCESS:"@w3m-frame/RELOAD_SUCCESS",FRAME_RELOAD_ERROR:"@w3m-frame/RELOAD_ERROR",FRAME_RPC_ABORT_SUCCESS:"@w3m-frame/RPC_ABORT_SUCCESS",FRAME_RPC_ABORT_ERROR:"@w3m-frame/RPC_ABORT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},De={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},Dd={transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[a-fA-F0-9]{62,})$/u},ot={set(e,t){Cn.isClient&&localStorage.setItem(`${ae.STORAGE_KEY}${e}`,t)},get(e){return Cn.isClient?localStorage.getItem(`${ae.STORAGE_KEY}${e}`):null},delete(e,t){Cn.isClient&&(t?localStorage.removeItem(e):localStorage.removeItem(`${ae.STORAGE_KEY}${e}`))}},zs=30*1e3,Cn={checkIfAllowedToTriggerEmail(){const e=ot.get(ae.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<zs){const n=Math.ceil((zs-t)/1e3);throw new Error(`Please try again after ${n} seconds`)}}},getTimeToNextEmailLogin(){const e=ot.get(ae.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<zs)return Math.ceil((zs-t)/1e3)}return 0},checkIfRequestExists(e){return De.NOT_SAFE_RPC_METHODS.includes(e.method)||De.SAFE_RPC_METHODS.includes(e.method)},getResponseType(e){return typeof e=="string"&&(e?.match(Dd.transactionHash)||e?.match(Dd.signedMessage))?ae.RPC_RESPONSE_TYPE_TX:ae.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsSafe(e){return De.SAFE_RPC_METHODS.includes(e.method)},isClient:typeof window<"u"};var Le;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const i={};for(const s of o)i[s]=s;return i},e.getValidEnumValues=o=>{const i=e.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),s={};for(const a of i)s[a]=o[a];return e.objectValues(s)},e.objectValues=o=>e.objectKeys(o).map(function(i){return o[i]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const i=[];for(const s in o)Object.prototype.hasOwnProperty.call(o,s)&&i.push(s);return i},e.find=(o,i)=>{for(const s of o)if(i(s))return s},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function r(o,i=" | "){return o.map(s=>typeof s=="string"?`'${s}'`:s).join(i)}e.joinValues=r,e.jsonStringifyReplacer=(o,i)=>typeof i=="bigint"?i.toString():i})(Le||(Le={}));var pl;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(pl||(pl={}));const re=Le.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ar=e=>{switch(typeof e){case"undefined":return re.undefined;case"string":return re.string;case"number":return isNaN(e)?re.nan:re.number;case"boolean":return re.boolean;case"function":return re.function;case"bigint":return re.bigint;case"symbol":return re.symbol;case"object":return Array.isArray(e)?re.array:e===null?re.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?re.promise:typeof Map<"u"&&e instanceof Map?re.map:typeof Set<"u"&&e instanceof Set?re.set:typeof Date<"u"&&e instanceof Date?re.date:re.object;default:return re.unknown}},Y=Le.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),gm=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class cn extends Error{constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(i){return i.message},r={_errors:[]},o=i=>{for(const s of i.issues)if(s.code==="invalid_union")s.unionErrors.map(o);else if(s.code==="invalid_return_type")o(s.returnTypeError);else if(s.code==="invalid_arguments")o(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let a=r,c=0;for(;c<s.path.length;){const l=s.path[c];c===s.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(n(s))):a[l]=a[l]||{_errors:[]},a=a[l],c++}}};return o(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Le.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):r.push(t(o));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}cn.create=e=>new cn(e);const Vo=(e,t)=>{let n;switch(e.code){case Y.invalid_type:e.received===re.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case Y.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,Le.jsonStringifyReplacer)}`;break;case Y.unrecognized_keys:n=`Unrecognized key(s) in object: ${Le.joinValues(e.keys,", ")}`;break;case Y.invalid_union:n="Invalid input";break;case Y.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Le.joinValues(e.options)}`;break;case Y.invalid_enum_value:n=`Invalid enum value. Expected ${Le.joinValues(e.options)}, received '${e.received}'`;break;case Y.invalid_arguments:n="Invalid function arguments";break;case Y.invalid_return_type:n="Invalid function return type";break;case Y.invalid_date:n="Invalid date";break;case Y.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:Le.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case Y.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case Y.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case Y.custom:n="Invalid input";break;case Y.invalid_intersection_types:n="Intersection results could not be merged";break;case Y.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case Y.not_finite:n="Number must be finite";break;default:n=t.defaultError,Le.assertNever(e)}return{message:n}};let Lp=Vo;function wm(e){Lp=e}function ga(){return Lp}const wa=e=>{const{data:t,path:n,errorMaps:r,issueData:o}=e,i=[...n,...o.path||[]],s={...o,path:i};let a="";const c=r.filter(l=>!!l).slice().reverse();for(const l of c)a=l(s,{data:t,defaultError:a}).message;return{...o,path:i,message:o.message||a}},bm=[];function se(e,t){const n=wa({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,ga(),Vo].filter(r=>!!r)});e.common.issues.push(n)}class ut{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const o of n){if(o.status==="aborted")return Ee;o.status==="dirty"&&t.dirty(),r.push(o.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const o of n)r.push({key:await o.key,value:await o.value});return ut.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const o of n){const{key:i,value:s}=o;if(i.status==="aborted"||s.status==="aborted")return Ee;i.status==="dirty"&&t.dirty(),s.status==="dirty"&&t.dirty(),i.value!=="__proto__"&&(typeof s.value<"u"||o.alwaysSet)&&(r[i.value]=s.value)}return{status:t.value,value:r}}}const Ee=Object.freeze({status:"aborted"}),Dp=e=>({status:"dirty",value:e}),yt=e=>({status:"valid",value:e}),hl=e=>e.status==="aborted",fl=e=>e.status==="dirty",qo=e=>e.status==="valid",ba=e=>typeof Promise<"u"&&e instanceof Promise;var fe;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(fe||(fe={}));class An{constructor(t,n,r,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=r,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Md=(e,t)=>{if(qo(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new cn(e.common.issues);return this._error=n,this._error}}};function Se(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:o}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(s,a)=>s.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:o}}class Te{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return ar(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:ar(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new ut,ctx:{common:t.parent.common,data:t.data,parsedType:ar(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(ba(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const r=this.safeParse(t,n);if(r.success)return r.data;throw r.error}safeParse(t,n){var r;const o={common:{issues:[],async:(r=n?.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:ar(t)},i=this._parseSync({data:t,path:o.path,parent:o});return Md(o,i)}async parseAsync(t,n){const r=await this.safeParseAsync(t,n);if(r.success)return r.data;throw r.error}async safeParseAsync(t,n){const r={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:ar(t)},o=this._parse({data:t,path:r.path,parent:r}),i=await(ba(o)?o:Promise.resolve(o));return Md(r,i)}refine(t,n){const r=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,i)=>{const s=t(o),a=()=>i.addIssue({code:Y.custom,...r(o)});return typeof Promise<"u"&&s instanceof Promise?s.then(c=>c?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(t,n){return this._refinement((r,o)=>t(r)?!0:(o.addIssue(typeof n=="function"?n(r,o):n),!1))}_refinement(t){return new dn({schema:this,typeName:ye.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return qn.create(this,this._def)}nullable(){return zr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ln.create(this,this._def)}promise(){return ji.create(this,this._def)}or(t){return Yo.create([this,t],this._def)}and(t){return Jo.create(this,t,this._def)}transform(t){return new dn({...Se(this._def),schema:this,typeName:ye.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new ns({...Se(this._def),innerType:this,defaultValue:n,typeName:ye.ZodDefault})}brand(){return new Up({typeName:ye.ZodBranded,type:this,...Se(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Ea({...Se(this._def),innerType:this,catchValue:n,typeName:ye.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return bs.create(this,t)}readonly(){return xa.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const ym=/^c[^\s-]{8,}$/i,vm=/^[a-z][a-z0-9]*$/,Cm=/^[0-9A-HJKMNP-TV-Z]{26}$/,Em=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,_m=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,xm="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let vc;const Am=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Sm=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Tm=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Nm(e,t){return!!((t==="v4"||!t)&&Am.test(e)||(t==="v6"||!t)&&Sm.test(e))}class an extends Te{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==re.string){const i=this._getOrReturnCtx(t);return se(i,{code:Y.invalid_type,expected:re.string,received:i.parsedType}),Ee}const r=new ut;let o;for(const i of this._def.checks)if(i.kind==="min")t.data.length<i.value&&(o=this._getOrReturnCtx(t,o),se(o,{code:Y.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")t.data.length>i.value&&(o=this._getOrReturnCtx(t,o),se(o,{code:Y.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const s=t.data.length>i.value,a=t.data.length<i.value;(s||a)&&(o=this._getOrReturnCtx(t,o),s?se(o,{code:Y.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&se(o,{code:Y.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")_m.test(t.data)||(o=this._getOrReturnCtx(t,o),se(o,{validation:"email",code:Y.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")vc||(vc=new RegExp(xm,"u")),vc.test(t.data)||(o=this._getOrReturnCtx(t,o),se(o,{validation:"emoji",code:Y.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")Em.test(t.data)||(o=this._getOrReturnCtx(t,o),se(o,{validation:"uuid",code:Y.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")ym.test(t.data)||(o=this._getOrReturnCtx(t,o),se(o,{validation:"cuid",code:Y.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")vm.test(t.data)||(o=this._getOrReturnCtx(t,o),se(o,{validation:"cuid2",code:Y.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")Cm.test(t.data)||(o=this._getOrReturnCtx(t,o),se(o,{validation:"ulid",code:Y.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),se(o,{validation:"url",code:Y.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),se(o,{validation:"regex",code:Y.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?t.data=t.data.trim():i.kind==="includes"?t.data.includes(i.value,i.position)||(o=this._getOrReturnCtx(t,o),se(o,{code:Y.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?t.data=t.data.toLowerCase():i.kind==="toUpperCase"?t.data=t.data.toUpperCase():i.kind==="startsWith"?t.data.startsWith(i.value)||(o=this._getOrReturnCtx(t,o),se(o,{code:Y.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?t.data.endsWith(i.value)||(o=this._getOrReturnCtx(t,o),se(o,{code:Y.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?Tm(i).test(t.data)||(o=this._getOrReturnCtx(t,o),se(o,{code:Y.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="ip"?Nm(t.data,i.version)||(o=this._getOrReturnCtx(t,o),se(o,{validation:"ip",code:Y.invalid_string,message:i.message}),r.dirty()):Le.assertNever(i);return{status:r.value,value:t.data}}_regex(t,n,r){return this.refinement(o=>t.test(o),{validation:n,code:Y.invalid_string,...fe.errToObj(r)})}_addCheck(t){return new an({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...fe.errToObj(t)})}url(t){return this._addCheck({kind:"url",...fe.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...fe.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...fe.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...fe.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...fe.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...fe.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...fe.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...fe.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...fe.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...fe.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...fe.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...fe.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...fe.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...fe.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...fe.errToObj(n)})}nonempty(t){return this.min(1,fe.errToObj(t))}trim(){return new an({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new an({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new an({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}an.create=e=>{var t;return new an({checks:[],typeName:ye.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};function $m(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,o=n>r?n:r,i=parseInt(e.toFixed(o).replace(".","")),s=parseInt(t.toFixed(o).replace(".",""));return i%s/Math.pow(10,o)}class ur extends Te{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==re.number){const i=this._getOrReturnCtx(t);return se(i,{code:Y.invalid_type,expected:re.number,received:i.parsedType}),Ee}let r;const o=new ut;for(const i of this._def.checks)i.kind==="int"?Le.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),se(r,{code:Y.invalid_type,expected:"integer",received:"float",message:i.message}),o.dirty()):i.kind==="min"?(i.inclusive?t.data<i.value:t.data<=i.value)&&(r=this._getOrReturnCtx(t,r),se(r,{code:Y.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?t.data>i.value:t.data>=i.value)&&(r=this._getOrReturnCtx(t,r),se(r,{code:Y.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="multipleOf"?$m(t.data,i.value)!==0&&(r=this._getOrReturnCtx(t,r),se(r,{code:Y.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):i.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),se(r,{code:Y.not_finite,message:i.message}),o.dirty()):Le.assertNever(i);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,fe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,fe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,fe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,fe.toString(n))}setLimit(t,n,r,o){return new ur({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:fe.toString(o)}]})}_addCheck(t){return new ur({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:fe.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:fe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:fe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:fe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:fe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:fe.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:fe.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:fe.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:fe.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&Le.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}}ur.create=e=>new ur({checks:[],typeName:ye.ZodNumber,coerce:e?.coerce||!1,...Se(e)});class pr extends Te{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==re.bigint){const i=this._getOrReturnCtx(t);return se(i,{code:Y.invalid_type,expected:re.bigint,received:i.parsedType}),Ee}let r;const o=new ut;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?t.data<i.value:t.data<=i.value)&&(r=this._getOrReturnCtx(t,r),se(r,{code:Y.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?t.data>i.value:t.data>=i.value)&&(r=this._getOrReturnCtx(t,r),se(r,{code:Y.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="multipleOf"?t.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),se(r,{code:Y.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):Le.assertNever(i);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,fe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,fe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,fe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,fe.toString(n))}setLimit(t,n,r,o){return new pr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:fe.toString(o)}]})}_addCheck(t){return new pr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:fe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:fe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:fe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:fe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:fe.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}pr.create=e=>{var t;return new pr({checks:[],typeName:ye.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};class Ko extends Te{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==re.boolean){const r=this._getOrReturnCtx(t);return se(r,{code:Y.invalid_type,expected:re.boolean,received:r.parsedType}),Ee}return yt(t.data)}}Ko.create=e=>new Ko({typeName:ye.ZodBoolean,coerce:e?.coerce||!1,...Se(e)});class jr extends Te{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==re.date){const i=this._getOrReturnCtx(t);return se(i,{code:Y.invalid_type,expected:re.date,received:i.parsedType}),Ee}if(isNaN(t.data.getTime())){const i=this._getOrReturnCtx(t);return se(i,{code:Y.invalid_date}),Ee}const r=new ut;let o;for(const i of this._def.checks)i.kind==="min"?t.data.getTime()<i.value&&(o=this._getOrReturnCtx(t,o),se(o,{code:Y.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?t.data.getTime()>i.value&&(o=this._getOrReturnCtx(t,o),se(o,{code:Y.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):Le.assertNever(i);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new jr({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:fe.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:fe.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}jr.create=e=>new jr({checks:[],coerce:e?.coerce||!1,typeName:ye.ZodDate,...Se(e)});class ya extends Te{_parse(t){if(this._getType(t)!==re.symbol){const r=this._getOrReturnCtx(t);return se(r,{code:Y.invalid_type,expected:re.symbol,received:r.parsedType}),Ee}return yt(t.data)}}ya.create=e=>new ya({typeName:ye.ZodSymbol,...Se(e)});class Go extends Te{_parse(t){if(this._getType(t)!==re.undefined){const r=this._getOrReturnCtx(t);return se(r,{code:Y.invalid_type,expected:re.undefined,received:r.parsedType}),Ee}return yt(t.data)}}Go.create=e=>new Go({typeName:ye.ZodUndefined,...Se(e)});class Zo extends Te{_parse(t){if(this._getType(t)!==re.null){const r=this._getOrReturnCtx(t);return se(r,{code:Y.invalid_type,expected:re.null,received:r.parsedType}),Ee}return yt(t.data)}}Zo.create=e=>new Zo({typeName:ye.ZodNull,...Se(e)});class Wi extends Te{constructor(){super(...arguments),this._any=!0}_parse(t){return yt(t.data)}}Wi.create=e=>new Wi({typeName:ye.ZodAny,...Se(e)});class Ur extends Te{constructor(){super(...arguments),this._unknown=!0}_parse(t){return yt(t.data)}}Ur.create=e=>new Ur({typeName:ye.ZodUnknown,...Se(e)});class Kn extends Te{_parse(t){const n=this._getOrReturnCtx(t);return se(n,{code:Y.invalid_type,expected:re.never,received:n.parsedType}),Ee}}Kn.create=e=>new Kn({typeName:ye.ZodNever,...Se(e)});class va extends Te{_parse(t){if(this._getType(t)!==re.undefined){const r=this._getOrReturnCtx(t);return se(r,{code:Y.invalid_type,expected:re.void,received:r.parsedType}),Ee}return yt(t.data)}}va.create=e=>new va({typeName:ye.ZodVoid,...Se(e)});class ln extends Te{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),o=this._def;if(n.parsedType!==re.array)return se(n,{code:Y.invalid_type,expected:re.array,received:n.parsedType}),Ee;if(o.exactLength!==null){const s=n.data.length>o.exactLength.value,a=n.data.length<o.exactLength.value;(s||a)&&(se(n,{code:s?Y.too_big:Y.too_small,minimum:a?o.exactLength.value:void 0,maximum:s?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),r.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(se(n,{code:Y.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),r.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(se(n,{code:Y.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>o.type._parseAsync(new An(n,s,n.path,a)))).then(s=>ut.mergeArray(r,s));const i=[...n.data].map((s,a)=>o.type._parseSync(new An(n,s,n.path,a)));return ut.mergeArray(r,i)}get element(){return this._def.type}min(t,n){return new ln({...this._def,minLength:{value:t,message:fe.toString(n)}})}max(t,n){return new ln({...this._def,maxLength:{value:t,message:fe.toString(n)}})}length(t,n){return new ln({...this._def,exactLength:{value:t,message:fe.toString(n)}})}nonempty(t){return this.min(1,t)}}ln.create=(e,t)=>new ln({type:e,minLength:null,maxLength:null,exactLength:null,typeName:ye.ZodArray,...Se(t)});function Ti(e){if(e instanceof qe){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=qn.create(Ti(r))}return new qe({...e._def,shape:()=>t})}else return e instanceof ln?new ln({...e._def,type:Ti(e.element)}):e instanceof qn?qn.create(Ti(e.unwrap())):e instanceof zr?zr.create(Ti(e.unwrap())):e instanceof Sn?Sn.create(e.items.map(t=>Ti(t))):e}class qe extends Te{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=Le.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==re.object){const l=this._getOrReturnCtx(t);return se(l,{code:Y.invalid_type,expected:re.object,received:l.parsedType}),Ee}const{status:r,ctx:o}=this._processInputParams(t),{shape:i,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof Kn&&this._def.unknownKeys==="strip"))for(const l in o.data)s.includes(l)||a.push(l);const c=[];for(const l of s){const d=i[l],g=o.data[l];c.push({key:{status:"valid",value:l},value:d._parse(new An(o,g,o.path,l)),alwaysSet:l in o.data})}if(this._def.catchall instanceof Kn){const l=this._def.unknownKeys;if(l==="passthrough")for(const d of a)c.push({key:{status:"valid",value:d},value:{status:"valid",value:o.data[d]}});else if(l==="strict")a.length>0&&(se(o,{code:Y.unrecognized_keys,keys:a}),r.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const d of a){const g=o.data[d];c.push({key:{status:"valid",value:d},value:l._parse(new An(o,g,o.path,d)),alwaysSet:d in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const l=[];for(const d of c){const g=await d.key;l.push({key:g,value:await d.value,alwaysSet:d.alwaysSet})}return l}).then(l=>ut.mergeObjectSync(r,l)):ut.mergeObjectSync(r,c)}get shape(){return this._def.shape()}strict(t){return fe.errToObj,new qe({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{var o,i,s,a;const c=(s=(i=(o=this._def).errorMap)===null||i===void 0?void 0:i.call(o,n,r).message)!==null&&s!==void 0?s:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=fe.errToObj(t).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new qe({...this._def,unknownKeys:"strip"})}passthrough(){return new qe({...this._def,unknownKeys:"passthrough"})}extend(t){return new qe({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new qe({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:ye.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new qe({...this._def,catchall:t})}pick(t){const n={};return Le.objectKeys(t).forEach(r=>{t[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new qe({...this._def,shape:()=>n})}omit(t){const n={};return Le.objectKeys(this.shape).forEach(r=>{t[r]||(n[r]=this.shape[r])}),new qe({...this._def,shape:()=>n})}deepPartial(){return Ti(this)}partial(t){const n={};return Le.objectKeys(this.shape).forEach(r=>{const o=this.shape[r];t&&!t[r]?n[r]=o:n[r]=o.optional()}),new qe({...this._def,shape:()=>n})}required(t){const n={};return Le.objectKeys(this.shape).forEach(r=>{if(t&&!t[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof qn;)i=i._def.innerType;n[r]=i}}),new qe({...this._def,shape:()=>n})}keyof(){return Mp(Le.objectKeys(this.shape))}}qe.create=(e,t)=>new qe({shape:()=>e,unknownKeys:"strip",catchall:Kn.create(),typeName:ye.ZodObject,...Se(t)});qe.strictCreate=(e,t)=>new qe({shape:()=>e,unknownKeys:"strict",catchall:Kn.create(),typeName:ye.ZodObject,...Se(t)});qe.lazycreate=(e,t)=>new qe({shape:e,unknownKeys:"strip",catchall:Kn.create(),typeName:ye.ZodObject,...Se(t)});class Yo extends Te{_parse(t){const{ctx:n}=this._processInputParams(t),r=this._def.options;function o(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const s=i.map(a=>new cn(a.ctx.common.issues));return se(n,{code:Y.invalid_union,unionErrors:s}),Ee}if(n.common.async)return Promise.all(r.map(async i=>{const s={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(o);{let i;const s=[];for(const c of r){const l={...n,common:{...n.common,issues:[]},parent:null},d=c._parseSync({data:n.data,path:n.path,parent:l});if(d.status==="valid")return d;d.status==="dirty"&&!i&&(i={result:d,ctx:l}),l.common.issues.length&&s.push(l.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;const a=s.map(c=>new cn(c));return se(n,{code:Y.invalid_union,unionErrors:a}),Ee}}get options(){return this._def.options}}Yo.create=(e,t)=>new Yo({options:e,typeName:ye.ZodUnion,...Se(t)});const la=e=>e instanceof Qo?la(e.schema):e instanceof dn?la(e.innerType()):e instanceof es?[e.value]:e instanceof hr?e.options:e instanceof ts?Object.keys(e.enum):e instanceof ns?la(e._def.innerType):e instanceof Go?[void 0]:e instanceof Zo?[null]:null;class rc extends Te{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==re.object)return se(n,{code:Y.invalid_type,expected:re.object,received:n.parsedType}),Ee;const r=this.discriminator,o=n.data[r],i=this.optionsMap.get(o);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(se(n,{code:Y.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Ee)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){const o=new Map;for(const i of n){const s=la(i.shape[t]);if(!s)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const a of s){if(o.has(a))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);o.set(a,i)}}return new rc({typeName:ye.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Se(r)})}}function ml(e,t){const n=ar(e),r=ar(t);if(e===t)return{valid:!0,data:e};if(n===re.object&&r===re.object){const o=Le.objectKeys(t),i=Le.objectKeys(e).filter(a=>o.indexOf(a)!==-1),s={...e,...t};for(const a of i){const c=ml(e[a],t[a]);if(!c.valid)return{valid:!1};s[a]=c.data}return{valid:!0,data:s}}else if(n===re.array&&r===re.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let i=0;i<e.length;i++){const s=e[i],a=t[i],c=ml(s,a);if(!c.valid)return{valid:!1};o.push(c.data)}return{valid:!0,data:o}}else return n===re.date&&r===re.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class Jo extends Te{_parse(t){const{status:n,ctx:r}=this._processInputParams(t),o=(i,s)=>{if(hl(i)||hl(s))return Ee;const a=ml(i.value,s.value);return a.valid?((fl(i)||fl(s))&&n.dirty(),{status:n.value,value:a.data}):(se(r,{code:Y.invalid_intersection_types}),Ee)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,s])=>o(i,s)):o(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Jo.create=(e,t,n)=>new Jo({left:e,right:t,typeName:ye.ZodIntersection,...Se(n)});class Sn extends Te{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==re.array)return se(r,{code:Y.invalid_type,expected:re.array,received:r.parsedType}),Ee;if(r.data.length<this._def.items.length)return se(r,{code:Y.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ee;!this._def.rest&&r.data.length>this._def.items.length&&(se(r,{code:Y.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const i=[...r.data].map((s,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new An(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(i).then(s=>ut.mergeArray(n,s)):ut.mergeArray(n,i)}get items(){return this._def.items}rest(t){return new Sn({...this._def,rest:t})}}Sn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Sn({items:e,typeName:ye.ZodTuple,rest:null,...Se(t)})};class Xo extends Te{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==re.object)return se(r,{code:Y.invalid_type,expected:re.object,received:r.parsedType}),Ee;const o=[],i=this._def.keyType,s=this._def.valueType;for(const a in r.data)o.push({key:i._parse(new An(r,a,r.path,a)),value:s._parse(new An(r,r.data[a],r.path,a))});return r.common.async?ut.mergeObjectAsync(n,o):ut.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof Te?new Xo({keyType:t,valueType:n,typeName:ye.ZodRecord,...Se(r)}):new Xo({keyType:an.create(),valueType:t,typeName:ye.ZodRecord,...Se(n)})}}class Ca extends Te{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==re.map)return se(r,{code:Y.invalid_type,expected:re.map,received:r.parsedType}),Ee;const o=this._def.keyType,i=this._def.valueType,s=[...r.data.entries()].map(([a,c],l)=>({key:o._parse(new An(r,a,r.path,[l,"key"])),value:i._parse(new An(r,c,r.path,[l,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of s){const l=await c.key,d=await c.value;if(l.status==="aborted"||d.status==="aborted")return Ee;(l.status==="dirty"||d.status==="dirty")&&n.dirty(),a.set(l.value,d.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const c of s){const l=c.key,d=c.value;if(l.status==="aborted"||d.status==="aborted")return Ee;(l.status==="dirty"||d.status==="dirty")&&n.dirty(),a.set(l.value,d.value)}return{status:n.value,value:a}}}}Ca.create=(e,t,n)=>new Ca({valueType:t,keyType:e,typeName:ye.ZodMap,...Se(n)});class Fr extends Te{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==re.set)return se(r,{code:Y.invalid_type,expected:re.set,received:r.parsedType}),Ee;const o=this._def;o.minSize!==null&&r.data.size<o.minSize.value&&(se(r,{code:Y.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&r.data.size>o.maxSize.value&&(se(r,{code:Y.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const i=this._def.valueType;function s(c){const l=new Set;for(const d of c){if(d.status==="aborted")return Ee;d.status==="dirty"&&n.dirty(),l.add(d.value)}return{status:n.value,value:l}}const a=[...r.data.values()].map((c,l)=>i._parse(new An(r,c,r.path,l)));return r.common.async?Promise.all(a).then(c=>s(c)):s(a)}min(t,n){return new Fr({...this._def,minSize:{value:t,message:fe.toString(n)}})}max(t,n){return new Fr({...this._def,maxSize:{value:t,message:fe.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}Fr.create=(e,t)=>new Fr({valueType:e,minSize:null,maxSize:null,typeName:ye.ZodSet,...Se(t)});class Ii extends Te{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==re.function)return se(n,{code:Y.invalid_type,expected:re.function,received:n.parsedType}),Ee;function r(a,c){return wa({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,ga(),Vo].filter(l=>!!l),issueData:{code:Y.invalid_arguments,argumentsError:c}})}function o(a,c){return wa({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,ga(),Vo].filter(l=>!!l),issueData:{code:Y.invalid_return_type,returnTypeError:c}})}const i={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof ji){const a=this;return yt(async function(...c){const l=new cn([]),d=await a._def.args.parseAsync(c,i).catch(y=>{throw l.addIssue(r(c,y)),l}),g=await Reflect.apply(s,this,d);return await a._def.returns._def.type.parseAsync(g,i).catch(y=>{throw l.addIssue(o(g,y)),l})})}else{const a=this;return yt(function(...c){const l=a._def.args.safeParse(c,i);if(!l.success)throw new cn([r(c,l.error)]);const d=Reflect.apply(s,this,l.data),g=a._def.returns.safeParse(d,i);if(!g.success)throw new cn([o(d,g.error)]);return g.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Ii({...this._def,args:Sn.create(t).rest(Ur.create())})}returns(t){return new Ii({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,r){return new Ii({args:t||Sn.create([]).rest(Ur.create()),returns:n||Ur.create(),typeName:ye.ZodFunction,...Se(r)})}}class Qo extends Te{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Qo.create=(e,t)=>new Qo({getter:e,typeName:ye.ZodLazy,...Se(t)});class es extends Te{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return se(n,{received:n.data,code:Y.invalid_literal,expected:this._def.value}),Ee}return{status:"valid",value:t.data}}get value(){return this._def.value}}es.create=(e,t)=>new es({value:e,typeName:ye.ZodLiteral,...Se(t)});function Mp(e,t){return new hr({values:e,typeName:ye.ZodEnum,...Se(t)})}class hr extends Te{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return se(n,{expected:Le.joinValues(r),received:n.parsedType,code:Y.invalid_type}),Ee}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),r=this._def.values;return se(n,{received:n.data,code:Y.invalid_enum_value,options:r}),Ee}return yt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return hr.create(t)}exclude(t){return hr.create(this.options.filter(n=>!t.includes(n)))}}hr.create=Mp;class ts extends Te{_parse(t){const n=Le.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==re.string&&r.parsedType!==re.number){const o=Le.objectValues(n);return se(r,{expected:Le.joinValues(o),received:r.parsedType,code:Y.invalid_type}),Ee}if(n.indexOf(t.data)===-1){const o=Le.objectValues(n);return se(r,{received:r.data,code:Y.invalid_enum_value,options:o}),Ee}return yt(t.data)}get enum(){return this._def.values}}ts.create=(e,t)=>new ts({values:e,typeName:ye.ZodNativeEnum,...Se(t)});class ji extends Te{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==re.promise&&n.common.async===!1)return se(n,{code:Y.invalid_type,expected:re.promise,received:n.parsedType}),Ee;const r=n.parsedType===re.promise?n.data:Promise.resolve(n.data);return yt(r.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ji.create=(e,t)=>new ji({type:e,typeName:ye.ZodPromise,...Se(t)});class dn extends Te{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ye.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:r}=this._processInputParams(t),o=this._def.effect||null,i={addIssue:s=>{se(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),o.type==="preprocess"){const s=o.transform(r.data,i);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(s).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:s,path:r.path,parent:r})}if(o.type==="refinement"){const s=a=>{const c=o.refinement(a,i);if(r.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?Ee:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?Ee:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(o.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!qo(s))return s;const a=o.transform(s.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>qo(s)?Promise.resolve(o.transform(s.value,i)).then(a=>({status:n.value,value:a})):s);Le.assertNever(o)}}dn.create=(e,t,n)=>new dn({schema:e,typeName:ye.ZodEffects,effect:t,...Se(n)});dn.createWithPreprocess=(e,t,n)=>new dn({schema:t,effect:{type:"preprocess",transform:e},typeName:ye.ZodEffects,...Se(n)});class qn extends Te{_parse(t){return this._getType(t)===re.undefined?yt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}qn.create=(e,t)=>new qn({innerType:e,typeName:ye.ZodOptional,...Se(t)});class zr extends Te{_parse(t){return this._getType(t)===re.null?yt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}zr.create=(e,t)=>new zr({innerType:e,typeName:ye.ZodNullable,...Se(t)});class ns extends Te{_parse(t){const{ctx:n}=this._processInputParams(t);let r=n.data;return n.parsedType===re.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}ns.create=(e,t)=>new ns({innerType:e,typeName:ye.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Se(t)});class Ea extends Te{_parse(t){const{ctx:n}=this._processInputParams(t),r={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return ba(o)?o.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new cn(r.common.issues)},input:r.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new cn(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Ea.create=(e,t)=>new Ea({innerType:e,typeName:ye.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Se(t)});class _a extends Te{_parse(t){if(this._getType(t)!==re.nan){const r=this._getOrReturnCtx(t);return se(r,{code:Y.invalid_type,expected:re.nan,received:r.parsedType}),Ee}return{status:"valid",value:t.data}}}_a.create=e=>new _a({typeName:ye.ZodNaN,...Se(e)});const Rm=Symbol("zod_brand");class Up extends Te{_parse(t){const{ctx:n}=this._processInputParams(t),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class bs extends Te{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?Ee:i.status==="dirty"?(n.dirty(),Dp(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const o=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?Ee:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:r.path,parent:r})}}static create(t,n){return new bs({in:t,out:n,typeName:ye.ZodPipeline})}}class xa extends Te{_parse(t){const n=this._def.innerType._parse(t);return qo(n)&&(n.value=Object.freeze(n.value)),n}}xa.create=(e,t)=>new xa({innerType:e,typeName:ye.ZodReadonly,...Se(t)});const Bp=(e,t={},n)=>e?Wi.create().superRefine((r,o)=>{var i,s;if(!e(r)){const a=typeof t=="function"?t(r):typeof t=="string"?{message:t}:t,c=(s=(i=a.fatal)!==null&&i!==void 0?i:n)!==null&&s!==void 0?s:!0,l=typeof a=="string"?{message:a}:a;o.addIssue({code:"custom",...l,fatal:c})}}):Wi.create(),km={object:qe.lazycreate};var ye;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(ye||(ye={}));const Im=(e,t={message:`Input not instance of ${e.name}`})=>Bp(n=>n instanceof e,t),Wp=an.create,jp=ur.create,Om=_a.create,Pm=pr.create,Fp=Ko.create,Lm=jr.create,Dm=ya.create,Mm=Go.create,Um=Zo.create,Bm=Wi.create,Wm=Ur.create,jm=Kn.create,Fm=va.create,zm=ln.create,Hm=qe.create,Vm=qe.strictCreate,qm=Yo.create,Km=rc.create,Gm=Jo.create,Zm=Sn.create,Ym=Xo.create,Jm=Ca.create,Xm=Fr.create,Qm=Ii.create,e0=Qo.create,t0=es.create,n0=hr.create,r0=ts.create,i0=ji.create,Ud=dn.create,o0=qn.create,s0=zr.create,a0=dn.createWithPreprocess,c0=bs.create,l0=()=>Wp().optional(),d0=()=>jp().optional(),u0=()=>Fp().optional(),p0={string:(e=>an.create({...e,coerce:!0})),number:(e=>ur.create({...e,coerce:!0})),boolean:(e=>Ko.create({...e,coerce:!0})),bigint:(e=>pr.create({...e,coerce:!0})),date:(e=>jr.create({...e,coerce:!0}))},h0=Ee;var p=Object.freeze({__proto__:null,defaultErrorMap:Vo,setErrorMap:wm,getErrorMap:ga,makeIssue:wa,EMPTY_PATH:bm,addIssueToContext:se,ParseStatus:ut,INVALID:Ee,DIRTY:Dp,OK:yt,isAborted:hl,isDirty:fl,isValid:qo,isAsync:ba,get util(){return Le},get objectUtil(){return pl},ZodParsedType:re,getParsedType:ar,ZodType:Te,ZodString:an,ZodNumber:ur,ZodBigInt:pr,ZodBoolean:Ko,ZodDate:jr,ZodSymbol:ya,ZodUndefined:Go,ZodNull:Zo,ZodAny:Wi,ZodUnknown:Ur,ZodNever:Kn,ZodVoid:va,ZodArray:ln,ZodObject:qe,ZodUnion:Yo,ZodDiscriminatedUnion:rc,ZodIntersection:Jo,ZodTuple:Sn,ZodRecord:Xo,ZodMap:Ca,ZodSet:Fr,ZodFunction:Ii,ZodLazy:Qo,ZodLiteral:es,ZodEnum:hr,ZodNativeEnum:ts,ZodPromise:ji,ZodEffects:dn,ZodTransformer:dn,ZodOptional:qn,ZodNullable:zr,ZodDefault:ns,ZodCatch:Ea,ZodNaN:_a,BRAND:Rm,ZodBranded:Up,ZodPipeline:bs,ZodReadonly:xa,custom:Bp,Schema:Te,ZodSchema:Te,late:km,get ZodFirstPartyTypeKind(){return ye},coerce:p0,any:Bm,array:zm,bigint:Pm,boolean:Fp,date:Lm,discriminatedUnion:Km,effect:Ud,enum:n0,function:Qm,instanceof:Im,intersection:Gm,lazy:e0,literal:t0,map:Jm,nan:Om,nativeEnum:r0,never:jm,null:Um,nullable:s0,number:jp,object:Hm,oboolean:u0,onumber:d0,optional:o0,ostring:l0,pipeline:c0,preprocess:a0,promise:i0,record:Ym,set:Xm,strictObject:Vm,string:Wp,symbol:Dm,transformer:Ud,tuple:Zm,undefined:Mm,union:qm,unknown:Wm,void:Fm,NEVER:h0,ZodIssueCode:Y,quotelessJson:gm,ZodError:cn});const Ke=p.object({message:p.string()});function ie(e){return p.literal(ae[e])}const ic=p.object({serializedMessage:p.string().optional(),accountAddress:p.string(),chainId:p.string(),notBefore:p.string().optional(),domain:p.string(),uri:p.string(),version:p.string(),nonce:p.string(),statement:p.string().optional(),resources:p.array(p.string()).optional(),requestId:p.string().optional(),issuedAt:p.string().optional(),expirationTime:p.string().optional()});p.object({accessList:p.array(p.string()),blockHash:p.string().nullable(),blockNumber:p.string().nullable(),chainId:p.string().or(p.number()),from:p.string(),gas:p.string(),hash:p.string(),input:p.string().nullable(),maxFeePerGas:p.string(),maxPriorityFeePerGas:p.string(),nonce:p.string(),r:p.string(),s:p.string(),to:p.string(),transactionIndex:p.string().nullable(),type:p.string(),v:p.string(),value:p.string()});const f0=p.object({chainId:p.string().or(p.number()),rpcUrl:p.optional(p.string())}),m0=p.object({email:p.string().email()}),g0=p.object({otp:p.string()}),w0=p.object({uri:p.string(),preferredAccountType:p.optional(p.string()),chainId:p.optional(p.string().or(p.number())),siwxMessage:p.optional(ic),rpcUrl:p.optional(p.string())}),b0=p.object({chainId:p.optional(p.string().or(p.number())),preferredAccountType:p.optional(p.string()),socialUri:p.optional(p.string()),siwxMessage:p.optional(ic),rpcUrl:p.optional(p.string())}),y0=p.object({provider:p.enum(["google","github","apple","facebook","x","discord"])}),v0=p.object({email:p.string().email()}),C0=p.object({otp:p.string()}),E0=p.object({otp:p.string()}),_0=p.object({themeMode:p.optional(p.enum(["light","dark"])),themeVariables:p.optional(p.record(p.string(),p.string().or(p.number()))),w3mThemeVariables:p.optional(p.record(p.string(),p.string()))}),x0=p.object({metadata:p.object({name:p.string(),description:p.string(),url:p.string(),icons:p.array(p.string())}).optional(),sdkVersion:p.string().optional(),sdkType:p.string().optional(),projectId:p.string()}),A0=p.object({type:p.string()}),S0=p.object({action:p.enum(["VERIFY_DEVICE","VERIFY_OTP","CONNECT"])}),T0=p.object({url:p.string()}),N0=p.object({userName:p.string()}),$0=p.object({email:p.string().optional().nullable(),address:p.string(),chainId:p.string().or(p.number()),accounts:p.array(p.object({address:p.string(),type:p.enum([De.ACCOUNT_TYPES.EOA,De.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:p.string().optional().nullable(),preferredAccountType:p.optional(p.string()),signature:p.string().optional(),message:p.string().optional(),siwxMessage:p.optional(ic)}),R0=p.object({action:p.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),k0=p.object({email:p.string().email().optional().nullable(),address:p.string(),chainId:p.string().or(p.number()),smartAccountDeployed:p.optional(p.boolean()),accounts:p.array(p.object({address:p.string(),type:p.enum([De.ACCOUNT_TYPES.EOA,De.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:p.optional(p.string()),signature:p.string().optional(),message:p.string().optional(),siwxMessage:p.optional(ic)}),I0=p.object({uri:p.string()}),O0=p.object({isConnected:p.boolean()}),P0=p.object({chainId:p.string().or(p.number())}),L0=p.object({chainId:p.string().or(p.number())}),D0=p.object({newEmail:p.string().email()}),M0=p.object({smartAccountEnabledNetworks:p.array(p.number())});p.object({address:p.string(),isDeployed:p.boolean()});const U0=p.object({version:p.string().optional()}),B0=p.object({type:p.string(),address:p.string()}),W0=p.any(),j0=p.object({method:p.literal("eth_accounts")}),F0=p.object({method:p.literal("eth_blockNumber")}),z0=p.object({method:p.literal("eth_call"),params:p.array(p.any())}),H0=p.object({method:p.literal("eth_chainId")}),V0=p.object({method:p.literal("eth_estimateGas"),params:p.array(p.any())}),q0=p.object({method:p.literal("eth_feeHistory"),params:p.array(p.any())}),K0=p.object({method:p.literal("eth_gasPrice")}),G0=p.object({method:p.literal("eth_getAccount"),params:p.array(p.any())}),Z0=p.object({method:p.literal("eth_getBalance"),params:p.array(p.any())}),Y0=p.object({method:p.literal("eth_getBlockByHash"),params:p.array(p.any())}),J0=p.object({method:p.literal("eth_getBlockByNumber"),params:p.array(p.any())}),X0=p.object({method:p.literal("eth_getBlockReceipts"),params:p.array(p.any())}),Q0=p.object({method:p.literal("eth_getBlockTransactionCountByHash"),params:p.array(p.any())}),eg=p.object({method:p.literal("eth_getBlockTransactionCountByNumber"),params:p.array(p.any())}),tg=p.object({method:p.literal("eth_getCode"),params:p.array(p.any())}),ng=p.object({method:p.literal("eth_getFilterChanges"),params:p.array(p.any())}),rg=p.object({method:p.literal("eth_getFilterLogs"),params:p.array(p.any())}),ig=p.object({method:p.literal("eth_getLogs"),params:p.array(p.any())}),og=p.object({method:p.literal("eth_getProof"),params:p.array(p.any())}),sg=p.object({method:p.literal("eth_getStorageAt"),params:p.array(p.any())}),ag=p.object({method:p.literal("eth_getTransactionByBlockHashAndIndex"),params:p.array(p.any())}),cg=p.object({method:p.literal("eth_getTransactionByBlockNumberAndIndex"),params:p.array(p.any())}),lg=p.object({method:p.literal("eth_getTransactionByHash"),params:p.array(p.any())}),dg=p.object({method:p.literal("eth_getTransactionCount"),params:p.array(p.any())}),ug=p.object({method:p.literal("eth_getTransactionReceipt"),params:p.array(p.any())}),pg=p.object({method:p.literal("eth_getUncleCountByBlockHash"),params:p.array(p.any())}),hg=p.object({method:p.literal("eth_getUncleCountByBlockNumber"),params:p.array(p.any())}),fg=p.object({method:p.literal("eth_maxPriorityFeePerGas")}),mg=p.object({method:p.literal("eth_newBlockFilter")}),gg=p.object({method:p.literal("eth_newFilter"),params:p.array(p.any())}),wg=p.object({method:p.literal("eth_newPendingTransactionFilter")}),bg=p.object({method:p.literal("eth_sendRawTransaction"),params:p.array(p.any())}),yg=p.object({method:p.literal("eth_syncing"),params:p.array(p.any())}),vg=p.object({method:p.literal("eth_uninstallFilter"),params:p.array(p.any())}),Bd=p.object({method:p.literal("personal_sign"),params:p.array(p.any())}),Cg=p.object({method:p.literal("eth_signTypedData_v4"),params:p.array(p.any())}),Eg=p.object({method:p.literal("eth_sendTransaction"),params:p.array(p.any())}),_g=p.object({method:p.literal("solana_signMessage"),params:p.object({message:p.string(),pubkey:p.string()})}),xg=p.object({method:p.literal("solana_signTransaction"),params:p.object({transaction:p.string()})}),Ag=p.object({method:p.literal("solana_signAllTransactions"),params:p.object({transactions:p.array(p.string())})}),Sg=p.object({method:p.literal("solana_signAndSendTransaction"),params:p.object({transaction:p.string(),options:p.object({skipPreflight:p.boolean().optional(),preflightCommitment:p.enum(["processed","confirmed","finalized","recent","single","singleGossip","root","max"]).optional(),maxRetries:p.number().optional(),minContextSlot:p.number().optional()}).optional()})}),Tg=p.object({method:p.literal("wallet_sendCalls"),params:p.array(p.object({chainId:p.string().or(p.number()).optional(),from:p.string().optional(),version:p.string().optional(),capabilities:p.any().optional(),calls:p.array(p.object({to:p.string().startsWith("0x"),data:p.string().startsWith("0x").optional(),value:p.string().optional()}))}))}),Ng=p.object({method:p.literal("wallet_getCallsStatus"),params:p.array(p.string())}),$g=p.object({method:p.literal("wallet_getCapabilities"),params:p.array(p.string().or(p.number()).optional()).optional()}),Rg=p.object({method:p.literal("wallet_grantPermissions"),params:p.array(p.any())}),kg=p.object({method:p.literal("wallet_revokePermissions"),params:p.any()}),Ig=p.object({method:p.literal("wallet_getAssets"),params:p.any()}),Wd=p.object({token:p.string()}),oe=p.object({id:p.string().optional()}),Cc={appEvent:oe.extend({type:ie("APP_SWITCH_NETWORK"),payload:f0}).or(oe.extend({type:ie("APP_CONNECT_EMAIL"),payload:m0})).or(oe.extend({type:ie("APP_CONNECT_DEVICE")})).or(oe.extend({type:ie("APP_CONNECT_OTP"),payload:g0})).or(oe.extend({type:ie("APP_CONNECT_SOCIAL"),payload:w0})).or(oe.extend({type:ie("APP_GET_FARCASTER_URI")})).or(oe.extend({type:ie("APP_CONNECT_FARCASTER")})).or(oe.extend({type:ie("APP_GET_USER"),payload:p.optional(b0)})).or(oe.extend({type:ie("APP_GET_SOCIAL_REDIRECT_URI"),payload:y0})).or(oe.extend({type:ie("APP_SIGN_OUT")})).or(oe.extend({type:ie("APP_IS_CONNECTED"),payload:p.optional(Wd)})).or(oe.extend({type:ie("APP_GET_CHAIN_ID")})).or(oe.extend({type:ie("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(oe.extend({type:ie("APP_INIT_SMART_ACCOUNT")})).or(oe.extend({type:ie("APP_SET_PREFERRED_ACCOUNT"),payload:A0})).or(oe.extend({type:ie("APP_RPC_REQUEST"),payload:Bd.or(Ig).or(j0).or(F0).or(z0).or(H0).or(V0).or(q0).or(K0).or(G0).or(Z0).or(Y0).or(J0).or(X0).or(Q0).or(eg).or(tg).or(ng).or(rg).or(ig).or(og).or(sg).or(ag).or(cg).or(lg).or(dg).or(ug).or(pg).or(hg).or(fg).or(mg).or(gg).or(wg).or(bg).or(yg).or(vg).or(Bd).or(Cg).or(Eg).or(_g).or(xg).or(Ag).or(Sg).or(Ng).or(Tg).or($g).or(Rg).or(kg).and(p.object({chainId:p.string().or(p.number()).optional(),chainNamespace:p.enum(["eip155","solana","polkadot","bip122","cosmos"]).optional(),rpcUrl:p.string().optional()}))})).or(oe.extend({type:ie("APP_UPDATE_EMAIL"),payload:v0})).or(oe.extend({type:ie("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:C0})).or(oe.extend({type:ie("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:E0})).or(oe.extend({type:ie("APP_SYNC_THEME"),payload:_0})).or(oe.extend({type:ie("APP_SYNC_DAPP_DATA"),payload:x0})).or(oe.extend({type:ie("APP_RELOAD")})).or(oe.extend({type:ie("APP_RPC_ABORT")})),frameEvent:oe.extend({type:ie("FRAME_SWITCH_NETWORK_ERROR"),payload:Ke}).or(oe.extend({type:ie("FRAME_SWITCH_NETWORK_SUCCESS"),payload:L0})).or(oe.extend({type:ie("FRAME_CONNECT_EMAIL_SUCCESS"),payload:S0})).or(oe.extend({type:ie("FRAME_CONNECT_EMAIL_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_GET_FARCASTER_URI_SUCCESS"),payload:T0})).or(oe.extend({type:ie("FRAME_GET_FARCASTER_URI_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_CONNECT_FARCASTER_SUCCESS"),payload:N0})).or(oe.extend({type:ie("FRAME_CONNECT_FARCASTER_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_CONNECT_OTP_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_CONNECT_OTP_SUCCESS")})).or(oe.extend({type:ie("FRAME_CONNECT_DEVICE_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_CONNECT_DEVICE_SUCCESS")})).or(oe.extend({type:ie("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:$0})).or(oe.extend({type:ie("FRAME_CONNECT_SOCIAL_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_GET_USER_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_GET_USER_SUCCESS"),payload:k0})).or(oe.extend({type:ie("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:I0})).or(oe.extend({type:ie("FRAME_SIGN_OUT_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_SIGN_OUT_SUCCESS")})).or(oe.extend({type:ie("FRAME_IS_CONNECTED_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_IS_CONNECTED_SUCCESS"),payload:O0})).or(oe.extend({type:ie("FRAME_GET_CHAIN_ID_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_GET_CHAIN_ID_SUCCESS"),payload:P0})).or(oe.extend({type:ie("FRAME_RPC_REQUEST_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_RPC_REQUEST_SUCCESS"),payload:W0})).or(oe.extend({type:ie("FRAME_SESSION_UPDATE"),payload:Wd})).or(oe.extend({type:ie("FRAME_UPDATE_EMAIL_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_UPDATE_EMAIL_SUCCESS"),payload:R0})).or(oe.extend({type:ie("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(oe.extend({type:ie("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:D0})).or(oe.extend({type:ie("FRAME_SYNC_THEME_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_SYNC_THEME_SUCCESS")})).or(oe.extend({type:ie("FRAME_SYNC_DAPP_DATA_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(oe.extend({type:ie("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:M0})).or(oe.extend({type:ie("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:B0})).or(oe.extend({type:ie("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_READY"),payload:U0})).or(oe.extend({type:ie("FRAME_RELOAD_ERROR"),payload:Ke})).or(oe.extend({type:ie("FRAME_RELOAD_SUCCESS")}))};function Ec(e,t={}){return typeof t?.type=="string"&&t?.type?.includes(e)}function Og({projectId:e,chainId:t,enableLogger:n,rpcUrl:r=Pp.BLOCKCHAIN_API_RPC_URL,enableCloudAuthAccount:o=!1}){const i=new URL(hm);return i.searchParams.set("projectId",e),i.searchParams.set("chainId",String(t)),i.searchParams.set("version",mm),i.searchParams.set("enableLogger",String(n)),i.searchParams.set("rpcUrl",r),o&&i.searchParams.set("enableCloudAuthAccount","true"),i.toString()}class Pg{constructor({projectId:t,isAppClient:n=!1,chainId:r="eip155:1",enableLogger:o=!0,enableCloudAuthAccount:i=!1,rpcUrl:s=Pp.BLOCKCHAIN_API_RPC_URL}){if(this.iframe=null,this.iframeIsReady=!1,this.initFrame=()=>{const a=document.getElementById("w3m-iframe");this.iframe&&!a&&document.body.appendChild(this.iframe)},this.events={registerFrameEventHandler:(a,c,l)=>{function d({data:g}){if(!Ec(ae.FRAME_EVENT_KEY,g))return;const w=Cc.frameEvent.safeParse(g);if(!w.success){console.warn("W3mFrame: invalid frame event",w.error.message);return}w.data?.id===a&&(c(w.data),window.removeEventListener("message",d))}Cn.isClient&&(window.addEventListener("message",d),l.addEventListener("abort",()=>{window.removeEventListener("message",d)}))},onFrameEvent:a=>{Cn.isClient&&window.addEventListener("message",({data:c})=>{if(!Ec(ae.FRAME_EVENT_KEY,c))return;const l=Cc.frameEvent.safeParse(c);l.success?a(l.data):console.warn("W3mFrame: invalid frame event",l.error.message)})},onAppEvent:a=>{Cn.isClient&&window.addEventListener("message",({data:c})=>{if(!Ec(ae.APP_EVENT_KEY,c))return;const l=Cc.appEvent.safeParse(c);l.success||console.warn("W3mFrame: invalid app event",l.error.message),a(c)})},postAppEvent:a=>{if(Cn.isClient){if(!this.iframe?.contentWindow)throw new Error("W3mFrame: iframe is not set");this.iframe.contentWindow.postMessage(a,"*")}},postFrameEvent:a=>{if(Cn.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");parent.postMessage(a,"*")}}},this.projectId=t,this.frameLoadPromise=new Promise((a,c)=>{this.frameLoadPromiseResolver={resolve:a,reject:c}}),this.rpcUrl=s,n&&(this.frameLoadPromise=new Promise((a,c)=>{this.frameLoadPromiseResolver={resolve:a,reject:c}}),Cn.isClient)){const a=document.createElement("iframe");a.id="w3m-iframe",a.src=Og({projectId:t,chainId:r,enableLogger:o,rpcUrl:this.rpcUrl,enableCloudAuthAccount:i}),a.name="w3m-secure-iframe",a.style.position="fixed",a.style.zIndex="999999",a.style.display="none",a.style.border="none",a.style.animationDelay="0s, 50ms",a.style.borderBottomLeftRadius="clamp(0px, var(--apkt-borderRadius-8), 44px)",a.style.borderBottomRightRadius="clamp(0px, var(--apkt-borderRadius-8), 44px)",this.iframe=a,this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")},this.events.onFrameEvent(c=>{c.type==="@w3m-frame/READY"&&(this.iframeIsReady=!0,this.frameLoadPromiseResolver?.resolve(void 0))})}}get networks(){const t=["eip155:1","eip155:5","eip155:11155111","eip155:10","eip155:420","eip155:42161","eip155:421613","eip155:137","eip155:80001","eip155:42220","eip155:1313161554","eip155:1313161555","eip155:56","eip155:97","eip155:43114","eip155:43113","eip155:324","eip155:280","eip155:100","eip155:8453","eip155:84531","eip155:84532","eip155:7777777","eip155:999","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"].map(n=>({[n]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=${n}&projectId=${this.projectId}`,chainId:n}}));return Object.assign({},...t)}}var so={exports:{}},_c,jd;function Lg(){if(jd)return _c;jd=1;function e(n){try{return JSON.stringify(n)}catch{return'"[Circular]"'}}_c=t;function t(n,r,o){var i=o&&o.stringify||e,s=1;if(typeof n=="object"&&n!==null){var a=r.length+s;if(a===1)return n;var c=new Array(a);c[0]=i(n);for(var l=1;l<a;l++)c[l]=i(r[l]);return c.join(" ")}if(typeof n!="string")return n;var d=r.length;if(d===0)return n;for(var g="",w=1-s,y=-1,E=n&&n.length||0,v=0;v<E;){if(n.charCodeAt(v)===37&&v+1<E){switch(y=y>-1?y:0,n.charCodeAt(v+1)){case 100:case 102:if(w>=d||r[w]==null)break;y<v&&(g+=n.slice(y,v)),g+=Number(r[w]),y=v+2,v++;break;case 105:if(w>=d||r[w]==null)break;y<v&&(g+=n.slice(y,v)),g+=Math.floor(Number(r[w])),y=v+2,v++;break;case 79:case 111:case 106:if(w>=d||r[w]===void 0)break;y<v&&(g+=n.slice(y,v));var x=typeof r[w];if(x==="string"){g+="'"+r[w]+"'",y=v+2,v++;break}if(x==="function"){g+=r[w].name||"<anonymous>",y=v+2,v++;break}g+=i(r[w]),y=v+2,v++;break;case 115:if(w>=d)break;y<v&&(g+=n.slice(y,v)),g+=String(r[w]),y=v+2,v++;break;case 37:y<v&&(g+=n.slice(y,v)),g+="%",y=v+2,v++,w--;break}++w}++v}return y===-1?n:(y<E&&(g+=n.slice(y)),g)}return _c}var Fd;function Dg(){if(Fd)return so.exports;Fd=1;const e=Lg();so.exports=d;const t=K().console||{},n={mapHttpRequest:O,mapHttpResponse:O,wrapRequestSerializer:B,wrapResponseSerializer:B,wrapErrorSerializer:B,req:O,res:O,err:A,errWithCause:A};function r(f,b){return f==="silent"?1/0:b.levels.values[f]}const o=Symbol("pino.logFuncs"),i=Symbol("pino.hierarchy"),s={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function a(f,b){const N={logger:b,parent:f[i]};b[i]=N}function c(f,b,N){const k={};b.forEach(H=>{k[H]=N[H]?N[H]:t[H]||t[s[H]||"log"]||F}),f[o]=k}function l(f,b){return Array.isArray(f)?f.filter(function(k){return k!=="!stdSerializers.err"}):f===!0?Object.keys(b):!1}function d(f){f=f||{},f.browser=f.browser||{};const b=f.browser.transmit;if(b&&typeof b.send!="function")throw Error("pino: transmit option must have a send function");const N=f.browser.write||t;f.browser.write&&(f.browser.asObject=!0);const k=f.serializers||{},H=l(f.browser.serialize,k);let q=f.browser.serialize;Array.isArray(f.browser.serialize)&&f.browser.serialize.indexOf("!stdSerializers.err")>-1&&(q=!1);const be=Object.keys(f.customLevels||{}),pe=["error","fatal","warn","info","debug","trace"].concat(be);typeof N=="function"&&pe.forEach(function(ke){N[ke]=N}),(f.enabled===!1||f.browser.disabled)&&(f.level="silent");const Ae=f.level||"info",G=Object.create(N);G.log||(G.log=F),c(G,pe,N),a({},G),Object.defineProperty(G,"levelVal",{get:Qe}),Object.defineProperty(G,"level",{get:Ye,set:Xe});const _e={transmit:b,serialize:H,asObject:f.browser.asObject,asObjectBindingsOnly:f.browser.asObjectBindingsOnly,formatters:f.browser.formatters,levels:pe,timestamp:S(f),messageKey:f.messageKey||"msg",onChild:f.onChild||F};G.levels=g(f),G.level=Ae,G.isLevelEnabled=function(ke){return this.levels.values[ke]?this.levels.values[ke]>=this.levels.values[this.level]:!1},G.setMaxListeners=G.getMaxListeners=G.emit=G.addListener=G.on=G.prependListener=G.once=G.prependOnceListener=G.removeListener=G.removeAllListeners=G.listeners=G.listenerCount=G.eventNames=G.write=G.flush=F,G.serializers=k,G._serialize=H,G._stdErrSerialize=q,G.child=function(...ke){return dt.call(this,_e,...ke)},b&&(G._logEvent=C());function Qe(){return r(this.level,this)}function Ye(){return this._level}function Xe(ke){if(ke!=="silent"&&!this.levels.values[ke])throw Error("unknown level "+ke);this._level=ke,E(this,_e,G,"error"),E(this,_e,G,"fatal"),E(this,_e,G,"warn"),E(this,_e,G,"info"),E(this,_e,G,"debug"),E(this,_e,G,"trace"),be.forEach(it=>{E(this,_e,G,it)})}function dt(ke,it,en){if(!it)throw new Error("missing bindings for child Pino");en=en||{},H&&it.serializers&&(en.serializers=it.serializers);const Sr=en.serializers;if(H&&Sr){var Ws=Object.assign({},k,Sr),Cd=f.browser.serialize===!0?Object.keys(Ws):H;delete it.serializers,R([it],Cd,Ws,this._stdErrSerialize)}function Ed(js){this._childLevel=(js._childLevel|0)+1,this.bindings=it,Ws&&(this.serializers=Ws,this._serialize=Cd),b&&(this._logEvent=C([].concat(js._logEvent.bindings,it)))}Ed.prototype=this;const oo=new Ed(this);return a(this,oo),oo.child=function(...js){return dt.call(this,ke,...js)},oo.level=en.level||this.level,ke.onChild(oo),oo}return G}function g(f){const b=f.customLevels||{},N=Object.assign({},d.levels.values,b),k=Object.assign({},d.levels.labels,w(b));return{values:N,labels:k}}function w(f){const b={};return Object.keys(f).forEach(function(N){b[f[N]]=N}),b}d.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},d.stdSerializers=n,d.stdTimeFunctions=Object.assign({},{nullTime:W,epochTime:V,unixTime:Q,isoTime:ce});function y(f){const b=[];f.bindings&&b.push(f.bindings);let N=f[i];for(;N.parent;)N=N.parent,N.logger.bindings&&b.push(N.logger.bindings);return b.reverse()}function E(f,b,N,k){if(Object.defineProperty(f,k,{value:r(f.level,N)>r(k,N)?F:N[o][k],writable:!0,enumerable:!0,configurable:!0}),f[k]===F){if(!b.transmit)return;const q=b.transmit.level||f.level,be=r(q,N);if(r(k,N)<be)return}f[k]=x(f,b,N,k);const H=y(f);H.length!==0&&(f[k]=v(H,f[k]))}function v(f,b){return function(){return b.apply(this,[...f,...arguments])}}function x(f,b,N,k){return(function(H){return function(){const be=b.timestamp(),pe=new Array(arguments.length),Ae=Object.getPrototypeOf&&Object.getPrototypeOf(this)===t?t:this;for(var G=0;G<pe.length;G++)pe[G]=arguments[G];var _e=!1;if(b.serialize&&(R(pe,this._serialize,this.serializers,this._stdErrSerialize),_e=!0),b.asObject||b.formatters?H.call(Ae,...I(this,k,pe,be,b)):H.apply(Ae,pe),b.transmit){const Qe=b.transmit.level||f._level,Ye=r(Qe,N),Xe=r(k,N);if(Xe<Ye)return;L(this,{ts:be,methodLevel:k,methodValue:Xe,transmitValue:N.levels.values[b.transmit.level||f._level],send:b.transmit.send,val:r(f._level,N)},pe,_e)}}})(f[o][k])}function I(f,b,N,k,H){const{level:q,log:be=Qe=>Qe}=H.formatters||{},pe=N.slice();let Ae=pe[0];const G={};let _e=(f._childLevel|0)+1;if(_e<1&&(_e=1),k&&(G.time=k),q){const Qe=q(b,f.levels.values[b]);Object.assign(G,Qe)}else G.level=f.levels.values[b];if(H.asObjectBindingsOnly){if(Ae!==null&&typeof Ae=="object")for(;_e--&&typeof pe[0]=="object";)Object.assign(G,pe.shift());return[be(G),...pe]}else{if(Ae!==null&&typeof Ae=="object"){for(;_e--&&typeof pe[0]=="object";)Object.assign(G,pe.shift());Ae=pe.length?e(pe.shift(),pe):void 0}else typeof Ae=="string"&&(Ae=e(pe.shift(),pe));return Ae!==void 0&&(G[H.messageKey]=Ae),[be(G)]}}function R(f,b,N,k){for(const H in f)if(k&&f[H]instanceof Error)f[H]=d.stdSerializers.err(f[H]);else if(typeof f[H]=="object"&&!Array.isArray(f[H])&&b)for(const q in f[H])b.indexOf(q)>-1&&q in N&&(f[H][q]=N[q](f[H][q]))}function L(f,b,N,k=!1){const H=b.send,q=b.ts,be=b.methodLevel,pe=b.methodValue,Ae=b.val,G=f._logEvent.bindings;k||R(N,f._serialize||Object.keys(f.serializers),f.serializers,f._stdErrSerialize===void 0?!0:f._stdErrSerialize),f._logEvent.ts=q,f._logEvent.messages=N.filter(function(_e){return G.indexOf(_e)===-1}),f._logEvent.level.label=be,f._logEvent.level.value=pe,H(be,f._logEvent,Ae),f._logEvent=C(G)}function C(f){return{ts:0,messages:[],bindings:f||[],level:{label:"",value:0}}}function A(f){const b={type:f.constructor.name,msg:f.message,stack:f.stack};for(const N in f)b[N]===void 0&&(b[N]=f[N]);return b}function S(f){return typeof f.timestamp=="function"?f.timestamp:f.timestamp===!1?W:V}function O(){return{}}function B(f){return f}function F(){}function W(){return!1}function V(){return Date.now()}function Q(){return Math.round(Date.now()/1e3)}function ce(){return new Date(Date.now()).toISOString()}function K(){function f(b){return typeof b<"u"&&b}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return f(self)||f(window)||f(this)||{}}}return so.exports.default=d,so.exports.pino=d,so.exports}var Ni=Dg();const zp=br(Ni),Mg=e=>JSON.stringify(e,(t,n)=>typeof n=="bigint"?n.toString()+"n":n),Ug=e=>{const t=/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,n=e.replace(t,'$1"$2n"$3');return JSON.parse(n,(r,o)=>typeof o=="string"&&o.match(/^\d+n$/)?BigInt(o.substring(0,o.length-1)):o)};function av(e){if(typeof e!="string")throw new Error(`Cannot safe json parse value of type ${typeof e}`);try{return Ug(e)}catch{return e}}function zd(e){return typeof e=="string"?e:Mg(e)||""}const Bg={level:"info"},oc="custom_context",Jl=1e3*1024;var Wg=Object.defineProperty,jg=(e,t,n)=>t in e?Wg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cr=(e,t,n)=>jg(e,typeof t!="symbol"?t+"":t,n);let Fg=class{constructor(t){cr(this,"nodeValue"),cr(this,"sizeInBytes"),cr(this,"next"),this.nodeValue=t,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}},Hd=class{constructor(t){cr(this,"lengthInNodes"),cr(this,"sizeInBytes"),cr(this,"head"),cr(this,"tail"),cr(this,"maxSizeInBytes"),this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=t,this.sizeInBytes=0}append(t){const n=new Fg(t);if(n.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${t} with size ${n.size}`);for(;this.size+n.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=n),this.tail=n):(this.head=n,this.tail=n),this.lengthInNodes++,this.sizeInBytes+=n.size}shift(){if(!this.head)return;const t=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=t.size}toArray(){const t=[];let n=this.head;for(;n!==null;)t.push(n.value),n=n.next;return t}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let t=this.head;return{next:()=>{if(!t)return{done:!0,value:null};const n=t.value;return t=t.next,{done:!1,value:n}}}}};var zg=Object.defineProperty,Hg=(e,t,n)=>t in e?zg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hs=(e,t,n)=>Hg(e,typeof t!="symbol"?t+"":t,n);let Hp=class{constructor(t,n=Jl){Hs(this,"logs"),Hs(this,"level"),Hs(this,"levelValue"),Hs(this,"MAX_LOG_SIZE_IN_BYTES"),this.level=t??"error",this.levelValue=Ni.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=n,this.logs=new Hd(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(t,n){n===Ni.levels.values.error?console.error(t):n===Ni.levels.values.warn?console.warn(t):n===Ni.levels.values.debug?console.debug(t):n===Ni.levels.values.trace?console.trace(t):console.log(t)}appendToLogs(t){this.logs.append(zd({timestamp:new Date().toISOString(),log:t}));const n=typeof t=="string"?JSON.parse(t).level:t.level;n>=this.levelValue&&this.forwardToConsole(t,n)}getLogs(){return this.logs}clearLogs(){this.logs=new Hd(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(t){const n=this.getLogArray();return n.push(zd({extraMetadata:t})),new Blob(n,{type:"application/json"})}};var Vg=Object.defineProperty,qg=(e,t,n)=>t in e?Vg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Kg=(e,t,n)=>qg(e,t+"",n);let Gg=class{constructor(t,n=Jl){Kg(this,"baseChunkLogger"),this.baseChunkLogger=new Hp(t,n)}write(t){this.baseChunkLogger.appendToLogs(t)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(t){return this.baseChunkLogger.logsToBlob(t)}downloadLogsBlobInBrowser(t){const n=URL.createObjectURL(this.logsToBlob(t)),r=document.createElement("a");r.href=n,r.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)}};var Zg=Object.defineProperty,Yg=(e,t,n)=>t in e?Zg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jg=(e,t,n)=>Yg(e,t+"",n);let Xg=class{constructor(t,n=Jl){Jg(this,"baseChunkLogger"),this.baseChunkLogger=new Hp(t,n)}write(t){this.baseChunkLogger.appendToLogs(t)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(t){return this.baseChunkLogger.logsToBlob(t)}};var Qg=Object.defineProperty,e1=Object.defineProperties,t1=Object.getOwnPropertyDescriptors,Vd=Object.getOwnPropertySymbols,n1=Object.prototype.hasOwnProperty,r1=Object.prototype.propertyIsEnumerable,qd=(e,t,n)=>t in e?Qg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Aa=(e,t)=>{for(var n in t||(t={}))n1.call(t,n)&&qd(e,n,t[n]);if(Vd)for(var n of Vd(t))r1.call(t,n)&&qd(e,n,t[n]);return e},Sa=(e,t)=>e1(e,t1(t));function i1(e){return Sa(Aa({},e),{level:e?.level||Bg.level})}function o1(e,t,n=oc){return e[n]=t,e}function s1(e,t=oc){return e[t]||""}function a1(e,t,n=oc){const r=s1(e,n);return r.trim()?`${r}/${t}`:t}function c1(e,t,n=oc){const r=a1(e,t,n),o=e.child({context:r});return o1(o,r,n)}function l1(e){var t,n;const r=new Gg((t=e.opts)==null?void 0:t.level,e.maxSizeInBytes);return{logger:zp(Sa(Aa({},e.opts),{level:"trace",browser:Sa(Aa({},(n=e.opts)==null?void 0:n.browser),{write:o=>r.write(o)})})),chunkLoggerController:r}}function d1(e){var t;const n=new Xg((t=e.opts)==null?void 0:t.level,e.maxSizeInBytes);return{logger:zp(Sa(Aa({},e.opts),{level:"trace"}),n),chunkLoggerController:n}}function u1(e){return typeof e.loggerOverride<"u"&&typeof e.loggerOverride!="string"?{logger:e.loggerOverride,chunkLoggerController:null}:typeof window<"u"?l1(e):d1(e)}class p1{constructor(t){const n=i1({level:fm}),{logger:r,chunkLoggerController:o}=u1({opts:n});this.logger=c1(r,this.constructor.name),this.chunkLoggerController=o,typeof window<"u"&&this.chunkLoggerController?.downloadLogsBlobInBrowser&&(window.downloadAppKitLogsBlob||(window.downloadAppKitLogsBlob={}),window.downloadAppKitLogsBlob.sdk=()=>{this.chunkLoggerController?.downloadLogsBlobInBrowser&&this.chunkLoggerController.downloadLogsBlobInBrowser({projectId:t})})}}class h1{constructor({projectId:t,chainId:n,enableLogger:r=!0,onTimeout:o,abortController:i,getActiveCaipNetwork:s,getCaipNetworks:a,enableCloudAuthAccount:c,metadata:l,sdkVersion:d,sdkType:g}){this.openRpcRequests=new Map,this.isInitialized=!1,r&&(this.w3mLogger=new p1(t)),this.abortController=i,this.getActiveCaipNetwork=s,this.getCaipNetworks=a;const w=this.getRpcUrl(n);this.projectId=t,this.sdkVersion=d,this.sdkType=g,this.metadata=l,this.w3mFrame=new Pg({projectId:t,isAppClient:!0,chainId:n,enableLogger:r,rpcUrl:w,enableCloudAuthAccount:c}),this.onTimeout=o,this.getLoginEmailUsed()&&this.createFrame()}async createFrame(){this.w3mFrame.initFrame(),this.initPromise=new Promise(t=>{this.w3mFrame.events.onFrameEvent(n=>{n.type===ae.FRAME_READY&&setTimeout(()=>{t()},500)})}),await this.initPromise,await this.syncDappData({metadata:this.metadata,projectId:this.projectId,sdkVersion:this.sdkVersion,sdkType:this.sdkType}),await this.getSmartAccountEnabledNetworks(),this.isInitialized=!0,this.initPromise=void 0}async init(){if(!this.isInitialized){if(this.initPromise){await this.initPromise;return}await this.createFrame()}}getLoginEmailUsed(){return!!ot.get(ae.EMAIL_LOGIN_USED_KEY)}getEmail(){return ot.get(ae.EMAIL)}getUsername(){return ot.get(ae.SOCIAL_USERNAME)}async reload(){try{await this.appEvent({type:ae.APP_RELOAD})}catch(t){throw this.w3mLogger?.logger.error({error:t},"Error reloading iframe"),t}}async connectEmail(t){try{Cn.checkIfAllowedToTriggerEmail(),await this.init();const n=await this.appEvent({type:ae.APP_CONNECT_EMAIL,payload:t});return this.setNewLastEmailLoginTime(),n}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error connecting email"),n}}async connectDevice(){try{return this.appEvent({type:ae.APP_CONNECT_DEVICE})}catch(t){throw this.w3mLogger?.logger.error({error:t},"Error connecting device"),t}}async connectOtp(t){try{return this.appEvent({type:ae.APP_CONNECT_OTP,payload:t})}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error connecting otp"),n}}async isConnected(){try{if(!this.getLoginEmailUsed())return{isConnected:!1};const t=await this.appEvent({type:ae.APP_IS_CONNECTED});return t?.isConnected||this.deleteAuthLoginCache(),t}catch(t){throw this.deleteAuthLoginCache(),this.w3mLogger?.logger.error({error:t},"Error checking connection"),t}}async getChainId(){try{const t=await this.appEvent({type:ae.APP_GET_CHAIN_ID});return this.setLastUsedChainId(t.chainId),t}catch(t){throw this.w3mLogger?.logger.error({error:t},"Error getting chain id"),t}}async getSocialRedirectUri(t){try{return await this.init(),this.appEvent({type:ae.APP_GET_SOCIAL_REDIRECT_URI,payload:t})}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error getting social redirect uri"),n}}async updateEmail(t){try{const n=await this.appEvent({type:ae.APP_UPDATE_EMAIL,payload:t});return this.setNewLastEmailLoginTime(),n}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error updating email"),n}}async updateEmailPrimaryOtp(t){try{return this.appEvent({type:ae.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:t})}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error updating email primary otp"),n}}async updateEmailSecondaryOtp(t){try{const n=await this.appEvent({type:ae.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:t});return this.setLoginSuccess(n.newEmail),n}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error updating email secondary otp"),n}}async syncTheme(t){try{return this.appEvent({type:ae.APP_SYNC_THEME,payload:t})}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error syncing theme"),n}}async syncDappData(t){try{return this.appEvent({type:ae.APP_SYNC_DAPP_DATA,payload:t})}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error syncing dapp data"),n}}async getSmartAccountEnabledNetworks(){try{const t=await this.appEvent({type:ae.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS});return this.persistSmartAccountEnabledNetworks(t.smartAccountEnabledNetworks),t}catch(t){throw this.persistSmartAccountEnabledNetworks([]),this.w3mLogger?.logger.error({error:t},"Error getting smart account enabled networks"),t}}async setPreferredAccount(t){try{return this.appEvent({type:ae.APP_SET_PREFERRED_ACCOUNT,payload:{type:t}})}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error setting preferred account"),n}}async connect(t){if(t?.socialUri)try{await this.init();const n=this.getRpcUrl(t.chainId),r=await this.appEvent({type:ae.APP_CONNECT_SOCIAL,payload:{uri:t.socialUri,preferredAccountType:t.preferredAccountType,chainId:t.chainId,siwxMessage:t.siwxMessage,rpcUrl:n}});return r.userName&&this.setSocialLoginSuccess(r.userName),this.setLoginSuccess(r.email),this.setLastUsedChainId(r.chainId),this.user=r,r}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error connecting social"),n}else try{const n=t?.chainId||this.getLastUsedChainId()||1,r=await this.getUser({chainId:n,preferredAccountType:t?.preferredAccountType,siwxMessage:t?.siwxMessage,rpcUrl:this.getRpcUrl(n)});return this.setLoginSuccess(r.email),this.setLastUsedChainId(r.chainId),this.user=r,r}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error connecting"),n}}async getUser(t){try{await this.init();const n=t?.chainId||this.getLastUsedChainId()||1,r=await this.appEvent({type:ae.APP_GET_USER,payload:{...t,chainId:n,rpcUrl:this.getRpcUrl(n)}});return this.user=r,r}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error connecting"),n}}async connectSocial({uri:t,chainId:n,preferredAccountType:r}){try{await this.init();const o=this.getRpcUrl(n),i=await this.appEvent({type:ae.APP_CONNECT_SOCIAL,payload:{uri:t,chainId:n,rpcUrl:o,preferredAccountType:r}});return i.userName&&this.setSocialLoginSuccess(i.userName),i}catch(o){throw this.w3mLogger?.logger.error({error:o},"Error connecting social"),o}}async getFarcasterUri(){try{return await this.init(),await this.appEvent({type:ae.APP_GET_FARCASTER_URI})}catch(t){throw this.w3mLogger?.logger.error({error:t},"Error getting farcaster uri"),t}}async connectFarcaster(){try{const t=await this.appEvent({type:ae.APP_CONNECT_FARCASTER});return t.userName&&this.setSocialLoginSuccess(t.userName),t}catch(t){throw this.w3mLogger?.logger.error({error:t},"Error connecting farcaster"),t}}async switchNetwork({chainId:t}){try{const n=this.getRpcUrl(t),r=await this.appEvent({type:ae.APP_SWITCH_NETWORK,payload:{chainId:t,rpcUrl:n}});return this.setLastUsedChainId(r.chainId),r}catch(n){throw this.w3mLogger?.logger.error({error:n},"Error switching network"),n}}async disconnect(){try{return this.deleteAuthLoginCache(),await new Promise(async n=>{const r=setTimeout(()=>{n()},3e3);await this.appEvent({type:ae.APP_SIGN_OUT}),clearTimeout(r),n()})}catch(t){throw this.w3mLogger?.logger.error({error:t},"Error disconnecting"),t}}async request(t){const n=t;try{if(De.GET_CHAIN_ID===t.method)return this.getLastUsedChainId();const r=t.chainNamespace||"eip155",o=this.getActiveCaipNetwork(r)?.id;n.chainNamespace=r,n.chainId=o,n.rpcUrl=this.getRpcUrl(o),this.rpcRequestHandler?.(t);const i=await this.appEvent({type:ae.APP_RPC_REQUEST,payload:n});return this.rpcSuccessHandler?.(i,n),i}catch(r){throw this.rpcErrorHandler?.(r,n),this.w3mLogger?.logger.error({error:r},"Error requesting"),r}}onRpcRequest(t){this.rpcRequestHandler=t}onRpcSuccess(t){this.rpcSuccessHandler=t}onRpcError(t){this.rpcErrorHandler=t}onIsConnected(t){this.w3mFrame.events.onFrameEvent(n=>{n.type===ae.FRAME_IS_CONNECTED_SUCCESS&&n.payload.isConnected&&t()})}onNotConnected(t){this.w3mFrame.events.onFrameEvent(n=>{n.type===ae.FRAME_IS_CONNECTED_ERROR&&t(),n.type===ae.FRAME_IS_CONNECTED_SUCCESS&&!n.payload.isConnected&&t()})}onConnect(t){this.w3mFrame.events.onFrameEvent(n=>{n.type===ae.FRAME_GET_USER_SUCCESS&&t(n.payload)})}onSocialConnected(t){this.w3mFrame.events.onFrameEvent(n=>{n.type===ae.FRAME_CONNECT_SOCIAL_SUCCESS&&t(n.payload)})}async getCapabilities(){try{return await this.request({method:"wallet_getCapabilities"})||{}}catch{return{}}}onSetPreferredAccount(t){this.w3mFrame.events.onFrameEvent(n=>{n.type===ae.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS?t(n.payload):n.type===ae.FRAME_SET_PREFERRED_ACCOUNT_ERROR&&t({type:De.ACCOUNT_TYPES.EOA})})}getAvailableChainIds(){return Object.keys(this.w3mFrame.networks)}async rejectRpcRequests(){try{await Promise.all(Array.from(this.openRpcRequests.values()).map(async({abortController:t,method:n})=>{De.SAFE_RPC_METHODS.includes(n)||t.abort(),await this.appEvent({type:ae.APP_RPC_ABORT})})),this.openRpcRequests.clear()}catch(t){this.w3mLogger?.logger.error({error:t},"Error aborting RPC request")}}async appEvent(t){let n,r;function o(c){return c.replace("@w3m-app/","")}const i=[ae.APP_SYNC_DAPP_DATA,ae.APP_SYNC_THEME,ae.APP_SET_PREFERRED_ACCOUNT],s=o(t.type);return!this.w3mFrame.iframeIsReady&&!i.includes(t.type)&&(r=setTimeout(()=>{this.onTimeout?.("iframe_load_failed"),this.abortController.abort()},2e4)),await this.w3mFrame.frameLoadPromise,clearTimeout(r),[ae.APP_CONNECT_EMAIL,ae.APP_CONNECT_DEVICE,ae.APP_CONNECT_OTP,ae.APP_CONNECT_SOCIAL,ae.APP_GET_SOCIAL_REDIRECT_URI].map(o).includes(s)&&(n=setTimeout(()=>{this.onTimeout?.("iframe_request_timeout"),this.abortController.abort()},12e4)),new Promise((c,l)=>{const d=Math.random().toString(36).substring(7);this.w3mLogger?.logger.info?.({event:t,id:d},"Sending app event"),this.w3mFrame.events.postAppEvent({...t,id:d});const g=new AbortController;if(s==="RPC_REQUEST"){const y=t;this.openRpcRequests.set(d,{...y.payload,abortController:g})}g.signal.addEventListener("abort",()=>{s==="RPC_REQUEST"?l(new Error("Request was aborted")):s!=="GET_FARCASTER_URI"&&l(new Error("Something went wrong"))});const w=(y,E)=>{y.id===d&&(E?.logger.info?.({framEvent:y,id:d},"Received frame response"),this.openRpcRequests.delete(y.id),y.type===`@w3m-frame/${s}_SUCCESS`?(n&&clearTimeout(n),r&&clearTimeout(r),"payload"in y&&c(y.payload),c(void 0)):y.type===`@w3m-frame/${s}_ERROR`&&(n&&clearTimeout(n),r&&clearTimeout(r),"payload"in y&&l(new Error(y.payload?.message||"An error occurred")),l(new Error("An error occurred"))))};this.w3mFrame.events.registerFrameEventHandler(d,y=>w(y,this.w3mLogger),this.abortController.signal)})}setNewLastEmailLoginTime(){ot.set(ae.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setSocialLoginSuccess(t){ot.set(ae.SOCIAL_USERNAME,t)}setLoginSuccess(t){t&&ot.set(ae.EMAIL,t),ot.set(ae.EMAIL_LOGIN_USED_KEY,"true"),ot.delete(ae.LAST_EMAIL_LOGIN_TIME)}deleteAuthLoginCache(){ot.delete(ae.EMAIL_LOGIN_USED_KEY),ot.delete(ae.EMAIL),ot.delete(ae.LAST_USED_CHAIN_KEY),ot.delete(ae.SOCIAL_USERNAME)}setLastUsedChainId(t){t&&ot.set(ae.LAST_USED_CHAIN_KEY,String(t))}getLastUsedChainId(){const t=ot.get(ae.LAST_USED_CHAIN_KEY)??void 0,n=Number(t);return isNaN(n)?t:n}persistSmartAccountEnabledNetworks(t){ot.set(ae.SMART_ACCOUNT_ENABLED_NETWORKS,t.join(","))}getRpcUrl(t){let n=t===void 0?void 0:"eip155";typeof t=="string"&&(t.includes(":")?n=um.parseCaipNetworkId(t)?.chainNamespace:Number.isInteger(Number(t))?n="eip155":n="solana");const r=this.getCaipNetworks(n);return(t?r.find(i=>String(i.id)===String(t)||i.caipNetworkId===t):r[0])?.rpcUrls.default.http?.[0]}}const f1="modulepreload",m1=function(e){return"/peak-flash/"+e},Kd={},ge=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){let c=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=c(n.map(l=>{if(l=m1(l),l in Kd)return;Kd[l]=!0;const d=l.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${g}`))return;const w=document.createElement("link");if(w.rel=d?"stylesheet":f1,d||(w.as="script"),w.crossOrigin="",w.href=l,a&&w.setAttribute("nonce",a),document.head.appendChild(w),d)return new Promise((y,E)=>{w.addEventListener("load",y),w.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},hv=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentBlockTimestamp",outputs:[{internalType:"uint256",name:"timestamp",type:"uint256"}],stateMutability:"view",type:"function"}],fv=[{name:"query",type:"function",stateMutability:"view",inputs:[{type:"tuple[]",name:"queries",components:[{type:"address",name:"sender"},{type:"string[]",name:"urls"},{type:"bytes",name:"data"}]}],outputs:[{type:"bool[]",name:"failures"},{type:"bytes[]",name:"responses"}]},{name:"HttpError",type:"error",inputs:[{type:"uint16",name:"status"},{type:"string",name:"message"}]}],Vp=[{inputs:[{name:"dns",type:"bytes"}],name:"DNSDecodingFailed",type:"error"},{inputs:[{name:"ens",type:"string"}],name:"DNSEncodingFailed",type:"error"},{inputs:[],name:"EmptyAddress",type:"error"},{inputs:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"HttpError",type:"error"},{inputs:[],name:"InvalidBatchGatewayResponse",type:"error"},{inputs:[{name:"errorData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{name:"name",type:"bytes"},{name:"resolver",type:"address"}],name:"ResolverNotContract",type:"error"},{inputs:[{name:"name",type:"bytes"}],name:"ResolverNotFound",type:"error"},{inputs:[{name:"primary",type:"string"},{name:"primaryAddress",type:"bytes"}],name:"ReverseAddressMismatch",type:"error"},{inputs:[{internalType:"bytes4",name:"selector",type:"bytes4"}],name:"UnsupportedResolverProfile",type:"error"}],mv=[...Vp,{name:"resolveWithGateways",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],gv=[...Vp,{name:"reverseWithGateways",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"uint256",name:"coinType"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolver"},{type:"address",name:"reverseResolver"}]}],wv=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],bv=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],yv=[{name:"isValidSignature",type:"function",stateMutability:"view",inputs:[{name:"hash",type:"bytes32"},{name:"signature",type:"bytes"}],outputs:[{name:"",type:"bytes4"}]}],vv=[{inputs:[{name:"_signer",type:"address"},{name:"_hash",type:"bytes32"},{name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{name:"_signer",type:"address"},{name:"_hash",type:"bytes32"},{name:"_signature",type:"bytes"}],outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function",name:"isValidSig"}],Vs=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}];function g1(){let e=()=>{},t=()=>{};return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}}const xc=new Map;function w1({fn:e,id:t,shouldSplitBatch:n,wait:r=0,sort:o}){const i=async()=>{const d=c();s();const g=d.map(({args:w})=>w);g.length!==0&&e(g).then(w=>{o&&Array.isArray(w)&&w.sort(o);for(let y=0;y<d.length;y++){const{resolve:E}=d[y];E?.([w[y],w])}}).catch(w=>{for(let y=0;y<d.length;y++){const{reject:E}=d[y];E?.(w)}})},s=()=>xc.delete(t),a=()=>c().map(({args:d})=>d),c=()=>xc.get(t)||[],l=d=>xc.set(t,[...c(),d]);return{flush:s,async schedule(d){const{promise:g,resolve:w,reject:y}=g1();return n?.([...a(),d])&&i(),c().length>0?(l({args:d,resolve:w,reject:y}),g):(l({args:d,resolve:w,reject:y}),setTimeout(i,r),g)}}}async function qp(e){return new Promise(t=>setTimeout(t,e))}function b1(e,{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((o,i)=>{const s=async({count:a=0}={})=>{const c=async({error:l})=>{const d=typeof t=="function"?t({count:a,error:l}):t;d&&await qp(d),s({count:a+1})};try{const l=await e();o(l)}catch(l){if(a<n&&await r({count:a,error:l}))return c({error:l});i(l)}};s()})}const gl=256;let qs=gl,Ks;function y1(e=11){if(!Ks||qs+e>gl*2){Ks="",qs=0;for(let t=0;t<gl;t++)Ks+=(256+Math.random()*256|0).toString(16).substring(1)}return Ks.substring(qs,qs+++e)}const Gs=new df(8192);function v1(e,{enabled:t=!0,id:n}){if(!t||!n)return e();if(Gs.get(n))return Gs.get(n);const r=e().finally(()=>Gs.delete(n));return Gs.set(n,r),r}function C1(e,t={}){return async(n,r={})=>{const{dedupe:o=!1,methods:i,retryDelay:s=150,retryCount:a=3,uid:c}={...t,...r},{method:l}=n;if(i?.exclude?.includes(l))throw new Ir(new Error("method not supported"),{method:l});if(i?.include&&!i.include.includes(l))throw new Ir(new Error("method not supported"),{method:l});const d=o?_p(`${c}.${Mr(n)}`):void 0;return v1(()=>b1(async()=>{try{return await e(n)}catch(g){const w=g;switch(w.code){case Eo.code:throw new Eo(w);case _o.code:throw new _o(w);case xo.code:throw new xo(w,{method:n.method});case Ao.code:throw new Ao(w);case Li.code:throw new Li(w);case So.code:throw new So(w);case To.code:throw new To(w);case No.code:throw new No(w);case Di.code:throw new Di(w);case Ir.code:throw new Ir(w,{method:n.method});case Mi.code:throw new Mi(w);case $o.code:throw new $o(w);case wo.code:throw new wo(w);case Ro.code:throw new Ro(w);case ko.code:throw new ko(w);case Io.code:throw new Io(w);case Oo.code:throw new Oo(w);case Po.code:throw new Po(w);case Lo.code:throw new Lo(w);case Do.code:throw new Do(w);case Mo.code:throw new Mo(w);case Uo.code:throw new Uo(w);case Bo.code:throw new Bo(w);case Wo.code:throw new Wo(w);case jo.code:throw new jo(w);case 5e3:throw new wo(w);default:throw g instanceof Be?g:new pf(w)}}},{delay:({count:g,error:w})=>{if(w&&w instanceof go){const y=w?.headers?.get("Retry-After");if(y?.match(/\d/))return Number.parseInt(y,10)*1e3}return~~(1<<g)*s},retryCount:a,shouldRetry:({error:g})=>E1(g)}),{enabled:o,id:d})}}function E1(e){return"code"in e&&typeof e.code=="number"?e.code===-1||e.code===Mi.code||e.code===Li.code:e instanceof go&&e.status?e.status===403||e.status===408||e.status===413||e.status===429||e.status===500||e.status===502||e.status===503||e.status===504:!0}function _1(e,{errorInstance:t=new Error("timed out"),timeout:n,signal:r}){return new Promise((o,i)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():i(t)},n)),o(await e({signal:a?.signal||null}))}catch(a){a?.name==="AbortError"&&i(t),i(a)}finally{clearTimeout(s)}})()})}function x1(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const Gd=x1();function A1(e,t={}){return{async request(n){const{body:r,fetchFn:o=t.fetchFn??fetch,onRequest:i=t.onRequest,onResponse:s=t.onResponse,timeout:a=t.timeout??1e4}=n,c={...t.fetchOptions??{},...n.fetchOptions??{}},{headers:l,method:d,signal:g}=c;try{const w=await _1(async({signal:E})=>{const v={...c,body:Array.isArray(r)?Mr(r.map(L=>({jsonrpc:"2.0",id:L.id??Gd.take(),...L}))):Mr({jsonrpc:"2.0",id:r.id??Gd.take(),...r}),headers:{"Content-Type":"application/json",...l},method:d||"POST",signal:g||(a>0?E:null)},x=new Request(e,v),I=await i?.(x,v)??{...v,url:e};return await o(I.url??e,I)},{errorInstance:new Ad({body:r,url:e}),timeout:a,signal:!0});s&&await s(w);let y;if(w.headers.get("Content-Type")?.startsWith("application/json"))y=await w.json();else{y=await w.text();try{y=JSON.parse(y||"{}")}catch(E){if(w.ok)throw E;y={error:y}}}if(!w.ok)throw new go({body:r,details:Mr(y.error)||w.statusText,headers:w.headers,status:w.status,url:e});return y}catch(w){throw w instanceof go||w instanceof Ad?w:new go({body:r,cause:w,url:e})}}}}function Kp({key:e,methods:t,name:n,request:r,retryCount:o=3,retryDelay:i=150,timeout:s,type:a},c){const l=y1();return{config:{key:e,methods:t,name:n,request:r,retryCount:o,retryDelay:i,timeout:s,type:a},request:C1(r,{methods:t,retryCount:o,retryDelay:i,uid:l}),value:c}}function Zd(e,t={}){const{key:n="fallback",name:r="Fallback",rank:o=!1,shouldThrow:i=S1,retryCount:s,retryDelay:a}=t;return({chain:c,pollingInterval:l=4e3,timeout:d,...g})=>{let w=e,y=()=>{};const E=Kp({key:n,name:r,async request({method:v,params:x}){let I;const R=async(L=0)=>{const C=w[L]({...g,chain:c,retryCount:0,timeout:d});try{const A=await C.request({method:v,params:x});return y({method:v,params:x,response:A,transport:C,status:"success"}),A}catch(A){if(y({error:A,method:v,params:x,transport:C,status:"error"}),i(A)||L===w.length-1||(I??=w.slice(L+1).some(S=>{const{include:O,exclude:B}=S({chain:c}).config.methods||{};return O?O.includes(v):B?!B.includes(v):!0}),!I))throw A;return R(L+1)}};return R()},retryCount:s,retryDelay:a,type:"fallback"},{onResponse:v=>y=v,transports:w.map(v=>v({chain:c,retryCount:0}))});if(o){const v=typeof o=="object"?o:{};T1({chain:c,interval:v.interval??l,onTransports:x=>w=x,ping:v.ping,sampleCount:v.sampleCount,timeout:v.timeout,transports:w,weights:v.weights})}return E}}function S1(e){return!!("code"in e&&typeof e.code=="number"&&(e.code===Di.code||e.code===wo.code||zl.nodeMessage.test(e.message)||e.code===5e3))}function T1({chain:e,interval:t=4e3,onTransports:n,ping:r,sampleCount:o=10,timeout:i=1e3,transports:s,weights:a={}}){const{stability:c=.7,latency:l=.3}=a,d=[],g=async()=>{const w=await Promise.all(s.map(async v=>{const x=v({chain:e,retryCount:0,timeout:i}),I=Date.now();let R,L;try{await(r?r({transport:x}):x.request({method:"net_listening"})),L=1}catch{L=0}finally{R=Date.now()}return{latency:R-I,success:L}}));d.push(w),d.length>o&&d.shift();const y=Math.max(...d.map(v=>Math.max(...v.map(({latency:x})=>x)))),E=s.map((v,x)=>{const I=d.map(S=>S[x].latency),L=1-I.reduce((S,O)=>S+O,0)/I.length/y,C=d.map(S=>S[x].success),A=C.reduce((S,O)=>S+O,0)/C.length;return A===0?[0,x]:[l*L+c*A,x]}).sort((v,x)=>x[0]-v[0]);n(E.map(([,v])=>s[v])),await qp(t),g()};g()}class N1 extends Be{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}function Zs(e,t={}){const{batch:n,fetchFn:r,fetchOptions:o,key:i="http",methods:s,name:a="HTTP JSON-RPC",onFetchRequest:c,onFetchResponse:l,retryDelay:d,raw:g}=t;return({chain:w,retryCount:y,timeout:E})=>{const{batchSize:v=1e3,wait:x=0}=typeof n=="object"?n:{},I=t.retryCount??y,R=E??t.timeout??1e4,L=e||w?.rpcUrls.default.http[0];if(!L)throw new N1;const C=A1(L,{fetchFn:r,fetchOptions:o,onRequest:c,onResponse:l,timeout:R});return Kp({key:i,methods:s,name:a,async request({method:A,params:S}){const O={method:A,params:S},{schedule:B}=w1({id:L,wait:x,shouldSplitBatch(Q){return Q.length>v},fn:Q=>C.request({body:Q}),sort:(Q,ce)=>Q.id-ce.id}),F=async Q=>n?B(Q):[await C.request({body:Q})],[{error:W,result:V}]=await F(O);if(g)return{error:W,result:V};if(W)throw new xp({body:O,error:W,url:L});return V},retryCount:I,retryDelay:d,timeout:R,type:"http"},{fetchOptions:o,url:L})}}async function ao(...e){const t=await fetch(...e);if(!t.ok)throw new Error(`HTTP status code: ${t.status}`,{cause:t});return t}class ys{constructor({baseUrl:t,clientId:n}){this.baseUrl=t,this.clientId=n}async get({headers:t,signal:n,cache:r,...o}){const i=this.createUrl(o);return(await ao(i,{method:"GET",headers:t,signal:n,cache:r})).json()}async getBlob({headers:t,signal:n,...r}){const o=this.createUrl(r);return(await ao(o,{method:"GET",headers:t,signal:n})).blob()}async post({body:t,headers:n,signal:r,...o}){const i=this.createUrl(o);return(await ao(i,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0,signal:r})).json()}async put({body:t,headers:n,signal:r,...o}){const i=this.createUrl(o);return(await ao(i,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0,signal:r})).json()}async delete({body:t,headers:n,signal:r,...o}){const i=this.createUrl(o);return(await ao(i,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0,signal:r})).json()}createUrl({path:t,params:n}){const r=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach(([o,i])=>{i&&r.searchParams.append(o,i)}),this.clientId&&r.searchParams.append("clientId",this.clientId),r}sendBeacon({body:t,...n}){const r=this.createUrl(n);return navigator.sendBeacon(r.toString(),t?JSON.stringify(t):void 0)}}const wl={getFeatureValue(e,t){const n=t?.[e];return n===void 0?Ie.DEFAULT_FEATURES[e]:n},filterSocialsByPlatform(e){if(!e||!e.length)return e;let t=e;return P.isTelegram()&&(P.isIos()&&(t=t.filter(n=>n!=="google")),P.isMac()&&(t=t.filter(n=>n!=="x")),P.isAndroid()&&(t=t.filter(n=>!["facebook","x"].includes(n)))),P.isMobile()&&(t=t.filter(n=>n!=="facebook")),t},isSocialsEnabled(){return Array.isArray($.state.features?.socials)&&$.state.features?.socials.length>0||Array.isArray($.state.remoteFeatures?.socials)&&$.state.remoteFeatures?.socials.length>0},isEmailEnabled(){return!!($.state.features?.email||$.state.remoteFeatures?.email)}},de=He({features:Ie.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:Ie.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{},enableMobileFullScreen:!1,coinbasePreference:"all"}),$={state:de,subscribeKey(e,t){return at(de,e,t)},setOptions(e){Object.assign(de,e)},setRemoteFeatures(e){if(!e)return;const t={...de.remoteFeatures,...e};de.remoteFeatures=t,de.remoteFeatures?.socials&&(de.remoteFeatures.socials=wl.filterSocialsByPlatform(de.remoteFeatures.socials)),de.features?.pay&&(de.remoteFeatures.email=!1,de.remoteFeatures.socials=!1)},setFeatures(e){if(!e)return;de.features||(de.features=Ie.DEFAULT_FEATURES);const t={...de.features,...e};de.features=t,de.features?.pay&&de.remoteFeatures&&(de.remoteFeatures.email=!1,de.remoteFeatures.socials=!1)},setProjectId(e){de.projectId=e},setCustomRpcUrls(e){de.customRpcUrls=e},setAllWallets(e){de.allWallets=e},setIncludeWalletIds(e){de.includeWalletIds=e},setExcludeWalletIds(e){de.excludeWalletIds=e},setFeaturedWalletIds(e){de.featuredWalletIds=e},setTokens(e){de.tokens=e},setTermsConditionsUrl(e){de.termsConditionsUrl=e},setPrivacyPolicyUrl(e){de.privacyPolicyUrl=e},setCustomWallets(e){de.customWallets=e},setIsSiweEnabled(e){de.isSiweEnabled=e},setIsUniversalProvider(e){de.isUniversalProvider=e},setSdkVersion(e){de.sdkVersion=e},setMetadata(e){de.metadata=e},setDisableAppend(e){de.disableAppend=e},setEIP6963Enabled(e){de.enableEIP6963=e},setDebug(e){de.debug=e},setEnableWalletGuide(e){de.enableWalletGuide=e},setEnableAuthLogger(e){de.enableAuthLogger=e},setEnableWallets(e){de.enableWallets=e},setPreferUniversalLinks(e){de.experimental_preferUniversalLinks=e},setSIWX(e){if(e)for(const[t,n]of Object.entries(Ie.SIWX_DEFAULTS))e[t]??=n;de.siwx=e},setConnectMethodsOrder(e){de.features={...de.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){de.features={...de.features,walletFeaturesOrder:e}},setSocialsOrder(e){de.remoteFeatures={...de.remoteFeatures,socials:e}},setCollapseWallets(e){de.features={...de.features,collapseWallets:e}},setEnableEmbedded(e){de.enableEmbedded=e},setAllowUnsupportedChain(e){de.allowUnsupportedChain=e},setManualWCControl(e){de.manualWCControl=e},setEnableNetworkSwitch(e){de.enableNetworkSwitch=e},setEnableMobileFullScreen(e){de.enableMobileFullScreen=P.isMobile()&&e},setEnableReconnect(e){de.enableReconnect=e},setCoinbasePreference(e){de.coinbasePreference=e},setDefaultAccountTypes(e={}){Object.entries(e).forEach(([t,n])=>{n&&(de.defaultAccountTypes[t]=n)})},setUniversalProviderConfigOverride(e){de.universalProviderConfigOverride=e},getUniversalProviderConfigOverride(){return de.universalProviderConfigOverride},getSnapshot(){return Ho(de)}},Rr=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),et=He({...Rr}),$1={state:et,subscribeKey(e,t){return at(et,e,t)},showLoading(e,t={}){this._showMessage({message:e,variant:"loading",...t})},showSuccess(e){this._showMessage({message:e,variant:"success"})},showSvg(e,t){this._showMessage({message:e,svg:t})},showError(e){const t=P.parseError(e);this._showMessage({message:t,variant:"error"})},hide(){et.message=Rr.message,et.variant=Rr.variant,et.svg=Rr.svg,et.open=Rr.open,et.autoClose=Rr.autoClose},_showMessage({message:e,svg:t,variant:n="success",autoClose:r=Rr.autoClose}){et.open?(et.open=!1,setTimeout(()=>{et.message=e,et.variant=n,et.svg=t,et.open=!0,et.autoClose=r},150)):(et.message=e,et.variant=n,et.svg=t,et.open=!0,et.autoClose=r)}},$e=$1,R1={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},Gp=P.getBlockchainApiUrl(),xt=He({clientId:null,api:new ys({baseUrl:Gp,clientId:null}),supportedChains:{http:[],ws:[]}}),xe={state:xt,async get(e){const{st:t,sv:n}=xe.getSdkProperties(),r=$.state.projectId,o={...e.params||{},st:t,sv:n,projectId:r};return xt.api.get({...e,params:o})},getSdkProperties(){const{sdkType:e,sdkVersion:t}=$.state;return{st:e||"unknown",sv:t||"unknown"}},async isNetworkSupported(e){if(!e)return!1;try{xt.supportedChains.http.length||await xe.getSupportedNetworks()}catch{return!1}return xt.supportedChains.http.includes(e)},async getSupportedNetworks(){try{const e=await xe.get({path:"v1/supported-chains"});return xt.supportedChains=e,e}catch{return xt.supportedChains}},async fetchIdentity({address:e}){const t=J.getIdentityFromCacheForAddress(e);if(t)return t;const n=await xe.get({path:`/v1/identity/${e}`,params:{sender:h.state.activeCaipAddress?P.getPlainAddress(h.state.activeCaipAddress):void 0}});return J.updateIdentityCache({address:e,identity:n,timestamp:Date.now()}),n},async fetchTransactions({account:e,cursor:t,signal:n,cache:r,chainId:o}){if(!await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))return{data:[],next:void 0};const s=J.getTransactionsCacheForAddress({address:e,chainId:o});if(s)return s;const a=await xe.get({path:`/v1/account/${e}/history`,params:{cursor:t,chainId:o},signal:n,cache:r});return J.updateTransactionsCache({address:e,chainId:o,timestamp:Date.now(),transactions:a}),a},async fetchSwapQuote({amount:e,userAddress:t,from:n,to:r,gasPrice:o}){return await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId)?xe.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:e,userAddress:t,from:n,to:r,gasPrice:o}}):{quotes:[]}},async fetchSwapTokens({chainId:e}){return await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId)?xe.get({path:"/v1/convert/tokens",params:{chainId:e}}):{tokens:[]}},async fetchTokenPrice({addresses:e}){if(!await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))return{fungibles:[]};const n=J.getTokenPriceCacheForAddresses(e);if(n)return n;const r=await xt.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:e,projectId:$.state.projectId},headers:{"Content-Type":"application/json"}});return J.updateTokenPriceCache({addresses:e,timestamp:Date.now(),tokenPrice:r}),r},async fetchSwapAllowance({tokenAddress:e,userAddress:t}){return await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId)?xe.get({path:"/v1/convert/allowance",params:{tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json"}}):{allowance:"0"}},async fetchGasPrice({chainId:e}){const{st:t,sv:n}=xe.getSdkProperties();if(!await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))throw new Error("Network not supported for Gas Price");return xe.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:e,st:t,sv:n}})},async generateSwapCalldata({amount:e,from:t,to:n,userAddress:r,disableEstimate:o}){if(!await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))throw new Error("Network not supported for Swaps");return xt.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:Ie.CONVERT_SLIPPAGE_TOLERANCE},projectId:$.state.projectId,from:t,to:n,userAddress:r,disableEstimate:o}})},async generateApproveCalldata({from:e,to:t,userAddress:n}){const{st:r,sv:o}=xe.getSdkProperties();if(!await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))throw new Error("Network not supported for Swaps");return xe.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:n,from:e,to:t,st:r,sv:o}})},async getBalance(e,t,n){const{st:r,sv:o}=xe.getSdkProperties();if(!await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))return $e.showError("Token Balance Unavailable"),{balances:[]};const s=`${t}:${e}`,a=J.getBalanceCacheForCaipAddress(s);if(a)return a;const c=await xe.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",chainId:t,forceUpdate:n,st:r,sv:o}});return J.updateBalanceCache({caipAddress:s,balance:c,timestamp:Date.now()}),c},async lookupEnsName(e){return await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId)?xe.get({path:`/v1/profile/account/${e}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}},async reverseLookupEnsName({address:e}){if(!await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))return[];const n=h.getAccountData()?.address;return xe.get({path:`/v1/profile/reverse/${e}`,params:{sender:n,apiVersion:"2"}})},async getEnsNameSuggestions(e){return await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId)?xe.get({path:`/v1/profile/suggestions/${e}`,params:{zone:"reown.id"}}):{suggestions:[]}},async registerEnsName({coinType:e,address:t,message:n,signature:r}){return await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId)?xt.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:n,signature:r},headers:{"Content-Type":"application/json"}}):{success:!1}},async generateOnRampURL({destinationWallets:e,partnerUserId:t,defaultNetwork:n,purchaseAmount:r,paymentAmount:o}){return await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId)?(await xt.api.post({path:"/v1/generators/onrampurl",params:{projectId:$.state.projectId},body:{destinationWallets:e,defaultNetwork:n,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:r,presetFiatAmount:o}})).url:""},async getOnrampOptions(){if(!await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await xe.get({path:"/v1/onramp/options"})}catch{return R1}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:n,network:r}){try{return await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId)?await xt.api.post({path:"/v1/onramp/quote",params:{projectId:$.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:n,network:r}}):null}catch{return{networkFee:{amount:n,currency:t.id},paymentSubtotal:{amount:n,currency:t.id},paymentTotal:{amount:n,currency:t.id},purchaseAmount:{amount:n,currency:t.id},quoteId:"mocked-quote-id"}}},async getSmartSessions(e){return await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId)?xe.get({path:`/v1/sessions/${e}`}):[]},async revokeSmartSession(e,t,n){return await xe.isNetworkSupported(h.state.activeCaipNetwork?.caipNetworkId)?xt.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:$.state.projectId},body:{pci:t,signature:n}}):{success:!1}},setClientId(e){xt.clientId=e,xt.api=new ys({baseUrl:Gp,clientId:e})}},jt={PHANTOM:{id:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",url:"https://phantom.app"},SOLFLARE:{id:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",url:"https://solflare.com"},COINBASE:{id:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",url:"https://go.cb-w.com"},BINANCE:{id:"2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",appId:"yFK5FCqYprrXDiVFbhyRx7",deeplink:"bnc://app.binance.com/mp/app",url:"https://app.binance.com/en/download"}},k1={handleMobileDeeplinkRedirect(e,t){const n=window.location.href,r=encodeURIComponent(n);if(e===jt.PHANTOM.id&&!("phantom"in window)){const o=n.startsWith("https")?"https":"http",i=n.split("/")[2],s=encodeURIComponent(`${o}://${i}`);window.location.href=`${jt.PHANTOM.url}/ul/browse/${r}?ref=${s}`}if(e===jt.SOLFLARE.id&&!("solflare"in window)&&(window.location.href=`${jt.SOLFLARE.url}/ul/v1/browse/${r}?ref=${r}`),t===z.CHAIN.SOLANA&&e===jt.COINBASE.id&&!("coinbaseSolana"in window)&&(window.location.href=`${jt.COINBASE.url}/dapp?cb_url=${r}`),t===z.CHAIN.BITCOIN&&e===jt.BINANCE.id&&!("binancew3w"in window)){const o=h.state.activeCaipNetwork,i=window.btoa("/pages/browser/index"),s=window.btoa(`url=${r}&defaultChainId=${o?.id??1}`),a=new URL(jt.BINANCE.deeplink);a.searchParams.set("appId",jt.BINANCE.appId),a.searchParams.set("startPagePath",i),a.searchParams.set("startPageQuery",s);const c=new URL(jt.BINANCE.url);c.searchParams.set("_dp",window.btoa(a.toString())),window.location.href=c.toString()}}},I1=Object.freeze({enabled:!0,events:[]}),O1=new ys({baseUrl:P.getAnalyticsUrl(),clientId:null}),P1=5,L1=60*1e3,or=He({...I1}),D1={state:or,subscribeKey(e,t){return at(or,e,t)},async sendError(e,t){if(!or.enabled)return;const n=Date.now();if(or.events.filter(i=>{const s=new Date(i.properties.timestamp||"").getTime();return n-s<L1}).length>=P1)return;const o={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:new Date().toISOString()}};or.events.push(o);try{if(typeof window>"u")return;const{projectId:i,sdkType:s,sdkVersion:a}=$.state;await O1.post({path:"/e",params:{projectId:i,st:s,sv:a||"html-wagmi-4.2.2"},body:{eventId:P.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:new Date().toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}},enable(){or.enabled=!0},disable(){or.enabled=!1},clearEvents(){or.events=[]}};class Tn extends Error{constructor(t,n,r){super(t),this.originalName="AppKitError",this.name="AppKitError",this.category=n,this.originalError=r,r&&r instanceof Error&&(this.originalName=r.name),Object.setPrototypeOf(this,Tn.prototype);let o=!1;if(r instanceof Error&&typeof r.stack=="string"&&r.stack){const i=r.stack,s=i.indexOf(`
`);if(s>-1){const a=i.substring(s+1);this.stack=`${this.name}: ${this.message}
${a}`,o=!0}}o||(Error.captureStackTrace?Error.captureStackTrace(this,Tn):this.stack||(this.stack=`${this.name}: ${this.message}`))}}function Yd(e,t){let n="";try{e instanceof Error?n=e.message:typeof e=="string"?n=e:typeof e=="object"&&e!==null?Object.keys(e).length===0?n="Unknown error":n=e?.message||JSON.stringify(e):n=String(e)}catch(o){n="Unknown error",console.error("Error parsing error message",o)}const r=e instanceof Tn?e:new Tn(n,t,e);throw D1.sendError(r,r.category),r}function hn(e,t="INTERNAL_SDK_ERROR"){const n={};return Object.keys(e).forEach(r=>{const o=e[r];if(typeof o=="function"){let i=o;o.constructor.name==="AsyncFunction"?i=async(...s)=>{try{return await o(...s)}catch(a){return Yd(a,t)}}:i=(...s)=>{try{return o(...s)}catch(a){return Yd(a,t)}},n[r]=i}else n[r]=o}),n}const Pt=He({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),M1={state:Pt,subscribeNetworkImages(e){return st(Pt.networkImages,()=>e(Pt.networkImages))},subscribeKey(e,t){return at(Pt,e,t)},subscribe(e){return st(Pt,()=>e(Pt))},setWalletImage(e,t){Pt.walletImages[e]=t},setNetworkImage(e,t){Pt.networkImages[e]=t},setChainImage(e,t){Pt.chainImages[e]=t},setConnectorImage(e,t){Pt.connectorImages={...Pt.connectorImages,[e]:t}},setTokenImage(e,t){Pt.tokenImages[e]=t},setCurrencyImage(e,t){Pt.currencyImages[e]=t}},nt=hn(M1),U1={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00",cosmos:"",sui:"",stacks:""},Ac=He({networkImagePromises:{}}),je={async fetchWalletImage(e){if(e)return await Z._fetchWalletImage(e),this.getWalletImageById(e)},async fetchNetworkImage(e){if(!e)return;const t=this.getNetworkImageById(e);return t||(Ac.networkImagePromises[e]||(Ac.networkImagePromises[e]=Z._fetchNetworkImage(e)),await Ac.networkImagePromises[e],this.getNetworkImageById(e))},getWalletImageById(e){if(e)return nt.state.walletImages[e]},getWalletImage(e){if(e?.image_url)return e?.image_url;if(e?.image_id)return nt.state.walletImages[e.image_id]},getNetworkImage(e){if(e?.assets?.imageUrl)return e?.assets?.imageUrl;if(e?.assets?.imageId)return nt.state.networkImages[e.assets.imageId]},getNetworkImageById(e){if(e)return nt.state.networkImages[e]},getConnectorImage(e){if(e?.imageUrl)return e.imageUrl;if(e?.info?.icon)return e.info.icon;if(e?.imageId)return nt.state.connectorImages[e.imageId]},getChainImage(e){return nt.state.networkImages[U1[e]]},getTokenImage(e){if(e)return nt.state.tokenImages[e]}},B1=P.getAnalyticsUrl(),W1=new ys({baseUrl:B1,clientId:null}),j1=["MODAL_CREATED"],F1=45,Jd=1e3*10,Ge=He({timestamp:Date.now(),lastFlush:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"},pendingEvents:[],subscribedToVisibilityChange:!1,walletImpressions:[]}),te={state:Ge,subscribe(e){return st(Ge,()=>e(Ge))},getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:n}=$.state;return{projectId:e,st:t,sv:n||"html-wagmi-4.2.2"}},shouldFlushEvents(){const e=JSON.stringify(Ge.pendingEvents).length/1024>F1,t=Ge.lastFlush+Jd<Date.now();return e||t},_setPendingEvent(e){try{let t=h.getAccountData()?.address;if("address"in e.data&&e.data.address&&(t=e.data.address),j1.includes(e.data.event)||typeof window>"u")return;const n=h.getActiveCaipNetwork()?.caipNetworkId;this.state.pendingEvents.push({eventId:P.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:{...e.data,address:t,properties:{..."properties"in e.data?e.data.properties:{},caipNetworkId:n}}}),Ge.reportedErrors.FORBIDDEN=!1,te.shouldFlushEvents()&&te._submitPendingEvents()}catch(t){console.warn("_setPendingEvent",t)}},sendEvent(e){Ge.timestamp=Date.now(),Ge.data=e;const t=["INITIALIZE","CONNECT_SUCCESS","SOCIAL_LOGIN_SUCCESS"];($.state.features?.analytics||t.includes(e.event))&&te._setPendingEvent(Ge),this.subscribeToFlushTriggers()},sendWalletImpressionEvent(e){Ge.walletImpressions.push(e)},_transformPendingEventsForBatch(e){try{return e.filter(t=>t.props.event!=="WALLET_IMPRESSION_V2")}catch{return e}},_submitPendingEvents(){if(Ge.lastFlush=Date.now(),!(Ge.pendingEvents.length===0&&Ge.walletImpressions.length===0))try{const e=te._transformPendingEventsForBatch(Ge.pendingEvents);Ge.walletImpressions.length&&e.push({eventId:P.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:Date.now(),props:{type:"track",event:"WALLET_IMPRESSION_V2",items:[...Ge.walletImpressions]}}),W1.sendBeacon({path:"/batch",params:te.getSdkProperties(),body:e}),Ge.reportedErrors.FORBIDDEN=!1,Ge.pendingEvents=[],Ge.walletImpressions=[]}catch{Ge.reportedErrors.FORBIDDEN=!0}},subscribeToFlushTriggers(){Ge.subscribedToVisibilityChange||typeof document>"u"||(Ge.subscribedToVisibilityChange=!0,document?.addEventListener?.("visibilitychange",()=>{document.visibilityState==="hidden"&&te._submitPendingEvents()}),document?.addEventListener?.("freeze",()=>{te._submitPendingEvents()}),window?.addEventListener?.("pagehide",()=>{te._submitPendingEvents()}),setInterval(()=>{te._submitPendingEvents()},Jd))}},z1=P.getApiUrl(),mt=new ys({baseUrl:z1,clientId:null}),H1=40,Xd=4,V1=20,ve=He({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],filteredWallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1,explorerWallets:[],explorerFilteredWallets:[],plan:{tier:"none",hasExceededUsageLimit:!1,limits:{isAboveRpcLimit:!1,isAboveMauLimit:!1}}}),Z={state:ve,subscribeKey(e,t){return at(ve,e,t)},_getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:n}=$.state;return{projectId:e,st:t||"appkit",sv:n||"html-wagmi-4.2.2"}},_filterOutExtensions(e){return $.state.isUniversalProvider?e.filter(t=>!!(t.mobile_link||t.desktop_link||t.webapp_link)):e},async _fetchWalletImage(e){const t=`${mt.baseUrl}/getWalletImage/${e}`,n=await mt.getBlob({path:t,params:Z._getSdkProperties()});nt.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${mt.baseUrl}/public/getAssetImage/${e}`,n=await mt.getBlob({path:t,params:Z._getSdkProperties()});nt.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${mt.baseUrl}/public/getAssetImage/${e}`,n=await mt.getBlob({path:t,params:Z._getSdkProperties()});nt.setConnectorImage(e,URL.createObjectURL(n))},async _fetchCurrencyImage(e){const t=`${mt.baseUrl}/public/getCurrencyImage/${e}`,n=await mt.getBlob({path:t,params:Z._getSdkProperties()});nt.setCurrencyImage(e,URL.createObjectURL(n))},async _fetchTokenImage(e){const t=`${mt.baseUrl}/public/getTokenImage/${e}`,n=await mt.getBlob({path:t,params:Z._getSdkProperties()});nt.setTokenImage(e,URL.createObjectURL(n))},_filterWalletsByPlatform(e){const t=e.length,n=P.isMobile()?e?.filter(o=>o.mobile_link||o.webapp_link?!0:Object.values(jt).map(s=>s.id).includes(o.id)):e,r=t-n.length;return{filteredWallets:n,mobileFilteredOutWalletsLength:r}},async fetchProjectConfig(){return(await mt.get({path:"/appkit/v1/config",params:Z._getSdkProperties()})).features},async fetchUsage(){try{const e=await mt.get({path:"/appkit/v1/project-limits",params:Z._getSdkProperties()}),{tier:t,isAboveMauLimit:n,isAboveRpcLimit:r}=e.planLimits,o=t==="starter",i=n||r;Z.state.plan={tier:t,hasExceededUsageLimit:o&&i,limits:{isAboveRpcLimit:r,isAboveMauLimit:n}}}catch(e){console.warn("Failed to fetch usage",e)}},async fetchAllowedOrigins(){try{const{allowedOrigins:e}=await mt.get({path:"/projects/v1/origins",params:Z._getSdkProperties()});return e}catch(e){if(e instanceof Error&&e.cause instanceof Response){const t=e.cause.status;if(t===z.HTTP_STATUS_CODES.TOO_MANY_REQUESTS)throw new Error("RATE_LIMITED",{cause:e});if(t>=z.HTTP_STATUS_CODES.SERVER_ERROR&&t<600)throw new Error("SERVER_ERROR",{cause:e});return[]}return[]}},async fetchNetworkImages(){const t=h.getAllRequestedCaipNetworks()?.map(({assets:n})=>n?.imageId).filter(Boolean).filter(n=>!je.getNetworkImageById(n));t&&await Promise.allSettled(t.map(n=>Z._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:e}=D.state,t=e.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(t.map(n=>Z._fetchConnectorImage(n)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(t=>Z._fetchCurrencyImage(t)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(t=>Z._fetchTokenImage(t)))},async fetchWallets(e){const t=e.exclude??[];Z._getSdkProperties().sv.startsWith("html-core-")&&t.push(...Object.values(jt).map(s=>s.id));const r=await mt.get({path:"/getWallets",params:{...Z._getSdkProperties(),...e,page:String(e.page),entries:String(e.entries),include:e.include?.join(","),exclude:t.join(",")}}),{filteredWallets:o,mobileFilteredOutWalletsLength:i}=Z._filterWalletsByPlatform(r?.data);return{data:o||[],count:r?.count,mobileFilteredOutWalletsLength:i}},async prefetchWalletRanks(){const e=D.state.connectors;if(!e?.length)return;const t={page:1,entries:20,badge:"certified"};if(t.names=e.map(o=>o.name).join(","),h.state.activeChain===z.CHAIN.EVM){const o=[...e.flatMap(i=>i.connectors?.map(s=>s.info?.rdns)||[]),...e.map(i=>i.info?.rdns)].filter(i=>typeof i=="string"&&i.length>0);o.length&&(t.rdns=o.join(","))}const{data:n}=await Z.fetchWallets(t);ve.explorerWallets=n;const r=h.getRequestedCaipNetworkIds().join(",");ve.explorerFilteredWallets=n.filter(o=>o.chains?.some(i=>r.includes(i)))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=$.state;if(e?.length){const t={...Z._getSdkProperties(),page:1,entries:e?.length??Xd,include:e},{data:n}=await Z.fetchWallets(t),r=[...n].sort((i,s)=>e.indexOf(i.id)-e.indexOf(s.id)),o=r.map(i=>i.image_id).filter(Boolean);await Promise.allSettled(o.map(i=>Z._fetchWalletImage(i))),ve.featured=r,ve.allFeatured=r}},async fetchRecommendedWallets(){try{ve.isFetchingRecommendedWallets=!0;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=$.state,r=[...t??[],...n??[]].filter(Boolean),o=h.getRequestedCaipNetworkIds().join(","),i={page:1,entries:Xd,include:e,exclude:r,chains:o},{data:s,count:a}=await Z.fetchWallets(i),c=J.getRecentWallets(),l=s.map(g=>g.image_id).filter(Boolean),d=c.map(g=>g.image_id).filter(Boolean);await Promise.allSettled([...l,...d].map(g=>Z._fetchWalletImage(g))),ve.recommended=s,ve.allRecommended=s,ve.count=a??0}catch{}finally{ve.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:e}){const{includeWalletIds:t,excludeWalletIds:n,featuredWalletIds:r}=$.state,o=h.getRequestedCaipNetworkIds().join(","),i=[...ve.recommended.map(({id:g})=>g),...n??[],...r??[]].filter(Boolean),s={page:e,entries:H1,include:t,exclude:i,chains:o},{data:a,count:c,mobileFilteredOutWalletsLength:l}=await Z.fetchWallets(s);ve.mobileFilteredOutWalletsLength=l+(ve.mobileFilteredOutWalletsLength??0);const d=a.slice(0,V1).map(g=>g.image_id).filter(Boolean);await Promise.allSettled(d.map(g=>Z._fetchWalletImage(g))),ve.wallets=P.uniqueBy([...ve.wallets,...Z._filterOutExtensions(a)],"id").filter(g=>g.chains?.some(w=>o.includes(w))),ve.count=c>ve.count?c:ve.count,ve.page=e},async initializeExcludedWallets({ids:e}){const t={page:1,entries:e.length,include:e},{data:n}=await Z.fetchWallets(t);n&&n.forEach(r=>{ve.excludedWallets.push({rdns:r.rdns,name:r.name})})},async searchWallet({search:e,badge:t}){const{includeWalletIds:n,excludeWalletIds:r}=$.state,o=h.getRequestedCaipNetworkIds().join(",");ve.search=[];const i={page:1,entries:100,search:e?.trim(),badge_type:t,include:n,exclude:r,chains:o},{data:s}=await Z.fetchWallets(i);te.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:t??"",search:e??""}});const a=s.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a.map(c=>Z._fetchWalletImage(c)),P.wait(300)]),ve.search=Z._filterOutExtensions(s)},initPromise(e,t){const n=ve.promises[e];return n||(ve.promises[e]=t())},prefetch({fetchConnectorImages:e=!0,fetchFeaturedWallets:t=!0,fetchRecommendedWallets:n=!0,fetchNetworkImages:r=!0,fetchWalletRanks:o=!0}={}){const i=[e&&Z.initPromise("connectorImages",Z.fetchConnectorImages),t&&Z.initPromise("featuredWallets",Z.fetchFeaturedWallets),n&&Z.initPromise("recommendedWallets",Z.fetchRecommendedWallets),r&&Z.initPromise("networkImages",Z.fetchNetworkImages),o&&Z.initPromise("walletRanks",Z.prefetchWalletRanks)].filter(Boolean);return Promise.allSettled(i)},prefetchAnalyticsConfig(){$.state.features?.analytics&&Z.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{const{isAnalyticsEnabled:e}=await mt.get({path:"/getAnalyticsConfig",params:Z._getSdkProperties()});$.setFeatures({analytics:e})}catch{$.setFeatures({analytics:!1})}},filterByNamespaces(e){if(!e?.length){ve.featured=ve.allFeatured,ve.recommended=ve.allRecommended;return}const t=h.getRequestedCaipNetworkIds().join(",");ve.featured=ve.allFeatured.filter(n=>n.chains?.some(r=>t.includes(r))),ve.recommended=ve.allRecommended.filter(n=>n.chains?.some(r=>t.includes(r))),ve.filteredWallets=ve.wallets.filter(n=>n.chains?.some(r=>t.includes(r)))},clearFilterByNamespaces(){ve.filteredWallets=[]},setFilterByNamespace(e){if(!e){ve.featured=ve.allFeatured,ve.recommended=ve.allRecommended;return}const t=h.getRequestedCaipNetworkIds().join(",");ve.featured=ve.allFeatured.filter(n=>n.chains?.some(r=>t.includes(r))),ve.recommended=ve.allRecommended.filter(n=>n.chains?.some(r=>t.includes(r))),ve.filteredWallets=ve.wallets.filter(n=>n.chains?.some(r=>t.includes(r)))}},q1=["ConnectingExternal","ConnectingMultiChain","ConnectingSocial","ConnectingFarcaster"],Me=He({view:"Connect",history:["Connect"],transactionStack:[]}),K1={state:Me,subscribeKey(e,t){return at(Me,e,t)},pushTransactionStack(e){Me.transactionStack.push(e)},popTransactionStack(e){const t=Me.transactionStack.pop();if(!t)return;const{onSuccess:n,onError:r,onCancel:o}=t;switch(e){case"success":n?.();break;case"error":r?.(),T.goBack();break;case"cancel":o?.(),T.goBack();break}},push(e,t){let n=e,r=t;Z.state.plan.hasExceededUsageLimit&&q1.includes(e)&&(n="UsageExceeded",r=void 0),n!==Me.view&&(Me.view=n,Me.history.push(n),Me.data=r)},reset(e,t){Me.view=e,Me.history=[e],Me.data=t},replace(e,t){Me.history.at(-1)===e||(Me.view=e,Me.history[Me.history.length-1]=e,Me.data=t)},goBack(){const e=h.state.activeCaipAddress,t=T.state.view==="ConnectingFarcaster",n=!e&&t;if(Me.history.length>1){Me.history.pop();const[r]=Me.history.slice(-1);r&&(e&&r==="Connect"?Me.view="Account":Me.view=r)}else Ce.close();Me.data?.wallet&&(Me.data.wallet=void 0),Me.data?.redirectView&&(Me.data.redirectView=void 0),setTimeout(()=>{if(n){h.setAccountProp("farcasterUrl",void 0,h.state.activeChain);const r=D.getAuthConnector();r?.provider?.reload();const o=Ho($.state);r?.provider?.syncDappData?.({metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId,sdkType:o.sdkType})}},100)},goBackToIndex(e){if(Me.history.length>1){Me.history=Me.history.slice(0,e+1);const[t]=Me.history.slice(-1);t&&(Me.view=t)}},goBackOrCloseModal(){T.state.history.length>1?T.goBack():Ce.close()}},T=hn(K1),Bn=He({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),bl={state:Bn,subscribe(e){return st(Bn,()=>e(Bn))},setThemeMode(e){Bn.themeMode=e;try{const t=D.getAuthConnector();if(t){const n=bl.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:n,w3mThemeVariables:ha(n,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){Bn.themeVariables={...Bn.themeVariables,...e};try{const t=D.getAuthConnector();if(t){const n=bl.getSnapshot().themeVariables;t.provider.syncTheme({themeVariables:n,w3mThemeVariables:ha(Bn.themeVariables,Bn.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return Ho(Bn)}},Or=hn(bl),Zp=Object.fromEntries(Sp.map(e=>[e,void 0])),G1=Object.fromEntries(Sp.map(e=>[e,!0])),Oe=He({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:Zp,filterByNamespaceMap:G1}),Z1={state:Oe,subscribe(e){return st(Oe,()=>{e(Oe)})},subscribeKey(e,t){return at(Oe,e,t)},initialize(e){e.forEach(t=>{const n=J.getConnectedConnectorId(t);n&&D.setConnectorId(n,t)})},setActiveConnector(e){e&&(Oe.activeConnector=Ui(e))},setConnectors(e){e.filter(o=>!Oe.allConnectors.some(i=>i.id===o.id&&D.getConnectorName(i.name)===D.getConnectorName(o.name)&&i.chain===o.chain)).forEach(o=>{o.type!=="MULTI_CHAIN"&&Oe.allConnectors.push(Ui(o))});const n=D.getEnabledNamespaces(),r=D.getEnabledConnectors(n);Oe.connectors=D.mergeMultiChainConnectors(r)},filterByNamespaces(e){Object.keys(Oe.filterByNamespaceMap).forEach(t=>{Oe.filterByNamespaceMap[t]=!1}),e.forEach(t=>{Oe.filterByNamespaceMap[t]=!0}),D.updateConnectorsForEnabledNamespaces()},filterByNamespace(e,t){Oe.filterByNamespaceMap[e]=t,D.updateConnectorsForEnabledNamespaces()},updateConnectorsForEnabledNamespaces(){const e=D.getEnabledNamespaces(),t=D.getEnabledConnectors(e),n=D.areAllNamespacesEnabled();Oe.connectors=D.mergeMultiChainConnectors(t),n?Z.clearFilterByNamespaces():Z.filterByNamespaces(e)},getEnabledNamespaces(){return Object.entries(Oe.filterByNamespaceMap).filter(([e,t])=>t).map(([e])=>e)},getEnabledConnectors(e){return Oe.allConnectors.filter(t=>e.includes(t.chain))},areAllNamespacesEnabled(){return Object.values(Oe.filterByNamespaceMap).every(e=>e)},mergeMultiChainConnectors(e){const t=D.generateConnectorMapByName(e),n=[];return t.forEach(r=>{const o=r[0],i=o?.id===z.CONNECTOR_ID.AUTH;r.length>1&&o?n.push({name:o.name,imageUrl:o.imageUrl,imageId:o.imageId,connectors:[...r],type:i?"AUTH":"MULTI_CHAIN",chain:"eip155",id:o?.id||""}):o&&n.push(o)}),n},generateConnectorMapByName(e){const t=new Map;return e.forEach(n=>{const{name:r}=n,o=D.getConnectorName(r);if(!o)return;const i=t.get(o)||[];i.find(a=>a.chain===n.chain)||i.push(n),t.set(o,i)}),t},getConnectorName(e){return e&&({"Trust Wallet":"Trust"}[e]||e)},getUniqueConnectorsByName(e){const t=[];return e.forEach(n=>{t.find(r=>r.chain===n.chain)||t.push(n)}),t},addConnector(e){if(e.id===z.CONNECTOR_ID.AUTH){const t=e,n=Ho($.state),r=Or.getSnapshot().themeMode,o=Or.getSnapshot().themeVariables;t?.provider?.syncDappData?.({metadata:n.metadata,sdkVersion:n.sdkVersion,projectId:n.projectId,sdkType:n.sdkType}),t?.provider?.syncTheme({themeMode:r,themeVariables:o,w3mThemeVariables:ha(o,r)}),D.setConnectors([e])}else D.setConnectors([e])},getAuthConnector(e){const t=e||h.state.activeChain,n=Oe.connectors.find(r=>r.id===z.CONNECTOR_ID.AUTH);if(n)return n?.connectors?.length?n.connectors.find(o=>o.chain===t):n},getAnnouncedConnectorRdns(){return Oe.connectors.filter(e=>e.type==="ANNOUNCED").map(e=>e.info?.rdns)},getConnectorById(e){return Oe.allConnectors.find(t=>t.id===e)},getConnector({id:e,rdns:t,namespace:n}){const r=n||h.state.activeChain;return Oe.allConnectors.filter(i=>i.chain===r).find(i=>i.explorerId===e||i.info?.rdns===t)},syncIfAuthConnector(e){if(e.id!=="AUTH")return;const t=e,n=Ho($.state),r=Or.getSnapshot().themeMode,o=Or.getSnapshot().themeVariables;t?.provider?.syncDappData?.({metadata:n.metadata,sdkVersion:n.sdkVersion,sdkType:n.sdkType,projectId:n.projectId}),t.provider.syncTheme({themeMode:r,themeVariables:o,w3mThemeVariables:ha(o,r)})},getConnectorsByNamespace(e){const t=Oe.allConnectors.filter(n=>n.chain===e);return D.mergeMultiChainConnectors(t)},canSwitchToSmartAccount(e){return h.checkIfSmartAccountEnabled()&&rt(e)===De.ACCOUNT_TYPES.EOA},selectWalletConnector(e){const t=T.state.data?.redirectView,n=D.getConnector({id:e.id,rdns:e.rdns});k1.handleMobileDeeplinkRedirect(n?.explorerId||e.id,h.state.activeChain),n?T.push("ConnectingExternal",{connector:n,wallet:e,redirectView:t}):T.push("ConnectingWalletConnect",{wallet:e,redirectView:t})},getConnectors(e){return e?D.getConnectorsByNamespace(e):D.mergeMultiChainConnectors(Oe.allConnectors)},setFilterByNamespace(e){Oe.filterByNamespace=e,Oe.connectors=D.getConnectors(e),Z.setFilterByNamespace(e)},setConnectorId(e,t){e&&(Oe.activeConnectorIds={...Oe.activeConnectorIds,[t]:e},J.setConnectedConnectorId(t,e))},removeConnectorId(e){Oe.activeConnectorIds={...Oe.activeConnectorIds,[e]:void 0},J.deleteConnectedConnectorId(e)},getConnectorId(e){if(e)return Oe.activeConnectorIds[e]},isConnected(e){return e?!!Oe.activeConnectorIds[e]:Object.values(Oe.activeConnectorIds).some(t=>!!t)},resetConnectorIds(){Oe.activeConnectorIds={...Zp}}},D=hn(Z1),Y1=1e3,co={checkNamespaceConnectorId(e,t){return D.getConnectorId(e)===t},isSocialProvider(e){return Ie.DEFAULT_REMOTE_FEATURES.socials.includes(e)},connectWalletConnect({walletConnect:e,connector:t,closeModalOnConnect:n=!0,redirectViewOnModalClose:r="Connect",onOpen:o,onConnect:i}){return new Promise((s,a)=>{if(e&&D.setActiveConnector(t),o?.(P.isMobile()&&e),r){const l=Ce.subscribeKey("open",d=>{d||(T.state.view!==r&&T.replace(r),l(),a(new Error("Modal closed")))})}const c=h.subscribeKey("activeCaipAddress",l=>{l&&(i?.(),n&&Ce.close(),c(),s(sn.parseCaipAddress(l)))})})},connectExternal(e){return new Promise((t,n)=>{const r=h.subscribeKey("activeCaipAddress",o=>{o&&(Ce.close(),r(),t(sn.parseCaipAddress(o)))});j.connectExternal(e,e.chain).catch(()=>{r(),n(new Error("Connection rejected"))})})},connectSocial({social:e,namespace:t,closeModalOnConnect:n=!0,onOpenFarcaster:r,onConnect:o}){let i,s=!1,a=null;const c=t||h.state.activeChain,l=h.subscribeKey("activeCaipAddress",d=>{d&&(n&&Ce.close(),l())});return new Promise((d,g)=>{async function w(E){if(E.data?.resultUri)if(E.origin===z.SECURE_SITE_SDK_ORIGIN){window.removeEventListener("message",w,!1);try{const v=D.getAuthConnector(c);if(v&&!s){i&&i.close(),s=!0;const x=E.data.resultUri;te.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:e}}),J.setConnectedSocialProvider(e),await j.connectExternal({id:v.id,type:v.type,socialUri:x},v.chain);const I=h.state.activeCaipAddress;if(!I){g(new Error("Failed to connect"));return}d(sn.parseCaipAddress(I)),te.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:e}})}}catch(v){te.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:P.parseError(v)}}),g(new Error("Failed to connect"))}}else te.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:"Untrusted Origin"}})}async function y(){if(te.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),e==="farcaster"){r?.();const E=Ce.subscribeKey("open",x=>{!x&&e==="farcaster"&&(g(new Error("Popup closed")),o?.(),E())}),v=D.getAuthConnector();if(v&&!h.getAccountData(c)?.farcasterUrl)try{const{url:I}=await v.provider.getFarcasterUri();h.setAccountProp("farcasterUrl",I,c)}catch{g(new Error("Failed to connect to farcaster"))}}else{const E=D.getAuthConnector();a=P.returnOpenHref(`${z.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes");try{if(E){const{uri:v}=await E.provider.getSocialRedirectUri({provider:e});if(a&&v){a.location.href=v,i=a;const x=setInterval(()=>{i?.closed&&!s&&(g(new Error("Popup closed")),clearInterval(x))},1e3);window.addEventListener("message",w,!1)}else a?.close(),g(new Error("Failed to initiate social connection"))}}catch{g(new Error("Failed to initiate social connection")),a?.close()}}}y()})},connectEmail({closeModalOnConnect:e=!0,redirectViewOnModalClose:t="Connect",onOpen:n,onConnect:r}){return new Promise((o,i)=>{if(n?.(),t){const a=Ce.subscribeKey("open",c=>{c||(T.state.view!==t&&T.replace(t),a(),i(new Error("Modal closed")))})}const s=h.subscribeKey("activeCaipAddress",a=>{a&&(r?.(),e&&Ce.close(),s(),o(sn.parseCaipAddress(a)))})})},async updateEmail(){const e=J.getConnectedConnectorId(h.state.activeChain),t=D.getAuthConnector();if(!t)throw new Error("No auth connector found");if(e!==z.CONNECTOR_ID.AUTH)throw new Error("Not connected to email or social");const n=t.provider.getEmail()??"";return await Ce.open({view:"UpdateEmailWallet",data:{email:n,redirectView:void 0}}),new Promise((r,o)=>{const i=setInterval(()=>{const a=t.provider.getEmail()??"";a!==n&&(Ce.close(),clearInterval(i),s(),r({email:a}))},Y1),s=Ce.subscribeKey("open",a=>{a||(T.state.view!=="Connect"&&T.push("Connect"),clearInterval(i),s(),o(new Error("Modal closed")))})})},canSwitchToSmartAccount(e){return h.checkIfSmartAccountEnabled()&&rt(e)===De.ACCOUNT_TYPES.EOA}};function Ta(){const e=h.state.activeCaipNetwork?.chainNamespace||"eip155",t=h.state.activeCaipNetwork?.id||1,n=Ie.NATIVE_TOKEN_ADDRESS[e];return`${e}:${t}:${n}`}function rt(e){return h.getAccountData(e)?.preferredAccountType}function Ys(e){return e?h.state.chains.get(e)?.networkState?.caipNetwork:h.state.activeCaipNetwork}const En={getConnectionStatus(e,t){const n=D.state.activeConnectorIds[t],r=j.getConnections(t);return!!n&&e.connectorId===n?"connected":r.some(s=>s.connectorId.toLowerCase()===e.connectorId.toLowerCase())?"active":"disconnected"},excludeConnectorAddressFromConnections({connections:e,connectorId:t,addresses:n}){return e.map(r=>{if((t?r.connectorId.toLowerCase()===t.toLowerCase():!1)&&n){const i=r.accounts.filter(s=>!n.some(c=>c.toLowerCase()===s.address.toLowerCase()));return{...r,accounts:i}}return r})},excludeExistingConnections(e,t){const n=new Set(e);return t.filter(r=>!n.has(r.connectorId))},getConnectionsByConnectorId(e,t){return e.filter(n=>n.connectorId.toLowerCase()===t.toLowerCase())},getConnectionsData(e){const t=!!$.state.remoteFeatures?.multiWallet,n=D.state.activeConnectorIds[e],r=j.getConnections(e),i=(j.state.recentConnections.get(e)??[]).filter(a=>D.getConnectorById(a.connectorId)),s=En.excludeExistingConnections([...r.map(a=>a.connectorId),...n?[n]:[]],i);return t?{connections:r,recentConnections:s}:{connections:r.filter(a=>a.connectorId.toLowerCase()===n?.toLowerCase()),recentConnections:[]}}},Ve=He({transactions:[],transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),J1={state:Ve,subscribe(e){return st(Ve,()=>e(Ve))},setLastNetworkInView(e){Ve.lastNetworkInView=e},async fetchTransactions(e){if(!e)throw new Error("Transactions can't be fetched without an accountAddress");Ve.loading=!0;try{const t=await xe.fetchTransactions({account:e,cursor:Ve.next,chainId:h.state.activeCaipNetwork?.caipNetworkId}),n=wt.filterSpamTransactions(t.data),r=wt.filterByConnectedChain(n),o=[...Ve.transactions,...r];Ve.loading=!1,Ve.transactions=o,Ve.transactionsByYear=wt.groupTransactionsByYearAndMonth(Ve.transactionsByYear,r),Ve.empty=o.length===0,Ve.next=t.next?t.next:void 0}catch{const n=h.state.activeChain;te.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:$.state.projectId,cursor:Ve.next,isSmartAccount:rt(n)===De.ACCOUNT_TYPES.SMART_ACCOUNT}}),$e.showError("Failed to fetch transactions"),Ve.loading=!1,Ve.empty=!0,Ve.next=void 0}},groupTransactionsByYearAndMonth(e={},t=[]){const n=e;return t.forEach(r=>{const o=new Date(r.metadata.minedAt).getFullYear(),i=new Date(r.metadata.minedAt).getMonth(),s=n[o]??{},c=(s[i]??[]).filter(l=>l.id!==r.id);n[o]={...s,[i]:[...c,r].sort((l,d)=>new Date(d.metadata.minedAt).getTime()-new Date(l.metadata.minedAt).getTime())}}),n},filterSpamTransactions(e){return e.filter(t=>!t.transfers.every(r=>r.nft_info?.flags.is_spam===!0))},filterByConnectedChain(e){const t=h.state.activeCaipNetwork?.caipNetworkId;return e.filter(r=>r.metadata.chain===t)},clearCursor(){Ve.next=void 0},resetTransactions(){Ve.transactions=[],Ve.transactionsByYear={},Ve.lastNetworkInView=void 0,Ve.loading=!1,Ve.empty=!1,Ve.next=void 0}},wt=hn(J1,"API_ERROR"),Pe=He({connections:new Map,recentConnections:new Map,isSwitchingConnection:!1,wcError:!1,buffering:!1,status:"disconnected"});let Tr;const X1={state:Pe,subscribe(e){return st(Pe,()=>e(Pe))},subscribeKey(e,t){return at(Pe,e,t)},_getClient(){return Pe._client},setClient(e){Pe._client=Ui(e)},initialize(e){const t=e.filter(n=>!!n.namespace).map(n=>n.namespace);j.syncStorageConnections(t)},syncStorageConnections(e){const t=J.getConnections(),n=e??Array.from(h.state.chains.keys());for(const r of n){const o=t[r]??[],i=new Map(Pe.recentConnections);i.set(r,o),Pe.recentConnections=i}},getConnections(e){return e?Pe.connections.get(e)??[]:[]},hasAnyConnection(e){const t=j.state.connections;return Array.from(t.values()).flatMap(n=>n).some(({connectorId:n})=>n===e)},async connectWalletConnect({cache:e="auto"}={}){const t=P.isTelegram()||P.isSafari()&&P.isIos();if(e==="always"||e==="auto"&&t){if(Tr){await Tr,Tr=void 0;return}if(!P.isPairingExpired(Pe?.wcPairingExpiry)){const n=Pe.wcUri;Pe.wcUri=n;return}Tr=j._getClient()?.connectWalletConnect?.().catch(()=>{}),j.state.status="connecting",await Tr,Tr=void 0,Pe.wcPairingExpiry=void 0,j.state.status="connected"}else await j._getClient()?.connectWalletConnect?.()},async connectExternal(e,t,n=!0){const r=await j._getClient()?.connectExternal?.(e);return n&&h.setActiveNamespace(t),r},async reconnectExternal(e){await j._getClient()?.reconnectExternal?.(e);const t=e.chain||h.state.activeChain;t&&D.setConnectorId(e.id,t)},async setPreferredAccountType(e,t){if(!t)return;Ce.setLoading(!0,h.state.activeChain);const n=D.getAuthConnector();n&&(h.setAccountProp("preferredAccountType",e,t),await n.provider.setPreferredAccount(e),J.setPreferredAccountTypes(Object.entries(h.state.chains).reduce((r,[o,i])=>{const s=o,a=rt(s);return a!==void 0&&(r[s]=a),r},{})),await j.reconnectExternal(n),Ce.setLoading(!1,h.state.activeChain),te.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:h.state.activeCaipNetwork?.caipNetworkId||""}}))},async signMessage(e){return j._getClient()?.signMessage(e)},parseUnits(e,t){return j._getClient()?.parseUnits(e,t)},formatUnits(e,t){return j._getClient()?.formatUnits(e,t)},updateBalance(e){return j._getClient()?.updateBalance(e)},async sendTransaction(e){return j._getClient()?.sendTransaction(e)},async getCapabilities(e){return j._getClient()?.getCapabilities(e)},async grantPermissions(e){return j._getClient()?.grantPermissions(e)},async walletGetAssets(e){return j._getClient()?.walletGetAssets(e)??{}},async estimateGas(e){return j._getClient()?.estimateGas(e)},async writeContract(e){return j._getClient()?.writeContract(e)},async getEnsAddress(e){return j._getClient()?.getEnsAddress(e)},async getEnsAvatar(e){return j._getClient()?.getEnsAvatar(e)},checkInstalled(e){return j._getClient()?.checkInstalled?.(e)||!1},resetWcConnection(){Pe.wcUri=void 0,Pe.wcPairingExpiry=void 0,Pe.wcLinking=void 0,Pe.recentWallet=void 0,Pe.status="disconnected",wt.resetTransactions(),J.deleteWalletConnectDeepLink(),J.deleteRecentWallet()},resetUri(){Pe.wcUri=void 0,Pe.wcPairingExpiry=void 0,Tr=void 0},finalizeWcConnection(e){const{wcLinking:t,recentWallet:n}=j.state;t&&J.setWalletConnectDeepLink(t),n&&J.setAppKitRecent(n),e&&te.sendEvent({type:"track",event:"CONNECT_SUCCESS",address:e,properties:{method:t?"mobile":"qrcode",name:T.state.data?.wallet?.name||"Unknown",view:T.state.view,walletRank:n?.order}})},setWcBasic(e){Pe.wcBasic=e},setUri(e){Pe.wcUri=e,Pe.wcPairingExpiry=P.getPairingExpiry()},setWcLinking(e){Pe.wcLinking=e},setWcError(e){Pe.wcError=e,Pe.buffering=!1},setRecentWallet(e){Pe.recentWallet=e},setBuffering(e){Pe.buffering=e},setStatus(e){Pe.status=e},setIsSwitchingConnection(e){Pe.isSwitchingConnection=e},async disconnect({id:e,namespace:t,initialDisconnect:n}={}){try{await j._getClient()?.disconnect({id:e,chainNamespace:t,initialDisconnect:n})}catch(r){throw new Tn("Failed to disconnect","INTERNAL_SDK_ERROR",r)}},async disconnectConnector({id:e,namespace:t}){try{await j._getClient()?.disconnectConnector({id:e,namespace:t})}catch(n){throw new Tn("Failed to disconnect connector","INTERNAL_SDK_ERROR",n)}},setConnections(e,t){const n=new Map(Pe.connections);n.set(t,e),Pe.connections=n},async handleAuthAccountSwitch({address:e,namespace:t}){const r=h.getAccountData(t)?.user?.accounts?.find(i=>i.type==="smartAccount"),o=r&&r.address.toLowerCase()===e.toLowerCase()&&co.canSwitchToSmartAccount(t)?"smartAccount":"eoa";await j.setPreferredAccountType(o,t)},async handleActiveConnection({connection:e,namespace:t,address:n}){const r=D.getConnectorById(e.connectorId),o=e.connectorId===z.CONNECTOR_ID.AUTH;if(!r)throw new Error(`No connector found for connection: ${e.connectorId}`);if(o)n&&await j.handleAuthAccountSwitch({address:n,namespace:t});else return(await j.connectExternal({id:r.id,type:r.type,provider:r.provider,address:n,chain:t},t))?.address;return n},async handleDisconnectedConnection({connection:e,namespace:t,address:n,closeModalOnConnect:r}){const o=D.getConnectorById(e.connectorId),i=e.auth?.name?.toLowerCase(),s=e.connectorId===z.CONNECTOR_ID.AUTH,a=e.connectorId===z.CONNECTOR_ID.WALLET_CONNECT;if(!o)throw new Error(`No connector found for connection: ${e.connectorId}`);let c;if(s)if(i&&co.isSocialProvider(i)){const{address:l}=await co.connectSocial({social:i,closeModalOnConnect:r,onOpenFarcaster(){Ce.open({view:"ConnectingFarcaster"})},onConnect(){T.replace("ProfileWallets")}});c=l}else{const{address:l}=await co.connectEmail({closeModalOnConnect:r,onOpen(){Ce.open({view:"EmailLogin"})},onConnect(){T.replace("ProfileWallets")}});c=l}else if(a){const{address:l}=await co.connectWalletConnect({walletConnect:!0,connector:o,closeModalOnConnect:r,onOpen(d){const g=d?"AllWallets":"ConnectingWalletConnect";Ce.state.open?T.push(g):Ce.open({view:g})},onConnect(){T.replace("ProfileWallets")}});c=l}else{const l=await j.connectExternal({id:o.id,type:o.type,provider:o.provider,chain:t},t);l&&(c=l.address)}return s&&n&&await j.handleAuthAccountSwitch({address:n,namespace:t}),c},async switchConnection({connection:e,address:t,namespace:n,closeModalOnConnect:r,onChange:o}){let i;const s=h.getAccountData(n)?.caipAddress;if(s){const{address:c}=sn.parseCaipAddress(s);i=c}const a=En.getConnectionStatus(e,n);switch(a){case"connected":case"active":{const c=await j.handleActiveConnection({connection:e,namespace:n,address:t});if(i&&c){const l=c.toLowerCase()!==i.toLowerCase();o?.({address:c,namespace:n,hasSwitchedAccount:l,hasSwitchedWallet:a==="active"})}break}case"disconnected":{const c=await j.handleDisconnectedConnection({connection:e,namespace:n,address:t,closeModalOnConnect:r});c&&o?.({address:c,namespace:n,hasSwitchedAccount:!0,hasSwitchedWallet:!0});break}default:throw new Error(`Invalid connection status: ${a}`)}}},j=hn(X1),Sc={createBalance(e,t){const n={name:e.metadata.name||"",symbol:e.metadata.symbol||"",decimals:e.metadata.decimals||0,value:e.metadata.value||0,price:e.metadata.price||0,iconUrl:e.metadata.iconUrl||""};return{name:n.name,symbol:n.symbol,chainId:t,address:e.address==="native"?void 0:this.convertAddressToCAIP10Address(e.address,t),value:n.value,price:n.price,quantity:{decimals:n.decimals.toString(),numeric:this.convertHexToBalance({hex:e.balance,decimals:n.decimals})},iconUrl:n.iconUrl}},convertHexToBalance({hex:e,decimals:t}){return Fl(BigInt(e),t)},convertAddressToCAIP10Address(e,t){return`${t}:${e}`},createCAIP2ChainId(e,t){return`${t}:${parseInt(e,16)}`},getChainIdHexFromCAIP2ChainId(e){const t=e.split(":");if(t.length<2||!t[1])return"0x0";const n=t[1],r=parseInt(n,10);return isNaN(r)?"0x0":`0x${r.toString(16)}`},isWalletGetAssetsResponse(e){return typeof e!="object"||e===null?!1:Object.values(e).every(t=>Array.isArray(t)&&t.every(n=>this.isValidAsset(n)))},isValidAsset(e){return typeof e=="object"&&e!==null&&typeof e.address=="string"&&typeof e.balance=="string"&&(e.type==="ERC20"||e.type==="NATIVE")&&typeof e.metadata=="object"&&e.metadata!==null&&typeof e.metadata.name=="string"&&typeof e.metadata.symbol=="string"&&typeof e.metadata.decimals=="number"&&typeof e.metadata.price=="number"&&typeof e.metadata.iconUrl=="string"}};let Tc;async function Qd(){if(!Tc){const{createPublicClient:e,http:t,defineChain:n}=await ge(async()=>{const{createPublicClient:r,http:o,defineChain:i}=await import("./index-D_0uPbNC.js");return{createPublicClient:r,http:o,defineChain:i}},__vite__mapDeps([0,1,2,3,4,5,6]));Tc={createPublicClient:e,http:t,defineChain:n}}return Tc}const yl={getBlockchainApiRpcUrl(e,t){const n=new URL("https://rpc.walletconnect.org/v1/");return n.searchParams.set("chainId",e),n.searchParams.set("projectId",t),n.toString()},async getViemChain(e){const{defineChain:t}=await Qd(),{chainId:n}=sn.parseCaipNetworkId(e.caipNetworkId);return t({...e,id:Number(n)})},async createViemPublicClient(e){const{createPublicClient:t,http:n}=await Qd(),r=$.state.projectId,o=await yl.getViemChain(e);if(!o)throw new Error(`Chain ${e.caipNetworkId} not found in viem/chains`);return t({chain:o,transport:n(yl.getBlockchainApiRpcUrl(e.caipNetworkId,r))})}},Xl={async getMyTokensWithBalance(e){const t=h.getAccountData()?.address,n=h.state.activeCaipNetwork,r=D.getConnectorId("eip155")===z.CONNECTOR_ID.AUTH;if(!t||!n)return[];const o=`${n.caipNetworkId}:${t}`,i=J.getBalanceCacheForCaipAddress(o);if(i)return i.balances;if(n.chainNamespace===z.CHAIN.EVM&&r){const a=await this.getEIP155Balances(t,n);if(a)return this.filterLowQualityTokens(a)}const s=await xe.getBalance(t,n.caipNetworkId,e);return this.filterLowQualityTokens(s.balances)},async getEIP155Balances(e,t){try{const n=Sc.getChainIdHexFromCAIP2ChainId(t.caipNetworkId);if(!(await j.getCapabilities(e))?.[n]?.assetDiscovery?.supported)return null;const o=await j.walletGetAssets({account:e,chainFilter:[n]});if(!Sc.isWalletGetAssetsResponse(o))return null;const s=(o[n]||[]).map(a=>Sc.createBalance(a,t.caipNetworkId));return J.updateBalanceCache({caipAddress:`${t.caipNetworkId}:${e}`,balance:{balances:s},timestamp:Date.now()}),s}catch{return null}},filterLowQualityTokens(e){return e.filter(t=>t.quantity.decimals!=="0")},async fetchERC20Balance({caipAddress:e,assetAddress:t,caipNetwork:n}){const r=await yl.createViemPublicClient(n),{address:o}=sn.parseCaipAddress(e),[{result:i},{result:s},{result:a},{result:c}]=await r.multicall({contracts:[{address:t,functionName:"name",args:[],abi:Vs},{address:t,functionName:"symbol",args:[],abi:Vs},{address:t,functionName:"balanceOf",args:[o],abi:Vs},{address:t,functionName:"decimals",args:[],abi:Vs}]});return{name:i,symbol:s,decimals:c,balance:a&&c?Fl(a,c):"0"}}},Nc={adapters:{}},Q1={state:Nc,initialize(e){Nc.adapters={...e}},get(e){return Nc.adapters[e]}},Na={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0,sui:void 0,stacks:void 0},At=He({providers:{...Na},providerIds:{...Na}}),ew={state:At,subscribeKey(e,t){return at(At,e,t)},subscribe(e){return st(At,()=>{e(At)})},subscribeProviders(e){return st(At.providers,()=>e(At.providers))},setProvider(e,t){e&&t&&(At.providers[e]=Ui(t))},getProvider(e){if(e)return At.providers[e]},setProviderId(e,t){t&&(At.providerIds[e]=t)},getProviderId(e){if(e)return At.providerIds[e]},reset(){At.providers={...Na},At.providerIds={...Na}},resetChain(e){At.providers[e]=void 0,At.providerIds[e]=void 0}},Ai=He({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),Pr={state:Ai,subscribe(e){return st(Ai,()=>e(Ai))},subscribeOpen(e){return at(Ai,"open",e)},set(e){Object.assign(Ai,{...Ai,...e})}},tw={async getTokenList(e){return(await xe.fetchSwapTokens({chainId:e}))?.tokens?.map(r=>({...r,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))||[]},async fetchGasPrice(){const e=h.state.activeCaipNetwork;if(!e)return null;try{switch(e.chainNamespace){case"solana":const t=(await j?.estimateGas({chainNamespace:"solana"}))?.toString();return{standard:t,fast:t,instant:t};case"eip155":default:return await xe.fetchGasPrice({chainId:e.caipNetworkId})}}catch{return null}},async fetchSwapAllowance({tokenAddress:e,userAddress:t,sourceTokenAmount:n,sourceTokenDecimals:r}){const o=await xe.fetchSwapAllowance({tokenAddress:e,userAddress:t});if(o?.allowance&&n&&r){const i=j.parseUnits(n,r)||0;return BigInt(o.allowance)>=i}return!1},async getMyTokensWithBalance(e){const t=await Xl.getMyTokensWithBalance(e);return h.setAccountProp("tokenBalance",t,h.state.activeChain),this.mapBalancesToSwapTokens(t)},mapBalancesToSwapTokens(e){return e?.map(t=>({...t,address:t?.address?t.address:Ta(),decimals:parseInt(t.quantity.decimals,10),logoUri:t.iconUrl,eip2612:!1}))||[]},async handleSwapError(e){try{const t=e?.cause;return t?.json&&(await t.json())?.reasons?.[0]?.description?.includes("insufficient liquidity")?"Insufficient liquidity":void 0}catch{return}}},Re=He({tokenBalances:[],loading:!1}),nw={state:Re,subscribe(e){return st(Re,()=>e(Re))},subscribeKey(e,t){return at(Re,e,t)},setToken(e){e&&(Re.token=Ui(e))},setTokenAmount(e){Re.sendTokenAmount=e},setReceiverAddress(e){Re.receiverAddress=e},setReceiverProfileImageUrl(e){Re.receiverProfileImageUrl=e},setReceiverProfileName(e){Re.receiverProfileName=e},setNetworkBalanceInUsd(e){Re.networkBalanceInUSD=e},setLoading(e){Re.loading=e},getSdkEventProperties(e){return{message:P.parseError(e),isSmartAccount:rt(h.state.activeChain)===De.ACCOUNT_TYPES.SMART_ACCOUNT,token:Re.token?.symbol||"",amount:Re.sendTokenAmount??0,network:h.state.activeCaipNetwork?.caipNetworkId||""}},async sendToken(){try{switch(Ne.setLoading(!0),h.state.activeCaipNetwork?.chainNamespace){case"eip155":await Ne.sendEvmToken();return;case"solana":await Ne.sendSolanaToken();return;default:throw new Error("Unsupported chain")}}catch(e){throw Ht.isUserRejectedRequestError(e)?new Vf(e):e}finally{Ne.setLoading(!1)}},async sendEvmToken(){const e=h.state.activeChain;if(!e)throw new Error("SendController:sendEvmToken - activeChainNamespace is required");const t=rt(e);if(!Ne.state.sendTokenAmount||!Ne.state.receiverAddress)throw new Error("An amount and receiver address are required");if(!Ne.state.token)throw new Error("A token is required");if(Ne.state.token?.address){te.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===De.ACCOUNT_TYPES.SMART_ACCOUNT,token:Ne.state.token.address,amount:Ne.state.sendTokenAmount,network:h.state.activeCaipNetwork?.caipNetworkId||""}});const{hash:n}=await Ne.sendERC20Token({receiverAddress:Ne.state.receiverAddress,tokenAddress:Ne.state.token.address,sendTokenAmount:Ne.state.sendTokenAmount,decimals:Ne.state.token.quantity.decimals});n&&(Re.hash=n)}else{te.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===De.ACCOUNT_TYPES.SMART_ACCOUNT,token:Ne.state.token.symbol||"",amount:Ne.state.sendTokenAmount,network:h.state.activeCaipNetwork?.caipNetworkId||""}});const{hash:n}=await Ne.sendNativeToken({receiverAddress:Ne.state.receiverAddress,sendTokenAmount:Ne.state.sendTokenAmount,decimals:Ne.state.token.quantity.decimals});n&&(Re.hash=n)}},async fetchTokenBalance(e){Re.loading=!0;const t=h.state.activeChain,n=h.state.activeCaipNetwork?.caipNetworkId,r=h.state.activeCaipNetwork?.chainNamespace,o=h.getAccountData(t)?.caipAddress??h.state.activeCaipAddress,i=o?P.getPlainAddress(o):void 0;if(Re.lastRetry&&!P.isAllowedRetry(Re.lastRetry,30*Ie.ONE_SEC_MS))return Re.loading=!1,[];try{if(i&&n&&r){const s=await Xl.getMyTokensWithBalance();return Re.tokenBalances=s,Re.lastRetry=void 0,s}}catch(s){Re.lastRetry=Date.now(),e?.(s),$e.showError("Token Balance Unavailable")}finally{Re.loading=!1}return[]},fetchNetworkBalance(){if(Re.tokenBalances.length===0)return;const e=tw.mapBalancesToSwapTokens(Re.tokenBalances);if(!e)return;const t=e.find(n=>n.address===Ta());t&&(Re.networkBalanceInUSD=t?Fo.multiply(t.quantity.numeric,t.price).toString():"0")},async sendNativeToken(e){T.pushTransactionStack({});const t=e.receiverAddress,n=h.getAccountData()?.address,r=j.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals)),i=await j.sendTransaction({chainNamespace:z.CHAIN.EVM,to:t,address:n,data:"0x",value:r??BigInt(0)});return te.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:rt("eip155")===De.ACCOUNT_TYPES.SMART_ACCOUNT,token:Ne.state.token?.symbol||"",amount:e.sendTokenAmount,network:h.state.activeCaipNetwork?.caipNetworkId||"",hash:i||""}}),j._getClient()?.updateBalance("eip155"),Ne.resetSend(),{hash:i}},async sendERC20Token(e){T.pushTransactionStack({onSuccess(){T.replace("Account")}});const t=j.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals)),n=h.getAccountData()?.address;if(n&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress){const r=P.getPlainAddress(e.tokenAddress);if(!r)throw new Error("SendController:sendERC20Token - tokenAddress is required");const o=await j.writeContract({fromAddress:n,tokenAddress:r,args:[e.receiverAddress,t??BigInt(0)],method:"transfer",abi:Ff.getERC20Abi(r),chainNamespace:z.CHAIN.EVM});return te.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:rt("eip155")===De.ACCOUNT_TYPES.SMART_ACCOUNT,token:Ne.state.token?.symbol||"",amount:e.sendTokenAmount,network:h.state.activeCaipNetwork?.caipNetworkId||"",hash:o||""}}),Ne.resetSend(),{hash:o}}return{hash:void 0}},async sendSolanaToken(){if(!Ne.state.sendTokenAmount||!Ne.state.receiverAddress)throw new Error("An amount and receiver address are required");T.pushTransactionStack({onSuccess(){T.replace("Account")}});let e;Ne.state.token&&Ne.state.token.address!==Ie.SOLANA_NATIVE_TOKEN_ADDRESS&&(P.isCaipAddress(Ne.state.token.address)?e=P.getPlainAddress(Ne.state.token.address):e=Ne.state.token.address);const t=await j.sendTransaction({chainNamespace:"solana",tokenMint:e,to:Ne.state.receiverAddress,value:Ne.state.sendTokenAmount});t&&(Re.hash=t),j._getClient()?.updateBalance("solana"),te.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:!1,token:Ne.state.token?.symbol||"",amount:Ne.state.sendTokenAmount,network:h.state.activeCaipNetwork?.caipNetworkId||"",hash:t||""}}),Ne.resetSend()},resetSend(){Re.token=void 0,Re.sendTokenAmount=void 0,Re.receiverAddress=void 0,Re.receiverProfileImageUrl=void 0,Re.receiverProfileName=void 0,Re.loading=!1,Re.tokenBalances=[]}},Ne=hn(nw),$c={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,user:void 0,preferredAccountType:void 0},Js={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},ee=He({chains:dm(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{connectionControllerClient:void 0},isSwitchingNamespace:!1}),Yp={state:ee,subscribe(e){return st(ee,()=>{e(ee)})},subscribeKey(e,t){return at(ee,e,t)},subscribeAccountStateProp(e,t,n){const r=n||ee.activeChain;return r?at(ee.chains.get(r)?.accountState||{},e,t):()=>{}},subscribeChainProp(e,t,n){let r;return st(ee.chains,()=>{const o=n||ee.activeChain;if(o){const i=ee.chains.get(o)?.[e];r!==i&&(r=i,t(i))}})},initialize(e,t,n){const{chainId:r,namespace:o}=J.getActiveNetworkProps(),i=t?.find(d=>d.id.toString()===r?.toString()),a=e.find(d=>d?.namespace===o)||e?.[0],c=e.map(d=>d.namespace).filter(d=>d!==void 0),l=$.state.enableEmbedded?new Set([...c]):new Set([...t?.map(d=>d.chainNamespace)??[]]);(e?.length===0||!a)&&(ee.noAdapters=!0),ee.noAdapters||(ee.activeChain=a?.namespace,ee.activeCaipNetwork=i,h.setChainNetworkData(a?.namespace,{caipNetwork:i}),ee.activeChain&&Pr.set({activeChain:a?.namespace})),l.forEach(d=>{const g=t?.filter(E=>E.chainNamespace===d),w=J.getPreferredAccountTypes()||{},y={...$.state.defaultAccountTypes,...w};h.state.chains.set(d,{namespace:d,networkState:He({...Js,caipNetwork:g?.[0]}),accountState:He({...$c,preferredAccountType:y[d]}),caipNetworks:g??[],...n}),h.setRequestedCaipNetworks(g??[],d)})},removeAdapter(e){if(ee.activeChain===e){const t=Array.from(ee.chains.entries()).find(([n])=>n!==e);if(t){const n=t[1]?.caipNetworks?.[0];n&&h.setActiveCaipNetwork(n)}}ee.chains.delete(e)},addAdapter(e,{connectionControllerClient:t},n){if(!e.namespace)throw new Error("ChainController:addAdapter - adapter must have a namespace");ee.chains.set(e.namespace,{namespace:e.namespace,networkState:{...Js,caipNetwork:n[0]},accountState:{...$c},caipNetworks:n,connectionControllerClient:t}),h.setRequestedCaipNetworks(n?.filter(r=>r.chainNamespace===e.namespace)??[],e.namespace)},addNetwork(e){const t=ee.chains.get(e.chainNamespace);if(t){const n=[...t.caipNetworks||[]];t.caipNetworks?.find(r=>r.id===e.id)||n.push(e),ee.chains.set(e.chainNamespace,{...t,caipNetworks:n}),h.setRequestedCaipNetworks(n,e.chainNamespace),D.filterByNamespace(e.chainNamespace,!0)}},removeNetwork(e,t){const n=ee.chains.get(e);if(n){const r=ee.activeCaipNetwork?.id===t,o=[...n.caipNetworks?.filter(i=>i.id!==t)||[]];r&&n?.caipNetworks?.[0]&&h.setActiveCaipNetwork(n.caipNetworks[0]),ee.chains.set(e,{...n,caipNetworks:o}),h.setRequestedCaipNetworks(o||[],e),o.length===0&&D.filterByNamespace(e,!1)}},setAdapterNetworkState(e,t){const n=ee.chains.get(e);n&&(n.networkState={...n.networkState||Js,...t},ee.chains.set(e,n))},setChainAccountData(e,t,n=!0){if(!e)throw new Error("Chain is required to update chain account data");const r=ee.chains.get(e);if(r){const o={...r.accountState||$c,...t};ee.chains.set(e,{...r,accountState:o}),(ee.chains.size===1||ee.activeChain===e)&&t.caipAddress&&(ee.activeCaipAddress=t.caipAddress)}},setChainNetworkData(e,t){if(!e)return;const n=ee.chains.get(e);if(n){const r={...n.networkState||Js,...t};ee.chains.set(e,{...n,networkState:r})}},setAccountProp(e,t,n,r=!0){h.setChainAccountData(n,{[e]:t},r)},setActiveNamespace(e){ee.activeChain=e;const t=e?ee.chains.get(e):void 0,n=t?.networkState?.caipNetwork;n?.id&&e&&(ee.activeCaipAddress=t?.accountState?.caipAddress,ee.activeCaipNetwork=n,h.setChainNetworkData(e,{caipNetwork:n}),J.setActiveCaipNetworkId(n?.caipNetworkId),Pr.set({activeChain:e,selectedNetworkId:n?.caipNetworkId}))},setActiveCaipNetwork(e){if(!e)return;const t=ee.activeChain===e.chainNamespace;t||h.setIsSwitchingNamespace(!0);const n=ee.chains.get(e.chainNamespace);ee.activeChain=e.chainNamespace,ee.activeCaipNetwork=e,h.setChainNetworkData(e.chainNamespace,{caipNetwork:e});let r=n?.accountState?.address;if(r)ee.activeCaipAddress=`${e.chainNamespace}:${e.id}:${r}`;else if(t&&ee.activeCaipAddress){const{address:i}=sn.parseCaipAddress(ee.activeCaipAddress);r=i,ee.activeCaipAddress=`${e.caipNetworkId}:${r}`}else ee.activeCaipAddress=void 0;h.setChainAccountData(e.chainNamespace,{address:r,caipAddress:ee.activeCaipAddress}),Ne.resetSend(),Pr.set({activeChain:ee.activeChain,selectedNetworkId:ee.activeCaipNetwork?.caipNetworkId}),J.setActiveCaipNetworkId(e.caipNetworkId),!h.checkIfSupportedNetwork(e.chainNamespace)&&$.state.enableNetworkSwitch&&!$.state.allowUnsupportedChain&&!j.state.wcBasic&&h.showUnsupportedChainUI()},addCaipNetwork(e){if(!e)return;const t=ee.chains.get(e.chainNamespace);t&&t?.caipNetworks?.push(e)},async switchActiveNamespace(e){if(!e)return;const t=e!==h.state.activeChain,n=h.getNetworkData(e)?.caipNetwork,r=h.getCaipNetworkByNamespace(e,n?.id);t&&r&&await h.switchActiveNetwork(r)},async switchActiveNetwork(e,{throwOnFailure:t=!1}={}){const n=h.state.activeChain;if(!n)throw new Error("ChainController:switchActiveNetwork - namespace is required");const r=ew.getProviderId(ee.activeChain)==="AUTH",o=h.getAccountData(n)?.address,i=z.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(e.chainNamespace);try{if(o&&e.chainNamespace===n||r&&i){const s=Q1.get(e.chainNamespace);if(!s)throw new Error("Adapter not found");await s.switchNetwork({caipNetwork:e})}h.setActiveCaipNetwork(e)}catch(s){if(t)throw s}te.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}})},getConnectionControllerClient(e){const t=e||ee.activeChain;if(!t)throw new Error("Chain is required to get connection controller client");const n=ee.chains.get(t);if(!n?.connectionControllerClient)throw new Error("ConnectionController client not set");return n.connectionControllerClient},getNetworkProp(e,t){const n=ee.chains.get(t)?.networkState;if(n)return n[e]},getRequestedCaipNetworks(e){const t=ee.chains.get(e),{approvedCaipNetworkIds:n=[],requestedCaipNetworks:r=[]}=t?.networkState||{};return P.sortRequestedNetworks(n,r).filter(s=>s?.id)},getAllRequestedCaipNetworks(){const e=[];return ee.chains.forEach(t=>{if(!t.namespace)throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");const n=h.getRequestedCaipNetworks(t.namespace);e.push(...n)}),e},setRequestedCaipNetworks(e,t){h.setAdapterNetworkState(t,{requestedCaipNetworks:e});const r=h.getAllRequestedCaipNetworks().map(i=>i.chainNamespace),o=Array.from(new Set(r));D.filterByNamespaces(o)},getAllApprovedCaipNetworkIds(){const e=[];return ee.chains.forEach(t=>{if(!t.namespace)throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");const n=h.getApprovedCaipNetworkIds(t.namespace);e.push(...n)}),e},getActiveCaipNetwork(e){return e?ee.chains.get(e)?.networkState?.caipNetwork:ee.activeCaipNetwork},getActiveCaipAddress(){return ee.activeCaipAddress},getApprovedCaipNetworkIds(e){return ee.chains.get(e)?.networkState?.approvedCaipNetworkIds||[]},setApprovedCaipNetworksData(e,t){h.setAdapterNetworkState(e,t)},checkIfSupportedNetwork(e,t){const n=t||ee.activeCaipNetwork?.caipNetworkId,r=h.getRequestedCaipNetworks(e);return r.length?r?.some(o=>o.caipNetworkId===n):!0},checkIfSupportedChainId(e){return ee.activeChain?h.getRequestedCaipNetworks(ee.activeChain)?.some(n=>n.id===e):!0},checkIfSmartAccountEnabled(){const e=Rf.caipNetworkIdToNumber(ee.activeCaipNetwork?.caipNetworkId);return!ee.activeChain||!e?!1:!!(ot.get(ae.SMART_ACCOUNT_ENABLED_NETWORKS)?.split(",")||[])?.includes(e.toString())},showUnsupportedChainUI(){Ce.open({view:"UnsupportedChain"})},checkIfNamesSupported(){const e=ee.activeCaipNetwork;return!!(e?.chainNamespace&&Ie.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){h.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})},resetAccount(e){const t=e;if(!t)throw new Error("Chain is required to set account prop");const n=h.state.chains.get(t)?.accountState?.preferredAccountType,r=$.state.defaultAccountTypes[t];ee.activeCaipAddress=void 0,h.setChainAccountData(t,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:r||n,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,user:void 0,status:"disconnected"}),D.removeConnectorId(t)},setIsSwitchingNamespace(e){ee.isSwitchingNamespace=e},getFirstCaipNetworkSupportsAuthConnector(){const e=[];let t;if(ee.chains.forEach(n=>{z.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(r=>r===n.namespace)&&n.namespace&&e.push(n.namespace)}),e.length>0){const n=e[0];return t=n?ee.chains.get(n)?.caipNetworks?.[0]:void 0,t}},getAccountData(e){const t=e||ee.activeChain;if(t)return h.state.chains.get(t)?.accountState},getNetworkData(e){const t=e||ee.activeChain;if(t)return h.state.chains.get(t)?.networkState},getCaipNetworkByNamespace(e,t){if(!e)return;const n=h.state.chains.get(e),r=n?.caipNetworks?.find(o=>o.id.toString()===t?.toString());return r||n?.networkState?.caipNetwork||n?.caipNetworks?.[0]},getRequestedCaipNetworkIds(){const e=D.state.filterByNamespace;return(e?[ee.chains.get(e)]:Array.from(ee.chains.values())).flatMap(n=>n?.caipNetworks||[]).map(n=>n.caipNetworkId)},getCaipNetworks(e){return e?h.getRequestedCaipNetworks(e):h.getAllRequestedCaipNetworks()},getCaipNetworkById(e,t){return Yp.getCaipNetworks(t).find(n=>n.id.toString()===e.toString()||n.caipNetworkId.toString()===e.toString())},setLastConnectedSIWECaipNetwork(e){ee.lastConnectedSIWECaipNetwork=e},getLastConnectedSIWECaipNetwork(){return ee.lastConnectedSIWECaipNetwork},async fetchTokenBalance(e){const t=h.getAccountData();if(!t)return[];const n=h.state.activeCaipNetwork?.caipNetworkId,r=h.state.activeCaipNetwork?.chainNamespace,o=h.state.activeCaipAddress,i=o?P.getPlainAddress(o):void 0;if(h.setAccountProp("balanceLoading",!0,r),t.lastRetry&&!P.isAllowedRetry(t.lastRetry,30*Ie.ONE_SEC_MS))return h.setAccountProp("balanceLoading",!1,r),[];try{if(i&&n&&r){const s=await Xl.getMyTokensWithBalance();return h.setAccountProp("tokenBalance",s,r),h.setAccountProp("lastRetry",void 0,r),h.setAccountProp("balanceLoading",!1,r),s}}catch(s){h.setAccountProp("lastRetry",Date.now(),r),e?.(s),$e.showError("Token Balance Unavailable")}finally{h.setAccountProp("balanceLoading",!1,r)}return[]},isCaipNetworkDisabled(e){const t=e.chainNamespace,n=!!h.getAccountData(t)?.caipAddress,r=h.getAllApprovedCaipNetworkIds(),o=h.getNetworkProp("supportsAllNetworks",t)!==!1,i=D.getConnectorId(t),s=D.getAuthConnector(),a=i===z.CONNECTOR_ID.AUTH&&s;return!n||o||a?!1:!r?.includes(e.caipNetworkId)}},h=hn(Yp),Jp={onSwitchNetwork({network:e,ignoreSwitchConfirmation:t=!1}){const n=h.state.activeCaipNetwork,r=h.state.activeChain,o=T.state.data;if(e.id===n?.id)return;const s=!!h.getAccountData(r)?.address,a=!!h.getAccountData(e.chainNamespace)?.address,c=e.chainNamespace!==r,d=D.getConnectorId(r)===z.CONNECTOR_ID.AUTH,g=z.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(w=>w===e.chainNamespace);t||d&&g?T.push("SwitchNetwork",{...o,network:e}):s&&c&&!a?T.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):T.push("SwitchNetwork",{...o,network:e})}},St=He({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),rw={state:St,subscribe(e){return st(St,()=>e(St))},subscribeKey(e,t){return at(St,e,t)},async open(e){const t=e?.namespace,n=h.state.activeChain,r=t&&t!==n,o=h.getAccountData(e?.namespace)?.caipAddress,i=h.state.noAdapters;if(j.state.wcBasic?Z.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1,fetchWalletRanks:!1}):await Z.prefetch(),D.setFilterByNamespace(e?.namespace),Ce.setLoading(!0,t),t&&r){const s=h.getNetworkData(t)?.caipNetwork||h.getRequestedCaipNetworks(t)[0];s&&(i?(await h.switchActiveNetwork(s),T.push("ConnectingWalletConnectBasic")):Jp.onSwitchNetwork({network:s,ignoreSwitchConfirmation:!0}))}else $.state.manualWCControl||i&&!o?P.isMobile()?T.reset("AllWallets"):T.reset("ConnectingWalletConnectBasic"):e?.view?T.reset(e.view,e.data):o?T.reset("Account"):T.reset("Connect");St.open=!0,Pr.set({open:!0}),te.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!o}})},close(){const e=$.state.enableEmbedded,t=!!h.state.activeCaipAddress;St.open&&te.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}}),St.open=!1,T.reset("Connect"),Ce.clearLoading(),e?t?T.replace("Account"):T.push("Connect"):Pr.set({open:!1}),j.resetUri()},setLoading(e,t){t&&St.loadingNamespaceMap.set(t,e),St.loading=e,Pr.set({loading:e})},clearLoading(){St.loadingNamespaceMap.clear(),St.loading=!1,Pr.set({loading:!1})},shake(){St.shake||(St.shake=!0,setTimeout(()=>{St.shake=!1},500))}},Ce=hn(rw);var Xs={exports:{}},eu;function iw(){if(eu)return Xs.exports;eu=1;var e=typeof Reflect=="object"?Reflect:null,t=e&&typeof e.apply=="function"?e.apply:function(A,S,O){return Function.prototype.apply.call(A,S,O)},n;e&&typeof e.ownKeys=="function"?n=e.ownKeys:Object.getOwnPropertySymbols?n=function(A){return Object.getOwnPropertyNames(A).concat(Object.getOwnPropertySymbols(A))}:n=function(A){return Object.getOwnPropertyNames(A)};function r(C){console&&console.warn&&console.warn(C)}var o=Number.isNaN||function(A){return A!==A};function i(){i.init.call(this)}Xs.exports=i,Xs.exports.once=I,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var s=10;function a(C){if(typeof C!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof C)}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(C){if(typeof C!="number"||C<0||o(C))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+C+".");s=C}}),i.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(A){if(typeof A!="number"||A<0||o(A))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+A+".");return this._maxListeners=A,this};function c(C){return C._maxListeners===void 0?i.defaultMaxListeners:C._maxListeners}i.prototype.getMaxListeners=function(){return c(this)},i.prototype.emit=function(A){for(var S=[],O=1;O<arguments.length;O++)S.push(arguments[O]);var B=A==="error",F=this._events;if(F!==void 0)B=B&&F.error===void 0;else if(!B)return!1;if(B){var W;if(S.length>0&&(W=S[0]),W instanceof Error)throw W;var V=new Error("Unhandled error."+(W?" ("+W.message+")":""));throw V.context=W,V}var Q=F[A];if(Q===void 0)return!1;if(typeof Q=="function")t(Q,this,S);else for(var ce=Q.length,K=E(Q,ce),O=0;O<ce;++O)t(K[O],this,S);return!0};function l(C,A,S,O){var B,F,W;if(a(S),F=C._events,F===void 0?(F=C._events=Object.create(null),C._eventsCount=0):(F.newListener!==void 0&&(C.emit("newListener",A,S.listener?S.listener:S),F=C._events),W=F[A]),W===void 0)W=F[A]=S,++C._eventsCount;else if(typeof W=="function"?W=F[A]=O?[S,W]:[W,S]:O?W.unshift(S):W.push(S),B=c(C),B>0&&W.length>B&&!W.warned){W.warned=!0;var V=new Error("Possible EventEmitter memory leak detected. "+W.length+" "+String(A)+" listeners added. Use emitter.setMaxListeners() to increase limit");V.name="MaxListenersExceededWarning",V.emitter=C,V.type=A,V.count=W.length,r(V)}return C}i.prototype.addListener=function(A,S){return l(this,A,S,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(A,S){return l(this,A,S,!0)};function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function g(C,A,S){var O={fired:!1,wrapFn:void 0,target:C,type:A,listener:S},B=d.bind(O);return B.listener=S,O.wrapFn=B,B}i.prototype.once=function(A,S){return a(S),this.on(A,g(this,A,S)),this},i.prototype.prependOnceListener=function(A,S){return a(S),this.prependListener(A,g(this,A,S)),this},i.prototype.removeListener=function(A,S){var O,B,F,W,V;if(a(S),B=this._events,B===void 0)return this;if(O=B[A],O===void 0)return this;if(O===S||O.listener===S)--this._eventsCount===0?this._events=Object.create(null):(delete B[A],B.removeListener&&this.emit("removeListener",A,O.listener||S));else if(typeof O!="function"){for(F=-1,W=O.length-1;W>=0;W--)if(O[W]===S||O[W].listener===S){V=O[W].listener,F=W;break}if(F<0)return this;F===0?O.shift():v(O,F),O.length===1&&(B[A]=O[0]),B.removeListener!==void 0&&this.emit("removeListener",A,V||S)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(A){var S,O,B;if(O=this._events,O===void 0)return this;if(O.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):O[A]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete O[A]),this;if(arguments.length===0){var F=Object.keys(O),W;for(B=0;B<F.length;++B)W=F[B],W!=="removeListener"&&this.removeAllListeners(W);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(S=O[A],typeof S=="function")this.removeListener(A,S);else if(S!==void 0)for(B=S.length-1;B>=0;B--)this.removeListener(A,S[B]);return this};function w(C,A,S){var O=C._events;if(O===void 0)return[];var B=O[A];return B===void 0?[]:typeof B=="function"?S?[B.listener||B]:[B]:S?x(B):E(B,B.length)}i.prototype.listeners=function(A){return w(this,A,!0)},i.prototype.rawListeners=function(A){return w(this,A,!1)},i.listenerCount=function(C,A){return typeof C.listenerCount=="function"?C.listenerCount(A):y.call(C,A)},i.prototype.listenerCount=y;function y(C){var A=this._events;if(A!==void 0){var S=A[C];if(typeof S=="function")return 1;if(S!==void 0)return S.length}return 0}i.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]};function E(C,A){for(var S=new Array(A),O=0;O<A;++O)S[O]=C[O];return S}function v(C,A){for(;A+1<C.length;A++)C[A]=C[A+1];C.pop()}function x(C){for(var A=new Array(C.length),S=0;S<A.length;++S)A[S]=C[S].listener||C[S];return A}function I(C,A){return new Promise(function(S,O){function B(W){C.removeListener(A,F),O(W)}function F(){typeof C.removeListener=="function"&&C.removeListener("error",B),S([].slice.call(arguments))}L(C,A,F,{once:!0}),A!=="error"&&R(C,B,{once:!0})})}function R(C,A,S){typeof C.on=="function"&&L(C,"error",A,S)}function L(C,A,S,O){if(typeof C.on=="function")O.once?C.once(A,S):C.on(A,S);else if(typeof C.addEventListener=="function")C.addEventListener(A,function B(F){O.once&&C.removeEventListener(A,B),S(F)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof C)}return Xs.exports}var ow=iw();const Cv=br(ow);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var vl=function(e,t){return vl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)r.hasOwnProperty(o)&&(n[o]=r[o])},vl(e,t)};function sw(e,t){vl(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Cl=function(){return Cl=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Cl.apply(this,arguments)};function aw(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function cw(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}function lw(e,t){return function(n,r){t(n,r,e)}}function dw(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function uw(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(d){try{l(r.next(d))}catch(g){s(g)}}function c(d){try{l(r.throw(d))}catch(g){s(g)}}function l(d){d.done?i(d.value):o(d.value).then(a,c)}l((r=r.apply(e,t||[])).next())})}function pw(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(d){return c([l,d])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(d){l=[6,d],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function hw(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}function fw(e,t){for(var n in e)n!=="default"&&!t.hasOwnProperty(n)&&(t[n]=e[n])}function El(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Xp(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],s;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function mw(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Xp(arguments[t]));return e}function gw(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}function rs(e){return this instanceof rs?(this.v=e,this):new rs(e)}function ww(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(w){r[w]&&(o[w]=function(y){return new Promise(function(E,v){i.push([w,y,E,v])>1||a(w,y)})})}function a(w,y){try{c(r[w](y))}catch(E){g(i[0][3],E)}}function c(w){w.value instanceof rs?Promise.resolve(w.value.v).then(l,d):g(i[0][2],w)}function l(w){a("next",w)}function d(w){a("throw",w)}function g(w,y){w(y),i.shift(),i.length&&a(i[0][0],i[0][1])}}function bw(e){var t,n;return t={},r("next"),r("throw",function(o){throw o}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(o,i){t[o]=e[o]?function(s){return(n=!n)?{value:rs(e[o](s)),done:o==="return"}:i?i(s):s}:i}}function yw(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof El=="function"?El(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,c){s=e[i](s),o(a,c,s.done,s.value)})}}function o(i,s,a,c){Promise.resolve(c).then(function(l){i({value:l,done:a})},s)}}function vw(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function Cw(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Ew(e){return e&&e.__esModule?e:{default:e}}function _w(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function xw(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}const Aw=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return Cl},__asyncDelegator:bw,__asyncGenerator:ww,__asyncValues:yw,__await:rs,__awaiter:uw,__classPrivateFieldGet:_w,__classPrivateFieldSet:xw,__createBinding:hw,__decorate:cw,__exportStar:fw,__extends:sw,__generator:pw,__importDefault:Ew,__importStar:Cw,__makeTemplateObject:vw,__metadata:dw,__param:lw,__read:Xp,__rest:aw,__spread:mw,__spreadArrays:gw,__values:El},Symbol.toStringTag,{value:"Module"})),Sw=Uh(Aw);function Tw(e){if(e.length>=255)throw new TypeError("Alphabet too long");const t=new Uint8Array(256);for(let l=0;l<t.length;l++)t[l]=255;for(let l=0;l<e.length;l++){const d=e.charAt(l),g=d.charCodeAt(0);if(t[g]!==255)throw new TypeError(d+" is ambiguous");t[g]=l}const n=e.length,r=e.charAt(0),o=Math.log(n)/Math.log(256),i=Math.log(256)/Math.log(n);function s(l){if(l instanceof Uint8Array||(ArrayBuffer.isView(l)?l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength):Array.isArray(l)&&(l=Uint8Array.from(l))),!(l instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(l.length===0)return"";let d=0,g=0,w=0;const y=l.length;for(;w!==y&&l[w]===0;)w++,d++;const E=(y-w)*i+1>>>0,v=new Uint8Array(E);for(;w!==y;){let R=l[w],L=0;for(let C=E-1;(R!==0||L<g)&&C!==-1;C--,L++)R+=256*v[C]>>>0,v[C]=R%n>>>0,R=R/n>>>0;if(R!==0)throw new Error("Non-zero carry");g=L,w++}let x=E-g;for(;x!==E&&v[x]===0;)x++;let I=r.repeat(d);for(;x<E;++x)I+=e.charAt(v[x]);return I}function a(l){if(typeof l!="string")throw new TypeError("Expected String");if(l.length===0)return new Uint8Array;let d=0,g=0,w=0;for(;l[d]===r;)g++,d++;const y=(l.length-d)*o+1>>>0,E=new Uint8Array(y);for(;d<l.length;){const R=l.charCodeAt(d);if(R>255)return;let L=t[R];if(L===255)return;let C=0;for(let A=y-1;(L!==0||C<w)&&A!==-1;A--,C++)L+=n*E[A]>>>0,E[A]=L%256>>>0,L=L/256>>>0;if(L!==0)throw new Error("Non-zero carry");w=C,d++}let v=y-w;for(;v!==y&&E[v]===0;)v++;const x=new Uint8Array(g+(y-v));let I=g;for(;v!==y;)x[I++]=E[v++];return x}function c(l){const d=a(l);if(d)return d;throw new Error("Non-base"+n+" character")}return{encode:s,decodeUnsafe:a,decode:c}}var Nw="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";const Ev=Tw(Nw);var Rc={},Wn={},tu;function $w(){if(tu)return Wn;tu=1,Object.defineProperty(Wn,"__esModule",{value:!0}),Wn.isBrowserCryptoAvailable=Wn.getSubtleCrypto=Wn.getBrowerCrypto=void 0;function e(){return(vn===null||vn===void 0?void 0:vn.crypto)||(vn===null||vn===void 0?void 0:vn.msCrypto)||{}}Wn.getBrowerCrypto=e;function t(){const r=e();return r.subtle||r.webkitSubtle}Wn.getSubtleCrypto=t;function n(){return!!e()&&!!t()}return Wn.isBrowserCryptoAvailable=n,Wn}var jn={},nu;function Rw(){if(nu)return jn;nu=1,Object.defineProperty(jn,"__esModule",{value:!0}),jn.isBrowser=jn.isNode=jn.isReactNative=void 0;function e(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}jn.isReactNative=e;function t(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}jn.isNode=t;function n(){return!e()&&!t()}return jn.isBrowser=n,jn}var ru;function kw(){return ru||(ru=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=Sw;t.__exportStar($w(),e),t.__exportStar(Rw(),e)})(Rc)),Rc}var _v=kw(),Qs={exports:{}},iu;function Iw(){return iu||(iu=1,(function(e,t){var n=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof vn<"u"&&vn,r=(function(){function i(){this.fetch=!1,this.DOMException=n.DOMException}return i.prototype=n,new i})();(function(i){(function(s){var a=typeof i<"u"&&i||typeof self<"u"&&self||typeof vn<"u"&&vn||{},c={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&(function(){try{return new Blob,!0}catch{return!1}})(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function l(f){return f&&DataView.prototype.isPrototypeOf(f)}if(c.arrayBuffer)var d=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=ArrayBuffer.isView||function(f){return f&&d.indexOf(Object.prototype.toString.call(f))>-1};function w(f){if(typeof f!="string"&&(f=String(f)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(f)||f==="")throw new TypeError('Invalid character in header field name: "'+f+'"');return f.toLowerCase()}function y(f){return typeof f!="string"&&(f=String(f)),f}function E(f){var b={next:function(){var N=f.shift();return{done:N===void 0,value:N}}};return c.iterable&&(b[Symbol.iterator]=function(){return b}),b}function v(f){this.map={},f instanceof v?f.forEach(function(b,N){this.append(N,b)},this):Array.isArray(f)?f.forEach(function(b){if(b.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+b.length);this.append(b[0],b[1])},this):f&&Object.getOwnPropertyNames(f).forEach(function(b){this.append(b,f[b])},this)}v.prototype.append=function(f,b){f=w(f),b=y(b);var N=this.map[f];this.map[f]=N?N+", "+b:b},v.prototype.delete=function(f){delete this.map[w(f)]},v.prototype.get=function(f){return f=w(f),this.has(f)?this.map[f]:null},v.prototype.has=function(f){return this.map.hasOwnProperty(w(f))},v.prototype.set=function(f,b){this.map[w(f)]=y(b)},v.prototype.forEach=function(f,b){for(var N in this.map)this.map.hasOwnProperty(N)&&f.call(b,this.map[N],N,this)},v.prototype.keys=function(){var f=[];return this.forEach(function(b,N){f.push(N)}),E(f)},v.prototype.values=function(){var f=[];return this.forEach(function(b){f.push(b)}),E(f)},v.prototype.entries=function(){var f=[];return this.forEach(function(b,N){f.push([N,b])}),E(f)},c.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function x(f){if(!f._noBody){if(f.bodyUsed)return Promise.reject(new TypeError("Already read"));f.bodyUsed=!0}}function I(f){return new Promise(function(b,N){f.onload=function(){b(f.result)},f.onerror=function(){N(f.error)}})}function R(f){var b=new FileReader,N=I(b);return b.readAsArrayBuffer(f),N}function L(f){var b=new FileReader,N=I(b),k=/charset=([A-Za-z0-9_-]+)/.exec(f.type),H=k?k[1]:"utf-8";return b.readAsText(f,H),N}function C(f){for(var b=new Uint8Array(f),N=new Array(b.length),k=0;k<b.length;k++)N[k]=String.fromCharCode(b[k]);return N.join("")}function A(f){if(f.slice)return f.slice(0);var b=new Uint8Array(f.byteLength);return b.set(new Uint8Array(f)),b.buffer}function S(){return this.bodyUsed=!1,this._initBody=function(f){this.bodyUsed=this.bodyUsed,this._bodyInit=f,f?typeof f=="string"?this._bodyText=f:c.blob&&Blob.prototype.isPrototypeOf(f)?this._bodyBlob=f:c.formData&&FormData.prototype.isPrototypeOf(f)?this._bodyFormData=f:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)?this._bodyText=f.toString():c.arrayBuffer&&c.blob&&l(f)?(this._bodyArrayBuffer=A(f.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(f)||g(f))?this._bodyArrayBuffer=A(f):this._bodyText=f=Object.prototype.toString.call(f):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof f=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var f=x(this);if(f)return f;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var f=x(this);return f||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(c.blob)return this.blob().then(R);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var f=x(this);if(f)return f;if(this._bodyBlob)return L(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(C(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(W)}),this.json=function(){return this.text().then(JSON.parse)},this}var O=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function B(f){var b=f.toUpperCase();return O.indexOf(b)>-1?b:f}function F(f,b){if(!(this instanceof F))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');b=b||{};var N=b.body;if(f instanceof F){if(f.bodyUsed)throw new TypeError("Already read");this.url=f.url,this.credentials=f.credentials,b.headers||(this.headers=new v(f.headers)),this.method=f.method,this.mode=f.mode,this.signal=f.signal,!N&&f._bodyInit!=null&&(N=f._bodyInit,f.bodyUsed=!0)}else this.url=String(f);if(this.credentials=b.credentials||this.credentials||"same-origin",(b.headers||!this.headers)&&(this.headers=new v(b.headers)),this.method=B(b.method||this.method||"GET"),this.mode=b.mode||this.mode||null,this.signal=b.signal||this.signal||(function(){if("AbortController"in a){var q=new AbortController;return q.signal}})(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&N)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(N),(this.method==="GET"||this.method==="HEAD")&&(b.cache==="no-store"||b.cache==="no-cache")){var k=/([?&])_=[^&]*/;if(k.test(this.url))this.url=this.url.replace(k,"$1_="+new Date().getTime());else{var H=/\?/;this.url+=(H.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}F.prototype.clone=function(){return new F(this,{body:this._bodyInit})};function W(f){var b=new FormData;return f.trim().split("&").forEach(function(N){if(N){var k=N.split("="),H=k.shift().replace(/\+/g," "),q=k.join("=").replace(/\+/g," ");b.append(decodeURIComponent(H),decodeURIComponent(q))}}),b}function V(f){var b=new v,N=f.replace(/\r?\n[\t ]+/g," ");return N.split("\r").map(function(k){return k.indexOf(`
`)===0?k.substr(1,k.length):k}).forEach(function(k){var H=k.split(":"),q=H.shift().trim();if(q){var be=H.join(":").trim();try{b.append(q,be)}catch(pe){console.warn("Response "+pe.message)}}}),b}S.call(F.prototype);function Q(f,b){if(!(this instanceof Q))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(b||(b={}),this.type="default",this.status=b.status===void 0?200:b.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=b.statusText===void 0?"":""+b.statusText,this.headers=new v(b.headers),this.url=b.url||"",this._initBody(f)}S.call(Q.prototype),Q.prototype.clone=function(){return new Q(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},Q.error=function(){var f=new Q(null,{status:200,statusText:""});return f.ok=!1,f.status=0,f.type="error",f};var ce=[301,302,303,307,308];Q.redirect=function(f,b){if(ce.indexOf(b)===-1)throw new RangeError("Invalid status code");return new Q(null,{status:b,headers:{location:f}})},s.DOMException=a.DOMException;try{new s.DOMException}catch{s.DOMException=function(b,N){this.message=b,this.name=N;var k=Error(b);this.stack=k.stack},s.DOMException.prototype=Object.create(Error.prototype),s.DOMException.prototype.constructor=s.DOMException}function K(f,b){return new Promise(function(N,k){var H=new F(f,b);if(H.signal&&H.signal.aborted)return k(new s.DOMException("Aborted","AbortError"));var q=new XMLHttpRequest;function be(){q.abort()}q.onload=function(){var G={statusText:q.statusText,headers:V(q.getAllResponseHeaders()||"")};H.url.indexOf("file://")===0&&(q.status<200||q.status>599)?G.status=200:G.status=q.status,G.url="responseURL"in q?q.responseURL:G.headers.get("X-Request-URL");var _e="response"in q?q.response:q.responseText;setTimeout(function(){N(new Q(_e,G))},0)},q.onerror=function(){setTimeout(function(){k(new TypeError("Network request failed"))},0)},q.ontimeout=function(){setTimeout(function(){k(new TypeError("Network request timed out"))},0)},q.onabort=function(){setTimeout(function(){k(new s.DOMException("Aborted","AbortError"))},0)};function pe(G){try{return G===""&&a.location.href?a.location.href:G}catch{return G}}if(q.open(H.method,pe(H.url),!0),H.credentials==="include"?q.withCredentials=!0:H.credentials==="omit"&&(q.withCredentials=!1),"responseType"in q&&(c.blob?q.responseType="blob":c.arrayBuffer&&(q.responseType="arraybuffer")),b&&typeof b.headers=="object"&&!(b.headers instanceof v||a.Headers&&b.headers instanceof a.Headers)){var Ae=[];Object.getOwnPropertyNames(b.headers).forEach(function(G){Ae.push(w(G)),q.setRequestHeader(G,y(b.headers[G]))}),H.headers.forEach(function(G,_e){Ae.indexOf(_e)===-1&&q.setRequestHeader(_e,G)})}else H.headers.forEach(function(G,_e){q.setRequestHeader(_e,G)});H.signal&&(H.signal.addEventListener("abort",be),q.onreadystatechange=function(){q.readyState===4&&H.signal.removeEventListener("abort",be)}),q.send(typeof H._bodyInit>"u"?null:H._bodyInit)})}return K.polyfill=!0,a.fetch||(a.fetch=K,a.Headers=v,a.Request=F,a.Response=Q),s.Headers=v,s.Request=F,s.Response=Q,s.fetch=K,Object.defineProperty(s,"__esModule",{value:!0}),s})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var o=n.fetch?n:r;t=o.fetch,t.default=o.fetch,t.fetch=o.fetch,t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response,e.exports=t})(Qs,Qs.exports)),Qs.exports}var Ow=Iw();const xv=br(Ow);let Nr=null;const yn={getSIWX(){return $.state.siwx},async initializeIfEnabled(e=h.getActiveCaipAddress()){const t=$.state.siwx;if(!(t&&e))return;const[n,r,o]=e.split(":");if(h.checkIfSupportedNetwork(n,`${n}:${r}`))try{if($.state.remoteFeatures?.emailCapture){const s=h.getAccountData(n)?.user;await Ce.open({view:"DataCapture",data:{email:s?.email??void 0}});return}if(Nr&&await Nr,(await t.getSessions(`${n}:${r}`,o)).length)return;await Ce.open({view:"SIWXSignMessage"})}catch(i){console.error("SIWXUtil:initializeIfEnabled",i),te.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties(i)}),await j._getClient()?.disconnect().catch(console.error),T.reset("Connect"),$e.showError("A problem occurred while trying initialize authentication")}},async isAuthenticated(e=h.getActiveCaipAddress()){if(!$.state.siwx||!e)return!0;const{chainNamespace:n,chainId:r,address:o}=sn.parseCaipAddress(e),i=`${n}:${r}`;return(await yn.getSessions({address:o,caipNetworkId:i})).length>0},async requestSignMessage(){const e=$.state.siwx,t=P.getPlainAddress(h.getActiveCaipAddress()),n=Ys(),r=j._getClient();if(!e)throw new Error("SIWX is not enabled");if(!t)throw new Error("No ActiveCaipAddress found");if(!n)throw new Error("No ActiveCaipNetwork or client found");if(!r)throw new Error("No ConnectionController client found");try{const o=await e.createMessage({chainId:n.caipNetworkId,accountAddress:t}),i=o.toString();D.getConnectorId(n.chainNamespace)===z.CONNECTOR_ID.AUTH&&T.pushTransactionStack({});const a=await r.signMessage(i);await e.addSession({data:o,message:i,signature:a}),h.setLastConnectedSIWECaipNetwork(n),Ce.close(),te.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:this.getSIWXEventProperties()})}catch(o){(!Ce.state.open||T.state.view==="ApproveTransaction")&&await Ce.open({view:"SIWXSignMessage"}),$e.showError("Error signing message"),te.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties(o)}),console.error("SWIXUtil:requestSignMessage",o)}},async cancelSignMessage(){try{const e=this.getSIWX();if(e?.getRequired?.()){const n=h.getLastConnectedSIWECaipNetwork();if(n){const r=await e?.getSessions(n?.caipNetworkId,P.getPlainAddress(h.getActiveCaipAddress())||"");r&&r.length>0?await h.switchActiveNetwork(n):await j.disconnect()}else await j.disconnect()}else Ce.close();Ce.close(),te.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:this.getSIWXEventProperties()})}catch(e){console.error("SIWXUtil:cancelSignMessage",e)}},async getAllSessions(){const e=this.getSIWX(),t=h.getAllRequestedCaipNetworks(),n=[];return await Promise.all(t.map(async r=>{const o=await e?.getSessions(r.caipNetworkId,P.getPlainAddress(h.getActiveCaipAddress())||"");o&&n.push(...o)})),n},async getSessions(e){const t=$.state.siwx;let n=e?.address;if(!n){const o=h.getActiveCaipAddress();n=P.getPlainAddress(o)}let r=e?.caipNetworkId;return r||(r=h.getActiveCaipNetwork()?.caipNetworkId),t&&n&&r?t.getSessions(r,n):[]},async isSIWXCloseDisabled(){const e=this.getSIWX();if(e){const t=T.state.view==="ApproveTransaction",n=T.state.view==="SIWXSignMessage";if(t||n)return e.getRequired?.()&&(await this.getSessions()).length===0}return!1},async authConnectorAuthenticate({authConnector:e,chainId:t,socialUri:n,preferredAccountType:r,chainNamespace:o}){const i=yn.getSIWX(),s=Ys();if(!i||!o.includes(z.CHAIN.EVM)||$.state.remoteFeatures?.emailCapture){const g=await e.connect({chainId:t,socialUri:n,preferredAccountType:r});return{address:g.address,chainId:g.chainId,accounts:g.accounts}}const a=`${o}:${t}`,c=await i.createMessage({chainId:a,accountAddress:"<<AccountAddress>>"}),l={accountAddress:c.accountAddress,chainId:c.chainId,domain:c.domain,uri:c.uri,version:c.version,nonce:c.nonce,notBefore:c.notBefore,statement:c.statement,resources:c.resources,requestId:c.requestId,issuedAt:c.issuedAt,expirationTime:c.expirationTime,serializedMessage:c.toString()},d=await e.connect({chainId:t,socialUri:n,siwxMessage:l,preferredAccountType:r});return l.accountAddress=d.address,l.serializedMessage=d.message||"",d.signature&&d.message&&await yn.addEmbeddedWalletSession(l,d.message,d.signature),h.setLastConnectedSIWECaipNetwork(s),{address:d.address,chainId:d.chainId,accounts:d.accounts}},async addEmbeddedWalletSession(e,t,n){if(Nr)return Nr;const r=yn.getSIWX();return r?(Nr=r.addSession({data:e,message:t,signature:n}).finally(()=>{Nr=null}),Nr):Promise.resolve()},async universalProviderAuthenticate({universalProvider:e,chains:t,methods:n}){const r=yn.getSIWX(),o=Ys(),i=new Set(t.map(l=>l.split(":")[0]));if(!r||i.size!==1||!i.has("eip155"))return!1;const s=await r.createMessage({chainId:Ys()?.caipNetworkId||"",accountAddress:""}),a=await e.authenticate({nonce:s.nonce,domain:s.domain,uri:s.uri,exp:s.expirationTime,iat:s.issuedAt,nbf:s.notBefore,requestId:s.requestId,version:s.version,resources:s.resources,statement:s.statement,chainId:s.chainId,methods:n,chains:[s.chainId,...t.filter(l=>l!==s.chainId)]});$e.showLoading("Authenticating...",{autoClose:!1});const c={...a.session.peer.metadata,name:a.session.peer.metadata.name,icon:a.session.peer.metadata.icons?.[0],type:"WALLET_CONNECT"};if(h.setAccountProp("connectedWalletInfo",c,Array.from(i)[0]),a?.auths?.length){const l=a.auths.map(d=>{const g=e.client.formatAuthMessage({request:d.p,iss:d.p.iss});return{data:{...d.p,accountAddress:d.p.iss.split(":").slice(-1).join(""),chainId:d.p.iss.split(":").slice(2,4).join(":"),uri:d.p.aud,version:d.p.version||s.version,expirationTime:d.p.exp,issuedAt:d.p.iat,notBefore:d.p.nbf},message:g,signature:d.s.s,cacao:d}});try{await r.setSessions(l),o&&h.setLastConnectedSIWECaipNetwork(o),te.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:yn.getSIWXEventProperties()})}catch(d){throw console.error("SIWX:universalProviderAuth - failed to set sessions",d),te.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:yn.getSIWXEventProperties(d)}),await e.disconnect().catch(console.error),d}finally{$e.hide()}}return!0},getSIWXEventProperties(e){const t=h.state.activeChain;if(!t)throw new Error("SIWXUtil:getSIWXEventProperties - namespace is required");return{network:h.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:rt(t)===De.ACCOUNT_TYPES.SMART_ACCOUNT,message:e?P.parseError(e):void 0}},async clearSessions(){const e=this.getSIWX();e&&await e.setSessions([])}},tn=He({message:"",variant:"info",open:!1}),Pw={state:tn,subscribeKey(e,t){return at(tn,e,t)},open(e,t){const{debug:n}=$.state,{code:r,displayMessage:o,debugMessage:i}=e;o&&n&&(tn.message=o,tn.variant=t,tn.open=!0),i&&console.error(typeof i=="function"?i():i,r?{code:r}:void 0)},warn(e,t,n){tn.open=!0,tn.message=e,tn.variant="warning",t&&console.warn(t,n)},close(){tn.open=!1,tn.message="",tn.variant="info"}},Qp=hn(Pw),nn=He({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),Lw={state:nn,subscribe(e){return st(nn,()=>e(nn))},subscribeKey(e,t){return at(nn,e,t)},showTooltip({message:e,triggerRect:t,variant:n}){nn.open=!0,nn.message=e,nn.triggerRect=t,nn.variant=n},hide(){nn.open=!1,nn.message="",nn.triggerRect={width:0,height:0,top:0,left:0}}},Ft=hn(Lw),lo=He({isLegalCheckboxChecked:!1}),Br={state:lo,subscribe(e){return st(lo,()=>e(lo))},subscribeKey(e,t){return at(lo,e,t)},setIsLegalCheckboxChecked(e){lo.isLegalCheckboxChecked=e}},Dw={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};class Mw extends Error{}function Uw(){const{sdkType:e,sdkVersion:t,projectId:n}=$.getSnapshot(),r=new URL("https://rpc.walletconnect.org/v1/json-rpc");return r.searchParams.set("projectId",n),r.searchParams.set("st",e),r.searchParams.set("sv",t),r.searchParams.set("source","fund-wallet"),r.toString()}async function Ql(e,t){const n=Uw(),{projectId:r}=$.getSnapshot(),o={jsonrpc:"2.0",id:1,method:e,params:{...t||{},projectId:r}},s=await(await fetch(n,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}})).json();if(s.error)throw new Mw(s.error.message);return s}async function Bw(e){return(await Ql("reown_getExchanges",e)).result}async function Ww(e){return(await Ql("reown_getExchangePayUrl",e)).result}async function jw(e){return(await Ql("reown_getExchangeBuyStatus",e)).result}function ou(e,t){const{chainNamespace:n,chainId:r}=sn.parseCaipNetworkId(e),o=Dw[n];if(!o)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`);let i=o.native.assetNamespace,s=o.native.assetReference;return t!=="native"&&(i=o.defaultTokenNamespace,s=t),`${`${n}:${r}`}/${i}:${s}`}const Fw={network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},zw={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},Hw={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Av={asset:"0x036CbD53842c5426634e7929541eC2318f3dCF7e"},Vw={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},qw={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Kw={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Gw={network:"eip155:137",asset:"0x2791bca1f2de4661ed88a30c99a7a9449aa84174",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Zw={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Yw={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Jw={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Xw={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Qw={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},e2={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},t2={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}},n2={ethereumETH:Fw,baseETH:zw,baseUSDC:Hw,baseSepoliaETH:Vw,ethereumUSDC:qw,arbitrumUSDC:Kw,polygonUSDC:Gw,solanaUSDC:Zw,ethereumUSDT:Yw,optimismUSDT:Jw,arbitrumUSDT:Xw,polygonUSDT:Qw,solanaUSDT:e2,solanaSOL:t2};function r2(e){return Object.values(n2).filter(t=>t.network===e)}const i2=0,eh={paymentAsset:null,amount:null,tokenAmount:0,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:"",assets:[]},he=He(eh),tt={state:he,subscribe(e){return st(he,()=>e(he))},subscribeKey(e,t){return at(he,e,t)},resetState(){Object.assign(he,{...eh})},async getAssetsForNetwork(e){const t=r2(e),n=await tt.getAssetsImageAndPrice(t),r=t.map(o=>{const i=o.asset==="native"?Ta():`${o.network}:${o.asset}`,s=n.find(a=>a.fungibles?.[0]?.address?.toLowerCase()===i.toLowerCase());return{...o,price:s?.fungibles?.[0]?.price||1,metadata:{...o.metadata,iconUrl:s?.fungibles?.[0]?.iconUrl}}});return he.assets=r,r},async getAssetsImageAndPrice(e){const t=e.map(r=>r.asset==="native"?Ta():`${r.network}:${r.asset}`);return await Promise.all(t.map(r=>xe.fetchTokenPrice({addresses:[r]})))},getTokenAmount(){if(!he?.paymentAsset?.price)throw new Error("Cannot get token price");const e=Fo.bigNumber(he.amount??0).round(8),t=Fo.bigNumber(he.paymentAsset.price).round(8);return e.div(t).round(8).toNumber()},setAmount(e){he.amount=e,he.paymentAsset?.price&&(he.tokenAmount=tt.getTokenAmount())},setPaymentAsset(e){he.paymentAsset=e},isPayWithExchangeEnabled(){return $.state.remoteFeatures?.payWithExchange},isPayWithExchangeSupported(){return tt.isPayWithExchangeEnabled()&&h.state.activeCaipNetwork&&Ie.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(h.state.activeCaipNetwork.chainNamespace)},async fetchExchanges(){try{const e=tt.isPayWithExchangeSupported();if(!he.paymentAsset||!e){he.exchanges=[],he.isLoading=!1;return}he.isLoading=!0;const t=await Bw({page:i2,asset:ou(he.paymentAsset.network,he.paymentAsset.asset),amount:he.amount?.toString()??"0"});he.exchanges=t.exchanges.slice(0,2)}catch{throw $e.showError("Unable to get exchanges"),new Error("Unable to get exchanges")}finally{he.isLoading=!1}},async getPayUrl(e,t){try{const n=Number(t.amount),r=await Ww({exchangeId:e,asset:ou(t.network,t.asset),amount:n.toString(),recipient:`${t.network}:${t.recipient}`});return te.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e},source:"fund-from-exchange",headless:!1}}),r}catch(n){throw n instanceof Error&&n.message.includes("is not supported")?new Error("Asset not supported"):new Error(n.message)}},async handlePayWithExchange(e){try{const t=h.getAccountData()?.address;if(!t)throw new Error("No account connected");if(!he.paymentAsset)throw new Error("No payment asset selected");const n=P.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!n)throw new Error("Could not create popup window");he.isPaymentInProgress=!0,he.paymentId=crypto.randomUUID(),he.currentPayment={type:"exchange",exchangeId:e};const{network:r,asset:o}=he.paymentAsset,i={network:r,asset:o,amount:he.tokenAmount,recipient:t},s=await tt.getPayUrl(e,i);if(!s){try{n.close()}catch(a){console.error("Unable to close popup window",a)}throw new Error("Unable to initiate payment")}he.currentPayment.sessionId=s.sessionId,he.currentPayment.status="IN_PROGRESS",he.currentPayment.exchangeId=e,n.location.href=s.url}catch{he.error="Unable to initiate payment",$e.showError(he.error)}},async waitUntilComplete({exchangeId:e,sessionId:t,paymentId:n,retries:r=20}){const o=await tt.getBuyStatus(e,t,n);if(o.status==="SUCCESS"||o.status==="FAILED")return o;if(r===0)throw new Error("Unable to get deposit status");return await new Promise(i=>{setTimeout(i,5e3)}),tt.waitUntilComplete({exchangeId:e,sessionId:t,paymentId:n,retries:r-1})},async getBuyStatus(e,t,n){try{if(!he.currentPayment)throw new Error("No current payment");const r=await jw({sessionId:t,exchangeId:e});if(he.currentPayment.status=r.status,r.status==="SUCCESS"||r.status==="FAILED"){const o=h.getAccountData()?.address;he.currentPayment.result=r.txHash,he.isPaymentInProgress=!1,te.sendEvent({type:"track",event:r.status==="SUCCESS"?"PAY_SUCCESS":"PAY_ERROR",properties:{message:r.status==="FAILED"?P.parseError(he.error):void 0,source:"fund-from-exchange",paymentId:n,configuration:{network:he.paymentAsset?.network||"",asset:he.paymentAsset?.asset||"",recipient:o||"",amount:he.amount??0},currentPayment:{type:"exchange",exchangeId:he.currentPayment?.exchangeId,sessionId:he.currentPayment?.sessionId,result:r.txHash}}})}return r}catch{return{status:"UNKNOWN",txHash:""}}},reset(){he.currentPayment=void 0,he.isPaymentInProgress=!1,he.paymentId="",he.paymentAsset=null,he.amount=0,he.tokenAmount=0,he.priceLoading=!1,he.error=null,he.exchanges=[],he.isLoading=!1}};function o2(){try{return P.returnOpenHref(`${z.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch{throw new Error("Could not open social popup")}}async function s2(){T.push("ConnectingFarcaster");const e=D.getAuthConnector();if(e&&!h.getAccountData()?.farcasterUrl)try{const{url:n}=await e.provider.getFarcasterUri();h.setAccountProp("farcasterUrl",n,h.state.activeChain)}catch(n){T.goBack(),$e.showError(n)}}async function a2(e){T.push("ConnectingSocial");const t=D.getAuthConnector();let n=null;try{const r=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(P.isTelegram()||(n=o2()),n)h.setAccountProp("socialWindow",Ui(n),h.state.activeChain);else if(!P.isTelegram())throw new Error("Could not create social popup");const{uri:o}=await t.provider.getSocialRedirectUri({provider:e});if(!o)throw n?.close(),new Error("Could not fetch the social redirect uri");if(n&&(n.location.href=o),P.isTelegram()){J.setTelegramSocialProvider(e);const i=P.formatTelegramSocialLoginUrl(o);P.openHref(i,"_top")}clearTimeout(r)}}catch(r){n?.close();const o=P.parseError(r);$e.showError(o),te.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:o}})}}async function c2(e){h.setAccountProp("socialProvider",e,h.state.activeChain),te.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),e==="farcaster"?await s2():await a2(e)}const gt={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",EIP155:z.CHAIN.EVM,ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH",getSDKVersionWarningMessage(e,t){return`
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${e} is outdated. Latest version is ${t}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`}},l2={ConnectorExplorerIds:{[z.CONNECTOR_ID.COINBASE]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[z.CONNECTOR_ID.COINBASE_SDK]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[z.CONNECTOR_ID.SAFE]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[z.CONNECTOR_ID.LEDGER]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",[z.CONNECTOR_ID.OKX]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[gt.METMASK_CONNECTOR_NAME]:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",[gt.TRUST_CONNECTOR_NAME]:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",[gt.SOLFLARE_CONNECTOR_NAME]:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",[gt.PHANTOM_CONNECTOR_NAME]:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",[gt.COIN98_CONNECTOR_NAME]:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",[gt.MAGIC_EDEN_CONNECTOR_NAME]:"8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",[gt.BACKPACK_CONNECTOR_NAME]:"2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",[gt.BITGET_CONNECTOR_NAME]:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",[gt.FRONTIER_CONNECTOR_NAME]:"85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",[gt.XVERSE_CONNECTOR_NAME]:"2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",[gt.LEATHER_CONNECTOR_NAME]:"483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",[gt.OKX_CONNECTOR_NAME]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709"},NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",11155111:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200","00000008819873e925422c1ff0f99f7c":"b3406e4a-bbfc-44fb-e3a6-89673c78b700"},ConnectorImageIds:{[z.CONNECTOR_ID.COINBASE]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[z.CONNECTOR_ID.COINBASE_SDK]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[z.CONNECTOR_ID.SAFE]:"461db637-8616-43ce-035a-d89b8a1d5800",[z.CONNECTOR_ID.LEDGER]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[z.CONNECTOR_ID.WALLET_CONNECT]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[z.CONNECTOR_ID.INJECTED]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[z.CONNECTOR_ID.INJECTED]:"Browser Wallet",[z.CONNECTOR_ID.WALLET_CONNECT]:"WalletConnect",[z.CONNECTOR_ID.COINBASE]:"Coinbase",[z.CONNECTOR_ID.COINBASE_SDK]:"Coinbase",[z.CONNECTOR_ID.LEDGER]:"Ledger",[z.CONNECTOR_ID.SAFE]:"Safe"},ConnectorTypesMap:{[z.CONNECTOR_ID.INJECTED]:"INJECTED",[z.CONNECTOR_ID.WALLET_CONNECT]:"WALLET_CONNECT",[z.CONNECTOR_ID.EIP6963]:"ANNOUNCED",[z.CONNECTOR_ID.AUTH]:"AUTH",[gt.CONNECTOR_TYPE_AUTH]:"AUTH"}},bt={getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach(([n,r])=>{t[`${gt.EIP155}:${n}`]=r}),t},isLowerCaseMatch(e,t){return e?.toLowerCase()===t?.toLowerCase()},getActiveNamespaceConnectedToAuth(){const e=h.state.activeChain;return z.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(t=>D.getConnectorId(t)===z.CONNECTOR_ID.AUTH&&t===e)},withRetry({conditionFn:e,intervalMs:t,maxRetries:n}){let r=0;return new Promise(o=>{async function i(){return r+=1,await e()?o(!0):r>=n?o(!1):(setTimeout(i,t),null)}i()})},userChainIdToChainNamespace(e){if(typeof e=="number")return z.CHAIN.EVM;const[t]=e.split(":");return t},getOtherAuthNamespaces(e){return e?z.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter(r=>r!==e):[]},getConnectorStorageInfo(e,t){const r=J.getConnections()[t]??[];return{hasDisconnected:J.isConnectorDisconnected(e,t),hasConnected:r.some(o=>bt.isLowerCaseMatch(o.connectorId,e))}}},d2=new AbortController,u2={EmbeddedWalletAbortController:d2,UniversalProviderErrors:{UNAUTHORIZED_DOMAIN_NOT_ALLOWED:{message:"Unauthorized: origin not allowed",alertErrorKey:"ORIGIN_NOT_ALLOWED"},JWT_VALIDATION_ERROR:{message:"JWT validation error: JWT Token is not yet valid",alertErrorKey:"JWT_TOKEN_NOT_VALID"},INVALID_KEY:{message:"Unauthorized: invalid key",alertErrorKey:"INVALID_PROJECT_ID"}},ALERT_ERRORS:{SWITCH_NETWORK_NOT_FOUND:{code:"APKT001",displayMessage:"Network Not Found",debugMessage:"The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration."},ORIGIN_NOT_ALLOWED:{code:"APKT002",displayMessage:"Invalid App Configuration",debugMessage:()=>`The origin ${ho()?window.origin:"unknown"} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${$.state.projectId}]`},IFRAME_LOAD_FAILED:{code:"APKT003",displayMessage:"Network Error: Wallet Load Failed",debugMessage:()=>"Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists."},IFRAME_REQUEST_TIMEOUT:{code:"APKT004",displayMessage:"Wallet Request Timeout",debugMessage:()=>"The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists."},UNVERIFIED_DOMAIN:{code:"APKT005",displayMessage:"Unverified Domain",debugMessage:()=>"Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com."},JWT_TOKEN_NOT_VALID:{code:"APKT006",displayMessage:"Session Expired",debugMessage:"Your session is invalid or expired. Please check your system’s date and time settings, then reconnect."},INVALID_PROJECT_ID:{code:"APKT007",displayMessage:"Invalid Project ID",debugMessage:"The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID."},PROJECT_ID_NOT_CONFIGURED:{code:"APKT008",displayMessage:"Project ID Missing",debugMessage:"No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com."},SERVER_ERROR_APP_CONFIGURATION:{code:"APKT009",displayMessage:"Server Error",debugMessage:e=>`Unable to fetch App Configuration. ${e}. Please check your network connection and try again shortly. Contact support if the issue persists.`},RATE_LIMITED_APP_CONFIGURATION:{code:"APKT010",displayMessage:"Rate Limited",debugMessage:"You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists."}},ALERT_WARNINGS:{LOCAL_CONFIGURATION_IGNORED:{debugMessage:e=>`[Reown Config Notice] ${e}`},INACTIVE_NAMESPACE_NOT_CONNECTED:{code:"APKTW001",displayMessage:"Inactive Namespace Not Connected",debugMessage:(e,t)=>`An error occurred while connecting an inactive namespace ${e}: "${t}"`},INVALID_EMAIL:{code:"APKTW002",displayMessage:"Invalid Email Address",debugMessage:"Please enter a valid email address"}}},p2="rpc.walletconnect.org";function su(e,t){const n=new URL("https://rpc.walletconnect.org/v1/");return n.searchParams.set("chainId",e),n.searchParams.set("projectId",t),n.toString()}const kc=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301","eip155:80094","eip155:80069","eip155:560048","eip155:31","eip155:2818","eip155:57054","eip155:911867","eip155:534351","eip155:1112","eip155:534352","eip155:1111","eip155:146","eip155:130","eip155:1284","eip155:30","eip155:2810","bip122:000000000019d6689c085ae165831e93","bip122:000000000933ea01ad0ee984209779ba"],th={extendRpcUrlWithProjectId(e,t){let n=!1;try{n=new URL(e).host===p2}catch{n=!1}if(n){const r=new URL(e);return r.searchParams.has("projectId")||r.searchParams.set("projectId",t),r.toString()}return e},isCaipNetwork(e){return"chainNamespace"in e&&"caipNetworkId"in e},getChainNamespace(e){return this.isCaipNetwork(e)?e.chainNamespace:z.CHAIN.EVM},getCaipNetworkId(e){return this.isCaipNetwork(e)?e.caipNetworkId:`${z.CHAIN.EVM}:${e.id}`},getDefaultRpcUrl(e,t,n){const r=e.rpcUrls?.default?.http?.[0];return kc.includes(t)?su(t,n):r||""},extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:n,customRpcUrls:r}){const o=this.getChainNamespace(e),i=this.getCaipNetworkId(e),s=e.rpcUrls?.default?.http?.[0],a=this.getDefaultRpcUrl(e,i,n),c=e?.rpcUrls?.chainDefault?.http?.[0]||s,l=r?.[i]?.map(w=>w.url)||[],d=[...l,...a?[a]:[]],g=[...l];return c&&!g.includes(c)&&g.push(c),{...e,chainNamespace:o,caipNetworkId:i,assets:{imageId:l2.NetworkImageIds[e.id],imageUrl:t?.[e.id]},rpcUrls:{...e.rpcUrls,default:{http:d},chainDefault:{http:g}}}},extendCaipNetworks(e,{customNetworkImageUrls:t,projectId:n,customRpcUrls:r}){return e.map(o=>th.extendCaipNetwork(o,{customNetworkImageUrls:t,customRpcUrls:r,projectId:n}))},getViemTransport(e,t,n){const r=[];return n?.forEach(o=>{r.push(Zs(o.url,o.config))}),kc.includes(e.caipNetworkId)&&r.push(Zs(su(e.caipNetworkId,t),{fetchOptions:{headers:{"Content-Type":"text/plain"}}})),e?.rpcUrls?.default?.http?.forEach(o=>{r.push(Zs(o))}),Zd(r)},extendWagmiTransports(e,t,n){if(kc.includes(e.caipNetworkId)){const r=this.getDefaultRpcUrl(e,e.caipNetworkId,t);return Zd([n,Zs(r)])}return n},getUnsupportedNetwork(e){return{id:e.split(":")[1],caipNetworkId:e,name:z.UNSUPPORTED_NETWORK_NAME,chainNamespace:e.split(":")[0],nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}}},getCaipNetworkFromStorage(e){const t=J.getActiveCaipNetworkId(),n=h.getAllRequestedCaipNetworks(),r=Array.from(h.state.chains?.keys()||[]),o=t?.split(":")[0],i=o?r.includes(o):!1,s=n?.find(c=>c.caipNetworkId===t);return i&&!s&&t?this.getUnsupportedNetwork(t):s||e||n?.[0]}};var au={};const mo={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:(typeof process<"u"&&typeof au<"u"?au.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]},Vn={filterOutDuplicatesByRDNS(e){const t=$.state.enableEIP6963?D.state.connectors:[],n=J.getRecentWallets(),r=t.map(a=>a.info?.rdns).filter(Boolean),o=n.map(a=>a.rdns).filter(Boolean),i=r.concat(o);if(i.includes("io.metamask.mobile")&&P.isMobile()){const a=i.indexOf("io.metamask.mobile");i[a]="io.metamask"}return e.filter(a=>!(a?.rdns&&i.includes(String(a.rdns))||!a?.rdns&&t.some(l=>l.name===a.name)))},filterOutDuplicatesByIds(e){const t=D.state.connectors.filter(a=>a.type==="ANNOUNCED"||a.type==="INJECTED"),n=J.getRecentWallets(),r=t.map(a=>a.explorerId),o=n.map(a=>a.id),i=r.concat(o);return e.filter(a=>!i.includes(a?.id))},filterOutDuplicateWallets(e){const t=this.filterOutDuplicatesByRDNS(e);return this.filterOutDuplicatesByIds(t)},markWalletsAsInstalled(e){const{connectors:t}=D.state,{featuredWalletIds:n}=$.state,r=t.filter(s=>s.type==="ANNOUNCED").reduce((s,a)=>(a.info?.rdns&&(s[a.info.rdns]=!0),s),{});return e.map(s=>({...s,installed:!!s.rdns&&!!r[s.rdns??""]})).sort((s,a)=>{const c=Number(a.installed)-Number(s.installed);if(c!==0)return c;if(n?.length){const l=n.indexOf(s.id),d=n.indexOf(a.id);if(l!==-1&&d!==-1)return l-d;if(l!==-1)return-1;if(d!==-1)return 1}return 0})},getConnectOrderMethod(e,t){const n=e?.connectMethodsOrder||$.state.features?.connectMethodsOrder,r=t||D.state.connectors;if(n)return n;const{injected:o,announced:i}=zt.getConnectorsByType(r,Z.state.recommended,Z.state.featured),s=o.filter(zt.showConnector),a=i.filter(zt.showConnector);return s.length||a.length?["wallet","email","social"]:mo.DEFAULT_CONNECT_METHOD_ORDER},isExcluded(e){const t=!!e.rdns&&Z.state.excludedWallets.some(r=>r.rdns===e.rdns),n=!!e.name&&Z.state.excludedWallets.some(r=>bt.isLowerCaseMatch(r.name,e.name));return t||n},markWalletsWithDisplayIndex(e){return e.map((t,n)=>({...t,display_index:n}))}},zt={getConnectorsByType(e,t,n){const{customWallets:r}=$.state,o=J.getRecentWallets(),i=Vn.filterOutDuplicateWallets(t),s=Vn.filterOutDuplicateWallets(n),a=e.filter(g=>g.type==="MULTI_CHAIN"),c=e.filter(g=>g.type==="ANNOUNCED"),l=e.filter(g=>g.type==="INJECTED"),d=e.filter(g=>g.type==="EXTERNAL");return{custom:r,recent:o,external:d,multiChain:a,announced:c,injected:l,recommended:i,featured:s}},showConnector(e){const t=e.info?.rdns,n=!!t&&Z.state.excludedWallets.some(o=>!!o.rdns&&o.rdns===t),r=!!e.name&&Z.state.excludedWallets.some(o=>bt.isLowerCaseMatch(o.name,e.name));return!(e.type==="INJECTED"&&(e.name==="Browser Wallet"&&(!P.isMobile()||P.isMobile()&&!t&&!j.checkInstalled())||n||r)||(e.type==="ANNOUNCED"||e.type==="EXTERNAL")&&(n||r))},getIsConnectedWithWC(){return Array.from(h.state.chains.values()).some(n=>D.getConnectorId(n.namespace)===z.CONNECTOR_ID.WALLET_CONNECT)},getConnectorTypeOrder({recommended:e,featured:t,custom:n,recent:r,announced:o,injected:i,multiChain:s,external:a,overriddenConnectors:c=$.state.features?.connectorTypeOrder??[]}){const d=[{type:"walletConnect",isEnabled:!0},{type:"recent",isEnabled:r.length>0},{type:"injected",isEnabled:[...i,...o,...s].length>0},{type:"featured",isEnabled:t.length>0},{type:"custom",isEnabled:n&&n.length>0},{type:"external",isEnabled:a.length>0},{type:"recommended",isEnabled:e.length>0}].filter(E=>E.isEnabled),g=new Set(d.map(E=>E.type)),w=c.filter(E=>g.has(E)).map(E=>({type:E,isEnabled:!0})),y=d.filter(({type:E})=>!w.some(({type:x})=>x===E));return Array.from(new Set([...w,...y].map(({type:E})=>E)))},sortConnectorsByExplorerWallet(e){return[...e].sort((t,n)=>t.explorerWallet&&n.explorerWallet?(t.explorerWallet.order??0)-(n.explorerWallet.order??0):t.explorerWallet?-1:n.explorerWallet?1:0)},getAuthName({email:e,socialUsername:t,socialProvider:n}){return t?n&&n==="discord"&&t.endsWith("0")?t.slice(0,-1):t:e.length>30?`${e.slice(0,-3)}...`:e},async fetchProviderData(e){try{if(e.name==="Browser Wallet"&&!P.isMobile())return{accounts:[],chainId:void 0};if(e.id===z.CONNECTOR_ID.AUTH)return{accounts:[],chainId:void 0};const[t,n]=await Promise.all([e.provider?.request({method:"eth_accounts"}),e.provider?.request({method:"eth_chainId"}).then(r=>Number(r))]);return{accounts:t,chainId:n}}catch(t){return console.warn(`Failed to fetch provider data for ${e.name}`,t),{accounts:[],chainId:void 0}}},getFilteredCustomWallets(e){const t=J.getRecentWallets(),n=D.state.connectors.map(s=>s.info?.rdns).filter(Boolean),r=t.map(s=>s.rdns).filter(Boolean),o=n.concat(r);if(o.includes("io.metamask.mobile")&&P.isMobile()){const s=o.indexOf("io.metamask.mobile");o[s]="io.metamask"}return e.filter(s=>!o.includes(String(s?.rdns)))},hasWalletConnector(e){return D.state.connectors.some(t=>t.id===e.id||t.name===e.name)},isWalletCompatibleWithCurrentChain(e){const t=h.state.activeChain;return t&&e.chains?e.chains.some(n=>{const r=n.split(":")[0];return t===r}):!0},getFilteredRecentWallets(){return J.getRecentWallets().filter(n=>!Vn.isExcluded(n)).filter(n=>!this.hasWalletConnector(n)).filter(n=>this.isWalletCompatibleWithCurrentChain(n))},getCappedRecommendedWallets(e){const{connectors:t}=D.state,{customWallets:n,featuredWalletIds:r}=$.state,o=t.find(R=>R.id==="walletConnect"),i=t.filter(R=>R.type==="INJECTED"||R.type==="ANNOUNCED"||R.type==="MULTI_CHAIN");if(!o&&!i.length&&!n?.length)return[];const s=wl.isEmailEnabled(),a=wl.isSocialsEnabled(),c=i.filter(R=>R.name!=="Browser Wallet"),l=r?.length||0,d=n?.length||0,g=c.length||0,w=s?1:0,y=a?1:0,E=l+d+g+w+y,x=Math.max(0,4-E);return x<=0?[]:Vn.filterOutDuplicateWallets(e).slice(0,x)}},$a={interpolate(e,t,n){if(e.length!==2||t.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const r=e[0]||0,o=e[1]||0,i=t[0]||0,s=t[1]||0;return n<r?i:n>o?s:(s-i)/(o-r)*(n-r)+i}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const da=globalThis,ed=da.ShadowRoot&&(da.ShadyCSS===void 0||da.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,td=Symbol(),cu=new WeakMap;let nh=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==td)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ed&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=cu.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&cu.set(n,t))}return t}toString(){return this.cssText}};const rn=e=>new nh(typeof e=="string"?e:e+"",void 0,td),Fe=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new nh(n,e,td)},h2=(e,t)=>{if(ed)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=da.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},lu=ed?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return rn(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:f2,defineProperty:m2,getOwnPropertyDescriptor:g2,getOwnPropertyNames:w2,getOwnPropertySymbols:b2,getPrototypeOf:y2}=Object,sc=globalThis,du=sc.trustedTypes,v2=du?du.emptyScript:"",C2=sc.reactiveElementPolyfillSupport,yo=(e,t)=>e,Ra={toAttribute(e,t){switch(t){case Boolean:e=e?v2:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},nd=(e,t)=>!f2(e,t),uu={attribute:!0,type:String,converter:Ra,reflect:!1,useDefault:!1,hasChanged:nd};Symbol.metadata??=Symbol("metadata"),sc.litPropertyMetadata??=new WeakMap;let $i=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=uu){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&m2(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=g2(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){const a=o?.call(this);i?.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??uu}static _$Ei(){if(this.hasOwnProperty(yo("elementProperties")))return;const t=y2(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(yo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yo("properties"))){const n=this.properties,r=[...w2(n),...b2(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(lu(o))}else t!==void 0&&n.push(lu(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h2(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:Ra).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Ra;this._$Em=o;const a=s.fromAttribute(n,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){const o=this.constructor,i=this[t];if(r??=o.getPropertyOptions(t),!((r.hasChanged??nd)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??n??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,i]of r){const{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};$i.elementStyles=[],$i.shadowRootOptions={mode:"open"},$i[yo("elementProperties")]=new Map,$i[yo("finalized")]=new Map,C2?.({ReactiveElement:$i}),(sc.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rd=globalThis,ka=rd.trustedTypes,pu=ka?ka.createPolicy("lit-html",{createHTML:e=>e}):void 0,rh="$lit$",lr=`lit$${Math.random().toFixed(9).slice(2)}$`,ih="?"+lr,E2=`<${ih}>`,Hr=document,is=()=>Hr.createComment(""),os=e=>e===null||typeof e!="object"&&typeof e!="function",id=Array.isArray,_2=e=>id(e)||typeof e?.[Symbol.iterator]=="function",Ic=`[ 	
\f\r]`,uo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hu=/-->/g,fu=/>/g,$r=RegExp(`>|${Ic}(?:([^\\s"'>=/]+)(${Ic}*=${Ic}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mu=/'/g,gu=/"/g,oh=/^(?:script|style|textarea|title)$/i,sh=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),u=sh(1),we=sh(2),Vr=Symbol.for("lit-noChange"),Je=Symbol.for("lit-nothing"),wu=new WeakMap,Lr=Hr.createTreeWalker(Hr,129);function ah(e,t){if(!id(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return pu!==void 0?pu.createHTML(t):t}const x2=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=uo;for(let a=0;a<n;a++){const c=e[a];let l,d,g=-1,w=0;for(;w<c.length&&(s.lastIndex=w,d=s.exec(c),d!==null);)w=s.lastIndex,s===uo?d[1]==="!--"?s=hu:d[1]!==void 0?s=fu:d[2]!==void 0?(oh.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=$r):d[3]!==void 0&&(s=$r):s===$r?d[0]===">"?(s=o??uo,g=-1):d[1]===void 0?g=-2:(g=s.lastIndex-d[2].length,l=d[1],s=d[3]===void 0?$r:d[3]==='"'?gu:mu):s===gu||s===mu?s=$r:s===hu||s===fu?s=uo:(s=$r,o=void 0);const y=s===$r&&e[a+1].startsWith("/>")?" ":"";i+=s===uo?c+E2:g>=0?(r.push(l),c.slice(0,g)+rh+c.slice(g)+lr+y):c+lr+(g===-2?a:y)}return[ah(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class ss{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,s=0;const a=t.length-1,c=this.parts,[l,d]=x2(t,n);if(this.el=ss.createElement(l,r),Lr.currentNode=this.el.content,n===2||n===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(o=Lr.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const g of o.getAttributeNames())if(g.endsWith(rh)){const w=d[s++],y=o.getAttribute(g).split(lr),E=/([.?@])?(.*)/.exec(w);c.push({type:1,index:i,name:E[2],strings:y,ctor:E[1]==="."?S2:E[1]==="?"?T2:E[1]==="@"?N2:ac}),o.removeAttribute(g)}else g.startsWith(lr)&&(c.push({type:6,index:i}),o.removeAttribute(g));if(oh.test(o.tagName)){const g=o.textContent.split(lr),w=g.length-1;if(w>0){o.textContent=ka?ka.emptyScript:"";for(let y=0;y<w;y++)o.append(g[y],is()),Lr.nextNode(),c.push({type:2,index:++i});o.append(g[w],is())}}}else if(o.nodeType===8)if(o.data===ih)c.push({type:2,index:i});else{let g=-1;for(;(g=o.data.indexOf(lr,g+1))!==-1;)c.push({type:7,index:i}),g+=lr.length-1}i++}}static createElement(t,n){const r=Hr.createElement("template");return r.innerHTML=t,r}}function Fi(e,t,n=e,r){if(t===Vr)return t;let o=r!==void 0?n._$Co?.[r]:n._$Cl;const i=os(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(t=Fi(e,o._$AS(e,t.values),o,r)),t}class A2{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=(t?.creationScope??Hr).importNode(n,!0);Lr.currentNode=o;let i=Lr.nextNode(),s=0,a=0,c=r[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new vs(i,i.nextSibling,this,t):c.type===1?l=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(l=new $2(i,this,t)),this._$AV.push(l),c=r[++a]}s!==c?.index&&(i=Lr.nextNode(),s++)}return Lr.currentNode=Hr,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class vs{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=Je,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Fi(this,t,n),os(t)?t===Je||t==null||t===""?(this._$AH!==Je&&this._$AR(),this._$AH=Je):t!==this._$AH&&t!==Vr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_2(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Je&&os(this._$AH)?this._$AA.nextSibling.data=t:this.T(Hr.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ss.createElement(ah(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{const i=new A2(o,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(t){let n=wu.get(t.strings);return n===void 0&&wu.set(t.strings,n=new ss(t)),n}k(t){id(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new vs(this.O(is()),this.O(is()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ac{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=Je,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Je}_$AI(t,n=this,r,o){const i=this.strings;let s=!1;if(i===void 0)t=Fi(this,t,n,0),s=!os(t)||t!==this._$AH&&t!==Vr,s&&(this._$AH=t);else{const a=t;let c,l;for(t=i[0],c=0;c<i.length-1;c++)l=Fi(this,a[r+c],n,c),l===Vr&&(l=this._$AH[c]),s||=!os(l)||l!==this._$AH[c],l===Je?t=Je:t!==Je&&(t+=(l??"")+i[c+1]),this._$AH[c]=l}s&&!o&&this.j(t)}j(t){t===Je?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class S2 extends ac{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Je?void 0:t}}class T2 extends ac{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Je)}}class N2 extends ac{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=Fi(this,t,n,0)??Je)===Vr)return;const r=this._$AH,o=t===Je&&r!==Je||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==Je&&(r===Je||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class $2{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Fi(this,t)}}const R2=rd.litHtmlPolyfillSupport;R2?.(ss,vs),(rd.litHtmlVersions??=[]).push("3.3.1");const k2=(e,t,n)=>{const r=n?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const i=n?.renderBefore??null;r._$litPart$=o=new vs(t.insertBefore(is(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const od=globalThis;let U=class extends $i{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=k2(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Vr}};U._$litElement$=!0,U.finalized=!0,od.litElementHydrateSupport?.({LitElement:U});const I2=od.litElementPolyfillSupport;I2?.({LitElement:U});(od.litElementVersions??=[]).push("4.2.1");const O2={black:"#202020",white:"#FFFFFF",white010:"rgba(255, 255, 255, 0.1)",accent010:"rgba(9, 136, 240, 0.1)",accent020:"rgba(9, 136, 240, 0.2)",accent030:"rgba(9, 136, 240, 0.3)",accent040:"rgba(9, 136, 240, 0.4)",accent050:"rgba(9, 136, 240, 0.5)",accent060:"rgba(9, 136, 240, 0.6)",accent070:"rgba(9, 136, 240, 0.7)",accent080:"rgba(9, 136, 240, 0.8)",accent090:"rgba(9, 136, 240, 0.9)",accent100:"rgba(9, 136, 240, 1.0)",accentSecondary010:"rgba(199, 185, 148, 0.1)",accentSecondary020:"rgba(199, 185, 148, 0.2)",accentSecondary030:"rgba(199, 185, 148, 0.3)",accentSecondary040:"rgba(199, 185, 148, 0.4)",accentSecondary050:"rgba(199, 185, 148, 0.5)",accentSecondary060:"rgba(199, 185, 148, 0.6)",accentSecondary070:"rgba(199, 185, 148, 0.7)",accentSecondary080:"rgba(199, 185, 148, 0.8)",accentSecondary090:"rgba(199, 185, 148, 0.9)",accentSecondary100:"rgba(199, 185, 148, 1.0)",productWalletKit:"#FFB800",productAppKit:"#FF573B",productCloud:"#0988F0",productDocumentation:"#008847",neutrals050:"#F6F6F6",neutrals100:"#F3F3F3",neutrals200:"#E9E9E9",neutrals300:"#D0D0D0",neutrals400:"#BBB",neutrals500:"#9A9A9A",neutrals600:"#6C6C6C",neutrals700:"#4F4F4F",neutrals800:"#363636",neutrals900:"#2A2A2A",neutrals1000:"#252525",semanticSuccess010:"rgba(48, 164, 107, 0.1)",semanticSuccess020:"rgba(48, 164, 107, 0.2)",semanticSuccess030:"rgba(48, 164, 107, 0.3)",semanticSuccess040:"rgba(48, 164, 107, 0.4)",semanticSuccess050:"rgba(48, 164, 107, 0.5)",semanticSuccess060:"rgba(48, 164, 107, 0.6)",semanticSuccess070:"rgba(48, 164, 107, 0.7)",semanticSuccess080:"rgba(48, 164, 107, 0.8)",semanticSuccess090:"rgba(48, 164, 107, 0.9)",semanticSuccess100:"rgba(48, 164, 107, 1.0)",semanticError010:"rgba(223, 74, 52, 0.1)",semanticError020:"rgba(223, 74, 52, 0.2)",semanticError030:"rgba(223, 74, 52, 0.3)",semanticError040:"rgba(223, 74, 52, 0.4)",semanticError050:"rgba(223, 74, 52, 0.5)",semanticError060:"rgba(223, 74, 52, 0.6)",semanticError070:"rgba(223, 74, 52, 0.7)",semanticError080:"rgba(223, 74, 52, 0.8)",semanticError090:"rgba(223, 74, 52, 0.9)",semanticError100:"rgba(223, 74, 52, 1.0)",semanticWarning010:"rgba(243, 161, 63, 0.1)",semanticWarning020:"rgba(243, 161, 63, 0.2)",semanticWarning030:"rgba(243, 161, 63, 0.3)",semanticWarning040:"rgba(243, 161, 63, 0.4)",semanticWarning050:"rgba(243, 161, 63, 0.5)",semanticWarning060:"rgba(243, 161, 63, 0.6)",semanticWarning070:"rgba(243, 161, 63, 0.7)",semanticWarning080:"rgba(243, 161, 63, 0.8)",semanticWarning090:"rgba(243, 161, 63, 0.9)",semanticWarning100:"rgba(243, 161, 63, 1.0)"},Ia={core:{backgroundAccentPrimary:"#0988F0",backgroundAccentCertified:"#C7B994",backgroundWalletKit:"#FFB800",backgroundAppKit:"#FF573B",backgroundCloud:"#0988F0",backgroundDocumentation:"#008847",backgroundSuccess:"rgba(48, 164, 107, 0.20)",backgroundError:"rgba(223, 74, 52, 0.20)",backgroundWarning:"rgba(243, 161, 63, 0.20)",textAccentPrimary:"#0988F0",textAccentCertified:"#C7B994",textWalletKit:"#FFB800",textAppKit:"#FF573B",textCloud:"#0988F0",textDocumentation:"#008847",textSuccess:"#30A46B",textError:"#DF4A34",textWarning:"#F3A13F",borderAccentPrimary:"#0988F0",borderSecondary:"#C7B994",borderSuccess:"#30A46B",borderError:"#DF4A34",borderWarning:"#F3A13F",foregroundAccent010:"rgba(9, 136, 240, 0.1)",foregroundAccent020:"rgba(9, 136, 240, 0.2)",foregroundAccent040:"rgba(9, 136, 240, 0.4)",foregroundAccent060:"rgba(9, 136, 240, 0.6)",foregroundSecondary020:"rgba(199, 185, 148, 0.2)",foregroundSecondary040:"rgba(199, 185, 148, 0.4)",foregroundSecondary060:"rgba(199, 185, 148, 0.6)",iconAccentPrimary:"#0988F0",iconAccentCertified:"#C7B994",iconSuccess:"#30A46B",iconError:"#DF4A34",iconWarning:"#F3A13F",glass010:"rgba(255, 255, 255, 0.1)",zIndex:"9999"},dark:{overlay:"rgba(0, 0, 0, 0.50)",backgroundPrimary:"#202020",backgroundInvert:"#FFFFFF",textPrimary:"#FFFFFF",textSecondary:"#9A9A9A",textTertiary:"#BBBBBB",textInvert:"#202020",borderPrimary:"#2A2A2A",borderPrimaryDark:"#363636",borderSecondary:"#4F4F4F",foregroundPrimary:"#252525",foregroundSecondary:"#2A2A2A",foregroundTertiary:"#363636",iconDefault:"#9A9A9A",iconInverse:"#FFFFFF"},light:{overlay:"rgba(230 , 230, 230, 0.5)",backgroundPrimary:"#FFFFFF",borderPrimaryDark:"#E9E9E9",backgroundInvert:"#202020",textPrimary:"#202020",textSecondary:"#9A9A9A",textTertiary:"#6C6C6C",textInvert:"#FFFFFF",borderPrimary:"#E9E9E9",borderSecondary:"#D0D0D0",foregroundPrimary:"#F3F3F3",foregroundSecondary:"#E9E9E9",foregroundTertiary:"#D0D0D0",iconDefault:"#9A9A9A",iconInverse:"#202020"}},P2={1:"4px",2:"8px",10:"10px",3:"12px",4:"16px",6:"24px",5:"20px",8:"32px",16:"64px",20:"80px",32:"128px",64:"256px",128:"512px",round:"9999px"},L2={0:"0px","01":"2px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",12:"48px",14:"56px",16:"64px",20:"80px",32:"128px",64:"256px"},D2={regular:"KHTeka",mono:"KHTekaMono"},M2={regular:"400",medium:"500"},U2={h1:"50px",h2:"44px",h3:"38px",h4:"32px",h5:"26px",h6:"20px",large:"16px",medium:"14px",small:"12px"},B2={"h1-regular-mono":{lineHeight:"50px",letterSpacing:"-3px"},"h1-regular":{lineHeight:"50px",letterSpacing:"-1px"},"h1-medium":{lineHeight:"50px",letterSpacing:"-0.84px"},"h2-regular-mono":{lineHeight:"44px",letterSpacing:"-2.64px"},"h2-regular":{lineHeight:"44px",letterSpacing:"-0.88px"},"h2-medium":{lineHeight:"44px",letterSpacing:"-0.88px"},"h3-regular-mono":{lineHeight:"38px",letterSpacing:"-2.28px"},"h3-regular":{lineHeight:"38px",letterSpacing:"-0.76px"},"h3-medium":{lineHeight:"38px",letterSpacing:"-0.76px"},"h4-regular-mono":{lineHeight:"32px",letterSpacing:"-1.92px"},"h4-regular":{lineHeight:"32px",letterSpacing:"-0.32px"},"h4-medium":{lineHeight:"32px",letterSpacing:"-0.32px"},"h5-regular-mono":{lineHeight:"26px",letterSpacing:"-1.56px"},"h5-regular":{lineHeight:"26px",letterSpacing:"-0.26px"},"h5-medium":{lineHeight:"26px",letterSpacing:"-0.26px"},"h6-regular-mono":{lineHeight:"20px",letterSpacing:"-1.2px"},"h6-regular":{lineHeight:"20px",letterSpacing:"-0.6px"},"h6-medium":{lineHeight:"20px",letterSpacing:"-0.6px"},"lg-regular-mono":{lineHeight:"16px",letterSpacing:"-0.96px"},"lg-regular":{lineHeight:"18px",letterSpacing:"-0.16px"},"lg-medium":{lineHeight:"18px",letterSpacing:"-0.16px"},"md-regular-mono":{lineHeight:"14px",letterSpacing:"-0.84px"},"md-regular":{lineHeight:"16px",letterSpacing:"-0.14px"},"md-medium":{lineHeight:"16px",letterSpacing:"-0.14px"},"sm-regular-mono":{lineHeight:"12px",letterSpacing:"-0.72px"},"sm-regular":{lineHeight:"14px",letterSpacing:"-0.12px"},"sm-medium":{lineHeight:"14px",letterSpacing:"-0.12px"}},W2={"ease-out-power-2":"cubic-bezier(0.23, 0.09, 0.08, 1.13)","ease-out-power-1":"cubic-bezier(0.12, 0.04, 0.2, 1.06)","ease-in-power-2":"cubic-bezier(0.92, -0.13, 0.77, 0.91)","ease-in-power-1":"cubic-bezier(0.88, -0.06, 0.8, 0.96)","ease-inout-power-2":"cubic-bezier(0.77, 0.09, 0.23, 1.13)","ease-inout-power-1":"cubic-bezier(0.88, 0.04, 0.12, 1.06)"},j2={xl:"400ms",lg:"200ms",md:"125ms",sm:"75ms"},_l={colors:O2,fontFamily:D2,fontWeight:M2,textSize:U2,typography:B2,tokens:{core:Ia.core,theme:Ia.dark},borderRadius:P2,spacing:L2,durations:j2,easings:W2},bu="--apkt",Hn={createCSSVariables(e){const t={},n={};function r(i,s,a=""){for(const[c,l]of Object.entries(i)){const d=a?`${a}-${c}`:c;l&&typeof l=="object"&&Object.keys(l).length?(s[c]={},r(l,s[c],d)):typeof l=="string"&&(s[c]=`${bu}-${d}`)}}function o(i,s){for(const[a,c]of Object.entries(i))c&&typeof c=="object"?(s[a]={},o(c,s[a])):typeof c=="string"&&(s[a]=`var(${c})`)}return r(e,t),o(t,n),{cssVariables:t,cssVariablesVarPrefix:n}},assignCSSVariables(e,t){const n={};function r(o,i,s){for(const[a,c]of Object.entries(o)){const l=s?`${s}-${a}`:a,d=i[a];c&&typeof c=="object"?r(c,d,l):typeof d=="string"&&(n[`${bu}-${l}`]=d)}}return r(e,t),n},createRootStyles(e,t){const n={..._l,tokens:{..._l.tokens,theme:e==="light"?Ia.light:Ia.dark}},{cssVariables:r}=Hn.createCSSVariables(n),o=Hn.assignCSSVariables(r,n),i=Hn.generateW3MVariables(t),s=Hn.generateW3MOverrides(t),a=Hn.generateScaledVariables(t),c=Hn.generateBaseVariables(o),l={...o,...c,...i,...s,...a},d=Hn.applyColorMixToVariables(t,l),g={...l,...d};return`:root {${Object.entries(g).map(([y,E])=>`${y}:${E.replace("/[:;{}</>]/g","")};`).join("")}}`},generateW3MVariables(e){if(!e)return{};const t={};return t["--w3m-font-family"]=e["--w3m-font-family"]||"KHTeka",t["--w3m-accent"]=e["--w3m-accent"]||"#0988F0",t["--w3m-color-mix"]=e["--w3m-color-mix"]||"#000",t["--w3m-color-mix-strength"]=`${e["--w3m-color-mix-strength"]||0}%`,t["--w3m-font-size-master"]=e["--w3m-font-size-master"]||"10px",t["--w3m-border-radius-master"]=e["--w3m-border-radius-master"]||"4px",t},generateW3MOverrides(e){if(!e)return{};const t={};if(e["--w3m-accent"]){const n=e["--w3m-accent"];t["--apkt-tokens-core-iconAccentPrimary"]=n,t["--apkt-tokens-core-borderAccentPrimary"]=n,t["--apkt-tokens-core-textAccentPrimary"]=n,t["--apkt-tokens-core-backgroundAccentPrimary"]=n}return e["--w3m-font-family"]&&(t["--apkt-fontFamily-regular"]=e["--w3m-font-family"]),e["--w3m-z-index"]&&(t["--apkt-tokens-core-zIndex"]=`${e["--w3m-z-index"]}`),t},generateScaledVariables(e){if(!e)return{};const t={};if(e["--w3m-font-size-master"]){const n=parseFloat(e["--w3m-font-size-master"].replace("px",""));t["--apkt-textSize-h1"]=`${Number(n)*5}px`,t["--apkt-textSize-h2"]=`${Number(n)*4.4}px`,t["--apkt-textSize-h3"]=`${Number(n)*3.8}px`,t["--apkt-textSize-h4"]=`${Number(n)*3.2}px`,t["--apkt-textSize-h5"]=`${Number(n)*2.6}px`,t["--apkt-textSize-h6"]=`${Number(n)*2}px`,t["--apkt-textSize-large"]=`${Number(n)*1.6}px`,t["--apkt-textSize-medium"]=`${Number(n)*1.4}px`,t["--apkt-textSize-small"]=`${Number(n)*1.2}px`}if(e["--w3m-border-radius-master"]){const n=parseFloat(e["--w3m-border-radius-master"].replace("px",""));t["--apkt-borderRadius-1"]=`${Number(n)}px`,t["--apkt-borderRadius-2"]=`${Number(n)*2}px`,t["--apkt-borderRadius-3"]=`${Number(n)*3}px`,t["--apkt-borderRadius-4"]=`${Number(n)*4}px`,t["--apkt-borderRadius-5"]=`${Number(n)*5}px`,t["--apkt-borderRadius-6"]=`${Number(n)*6}px`,t["--apkt-borderRadius-8"]=`${Number(n)*8}px`,t["--apkt-borderRadius-16"]=`${Number(n)*16}px`,t["--apkt-borderRadius-20"]=`${Number(n)*20}px`,t["--apkt-borderRadius-32"]=`${Number(n)*32}px`,t["--apkt-borderRadius-64"]=`${Number(n)*64}px`,t["--apkt-borderRadius-128"]=`${Number(n)*128}px`}return t},generateColorMixCSS(e,t){if(!e?.["--w3m-color-mix"]||!e["--w3m-color-mix-strength"])return"";const n=e["--w3m-color-mix"],r=e["--w3m-color-mix-strength"];if(!r||r===0)return"";const o=Object.keys(t||{}).filter(s=>{const a=s.includes("-tokens-core-background")||s.includes("-tokens-core-text")||s.includes("-tokens-core-border")||s.includes("-tokens-core-foreground")||s.includes("-tokens-core-icon")||s.includes("-tokens-theme-background")||s.includes("-tokens-theme-text")||s.includes("-tokens-theme-border")||s.includes("-tokens-theme-foreground")||s.includes("-tokens-theme-icon"),c=s.includes("-borderRadius-")||s.includes("-spacing-")||s.includes("-textSize-")||s.includes("-fontFamily-")||s.includes("-fontWeight-")||s.includes("-typography-")||s.includes("-duration-")||s.includes("-ease-")||s.includes("-path-")||s.includes("-width-")||s.includes("-height-")||s.includes("-visual-size-")||s.includes("-modal-width")||s.includes("-cover");return a&&!c});return o.length===0?"":` @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        ${o.map(s=>{const a=t?.[s]||"";return a.includes("color-mix")||a.startsWith("#")||a.startsWith("rgb")?`${s}: color-mix(in srgb, ${n} ${r}%, ${a});`:`${s}: color-mix(in srgb, ${n} ${r}%, var(${s}-base, ${a}));`}).join("")}
      }
    }`},generateBaseVariables(e){const t={},n=e["--apkt-tokens-theme-backgroundPrimary"];n&&(t["--apkt-tokens-theme-backgroundPrimary-base"]=n);const r=e["--apkt-tokens-core-backgroundAccentPrimary"];return r&&(t["--apkt-tokens-core-backgroundAccentPrimary-base"]=r),t},applyColorMixToVariables(e,t){const n={};if(t?.["--apkt-tokens-theme-backgroundPrimary"]&&(n["--apkt-tokens-theme-backgroundPrimary"]="var(--apkt-tokens-theme-backgroundPrimary-base)"),t?.["--apkt-tokens-core-backgroundAccentPrimary"]&&(n["--apkt-tokens-core-backgroundAccentPrimary"]="var(--apkt-tokens-core-backgroundAccentPrimary-base)"),!e?.["--w3m-color-mix"]||!e["--w3m-color-mix-strength"])return n;const r=e["--w3m-color-mix"],o=e["--w3m-color-mix-strength"];if(!o||o===0)return n;const i=Object.keys(t||{}).filter(s=>{const a=s.includes("-tokens-core-background")||s.includes("-tokens-core-text")||s.includes("-tokens-core-border")||s.includes("-tokens-core-foreground")||s.includes("-tokens-core-icon")||s.includes("-tokens-theme-background")||s.includes("-tokens-theme-text")||s.includes("-tokens-theme-border")||s.includes("-tokens-theme-foreground")||s.includes("-tokens-theme-icon")||s.includes("-tokens-theme-overlay"),c=s.includes("-borderRadius-")||s.includes("-spacing-")||s.includes("-textSize-")||s.includes("-fontFamily-")||s.includes("-fontWeight-")||s.includes("-typography-")||s.includes("-duration-")||s.includes("-ease-")||s.includes("-path-")||s.includes("-width-")||s.includes("-height-")||s.includes("-visual-size-")||s.includes("-modal-width")||s.includes("-cover");return a&&!c});return i.length===0||i.forEach(s=>{const a=t?.[s]||"";s.endsWith("-base")||(s==="--apkt-tokens-theme-backgroundPrimary"||s==="--apkt-tokens-core-backgroundAccentPrimary"?n[s]=`color-mix(in srgb, ${r} ${o}%, var(${s}-base))`:a.includes("color-mix")||a.startsWith("#")||a.startsWith("rgb")?n[s]=`color-mix(in srgb, ${r} ${o}%, ${a})`:n[s]=`color-mix(in srgb, ${r} ${o}%, var(${s}-base, ${a}))`)}),n}},{cssVariablesVarPrefix:Ze}=Hn.createCSSVariables(_l);function ne(e,...t){return Fe(e,...t.map(n=>rn(typeof n=="function"?n(Ze):n)))}let kr,Dr,_n,on,Oa;const zn={"KHTeka-500-woff2":"https://fonts.reown.com/KHTeka-Medium.woff2","KHTeka-400-woff2":"https://fonts.reown.com/KHTeka-Regular.woff2","KHTeka-300-woff2":"https://fonts.reown.com/KHTeka-Light.woff2","KHTekaMono-400-woff2":"https://fonts.reown.com/KHTekaMono-Regular.woff2","KHTeka-500-woff":"https://fonts.reown.com/KHTeka-Light.woff","KHTeka-400-woff":"https://fonts.reown.com/KHTeka-Regular.woff","KHTeka-300-woff":"https://fonts.reown.com/KHTeka-Light.woff","KHTekaMono-400-woff":"https://fonts.reown.com/KHTekaMono-Regular.woff"};function Pa(e,t="dark"){kr&&document.head.removeChild(kr),kr=document.createElement("style"),kr.textContent=Hn.createRootStyles(t,e),document.head.appendChild(kr)}function $v(e,t="dark"){if(Oa=e,Dr=document.createElement("style"),_n=document.createElement("style"),on=document.createElement("style"),Dr.textContent=Oi(e).core.cssText,_n.textContent=Oi(e).dark.cssText,on.textContent=Oi(e).light.cssText,document.head.appendChild(Dr),document.head.appendChild(_n),document.head.appendChild(on),Pa(e,t),yu(t),!e?.["--w3m-font-family"])for(const[n,r]of Object.entries(zn)){const o=document.createElement("link");o.rel="preload",o.href=r,o.as="font",o.type=n.includes("woff2")?"font/woff2":"font/woff",o.crossOrigin="anonymous",document.head.appendChild(o)}yu(t)}function yu(e="dark"){_n&&on&&kr&&(e==="light"?(Pa(Oa,e),_n.removeAttribute("media"),on.media="enabled"):(Pa(Oa,e),on.removeAttribute("media"),_n.media="enabled"))}function Rv(e){if(Oa=e,Dr&&_n&&on&&(Dr.textContent=Oi(e).core.cssText,_n.textContent=Oi(e).dark.cssText,on.textContent=Oi(e).light.cssText,e?.["--w3m-font-family"])){const t=e["--w3m-font-family"];Dr.textContent=Dr.textContent?.replace("font-family: KHTeka",`font-family: ${t}`),_n.textContent=_n.textContent?.replace("font-family: KHTeka",`font-family: ${t}`),on.textContent=on.textContent?.replace("font-family: KHTeka",`font-family: ${t}`)}if(kr){const t=on?.media==="enabled"?"light":"dark";Pa(e,t)}}function Oi(e){const t=!!e?.["--w3m-font-family"];return{core:Fe`
      ${t?Fe``:Fe`
            @font-face {
              font-family: 'KHTeka';
              src:
                url(${rn(zn["KHTeka-400-woff2"])}) format('woff2'),
                url(${rn(zn["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${rn(zn["KHTeka-300-woff2"])}) format('woff2'),
                url(${rn(zn["KHTeka-300-woff"])}) format('woff');
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTekaMono';
              src:
                url(${rn(zn["KHTekaMono-400-woff2"])}) format('woff2'),
                url(${rn(zn["KHTekaMono-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: 'KHTeka';
              src:
                url(${rn(zn["KHTeka-400-woff2"])}) format('woff2'),
                url(${rn(zn["KHTeka-400-woff"])}) format('woff');
              font-weight: 400;
              font-style: normal;
            }
          `}

      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --apkt-modal-width: 370px;

        --apkt-visual-size-inherit: inherit;
        --apkt-visual-size-sm: 40px;
        --apkt-visual-size-md: 55px;
        --apkt-visual-size-lg: 80px;

        --apkt-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --apkt-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --apkt-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --apkt-width-network-sm: 36px;
        --apkt-width-network-md: 48px;
        --apkt-width-network-lg: 86px;

        --apkt-duration-dynamic: 0ms;
        --apkt-height-network-sm: 40px;
        --apkt-height-network-md: 54px;
        --apkt-height-network-lg: 96px;
      }
    `,dark:Fe`
      :root {
      }
    `,light:Fe`
      :root {
      }
    `}}const me=Fe`
  div,
  span,
  iframe,
  a,
  img,
  form,
  button,
  label,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
  }

  :host {
    font-family: var(--apkt-fontFamily-regular);
  }
`,We=Fe`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
    outline: none;
    border: none;
    text-decoration: none;
    transition:
      background-color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      color var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      width var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      height var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      transform var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      opacity var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      scale var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2),
      border-radius var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
    will-change:
      background-color, color, border, box-shadow, width, height, transform, opacity, scale,
      border-radius;
  }

  a:active:not([disabled]),
  button:active:not([disabled]) {
    scale: 0.975;
    transform-origin: center;
  }

  button:disabled {
    cursor: default;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,ea=".",ze={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--apkt-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--apkt-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},formatCurrency(e=0,t={}){const n=Number(e);return isNaN(n)?"$0.00":new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2,...t}).format(n)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:n,truncate:r}){return e.length<=t+n?e:r==="end"?`${e.substring(0,t)}...`:r==="start"?`...${e.substring(e.length-n)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(n))}`},generateAvatarColors(e){const n=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(n),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(o?.replace("px","")),a=`${s}% ${s}% at 65% 40%`,c=[];for(let l=0;l<5;l+=1){const d=this.tintColor(r,.15*l);c.push(`rgb(${d[0]}, ${d[1]}, ${d[2]})`)}return`
    --local-color-1: ${c[0]};
    --local-color-2: ${c[1]};
    --local-color-3: ${c[2]};
    --local-color-4: ${c[3]};
    --local-color-5: ${c[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(e){const t=parseInt(e,16),n=t>>16&255,r=t>>8&255,o=t&255;return[n,r,o]},tintColor(e,t){const[n,r,o]=e,i=Math.round(n+(255-n)*t),s=Math.round(r+(255-r)*t),a=Math.round(o+(255-o)*t);return[i,s,a]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<"u"&&window.matchMedia&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark")},splitBalance(e){const t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,n){return e.toString().length>=t?Number(e).toFixed(n):e},cssDurationToNumber(e){return e.endsWith("s")?Number(e.replace("s",""))*1e3:e.endsWith("ms")?Number(e.replace("ms","")):0},maskInput({value:e,decimals:t,integers:n}){if(e=e.replace(",","."),e===ea)return`0${ea}`;const[r="",o]=e.split(ea).map(d=>d.replace(/[^0-9]/gu,"")),i=n?r.substring(0,n):r,s=i.length===2?String(Number(i)):i,a=typeof t=="number"?o?.substring(0,t):o,c=typeof t!="number"||t>0;return(typeof a=="string"&&c?[s,a].join(ea):s)??""},capitalize(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}},F2=3,ta=.1,z2=["receive","deposit","borrow","claim"],H2=["withdraw","repay","burn"],Ri={getTransactionGroupTitle(e,t){const n=cl.getYear(),r=cl.getMonthNameByIndex(t);return e===n?r:`${r} ${e}`},getTransactionImages(e){const[t]=e;return e?.length>1?e.map(r=>this.getTransactionImage(r)):[this.getTransactionImage(t)]},getTransactionImage(e){return{type:Ri.getTransactionTransferTokenType(e),url:Ri.getTransactionImageURL(e)}},getTransactionImageURL(e){let t;const n=!!e?.nft_info,r=!!e?.fungible_info;return e&&n?t=e?.nft_info?.content?.preview?.url:e&&r&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType(e){if(e?.fungible_info)return"FUNGIBLE";if(e?.nft_info)return"NFT"},getTransactionDescriptions(e,t){const n=e?.metadata?.operationType,r=t||e?.transfers,o=r?.length>0,i=r?.length>1,s=o&&r?.every(w=>!!w?.fungible_info),[a,c]=r;let l=this.getTransferDescription(a),d=this.getTransferDescription(c);if(!o)return(n==="send"||n==="receive")&&s?(l=ze.getTruncateString({string:e?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),d=ze.getTruncateString({string:e?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,d]):[e.metadata.status];if(i)return r.map(w=>this.getTransferDescription(w));let g="";return z2.includes(n)?g="+":H2.includes(n)&&(g="-"),l=g.concat(l),[l]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},mergeTransfers(e){if(e?.length<=1)return e;const n=this.filterGasFeeTransfers(e).reduce((o,i)=>{const s=i?.fungible_info?.name,a=o.find(({fungible_info:c,direction:l})=>s&&s===c?.name&&l===i.direction);if(a){const c=Number(a.quantity.numeric)+Number(i.quantity.numeric);a.quantity.numeric=c.toString(),a.value=(a.value||0)+(i.value||0)}else o.push(i);return o},[]);let r=n;return n.length>2&&(r=n.sort((o,i)=>(i.value||0)-(o.value||0)).slice(0,2)),r=r.sort((o,i)=>o.direction==="out"&&i.direction==="in"?-1:o.direction==="in"&&i.direction==="out"?1:0),r},filterGasFeeTransfers(e){const t=e.reduce((r,o)=>{const i=o?.fungible_info?.name;return i&&(r[i]||(r[i]=[]),r[i].push(o)),r},{}),n=[];return Object.values(t).forEach(r=>{if(r.length===1){const o=r[0];o&&n.push(o)}else{const o=r.filter(s=>s.direction==="in"),i=r.filter(s=>s.direction==="out");if(o.length===1&&i.length===1){const s=o[0],a=i[0];let c=!1;if(s&&a){const l=Number(s.quantity.numeric),d=Number(a.quantity.numeric);d<l*ta?(n.push(s),c=!0):l<d*ta&&(n.push(a),c=!0)}c||n.push(...r)}else{const s=this.filterGasFeesFromTokenGroup(r);n.push(...s)}}}),e.forEach(r=>{r?.fungible_info?.name||n.push(r)}),n},filterGasFeesFromTokenGroup(e){if(e.length<=1)return e;const t=e.map(a=>Number(a.quantity.numeric)),n=Math.max(...t),r=Math.min(...t),o=.01;if(r<n*o)return e.filter(c=>Number(c.quantity.numeric)>=n*o);const i=e.filter(a=>a.direction==="in"),s=e.filter(a=>a.direction==="out");if(i.length===1&&s.length===1){const a=i[0],c=s[0];if(a&&c){const l=Number(a.quantity.numeric),d=Number(c.quantity.numeric);if(d<l*ta)return[a];if(l<d*ta)return[c]}}return e},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(F2):null}};function V2(e,t){const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(o){customElements.get(e)||customElements.define(e,o)}}}function q2(e,t){return customElements.get(e)||customElements.define(e,t),t}function M(e){return function(n){return typeof n=="function"?q2(e,n):V2(e,n)}}let ua;function kv(e){e&&(ua=e)}function Iv(){if(!ua)throw new Error('Please call "createAppKit" before using "useAppKit" hook');async function e(n){return ua?.open(n)}async function t(){await ua?.close()}return{open:e,close:t}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K2=new Set(["children","localName","ref","style","className"]),vu=new WeakMap,Cu=(e,t,n,r,o)=>{const i=o?.[t];i===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((s,a,c)=>{let l=vu.get(s);l===void 0&&vu.set(s,l=new Map);let d=l.get(a);c!==void 0?d===void 0?(l.set(a,d={handleEvent:c}),s.addEventListener(a,d)):d.handleEvent=c:d!==void 0&&(l.delete(a),s.removeEventListener(a,d))})(e,i,n)},cc=({react:e,tagName:t,elementClass:n,events:r,displayName:o})=>{const i=new Set(Object.keys(r??{})),s=e.forwardRef((a,c)=>{const l=e.useRef(new Map),d=e.useRef(null),g={},w={};for(const[y,E]of Object.entries(a))K2.has(y)?g[y==="className"?"class":y]=E:i.has(y)||y in n.prototype?w[y]=E:g[y]=E;return e.useLayoutEffect(()=>{if(d.current===null)return;const y=new Map;for(const E in w)Cu(d.current,E,a[E],l.current.get(E),r),l.current.delete(E),y.set(E,a[E]);for(const[E,v]of l.current)Cu(d.current,E,void 0,v,r);l.current=y}),e.useLayoutEffect(()=>{d.current?.removeAttribute("defer-hydration")},[]),g.suppressHydrationWarning=!0,e.createElement(t,{...g,ref:e.useCallback(y=>{d.current=y,typeof c=="function"?c(y):c!==null&&(c.current=y)},[c])})});return s.displayName=o??n.name,s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G2={attribute:!0,type:String,converter:Ra,reflect:!1,hasChanged:nd},Z2=(e=G2,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,c,e)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(r==="setter"){const{name:s}=n;return function(a){const c=this[s];t.call(this,a),this.requestUpdate(s,c,e)}}throw Error("Unsupported decorator location: "+r)};function m(e){return(t,n)=>typeof n=="object"?Z2(e,t,n):((r,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(e){return m({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=e=>e??Je;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ch=Symbol.for(""),Y2=e=>{if(e?.r===ch)return e?._$litStatic$},J2=e=>({_$litStatic$:e,r:ch}),Eu=new Map,X2=e=>(t,...n)=>{const r=n.length;let o,i;const s=[],a=[];let c,l=0,d=!1;for(;l<r;){for(c=t[l];l<r&&(i=n[l],(o=Y2(i))!==void 0);)c+=o+t[++l],d=!0;l!==r&&a.push(i),s.push(c),l++}if(l===r&&s.push(t[r]),d){const g=s.join("$$lit$$");(t=Eu.get(g))===void 0&&(s.raw=s,Eu.set(g,t=s)),n=a}return e(t,...n)},_u=X2(u),Q2=we`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_87_33)">
    <path d="M23.9367 2.29447e-07H6.05917C5.26333 -0.000218805 4.47526 0.156384 3.73997 0.46086C3.00469 0.765337 2.33661 1.21172 1.77391 1.7745C1.21121 2.33727 0.764917 3.00542 0.460542 3.74074C0.156167 4.47607 -0.000327963 5.26417 5.16031e-07 6.06V23.9433C4.48257e-07 24.7389 0.156744 25.5267 0.461276 26.2617C0.765808 26.9967 1.21216 27.6645 1.77484 28.2269C2.33752 28.7894 3.0055 29.2355 3.74061 29.5397C4.47573 29.8439 5.26358 30.0003 6.05917 30H23.9417C25.5486 29.9996 27.0895 29.3609 28.2257 28.2245C29.3618 27.0881 30 25.5469 30 23.94V6.06C29.9993 4.45241 29.3602 2.91091 28.2232 1.77449C27.0861 0.638064 25.5443 -0.000220881 23.9367 2.29447e-07Z" fill="url(#paint0_linear_87_33)"/>
    <path d="M14.8708 6.89259L15.4783 5.84259C15.5679 5.68703 15.6873 5.55064 15.8296 5.44122C15.9719 5.3318 16.1344 5.25148 16.3078 5.20486C16.4812 5.15824 16.662 5.14622 16.8401 5.1695C17.0181 5.19277 17.1898 5.25088 17.3453 5.34051C17.5009 5.43013 17.6373 5.54952 17.7467 5.69186C17.8561 5.83419 17.9364 5.99669 17.9831 6.17006C18.0297 6.34344 18.0417 6.5243 18.0184 6.70232C17.9952 6.88034 17.9371 7.05203 17.8474 7.20759L11.9949 17.3401H16.2283C17.5999 17.3401 18.3691 18.9526 17.7724 20.0701H5.36159C5.18215 20.0707 5.00436 20.0359 4.83845 19.9675C4.67254 19.8992 4.5218 19.7986 4.39492 19.6718C4.26803 19.5449 4.16751 19.3941 4.09915 19.2282C4.03079 19.0623 3.99593 18.8845 3.99659 18.7051C3.99659 17.9476 4.60492 17.3401 5.36159 17.3401H8.84159L13.2958 9.61926L11.9041 7.20426C11.738 6.89096 11.7 6.52543 11.7982 6.18469C11.8963 5.84395 12.1229 5.5546 12.4301 5.37763C12.7374 5.20065 13.1014 5.14987 13.4454 5.23599C13.7893 5.3221 14.0864 5.53838 14.2741 5.83926L14.8708 6.89259ZM9.60659 21.4759L8.29409 23.7526C8.20446 23.9082 8.08506 24.0446 7.94271 24.1541C7.80035 24.2636 7.63783 24.344 7.46441 24.3906C7.291 24.4373 7.11009 24.4493 6.93202 24.4261C6.75395 24.4028 6.58221 24.3447 6.42659 24.2551C6.27097 24.1655 6.13454 24.0461 6.02506 23.9037C5.91559 23.7613 5.83523 23.5988 5.78857 23.4254C5.74191 23.252 5.72986 23.0711 5.75311 22.893C5.77637 22.715 5.83446 22.5432 5.92409 22.3876L6.89909 20.7001C8.00159 20.3584 8.89742 20.6209 9.60659 21.4759ZM20.9066 17.3476H24.4583C25.2158 17.3476 25.8233 17.9551 25.8233 18.7126C25.8233 19.4701 25.2149 20.0776 24.4583 20.0776H22.4858L23.8166 22.3876C24.1916 23.0443 23.9708 23.8726 23.3149 24.2551C23.0006 24.4359 22.6274 24.4845 22.2772 24.3903C21.927 24.2961 21.6286 24.0667 21.4474 23.7526C19.2058 19.8643 17.5216 16.9534 16.4041 15.0151C15.2608 13.0426 16.0783 11.0626 16.8841 10.3909C17.7799 11.9293 19.1191 14.2501 20.9074 17.3476H20.9066Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_87_33" x1="15" y1="2.29447e-07" x2="15" y2="30" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB"/>
      <stop offset="1" stop-color="#2072F3"/>
    </linearGradient>
    <clipPath id="clip0_87_33">
      <rect width="30" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg>`,e3=we`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,t3=we`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 11">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="M7.862 4.86c.159-1.064-.652-1.637-1.76-2.018l.36-1.443-.879-.218-.35 1.404c-.23-.058-.468-.112-.703-.166l.352-1.413-.877-.219-.36 1.442a29.02 29.02 0 0 1-.56-.132v-.005l-1.21-.302-.234.938s.652.15.638.158c.356.089.42.324.41.51l-.41 1.644a.715.715 0 0 1 .09.03l-.092-.024-.574 2.302c-.044.108-.154.27-.402.208.008.013-.639-.16-.639-.16L.227 8.403l1.142.285c.213.053.42.109.626.161l-.363 1.459.877.218.36-1.443c.239.065.472.125.7.182l-.36 1.436.879.219.363-1.456c1.497.283 2.623.17 3.097-1.185.381-1.09-.02-1.719-.807-2.129.574-.132 1.006-.51 1.12-1.289ZM5.856 7.673c-.272 1.09-2.107.5-2.702.353l.482-1.933c.595.149 2.503.443 2.22 1.58Zm.271-2.829c-.247.992-1.775.488-2.27.365l.436-1.753c.496.124 2.092.354 1.834 1.388Z"
    />
  </svg>
`,n3=we`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M14.9978 7.80003H27.4668C26.2032 5.61107 24.3857 3.79333 22.1968 2.52955C20.008 1.26577 17.525 0.600485 14.9975 0.600586C12.47 0.600687 9.98712 1.26617 7.79838 2.53012C5.60964 3.79408 3.79221 5.61197 2.52881 7.80103L8.76281 18.599L8.76881 18.598C8.13412 17.5044 7.79906 16.2628 7.79743 14.9983C7.79579 13.7339 8.12764 12.4914 8.7595 11.3961C9.39136 10.3008 10.3009 9.39159 11.3963 8.76005C12.4918 8.12851 13.7344 7.79702 14.9988 7.79903L14.9978 7.80003Z" fill="url(#paint0_linear_87_32)"/>
<path d="M21.237 18.5981L15.003 29.3961C17.5305 29.3961 20.0134 28.7308 22.2022 27.467C24.391 26.2032 26.2086 24.3854 27.4721 22.1965C28.7356 20.0075 29.4006 17.5245 29.4003 14.997C29.3999 12.4695 28.7342 9.9867 27.47 7.7981H15.002L15 7.8041C16.2642 7.80168 17.5067 8.13257 18.6022 8.76342C19.6977 9.39428 20.6076 10.3028 21.2401 11.3974C21.8726 12.492 22.2053 13.734 22.2048 14.9982C22.2042 16.2623 21.8704 17.504 21.237 18.5981Z" fill="url(#paint1_linear_87_32)"/>
<path d="M8.76502 18.601L2.53102 7.80298C1.26664 9.99172 0.600848 12.4748 0.600586 15.0025C0.600324 17.5302 1.2656 20.0134 2.52953 22.2024C3.79345 24.3914 5.61145 26.209 7.80071 27.4725C9.98998 28.736 12.4733 29.4008 15.001 29.4L21.236 18.602L21.232 18.598C20.6022 19.6941 19.6944 20.6049 18.6003 21.2383C17.5062 21.8717 16.2644 22.2055 15.0002 22.2059C13.7359 22.2063 12.4939 21.8733 11.3994 21.2406C10.3049 20.6079 9.39657 19.6977 8.76602 18.602L8.76502 18.601Z" fill="url(#paint2_linear_87_32)"/>
<path d="M14.9998 22.2C16.9094 22.2 18.7407 21.4415 20.091 20.0912C21.4412 18.741 22.1998 16.9096 22.1998 15C22.1998 13.0905 21.4412 11.2591 20.091 9.90888C18.7407 8.55862 16.9094 7.80005 14.9998 7.80005C13.0902 7.80005 11.2589 8.55862 9.90864 9.90888C8.55837 11.2591 7.7998 13.0905 7.7998 15C7.7998 16.9096 8.55837 18.741 9.90864 20.0912C11.2589 21.4415 13.0902 22.2 14.9998 22.2Z" fill="white"/>
<path d="M14.9998 20.7C16.5115 20.7 17.9614 20.0995 19.0303 19.0306C20.0993 17.9616 20.6998 16.5118 20.6998 15C20.6998 13.4883 20.0993 12.0385 19.0303 10.9695C17.9614 9.90058 16.5115 9.30005 14.9998 9.30005C13.4881 9.30005 12.0383 9.90058 10.9693 10.9695C9.90034 12.0385 9.2998 13.4883 9.2998 15C9.2998 16.5118 9.90034 17.9616 10.9693 19.0306C12.0383 20.0995 13.4881 20.7 14.9998 20.7Z" fill="#1A73E8"/>
<defs>
  <linearGradient id="paint0_linear_87_32" x1="3.29381" y1="2.99503" x2="38.0998" y2="2.99503" gradientUnits="userSpaceOnUse">
    <stop stop-color="#D93025"/>
    <stop offset="1" stop-color="#EA4335"/>
  </linearGradient>
  <linearGradient id="paint1_linear_87_32" x1="17.953" y1="29.1431" x2="34.194" y2="-0.298904" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FCC934"/>
    <stop offset="1" stop-color="#FBBC04"/>
  </linearGradient>
  <linearGradient id="paint2_linear_87_32" x1="22.873" y1="28.2" x2="6.63202" y2="-1.24102" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1E8E3E"/>
    <stop offset="1" stop-color="#34A853"/>
  </linearGradient>
</defs>
</svg>`,r3=we` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,i3=we`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,o3=we`<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 9 12"
>
  <path
    fill="var(--apkt-tokens-theme-textPrimary)"
    d="M4.666.001v4.435l3.748 1.675L4.666.001Zm0 0L.917 6.111l3.749-1.675V.001Zm0 8.984V12l3.75-5.19-3.75 2.176Zm0 3.014V8.985L.917 6.81 4.666 12Zm0-3.712 3.748-2.176-3.748-1.675v3.851Z"
  />
  <path fill="var(--apkt-tokens-theme-textPrimary)" d="m.917 6.111 3.749 2.176v-3.85L.917 6.11Z" />
</svg>`,s3=we`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,a3=we`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,c3=we`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,l3=we`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,d3=we`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,u3=we` <svg width="27" height="30" viewBox="0 0 27 30" fill="none">
  <path d="M12.5395 14.3237L0.116699 27.5049V27.5188C0.251527 28.0177 0.49972 28.4788 0.841941 28.866C1.18416 29.2533 1.61117 29.5563 2.0897 29.7515C2.56823 29.9467 3.08536 30.0287 3.60081 29.9913C4.11625 29.9538 4.61609 29.7979 5.06139 29.5356L5.0975 29.512L19.0718 21.4519L12.5395 14.3237Z" fill="#EA4335"/>
  <path d="M25.103 12.0833L25.0919 12.0722L19.0611 8.57202L12.2607 14.6279L19.0847 21.4504L25.0919 17.9864C25.6229 17.6983 26.0665 17.2725 26.376 16.7537C26.6854 16.2349 26.8493 15.6422 26.8505 15.0381C26.8516 14.434 26.6899 13.8408 26.3824 13.3208C26.0749 12.8008 25.633 12.3734 25.103 12.0833Z" fill="#FBBC04"/>
  <path d="M0.116672 2.49553C0.047224 2.7761 0 3.05528 0 3.35946V26.6537C0 26.9565 0.0347234 27.237 0.116672 27.5162L12.959 14.6725L0.116672 2.49553Z" fill="#4285F4"/>
  <path d="M12.634 15.0001L19.0607 8.57198L5.0975 0.477133C4.65115 0.210463 4.14916 0.0506574 3.63079 0.0102139C3.11242 -0.0302296 2.59172 0.0497852 2.10941 0.244001C1.6271 0.438216 1.19625 0.741368 0.850556 1.12975C0.504864 1.51813 0.253698 1.98121 0.116699 2.48279L12.634 15.0001Z" fill="#34A853"/>
</svg>`,p3=we`<svg width="75" height="20" viewBox="0 0 75 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6666 5.83334C11.6666 2.61168 14.2783 0 17.5 0H25.8334C29.055 0 31.6666 2.61168 31.6666 5.83334V14.1666C31.6666 17.3883 29.055 20 25.8334 20H17.5C14.2783 20 11.6666 17.3883 11.6666 14.1666V5.83334Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M19.5068 13.7499L22.4309 5.83331H23.2895L20.3654 13.7499H19.5068Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M0 5.41666C0 2.42513 2.42513 0 5.41666 0C8.40821 0 10.8334 2.42513 10.8334 5.41666V14.5833C10.8334 17.5748 8.40821 20 5.41666 20C2.42513 20 0 17.5748 0 14.5833V5.41666Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M4.89581 12.4997V11.458H5.93747V12.4997H4.89581Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M32.5 10C32.5 4.47715 36.6896 0 41.8578 0H65.6422C70.8104 0 75 4.47715 75 10C75 15.5229 70.8104 20 65.6422 20H41.8578C36.6896 20 32.5 15.5229 32.5 10Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M61.7108 12.4475V7.82751H62.5266V8.52418C62.8199 8.01084 63.4157 7.70834 64.0757 7.70834C65.0749 7.70834 65.7715 8.34084 65.7715 9.56918V12.4475H64.9649V9.61503C64.9649 8.80831 64.5066 8.38668 63.8374 8.38668C63.1132 8.38668 62.5266 8.9642 62.5266 9.78001V12.4475H61.7108Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M56.5671 12.4475L55.7147 7.82748H56.4846L57.0896 11.6409L57.8871 9.12916H58.6479L59.4363 11.6134L60.0505 7.82748H60.8204L59.9679 12.4475H59.0513L58.2721 10.0458L57.4838 12.4475H56.5671Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M52.9636 12.5666C51.5611 12.5666 50.7361 11.5217 50.7361 10.1375C50.7361 8.76254 51.5611 7.70834 52.9636 7.70834C54.3661 7.70834 55.1911 8.76254 55.1911 10.1375C55.1911 11.5217 54.3661 12.5666 52.9636 12.5666ZM52.9636 11.8883C53.9719 11.8883 54.357 11.0266 54.357 10.1283C54.357 9.23914 53.9719 8.38668 52.9636 8.38668C51.9552 8.38668 51.5702 9.23914 51.5702 10.1283C51.5702 11.0266 51.9552 11.8883 52.9636 11.8883Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M47.8507 12.5666C46.494 12.5666 45.6415 11.5308 45.6415 10.1375C45.6415 8.75337 46.494 7.70834 47.8507 7.70834C48.9965 7.70834 50.0048 8.35917 49.8948 10.3483H46.4756C46.5398 11.2009 46.934 11.8975 47.8507 11.8975C48.4648 11.8975 48.8681 11.5217 49.0057 11.0908H49.8123C49.684 11.8609 48.9598 12.5666 47.8507 12.5666ZM46.494 9.73416H49.1065C49.0423 8.80831 48.6114 8.37751 47.8507 8.37751C47.0165 8.37751 46.604 8.98254 46.494 9.73416Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M41.7284 12.4475V7.82748H42.5625V8.60665C42.8559 8.09332 43.3601 7.82748 43.8825 7.82748H44.9917V8.60665H43.8184C43.0851 8.60665 42.5625 9.08331 42.5625 10.0092V12.4475H41.7284Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>

`,h3=we`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="m9.524 6.307-1.51 1.584A.35.35 0 0 1 7.76 8H.604a.178.178 0 0 1-.161-.103.168.168 0 0 1 .033-.186l1.51-1.583a.35.35 0 0 1 .256-.11h7.154c.034 0 .068.01.096.029a.168.168 0 0 1 .032.26Zm-1.51-3.189a.35.35 0 0 0-.255-.109H.604a.178.178 0 0 0-.161.103.168.168 0 0 0 .033.186l1.51 1.583a.35.35 0 0 0 .256.11h7.154a.178.178 0 0 0 .16-.104.168.168 0 0 0-.032-.185l-1.51-1.584ZM.605 1.981H7.76a.357.357 0 0 0 .256-.11L9.525.289a.17.17 0 0 0 .032-.185.173.173 0 0 0-.16-.103H2.241a.357.357 0 0 0-.256.109L.476 1.692a.17.17 0 0 0-.033.185.178.178 0 0 0 .16.103Z"
    />
  </svg>
`,f3=we`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,m3=we`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,g3=we`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,w3=we`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,b3=we`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>`,y3=we`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textInvert)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textInvert)"/>
</svg>`,v3=we`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,C3=we`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`,xu=we`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`,E3=Fe`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    height: inherit;
    width: inherit;
    object-fit: contain;
    object-position: center;
  }
`;var Cs=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const _3={add:"ph-plus",allWallets:"ph-dots-three",arrowBottom:"ph-arrow-down",arrowBottomCircle:"ph-arrow-circle-down",arrowClockWise:"ph-arrow-clockwise",arrowLeft:"ph-arrow-left",arrowRight:"ph-arrow-right",arrowTop:"ph-arrow-up",arrowTopRight:"ph-arrow-up-right",bank:"ph-bank",bin:"ph-trash",browser:"ph-browser",card:"ph-credit-card",checkmark:"ph-check",checkmarkBold:"ph-check",chevronBottom:"ph-caret-down",chevronLeft:"ph-caret-left",chevronRight:"ph-caret-right",chevronTop:"ph-caret-up",clock:"ph-clock",close:"ph-x",coinPlaceholder:"ph-circle-half",compass:"ph-compass",copy:"ph-copy",desktop:"ph-desktop",dollar:"ph-currency-dollar",download:"ph-vault",exclamationCircle:"ph-warning-circle",extension:"ph-puzzle-piece",externalLink:"ph-arrow-square-out",filters:"ph-funnel-simple",helpCircle:"ph-question",id:"ph-identification-card",image:"ph-image",info:"ph-info",lightbulb:"ph-lightbulb",mail:"ph-envelope",mobile:"ph-device-mobile",more:"ph-dots-three",networkPlaceholder:"ph-globe",nftPlaceholder:"ph-image",plus:"ph-plus",power:"ph-power",qrCode:"ph-qr-code",questionMark:"ph-question",refresh:"ph-arrow-clockwise",recycleHorizontal:"ph-arrows-clockwise",search:"ph-magnifying-glass",sealCheck:"ph-seal-check",send:"ph-paper-plane-right",signOut:"ph-sign-out",spinner:"ph-spinner",swapHorizontal:"ph-arrows-left-right",swapVertical:"ph-arrows-down-up",threeDots:"ph-dots-three",user:"ph-user",verify:"ph-seal-check",verifyFilled:"ph-seal-check",warning:"ph-warning",warningCircle:"ph-warning-circle",appStore:"",apple:"",bitcoin:"",chromeStore:"",cursor:"",discord:"",ethereum:"",etherscan:"",facebook:"",farcaster:"",github:"",google:"",playStore:"",reown:"",solana:"",telegram:"",twitch:"",twitterIcon:"",twitter:"",walletConnect:"",walletConnectBrown:"",walletConnectLightBrown:"",x:"",wallet:""},x3={"ph-arrow-circle-down":()=>ge(()=>import("./PhArrowCircleDown-gbV2vaLb.js"),__vite__mapDeps([7,8])),"ph-arrow-clockwise":()=>ge(()=>import("./PhArrowClockwise-Bg3BzyBs.js"),__vite__mapDeps([9,8])),"ph-arrow-down":()=>ge(()=>import("./PhArrowDown-sE0mUGcs.js"),__vite__mapDeps([10,8])),"ph-arrow-left":()=>ge(()=>import("./PhArrowLeft-cDekCY6D.js"),__vite__mapDeps([11,8])),"ph-arrow-right":()=>ge(()=>import("./PhArrowRight-DUAIy7Fh.js"),__vite__mapDeps([12,8])),"ph-arrow-square-out":()=>ge(()=>import("./PhArrowSquareOut-DVcJDuOr.js"),__vite__mapDeps([13,8])),"ph-arrows-down-up":()=>ge(()=>import("./PhArrowsDownUp-BCeS_76Q.js"),__vite__mapDeps([14,8])),"ph-arrows-left-right":()=>ge(()=>import("./PhArrowsLeftRight-B_xNg8kN.js"),__vite__mapDeps([15,8])),"ph-arrow-up":()=>ge(()=>import("./PhArrowUp-DCv2rA8B.js"),__vite__mapDeps([16,8])),"ph-arrow-up-right":()=>ge(()=>import("./PhArrowUpRight-_nUyALIJ.js"),__vite__mapDeps([17,8])),"ph-arrows-clockwise":()=>ge(()=>import("./PhArrowsClockwise-BGC-OSch.js"),__vite__mapDeps([18,8])),"ph-bank":()=>ge(()=>import("./PhBank-jlfK89TU.js"),__vite__mapDeps([19,8])),"ph-browser":()=>ge(()=>import("./PhBrowser-jsUyV2Ju.js"),__vite__mapDeps([20,8])),"ph-caret-down":()=>ge(()=>import("./PhCaretDown-TAeTvpa5.js"),__vite__mapDeps([21,8])),"ph-caret-left":()=>ge(()=>import("./PhCaretLeft-LcN4bWoG.js"),__vite__mapDeps([22,8])),"ph-caret-right":()=>ge(()=>import("./PhCaretRight-DNEs9RTt.js"),__vite__mapDeps([23,8])),"ph-caret-up":()=>ge(()=>import("./PhCaretUp-DENXO7HP.js"),__vite__mapDeps([24,8])),"ph-check":()=>ge(()=>import("./PhCheck-CEGOFdcy.js"),__vite__mapDeps([25,8])),"ph-circle-half":()=>ge(()=>import("./PhCircleHalf-FpFX-N1p.js"),__vite__mapDeps([26,8])),"ph-clock":()=>ge(()=>import("./PhClock-EdkG2dc9.js"),__vite__mapDeps([27,8])),"ph-compass":()=>ge(()=>import("./PhCompass-BVxuDmKI.js"),__vite__mapDeps([28,8])),"ph-copy":()=>ge(()=>import("./PhCopy-B6cxk443.js"),__vite__mapDeps([29,8])),"ph-credit-card":()=>ge(()=>import("./PhCreditCard-BOcBt0Ep.js"),__vite__mapDeps([30,8])),"ph-currency-dollar":()=>ge(()=>import("./PhCurrencyDollar-DT3RluYJ.js"),__vite__mapDeps([31,8])),"ph-desktop":()=>ge(()=>import("./PhDesktop-WP8uWM_0.js"),__vite__mapDeps([32,8])),"ph-device-mobile":()=>ge(()=>import("./PhDeviceMobile-Bj9nv3dM.js"),__vite__mapDeps([33,8])),"ph-dots-three":()=>ge(()=>import("./PhDotsThree-DLQRtOq1.js"),__vite__mapDeps([34,8])),"ph-vault":()=>ge(()=>import("./PhVault-BvVEorLF.js"),__vite__mapDeps([35,8])),"ph-envelope":()=>ge(()=>import("./PhEnvelope-BZlaU2rZ.js"),__vite__mapDeps([36,8])),"ph-funnel-simple":()=>ge(()=>import("./PhFunnelSimple-i-0_1qmz.js"),__vite__mapDeps([37,8])),"ph-globe":()=>ge(()=>import("./PhGlobe-CqATMjoP.js"),__vite__mapDeps([38,8])),"ph-identification-card":()=>ge(()=>import("./PhIdentificationCard-C2UaC_jE.js"),__vite__mapDeps([39,8])),"ph-image":()=>ge(()=>import("./PhImage-BTIdlTqQ.js"),__vite__mapDeps([40,8])),"ph-info":()=>ge(()=>import("./PhInfo-DfXM6WP2.js"),__vite__mapDeps([41,8])),"ph-lightbulb":()=>ge(()=>import("./PhLightbulb-50ul1RGY.js"),__vite__mapDeps([42,8])),"ph-magnifying-glass":()=>ge(()=>import("./PhMagnifyingGlass-mfL7k6Qx.js"),__vite__mapDeps([43,8])),"ph-paper-plane-right":()=>ge(()=>import("./PhPaperPlaneRight-ChjuDsGR.js"),__vite__mapDeps([44,8])),"ph-plus":()=>ge(()=>import("./PhPlus-4Nw9uNRo.js"),__vite__mapDeps([45,8])),"ph-power":()=>ge(()=>import("./PhPower-BluSf-fj.js"),__vite__mapDeps([46,8])),"ph-puzzle-piece":()=>ge(()=>import("./PhPuzzlePiece-WR8BSxzn.js"),__vite__mapDeps([47,8])),"ph-qr-code":()=>ge(()=>import("./PhQrCode-BSmfZrGC.js"),__vite__mapDeps([48,8])),"ph-question":()=>ge(()=>import("./PhQuestion-DeQL0FRC.js"),__vite__mapDeps([49,8])),"ph-question-circle":()=>ge(()=>import("./PhQuestionMark-CSwZELrx.js"),__vite__mapDeps([50,8])),"ph-seal-check":()=>ge(()=>import("./PhSealCheck-BEjFjmKA.js"),__vite__mapDeps([51,8])),"ph-sign-out":()=>ge(()=>import("./PhSignOut-Cgiis16w.js"),__vite__mapDeps([52,8])),"ph-spinner":()=>ge(()=>import("./PhSpinner-CA-B2ona.js"),__vite__mapDeps([53,8])),"ph-trash":()=>ge(()=>import("./PhTrash-CxOOqvnh.js"),__vite__mapDeps([54,8])),"ph-user":()=>ge(()=>import("./PhUser-DK-qAE6X.js"),__vite__mapDeps([55,8])),"ph-warning":()=>ge(()=>import("./PhWarning-S0Lsie3G.js"),__vite__mapDeps([56,8])),"ph-warning-circle":()=>ge(()=>import("./PhWarningCircle-CQaWVwtU.js"),__vite__mapDeps([57,8])),"ph-x":()=>ge(()=>import("./PhX-DI3cpm1T.js"),__vite__mapDeps([58,8]))},A3={appStore:Q2,apple:e3,bitcoin:t3,chromeStore:n3,cursor:r3,discord:i3,ethereum:o3,etherscan:s3,facebook:a3,farcaster:c3,github:l3,google:d3,playStore:u3,reown:p3,solana:h3,telegram:f3,twitch:m3,twitter:xu,twitterIcon:g3,walletConnect:b3,walletConnectInvert:y3,walletConnectBrown:C3,walletConnectLightBrown:v3,x:xu,wallet:w3},S3={"accent-primary":Ze.tokens.core.iconAccentPrimary,"accent-certified":Ze.tokens.core.iconAccentCertified,default:Ze.tokens.theme.iconDefault,success:Ze.tokens.core.iconSuccess,error:Ze.tokens.core.iconError,warning:Ze.tokens.core.iconWarning,inverse:Ze.tokens.theme.iconInverse};let qr=class extends U{constructor(){super(...arguments),this.size="md",this.name="copy",this.weight="bold",this.color="inherit"}render(){const t={xxs:"2",xs:"3",sm:"3",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7",inherit:"inherit"};this.style.cssText=`
      --local-width: ${this.size==="inherit"?"inherit":`var(--apkt-spacing-${t[this.size]})`};
      --local-color: ${this.color==="inherit"?"inherit":S3[this.color]}
    `;const n=_3[this.name];if(n&&n!==""){const r=x3[n];r&&r();const o=J2(n);return _u`<${o} size=${{xxs:"0.5em",xs:"0.75em",sm:"0.75em",md:"1em",mdl:"1.25em",lg:"1.25em",xl:"1.5em",xxl:"1.75em"}[this.size]} weight="${this.weight}"></${o}>`}return A3[this.name]||_u``}};qr.styles=[me,E3];Cs([m()],qr.prototype,"size",void 0);Cs([m()],qr.prototype,"name",void 0);Cs([m()],qr.prototype,"weight",void 0);Cs([m()],qr.prototype,"color",void 0);qr=Cs([M("wui-icon")],qr);const T3=ne`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var In=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Vt=class extends U{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const t={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`
      --local-width: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};
      --local-height: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};
      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?u`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?u`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:u`<img src=${X(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};Vt.styles=[me,T3];In([m()],Vt.prototype,"src",void 0);In([m()],Vt.prototype,"logo",void 0);In([m()],Vt.prototype,"icon",void 0);In([m()],Vt.prototype,"iconColor",void 0);In([m()],Vt.prototype,"alt",void 0);In([m()],Vt.prototype,"size",void 0);In([m({type:Boolean})],Vt.prototype,"boxed",void 0);In([m({type:Boolean})],Vt.prototype,"rounded",void 0);In([m({type:Boolean})],Vt.prototype,"fullSize",void 0);Vt=In([M("wui-image")],Vt);const N3=Fe`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 1.4s linear infinite;
    color: var(--local-color);
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;var sd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let as=class extends U{constructor(){super(...arguments),this.color="primary",this.size="lg"}render(){const t={primary:Ze.tokens.theme.textPrimary,secondary:Ze.tokens.theme.textSecondary,tertiary:Ze.tokens.theme.textTertiary,invert:Ze.tokens.theme.textInvert,error:Ze.tokens.core.textError,warning:Ze.tokens.core.textWarning,"accent-primary":Ze.tokens.core.textAccentPrimary};return this.style.cssText=`
      --local-color: ${this.color==="inherit"?"inherit":t[this.color]};
      `,this.dataset.size=this.size,u`<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`}};as.styles=[me,N3];sd([m()],as.prototype,"color",void 0);sd([m()],as.prototype,"size",void 0);as=sd([M("wui-loading-spinner")],as);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lh={ATTRIBUTE:1,CHILD:2},dh=e=>(...t)=>({_$litDirective$:e,values:t});class uh{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ad=dh(class extends uh{constructor(e){if(super(e),e.type!==lh.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const o=!!t[r];o===this.st.has(r)||this.nt?.has(r)||(o?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return Vr}}),$3=ne`
  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  /* -- Headings --------------------------------------------------- */
  .wui-font-h1-regular-mono {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h1-regular {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h1-medium {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-regular-mono {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h2-regular {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-medium {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-regular-mono {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h3-regular {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-medium {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-regular-mono {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h4-regular {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-medium {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-regular-mono {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h5-regular {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-medium {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-regular-mono {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h6-regular {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-medium {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-regular-mono {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-lg-regular {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-medium {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-regular-mono {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-md-regular {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-medium {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-regular-mono {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-sm-regular {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-medium {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }
`;var Xi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const R3={primary:Ze.tokens.theme.textPrimary,secondary:Ze.tokens.theme.textSecondary,tertiary:Ze.tokens.theme.textTertiary,invert:Ze.tokens.theme.textInvert,error:Ze.tokens.core.textError,warning:Ze.tokens.core.textWarning,"accent-primary":Ze.tokens.core.textAccentPrimary};let fr=class extends U{constructor(){super(...arguments),this.variant="md-regular",this.color="inherit",this.align="left",this.lineClamp=void 0,this.display="inline-flex"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      display: ${this.display};
      --local-align: ${this.align};
      --local-color: ${this.color==="inherit"?"inherit":R3[this.color??"primary"]};
      `,u`<slot class=${ad(t)}></slot>`}};fr.styles=[me,$3];Xi([m()],fr.prototype,"variant",void 0);Xi([m()],fr.prototype,"color",void 0);Xi([m()],fr.prototype,"align",void 0);Xi([m()],fr.prototype,"lineClamp",void 0);Xi([m()],fr.prototype,"display",void 0);fr=Xi([M("wui-text")],fr);const k3=Fe`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`;var It=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let pt=class extends U{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&ze.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ze.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ze.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ze.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ze.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ze.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ze.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ze.getSpacingStyles(this.margin,3)};
      width: ${this.width};
    `,u`<slot></slot>`}};pt.styles=[me,k3];It([m()],pt.prototype,"flexDirection",void 0);It([m()],pt.prototype,"flexWrap",void 0);It([m()],pt.prototype,"flexBasis",void 0);It([m()],pt.prototype,"flexGrow",void 0);It([m()],pt.prototype,"flexShrink",void 0);It([m()],pt.prototype,"alignItems",void 0);It([m()],pt.prototype,"justifyContent",void 0);It([m()],pt.prototype,"columnGap",void 0);It([m()],pt.prototype,"rowGap",void 0);It([m()],pt.prototype,"gap",void 0);It([m()],pt.prototype,"padding",void 0);It([m()],pt.prototype,"margin",void 0);It([m()],pt.prototype,"width",void 0);pt=It([M("wui-flex")],pt);const I3=ne`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Es=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Kr=class extends U{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){const t={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${t[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${t[this.size??"xl"]});
    `,u`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",u`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=ze.generateAvatarColors(this.address);return this.style.cssText+=`
 ${t}`,null}return this.dataset.variant="default",null}};Kr.styles=[me,I3];Es([m()],Kr.prototype,"imageSrc",void 0);Es([m()],Kr.prototype,"alt",void 0);Es([m()],Kr.prototype,"address",void 0);Es([m()],Kr.prototype,"size",void 0);Kr=Es([M("wui-avatar")],Kr);const O3=ne`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[20]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var fn=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Lt=class extends U{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return u`
      <button
        ?disabled=${this.disabled}
        class=${X(this.balance?void 0:"local-no-balance")}
        data-error=${X(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){const t=this.networkSrc?u`<wui-image src=${this.networkSrc}></wui-image>`:u` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;return u`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${t}</wui-flex>
    </wui-flex>`}addressTemplate(){return u`<wui-text variant="md-regular" color="inherit">
      ${this.address?ze.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){const t=this.loading?u`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:u`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return u`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${t}</wui-flex
      >`}return null}};Lt.styles=[me,We,O3];fn([m()],Lt.prototype,"networkSrc",void 0);fn([m()],Lt.prototype,"avatarSrc",void 0);fn([m()],Lt.prototype,"balance",void 0);fn([m({type:Boolean})],Lt.prototype,"isUnsupportedChain",void 0);fn([m({type:Boolean})],Lt.prototype,"disabled",void 0);fn([m({type:Boolean})],Lt.prototype,"loading",void 0);fn([m()],Lt.prototype,"address",void 0);fn([m()],Lt.prototype,"profileName",void 0);fn([m()],Lt.prototype,"charsStart",void 0);fn([m()],Lt.prototype,"charsEnd",void 0);Lt=fn([M("wui-account-button")],Lt);var Et=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};class _t extends U{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=$.state.allowUnsupportedChain?!0:h.state.activeChain?h.checkIfSupportedNetwork(h.state.activeChain):!0}connectedCallback(){super.connectedCallback(),this.setAccountData(h.getAccountData(this.namespace)),this.setNetworkData(h.getNetworkData(this.namespace))}firstUpdated(){const t=this.namespace;t?this.unsubscribe.push(h.subscribeChainProp("accountState",n=>{this.setAccountData(n)},t),h.subscribeChainProp("networkState",n=>{this.setNetworkData(n),this.isSupported=h.checkIfSupportedNetwork(t,n?.caipNetwork?.caipNetworkId)},t)):this.unsubscribe.push(nt.subscribeNetworkImages(()=>{this.networkImage=je.getNetworkImage(this.network)}),h.subscribeKey("activeCaipAddress",n=>{this.caipAddress=n}),h.subscribeChainProp("accountState",n=>{this.setAccountData(n)}),h.subscribeKey("activeCaipNetwork",n=>{this.network=n,this.networkImage=je.getNetworkImage(n),this.isSupported=n?.chainNamespace?h.checkIfSupportedNetwork(n?.chainNamespace):!0,this.fetchNetworkImage(n)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!h.state.activeChain)return null;const t=this.balance==="show",n=typeof this.balanceVal!="string",{formattedText:r}=P.parseBalance(this.balanceVal,this.balanceSymbol);return u`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${$.state.allowUnsupportedChain?!1:!this.isSupported}
        address=${X(P.getPlainAddress(this.caipAddress))}
        profileName=${X(this.profileName)}
        networkSrc=${X(this.networkImage)}
        avatarSrc=${X(this.profileImage)}
        balance=${t?r:""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${n}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||$.state.allowUnsupportedChain?Ce.open({namespace:this.namespace}):Ce.open({view:"UnsupportedChain"})}async fetchNetworkImage(t){t?.assets?.imageId&&(this.networkImage=await je.fetchNetworkImage(t?.assets?.imageId))}setAccountData(t){t&&(this.caipAddress=t.caipAddress,this.balanceVal=t.balance,this.balanceSymbol=t.balanceSymbol,this.profileName=t.profileName,this.profileImage=t.profileImage)}setNetworkData(t){t&&(this.network=t.caipNetwork,this.networkImage=je.getNetworkImage(t.caipNetwork))}}Et([m({type:Boolean})],_t.prototype,"disabled",void 0);Et([m()],_t.prototype,"balance",void 0);Et([m()],_t.prototype,"charsStart",void 0);Et([m()],_t.prototype,"charsEnd",void 0);Et([m()],_t.prototype,"namespace",void 0);Et([_()],_t.prototype,"caipAddress",void 0);Et([_()],_t.prototype,"balanceVal",void 0);Et([_()],_t.prototype,"balanceSymbol",void 0);Et([_()],_t.prototype,"profileName",void 0);Et([_()],_t.prototype,"profileImage",void 0);Et([_()],_t.prototype,"network",void 0);Et([_()],_t.prototype,"networkImage",void 0);Et([_()],_t.prototype,"isSupported",void 0);let Au=class extends _t{};Au=Et([M("w3m-account-button")],Au);let xl=class extends _t{};xl=Et([M("appkit-account-button")],xl);const P3=Fe`
  :host {
    display: block;
    width: max-content;
  }
`;var mn=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};class Zt extends U{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){this.caipAddress=this.namespace?h.getAccountData(this.namespace)?.caipAddress:h.state.activeCaipAddress,this.namespace?this.unsubscribe.push(h.subscribeChainProp("accountState",t=>{this.caipAddress=t?.caipAddress},this.namespace)):this.unsubscribe.push(h.subscribeKey("activeCaipAddress",t=>this.caipAddress=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.caipAddress?u`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${X(this.balance)}
            .charsStart=${X(this.charsStart)}
            .charsEnd=${X(this.charsEnd)}
            namespace=${X(this.namespace)}
          >
          </appkit-account-button>
        `:u`
          <appkit-connect-button
            size=${X(this.size)}
            label=${X(this.label)}
            loadingLabel=${X(this.loadingLabel)}
            namespace=${X(this.namespace)}
          ></appkit-connect-button>
        `}}Zt.styles=P3;mn([m({type:Boolean})],Zt.prototype,"disabled",void 0);mn([m()],Zt.prototype,"balance",void 0);mn([m()],Zt.prototype,"size",void 0);mn([m()],Zt.prototype,"label",void 0);mn([m()],Zt.prototype,"loadingLabel",void 0);mn([m()],Zt.prototype,"charsStart",void 0);mn([m()],Zt.prototype,"charsEnd",void 0);mn([m()],Zt.prototype,"namespace",void 0);mn([_()],Zt.prototype,"caipAddress",void 0);let Su=class extends Zt{};Su=mn([M("w3m-button")],Su);let Al=class extends Zt{};Al=mn([M("appkit-button")],Al);const L3=ne`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`;var _s=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Gr=class extends U{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return u`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){const t={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},n={primary:"invert",secondary:"accent-primary"};return this.loading?u`<wui-loading-spinner
      color=${n[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:u` <wui-text variant=${t[this.size]} color=${n[this.variant]}>
        ${this.text}
      </wui-text>`}};Gr.styles=[me,We,L3];_s([m()],Gr.prototype,"size",void 0);_s([m()],Gr.prototype,"variant",void 0);_s([m({type:Boolean})],Gr.prototype,"loading",void 0);_s([m()],Gr.prototype,"text",void 0);Gr=_s([M("wui-connect-button")],Gr);var vr=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};class Cr extends U{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Ce.state.open,this.loading=this.namespace?Ce.state.loadingNamespaceMap.get(this.namespace):Ce.state.loading,this.unsubscribe.push(Ce.subscribe(t=>{this.open=t.open,this.loading=this.namespace?t.loadingNamespaceMap.get(this.namespace):t.loading}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-connect-button
        size=${X(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Ce.close():this.loading||Ce.open({view:"Connect",namespace:this.namespace})}}vr([m()],Cr.prototype,"size",void 0);vr([m()],Cr.prototype,"label",void 0);vr([m()],Cr.prototype,"loadingLabel",void 0);vr([m()],Cr.prototype,"namespace",void 0);vr([_()],Cr.prototype,"open",void 0);vr([_()],Cr.prototype,"loading",void 0);let Tu=class extends Cr{};Tu=vr([M("w3m-connect-button")],Tu);let Sl=class extends Cr{};Sl=vr([M("appkit-connect-button")],Sl);const D3=ne`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} !important;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({spacing:e})=>e[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({tokens:e})=>e.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({tokens:e})=>e.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`;var xs=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Zr=class extends U{constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,u`
      <wui-icon size=${X(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};Zr.styles=[me,We,D3];xs([m()],Zr.prototype,"icon",void 0);xs([m()],Zr.prototype,"size",void 0);xs([m()],Zr.prototype,"padding",void 0);xs([m()],Zr.prototype,"color",void 0);Zr=xs([M("wui-icon-box")],Zr);const M3=ne`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`;var As=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Yr=class extends U{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){const t={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};return u`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${t[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?u` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?u`<wui-image src=${this.imageSrc}></wui-image>`:u` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `}};Yr.styles=[me,We,M3];As([m()],Yr.prototype,"imageSrc",void 0);As([m({type:Boolean})],Yr.prototype,"isUnsupportedChain",void 0);As([m({type:Boolean})],Yr.prototype,"disabled",void 0);As([m()],Yr.prototype,"size",void 0);Yr=As([M("wui-network-button")],Yr);const U3=Fe`
  :host {
    display: block;
    width: max-content;
  }
`;var nr=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};class On extends U{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=h.state.activeCaipNetwork,this.networkImage=je.getNetworkImage(this.network),this.caipAddress=h.state.activeCaipAddress,this.loading=Ce.state.loading,this.isSupported=$.state.allowUnsupportedChain?!0:h.state.activeChain?h.checkIfSupportedNetwork(h.state.activeChain):!0,this.unsubscribe.push(nt.subscribeNetworkImages(()=>{this.networkImage=je.getNetworkImage(this.network)}),h.subscribeKey("activeCaipAddress",t=>{this.caipAddress=t}),h.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=je.getNetworkImage(t),this.isSupported=t?.chainNamespace?h.checkIfSupportedNetwork(t.chainNamespace):!0,je.fetchNetworkImage(t?.assets?.imageId)}),Ce.subscribeKey("loading",t=>this.loading=t))}firstUpdated(){je.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.network?h.checkIfSupportedNetwork(this.network.chainNamespace):!0;return u`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${$.state.allowUnsupportedChain?!1:!t}
        imageSrc=${X(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!$.state.allowUnsupportedChain?"Switch Network":this.network.name:this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(te.sendEvent({type:"track",event:"CLICK_NETWORKS"}),Ce.open({view:"Networks"}))}}On.styles=U3;nr([m({type:Boolean})],On.prototype,"disabled",void 0);nr([m({type:String})],On.prototype,"label",void 0);nr([_()],On.prototype,"network",void 0);nr([_()],On.prototype,"networkImage",void 0);nr([_()],On.prototype,"caipAddress",void 0);nr([_()],On.prototype,"loading",void 0);nr([_()],On.prototype,"isSupported",void 0);let Nu=class extends On{};Nu=nr([M("w3m-network-button")],Nu);let Tl=class extends On{};Tl=nr([M("appkit-network-button")],Tl);const B3="https://reown.com",W3=ne`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`;var j3=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Nl=class extends U{render(){return u`
      <a
        data-testid="ux-branding-reown"
        href=${B3}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};Nl.styles=[me,We,W3];Nl=j3([M("wui-ux-by-reown")],Nl);const F3=ne`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var ph=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let La=class extends U{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=$.state.remoteFeatures,this.unsubscribe.push($.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=$.state,r=$.state.features?.legalCheckbox;return!t&&!n||r?u`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:u`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=$.state;return t&&n?"and":""}termsTemplate(){const{termsConditionsUrl:t}=$.state;return t?u`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:t}=$.state;return t?u`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(t=!1){return this.remoteFeatures?.reownBranding?t?u`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:u`<wui-ux-by-reown></wui-ux-by-reown>`:null}};La.styles=[F3];ph([_()],La.prototype,"remoteFeatures",void 0);La=ph([M("w3m-legal-footer")],La);const z3=ne`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({spacing:e})=>e[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Ss=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const H3={sm:"sm-medium",md:"md-medium"},V3={accent:"accent-primary",secondary:"secondary"};let Jr=class extends U{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return u`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${V3[this.variant]}
          variant=${H3[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?u`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};Jr.styles=[me,We,z3];Ss([m()],Jr.prototype,"size",void 0);Ss([m({type:Boolean})],Jr.prototype,"disabled",void 0);Ss([m()],Jr.prototype,"variant",void 0);Ss([m()],Jr.prototype,"icon",void 0);Jr=Ss([M("wui-link")],Jr);const q3=Fe``;var K3=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let $l=class extends U{render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=$.state;return!t&&!n?null:u`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return u` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){te.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:rt(h.state.activeChain)===De.ACCOUNT_TYPES.SMART_ACCOUNT}}),T.push("WhatIsABuy")}};$l.styles=[q3];$l=K3([M("w3m-onramp-providers-footer")],$l);const Pi={getTabsByNamespace(e){return!!e&&e===z.CHAIN.EVM?$.state.remoteFeatures?.activity===!1?mo.ACCOUNT_TABS.filter(n=>n.label!=="Activity"):mo.ACCOUNT_TABS:[]},isValidReownName(e){return/^[a-zA-Z0-9]+$/gu.test(e)},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e)},validateReownName(e){return e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,"")},hasFooter(){const e=T.state.view;if(mo.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:t,privacyPolicyUrl:n}=$.state,r=$.state.features?.legalCheckbox;return!(!t&&!n||r)}return mo.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}},G3=ne`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var cd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let cs=class extends U{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=T.state.view}firstUpdated(){this.status=Pi.hasFooter()?"show":"hide",this.unsubscribe.push(T.subscribeKey("view",t=>{this.view=t,this.status=Pi.hasFooter()?"show":"hide",this.status==="hide"&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(t=>{for(const n of t)if(n.target===this.getWrapper()){const r=`${n.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",r)}}),this.resizeObserver.observe(this.getWrapper())}render(){return u`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return Pi.hasFooter()?u` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return u`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return u`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return u` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){te.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),T.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};cs.styles=[G3];cd([_()],cs.prototype,"status",void 0);cd([_()],cs.prototype,"view",void 0);cs=cd([M("w3m-footer")],cs);const Z3=ne`
  :host {
    display: block;
    width: inherit;
  }
`;var ld=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ls=class extends U{constructor(){super(),this.unsubscribe=[],this.viewState=T.state.view,this.history=T.state.history.join(","),this.unsubscribe.push(T.subscribeKey("view",()=>{this.history=T.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return u`${this.templatePageContainer()}`}templatePageContainer(){return u`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=T.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(t){switch(t){case"AccountSettings":return u`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return u`<w3m-account-view></w3m-account-view>`;case"AllWallets":return u`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return u`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return u`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return u`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return u`<w3m-connect-view></w3m-connect-view>`;case"Create":return u`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return u`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return u`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return u`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return u`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return u`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return u`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return u`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return u`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return u`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return u`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return u`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return u`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return u`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return u`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return u`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return u`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return u`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return u`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return u`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return u`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return u`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return u`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return u`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return u`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return u`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return u`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return u`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return u`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return u`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return u`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return u`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return u`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return u`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return u`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return u`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return u`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return u`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return u`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return u`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return u`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return u`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return u`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return u`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return u`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return u`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return u`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return u`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return u`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"FundWallet":return u`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return u`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return u`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return u`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;default:return u`<w3m-connect-view></w3m-connect-view>`}}};ls.styles=[Z3];ld([_()],ls.prototype,"viewState",void 0);ld([_()],ls.prototype,"history",void 0);ls=ld([M("w3m-router")],ls);const Y3=ne`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var Qi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let mr=class extends U{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){const t={accent:"accent-primary",primary:"inverse",secondary:"default"};return u`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${t[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};mr.styles=[me,We,Y3];Qi([m()],mr.prototype,"size",void 0);Qi([m({type:Boolean})],mr.prototype,"disabled",void 0);Qi([m()],mr.prototype,"icon",void 0);Qi([m()],mr.prototype,"iconColor",void 0);Qi([m()],mr.prototype,"variant",void 0);mr=Qi([M("wui-icon-link")],mr);const J3=ne`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Pn=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let qt=class extends U{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",u`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${X(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?u`<wui-image
        icon=${this.icon}
        iconColor=${X(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:u`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?u`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:u`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};qt.styles=[me,We,J3];Pn([m()],qt.prototype,"imageSrc",void 0);Pn([m()],qt.prototype,"icon",void 0);Pn([m()],qt.prototype,"iconColor",void 0);Pn([m({type:Boolean})],qt.prototype,"loading",void 0);Pn([m()],qt.prototype,"tabIdx",void 0);Pn([m({type:Boolean})],qt.prototype,"disabled",void 0);Pn([m({type:Boolean})],qt.prototype,"rightIcon",void 0);Pn([m({type:Boolean})],qt.prototype,"rounded",void 0);Pn([m({type:Boolean})],qt.prototype,"fullSize",void 0);qt=Pn([M("wui-list-item")],qt);const X3=ne`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var mi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Q3={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},eb={lg:"md",md:"md",sm:"sm"};let Gn=class extends U{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;const t=this.textVariant??Q3[this.size];return u`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const t=eb[this.size],n=this.variant==="neutral-primary"||this.variant==="accent-primary"?"invert":"primary";return u`<wui-loading-spinner color=${n} size=${t}></wui-loading-spinner>`}return null}};Gn.styles=[me,We,X3];mi([m()],Gn.prototype,"size",void 0);mi([m({type:Boolean})],Gn.prototype,"disabled",void 0);mi([m({type:Boolean})],Gn.prototype,"fullWidth",void 0);mi([m({type:Boolean})],Gn.prototype,"loading",void 0);mi([m()],Gn.prototype,"variant",void 0);mi([m()],Gn.prototype,"textVariant",void 0);Gn=mi([M("wui-button")],Gn);const tb=ne`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: normal;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`;var lc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let zi=class extends U{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return u`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="md" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};zi.styles=[me,We,tb];lc([m()],zi.prototype,"label",void 0);lc([m()],zi.prototype,"description",void 0);lc([m()],zi.prototype,"icon",void 0);zi=lc([M("wui-notice-card")],zi);var hh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Rl=class extends U{constructor(){super(),this.unsubscribe=[],this.socialProvider=J.getConnectedSocialProvider(),this.socialUsername=J.getConnectedSocialUsername(),this.namespace=h.state.activeChain,this.unsubscribe.push(h.subscribeKey("activeChain",t=>{this.namespace=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=D.getConnectorId(this.namespace),n=D.getAuthConnector();if(!n||t!==z.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const r=n.provider.getEmail()??"";return!r&&!this.socialUsername?(this.style.cssText="display: none",null):u`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(r,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(r)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(t,n){n||T.push("UpdateEmailWallet",{email:t,redirectView:"Account"})}getAuthName(t){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:t.length>30?`${t.slice(0,-3)}...`:t}};hh([_()],Rl.prototype,"namespace",void 0);Rl=hh([M("w3m-account-auth-button")],Rl);var Ln=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let un=class extends U{constructor(){super(),this.usubscribe=[],this.networkImages=nt.state.networkImages,this.address=h.getAccountData()?.address,this.profileImage=h.getAccountData()?.profileImage,this.profileName=h.getAccountData()?.profileName,this.network=h.state.activeCaipNetwork,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.remoteFeatures=$.state.remoteFeatures,this.usubscribe.push(h.subscribeChainProp("accountState",t=>{t&&(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName)}),h.subscribeKey("activeCaipNetwork",t=>{t?.id&&(this.network=t)}),$.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const t=this.networkImages[this.network?.assets?.imageId??""];return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${X(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${ze.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${X(t)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const t=this.network?.chainNamespace,n=D.getConnectorId(t),r=D.getAuthConnector();return!h.checkIfNamesSupported()||!r||n!==z.CONNECTOR_ID.AUTH||this.profileName?null:u`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){const t=D.getConnectorId(this.network?.chainNamespace),n=D.getAuthConnector(),{origin:r}=location;return!n||t!==z.CONNECTOR_ID.AUTH||r.includes(Ie.SECURE_SITE)?null:u`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const t=h.getAllRequestedCaipNetworks(),n=t?t.length>1:!1,r=t?.find(({id:o})=>o===this.network?.id);return n||!r}onCopyAddress(){try{this.address&&(P.copyToClopboard(this.address),$e.showSuccess("Address copied"))}catch{$e.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const t=this.network?.chainNamespace,n=h.checkIfSmartAccountEnabled(),r=D.getConnectorId(t);return!D.getAuthConnector()||r!==z.CONNECTOR_ID.AUTH||!n?null:(this.switched||(this.text=rt(t)===De.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),u`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `)}onChooseName(){T.push("ChooseAccountName")}async changePreferredAccountType(){const t=this.network?.chainNamespace,n=h.checkIfSmartAccountEnabled(),r=rt(t)===De.ACCOUNT_TYPES.SMART_ACCOUNT||!n?De.ACCOUNT_TYPES.EOA:De.ACCOUNT_TYPES.SMART_ACCOUNT;D.getAuthConnector()&&(this.loading=!0,await j.setPreferredAccountType(r,t),this.text=r===De.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,Ne.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&T.push("Networks")}async onDisconnect(){try{this.disconnecting=!0;const t=this.network?.chainNamespace,r=j.getConnections(t).length>0,o=t&&D.state.activeConnectorIds[t],i=this.remoteFeatures?.multiWallet;await j.disconnect(i?{id:o,namespace:t}:{}),r&&i&&(T.push("ProfileWallets"),$e.showSuccess("Wallet deleted"))}catch{te.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),$e.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){te.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),T.push("UpgradeEmailWallet")}};Ln([_()],un.prototype,"address",void 0);Ln([_()],un.prototype,"profileImage",void 0);Ln([_()],un.prototype,"profileName",void 0);Ln([_()],un.prototype,"network",void 0);Ln([_()],un.prototype,"disconnecting",void 0);Ln([_()],un.prototype,"loading",void 0);Ln([_()],un.prototype,"switched",void 0);Ln([_()],un.prototype,"text",void 0);Ln([_()],un.prototype,"remoteFeatures",void 0);un=Ln([M("w3m-account-settings-view")],un);const nb=ne`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var Ts=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const rb={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},ib={lg:"md",md:"sm",sm:"sm"};let Xr=class extends U{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return u`
      <button data-active=${this.active}>
        ${this.icon?u`<wui-icon size=${ib[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${rb[this.size]}> ${this.label} </wui-text>
      </button>
    `}};Xr.styles=[me,We,nb];Ts([m()],Xr.prototype,"icon",void 0);Ts([m()],Xr.prototype,"size",void 0);Ts([m()],Xr.prototype,"label",void 0);Ts([m({type:Boolean})],Xr.prototype,"active",void 0);Xr=Ts([M("wui-tab-item")],Xr);const ob=ne`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var Ns=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Qr=class extends U{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((t,n)=>{const r=n===this.activeTab;return u`
        <wui-tab-item
          @click=${()=>this.onTabClick(n)}
          icon=${t.icon}
          size=${this.size}
          label=${t.label}
          ?active=${r}
          data-active=${r}
          data-testid="tab-${t.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(t){this.activeTab=t,this.onTabChange(t)}};Qr.styles=[me,We,ob];Ns([m({type:Array})],Qr.prototype,"tabs",void 0);Ns([m()],Qr.prototype,"onTabChange",void 0);Ns([m()],Qr.prototype,"size",void 0);Ns([_()],Qr.prototype,"activeTab",void 0);Qr=Ns([M("wui-tabs")],Qr);const sb=ne`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    text-transform: uppercase;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var dc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Hi=class extends U{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"md-medium":"sm-medium",n=this.size==="md"?"md":"sm";return u`
      ${this.icon?u`<wui-icon size=${n} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${t}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};Hi.styles=[me,sb];dc([m()],Hi.prototype,"variant",void 0);dc([m()],Hi.prototype,"size",void 0);dc([m()],Hi.prototype,"icon",void 0);Hi=dc([M("wui-tag")],Hi);const ab=ne`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var Dn=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Kt=class extends U{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return u`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const t=this.icon?u`<wui-icon
          size=${X(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:u`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return u`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${t}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return u`
      <wui-text variant="lg-regular" color="primary">
        ${ze.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return u`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};Kt.styles=[me,We,ab];Dn([m()],Kt.prototype,"address",void 0);Dn([m()],Kt.prototype,"profileName",void 0);Dn([m()],Kt.prototype,"alt",void 0);Dn([m()],Kt.prototype,"imageSrc",void 0);Dn([m()],Kt.prototype,"icon",void 0);Dn([m()],Kt.prototype,"iconSize",void 0);Dn([m({type:Boolean})],Kt.prototype,"loading",void 0);Dn([m({type:Number})],Kt.prototype,"charsStart",void 0);Dn([m({type:Number})],Kt.prototype,"charsEnd",void 0);Kt=Dn([M("wui-wallet-switch")],Kt);const cb=ne`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[3]};
    height: 48px;
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e["ease-out-power-1"]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var Yt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Tt=class extends U{constructor(){super(),this.unsubscribe=[],this.caipAddress=h.getAccountData()?.caipAddress,this.address=P.getPlainAddress(h.getAccountData()?.caipAddress),this.profileImage=h.getAccountData()?.profileImage,this.profileName=h.getAccountData()?.profileName,this.disconnecting=!1,this.balance=h.getAccountData()?.balance,this.balanceSymbol=h.getAccountData()?.balanceSymbol,this.features=$.state.features,this.remoteFeatures=$.state.remoteFeatures,this.namespace=h.state.activeChain,this.activeConnectorIds=D.state.activeConnectorIds,this.unsubscribe.push(h.subscribeChainProp("accountState",t=>{this.address=P.getPlainAddress(t?.caipAddress),this.caipAddress=t?.caipAddress,this.balance=t?.balance,this.balanceSymbol=t?.balanceSymbol,this.profileName=t?.profileName,this.profileImage=t?.profileImage}),$.subscribeKey("features",t=>this.features=t),$.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t),D.subscribeKey("activeConnectorIds",t=>{this.activeConnectorIds=t}),h.subscribeKey("activeChain",t=>this.namespace=t),h.subscribeKey("activeCaipNetwork",t=>{t?.chainNamespace&&(this.namespace=t?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.caipAddress||!this.namespace)return null;const t=this.activeConnectorIds[this.namespace],n=t?D.getConnectorById(t):void 0,r=je.getConnectorImage(n),{value:o,decimals:i,symbol:s}=P.parseBalance(this.balance,this.balanceSymbol);return u`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${X(this.caipAddress)}
          address=${X(P.getPlainAddress(this.caipAddress))}
          imageSrc=${X(this.profileImage===null?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${r}
          alt=${n?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${o}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${i}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${s}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;const t=Ie.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),n=!!this.features?.receive,r=this.remoteFeatures?.onramp&&t,o=tt.isPayWithExchangeEnabled();return!r&&!n&&!o?null:u`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||Ie.DEFAULT_FEATURES.walletFeaturesOrder).map(n=>{switch(n){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&Ie.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?u` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){const t=this.remoteFeatures?.swaps,n=h.state.activeChain===z.CHAIN.EVM;return!t||!n?null:u`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){const t=this.features?.send,n=h.state.activeChain;if(!n)throw new Error("SendController:sendTemplate - namespace is required");const r=Ie.SEND_SUPPORTED_NAMESPACES.includes(n);return!t||!r?null:u`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const t=h.state.activeChain;if(!t)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const n=D.getConnectorId(t),r=D.getAuthConnector(),{origin:o}=location;return!r||n!==z.CONNECTOR_ID.AUTH||o.includes(Ie.SECURE_SITE)?null:u`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){T.push("FundWallet")}handleClickSwap(){T.push("Swap")}handleClickSend(){T.push("WalletSend")}explorerBtnTemplate(){return h.getAccountData()?.addressExplorerUrl?u`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){te.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:rt(h.state.activeChain)===De.ACCOUNT_TYPES.SMART_ACCOUNT}}),T.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0;const n=j.getConnections(this.namespace).length>0,r=this.namespace&&D.state.activeConnectorIds[this.namespace],o=this.remoteFeatures?.multiWallet;await j.disconnect(o?{id:r,namespace:this.namespace}:{}),n&&o&&(T.push("ProfileWallets"),$e.showSuccess("Wallet deleted"))}catch{te.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),$e.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const t=h.getAccountData()?.addressExplorerUrl;t&&P.openHref(t,"_blank")}onGoToUpgradeView(){te.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),T.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){T.push("ProfileWallets")}};Tt.styles=cb;Yt([_()],Tt.prototype,"caipAddress",void 0);Yt([_()],Tt.prototype,"address",void 0);Yt([_()],Tt.prototype,"profileImage",void 0);Yt([_()],Tt.prototype,"profileName",void 0);Yt([_()],Tt.prototype,"disconnecting",void 0);Yt([_()],Tt.prototype,"balance",void 0);Yt([_()],Tt.prototype,"balanceSymbol",void 0);Yt([_()],Tt.prototype,"features",void 0);Yt([_()],Tt.prototype,"remoteFeatures",void 0);Yt([_()],Tt.prototype,"namespace",void 0);Yt([_()],Tt.prototype,"activeConnectorIds",void 0);Tt=Yt([M("w3m-account-default-widget")],Tt);const lb=ne`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`;var dd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ds=class extends U{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return u`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ds.styles=[me,lb];dd([m()],ds.prototype,"dollars",void 0);dd([m()],ds.prototype,"pennies",void 0);ds=dd([M("wui-balance")],ds);const db=ne`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var $s=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const ub={sm:"sm-regular",md:"md-regular"};let ei=class extends U{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,u`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${ub[this.size]}>${this.message}</wui-text>`}};ei.styles=[me,We,db];$s([m()],ei.prototype,"placement",void 0);$s([m()],ei.prototype,"variant",void 0);$s([m()],ei.prototype,"size",void 0);$s([m()],ei.prototype,"message",void 0);ei=$s([M("wui-tooltip")],ei);var kl;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(kl||(kl={}));const pb=ne`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var gi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Zn=class extends U{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,n]=this.images;this.images.length||(this.dataset.noImages="true");const r=t?.type==="NFT",o=n?.url?n.type==="NFT":r,i=r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)",s=o?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)";return this.style.cssText=`
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${s};
    `,u`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,n]=this.images,r=t?.type;return this.images.length===2&&(t?.url||n?.url)?u`<div class="swap-images-container">
        ${t?.url?u`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${n?.url?u`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t?.url?u`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:r==="NFT"?u`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`:u`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-primary",n;return n=this.getIcon(),this.status&&(t=this.getStatusColor()),n?u`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${n}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontal":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};Zn.styles=[pb];gi([m()],Zn.prototype,"type",void 0);gi([m()],Zn.prototype,"status",void 0);gi([m()],Zn.prototype,"direction",void 0);gi([m({type:Boolean})],Zn.prototype,"onlyDirectionIcon",void 0);gi([m({type:Array})],Zn.prototype,"images",void 0);gi([m({type:Object})],Zn.prototype,"secondImage",void 0);Zn=gi([M("wui-transaction-visual")],Zn);const hb=ne`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Er=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Nn=class extends U{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return u`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${X(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${kl[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const t=this.descriptions?.[0];return t?u`
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){const t=this.descriptions?.[1];return t?u`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}};Nn.styles=[me,hb];Er([m()],Nn.prototype,"type",void 0);Er([m({type:Array})],Nn.prototype,"descriptions",void 0);Er([m()],Nn.prototype,"date",void 0);Er([m({type:Boolean})],Nn.prototype,"onlyDirectionIcon",void 0);Er([m()],Nn.prototype,"status",void 0);Er([m()],Nn.prototype,"direction",void 0);Er([m({type:Array})],Nn.prototype,"images",void 0);Nn=Er([M("wui-transaction-list-item")],Nn);const fb=ne`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var Rs=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ti=class extends U{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",u`<slot></slot>`}};ti.styles=[fb];Rs([m()],ti.prototype,"width",void 0);Rs([m()],ti.prototype,"height",void 0);Rs([m()],ti.prototype,"variant",void 0);Rs([m({type:Boolean})],ti.prototype,"rounded",void 0);ti=Rs([M("wui-shimmer")],ti);const mb=ne`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var ks=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Oc={sm:"xxs",lg:"md"};let ni=class extends U{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return u`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){const[t,n]=this.images;return this.images.length===2&&(t||n)?u`
        <wui-image class="swap-crop-left-image" src=${t} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${n} alt="Swap image"></wui-image>
      `:t?u`<wui-image src=${t} alt="Swap image"></wui-image>`:null}fiatTemplate(){return u`<wui-icon
      class="fallback-icon"
      size=${Oc[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return u`<wui-icon
      class="fallback-icon"
      size=${Oc[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){const[t]=this.images;return t?u`<wui-image src=${t} alt="Token image"></wui-image> `:u`<wui-icon
      class="fallback-icon"
      name=${this.type==="nft"?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?u`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:u`<wui-icon
      class="direction-icon"
      size=${Oc[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return this.type==="trade"?"arrowClockWise":"arrowBottom"}};ni.styles=[mb];ks([m()],ni.prototype,"type",void 0);ks([m()],ni.prototype,"size",void 0);ks([m()],ni.prototype,"statusImageUrl",void 0);ks([m({type:Array})],ni.prototype,"images",void 0);ni=ks([M("wui-transaction-thumbnail")],ni);const gb=ne`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var wb=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Il=class extends U{render(){return u`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};Il.styles=[me,gb];Il=wb([M("wui-transaction-list-item-loader")],Il);const bb=ne`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e[3]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var wi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const $u="last-transaction",yb=7;let Yn=class extends U{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=h.state.activeCaipAddress,this.transactionsByYear=wt.state.transactionsByYear,this.loading=wt.state.loading,this.empty=wt.state.empty,this.next=wt.state.next,wt.clearCursor(),this.unsubscribe.push(h.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(wt.resetTransactions(),wt.fetchTransactions(t)),this.caipAddress=t}),h.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),wt.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){wt.resetTransactions(),this.caipAddress&&wt.fetchTransactions(P.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(n=>{const r=parseInt(n,10),o=new Array(12).fill(null).map((i,s)=>{const a=Ri.getTransactionGroupTitle(r,s),c=this.transactionsByYear[r]?.[s];return{groupTitle:a,transactions:c}}).filter(({transactions:i})=>i).reverse();return o.map(({groupTitle:i,transactions:s},a)=>{const c=a===o.length-1;return s?u`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${c?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${i}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(s,c)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,n){const{date:r,descriptions:o,direction:i,images:s,status:a,type:c,transfers:l,isAllNFT:d}=this.getTransactionListItemProps(t);return u`
      <wui-transaction-list-item
        date=${r}
        .direction=${i}
        id=${n&&this.next?$u:""}
        status=${a}
        type=${c}
        .images=${s}
        .onlyDirectionIcon=${d||l.length===1}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(t,n){return t.map((r,o)=>{const i=n&&o===t.length-1;return u`${this.templateRenderTransaction(r,i)}`})}emptyStateActivity(){return u`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return u`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?u`${this.emptyStateAccount()}`:u`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(yb).fill(u` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){T.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=$.state;this.paginationObserver=new IntersectionObserver(([n])=>{n?.isIntersecting&&!this.loading&&(wt.fetchTransactions(P.getPlainAddress(this.caipAddress)),te.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:P.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:rt(h.state.activeChain)===De.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const t=this.shadowRoot?.querySelector(`#${$u}`);t&&this.paginationObserver?.observe(t)}getTransactionListItemProps(t){const n=cl.formatDate(t?.metadata?.minedAt),r=Ri.mergeTransfers(t?.transfers),o=Ri.getTransactionDescriptions(t,r),i=r?.[0],s=!!i&&r?.every(c=>!!c.nft_info),a=Ri.getTransactionImages(r);return{date:n,direction:i?.direction,descriptions:o,isAllNFT:s,images:a,status:t.metadata?.status,transfers:r,type:t.metadata?.operationType}}};Yn.styles=bb;wi([m()],Yn.prototype,"page",void 0);wi([_()],Yn.prototype,"caipAddress",void 0);wi([_()],Yn.prototype,"transactionsByYear",void 0);wi([_()],Yn.prototype,"loading",void 0);wi([_()],Yn.prototype,"empty",void 0);wi([_()],Yn.prototype,"next",void 0);Yn=wi([M("w3m-activity-list")],Yn);const vb=Fe`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var Cb=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ol=class extends U{render(){return u`<w3m-activity-list page="account"></w3m-activity-list>`}};Ol.styles=vb;Ol=Cb([M("w3m-account-activity-widget")],Ol);const Eb=ne`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var eo=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let gr=class extends U{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return u`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?u`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?u`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};gr.styles=[me,We,Eb];eo([m()],gr.prototype,"icon",void 0);eo([m()],gr.prototype,"text",void 0);eo([m()],gr.prototype,"description",void 0);eo([m()],gr.prototype,"tag",void 0);eo([m({type:Boolean})],gr.prototype,"disabled",void 0);gr=eo([M("wui-list-description")],gr);const _b=ne`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:e})=>e[3]};
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var bi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Jn=class extends U{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return u`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="space-between" gap="1">
            <wui-text variant="md-regular" color="primary">${this.tokenName}</wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${Fo.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${Fo.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?u`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:u`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};Jn.styles=[me,We,_b];bi([m()],Jn.prototype,"tokenName",void 0);bi([m()],Jn.prototype,"tokenImageUrl",void 0);bi([m({type:Number})],Jn.prototype,"tokenValue",void 0);bi([m()],Jn.prototype,"tokenAmount",void 0);bi([m()],Jn.prototype,"tokenCurrency",void 0);bi([m({type:Boolean})],Jn.prototype,"clickable",void 0);Jn=bi([M("wui-list-token")],Jn);const xb=Fe`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var ud=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let us=class extends U{constructor(){super(),this.unsubscribe=[],this.tokenBalance=h.getAccountData()?.tokenBalance,this.remoteFeatures=$.state.remoteFeatures,this.unsubscribe.push(h.subscribeChainProp("accountState",t=>{this.tokenBalance=t?.tokenBalance}),$.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?u`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:u` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?u`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:u``}tokenItemTemplate(){return this.tokenBalance?.map(t=>u`<wui-list-token
          tokenName=${t.name}
          tokenImageUrl=${t.iconUrl}
          tokenAmount=${t.quantity.numeric}
          tokenValue=${t.value}
          tokenCurrency=${t.symbol}
        ></wui-list-token>`)}onReceiveClick(){T.push("WalletReceive")}onBuyClick(){te.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:rt(h.state.activeChain)===De.ACCOUNT_TYPES.SMART_ACCOUNT}}),T.push("OnRampProviders")}};us.styles=xb;ud([_()],us.prototype,"tokenBalance",void 0);ud([_()],us.prototype,"remoteFeatures",void 0);us=ud([M("w3m-account-tokens-widget")],us);const Ab=Fe`
  :host {
    width: 100%;
    display: block;
  }
`;var pd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ps=class extends U{constructor(){super(),this.unsubscribe=[],this.text="",this.open=Ft.state.open,this.unsubscribe.push(T.subscribeKey("view",()=>{Ft.hide()}),Ce.subscribeKey("open",t=>{t||Ft.hide()}),Ft.subscribeKey("open",t=>{this.open=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),Ft.hide()}render(){return u`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return u`<slot></slot> `}onMouseEnter(){const t=this.getBoundingClientRect();if(!this.open){const n=document.querySelector("w3m-modal"),r={width:t.width,height:t.height,left:t.left,top:t.top};if(n){const o=n.getBoundingClientRect();r.left=t.left-(window.innerWidth-o.width)/2,r.top=t.top-(window.innerHeight-o.height)/2}Ft.showTooltip({message:this.text,triggerRect:r,variant:"shade"})}}onMouseLeave(t){this.contains(t.relatedTarget)||Ft.hide()}};ps.styles=[Ab];pd([m()],ps.prototype,"text",void 0);pd([_()],ps.prototype,"open",void 0);ps=pd([M("w3m-tooltip-trigger")],ps);const Sb=ne`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var Is=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ri=class extends U{constructor(){super(),this.unsubscribe=[],this.open=Ft.state.open,this.message=Ft.state.message,this.triggerRect=Ft.state.triggerRect,this.variant=Ft.state.variant,this.unsubscribe.push(Ft.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,n=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${n}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,u`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};ri.styles=[Sb];Is([_()],ri.prototype,"open",void 0);Is([_()],ri.prototype,"message",void 0);Is([_()],ri.prototype,"triggerRect",void 0);Is([_()],ri.prototype,"variant",void 0);ri=Is([M("w3m-tooltip")],ri);const Tb=ne`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var gn=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Dt=class extends U{constructor(){super(...arguments),this.unsubscribe=[],this.network=h.state.activeCaipNetwork,this.profileName=h.getAccountData()?.profileName,this.address=h.getAccountData()?.address,this.currentTab=h.getAccountData()?.currentTab,this.tokenBalance=h.getAccountData()?.tokenBalance,this.features=$.state.features,this.namespace=h.state.activeChain,this.activeConnectorIds=D.state.activeConnectorIds,this.remoteFeatures=$.state.remoteFeatures}firstUpdated(){h.fetchTokenBalance(),this.unsubscribe.push(h.subscribeChainProp("accountState",t=>{t?.address?(this.address=t.address,this.profileName=t.profileName,this.currentTab=t.currentTab,this.tokenBalance=t.tokenBalance):Ce.close()}),D.subscribeKey("activeConnectorIds",t=>{this.activeConnectorIds=t}),h.subscribeKey("activeChain",t=>this.namespace=t),h.subscribeKey("activeCaipNetwork",t=>this.network=t),$.subscribeKey("features",t=>this.features=t),$.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw new Error("w3m-account-features-widget: No account provided");if(!this.namespace)return null;const t=this.activeConnectorIds[this.namespace],n=t?D.getConnectorById(t):void 0,{icon:r,iconSize:o}=this.getAuthData();return u`<wui-flex
      flexDirection="column"
      .padding=${["0","3","4","3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${r}
          iconSize=${o}
          alt=${n?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){const t=this.features?.walletFeaturesOrder||Ie.DEFAULT_FEATURES.walletFeaturesOrder;if(t.every(i=>i==="send"||i==="receive"?!this.features?.[i]:i==="swaps"||i==="onramp"?!this.remoteFeatures?.[i]:!0))return null;const r=t.map(i=>i==="receive"||i==="onramp"?"fund":i),o=[...new Set(r)];return u`<wui-flex gap="2">
      ${o.map(i=>{switch(i){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;const t=Ie.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),n=this.features?.receive,r=this.remoteFeatures?.onramp&&t,o=tt.isPayWithExchangeEnabled();return!r&&!n&&!o?null:u`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}swapsTemplate(){const t=this.remoteFeatures?.swaps,n=h.state.activeChain===z.CHAIN.EVM;return!t||!n?null:u`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}sendTemplate(){const t=this.features?.send,n=h.state.activeChain,r=Ie.SEND_SUPPORTED_NAMESPACES.includes(n);return!t||!r?null:u`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>h.fetchTokenBalance(t=>this.onTokenBalanceError(t)),1e4)}onTokenBalanceError(t){t instanceof Error&&t.cause instanceof Response&&t.cause.status===z.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?u`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?u`<w3m-account-activity-widget></w3m-account-activity-widget>`:u`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const t=P.calculateBalance(this.tokenBalance),{dollars:n="0",pennies:r="00"}=P.formatTokenBalance(t);return u`<wui-balance dollars=${n} pennies=${r}></wui-balance>`}return u`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const t=Pi.getTabsByNamespace(h.state.activeChain);return t.length===0?null:u`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${t}
    ></wui-tabs>`}onTabChange(t){h.setAccountProp("currentTab",t,this.namespace)}onFundWalletClick(){T.push("FundWallet")}onSwapClick(){this.network?.caipNetworkId&&!Ie.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?T.push("UnsupportedChain",{swapUnsupportedChain:!0}):(te.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:rt(h.state.activeChain)===De.ACCOUNT_TYPES.SMART_ACCOUNT}}),T.push("Swap"))}getAuthData(){const t=J.getConnectedSocialProvider(),n=J.getConnectedSocialUsername(),o=D.getAuthConnector()?.provider.getEmail()??"";return{name:zt.getAuthName({email:o,socialUsername:n,socialProvider:t}),icon:t??"mail",iconSize:t?"xl":"md"}}onGoToProfileWalletsView(){T.push("ProfileWallets")}onSendClick(){te.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:rt(h.state.activeChain)===De.ACCOUNT_TYPES.SMART_ACCOUNT}}),T.push("WalletSend")}};Dt.styles=Tb;gn([_()],Dt.prototype,"watchTokenBalance",void 0);gn([_()],Dt.prototype,"network",void 0);gn([_()],Dt.prototype,"profileName",void 0);gn([_()],Dt.prototype,"address",void 0);gn([_()],Dt.prototype,"currentTab",void 0);gn([_()],Dt.prototype,"tokenBalance",void 0);gn([_()],Dt.prototype,"features",void 0);gn([_()],Dt.prototype,"namespace",void 0);gn([_()],Dt.prototype,"activeConnectorIds",void 0);gn([_()],Dt.prototype,"remoteFeatures",void 0);Dt=gn([M("w3m-account-wallet-features-widget")],Dt);var fh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Pl=class extends U{constructor(){super(),this.unsubscribe=[],this.namespace=h.state.activeChain,this.unsubscribe.push(h.subscribeKey("activeChain",t=>{this.namespace=t}))}render(){if(!this.namespace)return null;const t=D.getConnectorId(this.namespace),n=D.getAuthConnector();return u`
      ${n&&t===z.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return u`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return u`<w3m-account-default-widget></w3m-account-default-widget>`}};fh([_()],Pl.prototype,"namespace",void 0);Pl=fh([M("w3m-account-view")],Pl);const Nb=ne`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var yi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Xn=class extends U{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="1";return this.size==="lg"?t="4":this.size==="md"?t="2":this.size==="sm"&&(t="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${t});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),u`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?u`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:u`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};Xn.styles=[me,Nb];yi([m()],Xn.prototype,"size",void 0);yi([m()],Xn.prototype,"name",void 0);yi([m()],Xn.prototype,"imageSrc",void 0);yi([m()],Xn.prototype,"walletIcon",void 0);yi([m({type:Boolean})],Xn.prototype,"installed",void 0);yi([m()],Xn.prototype,"badgeSize",void 0);Xn=yi([M("wui-wallet-image")],Xn);const $b=ne`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var Ot=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ht=class extends U{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return u`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return u`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?u`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return u` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?u`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?u`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:u`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return this.content.length===0?null:u`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(t=>this.labelAndTagTemplate(t))}
      </wui-flex>
    `}labelAndTagTemplate({address:t,profileName:n,label:r,description:o,enableButton:i,buttonType:s,buttonLabel:a,buttonVariant:c,tagVariant:l,tagLabel:d,alignItems:g="flex-end"}){return u`
      <wui-flex justifyContent="space-between" alignItems=${g} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${r?u`<wui-text variant="sm-medium" color="secondary">${r}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${ze.getTruncateString({string:n||t,charsStart:n?16:this.charsStart,charsEnd:n?0:this.charsEnd,truncate:n?"end":"middle"})}
            </wui-text>

            ${l&&d?u`<wui-tag variant=${l} size="sm">${d}</wui-tag>`:null}
          </wui-flex>

          ${o?u`<wui-text variant="sm-regular" color="secondary">${o}</wui-text>`:null}
        </wui-flex>

        ${i?this.buttonTemplate({buttonType:s,buttonLabel:a,buttonVariant:c}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:t,buttonLabel:n,buttonVariant:r}){return u`
      <wui-button
        size="sm"
        variant=${r}
        @click=${t==="disconnect"?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${t==="disconnect"?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${n}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};ht.styles=[me,We,$b];Ot([m()],ht.prototype,"address",void 0);Ot([m()],ht.prototype,"profileName",void 0);Ot([m({type:Array})],ht.prototype,"content",void 0);Ot([m()],ht.prototype,"alt",void 0);Ot([m()],ht.prototype,"imageSrc",void 0);Ot([m()],ht.prototype,"icon",void 0);Ot([m()],ht.prototype,"iconSize",void 0);Ot([m()],ht.prototype,"iconBadge",void 0);Ot([m()],ht.prototype,"iconBadgeSize",void 0);Ot([m()],ht.prototype,"buttonVariant",void 0);Ot([m({type:Boolean})],ht.prototype,"enableMoreButton",void 0);Ot([m({type:Number})],ht.prototype,"charsStart",void 0);Ot([m({type:Number})],ht.prototype,"charsEnd",void 0);ht=Ot([M("wui-active-profile-wallet-item")],ht);const Rb=ne`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var ft=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ct=class extends U{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return u`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?u`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?u`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:u`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return u`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${ze.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return u`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${X(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};ct.styles=[me,We,Rb];ft([m()],ct.prototype,"address",void 0);ft([m()],ct.prototype,"profileName",void 0);ft([m()],ct.prototype,"alt",void 0);ft([m()],ct.prototype,"buttonLabel",void 0);ft([m()],ct.prototype,"buttonVariant",void 0);ft([m()],ct.prototype,"imageSrc",void 0);ft([m()],ct.prototype,"icon",void 0);ft([m()],ct.prototype,"iconSize",void 0);ft([m()],ct.prototype,"iconBadge",void 0);ft([m()],ct.prototype,"iconBadgeSize",void 0);ft([m()],ct.prototype,"rightIcon",void 0);ft([m()],ct.prototype,"rightIconSize",void 0);ft([m({type:Boolean})],ct.prototype,"loading",void 0);ft([m({type:Number})],ct.prototype,"charsStart",void 0);ft([m({type:Number})],ct.prototype,"charsEnd",void 0);ct=ft([M("wui-inactive-profile-wallet-item")],ct);const kb=ne`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }
`;var mh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Da=class extends U{constructor(){super(...arguments),this.text=""}render(){return u`${this.template()}`}template(){return this.text?u`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};Da.styles=[me,kb];mh([m()],Da.prototype,"text",void 0);Da=mh([M("wui-separator")],Da);const Pc={getAuthData(e){const t=e.connectorId===z.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const n=e?.auth?.name??J.getConnectedSocialProvider(),r=e?.auth?.username??J.getConnectedSocialUsername(),i=D.getAuthConnector()?.provider.getEmail()??"";return{isAuth:!0,icon:n??"mail",iconSize:n?"xl":"md",name:t?zt.getAuthName({email:i,socialUsername:r,socialProvider:n}):void 0}}},Ib=ne`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e[2]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var Ut=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Wt={ADDRESS_DISPLAY:{START:4,END:6},BADGE:{SIZE:"md",ICON:"lightbulb"},SCROLL_THRESHOLD:50,OPACITY_RANGE:[0,1]},vo={eip155:"ethereum",solana:"solana",bip122:"bitcoin"},Ob=[{namespace:"eip155",icon:vo.eip155,label:"EVM"},{namespace:"solana",icon:vo.solana,label:"Solana"},{namespace:"bip122",icon:vo.bip122,label:"Bitcoin"}],Pb={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"}};let vt=class extends U{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=h.state.activeChain,this.namespaces=Array.from(h.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=D.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=h.state.activeCaipNetwork,this.user=h.getAccountData()?.user,this.remoteFeatures=$.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=h.getAccountData(this.namespace)?.caipAddress,this.profileName=h.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(j.subscribeKey("connections",()=>this.onConnectionsChange()),j.subscribeKey("recentConnections",()=>this.requestUpdate()),D.subscribeKey("activeConnectorIds",t=>{this.activeConnectorIds=t}),h.subscribeKey("activeCaipNetwork",t=>this.caipNetwork=t),h.subscribeChainProp("accountState",t=>{this.user=t?.user}),$.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t)),this.chainListener=h.subscribeChainProp("accountState",t=>{this.caipAddress=t?.caipAddress,this.profileName=t?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(t=>t()),this.resizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){const t=this.shadowRoot?.querySelector(".wallet-list");if(!t)return;const n=()=>this.updateScrollOpacity(t);requestAnimationFrame(n),t.addEventListener("scroll",n),this.resizeObserver=new ResizeObserver(n),this.resizeObserver.observe(t),n()}render(){const t=this.namespace;if(!t)throw new Error("Namespace is not set");return u`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(t)} ${this.renderConnections(t)}
        ${this.renderAddConnectionButton(t)}
      </wui-flex>
    `}renderTabs(){const t=Ob.filter(r=>this.namespaces.includes(r.namespace));return t.length>1?u`
        <wui-tabs
          .onTabChange=${r=>this.handleTabChange(r)}
          .activeTab=${this.currentTab}
          .tabs=${t}
        ></wui-tabs>
      `:null}renderHeader(t){const r=this.getActiveConnections(t).flatMap(({accounts:o})=>o).length+(this.caipAddress?1:0);return u`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${vo[t]??vo.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${r>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${r}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>j.disconnect({namespace:t})}
          ?disabled=${!this.hasAnyConnections(t)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(t){const n=this.hasAnyConnections(t);return u`
      <wui-flex flexDirection="column" class=${ad({"wallet-list":!0,"active-wallets-box":n,"empty-wallet-list-box":!n})} rowgap="3">
        ${n?this.renderActiveConnections(t):this.renderEmptyState(t)}
      </wui-flex>
    `}renderActiveConnections(t){const n=this.getActiveConnections(t),r=this.activeConnectorIds[t],o=this.getPlainAddress();return u`
      ${o||r||n.length>0?u`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(t)} ${this.renderActiveConnectionsList(t)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(t)}
    `}renderActiveProfile(t){const n=this.activeConnectorIds[t];if(!n)return null;const{connections:r}=En.getConnectionsData(t),o=D.getConnectorById(n),i=je.getConnectorImage(o),s=this.getPlainAddress();if(!s)return null;const a=t===z.CHAIN.BITCOIN,c=Pc.getAuthData({connectorId:n,accounts:[]}),l=this.getActiveConnections(t).flatMap(w=>w.accounts).length>0,d=r.find(w=>w.connectorId===n),g=d?.accounts.filter(w=>!bt.isLowerCaseMatch(w.address,s));return u`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${s}
          alt=${o?.name}
          .content=${this.getProfileContent({address:s,connections:r,connectorId:n,namespace:t})}
          .charsStart=${Wt.ADDRESS_DISPLAY.START}
          .charsEnd=${Wt.ADDRESS_DISPLAY.END}
          .icon=${c.icon}
          .iconSize=${c.iconSize}
          .iconBadge=${this.isSmartAccount(s)?Wt.BADGE.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(s)?Wt.BADGE.SIZE:void 0}
          imageSrc=${i}
          ?enableMoreButton=${c.isAuth}
          @copy=${()=>this.handleCopyAddress(s)}
          @disconnect=${()=>this.handleDisconnect(t,n)}
          @switch=${()=>{a&&d&&g?.[0]&&this.handleSwitchWallet(d,g[0].address,t)}}
          @externalLink=${()=>this.handleExternalLink(s)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${l?u`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(t){const n=this.getActiveConnections(t);return n.length===0?null:u`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(n,!1,t)}
      </wui-flex>
    `}renderRecentConnections(t){const{recentConnections:n}=En.getConnectionsData(t);return n.flatMap(o=>o.accounts).length===0?null:u`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(n,!0,t)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(t,n,r){return t.filter(o=>o.accounts.length>0).map((o,i)=>{const s=D.getConnectorById(o.connectorId),a=je.getConnectorImage(s)??"",c=Pc.getAuthData(o);return o.accounts.map((l,d)=>{const g=i!==0||d!==0,w=this.isAccountLoading(o.connectorId,l.address);return u`
            <wui-flex flexDirection="column">
              ${g?u`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${l.address}
                alt=${o.connectorId}
                buttonLabel=${n?"Connect":"Switch"}
                buttonVariant=${n?"neutral-secondary":"accent-secondary"}
                rightIcon=${n?"bin":"power"}
                rightIconSize="sm"
                class=${n?"recent-connection":"active-connection"}
                data-testid=${n?"recent-connection":"active-connection"}
                imageSrc=${a}
                .iconBadge=${this.isSmartAccount(l.address)?Wt.BADGE.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(l.address)?Wt.BADGE.SIZE:void 0}
                .icon=${c.icon}
                .iconSize=${c.iconSize}
                .loading=${w}
                .showBalance=${!1}
                .charsStart=${Wt.ADDRESS_DISPLAY.START}
                .charsEnd=${Wt.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(o,l.address,r)}
                @iconClick=${()=>this.handleWalletAction({connection:o,address:l.address,isRecentConnection:n,namespace:r})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(t){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(t))return null;const{title:n}=this.getChainLabelInfo(t);return u`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(t)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${n}</wui-text>
      </wui-list-item>
    `}renderEmptyState(t){const{title:n,description:r}=this.getChainLabelInfo(t);return u`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${r}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(t)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${n}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(t){const n=this.namespaces[t];n&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(n),this.namespace=n,this.caipAddress=h.getAccountData(n)?.caipAddress,this.profileName=h.getAccountData(n)?.profileName,this.chainListener=h.subscribeChainProp("accountState",r=>{this.caipAddress=r?.caipAddress},n))}async handleSwitchWallet(t,n,r){try{this.isSwitching=!0,this.lastSelectedConnectorId=t.connectorId,this.lastSelectedAddress=n,this.caipNetwork?.chainNamespace!==r&&t?.caipNetwork&&(D.setFilterByNamespace(r),await h.switchActiveNetwork(t?.caipNetwork)),await j.switchConnection({connection:t,address:n,namespace:r,closeModalOnConnect:!1,onChange({hasSwitchedAccount:i,hasSwitchedWallet:s}){s?$e.showSuccess("Wallet switched"):i&&$e.showSuccess("Account switched")}})}catch{$e.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(t){const{connection:n,address:r,isRecentConnection:o,namespace:i}=t;o?(J.deleteAddressFromConnection({connectorId:n.connectorId,address:r,namespace:i}),j.syncStorageConnections(),$e.showSuccess("Wallet deleted")):this.handleDisconnect(i,n.connectorId)}async handleDisconnect(t,n){try{await j.disconnect({id:n,namespace:t}),$e.showSuccess("Wallet disconnected")}catch{$e.showError("Failed to disconnect wallet")}}handleCopyAddress(t){P.copyToClopboard(t),$e.showSuccess("Address copied")}handleMore(){T.push("AccountSettings")}handleExternalLink(t){const n=this.caipNetwork?.blockExplorers?.default.url;n&&P.openHref(`${n}/address/${t}`,"_blank")}handleAddConnection(t){D.setFilterByNamespace(t),T.push("Connect",{addWalletForNamespace:t})}getChainLabelInfo(t){return Pb[t]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(t){if(!this.namespace)return!1;const n=this.user?.accounts?.find(r=>r.type==="smartAccount");return n&&t?bt.isLowerCaseMatch(n.address,t):!1}getPlainAddress(){return this.caipAddress?P.getPlainAddress(this.caipAddress):void 0}getActiveConnections(t){const n=this.activeConnectorIds[t],{connections:r}=En.getConnectionsData(t),[o]=r.filter(c=>bt.isLowerCaseMatch(c.connectorId,n));if(!n)return r;const i=t===z.CHAIN.BITCOIN,{address:s}=this.caipAddress?sn.parseCaipAddress(this.caipAddress):{};let a=[...s?[s]:[]];return i&&o&&(a=o.accounts.map(c=>c.address)||[]),En.excludeConnectorAddressFromConnections({connectorId:n,addresses:a,connections:r})}hasAnyConnections(t){const n=this.getActiveConnections(t),{recentConnections:r}=En.getConnectionsData(t);return!!this.caipAddress||n.length>0||r.length>0}isAccountLoading(t,n){return bt.isLowerCaseMatch(this.lastSelectedConnectorId,t)&&bt.isLowerCaseMatch(this.lastSelectedAddress,n)&&this.isSwitching}getProfileContent(t){const{address:n,connections:r,connectorId:o,namespace:i}=t,[s]=r.filter(c=>bt.isLowerCaseMatch(c.connectorId,o));if(i===z.CHAIN.BITCOIN&&s?.accounts.every(c=>typeof c.type=="string"))return this.getBitcoinProfileContent(s.accounts,n);const a=Pc.getAuthData({connectorId:o,accounts:[]});return[{address:n,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...a.isAuth?{description:this.isSmartAccount(n)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(t,n){const r=t.length>1,o=this.getPlainAddress();return t.map(i=>{const s=bt.isLowerCaseMatch(i.address,o);let a="PAYMENT";return i.type==="ordinal"&&(a="ORDINALS"),{address:i.address,tagLabel:bt.isLowerCaseMatch(i.address,n)?"Active":void 0,tagVariant:bt.isLowerCaseMatch(i.address,n)?"success":void 0,enableButton:!0,...r?{label:a,alignItems:"flex-end",buttonType:s?"disconnect":"switch",buttonLabel:s?"Disconnect":"Switch",buttonVariant:s?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}})}removeScrollListener(){const t=this.shadowRoot?.querySelector(".wallet-list");t&&t.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){const t=this.shadowRoot?.querySelector(".wallet-list");t&&this.updateScrollOpacity(t)}isMultiWalletEnabled(){return!!this.remoteFeatures?.multiWallet}updateScrollOpacity(t){t.style.setProperty("--connect-scroll--top-opacity",$a.interpolate([0,Wt.SCROLL_THRESHOLD],Wt.OPACITY_RANGE,t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",$a.interpolate([0,Wt.SCROLL_THRESHOLD],Wt.OPACITY_RANGE,t.scrollHeight-t.scrollTop-t.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:t}=En.getConnectionsData(this.namespace);t.length===0&&T.reset("ProfileWallets")}this.requestUpdate()}};vt.styles=Ib;Ut([_()],vt.prototype,"currentTab",void 0);Ut([_()],vt.prototype,"namespace",void 0);Ut([_()],vt.prototype,"namespaces",void 0);Ut([_()],vt.prototype,"caipAddress",void 0);Ut([_()],vt.prototype,"profileName",void 0);Ut([_()],vt.prototype,"activeConnectorIds",void 0);Ut([_()],vt.prototype,"lastSelectedAddress",void 0);Ut([_()],vt.prototype,"lastSelectedConnectorId",void 0);Ut([_()],vt.prototype,"isSwitching",void 0);Ut([_()],vt.prototype,"caipNetwork",void 0);Ut([_()],vt.prototype,"user",void 0);Ut([_()],vt.prototype,"remoteFeatures",void 0);vt=Ut([M("w3m-profile-wallets-view")],vt);var to=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ii=class extends U{constructor(){super(),this.unsubscribe=[],this.activeCaipNetwork=h.state.activeCaipNetwork,this.features=$.state.features,this.remoteFeatures=$.state.remoteFeatures,this.exchangesLoading=tt.state.isLoading,this.exchanges=tt.state.exchanges,this.unsubscribe.push($.subscribeKey("features",t=>this.features=t),$.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t),h.subscribeKey("activeCaipNetwork",t=>{this.activeCaipNetwork=t,this.setDefaultPaymentAsset()}),tt.subscribeKey("isLoading",t=>this.exchangesLoading=t),tt.subscribeKey("exchanges",t=>this.exchanges=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}async firstUpdated(){tt.isPayWithExchangeSupported()&&(await this.setDefaultPaymentAsset(),await tt.fetchExchanges())}render(){return u`
      <wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}async setDefaultPaymentAsset(){if(!this.activeCaipNetwork)return;const t=await tt.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),n=t.find(r=>r.metadata.symbol==="USDC")||t[0];n&&tt.setPaymentAsset(n)}onrampTemplate(){if(!this.activeCaipNetwork)return null;const t=this.remoteFeatures?.onramp,n=Ie.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);return!t||!n?null:u`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `}depositFromExchangeTemplate(){return!this.activeCaipNetwork||!tt.isPayWithExchangeSupported()?null:u`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading||!this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `}receiveTemplate(){return!this.features?.receive?null:u`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `}onBuyCrypto(){T.push("OnRampProviders")}onReceive(){T.push("WalletReceive")}onDepositFromExchange(){tt.reset(),T.push("PayWithExchange",{redirectView:T.state.data?.redirectView})}};to([_()],ii.prototype,"activeCaipNetwork",void 0);to([_()],ii.prototype,"features",void 0);to([_()],ii.prototype,"remoteFeatures",void 0);to([_()],ii.prototype,"exchangesLoading",void 0);to([_()],ii.prototype,"exchanges",void 0);ii=to([M("w3m-fund-wallet-view")],ii);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lb=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Co=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const r of n)r._$AO?.(t,!1),Co(r,t);return!0},Ma=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},gh=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ub(t)}};function Db(e){this._$AN!==void 0?(Ma(this),this._$AM=e,gh(this)):this._$AM=e}function Mb(e,t=!1,n=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(r))for(let i=n;i<r.length;i++)Co(r[i],!1),Ma(r[i]);else r!=null&&(Co(r,!1),Ma(r));else Co(this,e)}const Ub=e=>{e.type==lh.CHILD&&(e._$AP??=Mb,e._$AQ??=Db)};class Bb extends uh{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),gh(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(Co(this,t),Ma(this))}setValue(t){if(Lb(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Os=()=>new Wb;class Wb{}const Lc=new WeakMap,Ps=dh(class extends Bb{render(e){return Je}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Je}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Lc.get(t);n===void 0&&(n=new WeakMap,Lc.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Lc.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),jb=ne`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var uc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Vi=class extends U{constructor(){super(...arguments),this.inputElementRef=Os(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return u`
      <label data-size=${this.size}>
        <input
          ${Ps(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};Vi.styles=[me,We,jb];uc([m({type:Boolean})],Vi.prototype,"checked",void 0);uc([m({type:Boolean})],Vi.prototype,"disabled",void 0);uc([m()],Vi.prototype,"size",void 0);Vi=uc([M("wui-toggle")],Vi);const Fb=ne`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var wh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ua=class extends U{constructor(){super(...arguments),this.checked=!1}render(){return u`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(t){t.stopPropagation(),this.checked=t.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};Ua.styles=[me,We,Fb];wh([m({type:Boolean})],Ua.prototype,"checked",void 0);Ua=wh([M("wui-certified-switch")],Ua);const zb=ne`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var Jt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Nt=class extends U{constructor(){super(...arguments),this.inputElementRef=Os(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return u` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${Ps(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${X(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?u`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?u`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?u`<wui-icon name="spinner" size="md"></wui-icon>`:u`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?u`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?u`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Nt.styles=[me,We,zb];Jt([m()],Nt.prototype,"icon",void 0);Jt([m({type:Boolean})],Nt.prototype,"disabled",void 0);Jt([m({type:Boolean})],Nt.prototype,"loading",void 0);Jt([m()],Nt.prototype,"placeholder",void 0);Jt([m()],Nt.prototype,"type",void 0);Jt([m()],Nt.prototype,"value",void 0);Jt([m()],Nt.prototype,"errorText",void 0);Jt([m()],Nt.prototype,"warningText",void 0);Jt([m()],Nt.prototype,"onSubmit",void 0);Jt([m()],Nt.prototype,"size",void 0);Jt([m({attribute:!1})],Nt.prototype,"onKeyDown",void 0);Nt=Jt([M("wui-input-text")],Nt);const Hb=ne`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var bh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ba=class extends U{constructor(){super(...arguments),this.inputComponentRef=Os(),this.inputValue=""}render(){return u`
      <wui-input-text
        ${Ps(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?u`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(t){this.inputValue=t.detail||""}clearValue(){const n=this.inputComponentRef.value?.inputElementRef.value;n&&(n.value="",this.inputValue="",n.focus(),n.dispatchEvent(new Event("input")))}};Ba.styles=[me,Hb];bh([m()],Ba.prototype,"inputValue",void 0);Ba=bh([M("wui-search-bar")],Ba);const yh=we`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Vb=ne`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var vh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Wa=class extends U{constructor(){super(...arguments),this.type="wallet"}render(){return u`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?u` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${yh}`:u`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};Wa.styles=[me,We,Vb];vh([m()],Wa.prototype,"type",void 0);Wa=vh([M("wui-card-select-loader")],Wa);const qb=Fe`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Xt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let $t=class extends U{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&ze.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ze.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ze.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ze.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ze.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ze.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ze.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ze.getSpacingStyles(this.margin,3)};
    `,u`<slot></slot>`}};$t.styles=[me,qb];Xt([m()],$t.prototype,"gridTemplateRows",void 0);Xt([m()],$t.prototype,"gridTemplateColumns",void 0);Xt([m()],$t.prototype,"justifyItems",void 0);Xt([m()],$t.prototype,"alignItems",void 0);Xt([m()],$t.prototype,"justifyContent",void 0);Xt([m()],$t.prototype,"alignContent",void 0);Xt([m()],$t.prototype,"columnGap",void 0);Xt([m()],$t.prototype,"rowGap",void 0);Xt([m()],$t.prototype,"gap",void 0);Xt([m()],$t.prototype,"padding",void 0);Xt([m()],$t.prototype,"margin",void 0);$t=Xt([M("wui-grid")],$t);const Kb=ne`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Mn=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Gt=class extends U{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const t=this.wallet?.badge_type==="certified";return u`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${X(t?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${t?u`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():u`
      <wui-wallet-image
        size="lg"
        imageSrc=${X(this.imageSrc)}
        name=${X(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return u`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=je.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await je.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,te.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:T.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};Gt.styles=Kb;Mn([_()],Gt.prototype,"visible",void 0);Mn([_()],Gt.prototype,"imageSrc",void 0);Mn([_()],Gt.prototype,"imageLoading",void 0);Mn([_()],Gt.prototype,"isImpressed",void 0);Mn([m()],Gt.prototype,"explorerId",void 0);Mn([m()],Gt.prototype,"walletQuery",void 0);Mn([m()],Gt.prototype,"certified",void 0);Mn([m()],Gt.prototype,"displayIndex",void 0);Mn([m({type:Object})],Gt.prototype,"wallet",void 0);Gt=Mn([M("w3m-all-wallets-list-item")],Gt);const Gb=ne`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var _r=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Ru="local-paginator";let $n=class extends U{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!Z.state.wallets.length,this.wallets=Z.state.wallets,this.recommended=Z.state.recommended,this.featured=Z.state.featured,this.filteredWallets=Z.state.filteredWallets,this.mobileFullScreen=$.state.enableMobileFullScreen,this.unsubscribe.push(Z.subscribeKey("wallets",t=>this.wallets=t),Z.subscribeKey("recommended",t=>this.recommended=t),Z.subscribeKey("featured",t=>this.featured=t),Z.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),u`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const t=this.shadowRoot?.querySelector("wui-grid");t&&(await Z.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,n){return[...Array(t)].map(()=>u`
        <wui-card-select-loader type="wallet" id=${X(n)}></wui-card-select-loader>
      `)}getWallets(){const t=[...this.featured,...this.recommended];this.filteredWallets?.length>0?t.push(...this.filteredWallets):t.push(...this.wallets);const n=P.uniqueBy(t,"id"),r=Vn.markWalletsAsInstalled(n);return Vn.markWalletsWithDisplayIndex(r)}walletsTemplate(){return this.getWallets().map((n,r)=>u`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${n.id}"
          @click=${()=>this.onConnectWallet(n)}
          .wallet=${n}
          explorerId=${n.id}
          certified=${this.badge==="certified"}
          displayIndex=${r}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:n,featured:r,count:o,mobileFilteredOutWalletsLength:i}=Z.state,s=window.innerWidth<352?3:4,a=t.length+n.length;let l=Math.ceil(a/s)*s-a+s;return l-=t.length?r.length%s:0,o===0&&r.length>0?null:o===0||[...r,...t,...n].length<o-(i??0)?this.shimmerTemplate(l,Ru):null}createPaginationObserver(){const t=this.shadowRoot?.querySelector(`#${Ru}`);t&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n?.isIntersecting&&!this.loading){const{page:r,count:o,wallets:i}=Z.state;i.length<o&&Z.fetchWalletsByPage({page:r+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){D.selectWalletConnector(t)}};$n.styles=Gb;_r([_()],$n.prototype,"loading",void 0);_r([_()],$n.prototype,"wallets",void 0);_r([_()],$n.prototype,"recommended",void 0);_r([_()],$n.prototype,"featured",void 0);_r([_()],$n.prototype,"filteredWallets",void 0);_r([_()],$n.prototype,"badge",void 0);_r([_()],$n.prototype,"mobileFullScreen",void 0);$n=_r([M("w3m-all-wallets-list")],$n);const Zb=Fe`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Ls=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let oi=class extends U{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=$.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?u`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await Z.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=Z.state,n=Vn.markWalletsAsInstalled(t);return t.length?u`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${n.map((r,o)=>u`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(r)}
              .wallet=${r}
              data-testid="wallet-search-item-${r.id}"
              explorerId=${r.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
              displayIndex=${o}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:u`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){D.selectWalletConnector(t)}};oi.styles=Zb;Ls([_()],oi.prototype,"loading",void 0);Ls([_()],oi.prototype,"mobileFullScreen",void 0);Ls([m()],oi.prototype,"query",void 0);Ls([m()],oi.prototype,"badge",void 0);oi=Ls([M("w3m-all-wallets-search")],oi);var hd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ja=class extends U{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=P.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return u`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?u`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:u`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onCertifiedSwitchChange(t){t.detail?(this.badge="certified",$e.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return P.isMobile()?u`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){T.push("ConnectingWalletConnect")}};hd([_()],ja.prototype,"search",void 0);hd([_()],ja.prototype,"badge",void 0);ja=hd([M("w3m-all-wallets-view")],ja);const Yb=ne`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var no=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let wr=class extends U{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;const t=`${this.size}-regular`;return u`
      <button ?disabled=${this.disabled} tabindex=${X(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${t} color="primary">${this.text}</wui-text>
      </button>
    `}};wr.styles=[me,We,Yb];no([m()],wr.prototype,"text",void 0);no([m({type:Boolean})],wr.prototype,"disabled",void 0);no([m()],wr.prototype,"size",void 0);no([m()],wr.prototype,"icon",void 0);no([m()],wr.prototype,"tabIdx",void 0);wr=no([M("wui-list-button")],wr);const Jb=Fe`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var Ds=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let si=class extends U{constructor(){super(...arguments),this.disabled=!1}render(){return u`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${X(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?u`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};si.styles=[me,Jb];Ds([m()],si.prototype,"errorMessage",void 0);Ds([m({type:Boolean})],si.prototype,"disabled",void 0);Ds([m()],si.prototype,"value",void 0);Ds([m()],si.prototype,"tabIdx",void 0);si=Ds([M("wui-email-input")],si);const Xb=ne`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e[3]};
  }

  wui-text {
    margin: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[0]} ${({spacing:e})=>e[3]};
  }
`;var vi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Qn=class extends U{constructor(){super(),this.unsubscribe=[],this.formRef=Os(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=$.state.remoteFeatures,this.hasExceededUsageLimit=Z.state.plan.hasExceededUsageLimit,this.unsubscribe.push($.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t}),Z.subscribeKey("plan",t=>this.hasExceededUsageLimit=t.hasExceededUsageLimit))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.formRef.value?.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){const t=j.hasAnyConnection(z.CONNECTOR_ID.AUTH);return u`
      <form ${Ps(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${X(this.tabIdx)}
          ?disabled=${t||this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?u`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?u`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?u`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(t){this.email=t.detail.trim(),this.error=""}async onSubmitEmail(t){if(!Pi.isValidEmail(this.email)){Qp.open({displayMessage:u2.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning");return}if(!z.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(r=>r===h.state.activeChain)){const r=h.getFirstCaipNetworkSupportsAuthConnector();if(r){T.push("SwitchNetwork",{network:r});return}}try{if(this.loading)return;this.loading=!0,t.preventDefault();const r=D.getAuthConnector();if(!r)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:o}=await r.provider.connectEmail({email:this.email});if(te.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),o==="VERIFY_OTP")te.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),T.push("EmailVerifyOtp",{email:this.email});else if(o==="VERIFY_DEVICE")T.push("EmailVerifyDevice",{email:this.email});else if(o==="CONNECT"){const i=this.remoteFeatures?.multiWallet;await j.connectExternal(r,h.state.activeChain),i?(T.replace("ProfileWallets"),$e.showSuccess("New Wallet Added")):T.replace("Account")}}catch(r){P.parseError(r)?.includes("Invalid email")?this.error="Invalid email. Try again.":$e.showError(r)}finally{this.loading=!1}}onFocusEvent(){te.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Qn.styles=Xb;vi([m()],Qn.prototype,"tabIdx",void 0);vi([_()],Qn.prototype,"email",void 0);vi([_()],Qn.prototype,"loading",void 0);vi([_()],Qn.prototype,"error",void 0);vi([_()],Qn.prototype,"remoteFeatures",void 0);vi([_()],Qn.prototype,"hasExceededUsageLimit",void 0);Qn=vi([M("w3m-email-login-widget")],Qn);const Qb=ne`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:e})=>e[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:e})=>e.neutrals400};
    color: ${({colors:e})=>e.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:e})=>e.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:e})=>e[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:e})=>e.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:e})=>e.neutrals700};
    background-color: ${({colors:e})=>e.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:e})=>e.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:e})=>e.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var pc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const ey={lg:"md",md:"sm",sm:"sm"};let qi=class extends U{constructor(){super(...arguments),this.inputElementRef=Os(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){const t=ey[this.size];return u`
      <label data-size=${this.size}>
        <input
          ${Ps(this.inputElementRef)}
          ?checked=${X(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${t}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};qi.styles=[me,Qb];pc([m({type:Boolean})],qi.prototype,"checked",void 0);pc([m({type:Boolean})],qi.prototype,"disabled",void 0);pc([m()],qi.prototype,"size",void 0);qi=pc([M("wui-checkbox")],qi);const ty=ne`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:e})=>e[3]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.theme.textSecondary};
    font-weight: 500;
  }
`;var Ch=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Fa=class extends U{constructor(){super(),this.unsubscribe=[],this.checked=Br.state.isLegalCheckboxChecked,this.unsubscribe.push(Br.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=$.state,r=$.state.features?.legalCheckbox;return!t&&!n||!r?null:u`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=$.state;return t&&n?"and":""}termsTemplate(){const{termsConditionsUrl:t}=$.state;return t?u`<a rel="noreferrer" target="_blank" href=${t}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=$.state;return t?u`<a rel="noreferrer" target="_blank" href=${t}>privacy policy</a>`:null}onCheckboxChange(){Br.setIsLegalCheckboxChecked(!this.checked)}};Fa.styles=[ty];Ch([_()],Fa.prototype,"checked",void 0);Fa=Ch([M("w3m-legal-checkbox")],Fa);const ny=ne`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Eh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let za=class extends U{constructor(){super(...arguments),this.logo="google"}render(){return u`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};za.styles=[me,ny];Eh([m()],za.prototype,"logo",void 0);za=Eh([M("wui-logo")],za);const ry=ne`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Ms=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ai=class extends U{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return u`
      <button ?disabled=${this.disabled} tabindex=${X(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};ai.styles=[me,We,ry];Ms([m()],ai.prototype,"logo",void 0);Ms([m()],ai.prototype,"name",void 0);Ms([m()],ai.prototype,"tabIdx",void 0);Ms([m({type:Boolean})],ai.prototype,"disabled",void 0);ai=Ms([M("wui-list-social")],ai);const iy=ne`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;var hc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ki=class extends U{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return u`
      <button ?disabled=${this.disabled} tabindex=${X(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};Ki.styles=[me,We,iy];hc([m()],Ki.prototype,"logo",void 0);hc([m({type:Boolean})],Ki.prototype,"disabled",void 0);hc([m()],Ki.prototype,"tabIdx",void 0);Ki=hc([M("wui-logo-select")],Ki);const oy=ne`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var xr=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const ku=2,Iu=6;let Rn=class extends U{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=D.state.connectors,this.remoteFeatures=$.state.remoteFeatures,this.authConnector=this.connectors.find(t=>t.type==="AUTH"),this.isPwaLoading=!1,this.hasExceededUsageLimit=Z.state.plan.hasExceededUsageLimit,this.unsubscribe.push(D.subscribeKey("connectors",t=>{this.connectors=t,this.authConnector=this.connectors.find(n=>n.type==="AUTH")}),$.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t),Z.subscribeKey("plan",t=>this.hasExceededUsageLimit=t.hasExceededUsageLimit))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){const t=this.walletGuide==="explore";let n=this.remoteFeatures?.socials;return!n&&t?(n=Ie.DEFAULT_SOCIALS,this.renderTopViewContent(n)):n?this.renderTopViewContent(n):null}renderTopViewContent(t){return t.length===2?u` <wui-flex gap="2">
        ${t.slice(0,ku).map(n=>u`<wui-logo-select
              data-testid=${`social-selector-${n}`}
              @click=${()=>{this.onSocialClick(n)}}
              logo=${n}
              tabIdx=${X(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:u` <wui-list-button
      data-testid=${`social-selector-${t[0]}`}
      @click=${()=>{this.onSocialClick(t[0])}}
      size="lg"
      icon=${X(t[0])}
      text=${`Continue with ${ze.capitalize(t[0])}`}
      tabIdx=${X(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){let t=this.remoteFeatures?.socials;const n=this.walletGuide==="explore";return(!this.authConnector||!t||t.length===0)&&n&&(t=Ie.DEFAULT_SOCIALS),!t||t.length<=ku?null:t&&t.length>Iu?u`<wui-flex gap="2">
        ${t.slice(1,Iu-1).map(o=>u`<wui-logo-select
              data-testid=${`social-selector-${o}`}
              @click=${()=>{this.onSocialClick(o)}}
              logo=${o}
              tabIdx=${X(this.tabIdx)}
              ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${X(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:t?u`<wui-flex gap="2">
      ${t.slice(1,t.length).map(o=>u`<wui-logo-select
            data-testid=${`social-selector-${o}`}
            @click=${()=>{this.onSocialClick(o)}}
            logo=${o}
            tabIdx=${X(this.tabIdx)}
            ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){T.push("ConnectSocials")}async onSocialClick(t){if(this.hasExceededUsageLimit){T.push("UsageExceeded");return}if(!z.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(r=>r===h.state.activeChain)){const r=h.getFirstCaipNetworkSupportsAuthConnector();if(r){T.push("SwitchNetwork",{network:r});return}}t&&await c2(t)}async handlePwaFrameLoad(){if(P.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof h1&&await this.authConnector.provider.init()}catch(t){Qp.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:t.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return j.hasAnyConnection(z.CONNECTOR_ID.AUTH)}};Rn.styles=oy;xr([m()],Rn.prototype,"walletGuide",void 0);xr([m()],Rn.prototype,"tabIdx",void 0);xr([_()],Rn.prototype,"connectors",void 0);xr([_()],Rn.prototype,"remoteFeatures",void 0);xr([_()],Rn.prototype,"authConnector",void 0);xr([_()],Rn.prototype,"isPwaLoading",void 0);xr([_()],Rn.prototype,"hasExceededUsageLimit",void 0);Rn=xr([M("w3m-social-login-widget")],Rn);const sy=ne`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var _h=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Dc=4;let Ha=class extends U{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<Dc;return u`${this.walletImages.slice(0,Dc).map(({src:n,walletName:r})=>u`
          <wui-wallet-image
            size="sm"
            imageSrc=${n}
            name=${X(r)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(Dc-this.walletImages.length)].map(()=>u` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};Ha.styles=[me,sy];_h([m({type:Array})],Ha.prototype,"walletImages",void 0);Ha=_h([M("wui-all-wallets-image")],Ha);const ay=ne`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }
`;var Bt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ct=class extends U{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,u`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${X(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?u` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?u` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?u`<wui-wallet-image
        size=${X(this.size==="sm"?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?u`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?u`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?u`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};Ct.styles=[me,We,ay];Bt([m({type:Array})],Ct.prototype,"walletImages",void 0);Bt([m()],Ct.prototype,"imageSrc",void 0);Bt([m()],Ct.prototype,"name",void 0);Bt([m()],Ct.prototype,"size",void 0);Bt([m()],Ct.prototype,"tagLabel",void 0);Bt([m()],Ct.prototype,"tagVariant",void 0);Bt([m()],Ct.prototype,"walletIcon",void 0);Bt([m()],Ct.prototype,"tabIdx",void 0);Bt([m({type:Boolean})],Ct.prototype,"disabled",void 0);Bt([m({type:Boolean})],Ct.prototype,"showAllWallets",void 0);Bt([m({type:Boolean})],Ct.prototype,"loading",void 0);Bt([m({type:String})],Ct.prototype,"loadingSpinnerColor",void 0);Ct=Bt([M("wui-list-wallet")],Ct);var ro=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ci=class extends U{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=D.state.connectors,this.count=Z.state.count,this.filteredCount=Z.state.filteredWallets.length,this.isFetchingRecommendedWallets=Z.state.isFetchingRecommendedWallets,this.unsubscribe.push(D.subscribeKey("connectors",t=>this.connectors=t),Z.subscribeKey("count",t=>this.count=t),Z.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),Z.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(l=>l.id==="walletConnect"),{allWallets:n}=$.state;if(!t||n==="HIDE"||n==="ONLY_MOBILE"&&!P.isMobile())return null;const r=Z.state.featured.length,o=this.count+r,i=o<10?o:Math.floor(o/10)*10,s=this.filteredCount>0?this.filteredCount:i;let a=`${s}`;this.filteredCount>0?a=`${this.filteredCount}`:s<o&&(a=`${s}+`);const c=j.hasAnyConnection(z.CONNECTOR_ID.WALLET_CONNECT);return u`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${X(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${c}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){te.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),T.push("AllWallets",{redirectView:T.state.data?.redirectView})}};ro([m()],ci.prototype,"tabIdx",void 0);ro([_()],ci.prototype,"connectors",void 0);ro([_()],ci.prototype,"count",void 0);ro([_()],ci.prototype,"filteredCount",void 0);ro([_()],ci.prototype,"isFetchingRecommendedWallets",void 0);ci=ro([M("w3m-all-wallets-widget")],ci);const cy=ne`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var rr=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let pn=class extends U{constructor(){super(),this.unsubscribe=[],this.connectors=D.state.connectors,this.recommended=Z.state.recommended,this.featured=Z.state.featured,this.explorerWallets=Z.state.explorerWallets,this.connections=j.state.connections,this.connectorImages=nt.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(D.subscribeKey("connectors",t=>this.connectors=t),j.subscribeKey("connections",t=>this.connections=t),nt.subscribeKey("connectorImages",t=>this.connectorImages=t),Z.subscribeKey("recommended",t=>this.recommended=t),Z.subscribeKey("featured",t=>this.featured=t),Z.subscribeKey("explorerFilteredWallets",t=>{this.explorerWallets=t?.length?t:Z.state.explorerWallets}),Z.subscribeKey("explorerWallets",t=>{this.explorerWallets?.length||(this.explorerWallets=t)})),P.isTelegram()&&P.isIos()&&(this.loadingTelegram=!j.state.wcUri,this.unsubscribe.push(j.subscribeKey("wcUri",t=>this.loadingTelegram=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(t,n){return t.map(r=>{if(r.type==="MULTI_CHAIN"&&r.connectors){const i=r.connectors.map(l=>l.id),s=r.connectors.map(l=>l.name),a=r.connectors.map(l=>l.info?.rdns),c=n?.find(l=>i.includes(l.id)||s.includes(l.name)||l.rdns&&(a.includes(l.rdns)||i.includes(l.rdns)));return r.explorerWallet=c??r.explorerWallet,r}const o=n?.find(i=>i.id===r.id||i.rdns===r.info?.rdns||i.name===r.name);return r.explorerWallet=o??r.explorerWallet,r})}processConnectorsByType(t,n=!0){const r=zt.sortConnectorsByExplorerWallet([...t]);return n?r.filter(zt.showConnector):r}connectorListTemplate(){const t=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),n=zt.getConnectorsByType(t,this.recommended,this.featured),r=this.processConnectorsByType(n.announced.filter(v=>v.id!=="walletConnect")),o=this.processConnectorsByType(n.injected),i=this.processConnectorsByType(n.multiChain.filter(v=>v.name!=="WalletConnect"),!1),s=n.custom,a=n.recent,c=this.processConnectorsByType(n.external.filter(v=>v.id!==z.CONNECTOR_ID.COINBASE_SDK)),l=n.recommended,d=n.featured,g=zt.getConnectorTypeOrder({custom:s,recent:a,announced:r,injected:o,multiChain:i,recommended:l,featured:d,external:c}),w=this.connectors.find(v=>v.id==="walletConnect"),y=P.isMobile(),E=[];for(const v of g)switch(v){case"walletConnect":{!y&&w&&E.push({kind:"connector",subtype:"walletConnect",connector:w});break}case"recent":{zt.getFilteredRecentWallets().forEach(I=>E.push({kind:"wallet",subtype:"recent",wallet:I}));break}case"injected":{i.forEach(x=>E.push({kind:"connector",subtype:"multiChain",connector:x})),r.forEach(x=>E.push({kind:"connector",subtype:"announced",connector:x})),o.forEach(x=>E.push({kind:"connector",subtype:"injected",connector:x}));break}case"featured":{d.forEach(x=>E.push({kind:"wallet",subtype:"featured",wallet:x}));break}case"custom":{zt.getFilteredCustomWallets(s??[]).forEach(I=>E.push({kind:"wallet",subtype:"custom",wallet:I}));break}case"external":{c.forEach(x=>E.push({kind:"connector",subtype:"external",connector:x}));break}case"recommended":{zt.getCappedRecommendedWallets(l).forEach(I=>E.push({kind:"wallet",subtype:"recommended",wallet:I}));break}default:console.warn(`Unknown connector type: ${v}`)}return E.map((v,x)=>v.kind==="connector"?this.renderConnector(v,x):this.renderWallet(v,x))}renderConnector(t,n){const r=t.connector,o=je.getConnectorImage(r)||this.connectorImages[r?.imageId??""],s=(this.connections.get(r.chain)??[]).some(g=>bt.isLowerCaseMatch(g.connectorId,r.id));let a,c;t.subtype==="multiChain"?(a="multichain",c="info"):t.subtype==="walletConnect"?(a="qr code",c="accent"):t.subtype==="injected"||t.subtype==="announced"?(a=s?"connected":"installed",c=s?"info":"success"):(a=void 0,c=void 0);const l=j.hasAnyConnection(z.CONNECTOR_ID.WALLET_CONNECT),d=t.subtype==="walletConnect"||t.subtype==="external"?l:!1;return u`
      <w3m-list-wallet
        displayIndex=${n}
        imageSrc=${X(o)}
        .installed=${!0}
        name=${r.name??"Unknown"}
        .tagVariant=${c}
        tagLabel=${X(a)}
        data-testid=${`wallet-selector-${r.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(t)}
        tabIdx=${X(this.tabIdx)}
        ?disabled=${d}
        rdnsId=${X(r.explorerWallet?.rdns||void 0)}
        walletRank=${X(r.explorerWallet?.order)}
      >
      </w3m-list-wallet>
    `}onClickConnector(t){const n=T.state.data?.redirectView;if(t.subtype==="walletConnect"){D.setActiveConnector(t.connector),P.isMobile()?T.push("AllWallets"):T.push("ConnectingWalletConnect",{redirectView:n});return}if(t.subtype==="multiChain"){D.setActiveConnector(t.connector),T.push("ConnectingMultiChain",{redirectView:n});return}if(t.subtype==="injected"){D.setActiveConnector(t.connector),T.push("ConnectingExternal",{connector:t.connector,redirectView:n,wallet:t.connector.explorerWallet});return}if(t.subtype==="announced"){if(t.connector.id==="walletConnect"){P.isMobile()?T.push("AllWallets"):T.push("ConnectingWalletConnect",{redirectView:n});return}T.push("ConnectingExternal",{connector:t.connector,redirectView:n,wallet:t.connector.explorerWallet});return}T.push("ConnectingExternal",{connector:t.connector,redirectView:n})}renderWallet(t,n){const r=t.wallet,o=je.getWalletImage(r),s=j.hasAnyConnection(z.CONNECTOR_ID.WALLET_CONNECT),a=this.loadingTelegram,c=t.subtype==="recent"?"recent":void 0,l=t.subtype==="recent"?"info":void 0;return u`
      <w3m-list-wallet
        displayIndex=${n}
        imageSrc=${X(o)}
        name=${r.name??"Unknown"}
        @click=${()=>this.onClickWallet(t)}
        size="sm"
        data-testid=${`wallet-selector-${r.id}`}
        tabIdx=${X(this.tabIdx)}
        ?loading=${a}
        ?disabled=${s}
        rdnsId=${X(r.rdns||void 0)}
        walletRank=${X(r.order)}
        tagLabel=${X(c)}
        .tagVariant=${l}
      >
      </w3m-list-wallet>
    `}onClickWallet(t){const n=T.state.data?.redirectView;if(t.subtype==="featured"){D.selectWalletConnector(t.wallet);return}if(t.subtype==="recent"){if(this.loadingTelegram)return;D.selectWalletConnector(t.wallet);return}if(t.subtype==="custom"){if(this.loadingTelegram)return;T.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:n});return}if(this.loadingTelegram)return;const r=D.getConnector({id:t.wallet.id,rdns:t.wallet.rdns});r?T.push("ConnectingExternal",{connector:r,redirectView:n}):T.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:n})}};pn.styles=cy;rr([m({type:Number})],pn.prototype,"tabIdx",void 0);rr([_()],pn.prototype,"connectors",void 0);rr([_()],pn.prototype,"recommended",void 0);rr([_()],pn.prototype,"featured",void 0);rr([_()],pn.prototype,"explorerWallets",void 0);rr([_()],pn.prototype,"connections",void 0);rr([_()],pn.prototype,"connectorImages",void 0);rr([_()],pn.prototype,"loadingTelegram",void 0);pn=rr([M("w3m-connector-list")],pn);var xh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ll=class extends U{constructor(){super(...arguments),this.tabIdx=void 0}render(){return u`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${X(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${X(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};xh([m()],Ll.prototype,"tabIdx",void 0);Ll=xh([M("w3m-wallet-login-list")],Ll);const ly=ne`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Qt=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const dy=470;let Rt=class extends U{constructor(){super(),this.unsubscribe=[],this.connectors=D.state.connectors,this.authConnector=this.connectors.find(t=>t.type==="AUTH"),this.features=$.state.features,this.remoteFeatures=$.state.remoteFeatures,this.enableWallets=$.state.enableWallets,this.noAdapters=h.state.noAdapters,this.walletGuide="get-started",this.checked=Br.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!h.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!h.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(D.subscribeKey("connectors",t=>{this.connectors=t,this.authConnector=this.connectors.find(n=>n.type==="AUTH"),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),$.subscribeKey("features",t=>{this.features=t}),$.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),$.subscribeKey("enableWallets",t=>this.enableWallets=t),h.subscribeKey("noAdapters",t=>this.setEmailAndSocialEnableCheck(t,this.remoteFeatures)),Br.subscribeKey("isLegalCheckboxChecked",t=>this.checked=t))}disconnectedCallback(){this.unsubscribe.forEach(n=>n()),this.resizeObserver?.disconnect(),this.shadowRoot?.querySelector(".connect")?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const t=this.shadowRoot?.querySelector(".connect");t&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),t?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(t),this.handleConnectListScroll())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=$.state,r=$.state.features?.legalCheckbox,s=!!(t||n)&&!!r&&this.walletGuide==="get-started"&&!this.checked,a={connect:!0,disabled:s},c=$.state.enableWalletGuide,l=this.enableWallets,d=this.isSocialEnabled||this.authConnector,g=s?-1:void 0;return u`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${ad(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${d&&l&&c&&this.walletGuide==="get-started"?["0","3","0","3"]:["0","3","3","3"]}
          >
            ${this.renderConnectMethod(g)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){return Pi.hasFooter()||!this.remoteFeatures?.reownBranding?null:u`<wui-ux-by-reown></wui-ux-by-reown>`}setEmailAndSocialEnableCheck(t,n){this.isEmailEnabled=n?.email&&!t,this.isSocialEnabled=n?.socials&&n.socials.length>0&&!t,this.remoteFeatures=n,this.noAdapters=t}checkIfAuthEnabled(t){const n=t.filter(o=>o.type===gt.CONNECTOR_TYPE_AUTH).map(o=>o.chain);return z.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(o=>n.includes(o))}renderConnectMethod(t){const n=Vn.getConnectOrderMethod(this.features,this.connectors);return u`${n.map((r,o)=>{switch(r){case"email":return u`${this.emailTemplate(t)} ${this.separatorTemplate(o,"email")}`;case"social":return u`${this.socialListTemplate(t)}
          ${this.separatorTemplate(o,"social")}`;case"wallet":return u`${this.walletListTemplate(t)}
          ${this.separatorTemplate(o,"wallet")}`;default:return null}})}`}checkMethodEnabled(t){switch(t){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(t){const r=Vn.getConnectOrderMethod(this.features,this.connectors)[t+1];return r?this.checkMethodEnabled(r)?r:this.checkIsThereNextMethod(t+1):void 0}separatorTemplate(t,n){const r=this.checkIsThereNextMethod(t),o=this.walletGuide==="explore";switch(n){case"wallet":return this.enableWallets&&r&&!o?u`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const i=r==="social";return this.isAuthEnabled&&this.isEmailEnabled&&!i&&r?u`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const i=r==="email";return this.isAuthEnabled&&this.isSocialEnabled&&!i&&r?u`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(t){return!this.isEmailEnabled||!this.isAuthEnabled?null:u`<w3m-email-login-widget tabIdx=${X(t)}></w3m-email-login-widget>`}socialListTemplate(t){return!this.isSocialEnabled||!this.isAuthEnabled?null:u`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${X(t)}
    ></w3m-social-login-widget>`}walletListTemplate(t){const n=this.enableWallets,r=this.features?.emailShowWallets===!1,o=this.features?.collapseWallets,i=r||o;return!n||(P.isTelegram()&&(P.isSafari()||P.isIos())&&j.connectWalletConnect().catch(a=>({})),this.walletGuide==="explore")?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&i?u`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${X(t)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:u`<w3m-wallet-login-list tabIdx=${X(t)}></w3m-wallet-login-list>`}legalCheckboxTemplate(){return this.walletGuide==="explore"?null:u`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){const t=this.shadowRoot?.querySelector(".connect");if(!t)return;t.scrollHeight>dy?(t.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),t.style.setProperty("--connect-scroll--top-opacity",$a.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",$a.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--connect-mask-image","none"),t.style.setProperty("--connect-scroll--top-opacity","0"),t.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){T.push("ConnectWallets")}};Rt.styles=ly;Qt([_()],Rt.prototype,"connectors",void 0);Qt([_()],Rt.prototype,"authConnector",void 0);Qt([_()],Rt.prototype,"features",void 0);Qt([_()],Rt.prototype,"remoteFeatures",void 0);Qt([_()],Rt.prototype,"enableWallets",void 0);Qt([_()],Rt.prototype,"noAdapters",void 0);Qt([m()],Rt.prototype,"walletGuide",void 0);Qt([_()],Rt.prototype,"checked",void 0);Qt([_()],Rt.prototype,"isEmailEnabled",void 0);Qt([_()],Rt.prototype,"isSocialEnabled",void 0);Qt([_()],Rt.prototype,"isAuthEnabled",void 0);Rt=Qt([M("w3m-connect-view")],Rt);const uy=ne`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Ah=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Va=class extends U{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,r=36-t,o=116+r,i=245+r,s=360+r*1.75;return u`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Va.styles=[me,uy];Ah([m({type:Number})],Va.prototype,"radius",void 0);Va=Ah([M("wui-loading-thumbnail")],Va);const py=ne`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var fc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Gi=class extends U{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return u`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Gi.styles=[me,We,py];fc([m({type:Boolean})],Gi.prototype,"disabled",void 0);fc([m()],Gi.prototype,"label",void 0);fc([m()],Gi.prototype,"buttonLabel",void 0);Gi=fc([M("wui-cta-button")],Gi);const hy=ne`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var Sh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let qa=class extends U{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:n,play_store:r,chrome_store:o,homepage:i}=this.wallet,s=P.isMobile(),a=P.isIos(),c=P.isAndroid(),l=[n,r,i,o].filter(Boolean).length>1,d=ze.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return l&&!s?u`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>T.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&i?u`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?u`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&c?u`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&P.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&P.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&P.openHref(this.wallet.homepage,"_blank")}};qa.styles=[hy];Sh([m({type:Object})],qa.prototype,"wallet",void 0);qa=Sh([M("w3m-mobile-download-links")],qa);const fy=ne`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var wn=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};class lt extends U{constructor(){super(),this.wallet=T.state.data?.wallet,this.connector=T.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=je.getConnectorImage(this.connector)??je.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=j.state.wcUri,this.error=j.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(j.subscribeKey("wcUri",t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),j.subscribeKey("wcError",t=>this.error=t)),(P.isTelegram()||P.isSafari())&&P.isIos()&&j.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),j.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n="";return this.label?n=this.label:(n=`Continue in ${this.name}`,this.error&&(n="Connection declined")),u`
      <wui-flex
        data-error=${X(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${X(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?u`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?u`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){j.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const t=Or.state.themeVariables["--w3m-border-radius-master"],n=t?parseInt(t.replace("px",""),10):4;return u`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(P.copyToClopboard(this.uri),$e.showSuccess("Link copied"))}catch{$e.showError("Failed to copy")}}}lt.styles=fy;wn([_()],lt.prototype,"isRetrying",void 0);wn([_()],lt.prototype,"uri",void 0);wn([_()],lt.prototype,"error",void 0);wn([_()],lt.prototype,"ready",void 0);wn([_()],lt.prototype,"showRetry",void 0);wn([_()],lt.prototype,"label",void 0);wn([_()],lt.prototype,"secondaryBtnLabel",void 0);wn([_()],lt.prototype,"secondaryLabel",void 0);wn([_()],lt.prototype,"isLoading",void 0);wn([m({type:Boolean})],lt.prototype,"isMobile",void 0);wn([m()],lt.prototype,"onRetry",void 0);var my=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ou=class extends lt{constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=j.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=$.state.remoteFeatures,this.currentActiveConnectorId=D.state.activeConnectorIds[this.connector?.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const t=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:T.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(D.subscribeKey("activeConnectorIds",n=>{const r=n[t],o=this.remoteFeatures?.multiWallet,{redirectView:i}=T.state.data??{};r!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&o?(T.replace("ProfileWallets"),$e.showSuccess("New Wallet Added")):i?T.replace(i):Ce.close())}),j.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(t=>t())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;(this.connector.id!==z.CONNECTOR_ID.COINBASE_SDK||!this.error)&&(await j.connectExternal(this.connector,this.connector.chain),te.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown",view:T.state.view,walletRank:this.wallet?.order}}))}}catch(t){t instanceof Tn&&t.originalName===Ht.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?te.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):te.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}onConnectionsChange(t){if(this.connector?.chain&&t.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const n=t.get(this.connector.chain)??[],r=this.remoteFeatures?.multiWallet;if(n.length===0)T.replace("Connect");else{const o=En.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(s=>s.accounts),i=En.getConnectionsByConnectorId(n,this.connector.id).flatMap(s=>s.accounts);i.length===0?this.hasMultipleConnections&&r?(T.replace("ProfileWallets"),$e.showSuccess("Wallet deleted")):Ce.close():!o.every(a=>i.some(c=>bt.isLowerCaseMatch(a.address,c.address)))&&r&&T.replace("ProfileWallets")}}}isAlreadyConnected(t){return!!t&&this.connectionsByNamespace.some(n=>bt.isLowerCaseMatch(n.connectorId,t.id))}};Ou=my([M("w3m-connecting-external-view")],Ou);const gy=Fe`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var Th=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ka=class extends U{constructor(){super(),this.unsubscribe=[],this.activeConnector=D.state.activeConnector,this.unsubscribe.push(D.subscribeKey("activeConnector",t=>this.activeConnector=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${X(je.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map((t,n)=>t.name?u`
            <w3m-list-wallet
              displayIndex=${n}
              imageSrc=${X(je.getChainImage(t.chain))}
              name=${z.CHAIN_NAME_MAP[t.chain]}
              @click=${()=>this.onConnector(t)}
              size="sm"
              data-testid="wui-list-chain-${t.chain}"
              rdnsId=${t.explorerWallet?.rdns}
            ></w3m-list-wallet>
          `:null)}onConnector(t){const n=this.activeConnector?.connectors?.find(o=>o.chain===t.chain),r=T.state.data?.redirectView;if(!n){$e.showError("Failed to find connector");return}n.id==="walletConnect"?P.isMobile()?T.push("AllWallets"):T.push("ConnectingWalletConnect",{redirectView:r}):T.push("ConnectingExternal",{connector:n,redirectView:r,wallet:this.activeConnector?.explorerWallet})}};Ka.styles=gy;Th([_()],Ka.prototype,"activeConnector",void 0);Ka=Th([M("w3m-connecting-multi-chain-view")],Ka);var fd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ga=class extends U{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return u`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:n})=>n),t}onTabChange(t){const n=this.platformTabs[t];n&&this.onSelectPlatfrom?.(n)}};fd([m({type:Array})],Ga.prototype,"platforms",void 0);fd([m()],Ga.prototype,"onSelectPlatfrom",void 0);Ga=fd([M("w3m-connecting-header")],Ga);var wy=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Pu=class extends lt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:T.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=D.state,n=t.find(r=>r.type==="ANNOUNCED"&&r.info?.rdns===this.wallet?.rdns||r.type==="INJECTED"||r.name===this.wallet?.name);if(n)await j.connectExternal(n,n.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");Ce.close(),te.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",view:T.state.view,walletRank:this.wallet?.order}})}catch(t){t instanceof Tn&&t.originalName===Ht.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?te.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):te.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};Pu=wy([M("w3m-connecting-wc-browser")],Pu);var by=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Lu=class extends lt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:T.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:n}=this.wallet,{redirect:r,href:o}=P.formatNativeUrl(t,this.uri);j.setWcLinking({name:n,href:o}),j.setRecentWallet(this.wallet),P.openHref(r,"_blank")}catch{this.error=!0}}};Lu=by([M("w3m-connecting-wc-desktop")],Lu);var io=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let li=class extends lt{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=$.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,link_mode:n,name:r}=this.wallet,{redirect:o,redirectUniversalLink:i,href:s}=P.formatNativeUrl(t,this.uri,n);this.redirectDeeplink=o,this.redirectUniversalLink=i,this.target=P.isIframe()?"_top":"_self",j.setWcLinking({name:r,href:s}),j.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?P.openHref(this.redirectUniversalLink,this.target):P.openHref(this.redirectDeeplink,this.target)}catch(t){te.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=Ie.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(j.subscribeKey("wcUri",()=>{this.onHandleURI()})),te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:T.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){j.setWcError(!1),this.onConnect?.()}};io([_()],li.prototype,"redirectDeeplink",void 0);io([_()],li.prototype,"redirectUniversalLink",void 0);io([_()],li.prototype,"target",void 0);io([_()],li.prototype,"preferUniversalLinks",void 0);io([_()],li.prototype,"isLoading",void 0);li=io([M("w3m-connecting-wc-mobile")],li);var Si={},Mc,Du;function yy(){return Du||(Du=1,Mc=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Mc}var Uc={},sr={},Mu;function Ci(){if(Mu)return sr;Mu=1;let e;const t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return sr.getSymbolSize=function(r){if(!r)throw new Error('"version" cannot be null or undefined');if(r<1||r>40)throw new Error('"version" should be in range from 1 to 40');return r*4+17},sr.getSymbolTotalCodewords=function(r){return t[r]},sr.getBCHDigit=function(n){let r=0;for(;n!==0;)r++,n>>>=1;return r},sr.setToSJISFunction=function(r){if(typeof r!="function")throw new Error('"toSJISFunc" is not a valid function.');e=r},sr.isKanjiModeEnabled=function(){return typeof e<"u"},sr.toSJIS=function(r){return e(r)},sr}var Bc={},Uu;function md(){return Uu||(Uu=1,(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(Bc)),Bc}var Wc,Bu;function vy(){if(Bu)return Wc;Bu=1;function e(){this.buffer=[],this.length=0}return e.prototype={get:function(t){const n=Math.floor(t/8);return(this.buffer[n]>>>7-t%8&1)===1},put:function(t,n){for(let r=0;r<n;r++)this.putBit((t>>>n-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),t&&(this.buffer[n]|=128>>>this.length%8),this.length++}},Wc=e,Wc}var jc,Wu;function Cy(){if(Wu)return jc;Wu=1;function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}return e.prototype.set=function(t,n,r,o){const i=t*this.size+n;this.data[i]=r,o&&(this.reservedBit[i]=!0)},e.prototype.get=function(t,n){return this.data[t*this.size+n]},e.prototype.xor=function(t,n,r){this.data[t*this.size+n]^=r},e.prototype.isReserved=function(t,n){return this.reservedBit[t*this.size+n]},jc=e,jc}var Fc={},ju;function Ey(){return ju||(ju=1,(function(e){const t=Ci().getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,i=t(r),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,a=[i-7];for(let c=1;c<o-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const o=[],i=e.getRowColCoords(r),s=i.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||o.push([i[a],i[c]]);return o}})(Fc)),Fc}var zc={},Fu;function _y(){if(Fu)return zc;Fu=1;const e=Ci().getSymbolSize,t=7;return zc.getPositions=function(r){const o=e(r);return[[0,0],[o-t,0],[0,o-t]]},zc}var Hc={},zu;function xy(){return zu||(zu=1,(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const i=o.size;let s=0,a=0,c=0,l=null,d=null;for(let g=0;g<i;g++){a=c=0,l=d=null;for(let w=0;w<i;w++){let y=o.get(g,w);y===l?a++:(a>=5&&(s+=t.N1+(a-5)),l=y,a=1),y=o.get(w,g),y===d?c++:(c>=5&&(s+=t.N1+(c-5)),d=y,c=1)}a>=5&&(s+=t.N1+(a-5)),c>=5&&(s+=t.N1+(c-5))}return s},e.getPenaltyN2=function(o){const i=o.size;let s=0;for(let a=0;a<i-1;a++)for(let c=0;c<i-1;c++){const l=o.get(a,c)+o.get(a,c+1)+o.get(a+1,c)+o.get(a+1,c+1);(l===4||l===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const i=o.size;let s=0,a=0,c=0;for(let l=0;l<i;l++){a=c=0;for(let d=0;d<i;d++)a=a<<1&2047|o.get(l,d),d>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|o.get(d,l),d>=10&&(c===1488||c===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let c=0;c<s;c++)i+=o.data[c];return Math.abs(Math.ceil(i*100/s/5)-10)*t.N4};function n(r,o,i){switch(r){case e.Patterns.PATTERN000:return(o+i)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return i%3===0;case e.Patterns.PATTERN011:return(o+i)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case e.Patterns.PATTERN101:return o*i%2+o*i%3===0;case e.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case e.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,i){const s=i.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)i.isReserved(c,a)||i.xor(c,a,n(o,c,a))},e.getBestMask=function(o,i){const s=Object.keys(e.Patterns).length;let a=0,c=1/0;for(let l=0;l<s;l++){i(l),e.applyMask(l,o);const d=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(l,o),d<c&&(c=d,a=l)}return a}})(Hc)),Hc}var na={},Hu;function Nh(){if(Hu)return na;Hu=1;const e=md(),t=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return na.getBlocksCount=function(o,i){switch(i){case e.L:return t[(o-1)*4+0];case e.M:return t[(o-1)*4+1];case e.Q:return t[(o-1)*4+2];case e.H:return t[(o-1)*4+3];default:return}},na.getTotalCodewordsCount=function(o,i){switch(i){case e.L:return n[(o-1)*4+0];case e.M:return n[(o-1)*4+1];case e.Q:return n[(o-1)*4+2];case e.H:return n[(o-1)*4+3];default:return}},na}var Vc={},po={},Vu;function Ay(){if(Vu)return po;Vu=1;const e=new Uint8Array(512),t=new Uint8Array(256);return(function(){let r=1;for(let o=0;o<255;o++)e[o]=r,t[r]=o,r<<=1,r&256&&(r^=285);for(let o=255;o<512;o++)e[o]=e[o-255]})(),po.log=function(r){if(r<1)throw new Error("log("+r+")");return t[r]},po.exp=function(r){return e[r]},po.mul=function(r,o){return r===0||o===0?0:e[t[r]+t[o]]},po}var qu;function Sy(){return qu||(qu=1,(function(e){const t=Ay();e.mul=function(r,o){const i=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)i[s+a]^=t.mul(r[s],o[a]);return i},e.mod=function(r,o){let i=new Uint8Array(r);for(;i.length-o.length>=0;){const s=i[0];for(let c=0;c<o.length;c++)i[c]^=t.mul(o[c],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let i=0;i<r;i++)o=e.mul(o,new Uint8Array([1,t.exp(i)]));return o}})(Vc)),Vc}var qc,Ku;function Ty(){if(Ku)return qc;Ku=1;const e=Sy();function t(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}return t.prototype.initialize=function(r){this.degree=r,this.genPoly=e.generateECPolynomial(this.degree)},t.prototype.encode=function(r){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(r.length+this.degree);o.set(r);const i=e.mod(o,this.genPoly),s=this.degree-i.length;if(s>0){const a=new Uint8Array(this.degree);return a.set(i,s),a}return i},qc=t,qc}var Kc={},Gc={},Zc={},Gu;function $h(){return Gu||(Gu=1,Zc.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),Zc}var bn={},Zu;function Rh(){if(Zu)return bn;Zu=1;const e="[0-9]+",t="[A-Z $%*+\\-./:]+";let n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+`)(?:.|[\r
]))+`;bn.KANJI=new RegExp(n,"g"),bn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),bn.BYTE=new RegExp(r,"g"),bn.NUMERIC=new RegExp(e,"g"),bn.ALPHANUMERIC=new RegExp(t,"g");const o=new RegExp("^"+n+"$"),i=new RegExp("^"+e+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return bn.testKanji=function(c){return o.test(c)},bn.testNumeric=function(c){return i.test(c)},bn.testAlphanumeric=function(c){return s.test(c)},bn}var Yu;function Ei(){return Yu||(Yu=1,(function(e){const t=$h(),n=Rh();e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},e.getBestModeForData=function(i){return n.testNumeric(i)?e.NUMERIC:n.testAlphanumeric(i)?e.ALPHANUMERIC:n.testKanji(i)?e.KANJI:e.BYTE},e.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},e.isValid=function(i){return i&&i.bit&&i.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(i,s){if(e.isValid(i))return i;try{return r(i)}catch{return s}}})(Gc)),Gc}var Ju;function Ny(){return Ju||(Ju=1,(function(e){const t=Ci(),n=Nh(),r=md(),o=Ei(),i=$h(),s=7973,a=t.getBCHDigit(s);function c(w,y,E){for(let v=1;v<=40;v++)if(y<=e.getCapacity(v,E,w))return v}function l(w,y){return o.getCharCountIndicator(w,y)+4}function d(w,y){let E=0;return w.forEach(function(v){const x=l(v.mode,y);E+=x+v.getBitsLength()}),E}function g(w,y){for(let E=1;E<=40;E++)if(d(w,E)<=e.getCapacity(E,y,o.MIXED))return E}e.from=function(y,E){return i.isValid(y)?parseInt(y,10):E},e.getCapacity=function(y,E,v){if(!i.isValid(y))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=o.BYTE);const x=t.getSymbolTotalCodewords(y),I=n.getTotalCodewordsCount(y,E),R=(x-I)*8;if(v===o.MIXED)return R;const L=R-l(v,y);switch(v){case o.NUMERIC:return Math.floor(L/10*3);case o.ALPHANUMERIC:return Math.floor(L/11*2);case o.KANJI:return Math.floor(L/13);case o.BYTE:default:return Math.floor(L/8)}},e.getBestVersionForData=function(y,E){let v;const x=r.from(E,r.M);if(Array.isArray(y)){if(y.length>1)return g(y,x);if(y.length===0)return 1;v=y[0]}else v=y;return c(v.mode,v.getLength(),x)},e.getEncodedBits=function(y){if(!i.isValid(y)||y<7)throw new Error("Invalid QR Code version");let E=y<<12;for(;t.getBCHDigit(E)-a>=0;)E^=s<<t.getBCHDigit(E)-a;return y<<12|E}})(Kc)),Kc}var Yc={},Xu;function $y(){if(Xu)return Yc;Xu=1;const e=Ci(),t=1335,n=21522,r=e.getBCHDigit(t);return Yc.getEncodedBits=function(i,s){const a=i.bit<<3|s;let c=a<<10;for(;e.getBCHDigit(c)-r>=0;)c^=t<<e.getBCHDigit(c)-r;return(a<<10|c)^n},Yc}var Jc={},Xc,Qu;function Ry(){if(Qu)return Xc;Qu=1;const e=Ei();function t(n){this.mode=e.NUMERIC,this.data=n.toString()}return t.getBitsLength=function(r){return 10*Math.floor(r/3)+(r%3?r%3*3+1:0)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let o,i,s;for(o=0;o+3<=this.data.length;o+=3)i=this.data.substr(o,3),s=parseInt(i,10),r.put(s,10);const a=this.data.length-o;a>0&&(i=this.data.substr(o),s=parseInt(i,10),r.put(s,a*3+1))},Xc=t,Xc}var Qc,ep;function ky(){if(ep)return Qc;ep=1;const e=Ei(),t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(r){this.mode=e.ALPHANUMERIC,this.data=r}return n.getBitsLength=function(o){return 11*Math.floor(o/2)+6*(o%2)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(o){let i;for(i=0;i+2<=this.data.length;i+=2){let s=t.indexOf(this.data[i])*45;s+=t.indexOf(this.data[i+1]),o.put(s,11)}this.data.length%2&&o.put(t.indexOf(this.data[i]),6)},Qc=n,Qc}var el,tp;function Iy(){return tp||(tp=1,el=function(t){for(var n=[],r=t.length,o=0;o<r;o++){var i=t.charCodeAt(o);if(i>=55296&&i<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,o+=1)}if(i<128){n.push(i);continue}if(i<2048){n.push(i>>6|192),n.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){n.push(i>>12|224),n.push(i>>6&63|128),n.push(i&63|128);continue}if(i>=65536&&i<=1114111){n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(i&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer}),el}var tl,np;function Oy(){if(np)return tl;np=1;const e=Iy(),t=Ei();function n(r){this.mode=t.BYTE,typeof r=="string"&&(r=e(r)),this.data=new Uint8Array(r)}return n.getBitsLength=function(o){return o*8},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(r){for(let o=0,i=this.data.length;o<i;o++)r.put(this.data[o],8)},tl=n,tl}var nl,rp;function Py(){if(rp)return nl;rp=1;const e=Ei(),t=Ci();function n(r){this.mode=e.KANJI,this.data=r}return n.getBitsLength=function(o){return o*13},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(r){let o;for(o=0;o<this.data.length;o++){let i=t.toSJIS(this.data[o]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[o]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),r.put(i,13)}},nl=n,nl}var rl={exports:{}},ip;function Ly(){return ip||(ip=1,(function(e){var t={single_source_shortest_paths:function(n,r,o){var i={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var c,l,d,g,w,y,E,v,x;!a.empty();){c=a.pop(),l=c.value,g=c.cost,w=n[l]||{};for(d in w)w.hasOwnProperty(d)&&(y=w[d],E=g+y,v=s[d],x=typeof s[d]>"u",(x||v>E)&&(s[d]=E,a.push(d,E),i[d]=l))}if(typeof o<"u"&&typeof s[o]>"u"){var I=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(I)}return i},extract_shortest_path_from_predecessor_list:function(n,r){for(var o=[],i=r;i;)o.push(i),n[i],i=n[i];return o.reverse(),o},find_path:function(n,r,o){var i=t.single_source_shortest_paths(n,r,o);return t.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(n){var r=t.PriorityQueue,o={},i;n=n||{};for(i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);return o.queue=[],o.sorter=n.sorter||r.default_sorter,o},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var o={value:n,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(rl)),rl.exports}var op;function Dy(){return op||(op=1,(function(e){const t=Ei(),n=Ry(),r=ky(),o=Oy(),i=Py(),s=Rh(),a=Ci(),c=Ly();function l(I){return unescape(encodeURIComponent(I)).length}function d(I,R,L){const C=[];let A;for(;(A=I.exec(L))!==null;)C.push({data:A[0],index:A.index,mode:R,length:A[0].length});return C}function g(I){const R=d(s.NUMERIC,t.NUMERIC,I),L=d(s.ALPHANUMERIC,t.ALPHANUMERIC,I);let C,A;return a.isKanjiModeEnabled()?(C=d(s.BYTE,t.BYTE,I),A=d(s.KANJI,t.KANJI,I)):(C=d(s.BYTE_KANJI,t.BYTE,I),A=[]),R.concat(L,C,A).sort(function(O,B){return O.index-B.index}).map(function(O){return{data:O.data,mode:O.mode,length:O.length}})}function w(I,R){switch(R){case t.NUMERIC:return n.getBitsLength(I);case t.ALPHANUMERIC:return r.getBitsLength(I);case t.KANJI:return i.getBitsLength(I);case t.BYTE:return o.getBitsLength(I)}}function y(I){return I.reduce(function(R,L){const C=R.length-1>=0?R[R.length-1]:null;return C&&C.mode===L.mode?(R[R.length-1].data+=L.data,R):(R.push(L),R)},[])}function E(I){const R=[];for(let L=0;L<I.length;L++){const C=I[L];switch(C.mode){case t.NUMERIC:R.push([C,{data:C.data,mode:t.ALPHANUMERIC,length:C.length},{data:C.data,mode:t.BYTE,length:C.length}]);break;case t.ALPHANUMERIC:R.push([C,{data:C.data,mode:t.BYTE,length:C.length}]);break;case t.KANJI:R.push([C,{data:C.data,mode:t.BYTE,length:l(C.data)}]);break;case t.BYTE:R.push([{data:C.data,mode:t.BYTE,length:l(C.data)}])}}return R}function v(I,R){const L={},C={start:{}};let A=["start"];for(let S=0;S<I.length;S++){const O=I[S],B=[];for(let F=0;F<O.length;F++){const W=O[F],V=""+S+F;B.push(V),L[V]={node:W,lastCount:0},C[V]={};for(let Q=0;Q<A.length;Q++){const ce=A[Q];L[ce]&&L[ce].node.mode===W.mode?(C[ce][V]=w(L[ce].lastCount+W.length,W.mode)-w(L[ce].lastCount,W.mode),L[ce].lastCount+=W.length):(L[ce]&&(L[ce].lastCount=W.length),C[ce][V]=w(W.length,W.mode)+4+t.getCharCountIndicator(W.mode,R))}}A=B}for(let S=0;S<A.length;S++)C[A[S]].end=0;return{map:C,table:L}}function x(I,R){let L;const C=t.getBestModeForData(I);if(L=t.from(R,C),L!==t.BYTE&&L.bit<C.bit)throw new Error('"'+I+'" cannot be encoded with mode '+t.toString(L)+`.
 Suggested mode is: `+t.toString(C));switch(L===t.KANJI&&!a.isKanjiModeEnabled()&&(L=t.BYTE),L){case t.NUMERIC:return new n(I);case t.ALPHANUMERIC:return new r(I);case t.KANJI:return new i(I);case t.BYTE:return new o(I)}}e.fromArray=function(R){return R.reduce(function(L,C){return typeof C=="string"?L.push(x(C,null)):C.data&&L.push(x(C.data,C.mode)),L},[])},e.fromString=function(R,L){const C=g(R,a.isKanjiModeEnabled()),A=E(C),S=v(A,L),O=c.find_path(S.map,"start","end"),B=[];for(let F=1;F<O.length-1;F++)B.push(S.table[O[F]].node);return e.fromArray(y(B))},e.rawSplit=function(R){return e.fromArray(g(R,a.isKanjiModeEnabled()))}})(Jc)),Jc}var sp;function My(){if(sp)return Uc;sp=1;const e=Ci(),t=md(),n=vy(),r=Cy(),o=Ey(),i=_y(),s=xy(),a=Nh(),c=Ty(),l=Ny(),d=$y(),g=Ei(),w=Dy();function y(S,O){const B=S.size,F=i.getPositions(O);for(let W=0;W<F.length;W++){const V=F[W][0],Q=F[W][1];for(let ce=-1;ce<=7;ce++)if(!(V+ce<=-1||B<=V+ce))for(let K=-1;K<=7;K++)Q+K<=-1||B<=Q+K||(ce>=0&&ce<=6&&(K===0||K===6)||K>=0&&K<=6&&(ce===0||ce===6)||ce>=2&&ce<=4&&K>=2&&K<=4?S.set(V+ce,Q+K,!0,!0):S.set(V+ce,Q+K,!1,!0))}}function E(S){const O=S.size;for(let B=8;B<O-8;B++){const F=B%2===0;S.set(B,6,F,!0),S.set(6,B,F,!0)}}function v(S,O){const B=o.getPositions(O);for(let F=0;F<B.length;F++){const W=B[F][0],V=B[F][1];for(let Q=-2;Q<=2;Q++)for(let ce=-2;ce<=2;ce++)Q===-2||Q===2||ce===-2||ce===2||Q===0&&ce===0?S.set(W+Q,V+ce,!0,!0):S.set(W+Q,V+ce,!1,!0)}}function x(S,O){const B=S.size,F=l.getEncodedBits(O);let W,V,Q;for(let ce=0;ce<18;ce++)W=Math.floor(ce/3),V=ce%3+B-8-3,Q=(F>>ce&1)===1,S.set(W,V,Q,!0),S.set(V,W,Q,!0)}function I(S,O,B){const F=S.size,W=d.getEncodedBits(O,B);let V,Q;for(V=0;V<15;V++)Q=(W>>V&1)===1,V<6?S.set(V,8,Q,!0):V<8?S.set(V+1,8,Q,!0):S.set(F-15+V,8,Q,!0),V<8?S.set(8,F-V-1,Q,!0):V<9?S.set(8,15-V-1+1,Q,!0):S.set(8,15-V-1,Q,!0);S.set(F-8,8,1,!0)}function R(S,O){const B=S.size;let F=-1,W=B-1,V=7,Q=0;for(let ce=B-1;ce>0;ce-=2)for(ce===6&&ce--;;){for(let K=0;K<2;K++)if(!S.isReserved(W,ce-K)){let f=!1;Q<O.length&&(f=(O[Q]>>>V&1)===1),S.set(W,ce-K,f),V--,V===-1&&(Q++,V=7)}if(W+=F,W<0||B<=W){W-=F,F=-F;break}}}function L(S,O,B){const F=new n;B.forEach(function(K){F.put(K.mode.bit,4),F.put(K.getLength(),g.getCharCountIndicator(K.mode,S)),K.write(F)});const W=e.getSymbolTotalCodewords(S),V=a.getTotalCodewordsCount(S,O),Q=(W-V)*8;for(F.getLengthInBits()+4<=Q&&F.put(0,4);F.getLengthInBits()%8!==0;)F.putBit(0);const ce=(Q-F.getLengthInBits())/8;for(let K=0;K<ce;K++)F.put(K%2?17:236,8);return C(F,S,O)}function C(S,O,B){const F=e.getSymbolTotalCodewords(O),W=a.getTotalCodewordsCount(O,B),V=F-W,Q=a.getBlocksCount(O,B),ce=F%Q,K=Q-ce,f=Math.floor(F/Q),b=Math.floor(V/Q),N=b+1,k=f-b,H=new c(k);let q=0;const be=new Array(Q),pe=new Array(Q);let Ae=0;const G=new Uint8Array(S.buffer);for(let dt=0;dt<Q;dt++){const ke=dt<K?b:N;be[dt]=G.slice(q,q+ke),pe[dt]=H.encode(be[dt]),q+=ke,Ae=Math.max(Ae,ke)}const _e=new Uint8Array(F);let Qe=0,Ye,Xe;for(Ye=0;Ye<Ae;Ye++)for(Xe=0;Xe<Q;Xe++)Ye<be[Xe].length&&(_e[Qe++]=be[Xe][Ye]);for(Ye=0;Ye<k;Ye++)for(Xe=0;Xe<Q;Xe++)_e[Qe++]=pe[Xe][Ye];return _e}function A(S,O,B,F){let W;if(Array.isArray(S))W=w.fromArray(S);else if(typeof S=="string"){let f=O;if(!f){const b=w.rawSplit(S);f=l.getBestVersionForData(b,B)}W=w.fromString(S,f||40)}else throw new Error("Invalid data");const V=l.getBestVersionForData(W,B);if(!V)throw new Error("The amount of data is too big to be stored in a QR Code");if(!O)O=V;else if(O<V)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+V+`.
`);const Q=L(O,B,W),ce=e.getSymbolSize(O),K=new r(ce);return y(K,O),E(K),v(K,O),I(K,B,0),O>=7&&x(K,O),R(K,Q),isNaN(F)&&(F=s.getBestMask(K,I.bind(null,K,B))),s.applyMask(F,K),I(K,B,F),{modules:K,version:O,errorCorrectionLevel:B,maskPattern:F,segments:W}}return Uc.create=function(O,B){if(typeof O>"u"||O==="")throw new Error("No input text");let F=t.M,W,V;return typeof B<"u"&&(F=t.from(B.errorCorrectionLevel,t.M),W=l.from(B.version),V=s.from(B.maskPattern),B.toSJISFunc&&e.setToSJISFunction(B.toSJISFunc)),A(O,W,F,V)},Uc}var il={},ol={},ap;function kh(){return ap||(ap=1,(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const i=e.getScale(r,o);return Math.floor((r+o.margin*2)*i)},e.qrToImageData=function(r,o,i){const s=o.modules.size,a=o.modules.data,c=e.getScale(s,i),l=Math.floor((s+i.margin*2)*c),d=i.margin*c,g=[i.color.light,i.color.dark];for(let w=0;w<l;w++)for(let y=0;y<l;y++){let E=(w*l+y)*4,v=i.color.light;if(w>=d&&y>=d&&w<l-d&&y<l-d){const x=Math.floor((w-d)/c),I=Math.floor((y-d)/c);v=g[a[x*s+I]?1:0]}r[E++]=v.r,r[E++]=v.g,r[E++]=v.b,r[E]=v.a}}})(ol)),ol}var cp;function Uy(){return cp||(cp=1,(function(e){const t=kh();function n(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(i,s,a){let c=a,l=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(l=r()),c=t.getOptions(c);const d=t.getImageWidth(i.modules.size,c),g=l.getContext("2d"),w=g.createImageData(d,d);return t.qrToImageData(w.data,i,c),n(g,l,d),g.putImageData(w,0,0),l},e.renderToDataURL=function(i,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const l=e.render(i,s,c),d=c.type||"image/png",g=c.rendererOpts||{};return l.toDataURL(d,g.quality)}})(il)),il}var sl={},lp;function By(){if(lp)return sl;lp=1;const e=kh();function t(o,i){const s=o.a/255,a=i+'="'+o.hex+'"';return s<1?a+" "+i+'-opacity="'+s.toFixed(2).slice(1)+'"':a}function n(o,i,s){let a=o+i;return typeof s<"u"&&(a+=" "+s),a}function r(o,i,s){let a="",c=0,l=!1,d=0;for(let g=0;g<o.length;g++){const w=Math.floor(g%i),y=Math.floor(g/i);!w&&!l&&(l=!0),o[g]?(d++,g>0&&w>0&&o[g-1]||(a+=l?n("M",w+s,.5+y+s):n("m",c,0),c=0,l=!1),w+1<i&&o[g+1]||(a+=n("h",d),d=0)):c++}return a}return sl.render=function(i,s,a){const c=e.getOptions(s),l=i.modules.size,d=i.modules.data,g=l+c.margin*2,w=c.color.light.a?"<path "+t(c.color.light,"fill")+' d="M0 0h'+g+"v"+g+'H0z"/>':"",y="<path "+t(c.color.dark,"stroke")+' d="'+r(d,l,c.margin)+'"/>',E='viewBox="0 0 '+g+" "+g+'"',x='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+E+' shape-rendering="crispEdges">'+w+y+`</svg>
`;return typeof a=="function"&&a(null,x),x},sl}var dp;function Wy(){if(dp)return Si;dp=1;const e=yy(),t=My(),n=Uy(),r=By();function o(i,s,a,c,l){const d=[].slice.call(arguments,1),g=d.length,w=typeof d[g-1]=="function";if(!w&&!e())throw new Error("Callback required as last argument");if(w){if(g<2)throw new Error("Too few arguments provided");g===2?(l=a,a=s,s=c=void 0):g===3&&(s.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=a,a=s,s=void 0))}else{if(g<1)throw new Error("Too few arguments provided");return g===1?(a=s,s=c=void 0):g===2&&!s.getContext&&(c=a,a=s,s=void 0),new Promise(function(y,E){try{const v=t.create(a,c);y(i(v,s,c))}catch(v){E(v)}})}try{const y=t.create(a,c);l(null,i(y,s,c))}catch(y){l(y)}}return Si.create=t.create,Si.toCanvas=o.bind(null,n.render),Si.toDataURL=o.bind(null,n.renderToDataURL),Si.toString=o.bind(null,function(i,s,a){return r.render(i,a)}),Si}var jy=Wy();const Fy=br(jy),zy=.1,up=2.5,Fn=7;function al(e,t,n){return e===t?!1:(e-t<0?t-e:e-t)<=n+zy}function Hy(e,t){const n=Array.prototype.slice.call(Fy.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((o,i,s)=>(s%r===0?o.push([i]):o[o.length-1].push(i))&&o,[])}const Vy={generate({uri:e,size:t,logoSize:n,padding:r=8,dotColor:o="var(--apkt-colors-black)"}){const s=[],a=Hy(e,"Q"),c=(t-2*r)/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:v,y:x})=>{const I=(a.length-Fn)*c*v+r,R=(a.length-Fn)*c*x+r,L=.45;for(let C=0;C<l.length;C+=1){const A=c*(Fn-C*2);s.push(we`
            <rect
              fill=${C===2?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${C===0?A-10:A}
              rx= ${C===0?(A-10)*L:A*L}
              ry= ${C===0?(A-10)*L:A*L}
              stroke=${o}
              stroke-width=${C===0?10:0}
              height=${C===0?A-10:A}
              x= ${C===0?R+c*C+10/2:R+c*C}
              y= ${C===0?I+c*C+10/2:I+c*C}
            />
          `)}});const d=Math.floor((n+25)/c),g=a.length/2-d/2,w=a.length/2+d/2-1,y=[];a.forEach((v,x)=>{v.forEach((I,R)=>{if(a[x][R]&&!(x<Fn&&R<Fn||x>a.length-(Fn+1)&&R<Fn||x<Fn&&R>a.length-(Fn+1))&&!(x>g&&x<w&&R>g&&R<w)){const L=x*c+c/2+r,C=R*c+c/2+r;y.push([L,C])}})});const E={};return y.forEach(([v,x])=>{E[v]?E[v]?.push(x):E[v]=[x]}),Object.entries(E).map(([v,x])=>{const I=x.filter(R=>x.every(L=>!al(R,L,c)));return[Number(v),I]}).forEach(([v,x])=>{x.forEach(I=>{s.push(we`<circle cx=${v} cy=${I} fill=${o} r=${c/up} />`)})}),Object.entries(E).filter(([v,x])=>x.length>1).map(([v,x])=>{const I=x.filter(R=>x.some(L=>al(R,L,c)));return[Number(v),I]}).map(([v,x])=>{x.sort((R,L)=>R<L?-1:1);const I=[];for(const R of x){const L=I.find(C=>C.some(A=>al(R,A,c)));L?L.push(R):I.push([R])}return[v,I.map(R=>[R[0],R[R.length-1]])]}).forEach(([v,x])=>{x.forEach(([I,R])=>{s.push(we`
              <line
                x1=${v}
                x2=${v}
                y1=${I}
                y2=${R}
                stroke=${o}
                stroke-width=${c/(up/2)}
                stroke-linecap="round"
              />
            `)})}),s}},qy=ne`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var Ar=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let kn=class extends U{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),u`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return we`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${Vy.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?u`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:u`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};kn.styles=[me,qy];Ar([m()],kn.prototype,"uri",void 0);Ar([m({type:Number})],kn.prototype,"size",void 0);Ar([m()],kn.prototype,"theme",void 0);Ar([m()],kn.prototype,"imageSrc",void 0);Ar([m()],kn.prototype,"alt",void 0);Ar([m({type:Boolean})],kn.prototype,"arenaClear",void 0);Ar([m({type:Boolean})],kn.prototype,"farcaster",void 0);kn=Ar([M("wui-qr-code")],kn);const Ky=ne`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var Ih=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Za=class extends lt{constructor(){super(),this.basic=!1}firstUpdated(){this.basic||te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:T.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(t=>t())}render(){return this.onRenderProxy(),u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.wallet?this.wallet.name:void 0;return j.setWcLinking(void 0),j.setRecentWallet(this.wallet),u` <wui-qr-code
      theme=${Or.state.themeMode}
      uri=${this.uri}
      imageSrc=${X(je.getWalletImage(this.wallet))}
      color=${X(Or.state.themeVariables["--w3m-qr-color"])}
      alt=${X(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return u`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};Za.styles=Ky;Ih([m({type:Boolean})],Za.prototype,"basic",void 0);Za=Ih([M("w3m-connecting-wc-qrcode")],Za);var Gy=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let pp=class extends U{constructor(){if(super(),this.wallet=T.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:T.state.view}})}render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${X(je.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};pp=Gy([M("w3m-connecting-wc-unsupported")],pp);var Oh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Dl=class extends lt{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=Ie.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(j.subscribeKey("wcUri",()=>{this.updateLoadingState()})),te.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:T.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:n}=this.wallet,{redirect:r,href:o}=P.formatUniversalUrl(t,this.uri);j.setWcLinking({name:n,href:o}),j.setRecentWallet(this.wallet),P.openHref(r,"_blank")}catch{this.error=!0}}};Oh([_()],Dl.prototype,"isLoading",void 0);Dl=Oh([M("w3m-connecting-wc-web")],Dl);const Zy=ne`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var _i=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let er=class extends U{constructor(){super(),this.wallet=T.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!$.state.siwx,this.remoteFeatures=$.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push($.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return $.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),u`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return!this.remoteFeatures?.reownBranding||!this.displayBranding?null:u`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(t=!1){if(!(this.platform==="browser"||$.state.manualWCControl&&!t))try{const{wcPairingExpiry:n,status:r}=j.state,{redirectView:o}=T.state.data??{};if(t||$.state.enableEmbedded||P.isPairingExpired(n)||r==="connecting"){const i=j.getConnections(h.state.activeChain),s=this.remoteFeatures?.multiWallet,a=i.length>0;await j.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(a&&s?(T.replace("ProfileWallets"),$e.showSuccess("New Wallet Added")):o?T.replace(o):Ce.close())}}catch(n){if(n instanceof Error&&n.message.includes("An error occurred when attempting to switch chain")&&!$.state.enableNetworkSwitch&&h.state.activeChain){h.setActiveCaipNetwork(th.getUnsupportedNetwork(`${h.state.activeChain}:${h.state.activeCaipNetwork?.id}`)),h.showUnsupportedChainUI();return}n instanceof Tn&&n.originalName===Ht.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?te.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:n.message}}):te.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:n?.message??"Unknown"}}),j.setWcError(!0),$e.showError(n.message??"Connection error"),j.resetWcConnection(),T.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:n,webapp_link:r,injected:o,rdns:i}=this.wallet,s=o?.map(({injected_id:E})=>E).filter(Boolean),a=[...i?[i]:s??[]],c=$.state.isUniversalProvider?!1:a.length,l=t,d=r,g=j.checkInstalled(a),w=c&&g,y=n&&!P.isMobile();w&&!h.state.noAdapters&&this.platforms.push("browser"),l&&this.platforms.push(P.isMobile()?"mobile":"qrcode"),d&&this.platforms.push("web"),y&&this.platforms.push("desktop"),!w&&c&&!h.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return u`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return u`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return u`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return u`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return u`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return u`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?u`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){const n=this.shadowRoot?.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};er.styles=Zy;_i([_()],er.prototype,"platform",void 0);_i([_()],er.prototype,"platforms",void 0);_i([_()],er.prototype,"isSiwxEnabled",void 0);_i([_()],er.prototype,"remoteFeatures",void 0);_i([m({type:Boolean})],er.prototype,"displayBranding",void 0);_i([m({type:Boolean})],er.prototype,"basic",void 0);er=_i([M("w3m-connecting-wc-view")],er);var gd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ya=class extends U{constructor(){super(),this.unsubscribe=[],this.isMobile=P.isMobile(),this.remoteFeatures=$.state.remoteFeatures,this.unsubscribe.push($.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(this.isMobile){const{featured:t,recommended:n}=Z.state,{customWallets:r}=$.state,o=J.getRecentWallets(),i=t.length||n.length||r?.length||o.length;return u`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${i?u`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return u`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?u` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};gd([_()],Ya.prototype,"isMobile",void 0);gd([_()],Ya.prototype,"remoteFeatures",void 0);Ya=gd([M("w3m-connecting-wc-basic-view")],Ya);const Yy=Fe`
  .continue-button-container {
    width: 100%;
  }
`;var Ph=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ja=class extends U{constructor(){super(...arguments),this.loading=!1}render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{P.openHref(zf.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return u` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return u`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){T.push("RegisterAccountName"),te.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:rt(h.state.activeChain)===De.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Ja.styles=Yy;Ph([_()],Ja.prototype,"loading",void 0);Ja=Ph([M("w3m-choose-account-name-view")],Ja);var Jy=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let hp=class extends U{constructor(){super(...arguments),this.wallet=T.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return u`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?u`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?u`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?u`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?u`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(t){t.href&&this.wallet&&(te.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:t.type}}),P.openHref(t.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};hp=Jy([M("w3m-downloads-view")],hp);var Xy=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Qy="https://walletconnect.com/explorer";let fp=class extends U{render(){return u`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{P.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:n}=Z.state,{customWallets:r}=$.state;return[...n,...r??[],...t].slice(0,4).map((i,s)=>u`
        <w3m-list-wallet
          displayIndex=${s}
          name=${i.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${X(je.getWalletImage(i))}
          @click=${()=>{this.onWalletClick(i)}}
        ></w3m-list-wallet>
      `)}onWalletClick(t){te.sendEvent({type:"track",event:"GET_WALLET",properties:{name:t.name,walletRank:void 0,explorerId:t.id,type:"homepage"}}),P.openHref(t.homepage??Qy,"_blank")}};fp=Xy([M("w3m-get-wallet-view")],fp);const e5=we`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" fill="#F7931A"/>
  <g clip-path="url(#clip0_1045_17)">
    <path d="M63.0394 39.7409C58.7654 56.8839 41.4024 67.3169 24.2574 63.0419C7.11937 58.7679 -3.31363 41.4039 0.962367 24.2619C5.23437 7.11686 22.5974 -3.31714 39.7374 0.956863C56.8814 5.23086 67.3134 22.5969 63.0394 39.7409Z" fill="#F7931A"/>
    <path d="M46.1092 27.4409C46.7462 23.1829 43.5042 20.8939 39.0712 19.3669L40.5092 13.5989L36.9982 12.7239L35.5982 18.3399C34.6752 18.1099 33.7272 17.8929 32.7852 17.6779L34.1952 12.0249L30.6862 11.1499L29.2472 16.9159C28.4832 16.7419 27.7332 16.5699 27.0052 16.3889L27.0092 16.3709L22.1672 15.1619L21.2332 18.9119C21.2332 18.9119 23.8382 19.5089 23.7832 19.5459C25.2052 19.9009 25.4622 20.8419 25.4192 21.5879L23.7812 28.1589C23.8792 28.1839 24.0062 28.2199 24.1462 28.2759C24.0292 28.2469 23.9042 28.2149 23.7752 28.1839L21.4792 37.3889C21.3052 37.8209 20.8642 38.4689 19.8702 38.2229C19.9052 38.2739 17.3182 37.5859 17.3182 37.5859L15.5752 41.6049L20.1442 42.7439C20.9942 42.9569 21.8272 43.1799 22.6472 43.3899L21.1942 49.2239L24.7012 50.0989L26.1402 44.3269C27.0982 44.5869 28.0282 44.8269 28.9382 45.0529L27.5042 50.7979L31.0152 51.6729L32.4682 45.8499C38.4552 46.9829 42.9572 46.5259 44.8522 41.1109C46.3792 36.7509 44.7762 34.2359 41.6262 32.5959C43.9202 32.0669 45.6482 30.5579 46.1092 27.4409ZM38.0872 38.6899C37.0022 43.0499 29.6612 40.6929 27.2812 40.1019L29.2092 32.3729C31.5892 32.9669 39.2212 34.1429 38.0872 38.6899ZM39.1732 27.3779C38.1832 31.3439 32.0732 29.3289 30.0912 28.8349L31.8392 21.8249C33.8212 22.3189 40.2042 23.2409 39.1732 27.3779Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1045_17">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,t5=we`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,n5=we`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,r5=we`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,i5=we`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,o5=we`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,s5=we`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,a5=we`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,c5=we`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,l5=we`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,d5=we`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,u5=we`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,p5=we`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,h5=we`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,f5=we`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,m5=we`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,g5=we`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,w5=we`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,b5=we`<svg fill="none" viewBox="0 0 80 80">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M40 80a40 40 0 1 0 0-80 40 40 0 0 0 0 80Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M79.5 40a39.5 39.5 0 1 1-79 0 39.5 39.5 0 0 1 79 0Z"
    />
    <path
      fill="#fff"
      d="m62.62 51.54-7.54 7.91a1.75 1.75 0 0 1-1.29.55H18.02a.9.9 0 0 1-.8-.52.84.84 0 0 1 .16-.92l7.55-7.92a1.75 1.75 0 0 1 1.28-.55h35.77a.87.87 0 0 1 .8.52.84.84 0 0 1-.16.93Zm-7.54-15.95a1.75 1.75 0 0 0-1.29-.54H18.02a.89.89 0 0 0-.8.51.84.84 0 0 0 .16.93l7.55 7.92a1.75 1.75 0 0 0 1.28.54h35.77a.89.89 0 0 0 .8-.51.84.84 0 0 0-.16-.93l-7.54-7.92ZM18.02 29.9h35.77a1.79 1.79 0 0 0 1.29-.54l7.54-7.92a.85.85 0 0 0 .16-.93.87.87 0 0 0-.8-.51H26.21a1.79 1.79 0 0 0-1.28.54l-7.55 7.92a.85.85 0 0 0-.16.93.89.89 0 0 0 .8.52Z"
    />
  </g>
  <defs>
    <linearGradient id="b" x1="6.75" x2="80.68" y1="81.91" y2="7.37" gradientUnits="userSpaceOnUse">
      <stop offset=".08" stop-color="#9945FF" />
      <stop offset=".3" stop-color="#8752F3" />
      <stop offset=".5" stop-color="#5497D5" />
      <stop offset=".6" stop-color="#43B4CA" />
      <stop offset=".72" stop-color="#28E0B9" />
      <stop offset=".97" stop-color="#19FB9B" />
    </linearGradient>
    <clipPath id="a"><path fill="#fff" d="M0 0h80v80H0z" /></clipPath>
  </defs>
</svg> `,y5=we`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,v5=Fe`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var wd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const C5={browser:t5,dao:n5,defi:r5,defiAlt:i5,eth:o5,layers:a5,lock:l5,login:d5,network:p5,nft:h5,noun:f5,profile:w5,system:y5,meld:u5,onrampCard:m5,google:s5,pencil:g5,lightbulb:c5,solana:b5,bitcoin:e5};let hs=class extends U{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--apkt-visual-size-${this.size});
   `,u`${C5[this.name]}`}};hs.styles=[me,v5];wd([m()],hs.prototype,"name",void 0);wd([m()],hs.prototype,"size",void 0);hs=wd([M("wui-visual")],hs);var Lh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ml=class extends U{constructor(){super(...arguments),this.data=[]}render(){return u`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(t=>u`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${t.images.map(n=>u`<wui-visual size="sm" name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${t.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${t.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};Lh([m({type:Array})],Ml.prototype,"data",void 0);Ml=Lh([M("w3m-help-widget")],Ml);var E5=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const _5=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let mp=class extends U{render(){return u`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${_5}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){te.sendEvent({type:"track",event:"CLICK_GET_WALLET_HELP"}),T.push("GetWallet")}};mp=E5([M("w3m-what-is-a-wallet-view")],mp);const x5=ne`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Dh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Xa=class extends U{constructor(){super(),this.unsubscribe=[],this.checked=Br.state.isLegalCheckboxChecked,this.unsubscribe.push(Br.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=$.state,r=$.state.features?.legalCheckbox,i=!!(t||n)&&!!r,s=i&&!this.checked,a=s?-1:void 0;return u`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","3","3","3"]:"3"}
        gap="2"
        class=${X(s?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${X(a)}></w3m-wallet-login-list>
      </wui-flex>
    `}};Xa.styles=x5;Dh([_()],Xa.prototype,"checked",void 0);Xa=Dh([M("w3m-connect-wallets-view")],Xa);const A5=ne`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var S5=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ul=class extends U{render(){return u`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ul.styles=[me,A5];Ul=S5([M("wui-loading-hexagon")],Ul);const T5=we`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,N5=we`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,$5=ne`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var xi=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let tr=class extends U{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:N5,md:yh,lg:T5},this.selected=!1,this.round=!1}render(){const t={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${t[this.size]});
    `,u`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:u`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};tr.styles=[me,$5];xi([m()],tr.prototype,"size",void 0);xi([m()],tr.prototype,"name",void 0);xi([m({type:Object})],tr.prototype,"networkImagesBySize",void 0);xi([m()],tr.prototype,"imageSrc",void 0);xi([m({type:Boolean})],tr.prototype,"selected",void 0);xi([m({type:Boolean})],tr.prototype,"round",void 0);tr=xi([M("wui-network-image")],tr);const R5=Fe`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var bd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let fs=class extends U{constructor(){super(),this.network=T.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.getLabel(),n=this.getSubLabel();return u`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${X(je.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:u`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${t}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const t=D.getConnectorId(h.state.activeChain);return D.getAuthConnector()&&t===z.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const t=D.getConnectorId(h.state.activeChain);return D.getAuthConnector()&&t===z.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,h.state.activeChain!==this.network?.chainNamespace&&h.setIsSwitchingNamespace(!0),this.network&&(await h.switchActiveNetwork(this.network),await yn.isAuthenticated()&&T.goBack())}catch{this.error=!0}}};fs.styles=R5;bd([_()],fs.prototype,"showRetry",void 0);bd([_()],fs.prototype,"error",void 0);fs=bd([M("w3m-network-switch-view")],fs);const k5=ne`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Us=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let di=class extends U{constructor(){super(...arguments),this.imageSrc=void 0,this.name="Ethereum",this.disabled=!1}render(){return u`
      <button ?disabled=${this.disabled} tabindex=${X(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}imageTemplate(){return this.imageSrc?u`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`:u`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`}};di.styles=[me,We,k5];Us([m()],di.prototype,"imageSrc",void 0);Us([m()],di.prototype,"name",void 0);Us([m()],di.prototype,"tabIdx",void 0);Us([m({type:Boolean})],di.prototype,"disabled",void 0);di=Us([M("wui-list-network")],di);const I5=Fe`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var Bs=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ui=class extends U{constructor(){super(),this.unsubscribe=[],this.network=h.state.activeCaipNetwork,this.requestedCaipNetworks=h.getCaipNetworks(),this.search="",this.onDebouncedSearch=P.debounce(t=>{this.search=t},100),this.unsubscribe.push(nt.subscribeNetworkImages(()=>this.requestUpdate()),h.subscribeKey("activeCaipNetwork",t=>this.network=t),h.subscribe(()=>{this.requestedCaipNetworks=h.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return u`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}networksTemplate(){const t=h.getAllApprovedCaipNetworkIds(),n=P.sortRequestedNetworks(t,this.requestedCaipNetworks);return this.search?this.filteredNetworks=n?.filter(r=>r?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=n,this.filteredNetworks?.map(r=>u`
        <wui-list-network
          .selected=${this.network?.id===r.id}
          imageSrc=${X(je.getNetworkImage(r))}
          type="network"
          name=${r.name??r.id}
          @click=${()=>this.onSwitchNetwork(r)}
          .disabled=${h.isCaipNetworkDisabled(r)}
          data-testid=${`w3m-network-switch-${r.name??r.id}`}
        ></wui-list-network>
      `)}onSwitchNetwork(t){Jp.onSwitchNetwork({network:t})}};ui.styles=I5;Bs([_()],ui.prototype,"network",void 0);Bs([_()],ui.prototype,"requestedCaipNetworks",void 0);Bs([_()],ui.prototype,"filteredNetworks",void 0);Bs([_()],ui.prototype,"search",void 0);ui=Bs([M("w3m-networks-view")],ui);const O5=ne`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e["01"]} ${({spacing:e})=>e[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var Mh=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const P5={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let Qa=class extends U{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=T.state.data?.switchToChain,this.caipNetwork=T.state.data?.network,this.activeChain=h.state.activeChain}firstUpdated(){this.unsubscribe.push(h.subscribeKey("activeChain",t=>this.activeChain=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.switchToChain?z.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const n=z.CHAIN_NAME_MAP[this.switchToChain];return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${X(P5[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${n}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${n}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${t} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(h.setIsSwitchingNamespace(!0),D.setFilterByNamespace(this.switchToChain),this.caipNetwork?await h.switchActiveNetwork(this.caipNetwork):h.setActiveNamespace(this.switchToChain),T.reset("Connect"))}};Qa.styles=O5;Mh([m()],Qa.prototype,"activeChain",void 0);Qa=Mh([M("w3m-switch-active-chain-view")],Qa);var L5=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const D5=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let gp=class extends U{render(){return u`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${D5}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{P.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};gp=L5([M("w3m-what-is-a-network-view")],gp);const M5=Fe`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var yd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ms=class extends U{constructor(){super(),this.swapUnsupportedChain=T.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=$.state.remoteFeatures,this.unsubscribe.push(nt.subscribeNetworkImages(()=>this.requestUpdate()),$.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?u`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:u`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const t=h.getAllRequestedCaipNetworks(),n=h.getAllApprovedCaipNetworkIds(),r=P.sortRequestedNetworks(n,t);return(this.swapUnsupportedChain?r.filter(i=>Ie.SWAP_SUPPORTED_NETWORKS.includes(i.caipNetworkId)):r).map(i=>u`
        <wui-list-network
          imageSrc=${X(je.getNetworkImage(i))}
          name=${i.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(i)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;const t=h.state.activeChain,r=j.getConnections(t).length>0,o=t&&D.state.activeConnectorIds[t],i=this.remoteFeatures?.multiWallet;await j.disconnect(i?{id:o,namespace:t}:{}),r&&i&&(T.push("ProfileWallets"),$e.showSuccess("Wallet deleted"))}catch{te.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),$e.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(t){const n=h.getActiveCaipAddress(),r=h.getAllApprovedCaipNetworkIds(),o=h.getNetworkProp("supportsAllNetworks",t.chainNamespace),i=T.state.data;n?r?.includes(t.caipNetworkId)?await h.switchActiveNetwork(t):o?T.push("SwitchNetwork",{...i,network:t}):T.push("SwitchNetwork",{...i,network:t}):n||(h.setActiveCaipNetwork(t),T.push("Connect"))}};ms.styles=M5;yd([_()],ms.prototype,"disconnecting",void 0);yd([_()],ms.prototype,"remoteFeatures",void 0);ms=yd([M("w3m-unsupported-chain-view")],ms);const U5=ne`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var mc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Zi=class extends U{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return u`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};Zi.styles=[me,We,U5];mc([m()],Zi.prototype,"icon",void 0);mc([m()],Zi.prototype,"text",void 0);mc([m()],Zi.prototype,"type",void 0);Zi=mc([M("wui-banner")],Zi);const B5=Fe`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var W5=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Bl=class extends U{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const t=h.getAllRequestedCaipNetworks(),n=h.getAllApprovedCaipNetworkIds(),r=h.state.activeCaipNetwork,o=h.checkIfSmartAccountEnabled();let i=P.sortRequestedNetworks(n,t);if(o&&rt(r?.chainNamespace)===De.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;i=[r]}return i.filter(a=>a.chainNamespace===r?.chainNamespace).map(a=>u`
        <wui-list-network
          imageSrc=${X(je.getNetworkImage(a))}
          name=${a.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Bl.styles=B5;Bl=W5([M("w3m-wallet-compatible-networks-view")],Bl);const j5=ne`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var gc=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Yi=class extends U{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",u`${this.templateVisual()}`}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:u`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};Yi.styles=[me,j5];gc([m()],Yi.prototype,"imageSrc",void 0);gc([m()],Yi.prototype,"alt",void 0);gc([m({type:Boolean})],Yi.prototype,"borderRadiusFull",void 0);Yi=gc([M("wui-visual-thumbnail")],Yi);const F5=ne`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var z5=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Wl=class extends U{constructor(){super(...arguments),this.dappImageUrl=$.state.metadata?.icons,this.walletImageUrl=h.getAccountData()?.connectedWalletInfo?.icon}firstUpdated(){const t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return u`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,n){t.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Wl.styles=F5;Wl=z5([M("w3m-siwx-sign-message-thumbnails")],Wl);var vd=function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ec=class extends U{constructor(){super(...arguments),this.dappName=$.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return u`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await yn.requestSignMessage()}catch(t){if(t instanceof Error&&t.message.includes("OTP is required")){$e.showError({message:"Something went wrong. We need to verify your account again."}),T.replace("DataCapture");return}throw t}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await yn.cancelSignMessage().finally(()=>this.isCancelling=!1)}};vd([_()],ec.prototype,"isCancelling",void 0);vd([_()],ec.prototype,"isSigning",void 0);ec=vd([M("w3m-siwx-sign-message-view")],ec);cc({tagName:"appkit-button",elementClass:Al,react:tc});cc({tagName:"appkit-network-button",elementClass:Tl,react:tc});cc({tagName:"appkit-connect-button",elementClass:Sl,react:tc});cc({tagName:"appkit-account-button",elementClass:xl,react:tc});export{Ro as $,jo as A,Be as B,Oo as C,Mo as D,zl as E,Qh as F,Ao as G,go as H,Bh as I,_o as J,$o as K,Mi as L,xo as M,rf as N,Ir as O,Eo as P,Io as Q,xp as R,vp as S,lf as T,tv as U,Mt as V,To as W,No as X,kt as Y,Po as Z,Di as _,vv as a,M as a$,Uo as a0,pf as a1,Do as a2,Lo as a3,ko as a4,wo as a5,N1 as a6,yp as a7,Ji as a8,zh as a9,iv as aA,h as aB,D as aC,j as aD,P as aE,J as aF,z as aG,Iv as aH,Fo as aI,hn as aJ,He as aK,T as aL,$e as aM,te as aN,rt as aO,De as aP,xe as aQ,tw as aR,Qp as aS,Xl as aT,Ie as aU,Ta as aV,at as aW,ne as aX,me as aY,We as aZ,m as a_,Fh as aa,_d as ab,ra as ac,Jh as ad,Y5 as ae,J5 as af,X5 as ag,Gh as ah,jl as ai,Zh as aj,Yh as ak,Z5 as al,Vh as am,Cp as an,Ep as ao,_p as ap,G5 as aq,b1 as ar,_1 as as,Mr as at,pa as au,Fl as av,st as aw,Ho as ax,Qf as ay,Jf as az,Q5 as b,Hw as b$,U as b0,u as b1,Os as b2,Ze as b3,Ps as b4,ze as b5,Fe as b6,X as b7,ge as b8,Hl as b9,Tn as bA,Ht as bB,yn as bC,$v as bD,g1 as bE,bv as bF,mv as bG,wv as bH,gv as bI,df as bJ,yv as bK,ov as bL,sv as bM,Sw as bN,ow as bO,av as bP,zd as bQ,u1 as bR,Ev as bS,_v as bT,i1 as bU,c1 as bV,s1 as bW,Cv as bX,xv as bY,Vf as bZ,Av as b_,je as ba,Or as bb,_ as bc,fv as bd,Cn as be,tt as bf,$ as bg,le as bh,ue as bi,Ce as bj,gt as bk,Z as bl,c2 as bm,h1 as bn,Br as bo,mo as bp,u2 as bq,sn as br,ew as bs,Ff as bt,ha as bu,Pi as bv,zf as bw,nt as bx,$a as by,Ne as bz,Kp as c,En as c0,Q1 as c1,th as c2,bt as c3,Rf as c4,yu as c5,Rv as c6,Pr as c7,Vn as c8,Ys as c9,Ka as cA,er as cB,Ya as cC,Ja as cD,hp as cE,fp as cF,mp as cG,Xa as cH,fs as cI,ui as cJ,Qa as cK,gp as cL,ms as cM,Bl as cN,ec as cO,kv as ca,l2 as cb,iw as cc,yr as cd,nv as ce,K5 as cf,w1 as cg,qp as ch,y1 as ci,Au as cj,xl as ck,Su as cl,Al as cm,Tu as cn,Sl as co,Nu as cp,Tl as cq,ls as cr,cs,un as ct,Pl as cu,vt as cv,ii as cw,ja as cx,Rt as cy,Ou as cz,q5 as d,Vs as e,Zd as f,Xh as g,Zs as h,V5 as i,Wh as j,jh as k,ef as l,hv as m,of as n,sf as o,af as p,tf as q,nf as r,S1 as s,cf as t,Ad as u,Wo as v,ev as w,Bo as x,Li as y,So as z};
