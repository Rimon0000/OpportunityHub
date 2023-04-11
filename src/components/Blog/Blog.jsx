import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='question-container'>
            <h1 className='p-7 text-center '>Blog Questions</h1>
          <div className='question'>
            <h4 className='font-bold'>Question 1: When should you use context API?</h4>
            <p><span className='font-medium'>Answer:</span> <br />
               The React Context API is used for managing state that needs to be shared across multiple components in a React application. 
               It provides a way to pass data down the component tree without having to pass props manually at every level.  <br />
               Should use the Context API when: <br />
               1. Multiple components need to access the same data or functionality: 
               If you have multiple components that need access to the same data or functionality, 
               using the Context API can help avoid prop drilling and make your code more maintainable. <br />
               
               2. Data needs to be shared between sibling components: 
               If you have sibling components that need to communicate with each other, 
               you can use the Context API to pass data between them. <br />
            </p> 
          </div>
          <div className='question'>
            <h4 className='font-bold'>Question 2: What is a custom hook?</h4>
            <p><span className='font-medium'>Answer:</span> <br />
            In React, a custom hook is a JavaScript function that allows you to extract and reuse logic across different components. 
            A custom hook starts with the word "use" and usually contains one or more built-in hooks, such as useState, useEffect, useContext, and useRef. <br />
            </p> 
          </div>
          <div className='question'>
            <h4 className='font-bold'>Question 3: What is useRef?</h4>
            <p><span className='font-medium'>Answer:</span> <br />
            useRef is a hook that allows you to create a mutable reference that persists across renders. 
            It returns a single value, called a "ref object", that can hold any value, 
            similar to an instance property in a class component. <br />
            
            The useRef hook is commonly used for accessing or manipulating the properties of DOM elements, 
            but it can also be used for other mutable values that need to persist across renders, 
            such as the previous value of a prop or state. <br />
            </p> 
          </div>
          <div className='question'>
            <h4 className='font-bold'>Question 4: What is useMemo?</h4>
            <p><span className='font-medium'>Answer:</span> <br />
            useMemo is a hook provided by React that helps optimize the performance of functional components by memoizing the result of a function call, 
            and only recomputing that result if one or more of its dependencies have changed.
            </p> 
          </div>
        </div>
    );
};

export default Blog;