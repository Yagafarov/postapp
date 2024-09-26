"use strict";(self.webpackChunkstrapi_1=self.webpackChunkstrapi_1||[]).push([[7809],{27809:(Y,L,s)=>{s.d(L,{ProtectedEditPage:()=>J});var t=s(92132),I=s(21272),i=s(94061),M=s(83997),m=s(30893),h=s(85963),B=s(90151),A=s(68074),R=s(7537),g=s(5287),T=s(38413),U=s(55356),W=s(4198),c=s(21610),o=s(2129),K=s(46270),f=s(61535),p=s(54894),j=s(17703),Q=s(71389),x=s(12083),e=s(36321),$=s(22833),G=s(0),ns=s(15126),Es=s(63299),is=s(67014),rs=s(59080),ds=s(79275),es=s(14718),ls=s(82437),Ms=s(5790),Ps=s(35223),Ds=s(5409),Os=s(74930),ms=s(2600),hs=s(48940),As=s(41286),Rs=s(56336),gs=s(13426),Cs=s(84624),vs=s(77965),Ls=s(54257),Is=s(71210),Bs=s(51187),Ts=s(39404),Us=s(58692),Ws=s(501),cs=s(57646),Ks=s(23120),fs=s(44414),js=s(25962),xs=s(14664),us=s(42588),ys=s(90325),ps=s(62785),Ss=s(87443),Ns=s(41032),Fs=s(22957),zs=s(93179),Vs=s(73055),Ys=s(15747),Qs=s(85306),$s=s(26509),Gs=s(32058),Hs=s(81185),Xs=s(82261),Zs=s(412),Js=s(94710);const H=({disabled:n,role:_,values:D,errors:a,onChange:r,onBlur:C})=>{const{formatMessage:E}=(0,p.A)();return(0,t.jsx)(i.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(M.s,{justifyContent:"space-between",children:[(0,t.jsxs)(i.a,{children:[(0,t.jsx)(i.a,{children:(0,t.jsx)(m.o,{fontWeight:"bold",children:_?_.name:E({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(i.a,{children:(0,t.jsx)(m.o,{textColor:"neutral500",variant:"pi",children:_?_.description:E({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.$,{disabled:!0,variant:"secondary",children:E({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:_.usersCount})})]}),(0,t.jsxs)(B.x,{gap:4,children:[(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(R.k,{disabled:n,name:"name",error:a.name&&E({id:a.name}),label:E({id:"global.name",defaultMessage:"Name"}),onChange:r,onBlur:C,required:!0,value:D.name||""})}),(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(g.T,{disabled:n,label:E({id:"global.description",defaultMessage:"Description"}),id:"description",error:a.name&&E({id:a.name}),onChange:r,onBlur:C,children:D.description||""})})]})]})})},X=x.Ik().shape({name:x.Yj().required(o.iW.required),description:x.Yj().optional()}),Z=()=>{const n=(0,o.hN)(),{formatMessage:_}=(0,p.A)(),a=(0,j.W5)("/settings/roles/:id")?.params.id,r=I.useRef(null),{lockApp:C,unlockApp:E}=(0,o.MA)(),{trackUsage:b}=(0,o.z1)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:N}=(0,o.wq)(),{isLoading:k,data:F}=(0,e.A)({role:a??""}),{roles:w,isLoading:z,refetch:q}=(0,$.u)({id:a},{refetchOnMountOrArgChange:!0}),P=w[0]??{},{data:ss,isLoading:ts}=(0,e.B)({id:a},{skip:!a,refetchOnMountOrArgChange:!0}),[as]=(0,e.G)(),[_s]=(0,e.E)();if(!a)return(0,t.jsx)(j.rd,{to:"/settings/roles"});const os=async(u,v)=>{try{C();const{permissionsToSend:O,didUpdateConditions:y}=r.current?.getPermissions()??{},d=await as({id:a,...u});if("error"in d){(0,e.x)(d.error)&&d.error.name==="ValidationError"?v.setErrors(N(d.error)):n({type:"warning",message:S(d.error)});return}if(P.code!=="strapi-super-admin"&&O){const l=await _s({id:d.data.id,permissions:O});if("error"in l){(0,e.x)(l.error)&&l.error.name==="ValidationError"?v.setErrors(N(l.error)):n({type:"warning",message:S(l.error)});return}y&&b("didUpdateConditions")}r.current?.setFormAfterSubmit(),await q(),n({type:"success",message:{id:"notification.success.saved"}})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{E()}},V=!z&&P.code==="strapi-super-admin";return(0,t.jsxs)(T.g,{children:[(0,t.jsx)(o.x7,{name:"Roles"}),(0,t.jsx)(f.l1,{enableReinitialize:!0,initialValues:{name:P.name??"",description:P.description??""},onSubmit:os,validationSchema:X,validateOnChange:!1,children:({handleSubmit:u,values:v,errors:O,handleChange:y,handleBlur:d,isSubmitting:l})=>(0,t.jsxs)("form",{onSubmit:u,children:[(0,t.jsx)(U.Q,{primaryAction:(0,t.jsx)(M.s,{gap:2,children:(0,t.jsx)(h.$,{type:"submit",disabled:P.code==="strapi-super-admin",loading:l,size:"L",children:_({id:"global.save",defaultMessage:"Save"})})}),title:_({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:_({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(c.N,{as:Q.k2,startIcon:(0,t.jsx)(K.A,{}),to:"/settings/roles",children:_({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(W.s,{children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(H,{disabled:V,errors:O,values:v,onChange:y,onBlur:d,role:P}),!k&&!z&&!ts&&F?(0,t.jsx)(i.a,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(G.P,{isFormDisabled:V,permissions:ss,ref:r,layout:F})}):(0,t.jsx)(i.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.Bl,{})})]})})]})})]})},J=()=>{const n=(0,e.j)(r=>r.admin_app.permissions.settings?.roles),{isLoading:_,allowedActions:{canRead:D,canUpdate:a}}=(0,o.ec)(n);return _?(0,t.jsx)(o.Bl,{}):!D&&!a?(0,t.jsx)(j.rd,{to:"/"}):(0,t.jsx)(Z,{})}},22833:(Y,L,s)=>{s.d(L,{u:()=>m});var t=s(21272),I=s(2129),i=s(54894),M=s(36321);const m=(h={},B)=>{const{locale:A}=(0,i.A)(),R=(0,I.QM)(A,{sensitivity:"base"}),{data:g,error:T,isError:U,isLoading:W,refetch:c}=(0,M.z)(h,B);return{roles:t.useMemo(()=>[...g??[]].sort((K,f)=>R.compare(K.name,f.name)),[g,R]),error:T,isError:U,isLoading:W,refetch:c}}}}]);
