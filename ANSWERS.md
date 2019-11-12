- [ ] Why would you use class component over function components (removing hooks from the question)?
      A. Removing hooks from the equation, you would need to use a class component if you needed state in your component. Without hooks, you’d either need a class component or move the state up to the parent component and pass state down via props to the functional component.

- [ ] Name three lifecycle methods and their purposes.
      A. componentDidMount - This is called after the component renders for the first time. This is where you can load any data you want to set as state.
      B. componentDidUpdate - This method is called after a component’s state updates. We have access to prevState and prevProps. You can control what happens by adding a conditional statement that compares prevState to current state and execute code based on this.
      C. componentWillUnmount - This method is called when the component dies/disappears from the screen. This is where you would do any clean-up of items associated directly with the component such as cleaning up event-listeners.

- [ ] What is the purpose of a custom hook?
      A. Custom hooks allow us to apply non-visual behavior and stateful logic throughout our components by reusing the same hook over and over again. This allows us to keep our code “DRY”.
- [ ] Why is it important to test our apps?
      A. Testing our apps is very important so we can mitigate any bugs creeping up unnoticed, especially while working with a group.
