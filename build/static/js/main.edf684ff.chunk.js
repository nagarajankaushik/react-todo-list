(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{20:function(e,t,o){},36:function(e,t,o){e.exports=o(65)},65:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(32),l=o.n(r),c=o(18),i=o(7),d=o(8),s=o(10),p=o(9),u=o(13),m=o(1);o(20);function h(){return a.a.createElement("div",{style:{padding:"10px"}},a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is Kaushik's TodoList app v1.0.0. Coded through traversyMedia's online ReactJS crash course"))}function b(){return a.a.createElement("header",{style:g},a.a.createElement("h1",null,"Kaushik's TodoList"),a.a.createElement(u.b,{style:f,to:"/"},"Home")," |",a.a.createElement(u.b,{style:f,to:"/about"}," About"))}var f={color:"#fff",textDecoration:"none"},g={textAlign:"center",background:"#2b2b2b",color:"white",padding:"10px"},y=function(e){Object(s.a)(o,e);var t=Object(p.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(d.a)(o,[{key:"getStyle",value:function(){return{background:"#f4f4f4",padding:"10px",margin:"5px",textDecoration:this.props.todo.completed?"line-through":"none",borderRadius:"1px",left:"10px",boxShadow:"5px 5px 10px #b7b7b7,   -5px -5px 10px #ffffff"}}},{key:"render",value:function(){var e=this.props.todo,t=e.title,o=e.id,n=e.completed;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,o),defaultChecked:n})," ",t,a.a.createElement("button",{style:v,onClick:this.props.deleteIn.bind(this,o)},"x")))}}]),o}(n.Component),v={float:"right",background:"#2b2b2b",borderRadius:"50%",border:"none",padding:"5px 9px",cursor:"pointer",color:"white"},x=function(e){Object(s.a)(o,e);var t=Object(p.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return a.a.createElement(y,{key:t.id,todo:t,toggleComplete:e.props.toggleCompleteTodos,deleteIn:e.props.deleteInTodos})}))}}]),o}(n.Component),E=o(34),j=function(e){Object(s.a)(o,e);var t=Object(p.a)(o);function o(){var e;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={title:""},e.addingTodo=function(t){return e.setState(Object(E.a)({},t.target.name,t.target.value))},e.submitTodo=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e}return Object(d.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{style:{display:"flex"},onSubmit:this.submitTodo},a.a.createElement("input",{type:"text",name:"title",placeholder:"Get what done?",autoComplete:"off",style:O,value:this.state.title,onChange:this.addingTodo}),a.a.createElement("input",{type:"submit",value:"Add Todo",className:"btn",style:k}))}}]),o}(n.Component),O={flex:"10",borderRadius:"1%",border:"none",padding:"5px 15px"},k={display:"inline-block",flex:"1",borderRadius:"1%",border:"none",padding:"5px 9px",cursor:"pointer",color:"white"},C=o(35),T=o.n(C),S=o(14),w=o.n(S),A=function(e){Object(s.a)(o,e);var t=Object(p.a)(o);function o(){var e;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:[]},e.toggleCompleteApp=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.deleteInApp=function(t){w.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(o){return e.setState({todos:Object(c.a)(e.state.todos.filter((function(e){return e.id!==t})))})}))},e.addNewTodo=function(t){w.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){var o={id:T.a.v4(),title:t.data.title,completed:t.data.completed};e.setState({todos:[].concat(Object(c.a)(e.state.todos),[o])})}))},e}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var e=this;w.a.get("https://jsonplaceholder.typicode.com/todos?_limit=4").then((function(t){return e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this;return a.a.createElement(u.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(b,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{addTodo:e.addNewTodo}),a.a.createElement(x,{todos:e.state.todos,toggleCompleteTodos:e.toggleCompleteApp,deleteInTodos:e.deleteInApp}))}}),a.a.createElement(m.a,{path:"/about",component:h}))))}}]),o}(n.Component);l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(A,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.edf684ff.chunk.js.map