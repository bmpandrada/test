import img1 from '../components/imgs/useSTate.png'


export const navLinks = [
    {id:1, links:'/', title:'Home'},
    {id:2, links:'/UseStates', title:'useState', submenu: [
        { links:'/UseSFundmental', titleSub: `UseFunda mental`},
        { links:'/RenderRender', titleSub: `RenderRender`}
    ] },
    {id:3, links:'/UseEffects', title:'UseEffect', submenu: [
        { links:'/UseSFundmental', titleSub: `UseFunda mental`},
        { links:'/RenderRender', titleSub: `RenderRender`}
    ] },
    {id:4, links:'/UseRefs', title:'UseRef', submenu: [
        { links:'/UseSFundmental', titleSub: `UseFunda mental`},
        { links:'/RenderRender', titleSub: `RenderRender`}
    ] },
    {id:5, links:'/Form', title:'Form', submenu: [
        { links:'/UseSFundmental', titleSub: `UseFunda mental`},
        { links:'/RenderRender', titleSub: `RenderRender`}
    ] },
]



export const homeData = [
    {id:1, link:'https://react.dev/learn' },
  
]
 
export const lectureOne = [
    {id:1, img:img1, text:'useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.',}
]
