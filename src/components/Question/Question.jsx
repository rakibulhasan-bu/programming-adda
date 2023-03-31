import React from "react";

const Question = () => {
  return (
    <div className="mx-auto w-11/12 py-8 lg:w-4/5">
      <div className="border-1 rounded-md border border-solid border-indigo-600 bg-indigo-100 bg-opacity-50 py-4 text-center text-3xl font-semibold text-indigo-600 ">
        <h1>Some important Query</h1>
      </div>

      <div className="mt-4 rounded-md bg-gray-700 bg-opacity-10 px-2 py-4 font-semibold md:px-6 md:py-8">
        {/* question one  */}
        <h1 className="text-xl font-semibold md:text-2xl">
          01. What is difference between props vs state ?
        </h1>
        <p className="mb-4 mt-2 rounded-md bg-white px-3 py-2 font-semibold">
          Props are data or instruction that passing information via a
          component. By props any kind of information like "String", "Boolean",
          "Object", "Array" or any data such as any product full data are passed
          via properties. State are the things that are describe that how data
          are contain when change data then state are change , so we called that
          state value are changeable or mutable but props value are immutable.
        </p>
        {/* question two  */}
        <h1 className="mt-6 text-xl font-semibold md:text-2xl">
          02. How does useState work ?
        </h1>
        <p className="mb-4 mt-2 rounded-md bg-white px-3 py-2 font-semibold">
          useState is the very important hook in react. Without these hook or
          function these react are complicated so these hook helps us to set
          state very easily . In useState function this are function that are
          set state and when use or where use it that are benefit that DOM are
          don't update manually that's are update useState.
        </p>
        {/* question three  */}
        <h1 className="mt-6 text-xl font-semibold md:text-2xl">
          03. What is the purpose of useEffect other than fetching data ?
        </h1>
        <p className="mb-4 mt-2 rounded-md bg-white px-3 py-2 font-semibold">
          when we affect outside the react state of data then we use
          useEffect.These hooks are mainly used for fetch data from an API, it
          can use in various ways such as- updating document title , event
          listener handle ,animations , updating states and etc . useEffect are
          take second parameter as dependency's , generally here put an empty
          array ,when give empty array then it render in one time but in
          dependency's give an parameter inside array then useEffect are render
          if these parameter are changes .
        </p>
        {/* question four  */}
        <h1 className="mt-6 text-xl font-semibold md:text-2xl">
          04. How Does React work ?
        </h1>
        <p className="mb-4 mt-2 rounded-md bg-white px-3 py-2 font-semibold">
          React is a popular JavaScript library used for building user
          interfaces.It is component based library that are easily handle user
          states. When react component rendered then react create a virtual DOM
          ,that are replace actual DOM , when state are change then diff
          algorithm are detect that in virtual DOM tree where changes and then
          make changes the actual DOM .
        </p>
      </div>
    </div>
  );
};

export default Question;
