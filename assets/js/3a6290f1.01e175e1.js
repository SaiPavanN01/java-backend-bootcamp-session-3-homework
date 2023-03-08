"use strict";(self.webpackChunkjavabrains_bootcamp=self.webpackChunkjavabrains_bootcamp||[]).push([[42],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(k,i(i({ref:a},c),{},{components:t})):r.createElement(k,i({ref:a},c))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const o={},i="Java Operators",l={unversionedId:"java-backend-bootcamp/java-basics/java-operators",id:"java-backend-bootcamp/java-basics/java-operators",title:"Java Operators",description:"Java has a variety of operators that can be used to perform operations on variables and values. These operators can be grouped into three main categories:",source:"@site/docs/java-backend-bootcamp/java-basics/java-operators.md",sourceDirName:"java-backend-bootcamp/java-basics",slug:"/java-backend-bootcamp/java-basics/java-operators",permalink:"/java-backend-bootcamp/docs/java-backend-bootcamp/java-basics/java-operators",draft:!1,editUrl:"https://github.com/koushikkothagal/java-backend-bootcamp/tree/main/website/docs/java-backend-bootcamp/java-basics/java-operators.md",tags:[],version:"current",frontMatter:{},sidebar:"javaBackendBootcamp",previous:{title:"Java Basic Data Types",permalink:"/java-backend-bootcamp/docs/java-backend-bootcamp/java-basics/basic-data-types"},next:{title:"Arrays in Java",permalink:"/java-backend-bootcamp/docs/java-backend-bootcamp/java-basics/arrays"}},s={},p=[{value:"Arithmetic Operators",id:"arithmetic-operators",level:2},{value:"Relational Operators",id:"relational-operators",level:2},{value:"Logical Operators",id:"logical-operators",level:2},{value:"Ternary operator",id:"ternary-operator",level:2}],c={toc:p};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"java-operators"},"Java Operators"),(0,n.kt)("p",null,"Java has a variety of operators that can be used to perform operations on variables and values. These operators can be grouped into three main categories:"),(0,n.kt)("h2",{id:"arithmetic-operators"},"Arithmetic Operators"),(0,n.kt)("p",null,"These operators are used to perform mathematical operations on numeric values. The basic arithmetic operators include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Addition (",(0,n.kt)("inlineCode",{parentName:"li"},"+"),")"),(0,n.kt)("li",{parentName:"ul"},"Subtraction (",(0,n.kt)("inlineCode",{parentName:"li"},"-"),")"),(0,n.kt)("li",{parentName:"ul"},"Multiplication (",(0,n.kt)("inlineCode",{parentName:"li"},"*"),")"),(0,n.kt)("li",{parentName:"ul"},"Division (",(0,n.kt)("inlineCode",{parentName:"li"},"/"),")"),(0,n.kt)("li",{parentName:"ul"},"Modulus (",(0,n.kt)("inlineCode",{parentName:"li"},"%"),"), which returns the remainder of a division operation"),(0,n.kt)("li",{parentName:"ul"},"Increment (",(0,n.kt)("inlineCode",{parentName:"li"},"++"),")"),(0,n.kt)("li",{parentName:"ul"},"Decrement (",(0,n.kt)("inlineCode",{parentName:"li"},"--"),")")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int x = 5;\nint y = 10;\nint result = x + y; // result is 15\nint remainder = x % y; // remainder is 5\nx++; // x is now 6\ny--; // y is now 9\n")),(0,n.kt)("h2",{id:"relational-operators"},"Relational Operators"),(0,n.kt)("p",null,"These operators are used to compare values and determine their relationship. The relational operators include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Equal to (",(0,n.kt)("inlineCode",{parentName:"li"},"=="),")"),(0,n.kt)("li",{parentName:"ul"},"Not equal to (",(0,n.kt)("inlineCode",{parentName:"li"},"!="),")"),(0,n.kt)("li",{parentName:"ul"},"Greater than (",(0,n.kt)("inlineCode",{parentName:"li"},">"),")"),(0,n.kt)("li",{parentName:"ul"},"Less than (",(0,n.kt)("inlineCode",{parentName:"li"},"<"),")"),(0,n.kt)("li",{parentName:"ul"},"Greater than or equal to (",(0,n.kt)("inlineCode",{parentName:"li"},">="),")"),(0,n.kt)("li",{parentName:"ul"},"Less than or equal to (",(0,n.kt)("inlineCode",{parentName:"li"},"<="),")")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int x = 5;\nint y = 10;\nboolean isEqual = x == y; // isEqual is false\nboolean isGreater = x > y; // isGreater is false\n")),(0,n.kt)("h2",{id:"logical-operators"},"Logical Operators"),(0,n.kt)("p",null,"These operators are used to combine multiple relational expressions and determine the logic between them. The logical operators include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Logical AND (",(0,n.kt)("inlineCode",{parentName:"li"},"&&"),")"),(0,n.kt)("li",{parentName:"ul"},"Logical OR (",(0,n.kt)("inlineCode",{parentName:"li"},"||"),")"),(0,n.kt)("li",{parentName:"ul"},"Logical NOT (",(0,n.kt)("inlineCode",{parentName:"li"},"!"),")")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int x = 5;\nint y = 10;\nboolean isTrue = x < y && x > 0; // isTrue is true\nboolean isFalse = x > y || x < 0; // isFalse is false\nboolean isNotTrue = !(x < y); // isNotTrue is false\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The precedence of operators in Java follows the standard order of operations, also known as PEMDAS (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction). Operators with higher precedence are evaluated first. Parentheses can be used to change the order of operations.")),(0,n.kt)("p",null,"In addition to these basic operators, Java also has several other operators such as the ternary operator ( ",(0,n.kt)("inlineCode",{parentName:"p"},"? :")," ), the ",(0,n.kt)("inlineCode",{parentName:"p"},"instanceof")," operator, and the operator(s) for bit manipulation."),(0,n.kt)("p",null,"In summary, operators in Java are used to perform operations on variables and values. These operators can be grouped into three main categories: arithmetic, relational, and logical operators. It's important to understand the different operators and their usage, as well as their precedence in order to write accurate and efficient code."),(0,n.kt)("h2",{id:"ternary-operator"},"Ternary operator"),(0,n.kt)("p",null,"Ternary operator ( ",(0,n.kt)("inlineCode",{parentName:"p"},"? :")," ) is a shorthand way of writing an ",(0,n.kt)("inlineCode",{parentName:"p"},"if"),"-",(0,n.kt)("inlineCode",{parentName:"p"},"else")," statement. It is also called the conditional operator."),(0,n.kt)("p",null,"The syntax for the ternary operator is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"variable = (condition) ? value-if-true : value-if-false;\n")),(0,n.kt)("p",null,"It works by evaluating the condition, if the condition is true, the operator returns the value before the colon (",(0,n.kt)("inlineCode",{parentName:"p"},":"),"), otherwise, it returns the value after the colon."),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"int x = 5;\nint y = 10;\nint min;\nmin = (x < y) ? x : y; // min is 5\n")),(0,n.kt)("p",null,"In this example, the condition (",(0,n.kt)("inlineCode",{parentName:"p"},"x < y"),") is evaluated as true, so the operator returns the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"x"),", which is 5. So the variable ",(0,n.kt)("inlineCode",{parentName:"p"},"min")," is assigned the value 5."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ternary operator is an expression, not a statement, which means it returns a value, and this value can be used in further operations.")),(0,n.kt)("p",null,"In summary, the ternary operator ( ",(0,n.kt)("inlineCode",{parentName:"p"},"? :")," ) is a shorthand way of writing an if-else statement. It evaluates the condition and returns a value based on the result, making the code more concise and readable. It's important to understand the syntax and usage of the ternary operator to write efficient and effective code."))}u.isMDXComponent=!0}}]);