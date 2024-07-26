"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[409],{1702:(e,r,d)=>{d.r(r),d.d(r,{DatasetHeader:()=>j,LeaderboardContainer:()=>h,LeaderboardTable:()=>a,SpacerColumn:()=>f,SpacerColumnDatasetHeader:()=>u,SpacerColumnHeader:()=>g,TableCell:()=>b,TableHeader:()=>p,TableRow:()=>t,assets:()=>o,contentTitle:()=>c,default:()=>k,frontMatter:()=>n,metadata:()=>x,toc:()=>A});var s=d(4848),l=d(8453),i=(d(6540),d(3540));const n={sidebar_position:1},c="Leaderboard",x={id:"leaderboard",title:"Leaderboard",description:");",source:"@site/docs/leaderboard.mdx",sourceDirName:".",slug:"/leaderboard",permalink:"/docs/leaderboard",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Explore R2ATA",permalink:"/docs/intro"}},o={},h=i.Ay.div`
  display: flex;
  justify-content: center;
  width: 150%;
  padding: 0;
`,a=i.Ay.table`
  width: 150%;
  border-collapse: collapse;
  font-size: 18px;
  text-align: center;
  border: none;
  border-spacing: 0 10px; /* Space between rows */
`,j=i.Ay.th`
  background-color: #f2f2f2;
  text-align: center;
  padding: 5px 15px; /* Increased padding */
  border-bottom: 1px solid #dddddd;
  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  color: black;
`,t=i.Ay.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`,p=i.Ay.th`
  background-color: #4A90E2; 
  color: white;
  padding: 5px 12px; /* Increased padding */
  border-bottom: 1px solid #dddddd;
  border-left: 1px solid #4A90E2;
  border-right: 1px solid #4A90E2;
`,b=i.Ay.td`
  padding: 5px 12px; /* Increased padding */
  border-bottom: 1px solid #dddddd;
  border-left: 1px solid white;
  border-right: 1px solid white;
  background-color: white;
`,f=i.Ay.td`
  padding: 0 30px; /* Increased space between columns */
  border-bottom: 1px solid #dddddd; /* No border for the spacer */
  border-left: 1px solid white;
  border-right: 1px solid white;
  background-color: white;
`,g=i.Ay.td`
  padding: 0 30px; /* Increased space for the header spacer */
  border-bottom: none; /* No border for the spacer */
  border-left: 1px solid #4A90E2;
  border-right: 1px solid #4A90E2;
  background-color: #4A90E2;
`,u=i.Ay.td`
  padding: 0 30px; /* Increased space for dataset header spacer */
  border-bottom: none; /* No border for the spacer */
  border-left: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  background-color: #f2f2f2;
`,m=()=>{const e={a:"a",tbody:"tbody",thead:"thead",...(0,l.R)()};return(0,s.jsx)(h,{children:(0,s.jsxs)(a,{children:[(0,s.jsxs)(e.thead,{children:[(0,s.jsxs)(t,{children:[(0,s.jsx)(j,{colSpan:"1",children:"Dataset"}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(j,{colSpan:"3",children:"BBH"}),(0,s.jsx)(u,{}),(0,s.jsx)(j,{colSpan:"3",children:"GSM8K"}),(0,s.jsx)(u,{}),(0,s.jsx)(j,{colSpan:"3",children:"MMLU"})]}),(0,s.jsxs)(t,{children:[(0,s.jsx)(p,{children:"Rank"}),(0,s.jsx)(p,{children:"Model (#Params)"}),(0,s.jsx)(p,{children:"Average Relative Drop (%)"}),(0,s.jsx)(g,{}),(0,s.jsx)(p,{children:"Original"}),(0,s.jsx)(p,{children:"Attacked"}),(0,s.jsx)(p,{children:"Relative Drop (%)"}),(0,s.jsx)(g,{}),(0,s.jsx)(p,{children:"Original"}),(0,s.jsx)(p,{children:"Attacked"}),(0,s.jsx)(p,{children:"Relative Drop (%)"}),(0,s.jsx)(g,{}),(0,s.jsx)(p,{children:"Original"}),(0,s.jsx)(p,{children:"Attacked"}),(0,s.jsx)(p,{children:"Relative Drop (%)"})]})]}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(t,{children:[(0,s.jsx)(b,{children:"1"}),(0,s.jsx)(b,{children:(0,s.jsx)(e.a,{href:"https://mistral.ai/news/mixtral-of-experts/",children:"Mistral-8X7B (47B)"})}),(0,s.jsx)(b,{children:"11.9%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"65.6"}),(0,s.jsx)(b,{children:"58.3 (\u21937.3)"}),(0,s.jsx)(b,{children:"11.1%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"68.5"}),(0,s.jsx)(b,{children:"57.9 (\u219310.6)"}),(0,s.jsx)(b,{children:"15.5%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"68.4"}),(0,s.jsx)(b,{children:"62.1 (\u21936.3)"}),(0,s.jsx)(b,{children:"9.2%"})]}),(0,s.jsxs)(t,{children:[(0,s.jsx)(b,{children:"2"}),(0,s.jsx)(b,{children:(0,s.jsx)(e.a,{href:"https://lmsys.org/blog/2023-03-30-vicuna/",children:"Vicuna-13b (13B)"})}),(0,s.jsx)(b,{children:"17.2%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"51.2"}),(0,s.jsx)(b,{children:"40.8 (\u219310.4)"}),(0,s.jsx)(b,{children:"20.4%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"33.4"}),(0,s.jsx)(b,{children:"26.2 (\u21937.2)"}),(0,s.jsx)(b,{children:"21.6%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"53.4"}),(0,s.jsx)(b,{children:"48.2 (\u21935.2)"}),(0,s.jsx)(b,{children:"9.7%"})]}),(0,s.jsxs)(t,{children:[(0,s.jsx)(b,{children:"3"}),(0,s.jsx)(b,{children:(0,s.jsx)(e.a,{href:"https://blog.google/technology/developers/gemma-open-models/",children:"Gemma-7b (8.5B)"})}),(0,s.jsx)(b,{children:"19.1%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"42.4"}),(0,s.jsx)(b,{children:"33.5 (\u21938.9)"}),(0,s.jsx)(b,{children:"21.0%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"39.9"}),(0,s.jsx)(b,{children:"29.8 (\u219310.1)"}),(0,s.jsx)(b,{children:"25.3%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"53.5"}),(0,s.jsx)(b,{children:"47.6 (\u21935.9)"}),(0,s.jsx)(b,{children:"11.0%"})]}),(0,s.jsxs)(t,{children:[(0,s.jsx)(b,{children:"4"}),(0,s.jsx)(b,{children:(0,s.jsx)(e.a,{href:"https://lmsys.org/blog/2023-03-30-vicuna/",children:"Vicuna-33b (33B)"})}),(0,s.jsx)(b,{children:"20.9%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"52.1"}),(0,s.jsx)(b,{children:"42.5 (\u21939.6)"}),(0,s.jsx)(b,{children:"18.5%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"38.2"}),(0,s.jsx)(b,{children:"26.4 (\u219311.8)"}),(0,s.jsx)(b,{children:"30.9%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"59.2"}),(0,s.jsx)(b,{children:"51.4 (\u21937.8)"}),(0,s.jsx)(b,{children:"13.2%"})]}),(0,s.jsxs)(t,{children:[(0,s.jsx)(b,{children:"5"}),(0,s.jsx)(b,{children:(0,s.jsx)(e.a,{href:"https://mistral.ai/news/announcing-mistral-7b/",children:"Mistral-7b (7.2B)"})}),(0,s.jsx)(b,{children:"25.9%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"50.0"}),(0,s.jsx)(b,{children:"39.1 (\u219310.9)"}),(0,s.jsx)(b,{children:"21.8%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"43.7"}),(0,s.jsx)(b,{children:"27.1 (\u219316.6)"}),(0,s.jsx)(b,{children:"38.0%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"54.6"}),(0,s.jsx)(b,{children:"44.8 (\u21939.8)"}),(0,s.jsx)(b,{children:"17.9%"})]}),(0,s.jsxs)(t,{children:[(0,s.jsx)(b,{children:"6"}),(0,s.jsx)(b,{children:(0,s.jsx)(e.a,{href:"https://llama.meta.com/",children:"Llama2-7b (6.7B)"})}),(0,s.jsx)(b,{children:"29.6%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"35.7"}),(0,s.jsx)(b,{children:"26.8 (\u21938.9)"}),(0,s.jsx)(b,{children:"24.9%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"27.3"}),(0,s.jsx)(b,{children:"14.7 (\u219312.6)"}),(0,s.jsx)(b,{children:"46.2%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"35.1"}),(0,s.jsx)(b,{children:"28.9 (\u21936.2)"}),(0,s.jsx)(b,{children:"17.7%"})]}),(0,s.jsxs)(t,{children:[(0,s.jsx)(b,{children:"7"}),(0,s.jsx)(b,{children:(0,s.jsx)(e.a,{href:"https://blog.google/technology/developers/gemma-open-models/",children:"Gemma-2b (2.5B)"})}),(0,s.jsx)(b,{children:"34.7%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"29.6"}),(0,s.jsx)(b,{children:"20.2 (\u21939.4)"}),(0,s.jsx)(b,{children:"31.8%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"15.1"}),(0,s.jsx)(b,{children:"7.1 (\u21938.0)"}),(0,s.jsx)(b,{children:"53.0%"}),(0,s.jsx)(f,{}),(0,s.jsx)(b,{children:"34.1"}),(0,s.jsx)(b,{children:"27.5 (\u21936.6)"}),(0,s.jsx)(b,{children:"19.4%"})]})]})]})})},A=[];function y(e){const r={h1:"h1",...(0,l.R)(),...e.components};return(0,s.jsx)(r.h1,{id:"leaderboard",children:"Leaderboard"})}function k(e={}){return(0,s.jsx)(m,{...e,children:(0,s.jsx)(y,{...e})})}}}]);